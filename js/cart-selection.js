const cartMasterCheckbox = document.querySelector("[data-cart-select-all]");
const cartItemList = document.querySelector(".cart-item-list");

const getProductCheckboxes = () => Array.from(
  document.querySelectorAll("[data-cart-product]:not(:disabled)")
);

const syncMasterCheckbox = (masterCheckbox, checkboxes) => {
  if (!masterCheckbox) return;

  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  masterCheckbox.checked = checkboxes.length > 0 && selectedCount === checkboxes.length;
  masterCheckbox.indeterminate = selectedCount > 0 && selectedCount < checkboxes.length;
  masterCheckbox.disabled = checkboxes.length === 0;
};

const syncCartMasterCheckbox = () => {
  syncMasterCheckbox(cartMasterCheckbox, getProductCheckboxes());
};

const clampQuantity = (input) => {
  const parsedQuantity = Number.parseInt(input.value, 10);
  const quantity = Number.isNaN(parsedQuantity)
    ? 1
    : Math.max(1, Math.min(parsedQuantity, 99));

  input.value = String(quantity);
  input.closest(".cart-quantity")?.setAttribute("aria-label", `Số lượng ${quantity}`);
};

cartItemList?.addEventListener("change", (event) => {
  if (event.target.matches("[data-cart-product]")) {
    syncCartMasterCheckbox();
  }

  if (event.target.matches(".cart-quantity input")) {
    clampQuantity(event.target);
  }
});

cartMasterCheckbox?.addEventListener("change", () => {
  getProductCheckboxes().forEach((checkbox) => {
    checkbox.checked = cartMasterCheckbox.checked;
  });
  syncCartMasterCheckbox();
});

cartItemList?.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".cart-remove");
  if (removeButton) {
    toast("Đã xóa sản phẩm khỏi giỏ hàng");
    return;
  }

  const quantityButton = event.target.closest(".cart-quantity button");
  if (!quantityButton || quantityButton.disabled) return;

  const quantity = quantityButton.closest(".cart-quantity");
  const input = quantity.querySelector("input");
  if (!input || input.readOnly || input.disabled) return;

  clampQuantity(input);
  const direction = quantityButton === quantity.querySelector("button:last-of-type") ? 1 : -1;
  input.value = String(Math.max(1, Math.min(Number(input.value) + direction, 99)));
  clampQuantity(input);
});

syncCartMasterCheckbox();
