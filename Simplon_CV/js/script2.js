$(document).ready(function() {
// on cache tout, ca change pas, c'est l'initialisation
$("#t1").hide();
$("#b1").hide();
$("#t2").hide();
$("#b2").hide();
$("#t3").hide();
$("#b3").hide();
$("#t4").hide();
$("#b4").hide();

//la seule fonction sur le scroll 
$(function () {
$(window).scroll(function () {

//On inverse : on commence par si on est a moins de 400
if ($(this).scrollTop() < 400 ) 
{
    $('#2').fadeOut(500); // on cache ( i.e on vient de remonté trop haut)
}
else if ($(this).scrollTop() < 650 ) // on est a moins de 650 ( mais plus de 400)
{
$('#2').fadeIn(500); //on montre b1
$('#1').fadeOut(300);//on cache t1
}
else if($(this).scrollTop() < 800 )// on est a moins de 800 ( mais plus de 650)
{
$('#1').fadeIn(300); //on montre t1
$('#2').fadeOut(500); //on cache b2
}
else if($(this).scrollTop() < ...) // et ainsi de suite pour chaque valeur
{
...

} 


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
});


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
   

$(document).ready(function() {
$('.carousel').carousel({
  interval: 1000
})
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
}