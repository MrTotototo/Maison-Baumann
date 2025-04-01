// ▶️ Activer le son de la vidéo
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const button = document.getElementById("enableSound");

  if (video && button) {
    button.addEventListener("click", () => {
      video.muted = false;
      button.style.display = "none";
    });
  }
});

// 🛒 Gestion du panier
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} ajouté au panier.`);
}

// 🧾 Affichage du panier (page preorder.html)
document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");

  if (cartList && totalDisplay) {
    const stored = localStorage.getItem("cart");
    cart = stored ? JSON.parse(stored) : [];

    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} — ${item.price} €`;
      cartList.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.textContent = `Total : ${total} €`;
  }
});

// ✅ Précommande validée
function validateOrder() {
  alert("Merci pour votre précommande !");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
