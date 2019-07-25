<?php
namespace Spellabs\Portal\Rest\Entity\Leverage;

use Bitrix\Main\Loader;

Loader::includeModule('iblock');
/**
 * Трейт для изменения поведения сущности под библиотеку SP
 * Должен обеспечивать обработку подобных запросов:
 * ...?filter=ContentType eq 'Контентный тип каталога' (для выбора разделов ИБ)
 * ...items(IdРаздела)/folder/files... Запрос именно к элементам ИБ (как-бы к файлам)
 * Если каких-то особенных фильтров нет, то в выборке получается в куче 
 * как разделы-каталоги, так и элементы-файлы
 */
trait LibraryBehaviour
{
    /**
     * @var array У класса с этим трейтом будет свойство массив для хранения
     * возможных контентных типов
     */
    protected $contentTypes;
    protected $sectionFieldsCollection;
    
    // TODO: Нужно обеспечит селект без разделения на разделы-элементы, т.к. 
    // может быть запрос типа ...items(7)... и он, грубо говоря, ожидает раздел
    protected function select($arOrder, $arFilter, $arGroup, $arNav, $arSelect)
    {       
        $contentTypeFilter = '';
        array_walk_recursive(
            $arFilter, 
            function($value, $key) use (&$contentTypeFilter) {
                if ($key == 'ContentType') {
                    $contentTypeFilter = $value;
                }
            }
        );

        $entityToSelect = '';
        
        // перебираем контентные типы запрошенной библиотеки
        foreach ($this->contentTypes as $key => $contentType) {
            if ($contentType->getName() == $contentTypeFilter) {
                $entityToSelect = $contentType->getAppliesFor();
            }
        }
        
        // если запрошен контентный тип элементов
        if ($entityToSelect == 'ELEMENT') {
            return $this->selectElements($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        } elseif ($entityToSelect == 'SECTION') {
            // иначе, если запрошен контентный тип разделов
            return $this->selectSections($arOrder, $arFilter, $arNav, $arSelect);
        } else {
            // иначе, небыл запрошен конкретный контентный тип
            // подстроить фильтр под CIBlockSection::GetMixedList
            $arFilter['ID_1'] = $arFilter['ID_2'] = $arFilter['ID'];
            unset($arFilter['ID']);
            
            $result = \CIBlockSection::GetMixedList(
                $arOrder,
                $arFilter,
                false,
                $arSelect
            );
            
            // TODO: если получено несколько элементов?! оО
            // если есть элемент в результате
            if ($element = $result->GetNext()) {
                // вернем фильтр как было
                $arFilter['ID'] = $arFilter['ID_1'];
                unset($arFilter['ID_1']);
                unset($arFilter['ID_2']);
                
                // если полученный элемент - раздел
                if ($element['TYPE'] == 'S') {
                    // передаем управление в метод для выборки разделов
                    return $this->selectSections($arOrder, $arFilter, $arNav, $arSelect);
                } else {
                    // иначе - полученный элемент... элемент )))0)0)
                    // передаем управление в метод для выборки элементов
                    return $this->selectElements($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
                }
            }
        }
    }
    
    protected function selectElements($arOrder, $arFilter, $arGroup, $arNav, $arSelect)
    {
        $result = false;

        if (in_array('File', $this->getRequestParameters()->getExpand())) {
            $this
                ->getRequestParameters()
                ->appendSelect(['PROPERTY_SL_SERVER_RELATIVE_URL'])
            ;
        }
        
        /*var_dump($arOrder);
        var_dump($arFilter);
        var_dump($arGroup);
        var_dump($arNav);
        var_dump($arSelect);
        die();*/
        
        $resource = \CIBlockElement::GetList($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        
        if (in_array('count', $arSelect)) {
            $result = [$resource->SelectedRowsCount()];
        } else {
            $arElements = [];
        
            while($element = $resource->GetNext())
            {
                $this->placeExpandedValues($element);
                
                $element['Name'] = $element['~NAME'];
                
                $this->adaptResult($element);
                
                if (isset($element['SL_SERVER_RELATIVE_URL'])) {
                    $element['File']['ServerRelativeUrl'] = $element['SL_SERVER_RELATIVE_URL'];
                }
                
                $arElements[] = $element;
            }

            if (!isset($arFilter['ID']) || is_array($arFilter['ID'])) {
                $result = $arElements;
            } else {
                $result = $arElements[0];
            }
        }
        
        return $result;
    }
    
    protected function selectSections($arOrder, $arFilter, $arNav, $arSelect)
    {
        $result = false;
        
        $collectionForWalk = $this->sectionFieldsCollection->getFieldsByEntity('SECTION_FIELD');
        $sectionFieldsAssociations = [];
        
        foreach ($collectionForWalk as $fieldCode => $field) {
            $sectionFieldsAssociations[$field->getXmlId()] = $fieldCode;
        }
        
        if (count($sectionFieldsAssociations) > 0) {
            foreach ($arSelect as $key => $selectField) {
                if (in_array($selectField, array_keys($sectionFieldsAssociations))) {
                    $arSelect[$key] = $sectionFieldsAssociations[$selectField];
                }
            }
        }

//        var_dump($arOrder);
//        var_dump($arFilter);
//        var_dump($arNav);
//        var_dump($arSelect);
//        die();
        
        $resource = \CIBlockSection::GetList($arOrder, $arFilter, false, $arSelect, $arNav);
        
        if (in_array('count', $arSelect)) {
            $result = [$resource->SelectedRowsCount()];
        } else {
            $arElements = [];
        
            while($element = $resource->GetNext())
            {
                $this->placeExpandedValues($element);
                $this->adaptSectionResult($element);
                $arElements[] = $element;
            }

            if (!isset($arFilter['ID']) || is_array($arFilter['ID'])) {
                $result = $arElements;
            } else {
                $result = $arElements[0];
            }
        }

        return $result;
    }

    public function folderFiles()
    {
        $this
            ->getRequestParameters()
            ->replaceFilter('ID', 'SECTION_ID')
            ->appendFilter(['SECTION_GLOBAL_ACTIVE' => 'Y'])
        ;
        
        return $this->get();
    }
    
    protected function adaptSectionResult(&$arResult)
    {
        if (!empty($arResult['PREVIEW_PICTURE'])) {
            $arResult['PREVIEW_PICTURE'] = \CFile::GetPath($arResult['PREVIEW_PICTURE']);
        }
        
        if (!empty($arResult['DETAIL_PICTURE'])) {
            $arResult['DETAIL_PICTURE'] = \CFile::GetPath($arResult['DETAIL_PICTURE']);
        }
        
        if (!empty($arResult['NAME'])) {
            $arResult['NAME'] = $arResult['~NAME'];
        }
        
        if (!empty($arResult['PREVIEW_TEXT'])) {
            $arResult['PREVIEW_TEXT'] = $arResult['~PREVIEW_TEXT'];
        }
        
        if (!empty($arResult['DETAIL_TEXT'])) {
            $arResult['DETAIL_TEXT'] = $arResult['~DETAIL_TEXT'];
        }
        
        $collectionForWalk = $this->sectionFieldsCollection->getFieldsByEntity('SECTION_FIELD');
        $sectionFieldsAssociations = [];
        
        foreach ($collectionForWalk as $fieldCode => $field)
        {
            $sectionFieldsAssociations[$fieldCode] = $field->getXmlId();
        }
        
        foreach ($arResult as $key => $value) {
            $newCode = $key;
            
            if (in_array($key, array_keys($sectionFieldsAssociations))) {
                $newCode = $sectionFieldsAssociations[$key];
                $arResult[$newCode] = $value;
                unset($arResult[$key]);
            }
            
            $arResult[$newCode] = $this->sectionFieldsCollection->getField($key)->handleValue($value);
        }

    }
}
