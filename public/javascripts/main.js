/**
 * Created by john- on 6/11/2017.
 */
$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        trigger: 'hover'
    });

    $('a.gallery-href').click(function(event){
        var imgLocation = event.target.src;
        var title = $(this).find('h4').html();
        $('#galleryModal').find('img').attr('src', imgLocation);
        $('#galleryModal').find('h5').html(title);
    });

    $().dropdown('toggle');
});