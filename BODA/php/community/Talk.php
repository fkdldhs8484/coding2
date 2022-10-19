<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXHIBITION TALK</title>
    <!-- CSS -->
    <?php include "../include/link.php" ?>
</head>

<body>
    <?php include "../include/header.php" ?>
    <!-- //header -->

    <main id="main">
        <h2 class="blind">전시 토크 게시판입니다.</h2>
        <div class="main__header top__container">
            <h2>EXHIBITION</h2>
            <h2>Talk</h2>
            <div class="home">
                <span>
                    <a href="#">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="#323232"/>
                    </svg>
                    </a></span>
                <span>EXHIBITION TALK</span>
            </div>
        </div>
        <section class="mid__container">
            <div class="talk__write">
                <form action="talkWriteSave.php" name="TalkWrite" method="post">
                    <fieldset>
                        <legend>전시 토크 게시판 작성 영역</legend>
                        <button type="submit" class="btn">글쓰기</button>
                        <div>
                            <label for="TalkContents">내용</label>
                            <textarea
                                name="TalkContents"
                                id="TalkContents"
                                rows="7"
                                placeholder="내용을 입력해 주세요."
                            ></textarea>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="board">
                <h2 class="blind">전시 토크 게시판 보기 영역입니다.</h2>
                <div class="board__table">
                    <table>
                        <tbody>
<?php
    if(isset($_GET['page'])){
        $page = (int)$_GET['page'];
    } else {
        $page = 1;
    } 

    $viewNum = 10;
    $viewLimit = ($viewNum * $page) - $viewNum;

    // 두 개의 테이블 join
    $sql = "SELECT t.myTalkID, m.youNickName, t.regTime FROM myTalk t JOIN myMember m ON(t.myMemberID = m.myMemberID) ORDER BY myTalkID DESC LIMIT ${viewLimit}, ${viewNum}";
    $result = $connect -> query($sql);

    if($result){
        $count = $result -> num_rows;

        if($count > 0){
            for($i=1; $i <= $count; $i++){
                $info = $result -> fetch_array(MYSQLI_ASSOC);
                echo "<tr><td class='comment comment_1'><div class='profile'></div><div class='contents'><div class='contents__top'>";
                echo "<p class='name'><span class='ir'>작성자</span><span>".$info['youNickName']."</span></p>";
                echo "<p class='date'><span class='ir'>작성일</span><span>| ".date('Y-m-d H:i', $info['regTime'])."</span></p>";
                echo "<a href='#' class='modify'>| 수정</a><a href='#' class='remove'>| 삭제</a></div>";
                echo "<div class='contents__bottom'><span>".$info['TalkContents']."</span></div></div>";
                echo "</td></tr>";
            }
        }
    }

    $myTalkID = $_GET['myTalkID'];
// 시험
    $sql = "SELECT m.youNickName, t.TalkContents, t.regTime FROM myTalk t JOIN myMember m ON(m.myMemberID = t.myMemberID) WHERE t.myTalkID = {$myTalkID}";
    $result = $connect -> query($sql);

    if($result){
        $info = $result -> fetch_array(MYSQLI_ASSOC);

        // echo "<pre>";
        // var_dump($info);
        // echo "</pre>";

        echo "<tr><td class='comment comment_1'><div class='profile'></div><div class='contents'><div class='contents__top'>";
        echo "<p class='name'><span class='ir'>작성자</span><span>".$info['youNickName']."</span></p>";
        echo "<p class='date'><span class='ir'>작성일</span><span>| ".date('Y-m-d H:i', $info['regTime'])."</span></p>";
        echo "<a href='#' class='modify'>| 수정</a><a href='#' class='remove'>| 삭제</a></div>";
        echo "<div class='contents__bottom'><span>".$info['TalkContents']."</span></div></div>";
        echo "</td></tr>";
    }
?>
                            <!-- <tr>
                                <td class="comment comment_1">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>댕댕이</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>좋은 전시 추천 좀 해주세요~~~~ 데이트 하러 갑니다~</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg
                                            width="22"
                                            height="21"
                                            viewBox="0 0 18 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 16.515L7.695 15.327C3.06 11.124 0 8.352 0 4.95C0 2.178 2.178 0 4.95 0C6.516 0 8.019 0.729 9 1.881C9.981 0.729 11.484 0 13.05 0C15.822 0 18 2.178 18 4.95C18 8.352 14.94 11.124 10.305 15.336L9 16.515Z"
                                                fill="#323232"
                                            />
                                        </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr> -->
                            <!-- <tr>
                                <td class="comment comment_2">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>머릿고기</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>다른 곳보다 여기가 보기 좋고 편리하네요!</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_3">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>말 안들으면 빠따</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>이쯤되면 도배범님 친구소개좀 시켜줘라....</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_4">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_5">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_6">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_7">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_8">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_9">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="comment comment_10">
                                    <div class="profile"></div>
                                    <div class="contents">
                                        <div class="contents__top">
                                            <p class="name"><span class="ir">작성자</span><span>도배범</span></p>
                                            <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                            <a href="#" class="modify">| 수정</a>
                                            <a href="#" class="remove">| 삭제</a>
                                        </div>
                                        <div class="contents__bottom">
                                            <span>나도 데이트.......</span>
                                        </div>
                                    </div>
                                    <div class="heart">
                                        <svg width="22" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.85 0C16.588 0 14.417 1.0594 13 2.73352C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.16512 0 7.19346C0 12.1373 4.42 16.1657 11.115 22.2866L13 24L14.885 22.2736C21.58 16.1657 26 12.1373 26 7.19346C26 3.16512 22.854 0 18.85 0ZM13.13 20.3379L13 20.4687L12.87 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.91063 11.791 5.70245H14.222C14.898 3.91063 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379Z" fill="#323232"/>
                                            </svg>
                                        <p>5</p>
                                        <span class="ir">추천수</span>
                                    </div>
                                </td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="board__pages">
                <ul>
                    <li><a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2498 18L11.2498 12L17.2498 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.25 18L5.25 12L11.25 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a></li>
                    <li><a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 6L8.25 12L14.25 18" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </a></li>
                    <li><a class="active" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a></li>
                    <li><a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75024 6L12.7502 12L6.75024 18" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.75 6L18.75 12L12.75 18" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a></li>
                </ul>
            </div>
        </section>
    </main>

    <?php include "../include/footer.php" ?>
    <!-- //footer -->

    <?php include "../include/script.php" ?>
</body>
</html>