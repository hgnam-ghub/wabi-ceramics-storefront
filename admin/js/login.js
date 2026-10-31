// Kiểm tra đăng nhập đơn giản: đúng thì sang user.html, sai thì hiện thông báo đỏ
var form = document.getElementById("login-form");
var thongBao = document.getElementById("login-error");
 
form.addEventListener("submit", function (e) {
  e.preventDefault(); // không cho form tự gửi đi
 
  var email = document.getElementById("login-email").value.trim();
  var matKhau = document.getElementById("login-password").value;
 
  if (email === "hgnam@ceramics.vn" && matKhau === "123456") {
    window.location.href = "user.html";
  } else {
    thongBao.style.display = "flex"; // hiện thông báo lỗi
  }
});
 