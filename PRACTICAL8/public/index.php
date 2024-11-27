<?php include("db_connect.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Widget Corp</title>
</head>
<body>
    <header>
        <h1>Widget Corp</h1>
    </header>
    <nav>
        <ul>
            <?php
            $sql = "SELECT id, menu_name FROM subjects";
            $result = $conn->query($sql);
            while ($row = $result->fetch_assoc()) {
                echo "<li><a href='index.php?subject=" . $row['id'] . "'>" . $row['menu_name'] . "</a></li>";
            }
            ?>
        </ul>
    </nav>
    <section>
        <?php
        if (isset($_GET['subject'])) {
            $subject_id = $_GET['subject'];
            $sql = "SELECT * FROM pages WHERE subject_id = $subject_id";
            $result = $conn->query($sql);
            while ($row = $result->fetch_assoc()) {
                echo "<h2>" . $row['menu_name'] . "</h2>";
                echo "<p>" . $row['content'] . "</p>";
            }
        } else {
            echo "<p>Welcome to Widget Corp!</p>";
        }
        ?>
    </section>
</body>
</html>
