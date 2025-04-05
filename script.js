document.addEventListener("DOMContentLoaded", function(){
  // Détection d'appareil
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.add("desktop");
  }

  /* ===== Gestion du panier ===== */
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(){
      const product = this.closest('.product');
      const id = product.getAttribute('data-id');
      const name = product.getAttribute('data-name');
      const price = parseFloat(product.getAttribute('data-price'));
      const existing = cart.find(item => item.id === id);
      if(existing){
        existing.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }
      saveCart();
      alert(`${name} ajouté au panier !`);
    });
  });

  /* ===== Slider Galerie (Desktop) ===== */
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');
  const galleryScroll = document.querySelector('.gallery-scroll');
  if(galleryPrev && galleryNext && galleryScroll) {
    galleryPrev.addEventListener('click', function(){
      const imgWidth = galleryScroll.querySelector('.gallery-item').offsetWidth;
      galleryScroll.scrollBy({ left: -imgWidth, behavior: 'smooth' });
    });
    galleryNext.addEventListener('click', function(){
      const imgWidth = galleryScroll.querySelector('.gallery-item').offsetWidth;
      galleryScroll.scrollBy({ left: imgWidth, behavior: 'smooth' });
    });
  }

  /* ===== Slider Boutique (Desktop) ===== */
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

  /* ===== Ambilight pour Galerie ===== */
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    img.addEventListener('load', function(){
      const color = getAverageColor(img);
      item.style.setProperty('--ambilight-color', color);
    });
  });

  function getAverageColor(img) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext && canvas.getContext('2d');
    if (!context) return '#000';
    const width = canvas.width = img.naturalWidth / 10;
    const height = canvas.height = img.naturalHeight / 10;
    context.drawImage(img, 0, 0, width, height);
    let data, r = 0, g = 0, b = 0, count = 0;
    try {
      data = context.getImageData(0, 0, width, height);
    } catch(e) {
      return '#000';
    }
    for (let i = 0; i < data.data.length; i += 4) {
      r += data.data[i];
      g += data.data[i+1];
      b += data.data[i+2];
      count++;
    }
    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);
    return `rgb(${r},${g},${b})`;
  }

  const style = document.createElement('style');
  style.innerHTML = `.gallery-item::before { background: var(--ambilight-color, #000); }`;
  document.head.appendChild(style);
});
