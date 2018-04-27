//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var count = 1;
var current_fs = $('.question');
var base_question = $('.double_section');
$("#previous").click(function(){
var previous_fs = $(current_fs).prev();
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
$(current_fs).removeClass('question');
previous_fs.addClass('question');
current_fs.hide('slow');     
previous_fs.fadeIn(1000);
current_fs = previous_fs;
count--;
if (count<4){ 
$('#send').hide('slow'); 
$('.next').fadeIn(1000);      
}

if (count==1){
$('#previous').hide('slow'); 
}
if (count<2){ 
$('#previous').hide('slow'); 
}
});

$('.next').click(function(){ 
var next_fs = current_fs.next();
$(current_fs).removeClass('question');
next_fs.addClass('question');
//activate next step on progressbar using the index of next_fs
$('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');	
//show the next fieldset
current_fs.hide('slow');     
next_fs.fadeIn(1000); 
count++;
if (count>1){ 
$('#previous').fadeIn(1000); 
}    
if (count>3){ 
$('.next').hide('slow');

$('#send').fadeIn(1000); 
}
current_fs = next_fs;
});   

$('#send').click(function(){
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
$('.presentation input[type=file]').change(function(){
var filename = $(this).val().replace(/.*\\/, '');
$('#filename_presentation').val(filename);        
});
$('.plan input[type=file]').change(function(){
var filename = $(this).val().replace(/.*\\/, '');     

$('#filename_plan').val(filename);
});
});
$('#msform').on('submit', function(event) { 
$('#progressbar').hide('fast');
$('#blindLayer').show(); 
$('#letter_sent').fadeIn('fast');                           
});
$('#close').on('click', function(event) {
$(current_fs).hide();
$(current_fs).removeClass('question'); 
$(base_question).addClass('question'); 
$(base_question).fadeIn('slow');  
$('#blindLayer').hide(); 
$('#send').hide(); 
$('#previous').hide();
$('.next').show();
$('#letter_sent').hide('slow'); 
$('#msform').fadeIn('slow');
$('#progressbar').show();
$('#progressbar li').removeClass('active');
current_fs = base_question;
count=1;
});

$(document).ready(function(){         
PopUpHide();
});

function PopUpShow(){
$('#popup1').show('fast');

$('#video').attr('src', 'https://player.vimeo.com/video/266838384');
$('#blindLayer').css('display','block');
}   
function PopUpHide(){  
$('#blindLayer').css('display' ,'none');     
$('#video').attr('src', '');
$('#popup1').hide('slow');

}