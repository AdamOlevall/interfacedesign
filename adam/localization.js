	var productCategoryClass;
	var langPack_en = {	shoppingCart: "Shopping Cart",
						myFavorites: "My Favorites",
						myFavoritesTwo: "*My Favorites*",
						categories: "Categories",
						cartName: "Name",
						cartQuantity: "Quantity",
						cartPrice: "Price",
						cartRemove: "Remove",
						cartMsg: "Drop here to add to cart",
						checkοut: "Checkout",
						clear: "Clear",
						wait: "Please wait...",
						detailsLabel: "Click on product for details..",
						volume: "Volume &nbsp : &nbsp",
						alcohol: "Alcohol &nbsp : &nbsp",
						origin: "Origin &nbsp : &nbsp",
						producer: "Producer &nbsp : &nbsp",
						Ale :"Ale",
						Alkoholfritt :"Alcohol Free",
						AperitifochBit :"Aperitif och Bit",
						Blanddrycker :"Cocktails",
						Cider :"Cider",
						DruvigtBlo :"Druvigt & Blo",
						DruvigtBlommigt :"Druvigt & Blommigt",
						FrisktFruktigt :"Friskt & Fruktigt",
						FruktigtSmakrikt :"Fruktigt & Smakrikt",
						FylligtSmakrikt :"Fylligt & Smakrikt",
						KryddigtMustigt :"Kryddigt & Mustigt",
						Ljuslager :"Ljus lager",
						MjuktBärigt :"Mjukt & Bärigt",
						Must :"Must",
						Mörklager :"Mörk lager",
						PorterochStout :"Porter och Stout",
						Röttvin :"Red wines",
						Specialöl :"Special beers",
						Söt :"Söt",
						Torrochhalvtorr :"Dry & semi-dry",
						Torrt :"Torrt",
						Veteöl :"Veteöl",
						Vittvin :"Vitt vin",
						Öl :"Öl",
						Övrigt :"Övrigt"						
						};
						
    var langPack_sv = { shoppingCart: "Shoppingvagn",
						myFavorites: "Mina favoriter",
						myFavoritesTwo: "*Mina favoriter*",
						categories: "kategorier",
						cartName: "Namn",
						cartQuantity: "Mängd",
						cartPrice: "Pris",
						cartRemove: "Avlägsna",
						cartMsg: "Släpp här för att lägga till i kundvagnen",
						checkοut: "Κassan",
						clear: "Κlar",
						wait: "Var god vänta...",
						detailsLabel: "Klicka på produkten för detaljer..",
						volume: "Volym &nbsp : &nbsp",
						alcohol: "Alkohol &nbsp : &nbsp",
						origin: "Härkomst &nbsp : &nbsp",
						producer: "Producent &nbsp : &nbsp",	
						Ale :"Ale",
						Alkoholfritt :"Alkoholfritt",
						AperitifochBit :"Aperitif och Bit",
						Blanddrycker :"Blanddrycker",
						Cider :"Cider",
						DruvigtBlo :"Druvigt & Blo",
						DruvigtBlommigt :"Druvigt & Blommigt",
						FrisktFruktigt :"Friskt & Fruktigt",
						FruktigtSmakrikt :"Fruktigt & Smakrikt",
						FylligtSmakrikt :"Fylligt & Smakrikt",
						KryddigtMustigt :"Kryddigt & Mustigt",
						Ljuslager :"Ljus lager",
						MjuktBärigt :"Mjukt & Bärigt",
						Must :"Must",
						Mörklager :"Mörk lager",
						PorterochStout :"Porter och Stout",
						Röttvin :"Rött vin",
						Specialöl :"Specialöl",
						Söt :"Söt",
						Torrochhalvtorr :"Torr och halvtorr",
						Torrt :"Torrt",
						Veteöl :"Veteöl",
						Vittvin :"Vitt vin",
						Öl :"Öl",
						Övrigt :"Övrigt"					
						};
	
	function changeLang(lang)
    {
        var data = getAllElementsWithAttribute();

        if(data.length == 0)
            return;

        var langPack = undefined;
        if(lang == "en")
            langPack = langPack_en;
        else
            langPack = langPack_sv;

        for(var i = 0; i < data.length; i++)
            data[i].innerHTML = langPack[data[i].getAttribute("data-inter")];
		
	//------------------Exception Start--------------------//
		if(productCategoryClass != undefined){
			$text = $("."+productCategoryClass).text();
			$('#productsMenuTitle').html($text); 
		}
	//------------------Exception End--------------------//
    }

    function getAllElementsWithAttribute()
    {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
        if (allElements[i].getAttribute("data-inter") !== null)
            matchingElements.push(allElements[i]);
    }
    return matchingElements;
    }
	
	$( "#english" ).click(function() {
		changeLang('en');
	});
	$( "#swedish" ).click(function() {
		changeLang('sv');
	});