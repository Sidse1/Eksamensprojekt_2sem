// Array med elektrikerprodukter
let products = ["Lampe", "Stikkontakt", "Kabel", "Elektrisk skruetrækker", "Sikringsboks"];

// Hent select-elementet
let select = document.getElementById("productList");

// Generer <option> elementer baseret på arrayet og tilføj dem til select-elementet
products.forEach(function(product) {
  let option = document.createElement("option");
  option.text = product;
  option.value = product.toLowerCase().replace(/\s+/g, "-"); // Gør produktet til en lowercase tekststreng og erstat mellemrum med bindestreger
  select.add(option);
});
