<?php

    // allow connection
    header ("Access-Control-Allow-Origin: *");
    header ("Content-Type: application/json; charset=UTF-8");

    $data = array ();

    try 
    {
        // db parameters
        $server = "localhost";
        $user = "root";
        $password = "";
        $database = "angularjs";

        $connection = new mysqli ($server, $user, $password, $database);
        $query = " SELECT id, name, age, last_changed FROM user ";
        $statement = $connection -> prepare ($query);
        $statement -> execute ();
        $result = $statement -> get_result ();

        while ($row = $result -> fetch_object ())
        {
            $data[] = $row;
        }
    }
    catch (Exception $ex) 
    {
        $data["success"] = false;
        $data["message"] = $ex -> getMessage ();
    }

    echo json_encode ($data);
?>