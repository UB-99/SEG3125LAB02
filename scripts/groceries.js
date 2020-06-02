	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
			{
		name: "hamburguer",
		vegetarian: false,
		glutenFree: false,
		price: 15.00
		},
		{

		name: "beef",
		vegetarian: false,
		glutenFree: true,
		price: 17.65
		},
		{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		price: 5.25
		},
		{
		name: "tofu",
		vegetarian: true,
		glutenFree: false,
		price: 3.90
		},
		{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		price: 7.85
		},
		{
		name: "bananas",
		vegetarian: true,
		glutenFree: true,
		price: 1.45
		organic: true,
		},
		{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		price: 1.15
		organic: true,

		}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Both") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
