/* Pdf Yukleme */
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
    console.log(anneTarafi);
    console.log(babaTarafi);

    $('#upload form input').change(function () {
        $('#upload form p').text("Lütfen aşağıdaki 'Soy Ağacımı Göster' butonuna tıklayınız.");
    });
});


