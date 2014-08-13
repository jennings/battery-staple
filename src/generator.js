window.Generator = (function () {

    this.generate = function() {
        var pw = randomWord() + " " +
                 randomWord() + " " +
                 randomWord() + " " +
                 randomWord();

        return pw;
    };

    function randomWord() {
        var max = window.DICT.length;
        var ix = Math.floor(Math.random() * (max + 1));
        return window.DICT[ix];
    }

})();

function addListener(element, eventName, handler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, handler);
    } else {
        element['on' + eventName] = handler;
    }
}

addListener(document.getElementById('generate'), 'click', function () {
    document.getElementById('pw').value = Generator.generate();
});

addListener(document.getElementById('copy'), 'click', function () {
    chrome.permissions.request({
        permissions: ['clipboardWrite']
    }, function(granted){
        if (granted) {
            document.getElementById('pw').select();
            document.execCommand('copy');
            window.close();
        } else {
            console.log('permission not granted');
        }
    });
});
