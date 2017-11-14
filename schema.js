'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
	name: { 
		type: String,
		required: "Please give me a name for the wine."
	},
	origin: { 
		type: String,
		required: "Please tell us the country, state, or region of origin."
	},

	vintage: { 
		type: String,
		required: "Please give me a year for the wine.",
		default: '2015'
	},
	wine_type: { 
		type: String,
		enum: ['Riesling', 
				'Champagne', 
				'Brut', 
				'Cava', 
				'Gewurztraminer', 
				'Pinot Blanc', 
				'Pinot Grigio', 
				'Chardonnay', 
				'Moscato', 
				'Sauvignon Blanc', 
				'Chenin Blanc', 
				'Grappa', 
				'Malbec', 
				'Chianti', 
				'Claret', 
				'Bordeaux', 
				'Cabernet Franc', 
				'Syrah', 
				'Shiraz', 
				'Merlot', 
				'Pinot Noir', 
				'Cabernet Sauvignon', 
				'Pinot Noir', 
				'Burgundy', 
				'Port', 
				'Sweet Red', 
				'Sweet White', 
				'Mead', 
				'Rose',
				'Sangiovese', 
				'Sauterns', 
				'Sherry', 
				'Zinfandel', 
				'Viognier'],
		required: "Please give me the varietal of the wine.",
		// default: 'Chardonnay'
	}, 
	body: {
		type: String,
		enum: ['Bone Dry',
				'Very Dry',
				'Semi-Dry',
				'Dry', 
				'Medium', 
				'Semi-Sweet', 
				'Sweet', 
				'Very Sweet'],
		// default: 'Medium'
	},
	// One thing many people don't know is that the aroma and bouquet of a wine are two very different entities. The aroma is the PRIMARY flavor. It is also the most general. A Bouquet will be a bit more specific and apply to a more particular flavor profile.
	// It comes from the grape variety. The Bouquet comes from the cask. 

	aroma: {
		type: [String],
		enum: ['Peach',
		'Blackberry',
		'Cherry',
		'Blueberry',
		'Strawberry', 
		'Elderberry',
		'Banana',
		'Grapefruit',
		'Pepper',
		'Mint',
		'Oregano',
		'Roses',
		'Lavander',
		'Lilac', 
		'Iris',
		'Melon',
		'Vanilla',
		'Citrus',
		'Tropic',
		'Floral']
	},

	bouquet: {
		type: [String],
		enum: ['Nut',
		'Berry',
		'Pepper',
		'Oak',
		'Pine',
		'Caramel',
		'Smoky',
		'Chocolate',
		'Earth',
		'Bitter',
		'Coffee',
		'Mineral',
		'Spice',
		'Yeast']
	}

	// Pairs with, food_ID

});

var BeerSchema = new Schema({ 
	name: {
		type: String
	},
	country: {
		type: String,
		required: 'Please give us the country, region, or state of origin.'
	},
	beer_type: { 
		type: String,
		enum: ['Ale',
				'Lager',
				'Stout',
				'Pilsner',
				'Pale Ale',
				'India Pale Ale',
				'Porter',
				'Hefeweizen',
				'Dunkelweizen',
				'Roggenweizen',
				'Bitter',
				'Bock',
				'Brown Ale',
				'Pale Lager',
				'Mild Ale',
				'Marzen',
				'Lambec',
				'Helles',
				'Barleywine',
				'Old Ale',
				'Schwarzbier',
				'Flanders',
				'Saison',
				'Tripel',
				'Koelsch',
				'Cream Ale',
				'Dubbel',
				'Amber Ale',
				'Gueuze',
				'Cider',
				'Doppelbock',
				'Altbier',
				'Gose',
				'American Lager',
				'Vienna Lager',
				'American Amber',
				'Helles Bock',
				'Scotch Ale',
				'Trappist',
				'Dortmunder',
				'Rye Beer',
				'Quadrupel',
				'Kreik',
				'Guard Beer',
				'Berlinerweisse',
				'Irish Stout',
				'Canadian Lager',
				'Seasonal',
				'Steam Beer',
				'Framboise',
				'Irish Red'],
			// required: "Please specify a type of beer. Thank you."
			default: 'Lager'
	}

	// Pairs with -- food ID
});

// Food Schema

var FoodSchema = new Schema({
	_id: { 
		type: String
		//required: "You need to tell us the name / type of food!"
	},
	name: {
		type: String
	},
	primary_group: {
		type: String,
		enum: ['Protein', 
		'Starch', 
		'Vegetable', 
		'Fruit', 
		'Sweets']
	},
	food_type: { 
		type: String,
		enum: ['Savory', 
		'Sweet', 
		'Fruit', 
		'Crudite', 
		'Cheese']
	}


});

// User

var UserSchema = new Schema({ 
	userName: {
		type: String,
		required: "Please insert a user name."
	},
	
	// This will be adjusted
	password: { 
		type: String,
		required: "Please provide a password."
	},
	email: { 
		type: String,
		require: "Please input a valid email."
	}


})


module.exports = mongoose.model('Wines', WineSchema);
module.exports = mongoose.model('Foods', FoodSchema);
module.exports = mongoose.model('Users', UserSchema);

