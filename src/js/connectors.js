// fix arrow end issues:
// https://github.com/DmitryBaranovskiy/raphael/issues/471

var gelen = {
    "nodeStructure": {
        "children": [{
            "children": [{
                "children": [{
                    "children": [{
                        "children": [{
                            "children": [],
                            "text": {"name": "AAABA: KEZBAN YILMAZ"}
                        }, {"children": [], "text": {"name": "AAABB: HALİL -"}}], "text": {"name": "AAAB: ALİ -"}
                    }], "text": {"name": "AAA: ŞEKER ŞAHİN"}
                }, {
                    "children": [{"children": [], "text": {"name": "AABA: ÇAKIR ESMA -"}}, {
                        "children": [{
                            "children": [],
                            "text": {"name": "AABBA: KEZBAN -"}
                        }], "text": {"name": "AABB: KAMİL -"}
                    }], "text": {"name": "AAB: MEHMET ŞAHİN"}
                }], "text": {"name": "AA: PERİHAN TRABZON"}
            }, {
                "children": [{
                    "children": [{"children": [], "text": {"name": "ABAA: SERVİ -"}}, {
                        "children": [],
                        "text": {"name": "ABAB: ALİ -"}
                    }], "text": {"name": "ABA: HÜSNE TRABZON"}
                }, {
                    "children": [{"children": [], "text": {"name": "ABBA: ESMA TRABZON"}}, {
                        "children": [],
                        "text": {"name": "ABBB: MEHMET -"}
                    }], "text": {"name": "ABB: MEHMET ESMA"}
                }], "text": {"name": "AB: BAHATTİN HÜSNE"}
            }], "text": {"name": "A: ESMA YAVUZ"}
        }, {
            "children": [{
                "children": [{"children": [], "text": {"name": "BAA: MÜNİRE -"}}, {
                    "children": [],
                    "text": {"name": "BAB: AHMET GENÇ"}
                }], "text": {"name": "BA: NURTEN YAVUZ"}
            }, {
                "children": [{"children": [], "text": {"name": "BBA: HATİCE KÜBRA YAVUZ"}}, {
                    "children": [{
                        "children": [],
                        "text": {"name": "BBBB: ÖMER -"}
                    }], "text": {"name": "BBB: ALİ -"}
                }], "text": {"name": "BB: SALİH ZEKİ YAVUZ"}
            }], "text": {"name": "B: RAMAZAN YAVUZ"}
        }], "text": {"name": "K: OĞUZCAN YAVUZ"}
    },
    "details": {
        "AAB": ["Annesinin Annesinin\nBabası", "MEHMET", "ŞAHİN", "KAMİL", "ÇAKIR ESME", "PERŞEMBE\n01/07/1899", "Samsun/\nTerme/\nSAKARLI MAHALLESİ", "65-428-1", "Evli", "Ölüm\n01/02/1985", "E", 86],
        "BBB": ["Babasının Babasının\nBabası", "ALİ", "-", "ÖMER", "GÜLLÜ", "SARAYKÖY\n01/07/1890", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-3", "Evli", "Ölüm\n04/04/1934", "E", 44],
        "AAABB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabası", "HALİL", "-", "AHMET", "ZARİFE", "ORDU\n01/07/1860", "Ordu/\nAltınordu/\nIŞIKLI MAHALLESİ", "53-23-1", "Evli", "Ölüm\n14/03/1908", "E", 48],
        "ABBA": ["Annesinin Babasının\nBabasının Annesi", "ESMA", "TRABZON", "MEHMET", "HANİFE", "ORDU\n01/07/1869", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-6", "Dul", "Ölüm\n20/05/1937", "K", 68],
        "ABBB": ["Annesinin Babasının\nBabasının Babası", "MEHMET", "-", "İSMAİL", "ESMA", "ORDU\n01/07/1861", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-1", "Evli", "Ölüm\n16/03/1913", "E", 52],
        "BB": ["Babasının Babası", "SALİH ZEKİ", "YAVUZ", "ALİ", "HATİCE KÜBRA", "SARAYKÖY\n23/07/1927", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-11", "Evli", "Ölüm\n17/06/2014", "E", 87],
        "BBBB": ["Babasının Babasının\nBabasının Babası", "ÖMER", "-", "MEHMET", "AYŞE", "SARAYKÖY\n01/07/1861", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-1", "Evli", "Ölüm\n12/01/1935", "E", 74],
        "AABA": ["Annesinin Annesinin\nBabasının Annesi", "ÇAKIR ESMA", "-", "ALİ", "SERVİ", "ORDU\n01/07/1872", "Ordu/\nPerşembe/\nYARLI MAHALLESİ", "41-30-5", "Evli", "Ölüm\n01/09/1924", "K", 53],
        "A": ["Annesi", "ESMA", "YAVUZ", "BAHATTİN", "PERİHAN", "PERŞEMBE\n13/09/1971", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-59", "Evli", "Sağ\n-", "K", 47],
        "BA": ["Babasının Annesi", "NURTEN", "YAVUZ", "AHMET", "MÜNİRE", "SARAYKÖY\n31/12/1936", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-23", "Dul", "Sağ\n-", "K", 82],
        "ABAB": ["Annesinin Babasının\nAnnesinin Babası", "ALİ", "-", "MAHMUT", "FATMA", "ORDU\n01/07/1846", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-15-1", "Dul", "Ölüm\n24/12/1922", "E", 77],
        "ABAA": ["Annesinin Babasının\nAnnesinin Annesi", "SERVİ", "-", "İBRAHİM", "HÜSNE", "ORDU\n01/07/1874", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-15-9", "Evli", "Ölüm\n03/11/1922", "K", 49],
        "AAABA": ["Annesinin Annesinin\nAnnesinin Babasının\nAnnesi", "KEZBAN", "YILMAZ", "FETTAH", "GÜLSÜM", "ORDU\n01/07/1869", "Ordu/\nAltınordu/\nIŞIKLI MAHALLESİ", "53-23-7", "Dul", "Ölüm\n01/01/1960", "K", 91],
        "AAA": ["Annesinin Annesinin\nAnnesi", "ŞEKER", "ŞAHİN", "ALİ", "GÜLSÜM HOMAK", "ORDU\n14/05/1909", "Samsun/\nTerme/\nSAKARLI MAHALLESİ", "65-428-7", "Dul", "Ölüm\n05/05/1994", "K", 86],
        "AA": ["Annesinin Annesi", "PERİHAN", "TRABZON", "MEHMET", "ŞEKER", "PERŞEMBE\n08/03/1940", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-66", "Dul", "Sağ\n-", "K", 79],
        "BBA": ["Babasının Babasının\nAnnesi", "HATİCE KÜBRA", "YAVUZ", "İSMAİL", "FATMA", "SARAYKÖY\n01/07/1900", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-9", "Dul", "Ölüm\n16/11/1982", "K", 83],
        "BAA": ["Babasının Annesinin\nAnnesi", "MÜNİRE", "-", "HACI OSMAN", "GULSÜM", "SARAYKÖY\n01/07/1897", "Denizli/\nSarayköy/\nBALA MAHALLESİ", "2-312-2", "Dul", "Ölüm\n29/03/1983", "K", 86],
        "AAAB": ["Annesinin Annesinin\nAnnesinin Babası", "ALİ", "-", "HALİL", "KEZBAN", "ORDU\n01/07/1891", "Ordu/\nAltınordu/\nIŞIKLI MAHALLESİ", "53-23-2", "Bekâr", "Ölüm\n28/09/1915", "E", 25],
        "B": ["Babası", "RAMAZAN", "YAVUZ", "SALİH ZEKİ", "NURTEN", "SARAYKÖY\n27/01/1963", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-33", "Evli", "Sağ\n-", "E", 56],
        "BAB": ["Babasının Annesinin\nBabası", "AHMET", "GENÇ", "ÖMER", "GÜLSÜM", "SARAYKÖY\n01/07/1893", "Denizli/\nSarayköy/\nBALA MAHALLESİ", "2-789-1", "Evli", "Ölüm\n20/03/1939", "E", 46],
        "ABA": ["Annesinin Babasının\nAnnesi", "HÜSNE", "TRABZON", "ALİ", "SERVİ", "ORDU\n14/03/1912", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-21", "Dul", "Ölüm\n15/05/1985", "K", 74],
        "AB": ["Annesinin Babası", "BAHATTİN", "HÜSNE", "PERŞEMBE\n01/02/1940", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-42", "Evli", "Ölüm\n11/05/2005", "AHMET DAVUT TRABZON", "TRABZON AHMET DAVUT", "E", 0],
        "AABB": ["Annesinin Annesinin\nBabasının Babası", "KAMİL", "-", "ALİ", "KEZBAN", "ORDU\n01/07/1875", "Ordu/\nPerşembe/\nYARLI MAHALLESİ", "41-30-1", "Evli", "Ölüm\n-", "E", 0],
        "ABB": ["Annesinin Babasının\nBabası", "MEHMET", "ESMA", "ORDU\n14/03/1910", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-8", "Evli", "Ölüm\n16/09/1953", "E"],
        "AABBA": ["Annesinin Annesinin\nBabasının Babasının\nAnnesi", "KEZBAN", "-", "ÖMER", "FATMA", "ORDU\n01/07/1844", "Ordu/\nPerşembe/\nYARLI MAHALLESİ", "41-30-4", "Dul", "Ölüm\n16/09/1910", "K", 67],
        "K": ["Kendisi", "OĞUZCAN", "YAVUZ", "RAMAZAN", "ESMA", "BAKIRKÖY\n19/08/1996", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-60", "Bekâr", "Sağ\n-", "E", 22]
    }
};

/* Kisi Detay */

$(function () {
    $('p').click(function () {
        var kisi = $(this).text();
        var yakinlik = kisi.split(":")[1];
        var adiSoyadi = gelen["details"][yakinlik][1] + " " + gelen["details"][yakinlik][2];
        var yakinlikDerece = gelen["details"][yakinlik][0];
        var babaAdi = gelen["details"][yakinlik][3];
        var anneAdi = gelen["details"][yakinlik][4];
        var dogumYeri = gelen["details"][yakinlik][5];
        var nereli = gelen["details"][yakinlik][6];
        var cilt = gelen["details"][yakinlik][7];
        var medeniHali = gelen["details"][yakinlik][8];
        var durumu = gelen["details"][yakinlik][9];
        var cinsiyet = gelen["details"][yakinlik][10];

        document.getElementById("yakinlik").innerHTML = "Yakınlık : " + yakinlikDerece;
        document.getElementById("isim").innerHTML = adiSoyadi;
        document.getElementById("babaAdi").innerHTML = "Baba Adı : " + babaAdi;
        document.getElementById("anneAdi").innerHTML = "Anne Adı : " + anneAdi;
        document.getElementById("dogumYeri").innerHTML = "Doğum Yeri / Tarihi: " + dogumYeri;
        document.getElementById("nereli").innerHTML = "İl / İlçe / Mahalle : " + nereli;
        document.getElementById("cilt").innerHTML = "Cilt - Hane - Birey No: " + cilt;
        document.getElementById("mHal").innerHTML = "Medeni Hali: " + medeniHali;
        document.getElementById("durum").innerHTML = "Durumu: " + durumu;
        document.getElementById("cinsiyet").innerHTML = "Cinsiyet: " + cinsiyet;

    });
});

/* Bitis */

var chart_config = {
    chart: {
        container: "#OrganiseChart-big-commpany",
        levelSeparation: 25,

        rootOrientation: "WEST",

        nodeAlign: "BOTTOM",

        connectors: {
            type: "step",
            style: {
                "stroke-width": 2
            }
        },
        node: {
            HTMLclass: "big-commpany"
        }
    },
    'nodeStructure': gelen["nodeStructure"]
};
