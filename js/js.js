$(document).ready(function() {
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

  const sundayRoastStock = [
    'Chicken Supreme (Frozen)',
    'Roast Beef joint (Frozen)',
    'Roast Pork Joint (Frozen)',
    'Pork Stuffing (Frozen)',
    'Vegetable Lentil Loaf (Frozen)'
  ];

  const pieministerPies = [
    'Moo beef & ale',
    'Free Ranger',
    'Kate & Sydney',
    'Moo & Blue',
    'Mooless Moo (vegan)',
    'Mock-a-Doodle (vegan)',
    'Heidi (vegetarian)'
  ];

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
  

  var tableBody = $('#dynamicTable tbody');

function populateTable(array, sectionName) {
  var sectionHeader = $('<tr class="bg-success">').append($('<th colspan="4">').text(sectionName));
  tableBody.append(sectionHeader);

  $.each(array, function(index, item) {
    var row = $('<tr>');
    row.append($('<td>').text(item));
    row.append($('<td>').append('<input type="number" name="amount[]">'));
    row.append($('<td>').append('<select name="package[]"><option value="pcs">Pcs</option><option value="bags">Bags</option><option value="box">Box</option><option value="1l-container">1l-Box</option><option value="2l-container">2l-Box</option><option value="value="4l-container">4l-Box</option><option value="tank">Tank</option><option value="liters">Liters</option><option value="Kg">Kg</option></select>'));
    row.append($('<td>').append('<input type="text" name="notes">'));
    tableBody.append(row);
  });
}

populateTable(dairy, 'Dairy');
populateTable(cleaning, 'Cleaning');
populateTable(extras, 'Extras');
populateTable(meatFish, 'Meat / Fish');
populateTable(sundayRoastStock, 'Leftover Sunday Roast Stock');
populateTable(pieministerPies, 'Pieminister Pies');
populateTable(fruitVegetables, 'Fruit Vegetables');
populateTable(driedFrozenSauces, 'Dried / Frozen / Sauces');

});
