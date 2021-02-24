<?php
include "sql_functions.php";

class AdminAccount
{
    private $username;
    private $password;

    function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;

        $conn = OpenCon();
        $user = FindUser($conn, $this->username, $this->password);
        if ($user->username == NULL) { //checks if user not already in system
            $success = AddNewUser($conn, $username, $password, NULL, NULL, "admin");
        }
        CloseCon($conn);
    }

    function updateUsername($newUsername)
    {
        $conn = OpenCon();
        $success = UpdateUser($conn, $this->username, $newUsername, $this->password, NULL, NULL);
        CloseCon($conn);

        if ($success)
        {
          $this->username = $newUsername;
        }
    }

    function updatePassword($newPassword)
    {
        $conn = OpenCon();
        $success = UpdateUser($conn, $this->username, $this->username, $newPassword, NULL, NULL);
        CloseCon($conn);

        if ($success)
        {
            $this->password = $newPassword;
        }
    }

    function getUsername()
    {
        return $this->username;
    }

    function getPassword()
    {
        return $this->password;
    }
}
?>
