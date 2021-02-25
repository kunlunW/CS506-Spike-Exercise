<?php
include "sql_functions.php"

class Order
{
    private $username;
    private $menuname;
    private $quantity;
    private $pickupdate;
    private $orderID;
    private $vehdesc;
    private $priority;
    
    function __construct($userName, $menuname, $quantity, $pickupdate, $vehdesc)
    {
        $this->username = $username;
        $this->menuname = $menuname;
        $this->quantity = $quantity;
        $this->pickupdate = $pickupdate;
        $this->vehdesc = $vehdesc;
        
        $conn = OpenCon();
        $this->orderID = GetNextID($conn);
        $user = FindOrder($conn, $this->username);
        
        AddOrder($this->conn, $this->orderID, $this->menuname, $this->quantity, $this->pickupdate, $this->vehdesc, $priority='5');
    }
}
?>
