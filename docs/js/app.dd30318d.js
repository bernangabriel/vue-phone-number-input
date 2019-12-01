(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"123f":function(e,t,n){},"3beb":function(e,t,n){},"4a12":function(e,t,n){"use strict";var r=n("740c"),a=n.n(r);a.a},"53a6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{dark:e.dark},attrs:{id:"app"}},[n("h1",{staticClass:"text-center my-3"},[e._v("\n    VuePhoneNumberInput\n  ")]),n("div",{staticClass:"container mb-3 flex flex-direction-column"},[e._m(0),n("div",{staticClass:"flex align-center justify-content-center"},[n("button",{staticClass:"btn btn-sm mr-2",on:{click:function(t){e.dark=!e.dark}}},[e._v("\n        Toggle Dark Mode\n      ")]),n("button",{staticClass:"btn btn-success btn-sm mr-2",on:{click:function(t){e.hasLoaderActive=!e.hasLoaderActive}}},[e._v("\n        Toggle loader\n      ")]),n("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){e.hasErrorActive=!e.hasErrorActive}}},[e._v("\n        Toggle error\n      ")])])]),n("div",{staticClass:"container mb-3"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"component-container"},[n("h3",{staticClass:"mb-2"},[e._v("\n          Basic usage\n        ")]),n("div",{staticClass:"component mb-2"},[n("VuePhoneNumberInput",{staticClass:"mb-2",attrs:{id:"phoneNumber1",color:"dodgerblue",dark:e.dark,disabled:e.disabled,"ignored-countries":e.countriesIgnored,"preferred-countries":e.countriesList,loader:e.hasLoaderActive,"default-country-code":e.defaultCountry,error:e.hasErrorActive,clearable:""},on:{update:e.onUpdate},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}}),n("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber)+"\n        ")],1),n("div",{staticClass:"component"},[n("h4",{staticClass:"mb-2"},[e._v('\n            Datas returned with "update" event\n          ')]),n("div",{staticClass:"flex flex-wrap"},[n("table",{staticClass:"mr-2"},[e._m(1),e._l(e.resultsTable,(function(t){return n("tr",{key:t,staticClass:"w-100"},[n("td",{attrs:{align:"left"}},[e._v("\n                  "+e._s(t)+"\n                ")]),n("td",[e._v(e._s(e.results[t]))])])}))],2),n("div",{staticClass:"flex flex-direction-column flex-1"},[n("b",[e._v("Payload:")]),e._v("\n              "+e._s(e.results)+"\n            ")])])])]),n("div",{staticClass:"component-container"},[n("h3",{staticClass:"mb-2"},[e._v("\n          With translations (FR) - No flags - Dark - No Use Browser Locale\n        ")]),n("div",{staticClass:"component mb-2"},[n("VuePhoneNumberInput",{staticClass:"mb-2",attrs:{id:"phoneNumber2",translations:e.translations,dark:"","no-flags":"",required:"","no-use-browser-locale":"",loader:e.hasLoaderActive,error:e.hasErrorActive,clearable:"",color:"tomato","dark-color":"#21222e","border-radius":8,"show-code-on-list":""},on:{update:e.onUpdate2},model:{value:e.phoneNumber2,callback:function(t){e.phoneNumber2=t},expression:"phoneNumber2"}}),n("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber2)+"\n        ")],1),n("div",{staticClass:"component"},[n("h4",{staticClass:"mb-2"},[e._v('\n            Datas returned with "update" event\n          ')]),n("div",{staticClass:"flex flex-wrap"},[n("table",{staticClass:"mr-2"},[e._m(2),e._l(e.resultsTable2,(function(t){return n("tr",{key:t,staticClass:"w-100"},[n("td",{attrs:{align:"left"}},[e._v("\n                  "+e._s(t)+"\n                ")]),n("td",[e._v(e._s(e.results2[t]))])])}))],2),n("div",{staticClass:"flex flex-direction-column  flex-1"},[n("b",[e._v("Payload:")]),e._v("\n              "+e._s(e.results2)+"\n            ")])])])])]),n("div",{staticClass:"component-container"},[n("h3",{staticClass:"mb-2"},[e._v("\n        No country chooser (use `default-country-code` to set the country)\n      ")]),n("div",{staticClass:"component mb-2"},[n("VuePhoneNumberInput",{staticClass:"mb-2",attrs:{id:"phoneNumber3",loader:e.hasLoaderActive,error:e.hasErrorActive,dark:e.dark,"default-country-code":e.defaultCountry,"no-country-selector":""},on:{update:e.onUpdate3},model:{value:e.phoneNumber3,callback:function(t){e.phoneNumber3=t},expression:"phoneNumber3"}}),n("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber2)+"\n        "),n("br"),n("b",[e._v("Current country code")]),e._v(" : "+e._s(e.defaultCountry)+"\n      ")],1),n("div",{staticClass:"component"},[n("h4",{staticClass:"mb-2"},[e._v('\n          Datas returned with "update" event\n        ')]),n("div",{staticClass:"flex flex-wrap"},[n("table",{staticClass:"mr-2"},[e._m(3),e._l(e.resultsTable3,(function(t){return n("tr",{key:t,staticClass:"w-100"},[n("td",{attrs:{align:"left"}},[e._v("\n                "+e._s(t)+"\n              ")]),n("td",[e._v(e._s(e.results3[t]))])])}))],2),n("div",{staticClass:"flex flex-direction-column flex-1"},[n("b",[e._v("Payload:")]),e._v("\n            "+e._s(e.results3)+"\n          ")])])])])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex align-center justify-content-center mb-3"},[n("a",{staticClass:"btn btn-dark mr-2 btn-sm",attrs:{target:"_blank",href:"https://github.com/LouisMazel/vue-phone-number-input"}},[e._v("\n        Github\n      ")]),n("a",{staticClass:"btn btn-danger btn-sm",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-phone-number-input"}},[e._v("\n        NPM\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Key")]),n("th",[e._v("Value")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Key")]),n("th",[e._v("Value")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Key")]),n("th",[e._v("Value")])])}],i=(n("ac6a"),n("456d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-phone-number-input flex",class:[{dark:e.dark},e.size],style:[e.cssTheme],attrs:{id:e.uniqueId}},[e.noCountrySelector?e._e():n("div",{staticClass:"select-country-container"},[n("CountrySelector",{ref:"CountrySelector",staticClass:"input-country-selector",attrs:{id:e.id+"_country_selector",items:e.codesCountries,"countries-height":e.countriesHeight,error:e.shouldChooseCountry,hint:e.shouldChooseCountry?e.t.countrySelectorError:null,dark:e.dark,disabled:e.disabled,valid:e.isValid&&!e.noValidatorState,"preferred-countries":e.preferredCountries,"only-countries":e.onlyCountries,"ignored-countries":e.ignoredCountries,label:e.t.countrySelectorLabel,"no-flags":e.noFlags,"show-code-on-list":e.showCodeOnList,size:e.size},model:{value:e.countryCode,callback:function(t){e.countryCode=t},expression:"countryCode"}},[e._t("arrow",null,{slot:"arrow"})],2)],1),n("div",{staticClass:"flex-1"},[n("InputTel",e._b({ref:"PhoneNumberInput",staticClass:"input-phone-number",attrs:{id:e.id+"_phone_number",label:e.t.phoneNumberLabel,hint:e.hintValue,dark:e.dark,disabled:e.disabled,size:e.size,error:e.error,valid:e.isValid&&!e.noValidatorState,required:e.required,"no-country-selector":e.noCountrySelector},on:{keydown:function(t){e.lastKeyPressed=t.keyCode},focus:function(t){return e.$emit("phone-number-focused")},blur:function(t){return e.$emit("phone-number-blur")}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}},"InputTel",e.$attrs,!1))],1)])}),s=[],u=(n("8e6e"),n("6b54"),n("96cf"),n("3b8d")),l=n("bd86"),c=(n("c5f6"),n("6762"),n("2fdb"),[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]]),d=c.map((function(e){return e[1].toUpperCase()})),p=c.map((function(e){return{name:e[0],iso2:e[1].toUpperCase(),dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null}})),h=n("d391"),f=n("3e84"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"parent",staticClass:"input-tel",class:[{"is-focused":e.isFocus,"is-valid":e.valid,"has-value":e.value,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"has-hint":e.hint},e.size],on:{click:e.focusInput}},["checkbox"===e.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"InputTel",staticClass:"input-tel__input",class:{"no-country-selector":e.noCountrySelector},attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue)?e._i(e.inputValue,null)>-1:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){return e.$emit("click")},change:function(t){var n=e.inputValue,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.inputValue=n.concat([o])):i>-1&&(e.inputValue=n.slice(0,i).concat(n.slice(i+1)))}else e.inputValue=a}}},"input",e.$attrs,!1)):"radio"===e.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"InputTel",staticClass:"input-tel__input",class:{"no-country-selector":e.noCountrySelector},attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"radio"},domProps:{checked:e._q(e.inputValue,null)},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){return e.$emit("click")},change:function(t){e.inputValue=null}}},"input",e.$attrs,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"InputTel",staticClass:"input-tel__input",class:{"no-country-selector":e.noCountrySelector},attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:e.type},domProps:{value:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){return e.$emit("click")},input:function(t){t.target.composing||(e.inputValue=t.target.value)}}},"input",e.$attrs,!1)),n("label",{ref:"label",staticClass:"input-tel__label",class:e.error?"text-danger":null,attrs:{for:e.id},on:{click:e.focusInput}},[e._v("\n    "+e._s(e.hintValue||e.labelValue)+"\n  ")]),e.clearable&&e.inputValue?n("button",{staticClass:"input-tel__clear",attrs:{title:"clear",type:"button",tabindex:"-1"},on:{click:e.clear}},[n("span",{staticClass:"input-tel__clear__effect"}),n("span",[e._v("\n      ✕\n    ")])]):e._e(),e.loader?n("div",{staticClass:"input-tel__loader"},[n("div",{staticClass:"input-tel__loader__progress-bar"})]):e._e()])},b=[],y={name:"InputTel",props:{value:{type:[String,Number],default:null},label:{type:String,default:"Enter text"},hint:{type:String,default:null},error:{type:Boolean,default:Boolean},disabled:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},id:{type:String,default:"InputTel"},size:{type:String,default:null},type:{type:String,default:"tel"},readonly:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loader:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},noCountrySelector:{type:Boolean,default:!1}},data:function(){return{isFocus:!1}},computed:{inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},labelValue:function(){var e=this.label;return this.required&&e?e+=" *":e},hintValue:function(){var e=this.hint;return this.required&&e?e+=" *":e}},methods:{focusInput:function(){this.$refs.InputTel.focus()},onFocus:function(){this.$emit("focus"),this.isFocus=!0},onBlur:function(){this.$emit("blur"),this.isFocus=!1},clear:function(){this.$emit("input",null),this.$emit("clear")},keyUp:function(e){this.$emit("keyup",e)},keyDown:function(e){this.$emit("keydown",e)}}},v=y,g=(n("edc0"),n("2877")),C=Object(g["a"])(v,m,b,!1,null,"f879bcdc",null),_=C.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeList,expression:"closeList"}],ref:"parent",staticClass:"country-selector",class:[{"is-focused":e.isFocus,"has-list-open":e.hasListOpen,"has-value":e.value,"has-hint":e.hint,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"no-flags":e.noFlags,"is-valid":e.valid},e.size],on:{click:function(t){return t.preventDefault(),e.toggleList(t)},keydown:e.keyboardNav}},[e.value&&!e.noFlags?n("div",{staticClass:"country-selector__country-flag"},[n("div",{class:"iti-flag-small iti-flag "+e.value.toLowerCase()})]):e._e(),n("input",{ref:"CountrySelector",staticClass:"country-selector__input",attrs:{id:e.id,placeholder:e.label,disabled:e.disabled,readonly:""},domProps:{value:e.callingCode},on:{focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1}}}),n("div",{staticClass:"country-selector__toggle"},[e._t("arrow",[n("svg",{staticClass:"country-selector__toggle__arrow",attrs:{mlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{staticClass:"arrow",attrs:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}),n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}})])])],2),n("label",{ref:"label",staticClass:"country-selector__label",class:e.error?"text-danger":null,attrs:{for:e.id}},[e._v("\n    "+e._s(e.hint||e.label)+"\n  ")]),n("Transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.hasListOpen,expression:"hasListOpen"}],ref:"countriesList",staticClass:"country-selector__list",class:{"has-calling-code":e.showCodeOnList}},e._l(e.countriesSorted,(function(t){return n("div",{key:t.code,staticClass:"flex align-center country-selector__list__item",class:[{selected:e.value===t.iso2},{"keyboard-selected":e.value!==t.iso2&&e.tmpValue===t.iso2}],style:[e.itemHeight],on:{click:function(n){return n.stopPropagation(),e.updateValue(t.iso2)}}},[e.noFlags?e._e():n("div",{staticClass:"country-selector__list__item__flag-container"},[n("div",{class:"iti-flag-small iti-flag "+t.iso2.toLowerCase()})]),e.showCodeOnList?n("span",{staticClass:"country-selector__list__item__calling-code flex-fixed"},[e._v("+"+e._s(t.dialCode))]):e._e(),n("div",{staticClass:"dots-text"},[e._v("\n          "+e._s(t.name)+"\n        ")])])})),0)])],1)},w=[],S=(n("7f7f"),n("f559"),n("20d6"),n("75fc")),N=(n("7514"),n("2103")),x={name:"CountrySelector",directives:{clickOutside:N["directive"]},props:{countriesHeight:{type:Number,default:30},value:{type:[String,Object],default:null},label:{type:String,default:"Choose country"},hint:{type:String,default:null},size:{type:String,default:null},error:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},id:{type:String,default:"CountrySelector"},preferredCountries:{type:Array,default:null},onlyCountries:{type:Array,default:null},items:{type:Array,required:!0},ignoredCountries:{type:Array,default:null},noFlags:{type:Boolean,default:!1},showCodeOnList:{type:Boolean,default:!1}},data:function(){return{isFocus:!1,hasListOpen:!1,selectedIndex:null,tmpValue:this.value,query:""}},computed:{itemHeight:function(){return{height:"".concat(this.countriesHeight,"px")}},countriesList:function(){var e=this;return this.items.filter((function(t){return!e.ignoredCountries.includes(t.iso2)}))},countriesFiltered:function(){var e=this,t=this.onlyCountries||this.preferredCountries;return t.map((function(t){return e.countriesList.find((function(e){return e.iso2.includes(t)}))}))},otherCountries:function(){var e=this;return this.countriesList.filter((function(t){return!e.preferredCountries.includes(t.iso2)}))},countriesSorted:function(){return this.preferredCountries?[].concat(Object(S["a"])(this.countriesFiltered),Object(S["a"])(this.otherCountries)):this.onlyCountries?this.countriesFiltered:this.countriesList},selectedCountryIndex:function(){var e=this;return this.value?this.countriesSorted.findIndex((function(t){return t.iso2===e.value})):null},tmpValueIndex:function(){var e=this;return this.countriesSorted.findIndex((function(t){return t.iso2===e.tmpValue}))},callingCode:function(){return this.value?"+".concat(Object(f["b"])(this.value)):null}},mounted:function(){this.$parent.$on("phone-number-focused",this.closeList)},methods:{toggleList:function(){this.hasListOpen?this.closeList():this.openList()},openList:function(){this.disabled||(this.$emit("focus"),this.isFocus=!0,this.value&&this.scrollToSelectedOnFocus(this.selectedCountryIndex),this.hasListOpen=!0,this.$emit("focus"),this.value&&this.hasListOpen&&this.scrollToSelectedOnFocus(this.selectedCountryIndex))},closeList:function(){this.hasListOpen&&(this.isFocus=!1,this.hasListOpen=!1,this.$emit("blur"))},updateValue:function(e){this.closeList(),this.tmpValue=e,this.$emit("input",e)},scrollToSelectedOnFocus:function(e){var t=this;this.$nextTick((function(){t.$refs.countriesList.scrollTop=e*t.countriesHeight-3*t.countriesHeight}))},keyboardNav:function(e){var t=this,n=e.keyCode;if(40===n||38===n){e.view&&e.view.event&&e.view.event.preventDefault(),this.hasListOpen||this.openList();var r=40===n?this.tmpValueIndex+1:this.tmpValueIndex-1;(-1===r||r>=this.countriesSorted.length)&&(r=-1===r?this.countriesSorted.length-1:0),this.tmpValue=this.countriesSorted[r].iso2,this.scrollToSelectedOnFocus(r)}else if(13===n)this.hasListOpen?this.updateValue(this.tmpValue):this.openList();else if(27===n)this.closeList();else{clearTimeout(this.queryTimer),this.queryTimer=setTimeout((function(){t.query=""}),1e3);var a=String.fromCharCode(n);if(8===n&&""!==this.query)this.query=this.query.substring(0,this.query.length-1);else if(/[a-zA-Z-e ]/.test(a)){this.query+=e.key;var o=this.preferredCountries?this.countriesSorted.slice(this.preferredCountries.length):this.countriesSorted,i=o.findIndex((function(e){return t.tmpValue=e.iso2,e.name.toLowerCase().startsWith(t.query)}));-1!==i&&this.scrollToSelectedOnFocus(i+(this.preferredCountries?this.preferredCountries.length:0))}}}}},L=x,O=(n("4a12"),Object(g["a"])(L,k,w,!1,null,"84c3f174",null)),V=O.exports,T={countrySelectorLabel:"Country code",countrySelectorError:"Choose country",phoneNumberLabel:"Phone number",example:"Example:"},j=n("be30"),I=n("4883"),B=function(e){var t=e.color,n=e.lightColor,r=e.darkColor,a=e.validColor,o=e.borderRadius,i=e.errorColor;return{"--phone-number-primary-color":t,"--phone-number-second-color":"#747474","--phone-number-second-color-dark":"rgba(255, 255, 255, 0.7)","--phone-number-third-color":"#CCC","--phone-number-third-color-dark":"rgba(255, 255, 255, 0.7)","--phone-number-bg-color":n,"--phone-number-bg-color-dark":r,"--phone-number-error-color":i,"--phone-number-valid-color":a,"--phone-number-hover-color":Object(I["ShadeColor"])(n,-8),"--phone-number-hover-color-dark":Object(I["ShadeColor"])(r,50),"--phone-number-muted-color":"#747474","--phone-number-muted-color-dark":"rgba(255, 255, 255, 0.3)","--phone-number-primary-color-transparency":Object(I["isColorName"])(t)?Object(I["HexToRgba"])(Object(I["colorNameToHex"])(t),.7):Object(I["HexToRgba"])(t,.7),"--phone-number-error-color-transparency":Object(I["isColorName"])(i)?Object(I["HexToRgba"])(Object(I["colorNameToHex"])(i),.7):Object(I["HexToRgba"])(i,.7),"--phone-number-valid-color-transparency":Object(I["isColorName"])(a)?Object(I["HexToRgba"])(Object(I["colorNameToHex"])(a),.7):Object(I["HexToRgba"])(a,.7),"--phone-number-border-radius":"".concat(o,"px")}};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){if(!window)return null;var e=window.navigator.userLanguage||window.navigator.language,t=e?e.substr(3,4).toUpperCase():null;return""===t&&(t=e.substr(0,2).toUpperCase()),t},M=function(e){return d.includes(e)},z={name:"VuePhoneNumberInput",components:{InputTel:_,CountrySelector:V},props:{value:{type:String,default:null},id:{type:String,default:"VuePhoneNumberInput"},color:{type:String,default:"dodgerblue"},validColor:{type:String,default:"yellowgreen"},errorColor:{type:String,default:"orangered"},dark:{type:Boolean,default:!1},darkColor:{type:String,default:"#424242"},disabled:{type:Boolean,default:!1},defaultCountryCode:{type:String,default:null},size:{type:String,default:null},preferredCountries:{type:Array,default:null},onlyCountries:{type:Array,default:null},ignoredCountries:{type:Array,default:Array},translations:{type:Object,default:null},noValidatorState:{type:Boolean,default:!1},noFlags:{type:Boolean,default:!1},error:{type:Boolean,default:!1},noExample:{type:Boolean,default:!1},required:{type:Boolean,default:!1},countriesHeight:{type:Number,default:30},noUseBrowserLocale:{type:Boolean,default:!1},fetchCountry:{type:Boolean,default:!1},noCountrySelector:{type:Boolean,default:!1},showCodeOnList:{type:Boolean,default:!1},borderRadius:{type:Number,default:4}},data:function(){return{results:{},inputFocused:!1,userLocale:this.defaultCountryCode,lastKeyPressed:null}},computed:{uniqueId:function(){return"".concat(this.id,"-").concat(this._uid)},t:function(){return F({},T,{},this.translations)},codesCountries:function(){return p},countryCode:{get:function(){return this.results.countryCode||this.userLocale},set:function(e){this.emitValues({countryCode:e,phoneNumber:this.phoneNumber}),this.inputFocused&&this.$refs.PhoneNumberInput.$el.querySelector("input").focus(),this.inputFocused=!0}},phoneNumber:{get:function(){return this.value},set:function(e){this.emitValues({countryCode:this.countryCode,phoneNumber:e})}},shouldChooseCountry:function(){return!this.countryCode&&!!this.phoneNumber},phoneFormatted:function(){return this.results.formatInternational},isValid:function(){return this.results.isValid},phoneNumberExample:function(){var e=this.countryCode?Object(f["c"])(this.countryCode,h):null;return e?e.formatNational():null},hasEmptyPhone:function(){return""===this.phoneNumber||null===this.phoneNumber},hintValue:function(){return this.noExample||!this.phoneNumberExample?null:this.hasEmptyPhone||this.isValid?null:"".concat(this.t.example," ").concat(this.phoneNumberExample)},cssTheme:function(){var e=this.dark,t=this.color,n=this.darkColor,r=this.validColor,a=this.errorColor,o=this.borderRadius;return B({dark:e,color:t,darkColor:n,validColor:r,borderRadius:o,lightColor:"#FFFFFF",errorColor:a})}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.setCssVars(),this.phoneNumber&&this.defaultCountryCode&&this.emitValues({countryCode:this.defaultCountryCode,phoneNumber:this.phoneNumber}),!this.defaultCountryCode||!this.fetchCountry){e.next=5;break}throw new Error("VuePhoneNumberInput: Do not use 'fetch-country' and 'default-country-code' options in the same time");case 5:if(!this.defaultCountryCode||!this.noUseBrowserLocale){e.next=7;break}throw new Error("VuePhoneNumberInput: If you use a 'default-country-code', do not use 'no-use-browser-locale' options");case 7:if(!this.defaultCountryCode){e.next=9;break}return e.abrupt("return");case 9:this.fetchCountry?this.fetchCountryCode():!this.noUseBrowserLocale&&this.setLocale(A()),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{getAsYouTypeFormat:function(e){var t=new f["a"](e.countryCode);return t.input(e.phoneNumber)},getParsePhoneNumberFromString:function(e){var t=e.phoneNumber,n=e.countryCode,r=t&&n?Object(f["d"])(t,n):null;return F({countryCode:n,isValid:!1},t&&""!==t?{phoneNumber:t}:null,{},r?{countryCallingCode:r.countryCallingCode,formattedNumber:r.number,nationalNumber:r.nationalNumber,isValid:r.isValid(),type:r.getType(),formatInternational:r.formatInternational(),formatNational:r.formatNational(),uri:r.getURI(),e164:r.format("E.164")}:null)},emitValues:function(e){var t=this,n=this.getAsYouTypeFormat(e),r=8===this.lastKeyPressed;this.$nextTick((function(){var a=!!t.phoneNumber&&t.phoneNumber.trim().slice(-1);r&&a&&")"===a.slice(-1)&&(n=t.phoneNumber.slice(0,-2),e.phoneNumber=t.phoneNumber.slice(0,-2)),t.results=t.getParsePhoneNumberFromString(e),t.$emit("update",t.results),t.$emit("input",n)}))},setLocale:function(e){var t=M(e);t&&e?this.countryCode=e:!t&&e&&console.warn("The locale ".concat(e," is not available")),this.userLocale=t?e:null},fetchCountryCode:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ip2c.org/s");case 3:return t=e.sent,e.next=6,t.text();case 6:n=e.sent,r=(n||"").toString(),r&&"1"===r[0]&&this.setLocale(r.substr(2,2)),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}(),setCssVars:function(){Object(j["a"])({variables:this.cssTheme})}},watch:{defaultCountryCode:function(e,t){e!==t&&this.setLocale(e)},dark:function(){this.setCssVars()}}},E=z,q=(n("a96d"),Object(g["a"])(E,i,s,!1,null,"7ac1e1b6",null)),$=q.exports,R={name:"App",components:{VuePhoneNumberInput:$},data:function(){return{phoneNumber:null,phoneNumber2:null,phoneNumber3:"0665656565",defaultCountry:"FR",countriesList:["FR","BE","DE"],countriesIgnored:["AF","AD","AL"],translations:{countrySelectorLabel:"Code pays",countrySelectorError:"Choisir un pays",phoneNumberLabel:"Numéro de téléphone",example:"Exemple :"},results:{},results2:{},results3:{},dark:!1,disabled:!1,hasLoaderActive:!1,hasErrorActive:!1}},computed:{resultsTable:function(){return Object.keys(this.results)},resultsTable2:function(){return Object.keys(this.results2)},resultsTable3:function(){return Object.keys(this.results3)}},methods:{onUpdate:function(e){this.results=e},onUpdate2:function(e){this.results2=e},onUpdate3:function(e){this.results3=e}}},U=R,G=(n("d0fa"),Object(g["a"])(U,a,o,!1,null,"f0dec016",null)),D=G.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(D)}}).$mount("#app")},"740c":function(e,t,n){},a96d:function(e,t,n){"use strict";var r=n("3beb"),a=n.n(r);a.a},d0fa:function(e,t,n){"use strict";var r=n("123f"),a=n.n(r);a.a},edc0:function(e,t,n){"use strict";var r=n("53a6"),a=n.n(r);a.a}});
//# sourceMappingURL=app.dd30318d.js.map