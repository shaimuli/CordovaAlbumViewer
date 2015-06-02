// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    //document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );    

    //function onDeviceReady() {
    //    // Handle the Cordova pause and resume events
    //    document.addEventListener( 'pause', onPause.bind( this ), false );
    //    document.addEventListener('resume', onResume.bind(this), false);
    //    document.addEventListener("backbutton", onBackKeyDown, false);
    //    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    //};

    //function onBackKeyDown(e) {
    //    if ($('.ui-page-active').attr('id') == 'main') {
    //        alert("111");
    //        exitAppPopup();
    //    } else {
    //        alert("2222");
    //        exitAppPopup();
    //    }
    //    //e.preventDefault();
    //    //navigator.notification.confirm("Are you sure you want to exit ?", onConfirm, "Confirmation", "Yes,No");
    //    //alert("asdasd");
    //    // Prompt the user with the choice
    //}

    document.addEventListener('deviceready', function() {
        var exitApp = false, intval = setInterval(function (){exitApp = false;}, 1000);
        document.addEventListener("backbutton", function (e){
            e.preventDefault();
            if (exitApp) {
                clearInterval(intval) 
                (navigator.app && navigator.app.exitApp()) || (device && device.exitApp())
            }
            else {
                clearInterval(intval) 
                (navigator.app && navigator.app.exitApp()) || (device && device.exitApp())
                //exitApp = true
                //history.back(1);
            } 
        }, false);
    }, false

    function exitAppPopup() {
        //alert("333");
         //navigator.app.exitApp();
        navigator.notification.confirm('Sure you want to exit!',onConfirm, 'Confirm', ['Cancel','Exit']); 
    }

    function onConfirm(button) {
        alert("onConfirm");
        if (button == 2) {//If User selected No, then we just do nothing
            return;
        } else {
            navigator.app.exitApp();// Otherwise we quit the app.
        }
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();