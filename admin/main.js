jQuery(document).ready(function($){
    /* Active custom background of icon */
    $(document).on("change", ".cmb-icon-background", function() {
        if($(this).val() != 'original') {
            $('.box-icon-foreground-custom').removeClass('hidden');
        } else {
            $('.box-icon-foreground-custom').addClass('hidden');
        }
        if($(this).val() != 'custom') {
            $('.box-icon-background-custom').addClass('hidden');
        } else {
            $('.box-icon-background-custom').removeClass('hidden');
        }
    });
});