<?php
    include "../connect/connect.php";

    for($i=1; $i<=500; $i++){
        $sql = "INSERT INTO myReview(myMemberID, myReviewID, ReviewTitle, ReviewContents, ReviewView, regTime) VALUES('1', '${i}', '게시판 제목${i}입니다.', '게시판 콘텐츠${i}입니다.', '1', 'regTime')";
        $connect -> query($sql);
    }
?>