// fix arrow end issues:
// https://github.com/DmitryBaranovskiy/raphael/issues/471


var gelen = {"details": {"AAAA": ["Annesinin Annesinin\nAnnesinin Annesi", "ASLİ", "YAVUZ", "OSMAN", "YETER", "AKÇAABAT\n01/07/1905", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-14", "Dul", "Ölüm\n12/06/1985", "K"], "BAB": ["Babasının Annesinin\nBabası", "RECEP", "YILMAZ", "HASAN", "AYŞE", "YOMRA\n01/07/1905", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-5", "Evli", "Ölüm\n24/05/1972", "E"], "BBA": ["Babasının Babasının\nAnnesi", "FATİME", "KURT", "ALİ", "RAHİME", "YOMRA\n01/07/1887", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-11", "Evli", "Ölüm\n05/04/1967", "K"], "ABB": ["Annesinin Babasının\nBabası", "YUSUF", "ALKAN", "İBRAHİM", "HANIMCIK", "YOMRA\n23/09/1910", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-5", "Dul", "Ölüm\n02/01/1988", "E"], "AAABB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabası", "KAMİL", "-", "HASAN", "FATİME", "AKÇAABAT\n01/07/1878", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-2", "Evli", "Ölüm\n04/06/1915", "E"], "BBB": ["Babasının Babasının\nBabası", "HASAN", "KURT", "YUSUF", "GÜLSÜM", "YOMRA\n01/07/1892", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-3", "Evli", "Ölüm\n08/04/1967", "E"], "ABA": ["Annesinin Babasının\nAnnesi", "FERİDE", "ALKAN", "ABDULMECİT", "ASİYE", "YOMRA\n28/12/1906", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-8", "Evli", "Ölüm\n25/04/1984", "K"], "ABAB": ["Annesinin Babasının\nAnnesinin Babası", "ABDULMECİT", "ÇEPNİ", "MEHMET", "FATMA", "YOMRA\n01/07/1877", "Trabzon/\nArsin/\nGÖLGELİK MAHALLESİ", "13-45-1", "Evli", "Ölüm\n-", "E"], "AABBA": ["Annesinin Annesinin\nBabasının Babasının\nAnnesi", "HEDİYE", "-", "ABDULLAH", "HAVVA", "AKÇAABAT\n01/07/1855", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-5", "Dul", "Ölüm\n17/08/1912", "K"], "AAABBA": ["Annesinin Annesinin\nAnnesinin Babasının\nBabasının Annesi", "FATİME", "-", "MUSTAFA", "CEMİLE", "AKÇAABAT\n01/07/1845", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-7", "Evli", "Ölüm\n-", "K"], "BA": ["Babasının Annesi", "FATMA", "KURT", "RECEP", "HAMDİYE", "YOMRA\n11/09/1924", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-26", "Dul", "Ölüm\n12/10/2000", "K"], "AA": ["Annesinin Annesi", "SEBAHAT", "ALKAN", "SÜLEYMAN", "AYŞE", "AKÇAABAT\n13/02/1946", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-22", "Dul", "Sağ\n-", "K"], "AAB": ["Annesinin Annesinin\nBabası", "SÜLEYMAN", "ELMAS", "CELAL", "ZEHRA", "AKÇAABAT\n01/09/1931", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-15", "Evli", "Ölüm\n25/05/2000", "E"], "AAABA": ["Annesinin Annesinin\nAnnesinin Babasının\nAnnesi", "AYŞE", "YAVUZ", "MUSTAFA", "GÜLLÜ", "AKÇAABAT\n01/07/1877", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-8", "Dul", "Sağ\n-", "K"], "BABBB": ["Babasının Annesinin\nBabasının Babasının\nBabası", "TEMEL", "YILMAZ", "ALİ", "AYŞE", "YOMRA\n01/07/1843", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-1", "Evli", "Ölüm\n-", "E"], "BAAA": ["Babasının Annesinin\nAnnesinin Annesi", "HAVA", "İSKENDER", "HURŞUT", "HAVA", "SÜRMENE\n01/07/1876", "Trabzon/\nYomra/\nTAŞDELEN MAHALLESİ", "21-60-7", "Evli", "Ölüm\n01/01/1931", "K"], "ABBA": ["Annesinin Babasının\nBabasının Annesi", "HANIMCIK", "ALKAN", "AHMET", "PEMBE", "YOMRA\n01/07/1884", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-3", "Dul", "Ölüm\n15/06/1939", "K"], "AB": ["Annesinin Babası", "MUSTAFA", "ALKAN", "YUSUF", "FERİDE", "YOMRA\n01/09/1933", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-10", "Evli", "Ölüm\n27/10/2009", "E"], "BB": ["Babasının Babası", "AHMET", "KURT", "HASAN", "FATİME", "YOMRA\n02/01/1926", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-16", "Evli", "Ölüm\n03/09/1987", "E"], "AABBB": ["Annesinin Annesinin\nBabasının Babasının\nBabası", "MEHMET", "-", "AHMET", "HATİCE", "AKÇAABAT\n01/07/1861", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-1", "Evli", "Ölüm\n18/07/1911", "E"], "BBBA": ["Babasının Babasının\nBabasının Annesi", "GÜLSÜM", "KURT", "ÖMER", "FATİME", "YOMRA\n01/07/1849", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-4", "Evli", "Ölüm\n-", "K"], "ABBB": ["Annesinin Babasının\nBabasının Babası", "İBRAHİM", "-", "YAKUP", "HEDİYE", "YOMRA\n01/07/1877", "Trabzon/\nOrtahisar/\nYALINCAK MAHALLESİ", "79-33-1", "Evli", "Ölüm\n08/02/1913", "E"], "BABB": ["Babasının Annesinin\nBabasının Babası", "HASAN", "-", "TEMEL", "ESMA", "YOMRA\n01/07/1884", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-3", "Evli", "Ölüm\n-", "E"], "AAAB": ["Annesinin Annesinin\nAnnesinin Babası", "ALİ", "YAVUZ", "KAMİL", "AYŞE", "AKÇAABAT\n01/07/1898", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-6", "Evli", "Ölüm\n28/10/1937", "E"], "ABAA": ["Annesinin Babasının\nAnnesinin Annesi", "ASİYE", "ÇEPNİ", "SÜLEYMAN", "HAVA", "YOMRA\n01/07/1885", "Trabzon/\nArsin/\nGÖLGELİK MAHALLESİ", "13-45-2", "Dul", "Ölüm\n-", "K"], "AABB": ["Annesinin Annesinin\nBabasının Babası", "CELAL", "HIR", "MEHMET", "HEDİYE", "AKÇAABAT\n01/07/1899", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-4", "Evli", "Ölüm\n27/01/1957", "E"], "BAA": ["Babasının Annesinin\nAnnesi", "HAMDİYE", "YILMAZ", "İBRAHİM", "HAVA", "YOMRA\n01/07/1899", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-15", "Evli", "Ölüm\n05/04/1979", "K"], "AAABBB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabasının Babası", "HASAN", "-", "AHMET", "AYŞE", "AKÇAABAT\n01/07/1839", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-67-1", "Dul", "Ölüm\n03/05/1914", "E"], "BBBB": ["Babasının Babasının\nBabasının Babası", "YUSUF", "KURT", "MUSTAFA", "ESMA", "YOMRA\n01/07/1847", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-1", "Evli", "Ölüm\n04/03/1928", "E"], "BAAB": ["Babasının Annesinin\nAnnesinin Babası", "İBRAHİM", "İSKENDER", "MEHMET", "EMİNE", "YOMRA\n01/07/1877", "Trabzon/\nYomra/\nTAŞDELEN MAHALLESİ", "21-60-2", "Evli", "Ölüm\n10/05/1936", "E"], "AAA": ["Annesinin Annesinin\nAnnesi", "AYŞE", "ELMAS", "ALİ", "ASLİ", "AKÇAABAT\n01/09/1929", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-27", "Dul", "Ölüm\n06/03/2013", "K"], "BABBA": ["Babasının Annesinin\nBabasının Babasının\nAnnesi", "ESMA", "YILMAZ", "AHMET", "EMİNE", "YOMRA\n01/07/1866", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-6", "Dul", "Sağ\n-", "K"], "BAABA": ["Babasının Annesinin\nAnnesinin Babasının\nAnnesi", "EMİNE", "İSKENDER", "MEHMET", "-", "YOMRA\n01/07/1844", "Trabzon/\nYomra/\nTAŞDELEN MAHALLESİ", "21-60-5", "Bekâr", "Sağ\n-", "K"], "B": ["Babası", "SELAHATTİN", "KURT", "AHMET", "FATMA", "YOMRA\n10/02/1954", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-41", "Evli", "Sağ\n-", "E"], "BABA": ["Babasının Annesinin\nBabasının Annesi", "AYİŞE", "YILMAZ", "ALİ OSMAN", "ŞERİFE", "YOMRA\n01/07/1887", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-2-9", "Evli", "Ölüm\n25/12/1957", "K"], "K": ["Kendisi", "KADİRHAN", "KURT", "SELAHATTİN", "FATMANUR", "SAMSUN\n20/09/1993", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-148", "Bekâr", "Sağ\n-", "E"], "A": ["Annesi", "FATMANUR", "KURT", "MUSTAFA", "SEBAHAT", "TRABZON\n25/05/1963", "Trabzon/\nYomra/\nGÜLYURDU MAHALLESİ", "9-9-89", "Evli", "Sağ\n-", "K"], "AABA": ["Annesinin Annesinin\nBabasının Annesi", "ZEHRA", "HIR", "İSMAİL", "MÜRVET", "AKÇAABAT\n01/07/1891", "Trabzon/\nAkçaabat/\nDEMİRCİ MAHALLESİ", "38-65-12", "Dul", "Ölüm\n05/08/1982", "K"]}, "nodeStructure": {"text": {"name": "K: KADİRHAN KURT"}, "children": [{"text": {"name": "A: FATMANUR KURT"}, "children": [{"text": {"name": "AA: SEBAHAT ALKAN"}, "children": [{"text": {"name": "AAA: AYŞE ELMAS"}, "children": [{"text": {"name": "AAAA: ASLİ YAVUZ"}, "children": []}, {"text": {"name": "AAAB: ALİ YAVUZ"}, "children": [{"text": {"name": "AAABA: AYŞE YAVUZ"}, "children": []}, {"text": {"name": "AAABB: KAMİL -"}, "children": [{"text": {"name": "AAABBA: FATİME -"}, "children": []}, {"text": {"name": "AAABBB: HASAN -"}, "children": []}]}]}]}, {"text": {"name": "AAB: SÜLEYMAN ELMAS"}, "children": [{"text": {"name": "AABA: ZEHRA HIR"}, "children": []}, {"text": {"name": "AABB: CELAL HIR"}, "children": [{"text": {"name": "AABBA: HEDİYE -"}, "children": []}, {"text": {"name": "AABBB: MEHMET -"}, "children": []}]}]}]}, {"text": {"name": "AB: MUSTAFA ALKAN"}, "children": [{"text": {"name": "ABA: FERİDE ALKAN"}, "children": [{"text": {"name": "ABAA: ASİYE ÇEPNİ"}, "children": []}, {"text": {"name": "ABAB: ABDULMECİT ÇEPNİ"}, "children": []}]}, {"text": {"name": "ABB: YUSUF ALKAN"}, "children": [{"text": {"name": "ABBA: HANIMCIK ALKAN"}, "children": []}, {"text": {"name": "ABBB: İBRAHİM -"}, "children": []}]}]}]}, {"text": {"name": "B: SELAHATTİN KURT"}, "children": [{"text": {"name": "BA: FATMA KURT"}, "children": [{"text": {"name": "BAA: HAMDİYE YILMAZ"}, "children": [{"text": {"name": "BAAA: HAVA İSKENDER"}, "children": []}, {"text": {"name": "BAAB: İBRAHİM İSKENDER"}, "children": [{"text": {"name": "BAABA: EMİNE İSKENDER"}, "children": []}]}]}, {"text": {"name": "BAB: RECEP YILMAZ"}, "children": [{"text": {"name": "BABA: AYİŞE YILMAZ"}, "children": []}, {"text": {"name": "BABB: HASAN -"}, "children": [{"text": {"name": "BABBA: ESMA YILMAZ"}, "children": []}, {"text": {"name": "BABBB: TEMEL YILMAZ"}, "children": []}]}]}]}, {"text": {"name": "BB: AHMET KURT"}, "children": [{"text": {"name": "BBA: FATİME KURT"}, "children": []}, {"text": {"name": "BBB: HASAN KURT"}, "children": [{"text": {"name": "BBBA: GÜLSÜM KURT"}, "children": []}, {"text": {"name": "BBBB: YUSUF KURT"}, "children": []}]}]}]}]}}


