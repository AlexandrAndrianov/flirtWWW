<!DOCTYPE html>
<html>
    <head>
        <title>FLIRTMAKE</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/bootstrap-responsive.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/style1.css" />
        <link rel="stylesheet" href="css/Menu.css" />
        <link rel="stylesheet" href="css/UniversalClass.css" />
        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        
        <script type="text/javascript" src="jsKnopka/jquery.min.js"></script>
 
    </head>
    <body id="Blogbody">
        <div class="navbar navbar-inverse navbar-fixed-top"><!-- navigation bar -->
            
            <!--Контейнер с Вход-->
			<!--Стили style.css-->
            <div class="login">
		<a href="">Poisk58</a>
		<a href="Content.php">О проекте</a>
		<div class="pull-right">
                    <a href="vhod.php">Вход</a>
                    <a href=""><img src="footer/vc3.png"/></a>
                </div>
            </div>
            <!--КОНЕЦ Контейнер с Вход-->
            
            <div class="navbar-inner">
                <div class="ui-top-menu-logo"><!--Сердечко-->  
                    <a href=""><img src="img/icon/logo.png"/></a>
                </div>
				
<!--                <div class="container container-width-header">
                    <a class="brand brand-left" href="index.php">
                        <em>Любимые места/</em><a class="brand" href="fun1.php"><em>Развлечение и отдых</em></a>
                    -->
                    
                  <div class="container container-width-header">
                     <!--Хлебные крошки-->
                        <ul class="span6 indent-left2">
                        <li>
                            <a class="brand hidden-visible" href="index.php">
                            <em>Любимые места Пензы /</em></a>
                        </li>
                        <li class="">
                            <a class="brand" href="index.php">
                            <em>Блог</em></a>
                        </li>
                        <li class="clear"></li>
                        </ul>
                        <!--КОНЕЦ Хлебные крошки-->
                    
 <!--                   <ul class="nav">
                        <li><a href="member-my-page.html">Моя страница</a></li>
                        <li><a href="all-members.html">Люди</a></li>
                        <li class="active"><a href="all-places.html">Места</a></li>
                        <li><a href="all-meets.html">Встречи</a></li>
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">Еще <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="all-organizatori.html">Организаторы</a></li>
                                <li><a href="all-leadings.html">Ведущие</a></li>
                                <li><a href="all-photographers.html">Фотографы</a></li>
                                <li class="divider"></li>
                                <li><a href="all-servise.html">Услуги</a></li>
                                <li><a href="all-application.html">Приложения</a></li>
                            </ul>
                        </li>
                    </ul>
 -->
                    <ul class="nav user-nav pull-right">

                        <li class="dropdown">
                            <a data-toggle="dropdown" class="profile-id dropdown-toggle margin-right-small" href="#">Рекомендуемые <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Новые</a></li>
                                <li><a href="#">Популярные</a></li>
                                <li><a href="#">Рекомендуемые</a></li>
                                <li><a href="#">Избранные</a></li>
                            </ul>
                        </li>

<!--  Меню верх Места       
                       <li class="dropdown">
                            <a data-toggle="dropdown" class="profile-id dropdown-toggle" href="#">Места <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Новые</a></li>
                                <li><a href="#">Популярные</a></li>
                                <li><a href="#">Рекомендуемые</a></li>
                                <li><a href="#">Избранные</a></li>
                            </ul>
                        </li>
КОНЕЦ Меню верх Места  -->
                         <li>
                            <button class="btn message  margin-right-small" type="button" data-toggle="collapse" 
                                    data-target="#mesta">
                                <i class="icon-cog dropdown"></i>
                                Фильтр
                            </button>
                        </li>
                        <li>
                            <button class="btn message margin-right-normal" type="button" data-toggle="collapse" 
                                    data-target="#advanced-search">
                                <i class="icon-search dropdown"></i>
                            </button>
                        </li>
                    </ul>

                 
                 </div>
            </div>
 
         </div><!-- /navigation bar -->
   
