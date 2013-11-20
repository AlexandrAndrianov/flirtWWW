// элемент с классом with-popup-border
// за ним - popup-border

var z_base  = 1;
var z_delta = 1;
function on_over_main() {
	//если подключен shift-block, при выборе блока
	//будет устанавливаться ему(блоку) такой атрибут
	if (this.parentNode.parentNode._shift_block_selected) return;
	
	var c1 = this.parentNode.children[1];
	if (c1._popup_disabled) return;
	c1.style.display = 'block';
	c1.style.zIndex = z_base;
	this.style.zIndex = z_base+z_delta;
}
function on_out_main(e) {
	var c1 = this.parentNode.children[1];
	if (e.toElement !== c1) c1.onmouseout();
}
function on_out_popup() {
	var c0 = this.parentNode.children[0];
	this.style.display = 'none';
	this.style.zIndex = z_base;
	c0.style.zIndex = z_base-z_delta;
}
var es = document.getElementsByClassName("with-popup-border");
for (var i=0; i<es.length; i++) {
	var main_elem = es[i];
	var popup_border = main_elem.parentNode.children[1];
	if (!popup_border) continue;
	main_elem.onmouseover = on_over_main;
	main_elem.onmouseout = on_out_main;
	popup_border.onmouseout = on_out_popup;
}
