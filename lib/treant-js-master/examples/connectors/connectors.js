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
'nodeStructure': {'children': [{'children': [{'children': [{'children': [{'children': [{'children': [], 'text': {'name': 'AAABA: KEZBAN YILMAZ'}}, {'children': [], 'text': {'name': 'AAABB: HALİL -'}}], 'text': {'name': 'AAAB: ALİ -'}}], 'text': {'name': 'AAA: ŞEKER ŞAHİN'}}, {'children': [{'children': [], 'text': {'name': 'AABA: ÇAKIR ESMA -'}}, {'children': [{'children': [], 'text': {'name': 'AABBA: KEZBAN -'}}], 'text': {'name': 'AABB: KAMİL -'}}], 'text': {'name': 'AAB: MEHMET ŞAHİN'}}], 'text': {'name': 'AA: PERİHAN TRABZON'}}, {'children': [{'children': [{'children': [], 'text': {'name': 'ABAA: SERVİ -'}}, {'children': [], 'text': {'name': 'ABAB: ALİ -'}}], 'text': {'name': 'ABA: HÜSNE TRABZON'}}, {'children': [{'children': [], 'text': {'name': 'ABBA: ESMA TRABZON'}}, {'children': [], 'text': {'name': 'ABBB: MEHMET -'}}], 'text': {'name': 'ABB: MEHMET ESMA'}}], 'text': {'name': 'AB: BAHATTİN HÜSNE'}}], 'text': {'name': 'A: ESMA YAVUZ'}}, {'children': [{'children': [{'children': [], 'text': {'name': 'BAA: MÜNİRE -'}}, {'children': [], 'text': {'name': 'BAB: AHMET GENÇ'}}], 'text': {'name': 'BA: NURTEN YAVUZ'}}, {'children': [{'children': [], 'text': {'name': 'BBA: HATİCE KÜBRA YAVUZ'}}, {'children': [{'children': [], 'text': {'name': 'BBBB: ÖMER -'}}], 'text': {'name': 'BBB: ALİ -'}}], 'text': {'name': 'BB: SALİH ZEKİ YAVUZ'}}], 'text': {'name': 'B: RAMAZAN YAVUZ'}}], 'text': {'name': 'K: OĞUZCAN YAVUZ'}}}
