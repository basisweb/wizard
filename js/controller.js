/**
 * controller.js
 * 
 * UI Controller
 *
 * jQuery 3.3.1
 *
 * @author     	   Chris Wiese  <c.wiese@basisweb.de>
 * @copyright      2018 basisweb Chris Wiese (http://basisweb.de)
 *
 * @file       	   controller.js
 * @lastchange 	   06.03.2018
 * @encoding   	   UTF-8
 * 
 */



/**
 *
 * Controller
 *
 * Zentrales MVC-Objekt
 * --------------------
 * Sammelt alle für die Initialisierung und  Eventsteuerung veranwortlichen
 * Kontanten und Methoden
 * 
 * @type Object
 *  
 */

UI.controller = {

	/**
	 *
	 * Initialisiert die Anwendung
	 *
	 * @constructor
	 *
	 */
	init: function() {

		// User-Information holen
		UI.model.getClientInfo();

		// EaselJS - Stage einrichten & Kreis zeichnen
		UI.view.EaselJS.buildStage('theStage');
		UI.view.EaselJS.drawCircle(250,270,100);

		// ThreeJS - Scene einrichten & Box zeichnen
		UI.view.ThreeJS.buildScene('theScene');
		UI.view.ThreeJS.drawBox(20,20,20);
		UI.view.ThreeJS.animate();

	}

}

