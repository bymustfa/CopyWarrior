chrome.contextMenus.create({
    "title": "CopyWarrior ile kopyala",
    "contexts": ["selection"],
    "onclick": function f(data) {
        copyLocal(data.selectionText, data.pageUrl);
    }
});

function badgeText(text) {
    chrome.browserAction.setBadgeBackgroundColor({ color: [82,82,82, 255] });
    chrome.browserAction.setBadgeText({text: '' + text});
}

var date = new Date();
var Y = date.getUTCFullYear();
var M = date.getUTCMonth() + 1;
var D = date.getUTCDay();


function copyLocal(text, url) {
    var id = uniqid();
    var h = date.getHours();
    var m = date.getMinutes();

    var thisDate = Y + "-" + M + "-" + D + " | " + h + ":" + m;

    var copyItem = {"id": id, "date": thisDate, "url": url, "copyText": text};
    var copies = JSON.parse(localStorage.getItem("copies"))

    if (!copies) {
        copies = [];
    }


    copies.push(copyItem);
    localStorage.setItem('copies', JSON.stringify(copies));

    badgeText( copies.length );
}

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
