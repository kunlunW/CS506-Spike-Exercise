<?php
include "sql_functions.php";

class StaffAccount
{
    private $username;
    private $password;

    function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;

        $conn = OpenCon();
        $user = FindUser($conn, $this->username, $this->password);
        if ($user->username == NULL)
        { //checks if user not already in system
            $success = AddNewUser($conn, $username, $password, NULL, NULL, "staff");
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

    //update menu item menu item from available to out of stock
    function updateMenuItemOut($name)
    {
        $conn = OpenCon();
        $success = SetMenuItemAsOut($conn, $name);
        CloseCon($conn);

        //***********************************
        // if ($success) {
        //     echo "menu item successfully updated.";
        // } else {
        //     echo "menu item not updated.";
        // }
        //***********************************
    }

    function updateMenuItemIn($name)
    {
      $conn = OpenCon();
      $success = SetMenuItemAsIn($conn, $name);
      CloseCon($conn);

      //***********************************
      // if ($success) {
      //     echo "menu item successfully updated.";
      // } else {
      //     echo "menu item not updated.";
      // }
      //***********************************
    }

    //Print order
    function printOrder($order)
    {

    }

    //prioritize orders?

    function completeOrder($order)
    {

    }

}
?>
