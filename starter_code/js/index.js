document.ready(function(){
    'form'.on('submit',searchDragDictionary); //when user presses submit, the button submits
});
    
function searchDragDictionary
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

/*function findMyCity(){
    var myCity = $('#city-type').val().toLowerCase(); //take value entered and turn into string
    $('body').removeClass(); //get rid of background
    
    if (myCity == 'new york' || myCity == 'nyc' || myCity == 'new york city'){ //if string is equal to any of these
        $('body').addClass('nyc'); //add new background
    }
    else if (myCity == 'sf' || myCity == 'san francisco' || myCity == 'bay area'){
        $('body').addClass('sf');
    }
    else if (myCity == 'los angeles' || myCity == 'la' || myCity == 'lax'){
        $('body').addClass('la');
    }
    else if (myCity == 'austin' || myCity == 'atx'){
        $('body').addClass('austin');
    }
    else if (myCity == 'sydney' || myCity == 'syd'){
        $('body').addClass('sydney');
    }
    else {
        alert('Not a valid city'); //throw an error
    }
    event.preventDefault();
}*/
        
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