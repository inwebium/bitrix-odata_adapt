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
    protected function select($arOrder, $arFilter, $arGroup, $arNav, $arSelect)
    {
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
    }
    
    protected function selectElements()
    {
        
    }
    
    protected function selectSections()
    {
        
    }
}
