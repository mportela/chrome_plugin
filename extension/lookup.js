/**
 * Created by marcelportela on 2016-03-15
 */

var DICT_API_URL = 'http://127.0.0.1:8000/process/?query=%query%&url=%url%'

// helper to send an Ajax request
function sendAjaxRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function sendThroughUrl(arg1, arg2) {
    var temp = DICT_API_URL.replace('%query%', arg1);
    var url = temp.replace('%url%', arg2);
    sendAjaxRequest(url, function(resp) {
        console.log("We tried to through the url of the page!");
        console.log(url);
        console.log('return');
        console.log(resp);
    });
}

// main initialization function
function initialize() {
    console.log("initialized again");
    sendThroughUrl('', window.location.href);
}

initialize();
