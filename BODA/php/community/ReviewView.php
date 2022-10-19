<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <!-- CSS -->
        <?php include "../include/link.php" ?>
        <title>REVIEW VIEW</title>
    </head>
    <body>
        <div id="skip">
            <a href="#header">헤더 영역 바로가기</a>
            <a href="#main">콘텐츠 영역 바로가기</a>
            <a href="#footer">푸터 영역 바로가기</a>
        </div>
        <?php include "../include/header.php" ?>
        <!-- //header -->
    
        <main id="main">
            <h2 class="blind">리뷰 게시판 보기 페이지입니다.</h2>
            <div class="main__header top__container">
                <h2>TODAY's</h2>
                <h2>Review</h2>
                <div class="home">
                <span><a href="#">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="#323232"/>
                    </svg>
                    </a></span><span>REVIEW</span></div>
                <div class="menu">
                    <li><a href="Review.php" class="active">REVIEW</a></li>
                    <li><a href="Talk.php">Talk</a></li>
                </div>
            </div>
            <section class="mid__container">
                <div class="viewBoard">
                    <div class="board__table">
                        <table>
                            <colgroup>
                                <col style="width: 16%" />
                                <col style="width: 60%" />
                                <col style="width: 16%" />
                            </colgroup>
<?php
    $myReviewID = $_GET['myReviewID'];

    // 조회수 + 1(UPDATE)
    $sql = "UPDATE myReview set ReviewView = ReviewView + 1 WHERE myReviewID = {$myReviewID}";
    $connect -> query($sql);
    
    $sql = "SELECT r.ReviewTitle, m.youNickName, r.ReviewregTime, r.ReviewView, r.ReviewContents, r.ReviewLike FROM myReview r JOIN myMember m ON(r.myMemberID = m.myMemberID) WHERE r.myReviewID = {$myReviewID}";
    $result = $connect -> query($sql);

    if($result){
        $info = $result -> fetch_array(MYSQLI_ASSOC);

        echo "<thead><tr><th>".$info['youNickName']."</th>";
        echo "<th>".$info['ReviewTitle']."</th>";
        echo "<th>".date('Y-m-d H:i', $info['ReviewregTime'])."</th></tr></thead>";
        echo "<tbody><tr><td colspan='3'><div class='height'>".$info['ReviewContents']."</td></tr></tr></tbody>";
    }
?>
                        </table>
                        <div class="table__bottom">
                            <div class="icon">
                                <div class="eye">
                                    <svg
                                        width="22"
                                        height="15"
                                        viewBox="0 0 22 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
                                            fill="#323232"
                                        />
                                    </svg>
                                    <span> 
                                        <? echo $info['ReviewView']; ?>
                                    </span>
                                    <span class="ir">조회수</span>
                                </div>
                                <div class="heart">
                                    <svg
                                        width="18"
                                        height="17"
                                        viewBox="0 0 18 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 16.515L7.695 15.327C3.06 11.124 0 8.352 0 4.95C0 2.178 2.178 0 4.95 0C6.516 0 8.019 0.729 9 1.881C9.981 0.729 11.484 0 13.05 0C15.822 0 18 2.178 18 4.95C18 8.352 14.94 11.124 10.305 15.336L9 16.515Z"
                                            fill="#323232"
                                        />
                                    </svg>
                                    <span>
                                        <? echo $info['ReviewLike']; ?>
                                    </span>
                                    <span class="ir">추천수</span>
                                </div>
                            </div>
                            <div class="btn">
                                <a href="ReviewModify.php?myReviewID=<?=$myReviewID?>">수정</a>
                                <a href="ReviewRemove.php?myReviewID=<?=$myReviewID?>" onclick="alert('정말로 삭제할까요...?')">삭제</a>
                                <a href="Review.php">목록</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bestcomments">
                    <form action="" name="" method="">
                        <fieldset>
                            <legend>댓글 작성 영역</legend>
                            <div>
                                <label for="bestcomments">내용</label>
                                <input
                                    name="bestcomments"
                                    id="bestcomments"
                                    placeholder="댓글을 입력해 보세요.">
                                <button type="submit" class="btn">등록</button>
                            </div>
                        </fieldset>
                    </form>
                    <div class="bestcommentsList">
                        <div class="comment comment_1">
                            <div class="profile">
                            </div>
                            <div class="contents">
                                <div class="contents__top">
                                    <p class="name"><span class="ir">작성자</span><span>댕댕이</span></p>
                                    <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                    <a href="#" class="modify">| 수정</a>
                                    <a href="#" class="remove">| 삭제</a>
                                </div>
                                <div class="contents__bottom">
                                    <span>삼대가 망하시길 바랍니다.</span>
                                </div>
                            </div>
                        </div>
                        <div class="comment comment_2">
                            <div class="profile">
                            </div>
                            <div class="contents">
                                <div class="contents__top">
                                    <p class="name"><span class="ir">작성자</span><span>머릿고기</span></p>
                                    <p class="date"><span class="ir">작성일</span><span>| 2022-09-18</span></p>
                                    <a href="#" class="modify">| 수정</a>
                                    <a href="#" class="remove">| 삭제</a>
                                </div>
                                <div class="contents__bottom">
                                    <span>배고픈데 건드리지 마세요.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <?php include "../include/footer.php" ?>
        <!-- //footer -->

        <?php include "../include/script.php" ?>
    </body>
</html>
