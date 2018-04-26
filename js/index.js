
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches



var count = 1;
var current_fs = $('.question');
// current_fs.fadeIn('1000');

$(".next").click(function(){
	// if(animating) return false;
	// animating = true;

  
	
	// var current_fs = $(this).parent();

	next_fs = current_fs.next();
  $(current_fs).removeClass('question');
  next_fs.addClass('question');
	// var number_step = $("#progressbar li").eq($("fieldset").index(next_fs));

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	current_fs.hide('slow');     
	next_fs.fadeIn(1000); 
   count++;
    if (count>3){ 
    $(".next").hide('slow');
     $('#send').fadeIn(1000); 
   }
    
    // alert(count);


	//hide the current fieldset with style
	// current_fs.animate({opacity: 0}, {

	// 	step: function(now, mx) {
	// 		//as the opacity of current_fs reduces to 0 - stored in "now"
	// 		//1. scale current_fs down to 80%
	// 		scale = 1 - (1 - now) * 0.2;
	// 		//2. bring next_fs from the right(30%)
	// 		left = (now * 90)+"%";
	// 		//3. increase opacity of next_fs to 1 as it moves in
	// 		opacity = 1 - now;
	// 		// current_fs.css({'transform': 'scale('+scale+')'});
	// 		next_fs.css({'opacity': opacity});
	// 	}, 
	// 	duration: 100, 
	// 	complete: function(){
	// 		current_fs.hide('slow');

	// 		animating = false;
	// 	}, 
	// 	//this comes from the custom easing plugin
	// 	easing: 'easeInOutElastic'
	// });
current_fs = next_fs;

});
   

$("#send").click(function(){
    var form = $('#msform');
     form.find('.compulsory').addClass('empty_field');
   
        form.find('.compulsory').each(function(){
        if($(this).val() != ''){
        $(this).removeClass('empty_field');
        } else {
        $(this).addClass('empty_field');        
        }
       var sizeEmpty = form.find('.empty_field').size();
 

	if(sizeEmpty > 0){
        form.find('.empty_field').css({'border-color':'#d8512d'});
         
          return false;
        }
     //    else{
        	
     //    $('#msform').hide('slow');
     //    console.log("Done");
	    // $('#progressbar').hide('slow');	
     //    $('#letter_sent').show('slow');
	     
     //    }
	
});
});

  
$(document).ready(function(){
    $('.get_offer').click( function(){ 
    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // 
        }
        return false; 
    });
});


$(document).ready( function() {
    $(".presentation input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename_presentation").val(filename);        
    });
    $(".plan input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");      
         
         $("#filename_plan").val(filename);
    });
});


//для видео на будущее
   // $(document).ready(function(){
         
   //      PopUpHide();
   //  });

    
   //  function PopUpShow(){
   //      $("#popup1").show('slow');
        
   //      $('#video').attr('src', 'invest.mp4');
   //      $("#blindLayer").css("display","block");
        

   //  }
   
   //  function PopUpHide(){       
   //     $('#video').attr('src', '');
   //     $("#popup1").hide('slow');
   //     $("#blindLayer").css("display","none");
   //  }