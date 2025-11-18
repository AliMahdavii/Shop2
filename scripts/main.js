import products from "./products.js";

const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector(".search-overlay");
const closeSearch = document.querySelector(".close-search");
const searchInput = document.getElementById("searchInput");
const resultsBox = document.querySelector(".search-results");

searchIcon.addEventListener("click", () => {
    overlay.style.display = "flex";
    searchInput.focus();
});

closeSearch.addEventListener("click", () => {
    overlay.style.display = "none";
    resultsBox.style.display = "none";
    searchInput.value = "";
});

searchInput.addEventListener("input", () => {
    const text = searchInput.value.trim();

    if (text.length < 2) {
        resultsBox.style.display = "none";
        return;
    }

    const filtered = products.filter(p =>
        p.name.includes(text) || p.category.includes(text)
    );

    resultsBox.innerHTML = "";

    filtered.forEach(p => {
        resultsBox.innerHTML += `
            <div class="product-card">
                <img src="${p.mainImage}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString()} تومان</p>
            </div>
        `;
    });

    resultsBox.style.display = "block";
});


const productGrid = document.querySelector(".product-grid");

function renderProducts(list) {
    productGrid.innerHTML = "";

    list.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.mainImage}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price.toLocaleString()} تومان</p>
            </div>
        `;
    });
}

renderProducts(products);