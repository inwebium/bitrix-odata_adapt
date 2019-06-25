<?php
namespace Spellabs\Portal\Rest;

/**
 * Фабрика для порождения объектов-значений фильтра
 */
class FilterValueFactory
{
    private $types = [
        'EnumerationFilterValue' => [
            'pattern' => "/\(.+\)/",
            'groupAsParameter' => 1,
        ],
        'DatetimeFilterValue' => [
            'pattern' => "/datetime\s?'([\d\-T:\.Z]+)'/",
            'groupAsParameter' => 1
        ],
        'ScalarFilterValue'   => [ //должен быть последним (~default)
            'pattern' => "/'?(.*)'?/",
            'groupAsParameter' => 1
        ],
    ];
    
    public function __construct()
    {
        ;
    }
    
    /**
     * Возвращаект объект класса типа значения фильтра 
     * (класса из Spellabs\Portal\Rest\Processor\Filter\)
     * 
     * @param string $string
     * @return FilterValueInterface
     */
    public function instatiateFilterValue($string)
    {
        foreach ($this->types as $class => $typeDefinition)
        {
            $matches = [];
            
            if (preg_match($typeDefinition['pattern'], $string, $matches)) {
                $class = "Spellabs\\Portal\\Rest\\Processor\\Filter\\" . $class;
                return new $class($matches[$typeDefinition['groupAsParameter']]);
            }
        }
    }
}
