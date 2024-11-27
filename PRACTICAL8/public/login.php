<?php include("db_connect.php"); session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Admin Login</title>
</head>
<body>
    <h2>Login</h2>
    <form action="login.php" method="post">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM admins WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $_SESSION['admin'] = $username;
            header("Location: admin.php");
        } else {
            echo "<p>Invalid credentials. Please try again.</p>";
        }
    }
    ?>
</body>
</html>
