$( document ).ready(function() {
    $("#copiesDelete").on("click", function(){
        //Fixme: click not working
        localStorage.removeItem( "copies" );
        copies = JSON.parse(localStorage.getItem("copies") );
        badgeText(0);
        console.log( "asdasd" );
    });

});