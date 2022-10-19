<?php
    include "../connect/connect.php";

    $sql = "CREATE TABLE myTalk (";
    $sql .= "myTalkID int(10) unsigned NOT NULL auto_increment,";
    $sql .= "myMemberID int(10) unsigned NOT NULL,";
    $sql .= "TalkContents longtext NOT NULL,";
    $sql .= "regTime int(20) NOT NULL,";
    $sql .= "PRIMARY KEY (myTalkID)";
    $sql .= ")charset=utf8;";

    $connect -> query($sql);
?>