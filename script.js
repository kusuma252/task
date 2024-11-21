function updatePrice(units, price) {
  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = `$${price}.00 USD`;
}
