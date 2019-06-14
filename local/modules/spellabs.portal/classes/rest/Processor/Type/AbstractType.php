<?php
namespace Spellabs\Portal\Rest\Processor\Type;

abstract class AbstractType implements TypeInterface
{
    public abstract static function parseValue($value);
}