/* Kisi Detay */	

$(function(){
    $('p').click(function(){
        var kisi = $(this).text();
		var yakinlik = kisi.split(":")[0];
		console.log(gelen["details"][yakinlik]);
		var adiSoyadi = gelen["details"][yakinlik][1] + " " +gelen["details"][yakinlik][2];
		var yakinlikDerece = gelen["details"][yakinlik][0];
		var babaAdi = gelen["details"][yakinlik][3];
		var anneAdi = gelen["details"][yakinlik][4];
		var dogumYeri = gelen["details"][yakinlik][5];
		console.log(dogumYeri.split(" "));
		var nereli = gelen["details"][yakinlik][6];
		var cilt = gelen["details"][yakinlik][7];
		var medeniHali = gelen["details"][yakinlik][8];
		var durumu = gelen["details"][yakinlik][9];
		var cinsiyet = gelen["details"][yakinlik][10];
		
		document.getElementById("yakinlik").innerHTML =  "Yakınlık : " + yakinlikDerece;
		document.getElementById("isim").innerHTML =  adiSoyadi;
		document.getElementById("babaAdi").innerHTML =  "Baba Adı : " + babaAdi;
		document.getElementById("anneAdi").innerHTML =  "Anne Adı : " + anneAdi;
		document.getElementById("dogumYeri").innerHTML =  "Doğum Yeri / Tarihi: " + dogumYeri;
		document.getElementById("nereli").innerHTML =  "İl / İlçe / Mahalle : " + nereli;
		document.getElementById("cilt").innerHTML =  "Cilt - Hane - Birey No: " + cilt;
		document.getElementById("mHal").innerHTML =  "Medeni Hali: " + medeniHali;
		document.getElementById("durum").innerHTML =  "Durumu: " + durumu;
		document.getElementById("cinsiyet").innerHTML =  "Cinsiyet: " + cinsiyet;
		
    });
});

/* Bitis */	

var chart_config = {
	chart: {
		container: "#OrganiseChart-big-commpany",
		levelSeparation: 50,

		rootOrientation: "SOUTH",
		
		nodeAlign: "BOTTOM",

		connectors: {
			type: "step",
			style: {
				"stroke-width": 1
			}
		},
		node: {
			HTMLclass: "big-commpany"	
		}
	},
	'nodeStructure': gelen["nodeStructure"]
	}
