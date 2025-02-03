let productForm = document.querySelector("#productForm");
let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let productImage = document.querySelector("#productImage");
let editingIndex = -1; // To track the index of the product being edited

function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productList = document.querySelector("#productList");

    productList.innerHTML = ""; 

    products.forEach((product, index) => {
        let productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
                <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>`;
        productList.innerHTML += productCard;
    });
}

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let product = {
        name: productName.value,
        price: productPrice.value,
        image: productImage.value,
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (editingIndex >= 0) {
        // Update the existing product
        products[editingIndex] = product;
    } else {
        // Add a new product
        products.push(product);
    }

    localStorage.setItem("products", JSON.stringify(products));
    productForm.reset();
    editingIndex = -1; // Reset the index after editing
    loadProducts();
});

function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products"));
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

function editProduct(index) {
    let products = JSON.parse(localStorage.getItem("products"));
    let product = products[index];

    // Populate the form fields with the product data
    productName.value = product.name;
    productPrice.value = product.price;
    productImage.value = product.image;

    // Set the index of the product being edited
    editingIndex = index;
}

loadProducts();
