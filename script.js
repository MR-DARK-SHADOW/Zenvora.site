const products = [
  {
    id: 1,
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    desc: "Helps reduce blemishes, control oil & refine skin texture.",
    img: "images/niacinamide.jpg"
  },
  {
    id: 2,
    name: "COSRX Snail Mucin Essence",
    desc: "Hydrating essence with snail mucin for glowing skin.",
    img: "images/cosrx.jpg"
  },
  {
    id: 3,
    name: "CeraVe Hydrating Cleanser",
    desc: "Gentle face wash with ceramides & hyaluronic acid.",
    img: "images/cerave.jpg"
  },
  {
    id: 4,
    name: "Neutrogena Hydro Boost Water Gel",
    desc: "Lightweight moisturizer for intense hydration.",
    img: "images/neutrogena.jpg"
  }
];

// Render products
const list = document.getElementById("product-list");
products.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${p.img}" alt="${p.name}">
                    <h3>${p.name}</h3>`;
  card.onclick = () => {
    window.location.href = `product.html?id=${p.id}`;
  };
  list.appendChild(card);
});

// Search filter
function filterProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  products.forEach((p, i) => {
    if (p.name.toLowerCase().includes(query)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  });
}
