    // JQUERY
$(document).ready(function() {
 //slider
$('.carousel').carousel({
  interval: 3000
});
//$('.progress .progress-bar').css("width",function() {
     // return $(this).attr("aria-valuenow") + "%";
   // })
//$(".progress-bar").animate({
//    width: "70%"
//}, 2500);

});


  // JS

//défilement pages on click
function pageSuivante() {
document.getElementById("accueil").style.display = 'none';
document.getElementById("competences").style.display = 'block'; 
}
function pageSuivanteBis() {
document.getElementById("competences").style.display = 'none';
document.getElementById("experiences").style.display = 'block';
}
function pageSuivanteTer() {
document.getElementById("experiences").style.display = 'none';
document.getElementById("formations").style.display = 'block'; 
}
function pageSuivanteQuatre() {
document.getElementById("formations").style.display = 'none';
document.getElementById("contact").style.display = 'block'; 
}
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


//BACK TO TOP Button
function pageAccueil() {
document.getElementById("competences").style.display = 'none';
document.getElementById("formations").style.display = 'none';
document.getElementById("experiences").style.display = 'none';
document.getElementById("contact").style.display = 'none';
document.getElementById("accueil").style.display = 'block'; //on affiche le premier écran
}

  // JS scroll

//function pageSuivante() {
 //	document.getElementById("accueil").style.display = 'none';//on enlève le fond explosion
 //	document.getElementById("competences").style.display = 'block'; //on affiche le premier écran
 //}

 //window.onscroll = function() {ScrollFunction()};
 
//function ScrollFunction() {
    //document.getById('progress_bar_html').classList.add('conteneur_progress_bar');}



  // JQUERY scroll
    	/*$(function (){
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
});*/
   



// BACK TO TOP JQUERY
	/*if ($('#back-to-top').length) {
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
     };*/
     


// BACK TO TOP JS


// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
 // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 //   document.getElementById("myBtn").style.display = "block";
 // } else {
 //   document.getElementById("myBtn").style.display = "none";
 // }
//}
// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//  document.body.scrollTop = 0; // For Safari
//  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//}

