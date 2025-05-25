var togglePassword = document.querySelector('.toggle-password');
var passwordInput = document.getElementById('psw');

togglePassword.addEventListener('click', function () {
    var isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? 'visibility' : 'visibility_off';
});