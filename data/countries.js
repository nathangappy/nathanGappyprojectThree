// Array of flags and country names
let countries = [
  {
    country: 'afghanistan',
    flag: './img/afghanistan.png'
  },
  {
    country: 'albania',
    flag: './img/albania.png'
  },
  {
    country: 'algeria',
    flag: './img/algeria.png'
  },
  {
    country: 'andorra',
    flag: './img/andorra.png'
  },
  {
    country: 'angola',
    flag: './img/angola.png'
  },
  {
    country: 'antigua and barbuda',
    flag: './img/antiguaAndBarbuda.png'
  },
  {
    country: 'argentina',
    flag: './img/argentina.png'
  },
  {
    country: 'armenia',
    flag: './img/armenia.png'
  },
  {
    country: 'australia',
    flag: './img/australia.png'
  },
  {
    country: 'austria',
    flag: './img/austria.png'
  },
  {
    country: 'azerbaijan',
    flag: './img/azerbaijan.png'
  },
  {
    country: 'bahamas',
    flag: './img/bahamas.png'
  },
  {
    country: 'bahrain',
    flag: './img/bahrain.png'
  },
  {
    country: 'bangladesh',
    flag: './img/bangladesh.png'
  },
  {
    country: 'barbados',
    flag: './img/barbados.png'
  },
  {
    country: 'belarus',
    flag: './img/belarus.png'
  },
  {
    country: 'belgium',
    flag: './img/belgium.png'
  },
  {
    country: 'belize',
    flag: './img/belize.png'
  },
  {
    country: 'benin',
    flag: './img/benin.png'
  },
  {
    country: 'bhutan',
    flag: './img/bhutan.png'
  },
  {
    country: 'bolivia',
    flag: './img/bolivia.png'
  },
  {
    country: 'bosnia and herzegovina',
    flag: './img/bosniaAndHerzegovina.png'
  },
  {
    country: 'botswana',
    flag: './img/botswana.png'
  },
  {
    country: 'brazil',
    flag: './img/brazil.png'
  },
  {
    country: 'brunei',
    flag: './img/brunei.png'
  },
  {
    country: 'bulgaria',
    flag: './img/bulgaria.png'
  },
  {
    country: 'burkina faso',
    flag: './img/burkinaFaso.png'
  },
  {
    country: 'burundi',
    flag: './img/burundi.png'
  },
  {
    country: 'cambodia',
    flag: './img/cambodia.png'
  },
  {
    country: 'cameroon',
    flag: './img/cameroon.png'
  },
  {
    country: 'canada',
    flag: './img/canada.png'
  },
  {
    country: 'cape verde',
    flag: './img/capeVerde.png'
  },
  {
    country: 'central african republic',
    flag: './img/centralAfricanRepublic.png'
  },
  {
    country: 'chad',
    flag: './img/chad.png'
  },
  {
    country: 'chile',
    flag: './img/chile.png'
  },
  {
    country: 'china',
    flag: './img/china.png'
  },
  {
    country: 'colombia',
    flag: './img/colombia.png'
  },
  {
    country: 'comoros',
    flag: './img/comoros.png'
  },
  {
    country: 'costa rica',
    flag: './img/costaRica'
  },
  {
    country: 'cote d\'ivoire',
    flag: './img/coteD\'ivoire.png'
  },
  {
    country: 'croatia',
    flag: './img/croatia.png'
  },
  {
    country: 'cuba',
    flag: './img/cuba.png'
  },
  {
    country: 'cyprus',
    flag: './img/cyprus.png'
  },
  {
    country: 'czech republic',
    flag: './img/czechRepublic.png'
  },
  {
    country: 'democratic republic of the congo',
    flag: './img/democraticRepublicOfTheCongo.png'
  },
  {
    country: 'denmark',
    flag: './img/denmark.png'
  },
  {
    country: 'djibouti',
    flag: './img/djibouti.png'
  },
  {
    country: 'dominica',
    flag: './img/dominica.png'
  },
  {
    country: 'dominician republic',
    flag: './img/dominicanRepublic.png'
  },
  {
    country: 'east timor',
    flag: './img/eastTimor.png'
  },
  {
    country: 'ecuador',
    flag: './img/ecuador.png'
  },
  {
    country: 'egypt',
    flag: './img/egypt.png'
  },
  {
    country: 'el salvador',
    flag: './img/elSalvador.png'
  },
  {
    country: 'equatorial guinea',
    flag: './img/equatorialGuinea.png'
  },
  {
    country: 'eritrea',
    flag: './img/eritrea.png'
  },
  {
    country: 'estonia',
    flag: './img/estonia.png'
  },
  {
    country: 'ethiopia',
    flag: './img/ethiopia.png'
  },
  {
    country: 'figi',
    flag: './img/figi.png'
  },
  {
    country: 'finland',
    flag: './img/finland.png'
  },
  {
    country: 'france',
    flag: './img/france.png'
  },
  {
    country: 'gabon',
    flag: './img/gabon.png'
  },
  {
    country: 'gambia',
    flag: './img/gambia.png'
  },
  {
    country: 'georgia',
    flag: './img/georgia.png'
  },
  {
    country: 'germany',
    flag: './img/germany.png'
  },
  {
    country: 'ghana',
    flag: './img/ghana.png'
  },
  {
    country: 'greece',
    flag: './img/greece.png'
  },
  {
    country: 'grenada',
    flag: './img/grenada.png'
  },
  {
    country: 'guatemala',
    flag: './img/guatemala.png'
  },
  {
    country: 'guinea',
    flag: './img/guinea.png'
  },
  {
    country: 'guinea bissau',
    flag: './img/guineaBissau.png'
  },
  {
    country: 'guyana',
    flag: './img/guyana.png'
  },
  {
    country: 'haiti',
    flag: './img/haiti.png'
  },
  {
    country: 'honduras',
    flag: './img/honduras.png'
  },
  {
    country: 'hungary',
    flag: './img/hungary.png'
  },
  {
    country: 'iceland',
    flag: './img/iceland.png'
  },
  {
    country: 'india',
    flag: './img/india.png'
  },
  {
    country: 'indonesia',
    flag: './img/indonesia.png'
  },
  {
    country: 'iran',
    flag: './img/iran.png'
  },
  {
    country: 'iraq',
    flag: './img/iraq.png'
  },
  {
    country: 'ireland',
    flag: './img/ireland.png'
  },
  {
    country: 'israel',
    flag: './img/israel.png'
  },
  {
    country: 'italy',
    flag: './img/italy.png'
  },
  {
    country: 'jamaica',
    flag: './img/jamaica.png'
  },
  {
    country: 'japan',
    flag: './img/japan.png'
  },
  {
    country: 'jordan',
    flag: './img/jordan.png'
  },
  {
    country: 'kazakhstan',
    flag: './img/kazakhstan.png'
  },
  {
    country: 'kenya',
    flag: './img/kenya.png'
  },
  {
    country: 'kiribati',
    flag: './img/kiribati.png'
  },
  {
    country: 'kosovo',
    flag: './img/kosovo.png'
  },
  {
    country: 'kuwait',
    flag: './img/kuwait.png'
  },
  {
    country: 'kyrgyzstan',
    flag: './img/kyrgyzstan.png'
  },
  {
    country: 'laos',
    flag: './img/laos.png'
  },
  {
    country: 'latvia',
    flag: './img/latvia.png'
  },
  {
    country: 'lebanon',
    flag: './img/lebanon.png'
  },
  {
    country: 'lesotho',
    flag: './img/lesotho.png'
  },
  {
    country: 'liberia',
    flag: './img/liberia.png'
  },
  {
    country: 'libya',
    flag: './img/libya.png'
  },
  {
    country: 'liechtenstein',
    flag: './img/liechtenstein.png'
  },
  {
    country: 'lithuania',
    flag: './img/lithuania.png'
  },
  {
    country: 'luxembourg',
    flag: './img/luxembourg.png'
  },
  {
    country: 'macedonia',
    flag: './img/macedonia.png'
  },
  {
    country: 'madagascar',
    flag: './img/madagascar.png'
  },
  {
    country: 'malawi',
    flag: './img/malawi.png'
  },
  {
    country: 'malaysia',
    flag: './img/malaysia.png'
  },
  {
    country: 'maldives',
    flag: './img/maldives.png'
  },
  {
    country: 'mali',
    flag: './img/mali.png'
  },
  {
    country: 'malta',
    flag: './img/malta.png'
  },
  {
    country: 'marshall islands',
    flag: './img/marshallIslands.png'
  },
  {
    country: 'mauritania',
    flag: './img/mauritania.png'
  },
  {
    country: 'mauritius',
    flag: './img/mauritius.png'
  },
  {
    country: 'mexico',
    flag: './img/mexico.png'
  },
  {
    country: 'micronesia',
    flag: './img/micronesia.png'
  },
  {
    country: 'moldova',
    flag: './img/moldova.png'
  },
  {
    country: 'monaco',
    flag: './img/monaco.png'
  },
  {
    country: 'mongolia',
    flag: './img/mongolia.png'
  },
  {
    country: 'montenegro',
    flag: './img/montenegro.png'
  },
  {
    country: 'morocco',
    flag: './img/morocco.png'
  },
  {
    country: 'mozambique',
    flag: './img/mozambique.png'
  },
  {
    country: 'myanmar',
    flag: './img/myanmar.png'
  },
  {
    country: 'namibia',
    flag: './img/namibia.png'
  },
  {
    country: 'nauru',
    flag: './img/nauru.png'
  },
  {
    country: 'nepal',
    flag: './img/nepal.png'
  },
  {
    country: 'netherlands',
    flag: './img/netherlands.png'
  },
  {
    country: 'new zealand',
    flag: './img/newZealand.png'
  },
  {
    country: 'nicaragua',
    flag: './img/nicaragua.png'
  },
  {
    country: 'niger',
    flag: './img/niger.png'
  },
  {
    country: 'nigeria',
    flag: './img/nigeria.png'
  },
  {
    country: 'niue',
    flag: './img/niue.png'
  },
  {
    country: 'north korea',
    flag: './img/northKorea.png'
  },
  {
    country: 'norway',
    flag: './img/norway.png'
  },
  {
    country: 'oman',
    flag: './img/oman.png'
  },
  {
    country: 'pakistan',
    flag: './img/pakistan.png'
  },
  {
    country: 'palau',
    flag: './img/palau.png'
  },
  {
    country: 'panama',
    flag: './img/panama.png'
  },
  {
    country: 'papua new guinea',
    flag: './img/papuaNewGuinea.png'
  },
  {
    country: 'paraguay',
    flag: './img/paraguay.png'
  },
  {
    country: 'peru',
    flag: './img/peru.png'
  },
  {
    country: 'philippines',
    flag: './img/philippines.png'
  },
  {
    country: 'poland',
    flag: './img/poland.png'
  },
  {
    country: 'portugal',
    flag: './img/portugal.png'
  },
  {
    country: 'qatar',
    flag: './img/qatar.png'
  },
  {
    country: 'republic of the congo',
    flag: './img/republicOfTheCongo.png'
  },
  {
    country: 'romania',
    flag: './img/romania.png'
  },
  {
    country: 'russia',
    flag: './img/russia.png'
  },
  {
    country: 'rwanda',
    flag: './img/rwanda.png'
  },
  {
    country: 'samoa',
    flag: './img/samoa.png'
  },
  {
    country: 'san marino',
    flag: './img/sanMarino.png'
  },
  {
    country: 'sao tome and principe',
    flag: './img/saoTomeAndPrincipe.png'
  },
  {
    country: 'saudi arabia',
    flag: './img/saudiArabia.png'
  },
  {
    country: 'senegal',
    flag: './img/senegal.png'
  },
  {
    country: 'serbia',
    flag: './img/serbia.png'
  },
  {
    country: 'seychelles',
    flag: './img/seychelles.png'
  },
  {
    country: 'sierra leone',
    flag: './img/sierraLeone.png'
  },
  {
    country: 'singapore',
    flag: './img/singapore.png'
  },
  {
    country: 'slovakia',
    flag: './img/slovakia.png'
  },
  {
    country: 'slovenia',
    flag: './img/slovenia.png'
  },
  {
    country: 'solomon islands',
    flag: './img/solomonIslands.png'
  },
  {
    country: 'somalia',
    flag: './img/somalia.png'
  },
  {
    country: 'south africa',
    flag: './img/southAfrica.png'
  },
  {
    country: 'south korea',
    flag: './img/southKorea.png'
  },
  {
    country: 'south sudan',
    flag: './img/southSudan.png'
  },
  {
    country: 'spain',
    flag: './img/spain.png'
  },
  {
    country: 'sri lanka',
    flag: './img/sriLanka.png'
  },
  {
    country: 'st. kitts and nevis',
    flag: './img/stKittsAndNevis.png'
  },
  {
    country: 'st. lucia',
    flag: './img/stLucia.png'
  },
  {
    country: 'st. vincent and the grenadines',
    flag: './img/stVincentAndTheGrenadines.png'
  },
  {
    country: 'sudan',
    flag: './img/sudan.png'
  },
  {
    country: 'suriname',
    flag: './img/suriname.png'
  },
  {
    country: 'swaziland',
    flag: './img/swaziland.png'
  },
  {
    country: 'sweden',
    flag: './img/sweden.png'
  },
  {
    country: 'switzerland',
    flag: './img/switzerland.png'
  },
  {
    country: 'syria',
    flag: './img/syria.png'
  },
  {
    country: 'taiwan',
    flag: './img/taiwan.png'
  },
  {
    country: 'tajikistan',
    flag: './img/tajikistan.png'
  },
  {
    country: 'tanzania',
    flag: './img/tanzania.png'
  },
  {
    country: 'thailand',
    flag: './img/thailand.png'
  },
  {
    country: 'togo',
    flag: './img/togo.png'
  },
  {
    country: 'tonga',
    flag: './img/tonga.png'
  },
  {
    country: 'trinidad and tobago',
    flag: './img/trinidadAndTobago.png'
  },
  {
    country: 'tunisia',
    flag: './img/tunisia.png'
  },
  {
    country: 'turkey',
    flag: './img/turkey.png'
  },
  {
    country: 'turkmenistan',
    flag: './img/turkmenistan.png'
  },
  {
    country: 'tuvalu',
    flag: './img/tuvalu.png'
  },
  {
    country: 'uganda',
    flag: './img/uganda.png'
  },
  {
    country: 'ukraine',
    flag: './img/ukraine.png'
  },
  {
    country: 'united arab emirates',
    flag: './img/unitedArabEmirates.png'
  },
  {
    country: 'united kingdom',
    flag: './img/unitedKingdom.png'
  },
  {
    country: 'united states of america',
    flag: './img/unitedStatesOfAmerica.png'
  },
  {
    country: 'uruguay',
    flag: './img/uruguay.png'
  },
  {
    country: 'uzbekistan',
    flag: './img/uzbekistan.png'
  },
  {
    country: 'vatican city',
    flag: './img/vaticanCity.png'
  },
  {
    country: 'venezuela',
    flag: './img/venezuela.png'
  },
  {
    country: 'vietnam',
    flag: './img/vietnam.png'
  },
  {
    country: 'yemen',
    flag: './img/yemen.png'
  },
  {
    country: 'zambia',
    flag: './img/zambia.png'
  },
  {
    country: 'zimbabwe',
    flag: './img/zimbabwe.png'
  },
] 
