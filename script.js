$(document).ready(function(){
	var alkali = $(".alkali"); // alkali metal
	var alkaline = $(".alkaline"); // alkaline metal
	var transition = $(".transition"); // transition metal
	var basic = $(".basic"); // basic metal
	var semi = $(".semi"); // semi metal
	var non = $(".non"); // non metal
	var halogen = $(".halogen"); // halogen
	var nobel = $(".nobel"); // nobel gas
	var lanthanide = $(".lanthanide"); // lanthanide
	var actinide = $(".actinide"); // actinide

	alkali.hover(function(){
		alkali.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#c75f7f", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		alkali.css({"background": "#E47A9A", "border": "1px solid", "border-color": "#aa0033"});
	});

	alkaline.hover(function(){
		alkaline.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#d9bb34", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		alkaline.css({"background": "#EBD366", "border": "1px solid", "border-color": "#9c8d4b"});
	});

	transition.hover(function(){
		transition.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#c7b16b", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		transition.css({"background": "#FFE89D", "border": "1px solid", "border-color": "#c49e21"});
	});

	basic.hover(function(){
		basic.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#2fbd46", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		basic.css({"background": "#61FF7B", "border": "1px solid", "border-color": "#00c020"});
	});

	semi.hover(function(){
		semi.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#3e9bc2", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		semi.css({"background": "#66D3FF", "border": "1px solid", "border-color": "#0096d1"});
	});

	non.hover(function(){
		non.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#147dcc", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		non.css({"background": "#38A9FF", "border": "1px solid", "border-color": "#005ba1"});
	});

	halogen.hover(function(){
		halogen.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#4732d1", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		halogen.css({"background": "#6048FF", "border": "1px solid", "border-color": "#3824b6"});
	});

	nobel.hover(function(){
		nobel.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#7b6296", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		nobel.css({"background": "#B19DC7", "border": "1px solid", "border-color": "#694096"});
	});

	lanthanide.hover(function(){
		lanthanide.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#785625", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		lanthanide.css({"background": "#9F7537", "border": "1px solid", "border-color": "#794c09"});
	});

	actinide.hover(function(){
		actinide.css({"borderWidth": "2px", "borderColor": "black", "backgroundColor": "#cf7727", "transition": "0.2s"});
		$(this).css({"borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white"});
	}, function(){
		actinide.css({"background": "#FF9A3F", "border": "1px solid", "border-color": "#c05a00"});
	});


});