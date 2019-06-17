//function pageSuivante() {
 //	document.getElementById("accueil").style.display = 'none';//on enlève le fond explosion
 //	document.getElementById("competences").style.display = 'block'; //on affiche le premier écran
 //}

 //window.onscroll = function() {ScrollFunction()};
 
//function ScrollFunction() {
    //document.getById('progress_bar_html').classList.add('conteneur_progress_bar');}



//oK

    // JQUERY

$(document).ready(function() {
  
    	$(function (){
	$(document).scroll(function() {    
    	var scroll = $(document).scrollTop();

    	if (scroll < 20) {
         	$('#accueil').show('slow');
         	$('#competences').hide();


    	} else {
			$('#accueil').hide();
        	$('#competences').show();   
    	}
    	
	});
});
   


$('.carousel').carousel({
  interval: 1000
});

$(document).ready(function()
{
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        });
     };
     });

//défilement pages on click
function pageSuivante() {
document.getElementById("competences").style.display = 'none';//on enlève le fond explosion
document.getElementById("formations").style.display = 'block'; //on affiche le premier écran
}
function pageSuivanteBis() {
document.getElementById("experiences").style.display = 'none';//on enlève le fond explosion
document.getElementById("formations").style.display = 'block'; //on affiche le premier écran
}
function pageSuivanteTer() {
document.getElementById("formations").style.display = 'none';//on enlève le fond explosion
document.getElementById("contact").style.display = 'block'; //on affiche le premier écran
}
})
//Afficher masquer FORMATIONS OnMousseHover

function afficherText1() {
	document.getElementById("annee_desc1").style.display = "block";
}

function afficherText2() {
	document.getElementById("annee_desc2").style.display = "block";
}

function afficherText3() {
	document.getElementById("annee_desc3").style.display = "block";
}

function afficherText4() {
	document.getElementById("annee_desc4").style.display = "block";
}

function masquerText1(){
		document.getElementById("annee_desc1").style.display = "none";

}
function masquerText2(){
		document.getElementById("annee_desc2").style.display = "none";

}

function masquerText3(){
		document.getElementById("annee_desc3").style.display = "none";

}

function masquerText4(){
		document.getElementById("annee_desc4").style.display = "none";

}




