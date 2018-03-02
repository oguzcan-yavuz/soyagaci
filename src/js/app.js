function mode(array)
{
    if(array.length === 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(!modeMap[el]) {
            modeMap[el] = 1;
        }
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

$(document).ready(function () {
    // anne ve baba taraflarinin yaslarini dizilere koy
    var aTarafiYas = [];
    var aTarafiSehir = [];
    var bTarafiYas = [];
    var bTarafiSehir = [];
    var keysArr = Object.keys(gelen["details"]);
    for(var i = 0; i < keysArr.length; i++) {
        var arr = gelen["details"][keysArr[i]];
        var sehir = arr[6].split("/")[0];
        var age = arr[arr.length - 1];
        if(age === 0 || age > 113 || typeof age !== "number") {        // buraya yas kontrolu koysak?
            continue;
        }
        if(keysArr[i].startsWith("A")) {
            aTarafiYas.push(age);
            aTarafiSehir.push(sehir);
        } else if(keysArr[i].startsWith("B")) {
            bTarafiYas.push(age);
            bTarafiSehir.push(sehir);
        }
    }
    function sum(a, b) { return a + b }
    console.log("anne tarafi: ", aTarafiYas);
    var anneTarafiEnYasli = Math.max.apply(Math, aTarafiYas);
    var anneTarafiEnGenc = Math.min.apply(Math, aTarafiYas);
    console.log("anne tarafi en yasli: ", anneTarafiEnYasli);
    console.log("anne tarafi en genc: ", anneTarafiEnGenc);
    var aTarafiYasOrt = (aTarafiYas.reduce(sum) / aTarafiYas.length).toFixed(1);
    console.log("anne tarafi ortalama yas: ", aTarafiYasOrt);
    console.log("baba tarafi: ", bTarafiYas);
    var bTarafiYasEnYasli = Math.max.apply(Math, bTarafiYas);
    var bTarafiYasEnGenc = Math.min.apply(Math, bTarafiYas);
    console.log("baba tarafi en yasli", bTarafiYasEnYasli);
    console.log("baba tarafi en genc: ", bTarafiYasEnGenc);
    var bTarafiYasOrt = (bTarafiYas.reduce(sum) / bTarafiYas.length).toFixed(1);
    console.log("baba tarafi ortalama yas: ", bTarafiYasOrt);
    console.log(aTarafiSehir);
    console.log(bTarafiSehir);
    console.log("anne tarafi en cok yasanan sehir: ", mode(aTarafiSehir));
    console.log("baba tarafi en cok yasanan sehir: ", mode(bTarafiSehir));

    /* Pdf Yukleme */
    $('#upload form input').change(function () {
        $('#upload form p').text("Lütfen aşağıdaki 'Soy Ağacımı Göster' butonuna tıklayınız.");
    });
});

