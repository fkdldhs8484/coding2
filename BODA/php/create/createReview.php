<?php
    include "../connect/connect.php";

    $sql = "CREATE TABLE myReview (";
    $sql .= "myReviewID int(10) unsigned NOT NULL auto_increment,";
    $sql .= "myMemberID int(10) unsigned NOT NULL,";
    $sql .= "ReviewTitle varchar(50) NOT NULL,";
    $sql .= "ReviewContents longtext NOT NULL,";
    $sql .= "ReviewView int(10) NOT NULL,";
    $sql .= "regTime int(20) NOT NULL,";
    $sql .= "PRIMARY KEY (myReviewID)";
    $sql .= ")charset=utf8;";

    $connect -> query($sql);

?>