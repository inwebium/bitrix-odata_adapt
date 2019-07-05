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
        
        foreach ($this->contentTypes as $key => $contentType) {
            if ($contentType->getName() == $contentTypeFilter) {
                $entityToSelect = $contentType->getAppliesFor();
            }
        }

        if ($entityToSelect == 'ELEMENT') {
            return $this->selectElements($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        } elseif ($entityToSelect == 'SECTION') {
            return $this->selectSections($arOrder, $arFilter, $arNav, $arSelect);
        } else {
            return false;
        }
    }
    
    protected function selectElements($arOrder, $arFilter, $arGroup, $arNav, $arSelect)
    {
        $result = false;
        $resource = \CIBlockElement::GetList($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        
        if (in_array('count', $arSelect)) {
            $result = [$resource->SelectedRowsCount()];
        } else {
            $arElements = [];
        
            while($element = $resource->GetNext())
            {
                $this->placeExpandedValues($element);
                $this->adaptResult($element);
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
        /*$arFilter = ['IBLOCK_ID' => 1459];
        $arSelect = ['ID', 'NAME'];*/
        
        $resource = \CIBlockSection::GetList($arOrder, $arFilter, false, $arSelect, $arNav);
        
        if (in_array('count', $arSelect)) {
            $result = [$resource->SelectedRowsCount()];
        } else {
            $arElements = [];
        
            while($element = $resource->GetNext())
            {
                $this->placeExpandedValues($element);
                $this->adaptResult($element);
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
        
        $this->get();
    }
}
