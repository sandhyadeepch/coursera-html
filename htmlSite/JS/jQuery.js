
//on blur/click of collapsable panel should disappear

$(function(){ //Same as document.addEventListener("DOMContentLoaded")
	$("#navbarToggle").blur(function(event){
		var screenWidth=window.innerWidth;
		if(screenWidth<768){
			$("#collapse-nav").collapse('hide');
		}
	});
});

//dynamically loading menu categories view
