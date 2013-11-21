<!DOCTYPE html>
<html>
    <head>
        <title>FLIRTMAKE</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/bootstrap-responsive.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/style1.css" />
        <link rel="stylesheet" href="css/Menu.css" />
        <link rel="stylesheet" href="css/UniversalClass.css" />
        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        
        <script type="text/javascript" src="jsKnopka/jquery.min.js"></script>
 
    </head>
    <body>
	<div class="headerWidth">
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
                        <em>Любимые места/</em><a class="brand" href="shopping1.php"><em>Шопинг</em></a>-->

            <div class="container container-width-header">
                     <!--Хлебные крошки-->
                        <ul class="input-xxlarge pull-left indent-left2">
                        <li class="">
                            <a class="brand" href="index.php">
                            <em>Любимые места Пензы /</em></a>
                        </li>
                        <li class="">
                            <a class="brand" href="index.php">
                            <em>Магазины и ТЦ</em></a>
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
                            <button class="btn message" type="button" data-toggle="collapse" 
                                    data-target="#advanced-search">
                                <i class="icon-search dropdown"></i>
                            </button>
                        </li>
                    </ul>
                    
					 <div id="advanced-search" class="absolute-side collapse redcollapse-search" >                   
                         <!--Кнопка закрыть окно-->                       
                         <button class="close" data-target="#advanced-search" data-toggle="collapse" type="button">
                            x
                         </button>
                         <!--КОНЕЦ Кнопка закрыть окно-->
                         
                         <div class="row calendar-conteiner">
                            <div class="span9 margin-left">
                                <div class="row span11">
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
                                    
                                    <div class="span1">
                                        <button class="btn btn-block btn-primary  nomargin">Найти</button>
                                    </div>
                                </div>
                                <div>
                                    <div class="span2 feature"> <!--class feature Menu.css-->
                                           <label>Расширенный поиск</label>
                                    </div>
                                    <div class="row nomargin span9">
                                        <div class="span9 border-bottom"></div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="span6">
                                  
                                    <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Цель визита</Label>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                    </div>
                  
                                    <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Расходы</Label>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                    </div>
                                    <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Время работы</Label>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                    </div>
                                   <div  data-toggle="buttons-checkbox">
                                            <label class="margin-top">Другое</Label>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-small" type="button">Посредине</button>
                                            <button class="btn message margin-right-small" type="button">Справа</button>
                                            <button class="btn message margin-right-small" type="button">Слева</button>
                                            <button class="btn message margin-right-normal" type="button">Посредине</button>
                                            <button class="btn message margin-right-normal" type="button">Справа</button>
                                    </div>
                                </div>    
                                     <div class="span1 clear right margin-right">
                                        <button class="btn btn-block btn-primary  nomargin">Фильтр</button>
                                    </div>
                                </div>
                            </div>
                        </div>
 
				</div>
            </div>
			</div>
        </div><!-- /navigation bar -->
       
		
		<!--*****************************Места (тип акордион)-->
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
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Арбеково</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Терновка</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Запрудный</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Согласие</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Шуист</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Манжурия</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Западная поляна</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Веселовка</button>
                                    <button class="btn message margin-right-normal buttomdesignated" type="submit"/>Арбековская застава</button> 
	
                            <!--КОНЕЦ Заполнение-->
                </div>
            </div>   
         </div>  
        <!--КОНЕЦ Места (тип акордион)-->
		
        <div class="container"><!-- container -->

            <div class="row"> <!-- row12 Список мест -->

                <div class="span12"> <!-- span12 Список мест -->
                    <div class="row"> <!-- Места -->
				<div class="center">		
                        <div class="span3">
                            <div class="hover-slide-block">
                                <div class="hover-slide-inner">
                                    <div class="thumbnail">
                                        <div class="image-container">
                                            <div class="profile-icon nomargin type">
                                                <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                            </div>
                                            <img src="img/4651.png">
                                            <div class="image-info"><i class="icon-user icon-white"></i>: 365 234</div>
                                        </div>
                                    </div>
                                    <div class="thumbnail">
                                        <div class="hover-slide-second">
                                            <div class="block">

                                                <div class="profile-icon nomargin pull-left">
                                                    <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                                </div>
                                                <h4 class="head-shift">Тип места</h4>
                                                <div class="clear"></div>
                                            </div>
                                            <div class="about-bottom">
                                                <div class="block">
                                                    <div class="margin-top-normal margin-left-lager">
                                                        <a href="">Название места</a>
                                                    </div>    
                                                    <div class="margin-top-small margin-left-lager">
                                                        г. Пенза, ул. Гагарина 2
                                                    </div>    
                                                    <div class="margin-top-normal margin-left-lager flaer">
                                                        <a class="btn btn-primary" href="place-viewing.html">Подробнее</a>
                                                        <a class="btn btn-primary" href="#"><i class="icon-star icon-white"></i></a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="span3">
                            <div class="hover-slide-block">
                                <div class="hover-slide-inner">
                                    <div class="thumbnail">
                                        <div class="image-container">
                                            <div class="profile-icon nomargin type">
                                                <img src="img/icon/iconcolor/Limewire_alt.png">
                                            </div>
                                            <img src="img/4651.png">
                                            <div class="image-info"><i class="icon-user icon-white"></i>: 365 234</div>
                                        </div>
                                    </div>
                                    <div class="thumbnail">
                                        <div class="hover-slide-second">
                                            <div class="block">

                                                <div class="profile-icon nomargin pull-left">
                                                    <img src="img/icon/iconcolor/Limewire_alt.png">
                                                </div>
                                                <h4 class="head-shift">Тип места</h4>
                                                <div class="clear"></div>
                                            </div>
                                            <div class="about-bottom">
                                                <div class="block">
                                                    <div class="margin-top-normal margin-left-lager">
                                                        <a href="">Название места</a>
                                                    </div>    
                                                    <div class="margin-top-small margin-left-lager">
                                                        г. Пенза, ул. Гагарина 2
                                                    </div>    
                                                    <div class="margin-top-normal margin-left-lager flaer">
                                                        <a class="btn btn-primary" href="place-viewing.html">Подробнее</a>
                                                        <a class="btn btn-primary" href="#"><i class="icon-star icon-white"></i></a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="span3">
                            <div class="hover-slide-block">
                                <div class="hover-slide-inner">
                                    <div class="thumbnail">
                                        <div class="image-container">
                                            <img src="img/4651.png">
                                            <div class="image-info"><i class="icon-user icon-white"></i>: 365 234</div>
                                        </div>
                                    </div>
                                    <div class="thumbnail">
                                        <div class="hover-slide-second">
                                            <div class="massage-fromwhat">
                                                <div><span>Константинов Константин</span></div>
                                                <div><span>30.05.13</span></div>
                                            </div>
                                            <div class="application-block">Добавил встречу</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="span3">
                            <div class="hover-slide-block">
                                <div class="hover-slide-inner">
                                    <div class="thumbnail">
                                        <div class="image-container">
                                            <img src="img/4651.png">
                                            <div class="image-info"><i class="icon-user icon-white"></i>: 365 234</div>
                                        </div>
                                    </div>
                                    <div class="thumbnail">
                                        <div class="hover-slide-second">
                                            <div class="massage-fromwhat">
                                                <div><span>Константинов Константин</span></div>
                                                <div><span>30.05.13</span></div>
                                            </div>
                                            <div class="application-block">Добавил встречу</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					<div class="clear"></div>
					   </div>
                    </div>  
                   
                    <div class="pagination pagination-centered">
                        <ul>
                            <li class="disabled"><a href="#">&laquo;</a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                    </div>

                </div> <!-- /span12 Список мест -->

            </div> <!-- /row12 Список мест -->
