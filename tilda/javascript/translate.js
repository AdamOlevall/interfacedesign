window.language="en";

i18n.init({lng: window.language } , function(t) {
  // translate manager
  $(".txt").i18n();
  $(".btn").i18n();
  //$(".txtBalloon").i18n();


  // programatical access
//  var appName = t("index.title");
});

function changeLanguage(){	
	if(window.language=="en"){
		window.language="sv-SE";
		i18n.init({lng: "sv-SE" } , function(t) {
  // translate manager
  $(".txt").i18n();
  $(".btn").i18n();
//  $(".txtBalloon").i18n();
  
  // programatical access
 // var appName = t("index.title");
});
	} else{
		window.language="en";
		i18n.init({lng: "en" } , function(t) {
  // translate manager
  $(".txt").i18n();
  $(".btn").i18n();
//  $(".txtBalloon").i18n();

  // programatical access
 // var appName = t("index.title");
});
	}
}