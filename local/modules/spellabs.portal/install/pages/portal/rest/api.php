<?php
header('Content-Type: application/xml;charset=utf-8');

echo 
'<?xml version="1.0" encoding="utf-8"?>
<service xml:base="http://test.bitrix.dev10.spellabs.com:8080/_api/" xmlns="http://www.w3.org/2007/app" xmlns:atom="http://www.w3.org/2005/Atom">
	<workspace>
		<atom:title type="text">Default</atom:title>
		<collection href="files">
			<atom:title type="text">files</atom:title>
		</collection>
		<collection href="hubsites">
			<atom:title type="text">hubsites</atom:title>
		</collection>
		<collection href="lists">
			<atom:title type="text">lists</atom:title>
		</collection>
	</workspace>
</service>';