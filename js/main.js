var PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#e3ece7"/>' +
  '<text x="200" y="205" font-family="Arial" font-size="20" text-anchor="middle" fill="#5d6678">Chưa có ảnh</text></svg>');

function toast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(function () { t.classList.remove('show'); }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
  // Chính sách chưa có nội dung
  document.querySelectorAll('.policy-link').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); toast('Nội dung chính sách đang được cập nhật'); });
  });

  // Phân trang 
  var pager = document.getElementById('pager');
  if (pager) pager.addEventListener('click', function (e) {
    if (e.target.closest('button')) toast('Đã chuyển trang');
  });

  // Bộ lọc
  var apply = document.getElementById('apply');
  if (apply) apply.addEventListener('click', function () { toast('Đã lọc sản phẩm'); });

  // Trang chi tiết
  var qty = document.getElementById('qty');
  if (qty) {
    var clamp = function () { var v = parseInt(qty.value, 10); qty.value = isNaN(v) || v < 1 ? 1 : Math.min(v, 99); };
    document.getElementById('minus').onclick = function () { clamp(); qty.value = Math.max(1, +qty.value - 1); };
    document.getElementById('plus').onclick = function () { clamp(); qty.value = Math.min(99, +qty.value + 1); };
    qty.onchange = clamp;
    document.getElementById('add').onclick = function () { toast('Đã thêm vào giỏ hàng'); };
  }
});