<!--    расширенный поиск     -->
	  <div id="advanced-search" class="absolute-side collapse redcollapse-search" >                   
                         <!--Кнопка закрыть окно-->                       
                         <button class="close" data-target="#advanced-search" data-toggle="collapse" type="button">
                            x
                         </button>
                         <!--КОНЕЦ Кнопка закрыть окно-->
                         
                         <div class="row calendar-conteiner">
                            <div class="span9">
                                <div class="row">
                                    <div class="span7">
                                        
                                            <select class="inputSity  span2 margin-right-small">
                                                <option disabled>Категория</option>
                                                <option>Пенза</option>
                                                <option>Москва</option>
                                                <option>Санкт-Петербург</option>
                                                <option>Владивосток</option>
                                                <option>Мокшан</option>
                                            </select>
                                       
                                   
                                    
                                            <select class="inputSity  span2 margin-right-small">
                                                <option disabled>Подкатегория</option>
                                                <option>Пенза</option>
                                                <option>Москва</option>
                                                <option>Санкт-Петербург</option>
                                                <option>Владивосток</option>
                                                <option>Мокшан</option>
                                            </select>
                                        
                                            <input class="span3" type="text">
                                    </div>
                                      
                                    <div class="input-small">
                                         <button class="btn btn-block btn-primary">Найти</button>
                                    </div>

                                </div>    

                                <div class="row">
                                   <div class="span8 border-bottom"></div>
                                </div>
                                <div class="row">
                                    <div class="span7">
                                  
                                    <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Цель визита</Label>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                    </div>
                  
                                    <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Расходы</Label>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                    </div>
                                    <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Время работы</Label>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                    </div>
                                   <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Другое</Label>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Слева</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Посредине</button>
                                            <button class="btn message margin-right-small indent-bottom5" type="button">Справа</button>
                                    </div>
                                    </div> 
                                </div>
                                <div class="row">
                                    <div class="span7">
                                        
                                    </div>
                                    <div class="input-small">
                                        <button class="btn btn-block btn-primary">Фильтр</button>
                                    </div>    
                                </div>
                            </div>
                         </div>
                   </div>
<!--    Конец расширенный поиск     -->       
		
		<!--*****************************Места (тип акордион)-->
       <div class="container">
          <div class="row-fluid"> 
            <div id="mesta" class="collapse center">
                 <div class="accordion-group"> 
                        <!--нопка закрыть окно-->
                       <div> 
                         <button class="close" data-target="#mesta" data-toggle="collapse" type="button">
                            x
                         </button>
                        </div>   
                         <!--КОНЕЦ Кнопка закрыть окно-->
                            <!--Заполнение-->
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Кафе, бары, рестораны</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Ночные клубы</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Развлекательные центры, культурные заведения</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Активный отдых</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Парки, скверы, аллеи</button>
	
                            <!--КОНЕЦ Заполнение-->
                    </div>
                </div> <!--id=mesta-->
              </div><!--row-fluid-->
          </div><!-- container-->
        <!--КОНЕЦ Места (тип акордион)-->
        

<div id="Blog" class="container-fluid">
<!---ContainerSection------------------------------------>
    <div class="headerBlog">       
            <div class="row-fluid">
               <div class="span1"></div>
               <div class="span10"> 
                <h1>Блог</h1>
               </div>
               <div class="span1"></div> 
            </div> 
    </div>
   
<!----------Статья--------------------->
     <div class="article">   
        <div class="row-fluid">
           <div class="span1"></div>
           <div class="span10">
                <hr class="indent-bottom30 indent-top30">
                <h2><a href="/blog/post/new-version-november" title="">Новая версия Gmarkt</a></h2>
                <p>
                    С ростом деловой активности и приближением новогодних
                    праздников люди начинают чаще искать товары в интернете.
                    Чтобы помочь покупателям, Gmarkt специально выпустил новую версию своего приложения, сделав поиск товаров ещё более быстрым и выгодным делом.
                     </br>В самую свежую версию Gmarkt были добавлены новые полезные функции, доработаны старые и учтены пожелания пользователей. Весь функционал разнесен теперь по трём вкладкам, которые, как и прежде, прячутся под синей кнопкой и не мешают изучению товаров в интернет-магазине.
                </p>
                <div class="row-fluid">
                    <div class="offset4 span4 indent-top20 indent-bottom20">
                        <img src="img/600b_226.png" class="img-polaroid">
                    </div> 
                </div>    
            </div>    
            <div class="span1"></div> 
         </div>
            <div class="row-fluid">
               <div class="span1">
               </div>
               <div class="span10">
                    <p class="pull-left">27.11.2013</p>   
                    <p class="pull-right date"><a class="more" href="">Читать полностью</a></p>
               </div>
               <div class="span1">
               </div> 
            </div>  
       </div>  
 <!----------Статья--------------------->  
 
 <!----------Статья--------------------->
     <div class="article">   
        <div class="row-fluid">
           <div class="span1"></div>
           <div class="span10">
                <hr class="indent-bottom30 indent-top30">
                <h2><a href="/blog/post/new-version-november" title="">Новая версия Gmarkt</a></h2>
                <p>
                    С ростом деловой активности и приближением новогодних
                    праздников люди начинают чаще искать товары в интернете.
                    Чтобы помочь покупателям, Gmarkt специально выпустил новую версию своего приложения, сделав поиск товаров ещё более быстрым и выгодным делом.
                     </br>В самую свежую версию Gmarkt были добавлены новые полезные функции, доработаны старые и учтены пожелания пользователей. Весь функционал разнесен теперь по трём вкладкам, которые, как и прежде, прячутся под синей кнопкой и не мешают изучению товаров в интернет-магазине.
                </p>
                <div class="row-fluid">
                    <div class="offset4 span4 indent-top20 indent-bottom20">
                        <img src="img/600b_226.png" class="img-polaroid">
                    </div> 
                </div>    
            </div>    
            <div class="span1"></div> 
         </div>
            <div class="row-fluid">
               <div class="span1">
               </div>
               <div class="span10">
                    <p class="pull-left date">27.11.2013</p>   
                    <p class="pull-right"><a class="more" href="">Читать полностью</a></p>
               </div>
               <div class="span1">
               </div> 
            </div>  
       </div>  
 <!----------Статья--------------------->  
 
