const productCheckboxes = Array.from(
  document.querySelectorAll("[data-cart-product]:not(:disabled)")
);
const cartMasterCheckbox = document.querySelector("[data-cart-select-all]");
const brandControls = Array.from(document.querySelectorAll("[data-cart-brand]"), (group) => ({
  masterCheckbox: group.querySelector("[data-cart-brand-toggle]"),
  productCheckboxes: Array.from(
    group.querySelectorAll("[data-cart-product]:not(:disabled)")
  ),
}));

const syncMasterCheckbox = (masterCheckbox, checkboxes) => {
  if (!masterCheckbox) return;

  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  masterCheckbox.checked = checkboxes.length > 0 && selectedCount === checkboxes.length;
  masterCheckbox.indeterminate = selectedCount > 0 && selectedCount < checkboxes.length;
  masterCheckbox.disabled = checkboxes.length === 0;
};

const syncAllMasterCheckboxes = () => {
  brandControls.forEach(({ masterCheckbox, productCheckboxes: brandProducts }) => {
    syncMasterCheckbox(masterCheckbox, brandProducts);
  });
  syncMasterCheckbox(cartMasterCheckbox, productCheckboxes);
};

brandControls.forEach(({ masterCheckbox, productCheckboxes: brandProducts }) => {
  masterCheckbox.addEventListener("change", () => {
    brandProducts.forEach((checkbox) => {
      checkbox.checked = masterCheckbox.checked;
    });
    syncAllMasterCheckboxes();
  });

  brandProducts.forEach((checkbox) => {
    checkbox.addEventListener("change", syncAllMasterCheckboxes);
  });
});

cartMasterCheckbox.addEventListener("change", () => {
  productCheckboxes.forEach((checkbox) => {
    checkbox.checked = cartMasterCheckbox.checked;
  });
  syncAllMasterCheckboxes();
});

syncAllMasterCheckboxes();
