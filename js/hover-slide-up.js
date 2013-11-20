var elems = document.getElementsByClassName("hover-slide-block");
for (var i=0; i<elems.length; i++) {
	var e = elems[i];
	(function(e) {
		var loop = undefined;
		var ch = e.children[0];
		e.onmouseover = function() {
			var stt = new Date().getTime();
			loop && clearInterval(loop);
			loop = setInterval(function() {
				var ct = new Date().getTime();
				var dh = ch.offsetHeight-e.offsetHeight
				var dy = ch.offsetTop-(ct-stt)/(1-ch.offsetTop/dh*1);
				if (dy <= -dh) {
					dy = -dh;
					loop = clearInterval(loop);
				}
				ch.style.marginTop = (dy|0)+"px";
				stt = ct;
			}, 25);
		}
		e.onmouseout = function() {
			var stt = new Date().getTime();
			loop && clearInterval(loop);
			loop = setInterval(function() {
				var ct = new Date().getTime();
				var dh = ch.offsetHeight-e.offsetHeight
				var dy = ch.offsetTop+(ct-stt)/(1+(1+ch.offsetTop/dh)*1);
				if (dy >=0) {
					dy = 0;
					loop = clearInterval(loop);
				}
				ch.style.marginTop = (dy|0)+"px";
				stt = ct;
			}, 25);
		}
	})(e);
}