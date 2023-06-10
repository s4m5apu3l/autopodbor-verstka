<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $from_email = "Jucherz@bk.ru"; // адрес отправителя
    $to_email = "asperatuz@yandex.ru";  // замените на свой адрес электронной почты

    if (empty($name) OR empty($phone)) {
        // Возвращаем ошибку, если имя или телефон пустые
        http_response_code(400);
        echo "Пожалуйста, заполните все поля формы и отправьте ее еще раз.";
        exit;
    }

    // Подготовка содержимого письма
    $subject = "Новая заявка от $name";
    $content = "Имя: $name\n";
    $content .= "Телефон: $phone\n";

    // Настройка заголовков письма
    $headers = "From: $name <$from_email>";

    // Отправка письма
    $success = mail($to_email, $subject, $content, $headers);
    if ($success){
        http_response_code(200);
        echo "Спасибо! Ваша заявка была отправлена.";
    } else {
        http_response_code(500);
        echo "Ошибка: ваша заявка не может быть отправлена.";
    }
} else {
    http_response_code(403);
    echo "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.";
}
?>
