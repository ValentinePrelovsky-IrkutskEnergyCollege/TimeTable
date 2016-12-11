<?php
include "classloader.php";

$displayer      = new Displayer();
$parser         = new Parser("document.txt");
$screenSelector = new ScreenSelector();
$db             = new DbPusher("test");

// -- end of declarations

$parser->parseDocument();
$screenSelector->prepareDocument();
// $pri->get();
?>