const products = [
  {
    id: 1,
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    desc: "This powerful serum helps reduce blemishes, control excess oil, and refine skin texture for a clearer complexion.",
    img: "images/niacinamide.jpg"
  },
  {
    id: 2,
    name: "COSRX Snail Mucin Essence",
    desc: "A deeply hydrating essence with 96% snail mucin extract that repairs skin, fades scars, and leaves you glowing.",
    img: "images/cosrx.jpg"
  },
  {
    id: 3,
    name: "CeraVe Hydrating Cleanser",
    desc: "Gentle non-foaming cleanser with ceramides and hyaluronic acid, perfect for dry & sensitive skin.",
    img: "images/cerave.jpg"
  },
  {
    id: 4,
    name: "Neutrogena Hydro Boost Water Gel",
    desc: "A lightweight gel moisturizer with hyaluronic acid that provides 48hr hydration without clogging pores.",
    img: "images/neutrogena.jpg"
  }
];

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const product = products.find(p => p.id === id);

if (product) {
  const detail = document.getElementById("product-detail");
  detail.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <button id="order-btn">Order on WhatsApp</button>
  `;

  document.getElementById("order-btn").onclick = () => {
    const msg = `Hello, I'm interested in buying: ${product.name}`;
    window.open(`https://wa.me/94771234567?text=${encodeURIComponent(msg)}`, "_blank");
  };
} else {
  document.getElementById("product-detail").innerHTML = `<p>Product not found.</p>`;
}
