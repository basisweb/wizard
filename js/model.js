/**
 * model.js
 * 
 * UI Model
 *
 * jQuery 3.3.1
 *
 * @author         Chris Wiese  <c.wiese@basisweb.de>
 * @copyright      2018 basisweb Chris Wiese (http://basisweb.de)
 *
 * @file           model.js
 * @lastchange     05.03.2018
 * @encoding       UTF-8
 * 
 */

/**
 *
 * Model
 *
 * Zentrales MVC-Objekt
 * --------------------
 * Sammelt alle für die Kommunikation mit dem Applikationsserver
 * veranwortlichen Konstanten und Methoden
 *
 * @type Object
 *
 */

UI.model = {

	/**
	 * 
	 * Holt per AJAX PHP $_SERVER Informationen über aktuellen Client
	 *
	 */
	getClientInfo: function () {
		$.post( "ajax/server.php", function( data ) {
			UI.global.SYSTEM_CLIENT = data;
			UI.global.log("Client: " + data.HTTP_USER_AGENT);
		}, "json");
	}

}