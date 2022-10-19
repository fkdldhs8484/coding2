<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";

    $ReviewTitle = $_POST['ReviewTitle'];
    $ReviewContents = $_POST['ReviewContents'];

    $ReviewTitle = $connect -> real_escape_string($ReviewTitle);
    $ReviewContents = $connect -> real_escape_string($ReviewContents);
    $ReviewView = 1;
    $ReviewregTime = time();
    $myMemberID = $_SESSION['myMemberID'];

    $sql = "INSERT INTO myReview(myMemberID, ReviewTitle, ReviewContents, ReviewLike, ReviewView, ReviewregTime)
    VALUES('$myMemberID', '$ReviewTitle', '$ReviewContents', '0', '$ReviewView', '$ReviewregTime')";
    $connect -> query($sql);
?>

<script>
    location.href = "Review.php";
</script>