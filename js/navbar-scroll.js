$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar").css('box-shadow', '1px 1px 15px #888888');
       } else {
        $(".navbar").css('box-shadow', '0px 0px 0px #888888');
       }
   });
    }
});
