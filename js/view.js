/**
 * view.js
 * 
 * UI View
 *
 * jQuery 3.3.1
 *
 * @author         Chris Wiese  <c.wiese@basisweb.de>
 * @copyright      2018 basisweb Chris Wiese (http://basisweb.de)
 *
 * @file           view.js
 * @lastchange     06.03.2018
 * @encoding       UTF-8
 *
 */



/**
 *
 * View
 *
 * Zentrales MVC-Objekt
 * --------------------
 * Sammelt alle für die Darstellung verantwortlichen 
 * Konstanten und Methoden
 *
 * @type Object
 * 
 */

UI.view = {


	/**
	 *
	 * threeJS - Methoden
	 * ------------------
 	 *
	 */
	ThreeJS: {

		/**
		 *
		 * Richtet die HTML - Canvas ein
		 *
		 * @param {string} id - Target -ID
		 *
		 */
		buildScene: function(id) {
			// 3D Scene und Kamerapersepektive & -position definieren
			UI.global.SCENE  = new THREE.Scene();
			UI.global.CAMERA = new THREE.PerspectiveCamera( 75, $('#' + id).width() / $('#' + id).width(), 0.1, 1000 );
			UI.global.CAMERA.position.z = 10;
			UI.global.CAMERA.position.x = 20;
			UI.global.CAMERA.position.y = 40;

			var ambientLight = new THREE.AmbientLight( 0xffffff, 0.6 );
			UI.global.SCENE.add( ambientLight );
			var directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
			var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.5);
			directionalLight1.position.set( 120, 120, 120 );
			directionalLight2.position.set( -50,-50,-50 );
			UI.global.SCENE.add( directionalLight1 );
			UI.global.SCENE.add( directionalLight2 );
			
			// 3D Renderer erstellen (WebGL) und Größe zuweisen
			UI.global.RENDER = new THREE.WebGLRenderer( { antialias: true });
			UI.global.RENDER.setPixelRatio( window.devicePixelRatio );
			UI.global.RENDER.setSize( $('#' + id).width(), $('#' + id).width() );

			controls = new THREE.OrbitControls( UI.global.CAMERA, UI.global.RENDER.domElement );
			controls.target.set( 0, 25, 0 );
			controls.update();

			// Vom Renderer erstellten DOM-Canvas in Container einfügen
			 $('#' + id).append( UI.global.RENDER.domElement );
		},

		/**
		 *
		 * Zeichnet einen Würfel
		 *
		 * @param {int} x - Achsenlänge X
		 * @param {int} y - Achsenlänge Y
		 * @param {int} z - Achsenlänge Z
		 *
		 */
		drawBox: function(x,y,z) {
			// Würfel mit kantenlängen und Materialeigenschaften erstellen ...
			var geometry     = new THREE.BoxGeometry( x, y, z );
			var material     = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			UI.global.OBJECT = new THREE.Mesh( geometry, material );
			
			// ... und der Szene hinzufügen
			UI.global.SCENE.add( UI.global.OBJECT );
			
		},

		/**
		 *
		 * Zeichnet ein T-Shirt
		 *
		 * @param {int} x - Achsenlänge X
		 * @param {int} y - Achsenlänge Y
		 * @param {int} z - Achsenlänge Z
		 *
		 */
		drawTShirt: function() {
		
			var loader = new THREE.ColladaLoader();
			loader.load( 'mash/t-shirt.dae', function ( collada ) {
				//var animations = collada.animations;
				UI.global.OBJECT = collada.scene;
				//mixer = new THREE.AnimationMixer( UI.global.OBJECT );
				//var action = mixer.clipAction( animations[ 0 ] ).play();
				UI.global.SCENE.add( UI.global.OBJECT );
			});

		},




		/**
		 * 
		 * Berechnet die Szene und animiert das Objekt (Rotataion x/y)
		 *
		 */
		animate: function () {
			// Rekursive Zuweisung der zu animierenden Szene
			requestAnimationFrame( UI.view.ThreeJS.animate );

			// Animation durch Drehen des Objekts über zwei Achsen
			//UI.global.OBJECT.rotation.x += 0.005;
			//UI.global.OBJECT.rotation.y += 0.05;

			// Abschließendes Berechnen der 3D-Szene
			UI.global.RENDER.render( UI.global.SCENE, UI.global.CAMERA );
		},

	},


	/**
	 *
	 * EaselJS - Methoden
	 * ------------------
 	 *
	 */
	EaselJS: {

		/**
		 *
		 * Richtet die HTML - Canvas ein
		 *
		 * @param {string} id - Target -ID
		 *
		 */
		buildStage: function(id) {
			UI.global.STAGE = new createjs.Stage(id);
		},




		/**
		 *
		 * Zeichnet einen Kreis
		 *
		 * @param {int} x - Mittelpunkt X
		 * @param {int} y - Mittelpunkt Y
		 * @param {int} r - Radius
		 *
		 */
		drawCircle: function(x,y,r) {
			// CreateJs - Shape erzeugen
			var circle = new createjs.Shape();
			
			// Gefüllten Kreis definieren
			circle.graphics.beginFill("#00ff00").drawCircle(0, 0, r);
			
			// Mittelpunkt definieren
			circle.x = x;
			circle.y = y;

			// Objekt zuweisen
			UI.global.STAGE.addChild(circle);
			UI.global.STAGE.update();
		}

	}

}

