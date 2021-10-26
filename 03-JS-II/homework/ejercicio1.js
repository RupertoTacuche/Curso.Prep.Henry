// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function programa1() {
	var x1 = new Number();
	var y1 = new Number();
	x1 = Number(prompt());
	y1 = Number(prompt());
	if (x1==y1) {
		document.write(x1,'<BR/>');
	} else {
		if (x1>y1) {
			document.write(x1,'<BR/>');
		} else {
			document.write(y1,'<BR/>');
		}
	}
}

