const productCheckboxes = Array.from(
  document.querySelectorAll("[data-cart-product]:not(:disabled)")
);
const cartMasterCheckbox = document.querySelector("[data-cart-select-all]");

const syncMasterCheckbox = (masterCheckbox, checkboxes) => {
  if (!masterCheckbox) return;

  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  masterCheckbox.checked = checkboxes.length > 0 && selectedCount === checkboxes.length;
  masterCheckbox.indeterminate = selectedCount > 0 && selectedCount < checkboxes.length;
  masterCheckbox.disabled = checkboxes.length === 0;
};

const syncCartMasterCheckbox = () => {
  syncMasterCheckbox(cartMasterCheckbox, productCheckboxes);
};

productCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", syncCartMasterCheckbox);
});

cartMasterCheckbox?.addEventListener("change", () => {
  productCheckboxes.forEach((checkbox) => {
    checkbox.checked = cartMasterCheckbox.checked;
  });
  syncCartMasterCheckbox();
});

syncCartMasterCheckbox();
