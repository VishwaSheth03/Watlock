$(document).ready(function () {
    var SCRIPT_ROOT = "../"
    if(window.location.href.includes("watlock.html"))
        SCRIPT_ROOT = "./"
    $("head").html($("head").html() +
    `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap core CSS -->
    <link href="`+SCRIPT_ROOT+`vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="`+SCRIPT_ROOT+`vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="`+SCRIPT_ROOT+`vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="`+SCRIPT_ROOT+`css/style.css" rel="stylesheet">

    <!--Scripts-->
    `);

    function dynamicallyLoadScript(url) {
        var script = document.createElement("script"); 
        script.src = SCRIPT_ROOT+url; 
        document.head.appendChild(script);
    }
    let script_list = ["vendor/jquery/jquery.min.js", "vendor/scrollreveal/scrollreveal.min.js", "vendor/jquery-easing/jquery.easing.min.js",
        "js/main.js", "vendor/bootstrap/js/bootstrap.bundle.min.js"]
    script_list.forEach(dynamicallyLoadScript)

    $('nav').html(
        `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
    <div class="container">
    <a class="navbar-brand" href="`+SCRIPT_ROOT+`watlock.html">Home</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="`+SCRIPT_ROOT+`pages/about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="`+SCRIPT_ROOT+`pages/newsfeed.html">News Feed</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="`+SCRIPT_ROOT+`pages/sponsors.html">Sponsors</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="`+SCRIPT_ROOT+`pages/contact.html">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="`+SCRIPT_ROOT+`pages/donate.html">Donate</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    `);

});