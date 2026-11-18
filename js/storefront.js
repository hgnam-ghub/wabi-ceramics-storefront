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

  var profilePhone = document.getElementById('profile-phone');
  var profilePhoneError = document.getElementById('profile-phone-error');

  function formatProfilePhone(value) {
    var digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return digits.slice(0, 4) + ' ' + digits.slice(4);
    return digits.slice(0, 4) + ' ' + digits.slice(4, 7) + ' ' + digits.slice(7);
  }

  function setProfilePhoneError(message) {
    if (!profilePhone) return;
    profilePhone.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (profilePhoneError) profilePhoneError.textContent = message;
  }

  function validateProfilePhone() {
    if (!profilePhone) return true;
    var digits = profilePhone.value.replace(/\D/g, '');
    var message = '';
    if (!digits) message = 'Vui lòng nhập số điện thoại';
    else if (!/^0/.test(digits)) message = 'Số điện thoại phải bắt đầu bằng 0';
    else if (digits.length !== 10) message = 'Số điện thoại phải có đủ 10 chữ số';
    setProfilePhoneError(message);
    if (message) {
      profilePhone.focus();
      return false;
    }
    return true;
  }

  if (profilePhone) {
    profilePhone.value = formatProfilePhone(profilePhone.value);
    profilePhone.addEventListener('input', function () {
      var before = profilePhone.value.slice(0, profilePhone.selectionStart).replace(/\D/g, '').length;
      profilePhone.value = formatProfilePhone(profilePhone.value);
      setProfilePhoneError('');
      var cursor = 0;
      var digitCount = 0;
      while (cursor < profilePhone.value.length && digitCount < before) {
        if (/\d/.test(profilePhone.value.charAt(cursor))) digitCount++;
        cursor++;
      }
      profilePhone.setSelectionRange(cursor, cursor);
    });
    profilePhone.addEventListener('blur', function () {
      if (profilePhone.value.replace(/\D/g, '')) validateProfilePhone();
    });
  }

  var profileSave = document.getElementById('btn-save-profile');
  if (profileSave) profileSave.addEventListener('click', function () {
    if (validateProfilePhone()) toast('Đã lưu thông tin hồ sơ', 'save');
  });

  var profileSaveExit = document.getElementById('btn-save-profile-exit');
  if (profileSaveExit) profileSaveExit.addEventListener('click', function (event) {
    if (!validateProfilePhone()) {
      event.preventDefault();
      return;
    }
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
