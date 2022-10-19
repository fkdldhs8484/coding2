<!DOCTYPE html>
<html lang="ko">

<head>
    <title>회원가입 정보 입력 페이지</title>

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
    
    <main id="infoType" class="info__wrap agree">
        <h2 class="agree_tit">SIGN UP</h2>
        <div class="info__inner">
            <form action="agreeInfoSave.php" name="join" method="post" onsubmit="return joinChecks()">
                <fieldset>
                    <article class="info1">
                        <legend class="login1">로그인 정보</legend>
                        <div>
                            <label for="youID">아이디</label>
                            <div class="IDbox">
                                <input type="text" id="youID" name="youID" placeholder="아이디를 입력해 주세요." autocomplete="off" required>
                                <a class="#c" class="btn1 check" onclick="IDChecking()">중복확인</a>
                                <p class="msg" id="youIDComment"></p>
                            </div>
                        </div>
                        <div>
                            <label for="youPass">비밀번호</label>
                            <input type="password" id="youPass" name="youPass" placeholder="비밀번호를 입력해 주세요." autocomplete="off" required>
                            <p class="msg" id="youPassComment"></p>
                        </div>
                        <div>
                            <label for="youPassC">비밀번호 확인</label>
                            <input type="password" id="youPassC" name="youPassC" placeholder="비밀번호를 한 번 더 입력해주세요." autocomplete="off" required>
                            <p class="msg" id="youPassCComment"></p>
                        </div>
                    </article>
                    <article class="info2">
                        <legend class="login2">개인정보</legend>
                        <div>
                            <label for="youName">이름</label>
                            <input type="text" id="youName" name="youName" placeholder="이름을 입력해 주세요." maxlength="5" autocomplete="off" required>
                            <p class="msg" id="youNameComment"></p>
                        </div>
                        <!-- <div>
                            <label>성별</label>
                            <div class="inputbox">
                                <div><input type="radio" name="gender" value="man" checked><p>남</p></div>
                                <div><input type="radio" name="gender" value="woman"><p>여</p></div>
                            </div>
                        </div> -->
                        <div>
                            <label for="youNickName">닉네임</label>
                            <div class="IDbox">
                                <input type="text" id="youNickName" name="youNickName" placeholder="닉네임을 입력해 주세요." autocomplete="off" required>
                                <a class="#c" class="btn1 check" onclick="nickChecking()">중복확인</a>
                                <p class="msg" id="youNickNameComment"></p>
                            </div>
                        </div>
                        <div>
                            <label for="youEmail">이메일</label>
                            <div class="IDbox">
                                <input type="email" id="youEmail" name="youEmail" placeholder="이메일을 입력해 주세요." autocomplete="off" required>
                                <a class="#c" class="btn1 check" onclick="emailChecking()">중복확인</a>
                                <p class="msg" id="youEmailComment"></p>
                            </div>
                        </div>
                        <div>
                            <label for="youBirth">생년월일</label>
                            <input type="text" id="youBirth" name="youBirth" autocomplete="off" maxlength="10" placeholder="YYYY-MM-DD" required>
                            <p class="msg" id="youBirthComment"></p>
                        </div>
                        <div>
                            <label for="youPhone">휴대폰 번호</label>
                            <input type="text" id="youPhone" name="youPhone" maxlength="13"
                                placeholder="010-1234-1234" required>
                            <p class="msg" id="youPhoneComment"></p>
                        </div>
                    </article>
                    <div class="btn_box">
                        <a href="#" class="Btn">메인으로</a>
                        <button class="Btn" type="submit">다음으로</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </main>
    <!-- //main -->

    <?php include "../include/footer.php" ?>
    <!-- //footer -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../../html/assets/js/headermenu.js"></script>
    <script src="../../html/assets/js/loginpopup.js"></script>
    <script>
        let IDCheck = false;
        let nickCheck = false;
        let emailCheck = false;

        function IDChecking(){
            let youID = $("#youID").val();
            if(youID == null || youID == ''){
                $("#youIDComment").text("* 아이디를 입력해 주세요.")
            }else {
                $.ajax({
                    type : "POST",
                    url : "agreeInfoCheck.php",
                    data : {"youID" : youID, "type" : "IDCheck"},
                    dataType : "json",
                    success : function(data){
                        if(data.result == "good"){
                            $("#youIDComment").text("* 사용 가능한 아이디입니다.");
                            IDCheck = true;
                        }else {
                            $("#youIDComment").text("* 이미 동일한 아이디가 존재합니다.");
                            IDCheck = false;
                        }
                    },
                    error : function(request, status, error){
                        console.log("request" + request);
                        console.log("status" + status);
                        console.log("error" + error);
                    }
                })
            }
        }
        function nickChecking(){
            let youNickName = $("#youNickName").val();
            if(youNickName == null || youNickName == ''){
                $("#youNickNameComment").text("* 닉네임을 입력해 주세요.")
            }else {
                $.ajax({
                    type : "POST",
                    url : "agreeInfoCheck.php",
                    data : {"youNickName" : youNickName, "type" : "nickCheck"},
                    dataType : "json",
                    success : function(data){
                        if(data.result == "good"){
                            $("#youNickNameComment").text("* 사용 가능한 닉네임입니다.");
                            nickCheck = true;
                        }else {
                            $("#youNickNameComment").text("* 이미 동일한 닉네임이 존재합니다.");
                            nickCheck = false;
                        }
                    },
                    error : function(request, status, error){
                        console.log("request" + request);
                        console.log("status" + status);
                        console.log("error" + error);
                    }
                })
            }
        }
        function emailChecking() {
            let youEmail = $("#youEmail").val();

            if(youEmail == null || youEmail == '') {
                $("#youEmailComment").text("* 이메일을 입력해 주세요.");
            } else {
                $.ajax({
                    type: "POST",
                    url: "agreeInfoCheck.php",
                    data: {"youEmail": youEmail, "type": "emailCheck"},
                    dataType: "json",

                    success: function(data){
                        if(data.result == "good"){
                            $("#youEmailComment").text("* 사용 가능한 이메일입니다.");
                            emailCheck = true;
                        } else {
                            $("#youEmailComment").text("* 이미 동일한 이메일이 존재합니다.");
                            emailCheck = false;
                        }
                    },

                    error : function(request, status, error){
                        console.log("request" + request);
                        console.log("status" + status);
                        console.log("error" + error);
                    }
                })
            }
        }
        function joinChecks(){
            // 아이디 유효성 검사
            let getYouID = RegExp(/[a-zA-Z0-9]/);
            if(!getYouID.test($("#youID").val())){
                $("#youIDComment").text("* 아이디는 영어와 숫자로만 사용 가능합니다.");
                $("#youID").val("");
                return false;
            }

            // 닉네임 중복 검사
            if(IDCheck == false){
                $("#youIDComment").text("* 아이디 중복확인을 해주세요.");
                return false;
            }

            // 이메일 공백 검사
            if($("#youEmail").val() == ""){
                $("#youEmailComment").text("* 이메일을 입력해 주세요.");
                return false;
            }

            // 이메일 유효성 검사
            let getYouEmail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
            if(!getYouEmail.test($("#youEmail").val())){
                $("#youEmailComment").text("* 이메일 형식에 맞게 작성해 주세요.");
                $("#youEmail").val("");
                return false;
            }

            // 이메일 중복 검사
            if(emailCheck == false){
                $("#youEmailComment").text("* 이메일 중복확인을 해주세요.");
                return false;
            }

            // 닉네임 중복 검사
            if($("#youNickName").val() == ""){
                $("#youNickNameComment").text("* 닉네임을 입력해 주세요.");
                return false;
            }

            // 닉네임 유효성 검사
            let getYouNickName = RegExp(/^[가-힣|0-9]+$/);
            if(!getYouNickName.test($("#youNickName").val())){
                $("#youNickNameComment").text("* 닉네임은 한글과 숫자로만 사용 가능합니다.");
                $("#youNickName").val("");
                return false;
            }

            // 닉네임 중복 검사
            if(nickCheck == false){
                $("#youNickNameComment").text("* 닉네임 중복확인을 해주세요.");
                return false;
            }

            // 비밀번호 공백 검사
            if($("#youPass").val() == ""){
                $("#youPassComment").text("* 비밀번호를 입력해 주세요.");
                return false;
            }

            // 비밀번호 유효성 검사
            let getYouPass = $("#youPass").val();
            let getYouPassNum = getYouPass.search(/[0-9]/g);
            let getYouPassEng = getYouPass.search(/[a-z]/ig);
            /* i: 대/소문자 구별x */
            let getYouPassSpe = getYouPass.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

            if(getYouPass.length < 8 || getYouPass.length > 20){
                $("#youPassComment").text("* 비밀번호는 8자리에서 20자리 이내로 입력해 주세요.");
                return false;
            } else if (getYouPass.search(/\s/) != -1){
                $("#youPassComment").text("* 비밀번호는 공백 없이 입력해 주세요.");
                return false;
            } else if(getYouPassNum < 0 || getYouPassEng < 0 || getYouPassSpe < 0){
                $("#youPassComment").text("* 영문, 숫자, 특수문자를 혼합하여 입력해 주세요.");
                return false;
            }

            // 비밀번호 확인 공백 검사
            if($("#youPassC").val() == ""){
                $("#youPassCComment".text("* 비밀번호 확인을 입력해 주세요."));
                return false;
            }

            // 비밀번호 확인 동일 체크
            if($("#youPass").val() !== $("#youPassC").val()){
                $("#youPassCComment").text("* 비밀번호가 일치하지 않습니다.");
                return false;
            }

            // 이름 공백 확인
            if($("#youName").val() == ""){
                $("#youNameComment").text("* 이름을 입력해 주세요.");
                return false;
            }

            // 이름 유효성 검사
            let getYouName = RegExp(/^[가-힣]+$/);
            if(!getYouName.test($("#youName").val())){
                $("#youNameComment").text("* 이름은 한글로만 입력해 주세요.");
                $("#youName").val("");
                return false;
            }

            // 생년월일 공백 확인
            if($("#youBirth").val() == ""){
                $("#youBirthComment").text("* 생년월일(YYYY-MM-DD)을 올바르게 입력해 주세요.");
                return false;
            }

            // 생년월일 유효성 검사
            let getyouBirth = RegExp(/^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/);
            if(!getyouBirth.test($("#youBirth").val())){
                $("#youBirthComment").text("* 생년월일(YYYY-MM-DD)을 올바르게 입력해 주세요.");
                return false;
            }

            // 휴대폰 번호 공백 확인
            if($("#youPhone").val() == ""){
                $("#youPhoneComment").text("* 휴대폰 번호(000-0000-0000)를 올바르게 입력해 주세요.");
                return false;
            }

            // 휴대폰 번호 유효성 검사
            let getyouPhone = RegExp(/01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/);
            if(!getyouPhone.test($("#youPhone").val())){
                $("#youPhoneComment").text("* 휴대폰 번호(000-0000-0000)를 올바르게 입력해 주세요.");
                $("#youPhone").val("");
                return false;
            }
        }
    </script>
</body>
</html>