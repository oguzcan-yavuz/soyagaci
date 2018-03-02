$(document).ready(function () {
    // anne ve baba taraflarinin yaslarini dizilere koy
    var anneTarafi = [];
    var babaTarafi = [];
    var keysArr = Object.keys(gelen["details"]);
    for(var i = 0; i < keysArr.length; i++) {
        var arr = gelen["details"][keysArr[i]];
        var age = arr[arr.length - 1];
        if(age === 0 || age > 113) {        // buraya yas kontrolu koysak?
            continue;
        }
        if(keysArr[i].startsWith("A")) {
            anneTarafi.push(age);
        } else if(keysArr[i].startsWith("B")) {
            babaTarafi.push(age);
        }
    }
    function sum(a, b) { return a + b }
    console.log("anne tarafi: ", anneTarafi);
    var anneTarafiEnYasli = Math.max.apply(Math, anneTarafi);
    var anneTarafiEnGenc = Math.min.apply(Math, anneTarafi);
    console.log("anne tarafi en yasli: ", anneTarafiEnYasli);
    console.log("anne tarafi en genc: ", anneTarafiEnGenc);
    var anneTarafiOrt = (anneTarafi.reduce(sum) / anneTarafi.length).toFixed(1);
    console.log("anne tarafi ortalama yas: ", anneTarafiOrt);
    console.log("baba tarafi: ", babaTarafi);
    var babaTarafiEnYasli = Math.max.apply(Math, babaTarafi);
    var babaTarafiEnGenc = Math.min.apply(Math, babaTarafi);
    console.log("baba tarafi en yasli", babaTarafiEnYasli);
    console.log("baba tarafi en genc: ", babaTarafiEnGenc);
    var babaTarafiOrt = (babaTarafi.reduce(sum) / babaTarafi.length).toFixed(1);
    console.log("baba tarafi ortalama yas: ", babaTarafiOrt);

    /* Pdf Yukleme */
    $('#upload form input').change(function () {
        $('#upload form p').text("Lütfen aşağıdaki 'Soy Ağacımı Göster' butonuna tıklayınız.");
    });
});


