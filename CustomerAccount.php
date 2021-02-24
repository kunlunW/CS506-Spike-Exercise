<?php
include "sql_functions.php";

class CustomerAccount
{
    private $username;
    private $password;
    private $address;
    private $phonenumber;
    private $cardnum;
    private $expdate;
    private $cvv;

    function __construct($username, $password, $address, $phonenumber)
    {
        $this->username = $username;
        $this->password = $password;
        $this->address = $address;
        $this->phonenumber = $phonenumber;
        $this->cardnum = NULL;
        $this->expdate = NULL;
        $this->cvv = NULL;

        $conn = OpenCon();
        $user = FindUser($conn, $this->username, $this->password);
        if ($user->username == NULL)
        { //checks if user already in system
            AddNewUser($conn, $username, $password, $address, $phonenumber, "customer");
        } else
        {
            //Checks if card info has been added earlier
            if ($user->cardnum != NULL and $user->expdate != NULL and $user->cvv != NULL)
            {
                $this->cardnum = $user->cardnum;
                $this->expdate = $user->expdate;
                $this->cvv = $user->cvv;
            }
        }
    }

    function updateUsername($newUsername)
    {
        $conn = OpenCon();
        $success = UpdateUser($conn, $this->username, $newUsername, $this->password,
                                                $this->address, $this->phonenumber);
        CloseCon($conn);

        if ($success)
        {
          $this->username = $newUsername;
        }
    }

    function updatePassword($newPassword)
    {
        $conn = OpenCon();
        $success = UpdateUser($conn, $this->username, $this->username, $newPassword,
                                                $this->address, $this->phonenumber);
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

    function addPaymentMethod($cardnum, $expdate, $cvv)
    {
        $conn = OpenCon();
        $success = UpdatePaymentInfo($conn, $this->username, $cardnum, $expdate, $cvv);
        CloseCon();
    }
}
?>
