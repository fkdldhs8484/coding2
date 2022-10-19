<!-- login popup -->
<div id="loginPopup" class="login__popup open blind">
    <div class="login__wrap">
        <div class="login__header">
            <h2 class="popup__title">LOGIN</h2>
            <button type="button" class="popup__close"><span class="blind">닫기</span></button>
        </div>  
        <div class="login__inner">
            <form action="../login/loginSave.php" name="login" class="loginForm" method="post">
                <fieldset>
                    <legend class="blind">로그인 작성 란</legend>
                    <div class="ID">
                        <label for="youID" class="blind">아이디</label>
                        <input type="text" class="userID" name="youID" placeholder="아이디" id="youID" maxlength="20" required>
                    </div>
                    <div class="pass">
                        <label for="youPass" class="blind">패스워드</label>
                        <input type="password" class="userPass" name="youPass" placeholder="비밀번호" id="youPass" required>
                    </div>
                    <button type="submit" class="login-btn">로그인</button>
                </fieldset>
            </form>
            <div class="login__footer">
                <div class="join__btn">
                    <a href="../login/join.php">회원가입</a>
                    <a href="../login/findID.php">아이디 찾기</a>
                    <a href="#">비밀번호 찾기</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- //login popup -->