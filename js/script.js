// script.js
document.addEventListener("DOMContentLoaded", function(){
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(){
      alert("Produit ajouté au panier !");
      // Vous pourrez intégrer ici la gestion du panier via localStorage ou un backend.
    });
  });
});
