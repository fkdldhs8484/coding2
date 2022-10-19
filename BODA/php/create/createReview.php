<?php
    include "../connect/connect.php";
    $sql = "CREATE TABLE myReview (";
    $sql .= "myReviewID int(10) unsigned NOT NULL auto_increment,";
    $sql .= "myMemberID int(10) unsigned NOT NULL,";
    $sql .= "ReviewTitle varchar(50) NOT NULL,";
    $sql .= "ReviewContents longtext NOT NULL,";
    $sql .= "ReviewView int(10) NOT NULL,";
    $sql .= "ReviewLike int(10) NOT NULL,";
    $sql .= "ReviewImgFile varchar(100) DEFAULT NULL,";
    $sql .= "ReviewImgSize varchar(100) DEFAULT Null,";
    $sql .= "ReviewDelete int(10) DEFAULT Null,";
    $sql .= "ReviewregTime int(20) NOT NULL,";
    $sql .= "PRIMARY KEY (myReviewID)";
    $sql .= ")charset=utf8;";
    $connect -> query($sql);
?>