<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>REVIEW WRITE</title>
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
        <main id="main">
        <h2 class="blind">리뷰 게시판 글쓰기 페이지입니다.</h2>
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
                <form action="ReviewWriteSave.php" name="ReviewWrite" method="post" enctype="multipart/form-data">
                    <fieldset>
                        <legend class="blind">리뷰 게시글 작성 영역</legend>
                        <div class="mid__ikon">
                            <div class="Photo">
                                <label for="reviewFile">
                                    <svg width="20" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM10.96 9.29L8.21 12.83L6.25 10.47L3.5 14H14.5L10.96 9.29Z"
                                        fill="#323232" />
                                    </svg>
                                </label>
                                <input class="blind" type="file" name="reviewFile" id="reviewFile" accept=".jpg, .jpeg, .png, .gif" placeholder="jpg(jpeg), png, gif 파일만 첨부 가능합니다.">
                            </div>
                            <div class="link">
                                <svg width="24" height="24 " viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z"
                                        fill="#323232" />
                                </svg>
                            </div>
                            <div class="center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_632_4658)">
                                        <path d="M3 21H21V19H3V21ZM3 17H21V15H3V17ZM3 13H21V11H3V13ZM3 9H21V7H3V9ZM3 3V5H21V3H3Z"
                                            fill="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_632_4658">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="left">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_632_4661)">
                                        <path d="M15 15H3V17H15V15ZM15 7H3V9H15V7ZM3 13H21V11H3V13ZM3 21H21V19H3V21ZM3 3V5H21V3H3Z"
                                            fill="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_632_4661">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="right">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_632_4664)">
                                        <path d="M3 21H21V19H3V21ZM9 17H21V15H9V17ZM3 13H21V11H3V13ZM9 9H21V7H9V9ZM3 3V5H21V3H3Z"
                                            fill="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_632_4664">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="ikon_U">
                                <svg width="22" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_632_4673)">
                                        <path
                                            d="M12 17C15.31 17 18 14.31 18 11V3H15.5V11C15.5 12.93 13.93 14.5 12 14.5C10.07 14.5 8.5 12.93 8.5 11V3H6V11C6 14.31 8.69 17 12 17ZM5 19V21H19V19H5Z"
                                            fill="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_632_4673">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="ikon_B">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_632_4667)">
                                        <path
                                            d="M16.25 11.2394C17.2604 10.5415 17.9687 9.39567 17.9687 8.33317C17.9687 5.979 16.1458 4.1665 13.802 4.1665H7.29163V18.7498H14.625C16.802 18.7498 18.4895 16.979 18.4895 14.8019C18.4895 13.2186 17.5937 11.8644 16.25 11.2394ZM10.4166 6.77067H13.5416C14.4062 6.77067 15.1041 7.46859 15.1041 8.33317C15.1041 9.19775 14.4062 9.89567 13.5416 9.89567H10.4166V6.77067ZM14.0625 16.1457H10.4166V13.0207H14.0625C14.927 13.0207 15.625 13.7186 15.625 14.5832C15.625 15.4478 14.927 16.1457 14.0625 16.1457Z"
                                            fill="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_632_4667">
                                            <rect width="25" height="25" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div class="board">
                            <div class="board__table">
                                <table>
                                    <colgroup>
                                        <col style="width: 30%" />
                                        <col style="width: 60%" />
                                        <col style="width: 16%" />
                                    </colgroup>
                                    <div>
                                        <label class="blind" for="ReviewTitle">제목</label>
                                        <input type="text" name="ReviewTitle" class="Title" placeholder="제목을 입력해 주세요." required>
                                    </div>
                                    <div>
                                        <label class="blind" for="ReviewContents">내용</label>
                                        <textarea name="ReviewContents" class="Contents" rows="20" required></textarea>
                                    </div>
                                </table>
                            </div>
                            <div class="table__bottom">
                                <div class="btn">
                                    <a href="Review.php">목록</a>
                                    <button type="submit" value="저장">저장</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </main>
        <?php include "../include/footer.php" ?>
        <!-- //footer -->
        <?php include "../include/script.php" ?>
    </body>
</html>