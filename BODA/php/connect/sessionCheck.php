<?php
    if(!isset($_SESSION['myMemberID'])){
        // 로그인 페이지 이동
        Header("Location: ../main/alert.php");
        echo "먼저 로그인을 해 주세요.";
    }
?>