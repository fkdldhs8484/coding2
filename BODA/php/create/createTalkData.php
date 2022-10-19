<?php
    include "../connect/connect.php";

    for($i=1; $i<=500; $i++){
        $regTime = time();

        $sql = "INSERT INTO myTalk(myMemberID, TalkContents, regTime) VALUES('24', '게시판 콘텐츠${i}입니다.', 'regTime')";
        $connect -> query($sql);
    }
?>