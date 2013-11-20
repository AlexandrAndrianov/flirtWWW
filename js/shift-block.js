// Вешает обработчики на "shift-block" (блоки).
//
// Выбранному элементу добавляет класс "shift-block-select"
//   и устанавливает атрибут _shift_block_selected = true.
//
// Ищет элемент "shift-unfolding", в нём - 3 кнопки:
//  * "shift-ctrl-prev" - переключение на предыдущий блок.
//      Если это <a> с href, и сейчас выделен первый блок,
//        будет переход по ссылке.
//  * "shift-ctrl-next" - аналогично.
//      Переход по ссылке, если выделен последний блок.
//  * "shift-ctrl-fold" - сврачивает "shift-unfolding" при нажатии


/*function elemAddClass(e,c) {
	if (e.className.indexOf(c) != -1) return;
	e.className += " "+c;
}
function elemDelClass(e,c) {
	e.className = e.className.replace(c, "");
	e.className = e.className.replace(/\s+/g, " ");
	e.className = e.className.trim();
}*/
function elemAddClass(e,c) {
	e.className += " "+c;
}
function elemDelClass(e,c) {
	var cn = e.className;
	var ind = e.className.indexOf(c);
	if (ind == -1) return;
	else {
		var left, right;
		if (ind == 0) { //"class..."
			left = 0
		} else if (cn.charAt(ind-1) == " ") { //"... class..."
			left = ind-1;
		} else return;
		if (ind+c.length == cn.length) { //"...class"
			right = cn.length;
		} else if (cn.charAt(ind+c.length) == " ") { //"...class ..."
			right = cn.length+1;
		} else return;
		e.className = cn.substr(0,left)+cn.substr(right);
	}
}


var shift_block_interval = null;
function unfold(elem, dest_h) {
	shift_block_interval && clearInterval(shift_block_interval);
	var stt = new Date().getTime();
	shift_block_interval = setInterval(function() {
		var ct = new Date().getTime();
		var h = elem.offsetHeight + (ct-stt)/3;
		if (h >= dest_h) {h=dest_h; clearInterval(shift_block_interval);}
		elem.style.height = (h|0)+"px";
	},25);
}
function fold(elem) {
	shift_block_interval && clearInterval(shift_block_interval);
	var stt = new Date().getTime();
	shift_block_interval = setInterval(function() {
		var ct = new Date().getTime();
		var h = elem.offsetHeight - (ct-stt)/3;
		if (h <= 0) {h=0; clearInterval(shift_block_interval);}
		elem.style.height = (h|0)+"px";
	},25);
}
var prev_clicked = null;
function on_block_click() {
	this.parentNode.parentNode.insertBefore(info_div, this.parentNode);
	//info_div.innerHTML = "Какое-то загруженное с сервера<br>содержимое: "+Math.random();
	if (info_div.offsetHeight < info_div.scrollHeight)
		unfold(info_div, info_div.scrollHeight);
	
	if (prev_clicked) {
		prev_clicked._shift_block_selected = undefined;
		//prev_clicked.style.border = null;
		//prev_clicked.style.margin = 0;
		elemDelClass(prev_clicked, "shift-block-select");
	}
	
	//var with_popup_border = this.getElementsByClassName("with-popup-border")[0];
	//if (with_popup_border) {
	//	with_popup_border._popup_disabled = true;
		//если внутри блок, обработанный popup.js,
		//этот атрибут будет предотвращать появление рамки
		this._shift_block_selected = true;
		//with_popup_border.style.border = "4px solid";
		//with_popup_border.style.margin  = "-4px";
		elemAddClass(this, "shift-block-select");//with_popup_border
		prev_clicked = this;//with_popup_border;
	//}
	
	//location.hash = "";
	//location.hash = "shiftUnfoldingAnchor";
	
	var popup_border = this.getElementsByClassName("popup-border")[0];
	if (popup_border) popup_border.onmouseout();
}
var block = document.getElementsByClassName("shift-block");
for (var i=0;i<block.length;i++)
	block[i].onclick = on_block_click;

var info = document.getElementsByClassName("shift-unfolding");
if (info.length == 1) {
	info = info[0];
	
	var btn_fold = info.getElementsByClassName("shift-ctrl-fold")[0];
	if (btn_fold) btn_fold.onclick = function() {
			if (prev_clicked) {
				prev_clicked._shift_block_selected = undefined;
				elemDelClass(prev_clicked, "shift-block-select");
			}
			fold(info);
		}
	
	var btn_prev = info.getElementsByClassName("shift-ctrl-prev")[0];
	if (btn_prev) btn_prev.onclick = function(e) {
			if (prev_clicked == null) return false;
			var i;
			for (i=0; i<block.length; i++) if (block[i] == prev_clicked) break;
			if (i == 0) return true;
			block[i-1].onclick();
			return false;//e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		}
	
	var btn_next = info.getElementsByClassName("shift-ctrl-next")[0];
	if (btn_next) btn_next.onclick = function(e) {
			if (prev_clicked == null) return false;
			var i;
			for (i=0; i<block.length; i++) if (block[i] == prev_clicked) break;
			if (i == block.length-1) return true;
			block[i+1].onclick();
			return false;//e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		}
}
