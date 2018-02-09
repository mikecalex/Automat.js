foods = ["Chicken Pot Pie", "Baked Beans", "Macaroni and Cheese", "Burgundy Sauce with Beef and Noodles", "Creamed Spinach", "Pumpkin Pie", "Strawberry Shortcake"];

i = 0;
while (i<7){
foods.forEach((item) => {
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item';
  foodItemDiv.id = i, i++;
  foodItemDiv.innerHTML = item;
  let mainDiv = document.getElementById('main');
  mainDiv.appendChild(foodItemDiv);
  });
}

ids = ["0", "1", "2", "3", "4", "5", "6"];
ids.forEach((x) => {
  document.getElementById(x).addEventListener("click", function(){
      document.getElementById(x).style.visibility = "hidden";
  });
});
