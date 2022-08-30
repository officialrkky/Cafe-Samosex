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