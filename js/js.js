$(document).ready(function() {
    // DAIRY
const dairy = [
    'Grated Cheese Bags',
    'Camembert',
    'Goats Cheese',
    'Vegan Grated Cheese',
    'Vegan Butter / Spread',
    'Parmesan',
    'Burrata',
    'Sour Cream',
    'Eggs',
    'Ice Cream (Tubs)'
  ];
  
  // CLEANING
  const cleaning = [
    'All Purpose Floor Cleaner',
    'Heavy Duty Degreaser',
    'Oven Cleaner',
    'Dishwasher Detergent',
    'Dishwasher Rinse Aid',
    'Washing Up Liquid',
    'Metal Scourer',
    'Sponges',
    'Heavy Duty Bin Bags'
  ];
  
  // EXTRAS
  const extras = [
    'Napkins (bar)',
    'Paper Sauce Pots',
    'Blue Roll',
    'Cooking Oil',
    'Cling Film',
    'Kitchen Foil / Tin Foil',
    'Takeaway Containers',
    'Burger Sticks',
    'Chef Kitchen Gloves',
    'Cajun Spice',
    'Smoked Paprika',
    'Dried Parsley'
  ];
  
  // MEAT / FISH
  const meatFish = [
    'Beef Burgers',
    'Lamb Burgers',
    'Chicken Burgers',
    'Chicken Wings (Bags)',
    'Bacon (Bags)',
    'Sausage (cooked)',
    'Sausage (raw)',
    'Chicken Supreme (raw)',
    'Cod Fillets (box)',
    'Honey Baked Ham'
  ];
  
  // LEFTOVER SUNDAY ROAST STOCK
  const sundayRoastStock = [
    'Chicken Supreme (Frozen)',
    'Roast Beef joint (Frozen)',
    'Roast Pork Joint (Frozen)',
    'Pork Stuffing (Frozen)',
    'Vegetable Lentil Loaf (Frozen)'
  ];
  
  // PIEMINISTER PIES
  const pieministerPies = [
    'Moo beef & ale',
    'Free Ranger',
    'Kate & Sydney',
    'Moo & Blue',
    'Mooless Moo (vegan)',
    'Mock-a-Doodle (vegan)',
    'Heidi (vegetarian)'
  ];
  
  // FRUIT VEGETABLES
  const fruitVegetables = [
    'Mushrooms',
    'Lemons',
    'Tomato',
    'Gem Lettuce',
    'Rocket Leaves',
    'Mixed leaves',
    'Red Onion',
    'Beetroot',
    'Pre-Peeled Potato (Bags)',
    'Large Potato (Box)',
    'Red Peppers',
    'Carrots',
    'Tenderstem Brocolli',
    'Parsnips'
  ];
  
  // DRIED / FROZEN / SAUCES
  const driedFrozenSauces = [
    'Meat-Free Vegan Burgers',
    'Pumpkin Spinach Vegan Burgers',
    'Burger Buns',
    'Gluten Free Burger Buns',
    'Hot Dog Buns',
    'Frozen Falafel',
    'Frozen Ciabatta',
    'Chips (bags)',
    'Rice (packs)',
    'Pita Bread',
    'Frozen Avocado',
    'Garden Peas (bags)',
    'Mushy peas (cans)',
    'Tortilla / Nacho Chips',
    'Jalapenos',
    'Gherkins',
    'Lentils (cans)',
    'Vegan Boullion',
    'Dried Cranberries',
    'Chickpeas (cans)',
    'White Cooking Wine',
    'Vegan Curry Sauce',
    'French Dressing',
    'Balsamic Glaze',
    'Chocolate Sauce',
    'Maple Syrup',
    'Crispy Onions',
    'Biscoff Crumb',
    'Walnuts',
    'Salsa',
    'Red Onion Chutney',
    'Caesar Dressing',
    'Tartare Sauce',
    'Buffalo Sauce',
    'Mayonnaise (big tub)',
    'Heinz Ketchup (bar small bottles)',
    'Mayonnaise (bar small bottles)',
    'Vinegar (bar small bottles)',
    'American Hot Dog Mustard (bottles)',
    'English Mustard',
    'Horseradish',
    'Mint Sauce',
    'Gravy Granuals',
    'Chocolate Brownie (box)',
    'Lemon Tart (box)',
    'Yorkshire Puddings',
    'Plain Flour'
  ];
  

    
  
  var categories = [
    { name: 'dairy', element: $('.card-body-dairy'), items: dairy },
    { name: 'cleaning', element: $('.card-body-cleaning'), items: cleaning },
    { name: 'extra', element: $('.card-body-extra'), items: extras },
    { name: 'meatFish', element: $('.card-body-meat-fish'), items: meatFish },
    { name: 'leftOverSundayRoast', element: $('.card-body-leftover-sunday-roast'), items: sundayRoastStock },
    { name: 'pieministerPies', element: $('.card-body-pieminister-pies'), items: pieministerPies },
    { name: 'fruitVeg', element: $('.card-body-fruit-veg'), items: fruitVegetables },
    { name: 'driedFrozenSauce', element: $('.card-body-dried-frozen-sauce'), items: driedFrozenSauces }
  ];
  
  categories.forEach(function(category) {
    var cardBody = category.element;
    category.items.forEach(function(item) {
      var paragraph = $(
        '<br>' +
        '<p class="items">' +
        item +
        '<input class="number-input" type="number">' +
        '<select class="select-input">' +
        '<option value="pcs">Pcs</option>' +
        '<option value="bags">Bags</option>' +
        '<option value="boxes">Boxes</option>' +
        '<option value="4-ltr">4 Ltr</option>' +
        '<option value="2-ltr">2 Ltr</option>' +
        '<option value="kg">Kg</option>' +
        '<option value="ltr">Ltr</option>' +
        '</select>' +
        '</p>'
      );
      cardBody.append(paragraph);
    });
  });


});