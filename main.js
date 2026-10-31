var PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#e3ece7"/>' +
  '<text x="200" y="205" font-family="Arial" font-size="20" text-anchor="middle" fill="#5d6678">Chưa có ảnh</text></svg>');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.policy-link').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  var qty = document.getElementById('qty');
  if (qty) {
    var clamp = function () { var v = parseInt(qty.value, 10); qty.value = isNaN(v) || v < 1 ? 1 : Math.min(v, 99); };
    document.getElementById('minus').onclick = function () { clamp(); qty.value = Math.max(1, +qty.value - 1); };
    document.getElementById('plus').onclick = function () { clamp(); qty.value = Math.min(99, +qty.value + 1); };
    qty.onchange = clamp;
  }
});
