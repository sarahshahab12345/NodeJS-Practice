const http = require("http");

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    brand: "Apple",
    stock: 50,
  },
  {
    id: 2,
    name: "Headphones",
    price: 79.99,
    category: "Electronics",
    brand: "Sony",
    stock: 100,
  },
  {
    id: 3,
    name: "Book",
    price: 12.5,
    category: "Books",
    author: "J.K. Rowling",
    pages: 320,
  },
  {
    id: 4,
    name: "T-shirt",
    price: 19.99,
    category: "Clothing",
    brand: "Nike",
    color: "Blue",
    size: "Medium",
  },
  {
    id: 5,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    brand: "Samsung",
    stock: 80,
  },
  {
    id: 6,
    name: "Sneakers",
    price: 129.99,
    category: "Clothing",
    brand: "Adidas",
    color: "Black",
    size: "9",
  },
  {
    id: 7,
    name: "Watch",
    price: 299.99,
    category: "Accessories",
    brand: "Casio",
    stock: 20,
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 39.99,
    category: "Home & Office",
    brand: "IKEA",
    stock: 30,
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 59.99,
    category: "Accessories",
    brand: "Ray-Ban",
    stock: 15,
  },
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(
    JSON.stringify({
      products: products,
    })
  );
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on 3000 port");
});
