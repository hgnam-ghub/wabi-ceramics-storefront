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
document.getElementById('btn-save-address').addEventListener('click', closeModal);
document.getElementById('btn-close-modal-cancel').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
