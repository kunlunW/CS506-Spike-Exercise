<?php
function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "spike exercise";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
    return $conn;
}
 
function CloseCon($conn)
{
    $conn -> close();
}

function CreateUsersTable($conn) 
{
    $sql = "CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL UNIQUE,
    phonenumber CHAR(10),
    address VARCHAR(255),
    type ENUM('customer', 'admin', 'staff') DEFAULT 'customer',
    cardnum CHAR(16),
    expdate CHAR(4),
    cvv CHAR(4)
    )";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function DropUsersTable($conn) 
{
    $sql = "DROP TABLE Users";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return true;
    }
}

function AddNewUser($conn, $username, $password, $phonenumber, $address, $type="customer")
{
    if ($type !== "customer" and $type !== "admin" and $type !== "staff") {
        $type = "customer";
    }

    $sql = "INSERT INTO users (username, password, phonenumber, address, type) 
    VALUES ('$username', '$password', '$phonenumber', '$address', '$type')";
    
    if ($conn->query($sql) === TRUE) {
        //echo nl2br("New user added successfully\r\n");
        return true;
    } else {
        //echo nl2br("Error adding new user: " . $conn->error . "\r\n");
        return false;
    }
}

function FindUser($conn, $username, $password)
{
    $sql = "SELECT * 
    FROM users 
    WHERE username='$username' AND password='$password'";

    return $result = $conn->query($sql);
}
/*
function FindUserById($conn, $id)
{
    $sql = "SELECT * 
    FROM users 
    WHERE id='$id'";

    return $result = $conn->query($sql);
}
 */
function DeleteUser($conn, $username)
{
    $sql = "DELETE FROM users
    WHERE username='$username'";

    if ($conn->query($sql) === true) {
        //echo nl2br("User was successfully deleted\r\n");
        return true;
    } else {
        //echo nl2br("User was not deleted\r\n");
        return false;
    }
}

function UpdateUser($conn, $oldusername, $username, $password, $phonenumber, $address)
{
    $sql = "UPDATE users SET username='$username', password='$password', 
    phonenumber='$phonenumber', address='$address'
    WHERE username='$oldusername'";

    if ($conn->query($sql) === true) {
        //echo nl2br("User was successfully updated\r\n");
        return true;
    } else {
        //echo nl2br("User was not updated\r\n");
        return false;
    }
}

function ContainsPassword($conn, $password)
{
    $sql = "SELECT id
    FROM users
    WHERE password='$password'";

    $result = $conn->query($sql);
    return ($result->num_rows === 1);
}

function ContainsUsername($conn, $username)
{
    $sql = "SELECT id
    FROM users
    WHERE username='$username'";

    $result = $conn->query($sql);
    return ($result->num_rows !== 0);
}

function UpdatePaymentInfo($conn, $username, $cardnum, $expdate, $cvv)
{
    $sql = "UPDATE users SET cardnum='$cardnum', expdate='$expdate', cvv='$cvv'
    WHERE username='$username'";
    
    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function CreateMenuTable($conn)
{
    $sql = "CREATE TABLE menu (
    name VARCHAR(255) PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    type available('yes', 'no') DEFAULT 'yes',
    )";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function DropMenuTable($conn) 
{
    $sql = "DROP TABLE menu";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return true;
    }
}

function GetMenu($conn) 
{

}

function FindMenuItem($conn, $id)
{

}

function AddMenuItem($conn, $name, $image, $price, $avail)
{

}

function UpdateMenuItem($conn, $id, $name, $image, $price, $avail)
{

}

function SetMenuItemAsOut($conn, $id)
{

}

function SetMenuItemAsIn($conn, $id)
{

}
?>
