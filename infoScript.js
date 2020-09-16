var elements = [
  ["Hydrogen", 1, "H", 1.008, "Hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass."],
  ["Helium", 2, "He", 4.003, "Helium is the second lightest and second most abundant element in the observable universe. It is present at about 24% of the total elemental mass, which is more than 12 times the mass of all the heavier elements combined."],
  ["Lithium", 3, "Li", 6.941,""],
  ["Beryllium", 4, "Be", 9.012,""],
  ["Boron", 5, "B", 10.811,""],
  ["Carbon", 6, "C", 12.011,""],
  ["Nitrogen", 7, "N", 14.007,""],
  ["Oxygen", 8, "O", 15.999,""],
  ["Fluorine", 9, "F", 18.998,""],
  ["Neon", 10, "Ne", 20.180,""],
  ["Sodium", 11, "Na", 22.990,""],
  ["Magnesium", 12, "Mg", 24.305,""],
  ["Aluminum", 13, "Al", 26.982,""],
  ["Silicon", 14, "Si", 28.086,""],
  ["Phosphorus", 15, "P", 30.974,""],
  ["Sulfur", 16, "S", 32.066,""],
  ["Chlorine", 17, "Cl", 35.453,""],
  ["Argon", 18, "Ar", 39.948,""],
  ["Potassium", 19, "K", 39.098,""],
  ["Calcium", 20, "Ca", 40.078,""],
  ["Scandium", 21, "Sc", 44.956,""],
  ["Titanium", 22, "Ti", 47.867,""],
  ["Vanadium", 23, "V", 50.942,""],
  ["Chromium", 24, "Cr", 51.996,""],
  ["Manganese", 25, "Mn", 54.938,""],
  ["Iron", 26, "Fe", 55.845,""],
  ["Cobalt", 27, "Co", 58.933,""],
  ["Nickel", 28, "Ni", 58.693,""],
  ["Copper", 29, "Cu", 63.546,""],
  ["Zinc", 30, "Zn", 65.38,""],
  ["Gallium", 31, "Ga", 69.723,""],
  ["Germanium", 32, "Ge", 72.631,""],
  ["Arsenic", 33, "As", 74.922,""],
  ["Selenium", 34, "Se", 78.972,""],
  ["Bromine", 35, "Br", 79.904,""],
  ["Krypton", 36, "Kr", 84.798,""],
  ["Rubidium", 37, "Rb", 85.468,""],
  ["Strontium", 38, "Sr", 87.62,""],
  ["Yttrium", 39, "Y", 88.906,""],
  ["Zirconium", 40, "Zr", 91.224,""],
  ["Niobium", 41, "Nb", 92.906,""],
  ["Molybdenum", 42, "Mo", 95.95,""],
  ["Technetium", 43, "Tc", 98.907,""],
  ["Ruthenium", 44, "Ru", 101.07,""],
  ["Rhodium", 45, "Rh", 102.906,""],
  ["Palladium", 46, "Pd", 106.42,""],
  ["Silver", 47, "Ag", 107.868,""],
  ["Cadmium", 48, "Cd", 112.411,""],
  ["Indium", 49, "In", 114.818,""],
  ["Tin", 50, "Sn", 118.711,""],
  ["Antimony", 51, "Sb", 121.760,""],
  ["Tellurium", 52, "Te", 127.6,""],
  ["Iodine", 53, "I", 126.904,""],
  ["Xenon", 54, "Xe", 131.294,""],
  ["Cesium", 55, "Cs", 132.905,""],
  ["Barium", 56, "Ba", 137.328,""],

  ["Lanthanum", 57, "La", 138.905,""],
  ["Cerium", 58, "Ce", 140.116,""],
  ["Praseodymium", 59, "Pr", 140.908,""],
  ["Neodymium", 60, "Nd", 144.242,""],
  ["Promethium", 61, "Pm", 144.913,""],
  ["Samarium", 62, "Sm", 150.36,""],
  ["Europium", 63, "Eu", 151.964,""],
  ["Gadolinium", 64, "Gd", 157.25,""],
  ["Terbium", 65, "Tb", 58.925,""],
  ["Dysprosium", 66, "Dy", 162.500,""],
  ["Holmium", 67, "Ho", 164.930,""],
  ["Erbium", 68, "Er", 167.259,""],
  ["Thulium", 69, "Tm", 168.934,""],
  ["Ytterbium", 70, "Yb", 173.055,""],
  ["Lutetium", 71, "Lu", 174.967,""],

  ["Hafnium", 72, "Hf", 178.49,""],
  ["Tantalum", 73, "Ta", 180.948,""],
  ["Tungsten", 74, "W", 183.84,""],
  ["Rhenium", 75, "Re", 186.207,""],
  ["Osmlum", 76, "Os", 190.23,""],
  ["Iridium", 77, "Ir", 192.217,""],
  ["Platinum", 78, "Pt", 195.085,""],
  ["Gold", 79, "Au", 196.967,""],
  ["Mercury", 80, "Hg", 200.592,""],
  ["Thallium", 81, "Tl", 204.383,""],
  ["Lead", 82, "Pb", 207.2,""],
  ["Bismuth", 83, "Bi", 208.980,""],
  ["Polonium", 84, "Po", 208.982,""],
  ["Astatine", 85, "At", 209.987,""],
  ["Radon", 86, "Rn", 222.018,""],
  ["Francium", 87, "Fr", 223.020,""],
  ["Radium", 88, "Ra", 226.025,""],

  ["Actinium", 89, "Ac", 227.028,""],
  ["Thorium", 90, "Th", 232.038,""],
  ["Protactinium", 91, "Pa", 231.036,""],
  ["Uranium", 92, "U", 238.029,""],
  ["Neptunium", 93, "Np", 237.048,""],
  ["Plutonium", 94, "Pu", 244.064,""],
  ["Americium", 95, "Am", 243.061,""],
  ["Curium", 96, "Cm", 247.070,""],
  ["Berkelium", 97, "Bk", 247.070,""],
  ["Californium", 98, "Cf", 251.080,""],
  ["Einsteinium", 99, "Es", "[254]",""],
  ["Fermium", 100, "Fm", 257.095,""],
  ["Mendelevium", 101, "Md", 258.1,""],
  ["Nobelium", 102, "No", 259.101,""],
  ["Lawrencium", 103, "Lr", "[262]",""],

  ["Rutherfodium", 104, "Rf", "[261]",""],
  ["Dubnium", 105, "Db", "[262]",""],
  ["Seaborgium", 106, "Sg", "[266]",""],
  ["Bohrium", 107, "Bh", "[264]",""],
  ["Hassium", 108, "Hs", "[269]",""],
  ["Meitnerium", 109, "Mt", "[268]",""],
  ["Darmstadium", 110, "Ds", "[269]",""],
  ["Roentgenium", 111, "Rg", "[272]",""],
  ["Copernicium", 112, "Cn", "[277]",""],
  ["Nihonium", 113, "Nh", "unknown",""],
  ["Flerovium", 114, "Fl", "[289]",""],
  ["Moscovium", 115, "Mc", "unknown",""],
  ["Livermorium", 116, "Lv", "[298]",""],
  ["Tenessine", 117, "Ts", "unknown",""],
  ["Oganesson", 118, "Og", "unknown",""],
];

