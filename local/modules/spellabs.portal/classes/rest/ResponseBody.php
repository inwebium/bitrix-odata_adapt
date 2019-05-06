<?php
namespace Spellabs\Portal\Rest;

class ResponseBody
{
    private $body;
    private $format;
    private $associations;
    
    public function __construct($format = 'json')
    {
        $this->setFormat($format);
    }
    
    public function getFormat()
    {
        return $this->format;
    }

    public function setFormat($format)
    {
        $this->format = $format;
        return $this;
    }

    public function getBody()
    {
        return $this->body;
    }

    public function setBody($body)
    {
        $body = $this->prepareBody($body);
        switch ($this->format)
        {
            case 'json':
                $this->body = json_encode($body);
                break;
            default:
                break;
        }

        return $this;
    }
    
    function getAssociations()
    {
        return $this->associations;
    }

    function setAssociations($associations)
    {
        $this->associations = $associations;
        return $this;
    }
    
    /**
     * "Подготавливает" тело ответа, убирает лишние ключи, подменяет названия 
     * ключей
     * 
     * @param array $arResult
     * @return array
     */
    public function prepareBody($arResult)
    {
        $body = [];
        
        if (is_array($arResult)) {
            $arResult = $this->removeTildeKeys($arResult);

            $body = AssociativeReplacer::recursiveReverseReplace(
                $arResult, 
                $this->getAssociations()
            );
        }
        
        return $body;
    }
    
    /**
     * Удаляет ключи вида ~KEY (~ID, ~DETAIL_TEXT и т.д.)
     * 
     * @param array $arResult
     * @return array
     */
    private function removeTildeKeys($arResult)
    {
        foreach ($arResult as $key => $value)
        {
            if (strpos($key, '~') === 0) {
                unset($arResult[$key]);
            }
        }
        
        return $arResult;
    }
}
