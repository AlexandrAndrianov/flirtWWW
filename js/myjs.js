		/*функция размарозки input*/
 function redactor(id,id2,id3)
{
	
	var el=document.getElementById(id);
    var ol=document.getElementById(id2);
	var ul=document.getElementById(id3);
	

   if(el.disabled === true)
   {
      el.disabled = false;	
	 ol.style="background-image:url(../footer/right.png)";
	 ul.setAttribute("data-original-title", 'Сохранить');
	
    }
   else
   {
	   ol.style="background-image:url(../footer/edit.png)";
	   el.disabled = true;	
	   ul.setAttribute("data-original-title", 'Редактировать');
	}

}
 function redactor2(id1,id2,id3,id4,id5)
{
	
	var id1=document.getElementById(id1);
    var id2=document.getElementById(id2);
	var id3=document.getElementById(id3);
    var id4=document.getElementById(id4);
	var id5=document.getElementById(id5);

   if(id1.disabled  === true)
   {
      id1.disabled = false;	
	  id2.style="background-image:url(../footer/right.png)";
	  id3.disabled = false;
	  id4.style = "display:block";
	  id5.setAttribute("data-original-title", 'Сохранить');
    }
   else
   {
	
	  id1.disabled = true;	
	  id2.style="background-image:url(../footer/edit.png)";
	  id3.disabled = true;
	  id4.style = "display:none";
	  id5.setAttribute("data-original-title", 'Редактировать');
   }

}
		/*кнопка прокрутки*/
$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
        
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
(function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();