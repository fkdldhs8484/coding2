<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- CSS -->
    <?php include "../include/link.php" ?>
    <title>약관동의 페이지</title>
</head>

<body>
    <?php include "../include/header.php" ?>
    <!-- //header -->

    <section id="AgreeType" class="Agree__wrap agree">
        <h2 class="agree_tit">SIGN UP</h2>
        <div class="Agree__inner">
            <form>
                <h3>약관동의</h3>
                <p>[필수] 회원가입을 위한 약관에 동의해주세요.</p>
                <article class="Agree a1">
                    <h4 class="title">이용약관 동의 [필수] <input type='checkbox' name='check_all' id="check1" required><label
                            for="check1"></label>
                    </h4>

                    <div class="box">
                        <h5 class="desc">제 1 조 [ 목적 ]</h5>
                        <p class="desc2">사이트를 통하여 제공하는 모든 서비스의 이용조건 및 절차, 이용자의 권리, 의무, 책임<br>
                            사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                        </p>
                        <h5 class="desc">제 2 조 [ 공지 ]</h5>
                        <p class="desc2">1. 본 약관은 재단이 사이트의 화면 또는 기타의 방법으로 이용자에게 공지하고 회원이 동의함으로써 효력이 발생하며, 서비스 제공 행위 및
                            이용자의
                            서비스 사용 행위에 본 약관이 우선적으로 적용됩니다.
                        </p>
                        <h5 class="desc">제 3 조 [ 공지 ]</h5>
                        <p class="desc2">1. 본 약관은 재단이 사이트의 화면 또는 기타의 방법으로 이용자에게 공지하고 회원이 동의함으로써 효력이 발생하며, 서비스 제공 행위 및
                            이용자의
                            서비스 사용 행위에 본 약관이 우선적으로 적용됩니다.
                        </p>
                    </div>

                </article>

                <article class="Agree a2">
                    <h4 class="title">개인정보 수집 및 이용 동의 [필수] <input type='checkbox' name='check_all' id="check2"><label
                            for="check2"></label>
                    </h4>

                    <div class="box">
                        <h5 class="desc">1. 개인정보 수집목적 및 이용목적</h5>
                        <p class="desc2">회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 불만처리 등
                            민원처리,
                            고지사항 전달
                        </p>
                        <h5 class="desc">2. 수집하는 개인정보 항목</h5>
                        <p class="desc2">- 회원가입 시<br>
                            ∙ 필수항목: 성명, 회원 ID, 비밀번호, 전화번호, 생년월일<br>
                            ∙ 선택항목: 이메일 수신 동의<br>
                        </p>
                        <h5 class="desc">2. 수집하는 개인정보 항목</h5>
                        <p class="desc2">- 회원가입 시<br>
                            ∙ 필수항목: 성명, 회원 ID, 비밀번호, 전화번호, 생년월일<br>
                            ∙ 선택항목: 이메일 수신 동의<br>
                        </p>
                    </div>

                </article>
                <div class="checkbox1">
                    <input type='checkbox' id="check3" name='check_all'><label for="check3"></label>
                    <p class="checkbox_p">[필수] 만 14세 이상입니다.</p>
                </div>
                <div class="checkbox2">
                    <input type='checkbox' id="check4" name='check_all' value='selectall'
                        onclick='selectAll(this)'><label for="check4"></label>
                    <p class="checkbox_p">모든 약관에 동의합니다.</p>
                </div>
                <div class="btn_box">
                    <a href="#" class="Btn">메인으로</a>
                    <a href="agreeInfo.php" class="Btn">다음</a>
                </div>
            </form>
        </div>
    </section>
    <!-- //section -->

    <?php include "../include/footer.php" ?>
    <!-- //footer -->

    <script src="../../html/assets/js/headermenu.js"></script>
    <script src="../../html/assets/js/loginpopup.js"></script>
    <script src="../../html/assets/js/agree.js"></script>
    <!-- //script -->
</body>

</html>