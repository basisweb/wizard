/**
 * global.js
 * 
 * UI Global
 *
 * jQuery 3.3.1
 *
 * @author     	   Chris Wiese  <c.wiese@basisweb.de>
 * @copyright      2018 basisweb Chris Wiese (http://basisweb.de)
 *
 * @file       	   global.js
 * @lastchange 	   06.03.2018
 * @encoding   	   UTF-8
 * 
 */

/**
 *
 * UI
 * 
 * Globaler Namespace: UI
 * ----------------------
 * Sammelt globale Konstanten und Methoden
 * 
 */
var UI = UI || {};


/**
 *
 * Globale Konstanten & Methoden
 * 
 * @type Object
 * 
 */

UI.global = {

	// Konsolen-Ausgaben nur im DEBUG-Modus 
	DEBUG: true,
  
	// Allgemeine Angaben zum System
	SYSTEM_NAME: 	 "WIZARD",
	SYSTEM_BACK: 	 "Produkt-Designer", 
	SYSTEM_TOKEN:  "",

  // Allgemeine Informationen zum Client (wird per AJAX mit PHP $_SERVER gefüllt)
  SYSTEM_CLIENT: {},

	// Desktop || Mobile
	SYSTEM_MOBILE: (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),

	// EaeslJS - Stage
	STAGE: {},

	// ThreeJS - Scene & Camera
	SCENE:  {},
	CAMERA: {},
  RENDER: {},
  OBJECT: {},


  	/**
	 * 
	 * Gibt Event - Informationen über Konsole aus
	 * 
	 * @param {string} msg - Auszugebener Text
	 * 
	 */
  	log: function(msg) {
  		if (this.DEBUG) console.log(msg);
	} // log

}

