document.addEventListener("DOMContentLoaded", function(){
  // Détection de l'appareil et ajout d'une classe sur le body
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.add("desktop");
  }

  // Gestion du panier
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(){
      alert("Produit ajouté au panier !");
      // Intégrer ici la gestion du panier via localStorage ou un backend.
    });
  });

  // Fonctionnalités pour les flèches de la galerie (desktop)
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');
  const galleryScroll = document.querySelector('.gallery-scroll');
  if(galleryPrev && galleryNext && galleryScroll) {
    galleryPrev.addEventListener('click', function(){
      galleryScroll.scrollBy({ left: -300, behavior: 'smooth' });
    });
    galleryNext.addEventListener('click', function(){
      galleryScroll.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // Fonctionnalités pour les flèches de la boutique (desktop)
  const shopPrev = document.getElementById('shop-prev');
  const shopNext = document.getElementById('shop-next');
  const productsContainer = document.querySelector('.products-container');
  if(shopPrev && shopNext && productsContainer) {
    shopPrev.addEventListener('click', function(){
      productsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    shopNext.addEventListener('click', function(){
      productsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});
