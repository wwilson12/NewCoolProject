$(document).ready(function(){
    ('#submit-btn').on('submit',searchDragDictionary); //when user presses submit, the button submits
});
    
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
        $('body').addClass('pursefirst'); //add new background
    }
    else if (dragWords == 'sickening' || dragWords == 'lets get sickening' || dragWords == 'sickening'){
        $('body').addClass('sickening');
    }
    else if (dragWords == 'the shade' || dragWords == 'shade' || dragWords == 'shadey'){
        $('body').addClass('theshade');
    }
    else if (dragWords == 'yes god' || dragWords == 'yas god' || dragWords == 'yes gawd'){
        $('body').addClass('yesgod');
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