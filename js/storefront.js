var PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#e3ece7"/>' +
  '<text x="200" y="205" font-family="Arial" font-size="20" text-anchor="middle" fill="#5d6678">Chưa có ảnh</text></svg>');

document.addEventListener('error', function (event) {
  var image = event.target;
  if (!(image instanceof HTMLImageElement)) return;

  if (image.dataset.imageFallback === 'remove') {
    image.remove();
  } else if (image.dataset.imageFallback === 'placeholder') {
    image.removeAttribute('data-image-fallback');
    image.src = PLACEHOLDER;
  }
}, true);

function toast(msg, style) {
  var t = document.getElementById('toast');
  if (!t) return;
  clearTimeout(toast.displayTimer);
  clearTimeout(toast.cleanupTimer);
  t.textContent = msg;
  t.classList.toggle('is-save-toast', style === 'save');
  t.classList.add('show');
  toast.displayTimer = setTimeout(function () {
    t.classList.remove('show');
    toast.cleanupTimer = setTimeout(function () { t.classList.remove('is-save-toast'); }, 200);
  }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
  // Chính sách chưa có nội dung
  document.querySelectorAll('.policy-link').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); toast('Nội dung chính sách đang được cập nhật'); });
  });

  var profileSave = document.getElementById('btn-save-profile');
  if (profileSave) profileSave.addEventListener('click', function () { toast('Đã lưu thông tin hồ sơ', 'save'); });

  var profileSaveExit = document.getElementById('btn-save-profile-exit');
  if (profileSaveExit) profileSaveExit.addEventListener('click', function () {
    sessionStorage.setItem('profileEditSaved', 'true');
  });

  var profileOverview = document.querySelector('.profile-overview-content');
  if (profileOverview && sessionStorage.getItem('profileEditSaved') === 'true') {
    sessionStorage.removeItem('profileEditSaved');
    toast('Đã lưu thông tin hồ sơ', 'save');
  }

  var checkoutSubmit = document.querySelector('.checkout-submit');
  if (checkoutSubmit) checkoutSubmit.addEventListener('click', function () {
    sessionStorage.setItem('checkoutOrderFeedback', 'true');
  });

  var orderPage = document.querySelector('.profile-orders-page');
  if (orderPage && sessionStorage.getItem('checkoutOrderFeedback') === 'true') {
    sessionStorage.removeItem('checkoutOrderFeedback');
    toast('Đặt hàng thành công');
  }

  // Phân trang
  var pager = document.getElementById('pager');
  if (pager) pager.addEventListener('click', function (e) {
    if (e.target.closest('button')) toast('Đã chuyển trang');
  });

  // Ô nhập giá: tự thêm dấu chấm ngăn cách hàng nghìn và đọc số bằng chữ để dễ phân biệt triệu, tỷ
  function words(n) {
    var ty = Math.floor(n / 1e9), tr = Math.floor(n % 1e9 / 1e6), ng = Math.floor(n % 1e6 / 1e3), le = n % 1e3, p = [];
    if (ty) p.push(ty + ' tỷ');
    if (tr) p.push(tr + ' triệu');
    if (ng) p.push(ng + ' nghìn');
    if (le) p.push(le);
    return p.join(' ') + ' đồng';
  }
  document.querySelectorAll('.price-input').forEach(function (inp) {
    var hint = inp.parentNode.querySelector('.price-hint');
    inp.addEventListener('input', function () {
      var before = inp.value.slice(0, inp.selectionStart).replace(/\D/g, '').length;
      var d = inp.value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 12);
      inp.value = d.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      hint.textContent = d ? '= ' + words(parseInt(d, 10)) : '';
      var i = 0, c = 0;
      while (i < inp.value.length && c < before) { if (/\d/.test(inp.value.charAt(i))) c++; i++; }
      inp.setSelectionRange(i, i);
    });
  });

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
