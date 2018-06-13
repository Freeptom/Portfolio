
// cross out item. Used 'on' method on the ul (which was already created). Click method, would not work as new lis created after page load would not be deleted. 'li' here is what's being targeted for 'this' selector.
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

// click on X to delete //
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$('input[type="text"]').keypress(function(e){
  if(e.which === 13){
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val('');
    // create new li and add to ul
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>')
  }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
