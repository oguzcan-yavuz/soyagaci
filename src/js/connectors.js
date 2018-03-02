// fix arrow end issues:
// https://github.com/DmitryBaranovskiy/raphael/issues/471


var gelen = {
    "details": {
        "BAAA": ["Babasının Annesinin\nAnnesinin Annesi", "HAVA", "İSKENDER", "HURŞUT", "HAVA", "SÜRMENE\n01/07/1876", "Trabzon/\nYomra/\nTAŞDELEN MAHALLESİ", "21-60-7", "Evli", "Ölüm\n01/01/1931", "K", 55],
        "B": ["Babası", "SELAHATTİN", "KURT", "AHMET", "FATMA", "YOMRA\n10/02/1954", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-41", "Evli", "Sağ\n-", "E", 65],
        "ABAA": ["Annesinin Babasının\nAnnesinin Annesi", "ASİYE", "ÇEPNİ", "SÜLEYMAN", "HAVA", "YOMRA\n01/07/1885", "Trabzon/\nArsin/\nGÖLGELİK MAHALLESİ", "13-45-2", "Dul", "Ölüm\n-", "K", 0],
        "ABBA": ["Annesinin Babasının\nBabasının Annesi", "HANIMCIK", "ALKAN", "AHMET", "PEMBE", "YOMRA\n01/07/1884", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-3", "Dul", "Ölüm\n15/06/1939", "K", 55],
        "BABBA": ["Babasının Annesinin\nBabasının Babasının\nAnnesi", "ESMA", "YILMAZ", "AHMET", "EMİNE", "YOMRA\n01/07/1866", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-6", "Dul", "Sağ\n-", "K", 152],
        "AAA": ["Annesinin Annesinin\nAnnesi", "AYŞE", "ELMAS", "ALİ", "ASLİ", "AKÇAABAT\n01/09/1929", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-27", "Dul", "Ölüm\n06/03/2013", "K", 84],
        "AAAA": ["Annesinin Annesinin\nAnnesinin Annesi", "ASLİ", "YAVUZ", "OSMAN", "YETER", "AKÇAABAT\n01/07/1905", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-14", "Dul", "Ölüm\n12/06/1985", "K", 81],
        "AAABA": ["Annesinin Annesinin\nAnnesinin Babasının\nAnnesi", "AYŞE", "YAVUZ", "MUSTAFA", "GÜLLÜ", "AKÇAABAT\n01/07/1877", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-8", "Dul", "Sağ\n-", "K", 141],
        "BA": ["Babasının Annesi", "FATMA", "KURT", "RECEP", "HAMDİYE", "YOMRA\n11/09/1924", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-26", "Dul", "Ölüm\n12/10/2000", "K", 77],
        "AAAB": ["Annesinin Annesinin\nAnnesinin Babası", "ALİ", "YAVUZ", "KAMİL", "AYŞE", "AKÇAABAT\n01/07/1898", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-6", "Evli", "Ölüm\n28/10/1937", "E", 40],
        "BAA": ["Babasının Annesinin\nAnnesi", "HAMDİYE", "YILMAZ", "İBRAHİM", "HAVA", "YOMRA\n01/07/1899", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-15", "Evli", "Ölüm\n05/04/1979", "K", 80],
        "AABBA": ["Annesinin Annesinin\nBabasının Babasının\nAnnesi", "HEDİYE", "-", "ABDULLAH", "HAVVA", "AKÇAABAT\n01/07/1855", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-5", "Dul", "Ölüm\n17/08/1912", "K", 58],
        "ABAB": ["Annesinin Babasının\nAnnesinin Babası", "ABDULMECİT", "ÇEPNİ", "MEHMET", "FATMA", "YOMRA\n01/07/1877", "Trabzon/\nArsin/\nGÖLGELİK MAHALLESİ", "13-45-1", "Evli", "Ölüm\n-", "E", 0],
        "BABB": ["Babasının Annesinin\nBabasının Babası", "HASAN", "-", "TEMEL", "ESMA", "YOMRA\n01/07/1884", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-3", "Evli", "Ölüm\n-", "E", 0],
        "ABBB": ["Annesinin Babasının\nBabasının Babası", "İBRAHİM", "-", "YAKUP", "HEDİYE", "YOMRA\n01/07/1877", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-1", "Evli", "Ölüm\n08/02/1913", "E", 36],
        "AABBB": ["Annesinin Annesinin\nBabasının Babasının\nBabası", "MEHMET", "-", "AHMET", "HATİCE", "AKÇAABAT\n01/07/1861", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-1", "Evli", "Ölüm\n18/07/1911", "E", 51],
        "BBA": ["Babasının Babasının\nAnnesi", "FATİME", "KURT", "ALİ", "RAHİME", "YOMRA\n01/07/1887", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-11", "Evli", "Ölüm\n05/04/1967", "K", 80],
        "AAB": ["Annesinin Annesinin\nBabası", "SÜLEYMAN", "ELMAS", "CELAL", "ZEHRA", "AKÇAABAT\n01/09/1931", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-15", "Evli", "Ölüm\n25/05/2000", "E", 69],
        "AABA": ["Annesinin Annesinin\nBabasının Annesi", "ZEHRA", "HIR", "İSMAİL", "MÜRVET", "AKÇAABAT\n01/07/1891", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-12", "Dul", "Ölüm\n05/08/1982", "K", 92],
        "BBBA": ["Babasının Babasının\nBabasının Annesi", "GÜLSÜM", "KURT", "ÖMER", "FATİME", "YOMRA\n01/07/1849", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-4", "Evli", "Ölüm\n-", "K", 0],
        "ABA": ["Annesinin Babasının\nAnnesi", "FERİDE", "ALKAN", "ABDULMECİT", "ASİYE", "YOMRA\n28/12/1906", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-8", "Evli", "Ölüm\n25/04/1984", "K", 78],
        "AB": ["Annesinin Babası", "MUSTAFA", "ALKAN", "YUSUF", "FERİDE", "YOMRA\n01/09/1933", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-10", "Evli", "Ölüm\n27/10/2009", "E", 77],
        "BBBB": ["Babasının Babasının\nBabasının Babası", "YUSUF", "KURT", "MUSTAFA", "ESMA", "YOMRA\n01/07/1847", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-1", "Evli", "Ölüm\n04/03/1928", "E", 81],
        "BAB": ["Babasının Annesinin\nBabası", "RECEP", "YILMAZ", "HASAN", "AYŞE", "YOMRA\n01/07/1905", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-5", "Evli", "Ölüm\n24/05/1972", "E", 67],
        "AAABBA": ["Annesinin Annesinin\nAnnesinin Babasının\nBabasının Annesi", "FATİME", "-", "MUSTAFA", "CEMİLE", "AKÇAABAT\n01/07/1845", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-7", "Evli", "Ölüm\n-", "K", 0],
        "K": ["Kendisi", "KADİRHAN", "KURT", "SELAHATTİN", "FATMANUR", "SAMSUN\n20/09/1993", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-148", "Bekâr", "Sağ\n-", "E", 25],
        "BABA": ["Babasının Annesinin\nBabasının Annesi", "AYİŞE", "YILMAZ", "ALİ OSMAN", "ŞERİFE", "YOMRA\n01/07/1887", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-9", "Evli", "Ölüm\n25/12/1957", "K", 71],
        "BABBB": ["Babasının Annesinin\nBabasının Babasının\nBabası", "TEMEL", "YILMAZ", "ALİ", "AYŞE", "YOMRA\n01/07/1843", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-1", "Evli", "Ölüm\n-", "E", 0],
        "A": ["Annesi", "FATMANUR", "KURT", "MUSTAFA", "SEBAHAT", "TRABZON\n25/05/1963", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-89", "Evli", "Sağ\n-", "K", 55],
        "AAABB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabası", "KAMİL", "-", "HASAN", "FATİME", "AKÇAABAT\n01/07/1878", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-2", "Evli", "Ölüm\n04/06/1915", "E", 37],
        "AA": ["Annesinin Annesi", "SEBAHAT", "ALKAN", "SÜLEYMAN", "AYŞE", "AKÇAABAT\n13/02/1946", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-22", "Dul", "Sağ\n-", "K", 73],
        "BB": ["Babasının Babası", "AHMET", "KURT", "HASAN", "FATİME", "YOMRA\n02/01/1926", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-16", "Evli", "Ölüm\n03/09/1987", "E", 62],
        "BAABA": ["Babasının Annesinin\nAnnesinin Babasının\nAnnesi", "EMİNE", "İSKENDER", "MEHMET", "-", "YOMRA\n01/07/1844", "Trabzon/\nYomra/\nTAŞDELEN MAHALLESİ", "21-60-5", "Bekâr", "Sağ\n-", "K", 174],
        "ABB": ["Annesinin Babasının\nBabası", "YUSUF", "ALKAN", "İBRAHİM", "HANIMCIK", "YOMRA\n23/09/1910", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-5", "Dul", "Ölüm\n02/01/1988", "E", 78],
        "BBB": ["Babasının Babasının\nBabası", "HASAN", "KURT", "YUSUF", "GÜLSÜM", "YOMRA\n01/07/1892", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-3", "Evli", "Ölüm\n08/04/1967", "E", 75],
        "AABB": ["Annesinin Annesinin\nBabasının Babası", "CELAL", "HIR", "MEHMET", "HEDİYE", "AKÇAABAT\n01/07/1899", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-4", "Evli", "Ölüm\n27/01/1957", "E", 58],
        "AAABBB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabasının Babası", "HASAN", "-", "AHMET", "AYŞE", "AKÇAABAT\n01/07/1839", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-1", "Dul", "Ölüm\n03/05/1914", "E", 75],
        "BAAB": ["Babasının Annesinin\nAnnesinin Babası", "İBRAHİM", "İSKENDER", "MEHMET", "EMİNE", "YOMRA\n01/07/1877", "Trabzon/\nYomra/\nTAŞDELEN MAHALLESİ", "21-60-2", "Evli", "Ölüm\n10/05/1936", "E", 59]
    },
    "nodeStructure": {
        "children": [{
            "children": [{
                "children": [{
                    "children": [{
                        "children": [],
                        "text": {"name": "AAAA: ASLİ YAVUZ"}
                    }, {
                        "children": [{
                            "children": [],
                            "text": {"name": "AAABA: AYŞE YAVUZ"}
                        }, {
                            "children": [{"children": [], "text": {"name": "AAABBA: FATİME -"}}, {
                                "children": [],
                                "text": {"name": "AAABBB: HASAN -"}
                            }], "text": {"name": "AAABB: KAMİL -"}
                        }], "text": {"name": "AAAB: ALİ YAVUZ"}
                    }], "text": {"name": "AAA: AYŞE ELMAS"}
                }, {
                    "children": [{"children": [], "text": {"name": "AABA: ZEHRA HIR"}}, {
                        "children": [{
                            "children": [],
                            "text": {"name": "AABBA: HEDİYE -"}
                        }, {"children": [], "text": {"name": "AABBB: MEHMET -"}}], "text": {"name": "AABB: CELAL HIR"}
                    }], "text": {"name": "AAB: SÜLEYMAN ELMAS"}
                }], "text": {"name": "AA: SEBAHAT ALKAN"}
            }, {
                "children": [{
                    "children": [{"children": [], "text": {"name": "ABAA: ASİYE ÇEPNİ"}}, {
                        "children": [],
                        "text": {"name": "ABAB: ABDULMECİT ÇEPNİ"}
                    }], "text": {"name": "ABA: FERİDE ALKAN"}
                }, {
                    "children": [{"children": [], "text": {"name": "ABBA: HANIMCIK ALKAN"}}, {
                        "children": [],
                        "text": {"name": "ABBB: İBRAHİM -"}
                    }], "text": {"name": "ABB: YUSUF ALKAN"}
                }], "text": {"name": "AB: MUSTAFA ALKAN"}
            }], "text": {"name": "A: FATMANUR KURT"}
        }, {
            "children": [{
                "children": [{
                    "children": [{
                        "children": [],
                        "text": {"name": "BAAA: HAVA İSKENDER"}
                    }, {
                        "children": [{"children": [], "text": {"name": "BAABA: EMİNE İSKENDER"}}],
                        "text": {"name": "BAAB: İBRAHİM İSKENDER"}
                    }], "text": {"name": "BAA: HAMDİYE YILMAZ"}
                }, {
                    "children": [{"children": [], "text": {"name": "BABA: AYİŞE YILMAZ"}}, {
                        "children": [{
                            "children": [],
                            "text": {"name": "BABBA: ESMA YILMAZ"}
                        }, {"children": [], "text": {"name": "BABBB: TEMEL YILMAZ"}}], "text": {"name": "BABB: HASAN -"}
                    }], "text": {"name": "BAB: RECEP YILMAZ"}
                }], "text": {"name": "BA: FATMA KURT"}
            }, {
                "children": [{"children": [], "text": {"name": "BBA: FATİME KURT"}}, {
                    "children": [{
                        "children": [],
                        "text": {"name": "BBBA: GÜLSÜM KURT"}
                    }, {"children": [], "text": {"name": "BBBB: YUSUF KURT"}}], "text": {"name": "BBB: HASAN KURT"}
                }], "text": {"name": "BB: AHMET KURT"}
            }], "text": {"name": "B: SELAHATTİN KURT"}
        }], "text": {"name": "K: KADİRHAN KURT"}
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
