/*

const workButton = document.querySelector("#workButton")
const internshipButton = document.querySelector("#internshipButton")
const workContainer = document.querySelector(".workContainer")
const intershipContainer = document.querySelector(".intershipContainer")

var isWorkActive = true;

if(isWorkActive == true){
    workContainer.style.display = "block"
    intershipContainer.style.display = "none"
}
else if (isWorkActive ==false){
    workContainer.style.display = "none"
    intershipContainer.style.display = "block"
}

workButton.addEventListener("click", function(){
    isWorkActive = true;
})

internshipButton.addEventListener("click", function(){
    isWorkActive = false;
})

console.log(isWorkActive)

*/

$(document).ready(() => {

    $('.workContainer').show();
    $('.intershipContainer').hide();
    $('#workButton').css({
        color: 'var(--white)',
        backgroundColor: 'var(--black)',
  });

	$('#workButton').on('click', () => {
		$('.workContainer').show();
        $('.intershipContainer').hide();
        $('#workButton').css({
              color: 'var(--white)',
              backgroundColor: 'var(--black)',
        });
        $('#internshipButton').css({
            color: 'var(--black)',
            backgroundColor: 'var(--white)',
        });
	})  

    $('#internshipButton').on('click', () => {
		$('.workContainer').hide();
        $('.intershipContainer').show();
        $('#workButton').css({
            color: 'var(--black)',
            backgroundColor: 'var(--white)',
        });
        $('#internshipButton').css({
            color: 'var(--white)',
            backgroundColor: 'var(--black)',
      });

	})  
});