<!-- Menu vertical-->
     <div>
		<ul id="ui-menu-left" itemtype="http://schema.org/ItemList" itemscope="">
			<li class="active" itemprop="itemListElement">

                        </li>

			<li class="menuLeft" itemprop="itemListElement">
				<a id="ui-menu-left-home" class="ui-menu-button ui-menu-button-following " href="shop_1.php">Магазины и ТЦ</a>
			</li>
			<li class="" itemprop="itemListElement">
				<a id="ui-menu-left-architecture" class="ui-menu-button-notification ui-menu-button ui-menu-button-architecture active" href="shopping1.php">Шопинг</a>
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

			<meta content="Channels on Piccsy" itemprop="name">
			<meta content="A list of all the active image channels on Piccsy, choose something that interests you!" itemprop="description">
        </ul>
		 
<!--Одиночное меню-->
<ul id="ui-menu-left-sale" itemtype="" itemscope="">
<meta content="Unordered" itemprop="itemListOrder">

<li class="menuLeft" itemprop="itemListElement">
<a id="ui-menu-left-home" class="ui-menu-button ui-menu-button-following " href="">Скидки</a>
</li>



<meta content="Channels on Piccsy" itemprop="name">
<meta content="A list of all the active image channels on Piccsy, choose something that interests you!" itemprop="description">
</ul>
<!--Конец Одиночного меню-->
		</div>
</div> <!-- /container -->

 <!--style.css Подвал-->
         <div class="footer">
                <p>&#169;2013 POISK58.ru
                    <a href="Content.php"class="href">О проекте</a>
                    <a href=""class="href">Реклама</a>
                    <a href="place-create.html"class="href">Сотрудничество</a>
                    <a href=""class="href">Помощь</a>

                    <a href=""><img  class="socialV" src="footer/vk2.svg"/></a>
                    <a href=""><img  class="socialT"src="footer/twitter3.svg"/></a>
                    <a href=""><img  class="socialF"src="footer/facebook2.svg"/></a>	

                </p>
          </div>



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