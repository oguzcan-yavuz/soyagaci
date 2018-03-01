// fix arrow end issues:
// https://github.com/DmitryBaranovskiy/raphael/issues/471

var chart_config = {
	chart: {
		container: "#OrganiseChart-big-commpany",
		levelSeparation: 45,

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

	nodeStructure: {
		text: { name: "CEO" },
		connectors: {
			style: {
				'stroke': '#bbb',
				'arrow-end': 'oval-wide-long'
			}
		},
		children: [
			{
				text: { name: "Account" },
				stackChildren: true,
				connectors: {
					style: {
						'stroke': '#8080FF',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					{
						text: {name: "Receptionist"},
						HTMLclass: "reception"
					},
					{
						text: {name: "Author"}
					}
				]
			},
			{
				text: { name: "Operation Manager" },
				connectors: {
					style: {
						'stroke': '#bbb',
						"stroke-dasharray": "- .", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
						'arrow-start': 'classic-wide-long'
					}
				},
				children: [
					{
						text: {name: "Manager I"},
						connectors: {
							style: {
								stroke: "#00CE67"
							}
						},
						children: [
							{
								text: {name: "Worker I"}
							},
							{
								pseudo: true,
								connectors: {
									style: {
										stroke: "#00CE67"
									}
								},
								children: [
									{
										text: {name: "Worker II"}
									}
								]
							},
							{
								text: {name: "Worker III"}
							}
						]
					},
					{
						text: {name: "Manager II"},
						connectors: {
							type: "curve",
							style: {
								stroke: "#50688D"
							}
						},
						children: [
							{
								text: {name: "Worker I"}
							},
							{
								text: {name: "Worker II"}
							}
						]
					},
					{
						text: {name: "Manager III"},
						connectors: {
							style: {
								'stroke': '#FF5555'
							}
						},
						children: [
							{
								text: {name: "Worker I"}
							},
							{
								pseudo: true,
								connectors: {
									style: {
										'stroke': '#FF5555'
									}
								},
								children: [
									{
										text: {name: "Worker II"}
									},
									{
										text: {name: "Worker III"}
									}
								]
							},
							{
								text: {name: "Worker IV"}
							}
						]
					}
				]
			},
			{
				text: { name: "Delivery Manager" },
				stackChildren: true,
				connectors: {
					stackIndent: 30,
					style: {
						'stroke': '#E3C61A',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					{
						text: {name: "Driver I"}
					},
					{
						text: {name: "Driver II"}
					},
					{
						text: {name: "Driver III"}
					}
				]
			}
		]
	}
};

// var gelen = {"nodeStructure": {"text": {"name": "K: OĞUZCAN YAVUZ"}, "children": [{"text": {"name": "A: ESMA YAVUZ"}, "children": [{"text": {"name": "AA: PERİHAN TRABZON"}, "children": [{"text": {"name": "AAA: ŞEKER ŞAHİN"}, "children": [{"text": {"name": "AAAB: ALİ -"}, "children": [{"text": {"name": "AAABA: KEZBAN YILMAZ"}, "children": []}, {"text": {"name": "AAABB: HALİL -"}, "children": []}]}]}, {"text": {"name": "AAB: MEHMET ŞAHİN"}, "children": [{"text": {"name": "AABA: ÇAKIR ESMA -"}, "children": []}, {"text": {"name": "AABB: KAMİL -"}, "children": [{"text": {"name": "AABBA: KEZBAN -"}, "children": []}]}]}]}, {"text": {"name": "AB: BAHATTİN HÜSNE"}, "children": [{"text": {"name": "ABA: HÜSNE TRABZON"}, "children": [{"text": {"name": "ABAA: SERVİ -"}, "children": []}, {"text": {"name": "ABAB: ALİ -"}, "children": []}]}, {"text": {"name": "ABB: MEHMET ESMA"}, "children": [{"text": {"name": "ABBA: ESMA TRABZON"}, "children": []}, {"text": {"name": "ABBB: MEHMET -"}, "children": []}]}]}]}, {"text": {"name": "B: RAMAZAN YAVUZ"}, "children": [{"text": {"name": "BA: NURTEN YAVUZ"}, "children": [{"text": {"name": "BAA: MÜNİRE -"}, "children": []}, {"text": {"name": "BAB: AHMET GENÇ"}, "children": []}]}, {"text": {"name": "BB: SALİH ZEKİ YAVUZ"}, "children": [{"text": {"name": "BBA: HATİCE KÜBRA YAVUZ"}, "children": []}, {"text": {"name": "BBB: ALİ -"}, "children": [{"text": {"name": "BBBB: ÖMER -"}, "children": []}]}]}]}]}, "details": {"ABBB": ["Annesinin Babasının\nBabasının Babası", "MEHMET", "-", "İSMAİL", "ESMA", "ORDU\n01/07/1861", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-1", "Evli", "Ölüm\n16/03/1913", "E"], "BBBB": ["Babasının Babasının\nBabasının Babası", "ÖMER", "-", "MEHMET", "AYŞE", "SARAYKÖY\n01/07/1861", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-1", "Evli", "Ölüm\n12/01/1935", "E"], "A": ["Annesi", "ESMA", "YAVUZ", "BAHATTİN", "PERİHAN", "PERŞEMBE\n13/09/1971", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-59", "Evli", "Sağ\n-", "K"], "AABBA": ["Annesinin Annesinin\nBabasının Babasının\nAnnesi", "KEZBAN", "-", "ÖMER", "FATMA", "ORDU\n01/07/1844", "Ordu/\nPerşembe/\nYARLI MAHALLESİ", "41-30-4", "Dul", "Ölüm\n16/09/1910", "K"], "ABBA": ["Annesinin Babasının\nBabasının Annesi", "ESMA", "TRABZON", "MEHMET", "HANİFE", "ORDU\n01/07/1869", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-6", "Dul", "Ölüm\n20/05/1937", "K"], "K": ["Kendisi", "OĞUZCAN", "YAVUZ", "RAMAZAN", "ESMA", "BAKIRKÖY\n19/08/1996", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-60", "Bekâr", "Sağ\n-", "E"], "AA": ["Annesinin Annesi", "PERİHAN", "TRABZON", "MEHMET", "ŞEKER", "PERŞEMBE\n08/03/1940", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-66", "Dul", "Sağ\n-", "K"], "AAABB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabası", "HALİL", "-", "AHMET", "ZARİFE", "ORDU\n01/07/1860", "Ordu/\nAltınordu/\nIŞIKLI MAHALLESİ", "53-23-1", "Evli", "Ölüm\n14/03/1908", "E"], "ABB": ["Annesinin Babasının\nBabası", "MEHMET", "ESMA", "ORDU\n14/03/1910", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-8", "Evli", "Ölüm\n16/09/1953", "E"], "BB": ["Babasının Babası", "SALİH ZEKİ", "YAVUZ", "ALİ", "HATİCE KÜBRA", "SARAYKÖY\n23/07/1927", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-11", "Evli", "Ölüm\n17/06/2014", "E"], "AAA": ["Annesinin Annesinin\nAnnesi", "ŞEKER", "ŞAHİN", "ALİ", "GÜLSÜM HOMAK", "ORDU\n14/05/1909", "Samsun/\nTerme/\nSAKARLI MAHALLESİ", "65-428-7", "Dul", "Ölüm\n05/05/1994", "K"], "ABAB": ["Annesinin Babasının\nAnnesinin Babası", "ALİ", "-", "MAHMUT", "FATMA", "ORDU\n01/07/1846", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-15-1", "Dul", "Ölüm\n24/12/1922", "E"], "AAB": ["Annesinin Annesinin\nBabası", "MEHMET", "ŞAHİN", "KAMİL", "ÇAKIR ESME", "PERŞEMBE\n01/07/1899", "Samsun/\nTerme/\nSAKARLI MAHALLESİ", "65-428-1", "Evli", "Ölüm\n01/02/1985", "E"], "AABB": ["Annesinin Annesinin\nBabasının Babası", "KAMİL", "-", "ALİ", "KEZBAN", "ORDU\n01/07/1875", "Ordu/\nPerşembe/\nYARLI MAHALLESİ", "41-30-1", "Evli", "Ölüm\n-", "E"], "AB": ["Annesinin Babası", "BAHATTİN", "HÜSNE", "PERŞEMBE\n01/02/1940", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-42", "Evli", "Ölüm\n11/05/2005", "AHMET DAVUT TRABZON", "TRABZON AHMET DAVUT", "E"], "BBA": ["Babasının Babasının\nAnnesi", "HATİCE KÜBRA", "YAVUZ", "İSMAİL", "FATMA", "SARAYKÖY\n01/07/1900", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-9", "Dul", "Ölüm\n16/11/1982", "K"], "BA": ["Babasının Annesi", "NURTEN", "YAVUZ", "AHMET", "MÜNİRE", "SARAYKÖY\n31/12/1936", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-23", "Dul", "Sağ\n-", "K"], "BAA": ["Babasının Annesinin\nAnnesi", "MÜNİRE", "-", "HACI OSMAN", "GULSÜM", "SARAYKÖY\n01/07/1897", "Denizli/\nSarayköy/\nBALA MAHALLESİ", "2-312-2", "Dul", "Ölüm\n29/03/1983", "K"], "ABA": ["Annesinin Babasının\nAnnesi", "HÜSNE", "TRABZON", "ALİ", "SERVİ", "ORDU\n14/03/1912", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-2-21", "Dul", "Ölüm\n15/05/1985", "K"], "BAB": ["Babasının Annesinin\nBabası", "AHMET", "GENÇ", "ÖMER", "GÜLSÜM", "SARAYKÖY\n01/07/1893", "Denizli/\nSarayköy/\nBALA MAHALLESİ", "2-789-1", "Evli", "Ölüm\n20/03/1939", "E"], "ABAA": ["Annesinin Babasının\nAnnesinin Annesi", "SERVİ", "-", "İBRAHİM", "HÜSNE", "ORDU\n01/07/1874", "Ordu/\nPerşembe/\nÇAMARASI MAHALLESİ", "13-15-9", "Evli", "Ölüm\n03/11/1922", "K"], "AAAB": ["Annesinin Annesinin\nAnnesinin Babası", "ALİ", "-", "HALİL", "KEZBAN", "ORDU\n01/07/1891", "Ordu/\nAltınordu/\nIŞIKLI MAHALLESİ", "53-23-2", "Bekâr", "Ölüm\n28/09/1915", "E"], "AAABA": ["Annesinin Annesinin\nAnnesinin Babasının\nAnnesi", "KEZBAN", "YILMAZ", "FETTAH", "GÜLSÜM", "ORDU\n01/07/1869", "Ordu/\nAltınordu/\nIŞIKLI MAHALLESİ", "53-23-7", "Dul", "Ölüm\n01/01/1960", "K"], "AABA": ["Annesinin Annesinin\nBabasının Annesi", "ÇAKIR ESMA", "-", "ALİ", "SERVİ", "ORDU\n01/07/1872", "Ordu/\nPerşembe/\nYARLI MAHALLESİ", "41-30-5", "Evli", "Ölüm\n01/09/1924", "K"], "B": ["Babası", "RAMAZAN", "YAVUZ", "SALİH ZEKİ", "NURTEN", "SARAYKÖY\n27/01/1963", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-33", "Evli", "Sağ\n-", "E"], "BBB": ["Babasının Babasının\nBabası", "ALİ", "-", "ÖMER", "GÜLLÜ", "SARAYKÖY\n01/07/1890", "Denizli/\nSarayköy/\nAŞAĞI MAHALLESİ", "1-19-3", "Evli", "Ölüm\n04/04/1934", "E"]}}
var gelen = {"details": {"ABBA": ["Annesinin Babasının\nBabasının Annesi", "FATMA", "KESKİN", "AHMET", "CEVAHİR", "YOMRA\n01/07/1901", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-12", "Evli", "Ölüm\n10/11/1971", "K"], "ABBB": ["Annesinin Babasının\nBabasının Babası", "HURŞUT", "KESKİN", "ABDULLAH", "FATİME", "YOMRA\n01/07/1901", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-7", "Evli", "Ölüm\n17/12/1971", "E"], "AAAABB": ["Annesinin Annesinin\nAnnesinin Annesinin\nBabasının Babası", "İSMAİL", "-", "ALİ", "FATİME", "YOMRA\n01/07/1851", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-136-1", "Evli", "Ölüm\n08/10/1918", "E"], "BB": ["Babasının Babası", "RİZA", "ALTINTAŞ", "MİKDAT", "EMİNE", "MAÇKA\n01/07/1933", "Trabzon/\nMaçka/\nALTINDERE MAHALLESİ", "8-9-1", "Evli", "Ölüm\n01/03/2003", "E"], "ABAB": ["Annesinin Babasının\nAnnesinin Babası", "MEHMET", "ÖZDEMİR", "İSMAİL", "NAİLE", "YOMRA\n01/07/1896", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-123-5", "Evli", "Ölüm\n14/07/1979", "Durumu", "E"], "ABBAB": ["Annesinin Babasının\nBabasının Annesinin\nBabası", "AHMET", "-", "HASAN", "ŞERİFE", "YOMRA\n01/07/1865", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-107-1", "Evli", "Ölüm\n11/03/1921", "E"], "ABBBA": ["Annesinin Babasının\nBabasının Babasının\nAnnesi", "FATİME", "KESKİN", "MEHMET", "GÜLLÜ", "YOMRA\n01/07/1876", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-11", "Evli", "Ölüm\n-", "K"], "ABABB": ["Annesinin Babasının\nAnnesinin Babasının\nBabası", "İSMAİL", "-", "EMİN", "AYŞE", "YOMRA\n01/07/1865", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-123-1", "Evli", "Ölüm\n10/03/1930", "Durumu", "E"], "A": ["Annesi", "AYŞE", "ALTINTAŞ", "AHMET", "FATMA", "YOMRA\n30/01/1975", "Trabzon/\nMaçka/\nALTINDERE MAHALLESİ", "8-9-44", "Evli", "Sağ\n-", "K"], "AAAAB": ["Annesinin Annesinin\nAnnesinin Annesinin\nBabası", "RECEP", "-", "İSMAİL", "KADIN", "YOMRA\n01/07/1874", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-136-2", "Evli", "Ölüm\n-", "E"], "AAABA": ["Annesinin Annesinin\nAnnesinin Babasının\nAnnesi", "HACERE", "ÇELİK", "HELİM", "GÜLLÜ", "YOMRA\n01/07/1880", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-88-7", "Evli", "Ölüm\n14/03/1912", "K"], "ABBAA": ["Annesinin Babasının\nBabasının Annesinin\nAnnesi", "CEVAHİR", "-", "ÖMER", "-", "YOMRA\n01/07/1867", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-107-5", "Evli", "Ölüm\n-", "K"], "AAA": ["Annesinin Annesinin\nAnnesi", "HAVA", "AKYOL", "SABRİ", "HÜRİ", "YOMRA\n12/05/1939", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-98-39", "Dul", "Sağ\n-", "K"], "ABA": ["Annesinin Babasının\nAnnesi", "BESİRE", "KESKİN", "MEHMET", "HATİCE", "YOMRA\n10/03/1924", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-30", "Evli", "Ölüm\n12/12/1984", "K"], "BA": ["Babasının Annesi", "GÜLÜZAR", "ALTINTAŞ", "HÜSEYİN", "GÜLÜZAR", "SÜRMENE\n03/05/1930", "Trabzon/\nMaçka/\nALTINDERE MAHALLESİ", "8-9-2", "Dul", "Ölüm\n09/04/2004", "K"], "AAAB": ["Annesinin Annesinin\nAnnesinin Babası", "SABRİ", "ÇELİK", "AHMET", "HACERE", "YOMRA\n14/03/1911", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-88-8", "Evli", "Ölüm\n27/04/1992", "E"], "AAB": ["Annesinin Annesinin\nBabası", "MUSTAFA", "AKYOL", "KAZİM", "FİKRİYE", "YOMRA\n01/07/1933", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-98-24", "Evli", "Ölüm\n01/06/2009", "E"], "ABAAB": ["Annesinin Babasının\nAnnesinin Annesinin\nBabası", "AHMET", "-", "ALİ", "EMİNE", "YOMRA\n01/07/1864", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-119-1", "Evli", "Ölüm\n18/02/1927", "E"], "ABABA": ["Annesinin Babasının\nAnnesinin Babasının\nAnnesi", "NAİLE", "ÖZDEMİR", "ALİ", "FATİME", "YOMRA\n01/07/1850", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-123-6", "Evli", "Ölüm\n26/11/1934", "K"], "AB": ["Annesinin Babası", "AHMET", "KESKİN", "ABDULLAH", "BESİRE", "YOMRA\n02/05/1955", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-37", "Evli", "Sağ\n-", "E"], "AAAAA": ["Annesinin Annesinin\nAnnesinin Annesinin\nAnnesi", "FATİME", "KURT", "ÖMER", "FATİME", "YOMRA\n01/07/1879", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-136-9", "Evli", "Ölüm\n21/04/1949", "K"], "AAABBA": ["Annesinin Annesinin\nAnnesinin Babasının\nBabasının Annesi", "EMİNE", "ÇELİK", "ÖMER", "GÜLSÜM", "YOMRA\n01/07/1857", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-88-5", "Evli", "Ölüm\n-", "K"], "AA": ["Annesinin Annesi", "FATMA", "KESKİN", "MUSTAFA", "HAVA", "YOMRA\n01/01/1956", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-67", "Evli", "Sağ\n-", "Durumu", "K"], "AABBA": ["Annesinin Annesinin\nBabasının Babasının\nAnnesi", "GÜLLÜ", "AKYOL", "MEHMET", "FATİME", "YOMRA\n01/07/1866", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-98-8", "Evli", "Ölüm\n10/07/1929", "K"], "AABB": ["Annesinin Annesinin\nBabasının Babası", "KAZİM", "AKYOL", "MEHMET", "GÜLLÜ", "YOMRA\n01/07/1896", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-98-4", "Evli", "Ölüm\n18/09/1967", "E"], "B": ["Babası", "YAKUP", "ALTINTAŞ", "RİZA", "GÜLÜZAR", "MAÇKA\n02/06/1969", "Trabzon/\nMaçka/\nALTINDERE MAHALLESİ", "8-9-11", "Evli", "Sağ\n-", "E"], "AAABBB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabasının Babası", "MEHMET", "-", "İSMAİL", "AYŞE", "YOMRA\n01/07/1850", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-88-1", "Evli", "Ölüm\n10/02/1931", "E"], "AAAABA": ["Annesinin Annesinin\nAnnesinin Annesinin\nBabasının Annesi", "KADIN", "KURT", "MEHMET", "-", "YOMRA\n01/07/1851", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-136-6", "Evli", "Ölüm\n31/05/1913", "K"], "ABBBBB": ["Annesinin Babasının\nBabasının Babasının\nBabasının Babası", "MEHMET", "-", "İSMAİL", "EMİNE", "YOMRA\n01/07/1837", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-1", "Evli", "Ölüm\n-", "E"], "ABAA": ["Annesinin Babasının\nAnnesinin Annesi", "HATİCE", "ÖZDEMİR", "AHMET", "GÜLLÜ", "YOMRA\n01/07/1891", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-123-9", "Evli", "Ölüm\n30/11/1961", "K"], "ABBBBA": ["Annesinin Babasının\nBabasının Babasının\nBabasının Annesi", "HAVA", "KESKİN", "SALİH", "-", "YOMRA\n01/07/1844", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-9", "Evli", "Ölüm\n-", "K"], "K": ["Kendisi", "YUNUS EMRE", "ALTINTAŞ", "YAKUP", "AYŞE", "TRABZON\n25/07/1995", "Trabzon/\nMaçka/\nALTINDERE MAHALLESİ", "8-9-51", "Bekâr", "Sağ\n-", "E"], "AAAA": ["Annesinin Annesinin\nAnnesinin Annesi", "HÜRİ", "KURT", "RECEP", "FATİME", "YOMRA\n01/03/1908", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-136-20", "Evli", "Ölüm\n15/01/1994", "K"], "ABB": ["Annesinin Babasının\nBabası", "ABDULLAH", "KESKİN", "HURŞUT", "FATMA", "YOMRA\n06/02/1928", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-15", "Evli", "Ölüm\n21/06/1997", "E"], "ABBBB": ["Annesinin Babasının\nBabasının Babasının\nBabası", "ABDULLAH", "-", "MEHMET", "HAVA", "YOMRA\n01/07/1881", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-91-3", "Evli", "Ölüm\n-", "E"], "AAABB": ["Annesinin Annesinin\nAnnesinin Babasının\nBabası", "AHMET", "-", "MEHMET", "EMİNE", "YOMRA\n01/07/1883", "Trabzon/\nYomra/\nOYMALI MAHALLESİ", "18-88-2", "Evli", "Ölüm\n14/05/1910", "E"]}, "nodeStructure": {"children": [{"children": [{"children": [{"children": [{"children": [{"children": [], "text": {"name": "AAAAA: FATİME KURT"}}, {"children": [{"children": [], "text": {"name": "AAAABA: KADIN KURT"}}, {"children": [], "text": {"name": "AAAABB: İSMAİL -"}}], "text": {"name": "AAAAB: RECEP -"}}], "text": {"name": "AAAA: HÜRİ KURT"}}, {"children": [{"children": [], "text": {"name": "AAABA: HACERE ÇELİK"}}, {"children": [{"children": [], "text": {"name": "AAABBA: EMİNE ÇELİK"}}, {"children": [], "text": {"name": "AAABBB: MEHMET -"}}], "text": {"name": "AAABB: AHMET -"}}], "text": {"name": "AAAB: SABRİ ÇELİK"}}], "text": {"name": "AAA: HAVA AKYOL"}}, {"children": [{"children": [{"children": [], "text": {"name": "AABBA: GÜLLÜ AKYOL"}}], "text": {"name": "AABB: KAZİM AKYOL"}}], "text": {"name": "AAB: MUSTAFA AKYOL"}}], "text": {"name": "AA: FATMA KESKİN"}}, {"children": [{"children": [{"children": [{"children": [], "text": {"name": "ABAAB: AHMET -"}}], "text": {"name": "ABAA: HATİCE ÖZDEMİR"}}, {"children": [{"children": [], "text": {"name": "ABABA: NAİLE ÖZDEMİR"}}, {"children": [], "text": {"name": "ABABB: İSMAİL -"}}], "text": {"name": "ABAB: MEHMET ÖZDEMİR"}}], "text": {"name": "ABA: BESİRE KESKİN"}}, {"children": [{"children": [{"children": [], "text": {"name": "ABBAA: CEVAHİR -"}}, {"children": [], "text": {"name": "ABBAB: AHMET -"}}], "text": {"name": "ABBA: FATMA KESKİN"}}, {"children": [{"children": [], "text": {"name": "ABBBA: FATİME KESKİN"}}, {"children": [{"children": [], "text": {"name": "ABBBBA: HAVA KESKİN"}}, {"children": [], "text": {"name": "ABBBBB: MEHMET -"}}], "text": {"name": "ABBBB: ABDULLAH -"}}], "text": {"name": "ABBB: HURŞUT KESKİN"}}], "text": {"name": "ABB: ABDULLAH KESKİN"}}], "text": {"name": "AB: AHMET KESKİN"}}], "text": {"name": "A: AYŞE ALTINTAŞ"}}, {"children": [{"children": [], "text": {"name": "BA: GÜLÜZAR ALTINTAŞ"}}, {"children": [], "text": {"name": "BB: RİZA ALTINTAŞ"}}], "text": {"name": "B: YAKUP ALTINTAŞ"}}], "text": {"name": "K: YUNUS EMRE ALTINTAŞ"}}};

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