var elementsGroup = [["Alkali Metal"], ["Alkaline Earth"], ["Transition Metal"], ["Basic Metal"], ["Semi Metal"], ["Non Metal"], ["Halogen"], ["Noble Gas"], ["Lanthanide"], ["Actinide"]];

function elementsGrp(i){
	document.write(elementsGroup[i]);
}

function tableInfo(i){
	document.write("<sup>" + elements[i][1] + "</sup>" + elements[i][2] + "<h1>" + elements[i][0] + "</h1><h2>" + elements[i][3] + "</h2>");
}

$(document).ready(function(){
	const TAB = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
	var info1 = $("#info1");
	var info2 = $("#info2");
	
	function info(id, i){
		$(id).hover(function(){
			if(elements[i][3] == "unknown"){
				info1.text("Element Name: " + elements[i][0] + TAB + "Atomic Number: " + elements[i][1] + TAB +"Symbol: " + elements[i][2] + TAB +"Standard Atomic Weight: " + elements[i][3]);
			}else{
				info1.text("Element Name: " + elements[i][0] + TAB + "Atomic Number: " + elements[i][1] + TAB +"Symbol: " + elements[i][2] + TAB +"Standard Atomic Weight: " + elements[i][3] + "u");
				info2.text(elements[i][4]);
			}
		});
	}
	
	for(var i=0;i<118;i++){
		var id = "#" + elements[i][0].toLowerCase();
		info(id, i);
	}
});