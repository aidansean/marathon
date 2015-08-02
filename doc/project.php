<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/marathon" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=marathon" ;
$project = new project_object("marathon", "Geneva Marathon analysis", "https://github.com/aidansean/marathon", "http://aidansean.com/projects/?tag=marathon", "marathon/images/project.jpg", "marathon/images/project_bw.jpg", "In 2013 I took part in the Geneva Relay Marathon with some friends. The results were presented, leg by leg, on a webpage.  I took this as an opporrtunity to analyse some data and find a novel way to display the data.", "Misc", "canvas,CSS,HTML,JavaScript") ;
?>