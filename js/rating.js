//Вывод рейтинга
$(document).ready(function() {
  $('.your-evalution').html('&mdash;');
  $('.rating a').hover(function() {  
    var ratingcount = $(this).text(); //берем цифру из ссылки в рейтинге
    var ratingclass = ['low', 'medium', 'high']; //классы квадратика
    $('.your-evalution').html(ratingcount); //пишем цифру   
    if (ratingcount >= 1 && ratingcount <= 3)  $('.your-evalution').toggleClass(ratingclass[0]); //от 1 до 3    
    if (ratingcount >= 4 && ratingcount <= 6)  $('.your-evalution').toggleClass(ratingclass[1]); //от 4 до 6   
    if (ratingcount >= 7 && ratingcount <= 10) $('.your-evalution').toggleClass(ratingclass[2]); //от 7 до 10   
  });  
  $('.rating a').mouseout(function() {
    //$('.your-evalution').html('˜); //если убрали курсор мыши - пишем "0" в квадратике
    $('.your-evalution').html('&mdash;');
  });    
});