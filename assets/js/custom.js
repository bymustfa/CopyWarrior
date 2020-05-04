$(document).ready(function () {


    $("body").tooltip({selector: '[data-toggle=tooltip]'});


    copiesDraw();

    function copiesCall() {
        var proCopy = [];

        if (localStorage.getItem("copies")) {
            proCopy = JSON.parse(localStorage.getItem("copies"));
        }
        return proCopy;
    }

    function copiesDraw() {
        copies = copiesCall();
        var appendItem = "";

        if (copies != null && copies.length !== 0) {
            $("#copiesDeleteContainer").show();
            $("#allCopiesShowContainer").show();
            copies.forEach(function (element) {
                var id = element.id;
                var utl = element.url;
                var copyDate = element.date;
                var copyText = element.copyText;

                appendItem += '<li class="list-group-item list-group-item-action copyItem my-2 p-4 "> ' +
                    '<span class="copyIcon p-1" data-id="' + id + '"  data-toggle="tooltip" data-placement="left" title="Yazıyı Kopyala"><i class="far fa-copy"></i></span>' +
                    '<span class="small">' + shortText(copyText, 50) + '</span>' +
                    '<span class="detailIcon p-1" onclick="detailCopy('+id+')" data-id="' + id + '"  data-toggle="tooltip" data-placement="left" title="Detaylar"><i class="fas fa-info-circle"></i></span>' +
                    '</li>';
            });


        } else {
            $("#copiesDeleteContainer").hide();
            $("#allCopiesShowContainer").hide();
            appendItem = '<li class="list-group-item list-group-item-action my-2"> <h5 class="text-center">Henüz Kopyalanan İçerik Yok</h5> </li>';
        }

        $("#listContainer").html(appendItem);
    }


    $("#copiesDelete").on("click", () => {
        localStorage.removeItem("copies");
        copiesDraw();
    });

        function detailCopy(id) {
            console.log( id );
        }


    function shortText(input, length) {
        return (input.length > length) ? input.substring(0, length) + '...' : input;
    }

});