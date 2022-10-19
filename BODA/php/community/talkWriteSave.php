<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";

    $TalkContents = $_POST['TalkContents'];
    $TalkContents = $connect -> real_escape_string($TalkContents);
    $regTime = time();
    $myMemberID = $_SESSION['myMemberID'];

    $sql = "INSERT INTO myTalk(myMemberID, TalkContents, regTime) VALUES('$myMemberID', '$TalkContents', '$regTime')";
    $connect -> query($sql);
?>

<script>
    location.href = "Talk.php";
</script>