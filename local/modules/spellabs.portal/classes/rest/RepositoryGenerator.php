<?php
namespace Spellabs\Portal\Rest;

class RepositoryGenerator
{
    private $templateName;
    private $template;
    private $filename;
    
    public function getTemplateName()
    {
        return $this->templateName;
    }
    
    public function getTemplate()
    {
        return $this->template;
    }
    
    public function getFilename()
    {
        return $this->filename;
    }
    
    /**
     * Задаст имя файла с шаблоном
     * 
     * @param string $templateName
     * @return $this
     */
    private function setTemplateName($templateName)
    {
        $this->templateName = $templateName;
        return $this;
    }
    
    /**
     * Задаст название файла с шаблоном, получит его содержимое
     * 
     * @param string $templateName
     * @return $this
     */
    public function setTemplate($templateName)
    {
        $this->setTemplateName($templateName);
        $this->template = file_get_contents($this->getTemplateName());
        return $this;
    }
    
    /**
     * Установит имя итогового файла
     * 
     * @param string $filename
     * @return $this
     */
    public function setFilename($filename)
    {
        $arPath = pathinfo($this->getTemplateName());
        $this->filename = $arPath['dirname'] . '/' . $filename;
        
        return $this;
    }

    /**
     * Заменяет {{ token }} в шаблоне на value
     * 
     * @param string $token
     * @param mixed $value
     */
    public function setToken($token, $value = '')
    {
        $this->template = str_replace('{{ ' . $token . ' }}', $value, $this->getTemplate());
        
        return $this;
    }
    
    /**
     * Создаст строку вида 'key' => 'value' для массива
     * 
     * @param mixed $key
     * @param mixed $value
     * @return string
     */
    private function getArrayKeyPair($key, $value)
    {
        $string = "";
        
        if (is_string($key))
        {
            $key = "'" . addcslashes($key, "'") . "'";
        }
        
        if (is_string($value))
        {
            $value = "'" . addcslashes($value, "'") . "'";
        }
        
        return "\t\t" . $key . " => " . $value . ",\n";
    }
    
    /**
     * Переведет массив в строковое представление
     * 
     * @param array $array
     * @return $this
     */
    public function arrayToString(array $array, $prefix = '')
    {
        $string = '';
        
        foreach ($array as $key => $value)
        {
            $string .= $this->getArrayKeyPair($key, $prefix . '' . $value);
        }
        
        return $string;
    }
    
    /**
     * Запишет изменения в шаблоне в файл шаблона
     */
    public function executeTemplate()
    {
        $this->forceFilePutContents($this->getFilename(), $this->getTemplate());
    }

    /**
     * 
     * @param string $fullPathWithFileName
     * @param string $fileContents
     */
    private function forceFilePutContents($fullPathWithFileName, $fileContents)
    {
        $exploded = explode(DIRECTORY_SEPARATOR, $fullPathWithFileName);

        array_pop($exploded);

        $directoryPathOnly = implode(DIRECTORY_SEPARATOR, $exploded);

        if (!file_exists($directoryPathOnly)) {
            mkdir($directoryPathOnly,0775,true);
        }

        file_put_contents($fullPathWithFileName, $fileContents);    
    }
}
