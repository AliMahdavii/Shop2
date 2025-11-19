import products from "./products.js";

const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector(".search-overlay");
const closeSearch = document.querySelector(".close-search");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
    overlay.style.display = "flex";
    searchInput.focus();
});

closeSearch.addEventListener("click", () => {
    overlay.style.display = "none";
    resultsBox.style.display = "none";
    searchInput.value = "";
});

searchInput.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        window.location.href = "search.html?query" + encodeURIComponent(searchInput.value);
    }
});

const tabs = document.querySelectorAll(".filter-tabs button");
const productGrid = document.querySelector(".product-grid");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.dataset.filter;

        if (filter === "all") {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === filter);
            renderProducts(filtered);
        }
    });
});


function renderProducts(list) {
    productGrid.innerHTML = "";

    list.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.mainImage}" alt="${product.name}">
                <h3>${product.name}</h3>
                <h6>${product.category}</h6>
                <p class="price">${product.price.toLocaleString()} تومان</p>
            </div>
        `;
    });
}

renderProducts(products);