<!---ContainerSection------------------------------------>
</div><!--Blog-->

         <!-- Menu vertical-->
     <div>
		<ul id="ui-menu-left" itemtype="http://schema.org/ItemList" itemscope="">
			<li class="active" itemprop="itemListElement">

                        </li>

			<li class="menuLeft" itemprop="itemListElement">
				<a id="ui-menu-left-home" class="ui-menu-button ui-menu-button-following " href="shop_1.php">Магазины и ТЦ</a>
			</li>
			<li class="" itemprop="itemListElement">
				<a id="ui-menu-left-architecture" class="ui-menu-button-notification ui-menu-button ui-menu-button-architecture " href="shopping1.php">Шопинг</a>
			</li>
			<li class="" itemprop="itemListElement">
				<a id="ui-menu-left-art" class="ui-menu-button-notification ui-menu-button ui-menu-button-art " href="fun1.php">Развлечения и отдых</a>
			</li>
			<li class="" itemprop="itemListElement">
				<a id="ui-menu-left-fashion-mens" class="ui-menu-button-notification ui-menu-button ui-menu-button-fashion-mens " href="beauty_1.php">Красота и здоровье</a>
			</li>
			<li class="" itemprop="itemListElement">
				<a id="ui-menu-left-fashion-womens" class="ui-menu-button-notification ui-menu-button ui-menu-button-fashion-womens " href="sport_1.php">Спорт и туризм</a>
			</li>
			<li class="" itemprop="itemListElement">
				<a id="ui-menu-left-graphic-design" class="ui-menu-button-notification ui-menu-button ui-menu-button-graphic-design " href="food_1.php">Продукты и напитки</a>
			</li>
        </ul>
<!---Конец ContainerSection------------------------------------>


  <!--style.css Подвал-->
         <div class="container">
             <div class="footer indent-top30">
                 <div class="row">
                     <div class="span6">
                       <p> &#169;2013 POISK58.ru
                        <a href="Content.php"class="href">О проекте</a>
                        <a href=""class="href">Реклама</a>
                        <a href="place-create.html"class="href">Сотрудничество</a>
                        <a href=""class="href">Помощь</a>
                       </p> 
                     </div>
                     <div class="offset2 span3 pagination-right">
                        <a href=""><img  class="socialV" src="footer/vk2.svg"/></a>
                        <a href=""><img  class="socialT"src="footer/twitter3.svg"/></a>
                        <a href=""><img  class="socialF"src="footer/facebook2.svg"/></a>	
                     </div>
                </div>
             </div>  
          </div>
   <!--КОНЕЦ style.css Подвал-->             
              
              
	<p id="back-top">
		<a href="#top"><span></span></a>
	</p>
<!--КОНЕЦ  Кнопка перехода на верх при окончании страницы-->
        
        <!-- SCRIPTS ========================================================================== -->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/popup.js"></script>
        <script src="js/shift-block.js"></script>
        <script src="js/hover-slide-up.js"></script>
	<script src="js/myjs.js"></script>
        <!-- /SCRIPTS ========================================================================== -->
       
       
    
     

     </body>
</html>