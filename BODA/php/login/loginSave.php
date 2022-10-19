<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <title>로그인 완료 페이지</title>
    
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
    <!-- //header -->
    
    <main id="infoType" class="info__wrap agree">
        <div class="alert">
            <div class="modal">
                <div class="bg"></div>
                <div class="modalBox">
                    <h2>LOGIN</h2>
<?php    
    $youID = $_POST['youID'];
    $youPass = $_POST['youPass'];

    function msg($alert){
        echo "<p>{$alert}</p>";
    }

    $sql = "SELECT myMemberID, youID, youNickName, youPass FROM myMember WHERE youID = '$youID' AND youPass = '$youPass'";
    $result = $connect -> query($sql);
    if($result){
        $count = $result -> num_rows;
        if($count == 0){
            msg("아이디 또는 비밀번호가 틀렸습니다.");
        } else {
            $info = $result -> fetch_array(MYSQLI_ASSOC);
            $_SESSION['myMemberID'] = $info['myMemberID'];
            $_SESSION['youID'] = $info['youID'];
            $_SESSION['youNickName'] = $info['youNickName'];
            // echo "<pre>";
            // var_dump($info);
            // echo "</pre>";
            // Header("Location: ../main/main.php");
            // Header("Location: ../main/main.php");
            echo "<script>location.href='../main/main.php'</script>";
        }
    } else {
        msg("에러발생 - 관리자에게 문의하세요.");
    }
?>
                </div>
            </div>
        </div>
    </main>
    <!-- //main -->
    <?php include "../include/footer.php" ?>
    <!-- //footer -->
</body>

</html>