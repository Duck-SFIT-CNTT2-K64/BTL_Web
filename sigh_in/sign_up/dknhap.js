// Kiểm tra định dạng email khi người dùng nhập
function validateEmail() {
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("errorMessage");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email không đúng định dạng!";
    } else {
        errorMessage.textContent = "";
    }
}

function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    // Kiểm tra email trước khi gửi form
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email không đúng định dạng!";
        return false;
    }

    // Kiểm tra định dạng số điện thoại
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = "Số điện thoại phải có 10 chữ số!";
        return false;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        errorMessage.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}
