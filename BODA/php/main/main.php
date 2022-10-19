<?php 
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <title>BODA 사이트 만들기</title>

    <!-- CSS -->
    <?php include "../include/link.php" ?>
</head>
<body>
    <div id="skip">
        <a href="#header">헤더 영역 바로가기</a>
        <a href="#main">콘텐츠 영역 바로가기</a>
        <a href="#footer">푸터 영역 바로가기</a>
    </div>
<?php include "../include/header.php" ?>
<?php include "../login/login.php" ?>
    <!-- //header -->
    <div style="height: 500px"></div>
    메인!!

    <a href="../create/createTalk.php">Talk 테이블 만들기</a><br>
    <a href="../create/createTalkData.php">Talk 테이블 데이터 만들기</a><br>
    <a href="../create/createReview.php">review 테이블 만들기</a><br>
    <a href="../create/createReviewData.php">review 테이블 데이터 만들기</a>

<?php include "../include/footer.php" ?>
<!-- //footer -->
<?php include "../include/script.php" ?>
<!-- //login -->
</body>
</html>