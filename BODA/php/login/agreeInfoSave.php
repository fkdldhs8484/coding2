<!DOCTYPE html>
<html lang="ko">
<head>
    <title>회원가입 완료 페이지</title>

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
                    <h2>SIGN UP</h2>
                    <?php
                        include "../connect/connect.php";
                        $youID = $_POST['youID'];
                        $youName = $_POST['youName'];
                        $youPass = $_POST['youPass'];
                        $youNickName = $_POST['youNickName'];
                        $youEmail = $_POST['youEmail'];
                        $youBirth = $_POST['youBirth'];
                        $youPhone = $_POST['youPhone'];
                        $regTime = time();
                        // $youID = $connect -> real_escape_string(trim($youID));
                        // $youName = $connect -> real_escape_string(trim($youName));
                        // $youPass = $connect -> real_escape_string(trim($youPass));
                        // $youNickName = $connect -> real_escape_string(trim($youNickName));
                        // $youEmail = $connect -> real_escape_string(trim($youEmail));
                        // $youBirth = $connect -> real_escape_string(trim($youBirth));
                        // $youPhone = $connect -> real_escape_string(trim($youPhone));
                        
                        // $youPass = sha1("web".$youPass);

                        // 회원가입
                        $sql = "INSERT INTO myMember(youID, youName, youPass, youNickName, youEmail, youBirth, youPhone, regTime) VALUES('$youID', '$youName', '$youPass', '$youNickName', '$youEmail', '$youBirth', '$youPhone', '$regTime')";
                        $result = $connect -> query($sql);

                        // echo "$sql";
                        if($result){
                            echo ("<p>회원가입이 성공적으로 완료되었습니다.</p><div class='mobal-btn'><a href='#' class='closeBtn'>메인으로</a></div>");
                        } else {
                            echo ("에러발생3 - 관리자에게 문의하세요.");
                        }
                    ?>
                    <!-- <h2>SIGN UP</h2>
                    <p>회원가입이 성공적으로 완료되었습니다.</p>
                    <div class="mobal-btn"><a href="#" class="closeBtn">메인으로</a></div> -->
                </div>
            </div>
        </div>
    </main>
    <!-- //main -->

<?php include "../include/footer.php" ?>
<!-- //footer -->

<?php include "../include/script.php" ?>
</body>

</html>