var services = {
"стрижка": 60,
"гоління": 80,
"Миття голови": 100
};
services["Розбити скло"] = 200;
var price = 0;
for (var key in services) {
  price += services[key];
}

alert(price);
