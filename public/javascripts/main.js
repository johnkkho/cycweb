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

    /* Checkout Button */
    $('.checkout-btn').click(function(){
        $('.cart-modal-table').toggleClass('d-none');
        var showCart = $('.cart-modal-table').hasClass('d-none');
        if (showCart) {
            $('.checkout-accordion').toggleClass('d-none');
            $(this).html('<i class="fa fa-shopping-cart" aria-hidden="true"></i> 購物車');
            $('#cartModal .modal-title').html('<i class="fa fa-shopping-bag" aria-hidden="true"></i> 結帳');
        } else {
            $('.checkout-accordion').toggleClass('d-none');
            $(this).html('<i class="fa fa-shopping-bag" aria-hidden="true"></i> 結帳');
            $('#cartModal .modal-title').html('<i class="fa fa-shopping-cart" aria-hidden="true"></i> 購物車');
        }
    })
});