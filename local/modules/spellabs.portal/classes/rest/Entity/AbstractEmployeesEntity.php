<?php
namespace Spellabs\Portal\Rest\Entity;

use Spellabs\Portal\Rest\Entity\AbstractRestApiEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

abstract class AbstractEmployeesEntity extends AbstractRestApiEntity
{
    public function __construct(RequestParameters $requestParameters)
    {
        parent::__construct($requestParameters);
        
        $this->fieldsCollection
            ->addField(
				new Field(
					'ID',
					'Id',
					Type\IntegerType::class,
					'FIELD',
				)
			)
        ;
        
        $this->getRequestParameters()->adaptFields($this->getFieldsCollection());
    }

    public function delete()
    {
        $payload = $this->getRequestParameters()->getPayload();

        $elementFields = $payload;
        
        $elementId = false;
        
        if (isset($this->getRequestParameters()->getFilter()['ID']) && $this->getRequestParameters()->getFilter()['ID'] > 0) {
            $elementId = $this->getRequestParameters()->getFilter()['ID'];
        } elseif (isset($elementFields['ID']) && $elementFields['ID'] > 0) {
            $elementId = $elementFields['ID'];
            unset($elementFields['ID']);
        } else {
            return false;
        }
        
        if (\CUser::Delete($elementId)) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
     * 
     * @return array
     */
    public function get()
    {
        $result = [];
        
        $arOrder = $this->getRequestParameters()->getOrder();
        $arFilter = $this->getRequestParameters()->getFilter();
        $arGroup = false;
        $arNav = $this->getRequestParameters()->getTop();
        $this->expand();
        $arSelect = $this->getRequestParameters()->getSelect();

        $arParams = [
            'NAV_PARAMS' => $arNav,
        ];
        
        $arParams += $this->separateSelect($arSelect);
        
        /*var_dump($arOrder);
        var_dump($arFilter);
        var_dump($arParams);
        die();*/
        
        $resource = \CUser::GetList($arOrder, ($by = []), $arFilter, $arParams);
        
        $elements = [];
        
        while ($element = $resource->GetNext())
        {
            $elements[] = $element;
        }
        
        if (!isset($arParams['FIELDS']['ID']) || is_array($arParams['FIELDS']['ID'])) {
            $result = $elements;
        } else {
            $result = $elements;
        }

        return $result;
    }

    public function merge()
    {
        $newUser = new \CUser;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        $elementFields = $arPayload;
        
        if (isset($this->getRequestParameters()->getFilter()['ID']) && $this->getRequestParameters()->getFilter()['ID'] > 0)
        {
            $elementId = $this->getRequestParameters()->getFilter()['ID'];
        }
        elseif (isset($elementFields['ID']) && $elementFields['ID'] > 0)
        {
            $elementId = $elementFields['ID'];
            unset($elementFields['ID']);
        }
        else
        {
            return false;
        }
        
        $updateResult = false;
        
        //есть ли в payload значения для пользовательских полей
        // если есть,
    }

    public function post()
    {
        $newUser = new \CUser;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        $elementFields = $arPayload;
        
        $elementFields = $this->prepareAddFields($elementFields);
        
        $userAddResult = $newUser->Add($arFields);
        
        if ($userAddResult) {
            // вернуть пользователя по добавленному id
        } else {
            return false;
        }
    }
    
    /**
     * Получает expand из объекта параметров запроса. Подменяет значения из 
     * select на нужные битриксовые аналоги.
     * 
     * @return $this
     */
    protected function expand()
    {
        $propertiesToExpand = $this->getRequestParameters()->getExpand();
        
        foreach ($propertiesToExpand as $num => $fieldCode)
        {
            $this->replaceExpandedFields($fieldCode);
        }
        
        return $this;
    }
    
    /**
     * Заменяет expanded поля в select на битриксовые аналоги
     * 
     * @param type $fieldCode
     */
    protected function replaceExpandedFields($fieldCode)
    {
        
        foreach ($this->getRequestParameters()->getSelect() as $selectNum => $fieldToSelect)
        {

            if (strpos($fieldToSelect, $fieldCode . '/') !== false) {
                // Если есть класс
                $classForExpand = "Spellabs\\Portal\\Rest\\Repository\\Fields\\" . $fieldCode;
                
                if (class_exists($classForExpand)) {
                    $objectToExpand = new $classForExpand();
                    
                    $this->setExpandedValues(
                        $objectToExpand->getValue(
                            $this->getIblockId(),
                            $this->getRequestParameters()->getFilter()
                        )
                    );
                }

            } /*else {
                $this->getRequestParameters()->replaceSelect(
                    $fieldToSelect, 
                    AssociativeReplacer::replace($fieldToSelect, $this->getFieldsAssociations())
                );
                
            }*/
        }
        /*var_dump($fieldCode);
        var_dump($this->getRequestParameters()->getSelect());*/

        //die();
    }
    
    /**
     * Т.к. у нас тут битрикс, а его api неоднородное, то есть такие вот методы.
     * Этот подготовит $arSelect подходящий для CUser::GetList
     * 
     * @param type $arSelect
     * @return type
     */
    public function separateSelect($arSelect)
    {
        $select = [];
        $fields = [];
        
        foreach ($arSelect as $key => $value)
        {
            if (strpos($value, 'UF_') !== false) {
                $select[] = $value;
            } else {
                $fields[] = $value;
            }
        }
        
        return ['SELECT' => $select, 'FIELDS' => $fields];
    }
    
    protected function getExpandedValues()
    {
        return $this->expandedValues;
    }
    
    protected function setExpandedValues($array)
    {
        $this->expandedValues = $array;
        return $this;
    }
    
    protected function placeExpandedValues(&$element)
    {
        if (isset($this->getExpandedValues()[$element['ID']])) {
            //var_dump($this->getExpandedValues()[$element['ID']]);
            
            foreach ($this->getExpandedValues()[$element['ID']] as $propertyCode => $arValue) {
                $element[$propertyCode] = $arValue;
            }
        }
    }
    
    /**
     * Вернет текущего пользователя
     * 
     * @global \CUser $USER
     * @return array
     */
    public function current()
    {
        global $USER;

        $this->getRequestParameters()->appendFilter(['ID' => $USER->GetID()]);
        
        return $this->get();
    }
    
    /**
     * Вернет группы, в которых состоит текущий пользователь
     * 
     * @global \CUser $USER
     * @return array
     */
    public function currentGroups()
    {
        global $USER;
        
        $result = [];
        
        if ($arGroups = $USER->GetUserGroupArray()) {
            
            $arFilter = ['ID' => implode('|', $arGroups)];
            $resource = \CGroup::GetList(($by = 'id'), ($order='asc'), $arFilter);
            
            while ($element = $resource->GetNext())
            {
                $result[] = $element;
            }
        }

        return $result;
    }
    
    protected function getFullName()
    {
        global $USER;
        
        
    }
}
