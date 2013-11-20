var addEvent, delEvent;
if (document.addEventListener) {
	addEvent = function(elem, event, func) {elem.addEventListener(event, func, false)}
	delEvent = function(elem, event, func) {elem.removeEventListener(event, func, false)}
} else {
	addEvent = function(elem, event, func) {elem.attachEvent("on"+event, func)}
	delEvent = function(elem, event, func) {elem.detachEvent("on"+event, func)}
}
//function log(text) {
//	log_div.innerHTML += text+"<br>";
//}

function RegionSelector(frame, border, aspect) {
	var cfs = frame.style;
	var inner = frame.children[0];
	var vtx_br = frame.children[1];
	var cis = inner.style;
	cfs.border = border+"px solid";
	var x0=y0=0;
	var w=h=0;
	
	function setPos(x,y) {
		x0=x; y0=y;
		if (x0<0) x0=0;
		if (y0<0) y0=0;
		if (x0>inner.width-w) x0=inner.width-w;
		if (y0>inner.height-h) y0=inner.height-h;
		cfs.left = x0-border+"px";
		cis.left = -x0+"px";
		cfs.top = y0-border+"px";
		cis.top = -y0+"px";
	}
	function setSize(_w,_h) {
		if (_w < 32) _w = 32;
		if (_h < 32) _h = 32;
		if (_w > inner.width-x0) _w = inner.width-x0;
		if (_h > inner.height-y0) _h = inner.height-y0;
		if (_w < _h*aspect) {w=_w; h=_w/aspect;} else {w=_h*aspect; h=_h;}
		cfs.width = w+"px";
		cfs.height = h+"px";
	}
	function setSizeByVertex(x,y) {
		setSize(x-x0, y-y0);
	}
	this.setDefault = function() {
		if (aspect > inner.width/inner.height) {
			setPos(0, (inner.height-inner.width)>>1);
			setSize(inner.width, inner.width);
		} else {
			setPos((inner.width-inner.height)>>1, 0);
			setSize(inner.height, inner.height);
		}
	}
	
	var grab_x, grab_y;
	var move_func;
	inner.onmousedown = function(e) {
		e = e||window.event;
		addEvent(document, 'mousemove', on_mouse_move);
		addEvent(document, 'mouseup', on_mouse_up);
		grab_x = e.clientX-x0;
		grab_y = e.clientY-y0;
		move_func = setPos;
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
	vtx_br.onmousedown = function(e) {
		e = e||window.event;
		addEvent(document, 'mousemove', on_mouse_move);
		addEvent(document, 'mouseup', on_mouse_up);
		grab_x = e.clientX-x0-w;
		grab_y = e.clientY-y0-h;
		move_func = setSizeByVertex;
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
	function on_mouse_move(e) {
		e = e||window.event;
		move_func(e.clientX-grab_x, e.clientY-grab_y);
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
	function on_mouse_up(e) {
		e = e||window.event;
		delEvent(document, 'mousemove', on_mouse_move);
		delEvent(document, 'mouseup', on_mouse_up);
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
}
var rs = new RegionSelector(crop_frame, 3, 1);
document.body.onload = function() {rs.setDefault();}