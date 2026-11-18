const modal = document.getElementById('address-modal');
const closeModal = () => {
	modal.classList.remove('show');
	modal.setAttribute('aria-hidden', 'true');
	document.body.classList.remove('address-modal-open');
};
const openModal = () => {
	modal.classList.add('show');
	modal.setAttribute('aria-hidden', 'false');
	document.body.classList.add('address-modal-open');
};

document.getElementById('btn-open-modal').addEventListener('click', openModal);
document.querySelectorAll('.btn-edit').forEach((button) => button.addEventListener('click', openModal));
document.getElementById('btn-save-address').addEventListener('click', () => {
	toast('Đã lưu địa chỉ', 'save');
	closeModal();
});
document.querySelectorAll('.btn-set-default').forEach((button) => button.addEventListener('click', () => {
	toast('Đã đặt địa chỉ mặc định');
}));
document.querySelectorAll('.btn-delete').forEach((button) => button.addEventListener('click', () => {
	toast('Đã xóa địa chỉ');
}));
document.getElementById('btn-close-modal-cancel').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
