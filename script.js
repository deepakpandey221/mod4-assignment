/*
Solution of assignment 4:

Expected output:

Hello Deepak
Good Bye john
Good Bye Tarun
Good Bye Sahil
Hello jammy
Hello Sandy
Hello Sarry
Hello jorden
Hello Ishan
Good Bye Prince
*/

(function() {
    var names = ["Deepak", "john", "Tarun", "Sahil", "jammy", "Sandy", "Sarry", "jorden", "Ishan", "Prince"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
