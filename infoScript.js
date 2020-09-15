var elements = [
  ["Hydrogen", "1", "H", "1.008", "Hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass"],
  ["Helium", "2", "He", "4.003", "Helium is the second lightest and second most abundant element in the observable universe. It is present at about 24% of the total elemental mass, which is more than 12 times the mass of all the heavier elements combined."],
];

$(document).ready(function(){
	const TAB = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
	var info1 = $("#info1");
	var info2 = $("#info2");
	
	function info(id, i){
		$(id).hover(function(){
			info1.text("Element Name: " + elements[i][0] + TAB + "Atomic Number: " + elements[i][1] + TAB +"Symbol: " + elements[i][2] + TAB +"Standard Atomic Weight: " + elements[i][3] + "u");
			info2.text(elements[i][4]);
		});
	}
	
	info(hydrogen,0);
	info(helium,1);
});