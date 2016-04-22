/*!
 * Print-Ready v0.0.1 (https://github.com/vinorodrigues/print-ready)
 * Copyright 2016 Vino Rodrigues
 * Licensed under MIT (https://github.com/vinorodrigues/print-ready/blob/master/LICENSE)
 */
/**
 * jQuery Plugin - adds class '.printing' when printing and tiggers 'printStart' & 'printEnd' custom events.
 *
 * Usage:
 *
 *  $(document).on( 'printStart', function(event) {
 *    // your code here
 *  });
 *
 */
(function($) {

	var isPrinting = false;

	var beforePrint = function() {
		if (!isPrinting) {
			isPrinting = true;
			$("body").addClass("printing");
			$(document).trigger("printStart");
		}
	};

	var afterPrint = function() {
		if (isPrinting) {
			isPrinting = false;
			$("body").removeClass("printing");
			$(document).trigger("printEnd");
		}
	};

	if (window.matchMedia) {
		var mediaQueryList = window.matchMedia("print");
		mediaQueryList.addListener(function(mql) {
			if (mql.matches) {
				beforePrint();
			} else {
				afterPrint();
			}
		});
	}

	window.onbeforeprint = beforePrint;

	window.onafterprint = afterPrint;

}( jQuery ));
