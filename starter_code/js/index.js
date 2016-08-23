$(document).ready(function(){
    $("form").submit(function(){
        searchDragDictionary();
    });
});//when user presses submit, the button submits
    
/*function searchDragDictionary
    var dragWords = [{
	'class' : 'pursefirst',
	'names' : ["purse first", "walk into the room", "purse purse", "purse", "walk into the room purse first"]
}, {
	'class' : 'sickening',
    'names': ['lets get sickening', 'sickening', 'sick']
}, {
	'class' : 'theshade',
    'names' : ['the shade', 'shady', 'shady queen', 'shadey', 'shadey queen', 'shadey lady']
}, {
	'class' : 'yesgod',
    'names' : ['yes god', 'yas god', 'yes gawd']
}]
    for (var i = 0; i <  dragWords.length; i ++){
	if ($.inArray(words, dragWords[i].names) !== -1)
		$(‘body’).addClass(dragWords);
	}
}
*/

function searchDragDictionary(){
    var dragWords = $('#words').val().toLowerCase(); //take value entered and turn into string
    $('body').removeClass(); //get rid of background
    
    if (dragWords == 'purse first' || dragWords == 'purse' || dragWords == 'purse purse' || dragWords == 'walk into the room'){ //if string is equal to any of these
        $( '.deftxt' ).remove();
        $('body').addClass('pursefirst');//add new background
        $('.container').append('<div class="deftxt">Purse first (adj): A way in which one walks into the room to demonstrate fierceness. It is a known fact that a lady do carry an evening bag.</div>');
    }
    else if (dragWords == 'sickening' || dragWords == 'lets get sickening' || dragWords == 'sickening'){
        $( '.deftxt' ).remove();
        $('body').addClass('sickening');
        $('.container').append('<div class="deftxt">Sickening (adj): To be so fabulous, you make all others sick with jealousy.</div>');
    }
    else if (dragWords == 'the shade' || dragWords == 'shade' || dragWords == 'shadey'){
        $( '.deftxt' ).remove();
        $('body').addClass('theshade');
        $('.container').append('<div class="deftxt">Shade (noun): Disrespect towards another person. Dont be throwing no shade.</div>');
    }
    else if (dragWords == 'yes god' || dragWords == 'yas god' || dragWords == 'yes gawd'|| dragWords == 'yas gawd'){
        $( '.deftxt' ).remove();
        $('body').addClass('yesgod');
        $('.container').append('<div class="deftxt">Yes god (expression): To be so enthralled with something/someone you must praise the heavens for their existance.</div>');
    }
    else if (dragWords == 'back rolls' || dragWords == 'backrolls' || dragWords == 'rolls'|| dragWords == 'back'){
        $( '.deftxt' ).remove();
        $('body').addClass('backrolls');
        $('.container').append('<div class="deftxt">Backrolls (noun): Skin on ones back that is pushed together due to the tightness of a garment to resemble rolling hills.</div>');
    }
    else if (dragWords == 'eleganza' || dragWords == 'eleganza extravaganza' || dragWords == 'extravaganze'){
        $( '.deftxt' ).remove();
        $('body').addClass('eleganza');
        $('.container').append('<div class="deftxt">Eleganza (noun): A combination of elegnace and extravangance. Eg: They were gagging for her eleganza.</div>');
    }
    else if (dragWords == 'fish' || dragWords == 'tuna' || dragWords == 'fishy' || dragWords == 'tuna on a platter'){
        $( '.deftxt' ).remove();
        $('body').addClass('fish');
        $('.container').append('<div class="deftxt">Fish (noun, adj): To display ones self in an extremely feminine way. Honey I am serving up fish, tuna on a platter.</div>');
    }
    else if (dragWords == 'gagging' || dragWords == 'gag' || dragWords == 'girl i am gagging' || dragWords == 'gagg'){
        $( '.deftxt' ).remove();
        $('body').addClass('gagging');
        $('.container').append('<div class="deftxt">Gag (verb): To be blown away, either because something is so ridiculous, funny, or incredible. Eg: I am gaggin for your look!</div>');
    }
    else if (dragWords == 'huntey' || dragWords == 'hunty' || dragWords == 'hunties'){
        $( '.deftxt' ).remove();
        $('body').addClass('huntey');
        $('.container').append('<div class="deftxt">Hunty (noun): A combination of honey and a less endearing C word. A term of affection.</div>');
    }
    else if (dragWords == 'lil pound cake' || dragWords == 'little pund cake' || dragWords == 'pound cake'){
        $( '.deftxt' ).remove();
        $('body').addClass('lilpoundcake');
        $('.container').append('<div class="deftxt">Lil Pound Cake (noun): A pageant princess with a sharp attitude. Enjoys her go-go juice and harrassing her stepfather.</div>');
    }
    else if (dragWords == 'ornacia'){
        $( '.deftxt' ).remove();
        $('body').addClass('ornacia');
        $('.container').append('<div class="deftxt">Ornacia (noun): A head with a lot of attitude. Perhaps one of the most underrated Drag Race contestants.</div>');
    }
    else if (dragWords == 'sashay away' || dragWords == 'sashay'){
        $( '.deftxt' ).remove();
        $('body').addClass('sashay');
        $('.container').append('<div class="deftxt">Sashay Away (verb):To exit the competition in style and with class.</div>');
    }
    else if (dragWords == 'sashay away' || dragWords == 'sashay'){
        $( '.deftxt' ).remove();
        $('body').addClass('sashay');
        $('.container').append('<div class="deftxt">Sashay Away (verb):To exit the competition in style and with class.</div>');
    }
    else if (dragWords == 'she already done have hers' || dragWords == 'she already done' || dragWords == 'asdfjkl;'|| dragWords == 'she done had hers'){
        $( '.deftxt' ).remove();
        $('body').addClass('shealreadydone');
        $('.container').append('<div class="deftxt">She Aldready Done Has Herses (?): Something RuPaul says, yet no one understands.</div>');
    }
    else if (dragWords == 'tea' || dragWords == 'no tea no shade' || dragWords == 'all tea all shade'|| dragWords == 't'){
        $( '.deftxt' ).remove();
        $('body').addClass('tea');
        $('.container').append('<div class="deftxt">Tea (noun): The truth! Eg: She seems interesting, what is the tea?</div>');
    }
    else if (dragWords == 'pop' || dragWords == 'tongue pop' || dragWords == 'tongue'|| dragWords == 'popping'){
        $( '.deftxt' ).remove();
        $('body').addClass('tonguepop');
        $('.container').append('<div class="deftxt">Tongue pop (noun, verb): An action one does in which one pops their tongue from the top of their mouth. Used for emphasis and drama.</div>');
    }
    else if (dragWords == 'turned' || dragWords == 'turned it' || dragWords == 'turn'|| dragWords == 'turn it'){
        $( '.deftxt' ).remove();
        $('body').addClass('turnedit');
        $('.container').append('<div class="deftxt">Turn it (verb): An action in which one takes something that is just ok and makes int fabulous.</div>');
    }
    
    else {
        alert('Not in our dictionary yet, hunty!'); //throw an error
    }
    event.preventDefault();
}
        
/*var cities = [{
	‘class’ : ‘nyc’,
	‘names’ : [“new york”, “ny”, “newyork”, “nyc”]
}, {
	‘class’ : ‘sf’
}, {
	‘class’ : ‘la’
}, {
	‘class’ : ‘austin’
}, {
	‘class’ : ’sydney’
}]

for (var i = 0; i <  cities.length; i ++){
	if ($.inArray(cityTypeText, cities[i].names) !== -1)
		$(‘body’).addClass(cities);
	}
}
*/