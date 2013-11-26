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
                            <em>Личный кабинет</em></a>
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
                </div> <!--id=mesta-->
              </div><!--row-fluid-->
          </div><!-- container-->
        <!--КОНЕЦ Места (тип акордион)-->
		
        <div class="container"><!-- container -->

            <div class="row"> <!-- row12 Список мест -->

                <div class="span12"> <!-- span12 Список мест -->
                    <div class="row"> <!-- Места -->	
                        <div class="span3">
                            <div class="hover-slide-block">
                                <div class="hover-slide-inner">
                                    <div class="thumbnail">
                                        <div class="image-container">
                                            <div class="profile-icon nomargin type">
                                                <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                            </div>
                                            <img src="img/6004651.png">
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
                                                        г. Пенза, ул. Гагаринавапввапва пвапвапвпвап 2
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
                                                <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                            </div>
                                            <img src="img/6004651.png">
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
                                                <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                            </div>
                                            <img src="img/6004651.png">
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
                                                <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                            </div>
                                            <img src="img/6004651.png">
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
                                                <img src="img/icon/iconcolor/Control_Panel_alt.png">
                                            </div>
                                            <img src="img/6004651.png">
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
                                            <img src="img/6004651.png">
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
                                            <img src="img/6004651.png">
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
                                            <img src="img/6004651.png">
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
            <a id="ui-menu-left-home" class="ui-menu-button ui-menu-button-following " href="">Любимые</a>
            </li>
            <li class="" itemprop="itemListElement">
            <a id="ui-menu-left-architecture" class="ui-menu-button-notification ui-menu-button ui-menu-button-architecture " href="">Рекомендовал</a>
            </li>
            <li class="" itemprop="itemListElement">
            <a id="ui-menu-left-art" class="ui-menu-button-notification ui-menu-button ui-menu-button-art " href="">Не рекомендовал</a>
            </li>
            <li class="" itemprop="itemListElement">
            <a id="ui-menu-left-fashion-mens" class="ui-menu-button-notification ui-menu-button ui-menu-button-fashion-mens " href="">Фото</a>
            </li>
            <li class="" itemprop="itemListElement">
            <a id="ui-menu-left-fashion-womens" class="ui-menu-button-notification ui-menu-button ui-menu-button-fashion-womens " href="#myModal" role="button"  data-toggle="modal">Настройки</a>
            </li>
        </ul> 
    </div>
</div> <!-- /container -->


		
 <!-- ОКНО НАСТРОЙКИ..ЛИЧНЫЙ КАБИНЕТ -->
 
		<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			    <h3 id="myModalLabel">Личные данные</h3>
			</div>
			<!--Поля для заполнения-->
			<div class="modal-body bs-docs-example tooltip-demo">
                            <div class="row-fluid">
                                <div class="row-fluid">
                                    <label class="span4 labmodal">ФИО</label>
                                    <div class="span6">
                                        <input type="text" id="FIO" placeholder="Фамилия Имя" disabled="disabled"/>
                                        <a id="aFIO" data-original-title="Редактировать" href="#" data-toggle="tooltip" data-placement="top" title="">
                                        <button class="buttimg" type="button" value="" id="redactorFIO" onclick="redactor('FIO','redactorFIO','aFIO')"></button></a>
                                    </div>
                                </div>    
                                <div class="row-fluid">
                                    <label class="span4 labmodal">mail</label>
                                    <div class="span6">
                                        <input type="text" id="mail" placeholder="name@mail.ru" disabled="disabled"/>
                                        <a id="aMEIL" data-original-title="Редактировать" href="#" data-toggle="tooltip" data-placement="top" title="">
                                        <button class="  buttimg" type="button" value="" id="redactorMEIL" onclick="redactor('mail','redactorMEIL','aMEIL')"></button></a>
                                    </div>
                                </div>  
                                <div class="row-fluid">
                                    <label class="span4 labmodal">пароль</label>
                                    <div class="span6">
                                        <input type="password" id="password" placeholder="*********" disabled/>
                                        <a  id="aPASSWORD" data-original-title="Редактировать" href="#" data-toggle="tooltip" data-placement="top" title="">
                                        <button  class="  buttimg" type="button" value="" id="redactorPASSWORD" onclick="redactor2('password','redactorPASSWORD','password2','divpassword','aPASSWORD')"></button></a>
                                    </div> 
                                </div>
                                <div class="row-fluid">
                                    <div id="divpassword" class="offset4 span6" style="display:none;">
                                        <input class="width_input right"type="password" id="password2" placeholder="повторить пароль" disabled/>
                                    </div>
                                </div>  
                                <div class="row-fluid">
                                    <label class="span4 labmodal">id ВКОНТАКТЕ</label>
                                    <div class="span6">
                                        <input type="text" id="idvk" placeholder="vk.com/id123456" disabled="disabled"/>
                                        <a  id="aVK"data-original-title="Редактировать" href="#" data-toggle="tooltip" data-placement="top" title="">
                                        <button  class="  buttimg" type="button" value="" id="redactorVK"onclick="redactor('idvk','redactorVK','aVK')"></button></a>
                                    </div>
                                </div>    
                            </div>
                          </div>     
		</div>  

 <!--style.css Подвал-->
         <div class="container">
             <div class="footer">
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
		<script src="js/application.js"></script>
        <!-- /SCRIPTS ========================================================================== -->
       
       
    </body>
</html>