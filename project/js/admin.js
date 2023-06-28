const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const request = indexedDB.open("onlineShop", 1);

request.onerror = (error) => {
  console.log(error);
};

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const store = db.createObjectStore("products", {
    keyPath: "id",
    autoIncrement: true,
  });
  store.createIndex("product_name", "name", { unique: false });
  store.createIndex("product_price", "price", { unique: false });
  store.createIndex("product_currency", "currency", { unique: false });
  store.createIndex("product_description", "description", { unique: false });
  store.createIndex("product_img_url", "imgUrl", { unique: false });
};

request.onsuccess = () => {
  const btn = document.querySelector(".btn");
  const nameInput = document.querySelector(".product-name");
  const priceInput = document.querySelector(".product-price");
  const currencyInput = document.querySelector(".product-currency");
  const descriptionInput = document.querySelector(".product-description");
  const imageInput = document.querySelector(".product-image");

  btn.addEventListener("click", () => {
    const db = request.result;
    const transaction = db.transaction("products", "readwrite");
    const store = transaction.objectStore("products");

    const product = {
      name: nameInput.value,
      price: priceInput.value,
      currency: currencyInput.value,
      description: descriptionInput.value,
      imgUrl: imageInput.value,
    };

    const addRequest = store.add(product);

    addRequest.onsuccess = () => {
      console.log("Product added successfully");
    };

    addRequest.onerror = (error) => {
      console.log("Error adding product:", error);
    };

    nameInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
    imageInput.value = "";
  });
};
