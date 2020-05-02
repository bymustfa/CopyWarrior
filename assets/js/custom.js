$( document ).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });

    var listContainer = $("#listContainer");

    let copies = JSON.parse(localStorage.getItem("copies") );

    if ( copies ){
        copies.forEach( function (element) {
            console.log(element);
        } );
    } else {
        listContainer.html('<h3 class="text-center">Henüz Kopyalanan İçerik Yok</h3>');
    }




});