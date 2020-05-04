var date = new Date();
var Y = date.getUTCFullYear();
var M = date.getUTCMonth() + 1;
var D = date.getUTCDay();


chrome.contextMenus.create({
    "title": "CopyWarrior ile kopyala",
    "contexts": ["selection"],
    "onclick": function f(data) {
        var copyText = data.selectionText;
        copyLocal(copyText, data.pageUrl);
        const el = document.createElement('textarea');
        el.value = copyText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
});

function copyLocal(text, url) {
    var id = uniqid();
    var h = date.getHours();
    var m = date.getMinutes();
    var thisDate = Y + "-" + M + "-" + D + " | " + h + ":" + m;

        var copyItems = {
            "id": id,
            "date": thisDate,
            "url": url,
            "copyText": text
        };

    var tempCopies = copiesCall();
    tempCopies.push(copyItems);

    localStorage.setItem("copies", JSON.stringify(tempCopies));
    badgeText();
}

function copiesCall() {
    var proCopy=[];

    if (localStorage.getItem("copies") ){
        proCopy = JSON.parse(localStorage.getItem("copies") );
    }
    return proCopy;
}

function badgeText() {
    var nCopy = copiesCall();
    var text = (nCopy) ? nCopy.length : 0;
    text = text.toString();
    chrome.browserAction.setBadgeBackgroundColor({color: [82, 82, 82, 255]});
    chrome.browserAction.setBadgeText({text: '' + text});
}




/*  Unid id generator */
function uniqid(a = "", b = false) {
    var c = Date.now() / 1000;
    var d = c.toString(16).split(".").join("");
    while (d.length < 14) {
        d += "0";
    }
    var e = "";
    if (b) {
        e = ".";
        var f = Math.round(Math.random() * 100000000);
        e += f;
    }
    return a + d + e;
}
