<!--
 * index.php
 * 
 * Main Index File
 *
 * HTML 5
 * CSS 3
 * jQuery 3.1.1
 * Bootstrap 4.0.0
 * EsaelJS 0.8.2
 *
 * @author      Chris Wiese  <c.wiese@basisweb.de>
 * @copyright   2018 basisweb Chris Wiese (http://basisweb.de)
 *
 * @file        basisweb.js
 * @lastchange  06.03.2018
 * @encoding    UTF-8
 * 
-->
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Demoversionen & Kundenpräsentationen">
    <meta name="author" content="Chris Wiese | chris@basisweb.de | http://basisweb.de">
    
    <title>basisweb</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/basisweb.css" rel="stylesheet">

  </head>

  <body>

    <main role="main" class="container">

        <div class="row">
            <div class="col-12">
              <h1>WIZARD Gesellschaft fürTextilkonzepte mbH</h1>
              <h2>Demo</h2>
              <p>Auf der linken Seite ist ein mittels CreateJS erstellter 2D - Kreis zu sehen. Die rechte Seite zeigt einen animierten 3D-Würfel.</p>
            </div>
        </div>


        <div class="row">
          <div class="col-md-6 col-sm-12">
              <canvas id="theStage" width="500" height="540" class="canvas"></canvas>
          </div>
          <div class="col-6">
              <div id="theScene" width="500" height="500" class="canvas"></div>
          </div>
        </div>

    </main>

    <!-- jQuery & Bootstrap -->
    <script src="js/lib/jQuery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="js/lib/Bootstrap-4.0.0/bootstrap.min.js"></script>

    <!-- EaselJS -->
    <script src="js/lib/EaselJS-0.8.2/lib/easeljs.min.js"></script>

     <!-- ThreeJS -->
    <script src="js/lib/threeJS-r90/build/three-r90.js"></script>
    <script src="js/controls/TrackballControls.js"></script>

    <!-- basisweb MVC -->
    <script type="text/javascript" src="js/global.js"></script>
    <script type="text/javascript" src="js/model.js"></script>
    <script type="text/javascript" src="js/view.js"></script>
    <script type="text/javascript" src="js/controller.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

  </body>
</html>
