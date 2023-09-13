<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moonxel - Content</title>
    <!-- Add your CSS stylesheets and external dependencies here -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Include the header -->
    <?php include 'header.php'; ?>

    <!-- Include the navigation bar (JavaScript approach) -->
    <div id="navbar-placeholder"></div>

    <!-- Content area -->
    <main>
        <h1>Content</h1>

        <!-- PHP code to retrieve content from the database -->
        <?php
        // Replace with your database connection code
        $host = 'your_database_host';
        $user = 'your_database_user';
        $password = 'your_database_password';
        $database = 'your_database_name';

        $conn = new mysqli($host, $user, $password, $database);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM your_content_table";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<h2>" . $row['title'] . "</h2>";
                echo "<p>" . $row['description'] . "</p>";
            }
        } else {
            echo "No content available.";
        }

        $conn->close();
        ?>

    </main>

    <!-- Include the footer -->
    <?php include 'footer.php'; ?>
</body>
</html>
