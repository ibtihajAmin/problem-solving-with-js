// problem statement:
// suppose you have an array of objects.the objects should be 'phone' objects.phone objects contain many
// properties. such as:name,price,camera resoluation.
// You have to find the cheapest phone from the phone objects.

let phones = [
    { brand: 'vivo', model: 'y91C', price: 10000, camera: 8 },
    { brand: 'xiaomi', model: 'poco f5', price: 18000, camera: 15 },
    { brand: 'nokia', model: 'n8', price: 12500, camera: 8 },
    { brand: 'oppo', model: 'F5', price: 11000, camera: 12 },
]

let cheapest = phones[0];
for (phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);
