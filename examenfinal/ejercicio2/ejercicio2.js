$(function(){
    $('.item').click(function(){
        $(this).hide();
    })
})

$(function(){
    $("#newItemForm").on('submit', function(e) {e.preventDefault()});
    $('ul').html($('ul').html()+"<li>"+$('#itemField').val()+"</li>");
});