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
    $sql = "CREATE TABLE Users (
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

function CreateOrderTable($conn) 
{
    $sql = "CREATE TABLE Order (
    username VARCHAR(255) PRIMARY KEY,
    menuitem VARCHAR(255),
    type ENUM('customer', 'admin', 'staff') DEFAULT 'customer',
    )";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function DropOrderTable($conn) 
{
    $sql = "DROP TABLE Order";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return true;
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
        return false;
    }

    $sql = "INSERT INTO users (username, password, phonenumber, address, type) 
    VALUES ('$username', '$password', '$phonenumber', '$address', '$type')";
    
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
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

function DeleteUser($conn, $username)
{
    $sql = "DELETE FROM users
    WHERE username='$username'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function UpdateUser($conn, $oldusername, $username, $password, $phonenumber, $address)
{
    $sql = "UPDATE users SET username='$username', password='$password', 
    phonenumber='$phonenumber', address='$address'
    WHERE username='$oldusername'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}


function UpdateOrder($conn, $oldusername, $username, $menuitem)
{
    $sql = "UPDATE Order SET username='$username', menuitem='$menuitem'
    WHERE username='$oldusername'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
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
    available ENUM('yes', 'no') DEFAULT 'yes'
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
    $sql = "SELECT * 
    FROM menu";

    return $result = $conn->query($sql);
}

/*
 * Deletes the menu item specified by $name. Note that this function will return true
 * even if there is no item in the table by the name of $name. This function will only
 * return false if the query fails to execute.
 */
function DeleteMenuItem($conn, $name)
{
    $sql = "DELETE FROM menu
    WHERE name='$name'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function AddMenuItem($conn, $name, $image, $price, $avail)
{
    if ($avail !== "yes" and $avail !== "no") {
        return false;
    }

    $sql = "INSERT INTO menu (name, image, price, available) 
    VALUES ('$name', '$image', '$price', '$avail')";
    
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function UpdateMenuItem($conn, $oldname, $name, $image, $price, $avail)
{
    $sql = "UPDATE menu SET name='$name', image='$image', 
    price='$price', available='$avail'
    WHERE name='$oldname'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function GetMenuItem($conn, $name)
{
    $sql = "SELECT * 
    FROM menu 
    WHERE name='$name'";

    return $result = $conn->query($sql);
}

function SetMenuItemAsOut($conn, $name)
{
    $sql = "UPDATE menu SET available='no'
    WHERE name='$name'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function SetMenuItemAsIn($conn, $name)
{
    $sql = "UPDATE menu SET available='yes'
    WHERE name='$name'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function CreateOrdersTable($conn)
{ // TODO set up order date and pick up date
    $sql = "CREATE TABLE orders (
    id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    menuname VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    priority ENUM('1', '2', '3', '4', '5'),
    complete ENUM('yes', 'no') DEFAULT 'no',
    orderdate DATETIME,
    pickupdate DATETIME,
    vehicledescription VARCHAR(255)
    )";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function DropOrdersTable($conn)
{
    $sql = "DROP TABLE orders";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return true;
    }
}

function GetNextId($conn)
{
    $sql = "SELECT *
    FROM orders
    ORDER BY id DESC
    LIMIT 1";

    $result = $conn->query($sql);

    if ($result->num_rows === 0)
        return 1;
    else 
        return ($result->fetch_assoc()["id"] + 1);
}

function AddOrder($conn, $id, $username, $menuname, $quantity, $pickupdate, $vehdesc, $priority='5')
{
    $sql = "SELECT CURRENT_TIMESTAMP() AS Date";

    $orderdate = $conn->query($sql)->fetch_assoc()["Date"];
    
    $sql = "INSERT INTO orders (id, username, menuname, quantity, priority, orderdate, pickupdate, vehicledescription) 
    VALUES ('$id', '$username', '$menuname', '$quantity', '$priority', '$orderdate', '$pickupdate', '$vehdesc')";
    
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function DeleteOrder($conn, $id) 
{
    $sql = "DELETE FROM orders
    WHERE id='$id'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    } 
}

function GetOrder($conn, $id)
{
    $sql = "SELECT * 
    FROM orders
    WHERE id='$id'";

    return $result = $conn->query($sql); 
}

function GetAllIncompleteOrders($conn)
{
    $sql = "SELECT * 
    FROM orders
    WHERE complete='no'
    ORDER BY priority ASC, id DESC";

    return $result = $conn->query($sql);
}

function MarkOrderAsComplete($conn, $id)
{
    $sql = "UPDATE orders SET complete='yes'
    WHERE id='$id'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function MarkOrderAsIncomplete($conn, $id)
{
    $sql = "UPDATE orders SET complete='no'
    WHERE id='$id'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}

function GetOrdersWithDateRange($conn, $startdate, $enddate)
{
    $sql = "SELECT * 
    FROM orders
    WHERE '$startdate'<=orderdate AND orderdate<'enddate'";

    return $result = $conn->query($sql);
}

function ChangeOrderPriority($conn, $id, $priority)
{
    $sql = "UPDATE orders SET priority='$priority'
    WHERE id='$id'";

    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
}
?>
