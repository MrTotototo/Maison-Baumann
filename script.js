document.addEventListener("DOMContentLoaded", function(){
  // Détection de l'appareil et ajout d'une classe sur le body
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.add("desktop");
  }

  // Exemple d'interaction pour la gestion du panier
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(){
      alert("Produit ajouté au panier !");
      // Vous pourrez intégrer ici la gestion du panier via localStorage ou un backend.
    });
  });
});
