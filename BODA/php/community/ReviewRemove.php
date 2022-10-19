<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";

    $myReviewID = $_GET['myReviewID'];
    $myReviewID = $connect -> real_escape_string($myReviewID);

    $sql = "DELETE FROM myReview WHERE myReviewID = {$myReviewID}";
    $connect -> query($sql);
?>

<script>
    location.href="Review.php";
</script>