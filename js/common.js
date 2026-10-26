const LINKS = {
  home: 'index.html',
  list: 'danh-muc.html',
  detail: 'chi-tiet.html',
  cart: 'gio-hang.html',
  login: 'dang-nhap.html',
  register: 'dang-ky.html'
};
const SHOP_NAME = 'TNNT Ceramics';
const LOGO = 'images/logo.jpg'; 
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#e3ece7"/>' +
  '<text x="200" y="205" font-family="Arial" font-size="20" text-anchor="middle" fill="#5d6678">Chưa có ảnh</text></svg>');

function money(n) { return n.toLocaleString('vi-VN') + 'đ'; }
function catName(id) { return CATEGORIES.find(function (c) { return c.id === id; }).name; }
function imgTag(p) {
  return '<img src="images/' + p.img + '" alt="' + p.name.replace(/"/g, '&quot;') +
    '" loading="lazy" onerror="this.onerror=null;this.src=PLACEHOLDER">';
}
function cardHTML(p) {
  return '<a class="card" href="' + LINKS.detail + '?id=' + p.id + '">' +
    '<div class="thumb">' + imgTag(p) + '</div>' +
    '<div class="info"><span class="brand">' + p.brand + '</span>' +
    '<span class="name">' + p.name + '</span>' +
    '<span class="price">' + money(p.price) + '</span></div></a>';
}

function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(function () { t.classList.remove('show'); }, 2200);
}

/* active: 'home' | 'list' */
function renderLayout(active) {
  var drop = CATEGORIES.map(function (c) {
    return '<li><a href="' + LINKS.list + '?cat=' + c.id + '">' + c.name + '</a></li>';
  }).join('');
  document.getElementById('header').outerHTML =
    '<header class="site-header"><div class="wrap">' +
    '<a class="logo" href="' + LINKS.home + '"><img class="logo-img" src="' + LOGO + '" alt="" onerror="this.remove()"><span>' + SHOP_NAME + '</span></a>' +
    '<ul class="nav">' +
    '<li><a href="' + LINKS.home + '"' + (active === 'home' ? ' class="active"' : '') + '>Trang chủ</a></li>' +
    '<li><a href="' + LINKS.list + '"' + (active === 'list' ? ' class="active"' : '') + '>Danh mục sản phẩm</a>' +
    '<ul class="drop">' + drop + '</ul></li></ul>' +
    '<div class="actions"><a class="btn ghost" href="' + LINKS.cart + '">Giỏ hàng</a>' +
    '<a class="btn" href="' + LINKS.login + '">Đăng nhập</a></div></div></header>';
  var lines = CATEGORIES.map(function (c) {
    return '<li><a href="' + LINKS.list + '?cat=' + c.id + '">' + c.name + '</a></li>';
  }).join('');
  var policies = ['Chính sách đổi trả', 'Chính sách vận chuyển', 'Chính sách bảo hành', 'Chính sách thanh toán', 'Chính sách bảo mật']
    .map(function (t) { return '<li><a href="#" class="policy-link">' + t + '</a></li>'; }).join('');
  document.getElementById('footer').outerHTML =
    '<footer class="site-footer"><div class="wrap footer-grid">' +
    '<div><div class="footer-brand"><img class="footer-logo" src="' + LOGO + '" alt="" onerror="this.remove()"><b>' + SHOP_NAME + '</b></div>' +
    '<p>Gốm sứ Bát Tràng và gốm gia dụng chọn lọc, mang nét tinh tế của gốm Việt vào mỗi bàn trà, mâm cơm và gian thờ.</p></div>' +
    '<div><h4>Thông tin liên hệ</h4><ul class="contact">' +
    '<li><span>Địa chỉ</span>273 An Dương Vương, Phường Chợ Quán (Quận 5), Thành phố Hồ Chí Minh</li>' +
    '<li><span>Điện thoại</span><a href="tel:0863962925">0863962925</a></li>' +
    '<li><span>Đại diện</span>Trần Nguyễn Hoàng Nam - Giám đốc</li>' +
    '<li><span>Email</span><a href="mailto:tnntceramics@gmail.com">tnntceramics@gmail.com</a></li></ul></div>' +
    '<div><h4>Dòng sản phẩm</h4><ul>' + lines + '</ul></div>' +
    '<div><h4>Chính sách</h4><ul>' + policies + '</ul></div></div>' +
    '<div class="wrap copyright">&copy; ' + SHOP_NAME + ' - Đồ án Lập trình web và ứng dụng, Khoa CNTT, Đại học Sài Gòn</div></footer>' +
    '<div id="toast" role="status" aria-live="polite"></div>';
  document.querySelectorAll('.policy-link').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); toast('Nội dung chính sách đang được cập nhật'); });
  });
}
