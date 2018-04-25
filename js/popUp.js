
   $(document).ready(function(){
         
        PopUpHide();
    });

    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show('slow');
        
        $('#video').attr('src', 'invest.mp4');
        $("#blindLayer").css("display","block");
        

    }
    //Функция скрытия PopUp1
    function PopUpHide(){       
       $('#video').attr('src', '');
        $("#popup1").hide('slow');
        $("#blindLayer").css("display","none");
    }





