<php?
  $Permission_level = array(
    $Owner => "Ra'Shon",
    $Administrator => "",
    $Users = "",
  );
  
  if ($_POST[UserName => $Owner]) {
    echo $Owner."already exises";
    header("Location: ../index.html", TRUE, 301);
  }
?>