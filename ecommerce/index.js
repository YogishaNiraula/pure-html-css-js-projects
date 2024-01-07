// change cart count as soon as DOM is loaded
document.addEventListener("DOMContentLoaded", async function () {
  const cart = document.getElementById("cart_count")
  let cartCount = localStorage.getItem("cart_count") ?? 0
  cart.innerText = cartCount

  // mobile menu toggle
  const btn = document.getElementById("mobile-menu-button")
  btn.addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu")
    // display menu only when btn is clicked and style for display is none
    if (menu.style.display === "block") {
      menu.style.display = "none"
    } else {
      menu.style.display = "block"
    }
  })
})

function addToCart() {
  let cartCount = localStorage.getItem("cart_count") ?? 0
  let increasedCount = parseInt(cartCount) + 1
  // since cartCount from storage is string, change it to integer
  // and update count in localstorage and DOM
  localStorage.setItem("cart_count", increasedCount)
  const cart = document.getElementById("cart_count")
  cart.innerText = increasedCount
  // update cart total
  localStorage.setItem("cart_total", 63000 * increasedCount)
}

function onCartClick() {
  let cartCount = localStorage.getItem("cart_count") ?? 0
  // check if cart count is 0. Only if it's not 0
  // navigate to checkout form page
  if (cartCount === 0) return
  window.location.href = "checkout-form.html"
}
