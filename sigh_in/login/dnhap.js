function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin@gmail.com' && password === '123456') {
        message.style.color = 'green';
        message.innerText = 'Đăng nhập thành công!';
    } else {
        message.style.color = 'red';
        message.innerText = 'Tên người dùng hoặc mật khẩu không đúng.';
    }
}
