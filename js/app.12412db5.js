(function(e){function t(t){for(var r,n,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)n=s[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2949d7c2":"391728bb","chunk-2d0e95df":"0ab2c5d7","chunk-2f1d71b6":"14936a50","chunk-33652d22":"a2fc47e9"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-33652d22":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-2949d7c2":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2f1d71b6":"31d6cfe0","chunk-33652d22":"245c36ea"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===r||c===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],m.parentNode.removeChild(m),a(o)},m.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=i[e]=[t,a]}));t.push(r[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"12cb":function(e,t,a){"use strict";var r=a("2b0e"),n=a("a925");r["default"].use(n["a"]);var i={en:a("e088"),ar:a("a54f"),de:a("2508"),tr:a("9237"),fr:a("2394")},o=new n["a"]({locale:"en",seo:!0,messages:i});t["a"]=o},"167e":function(e,t,a){},"1a5d":function(e,t,a){var r={"./404.vue":["8cdb","chunk-2d0e95df"],"./Contact.vue":["b8fa","chunk-2f1d71b6"],"./Home.vue":["bb51","chunk-33652d22"],"./Resume.vue":["1ba2","chunk-2949d7c2"]};function n(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(r)},n.id="1a5d",e.exports=n},2394:function(e){e.exports=JSON.parse('{"Home":"Home","Skills":"Compétences","Projects":"Projets","Resume":"CV","Contact":"Contact","seeResume":"Voir Mon CV","Hello":"Salut 👋🏼! Je suis","myName":"Ahmed Almory","job":"Ingénieur logiciel","Aboutme":"Je suis un ingénieur logiciel passionné 🚀 d\'Egypte 🇪🇬. avec plus de 5 ans d\'expérience dans la fourniture de solutions technologiques, programmeur passionné et apprenant rapidement, obsédé par les détails et la qualité, essayant toujours d\'améliorer le processus de développement et la qualité du code, j\'aime les solutions simples et élégantes pour chaque problème.","iwork":"Je travaille avec...","Myprojects":"Certains de mes projets...","city":"Caire, Egypte","SeeMore":"Voir Plus","GridProject":"Skopenow Grid est une plateforme de veille situationnelle en temps réel avec un backend construit sur une architecture microservices, utilisant Python, PHP et Node.js pour la logique principale et le traitement en temps réel. Il intègre plus de 100 000 sources de données via des API RESTful et WebSocket, et s\'appuie sur MySQL et Elasticsearch pour le stockage des données, hébergé sur AWS pour une scalabilité et une fiabilité optimales.","DotPosProject":"Dot est un système de Point de Vente moderne construit sur PHP/Laravel en utilisant le modèle HMVC, avec MySQL pour le stockage des données.","FatoorahProject":"Fatoorah.sa est une plateforme en ligne en Arabie saoudite qui propose des services de paiement et de facturation. Elle offre une solution pratique aux entreprises et aux particuliers pour créer des factures, suivre les paiements et accepter les paiements en ligne. La plateforme vise à simplifier la gestion financière et à rationaliser les transactions.","ItqanProject":"site web fait avec larvel et Vue.js","MahamProject":"site web fait avec larvel et Vue.js","BasimadroopProject":"Une plateforme pédagogique réalisée avec laravel et VueJs.","SOTOProject":"un jeu vidéo d’aventure-Narrati développé par l’équipe MIST à l’aide d’Unreal Engine.","RobotHello":"Bonjour! Je suis le robot de Houdaifa 🤖","helpU":"Comment puis-je vous aider ?","sayHi":"Je veux juste dire bonjour 👋🏼","hireU":"je veux t\'embaucher 💼","Based":"Où êtes-vous basé ?","ReponseHi":"Merci pour votre visite 😀, J\'espère que vous avez apprécié mon travail, <br> Bonne journée 🙏","ResponseBased":"Je vis au Caire, <br> la capitale de l\'Egypte et la plus grande ville du monde arabe, <br> C\'est une photo d\'elle","ResponsehireU":"Génial, Contactez moi et Allons faire ce travail 💪","ContactMe":"Contactez-moi","Email":"E-mail","Phone":"Télephone","PhoneNumber":"+201550508846","FullAdresse":"Caire, Egypte","Born":"Né le 21 septembre 1999","Profile":"Profil","Experience":"Expérience","Personal":"Personnel","Languages":"langues","Links":"Liens","Education":"Éducation","Arabic":"Arabe","English":"Anglais","French":"Français","German":"Allemande","Turkish":"turque","Native":"Langue maternelle","Advanced":"C1","Intermediate":"B2","Beginner":"A1","Back":"Aller à la page d\'accueil","NotFound":"Désolé, la page que vous recherchez n\'existe pas","contactslogan":"Je suis intéressé par les opportunités de travail en freelance, en particulier les projets ambitieux. Mais si vous voulez juste dire bonjour ou si vous avez une question, n\'hésitez pas à me contacter.","Name":"Nom","Message":"Message","Send":"Envoyer","Email Sent!":"Email envoyé!","Email Not Sent!":"Email non envoyé!","Thanks":"Merci pour votre message, je vous répondrai bientôt 🙏","Senior Backend Developer":"Ingénieur Back-end Senior","2020-Present":"2020-Présent","Syscape":"Syscape","Backend Developer":"Développeur Back-end","Almusand":"Almusand","Const Tech":"Const Tech","Bachelor in Computer Science":"Baccalauréat en informatique","Cairo Higher Institute":"Institut supérieur du Caire"}')},2508:function(e){e.exports=JSON.parse('{"Home":"Startseite","Skills":"Fähigkeiten","Projects":"Projekte","Resume":"Lebenslauf","Hello":"Hallo 👋🏼! Ich bin","myName":"Ahmed Almory","job":"Softwareentwickler","Aboutme":"Ich bin ein leidenschaftlicher Softwareentwickler 🚀 aus Ägypten 🇪🇬 mit mehr als 5 Jahren Erfahrung in der Bereitstellung technischer Lösungen. Ich bin ein begeisterter Programmierer und schneller Lerner, besessen von Details und Qualität, und ich versuche immer, den Entwicklungsprozess und die Codequalität zu verbessern. Ich liebe einfache und elegante Lösungen für jedes Problem.","iwork":"Ich arbeite mit...","Myprojects":"Einige meiner Projekte...","seeResume":"Lebenslauf ansehen","city":"Kairo, Ägypten","SeeMore":"Mehr anzeigen","GridProject":"Skopenow Grid ist eine Echtzeit-Plattform für Situationsbewusstsein, deren Backend auf einer Microservices-Architektur basiert und Python, PHP und Node.js für die Kernlogik und Echtzeitverarbeitung verwendet. Es integriert über 100.000 Datenquellen über RESTful APIs und WebSocket, nutzt MySQL und Elasticsearch für die Datenspeicherung und wird auf AWS für Skalierbarkeit und Zuverlässigkeit gehostet.","DotPosProject":"Dot ist ein modernes Point-of-Sale-System, das auf PHP/Laravel mit dem HMVC-Muster aufbaut und MySQL für die Datenspeicherung verwendet.","FatoorahProject":"Fatoorah.sa ist eine Online-Plattform in Saudi-Arabien, die Zahlungs- und Rechnungsstellungsdienste anbietet. Sie bietet Unternehmen und Privatpersonen eine bequeme Möglichkeit, Rechnungen zu erstellen, Zahlungen zu verfolgen und Online-Zahlungen zu akzeptieren. Die Plattform zielt darauf ab, das Finanzmanagement zu vereinfachen und Transaktionen zu optimieren.","ItqanProject":"Website erstellt mit Laravel und Vue.js","MahamProject":"Website erstellt mit Laravel und Vue.js","BasimadroopProject":"Eine Bildungsplattform erstellt mit Laravel und VueJs.","SOTOProject":"Ein Adventure-Narrative-Videospiel, entwickelt vom MIST-Team mit Unreal Engine.","RobotHello":"Hallo! Ich bin Ahmeds Roboter 🤖","helpU":"Wie kann ich dir helfen?","sayHi":"Ich wollte nur Hallo sagen 👋🏼","hireU":"Ich möchte dich einstellen 💼","Based":"Wo bist du ansässig?","ReponseHi":"Danke, dass du vorbeigeschaut hast 😀,<br>ich hoffe, dir hat es gefallen, meine Arbeit zu durchstöbern. <br>Einen schönen Tag noch 🙏","ResponseBased":"Ich bin in Kairo ansässig,<br>der Hauptstadt Ägyptens und der größten Stadt der arabischen Welt.<br>Hier ist ein Bild davon","ResponsehireU":"Großartig, kontaktiere mich und lass uns die Arbeit erledigen 💪","ContactMe":"Kontaktiere mich","Email":"E-Mail","Phone":"Telefon","PhoneNumber":"+201550508846","FullAdresse":"Kairo, Ägypten","Born":"Geboren am 21. September 1999","Profile":"Profil","Experience":"Erfahrung","Personal":"Persönliches","Languages":"Sprachen","Links":"Links","Eduction":"Ausbildung","Arabic":"Arabisch","English":"Englisch","French":"Französisch","German":"Deutsch","Turkish":"Türkisch","Native":"Muttersprache","Advanced":"C1","Intermediate":"B2","Back":"Zurück zur Startseite","NotFound":"Entschuldigung, die Seite, die Sie suchen, existiert nicht","contactslogan":"Ich bin an freiberuflichen Möglichkeiten interessiert, insbesondere an ambitionierten Projekten. Aber wenn Sie einfach nur Hallo sagen oder eine Frage haben, zögern Sie bitte nicht, mich zu kontaktieren.","Name":"Name","Message":"Nachricht","Send":"Senden","Email Sent!":"E-Mail gesendet!","Email Not Sent!":"E-Mail nicht gesendet!","Thanks":"Vielen Dank für Ihre Nachricht, ich werde mich bald bei Ihnen melden 🙏","Senior Backend Developer":"Senior Backend-Entwickler","2020-Present":"2020-Heute","Syscape":"Syscape","Backend Developer":"Backend-Entwickler","Almusand":"Almusand","Const Tech":"Const Tech","Bachelor in Computer Science":"Bachelor in Informatik","Cairo Higher Institute":"Höheres Institut Kairo"}')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("a766"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-gray-50 text-gray-800 dark:bg-coolGray-800 ",class:"ar"==this.$i18n.locale?"text-right":"",attrs:{id:"app"}},[a("div",{staticClass:"container mx-auto px-12 p-4 pt-6"},[a("v-navbar"),a("router-view")],1),a("v-footer")],1)}),i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"flex flex-nowrap justify-between items-center text-gray-700 dark:text-gray-300 xl:text-xl text-base pb-8 xl:pb-12 flex-col lg:flex-row lg:space-y-0 space-y-5"},[a("div",[a("h1",{staticClass:"text-6xl tracking-wider font-extralight cursor-pointer",staticStyle:{"font-family":"'Fuggles', cursive"},on:{click:function(t){return e.goToRouter("Home")}}},[e._v(" Ahmed Almory ")])]),a("div",[a("router-link",{staticClass:"pr-6 font-light hover:text-gray-500",attrs:{to:"/"}},[e._v(e._s(e.$t("Home")))]),a("router-link",{staticClass:"pr-6 font-light hover:text-gray-500",attrs:{to:"/resume"}},[e._v(e._s(e.$t("Resume")))]),a("button",{staticClass:"rounded-lg bg-turquoise dark:bg-blue-500 hover:bg-fakhti py-1 px-2 lg:py-2 lg:px-4 text-sm lg:text-base text-white font-semibold",on:{click:function(t){return e.goToRouter("Contact")}}},[e._v(" "+e._s(e.$t("Contact"))+" ")]),a("v-drop-down",{ref:"dropDown",staticClass:"ml-8"},[a("div",{attrs:{slot:"trigger"},slot:"trigger"},[a("flag",{staticClass:"text-xl",attrs:{iso:e.choosenLanguage}}),a("i",{staticClass:"fas fa-chevron-down ml-2"})],1),a("div",{staticClass:"dark:bg-gray-800",attrs:{slot:"menu"},slot:"menu"},e._l(e.languages,(function(t,r){return a("div",{key:r,staticClass:"flex items-center space-x-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-2",on:{click:function(t){return e.changeLocale(r)}}},[a("div",[a("flag",{staticClass:"text-lg",attrs:{iso:t.flag}})],1),a("div",{staticClass:"text-xs lg:text-sm"},[e._v(e._s(e.$t(t.title)))])])})),0)]),e.isDarkMode?a("i",{staticClass:"fas fa-sun ml-6 cursor-pointer text-yellow-500 border px-2 py-1 rounded-xl",on:{click:e.ToogleDarkMode}}):a("i",{staticClass:"fas fa-moon ml-6 cursor-pointer border px-2 py-1 rounded-xl",on:{click:e.ToogleDarkMode}})],1)])},s=[],l=a("12cb"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hide,expression:"hide"}],staticClass:"relative inline-block ",class:"ar"==this.$i18n.locale?"text-right":"text-left",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.hide.apply(null,arguments)}}},[a("div",[a("button",{staticClass:"flex items-center text-sm font-medium text-gray-500 dark:text-gray-300\n                        hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300\n                        transition duration-150 ease-in-out",attrs:{type:"button",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},on:{click:function(t){e.showDropDown=!e.showDropDown}}},[e._t("trigger")],2)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showDropDown,expression:"showDropDown"}],staticClass:"origin-top-right absolute right-0 w-auto rounded-md shadow-lg bg-white dark:bg-coolGray-600 dark:text-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none z-50",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"1"}},[a("div",{staticClass:"py-1",attrs:{role:"none"}},[e._t("menu")],2)])])},c=[],d=a("c7db"),m={name:"VDropDown",directives:{onClickaway:d["directive"]},data:function(){return{showDropDown:!1}},methods:{hide:function(){this.showDropDown=!1}}},h=m,p=a("2877"),g=Object(p["a"])(h,u,c,!1,null,null,null),f=g.exports,v={name:"VNavbar",components:{VDropDown:f},data:function(){return{IamNotInHome:!0,choosenLanguage:"",choosenLan:"",isDarkMode:!1,languages:[{id:0,flag:"us",language:"en",title:"English"},{id:1,flag:"eg",language:"ar",title:"Arabic"},{id:2,flag:"de",language:"de",title:"German"},{id:3,flag:"tr",language:"tr",title:"Turkish"},{id:4,flag:"fr",language:"fr",title:"French"}]}},watch:{$route:function(e){"/"!=e.path?this.IamNotInHome=!1:this.IamNotInHome=!0}},methods:{changeLocale:function(e){l["a"].locale=this.languages[e].language,this.choosenLanguage=this.languages[e].flag,this.choosenLan=this.languages[e].title,this.$store.commit("ToggleIsTranslated"),this.$refs.dropDown.hide()},goToRouter:function(e){this.$router.push({name:e})},ToogleDarkMode:function(){this.isDarkMode?localStorage.theme="light":localStorage.theme="dark",this.$router.go(0)}},created:function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),this.isDarkMode=!0):(document.documentElement.classList.remove("dark"),this.isDarkMode=!1)},mounted:function(){this.choosenLanguage="us"}},b=v,k=(a("e3af"),Object(p["a"])(b,o,s,!1,null,"7831c5b6",null)),y=k.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white dark:bg-gray-700 w-full h-44 shadow flex flex-col lg:flex-row justify-between items-center py-4 px-0 sm:px-52 mt-12"},[a("div",{staticClass:"flex flex-col mb-5 xl:mb-0"},[a("div",[a("h4",{staticClass:"text-base mb-2 dark:text-gray-300"},[e._v(e._s(e.$t("ContactMe"))+":")])]),a("hr",{staticClass:"mb-2"}),a("div",{staticClass:"flex space-x-1 mb-1 text-gray-500 dark:text-gray-300 xl:tracking-tight text-sm lg:text-base"},[a("h6",{staticClass:"font-semibold"},[e._v(e._s(e.$t("Phone"))+": ")]),a("a",{staticClass:"hover:text-turquoise",attrs:{href:"tel:+201550508846"}},[e._v(" "+e._s(e.$t("PhoneNumber")))])]),a("div",{staticClass:"flex space-x-1 text-gray-500 dark:text-gray-300 xl:tracking-tight text-sm lg:text-base"},[a("h6",{staticClass:"font-semibold"},[e._v(e._s(e.$t("Email"))+": ")]),a("a",{staticClass:"hover:text-turquoise",attrs:{href:"mailto:ahmedalmory99@gmail.com"}},[e._v("ahmedalmory99@gmail.com")])])]),a("div",[a("v-links")],1)])},P=[],x=a("9ebb"),w={name:"VFooter",components:{VLinks:x["a"]}},j=w,E=Object(p["a"])(j,S,P,!1,null,null,null),C=E.exports,A={components:{VNavbar:y,VFooter:C}},M=A,B=(a("034f"),Object(p["a"])(M,n,i,!1,null,null,null)),H=B.exports,T=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f"));function D(e){return function(){return a("1a5d")("./"+e+".vue").then((function(e){return e.default||e}))}}r["default"].use(T["a"]);var N=[{path:"/",name:"Home",component:D("Home")},{path:"/resume",name:"Resume",component:D("Resume")},{path:"/contact",name:"Contact",component:D("Contact")},{path:"*",name:"404",component:D("404")}],I=new T["a"]({routes:N}),z=I,L=a("2f62");r["default"].use(L["a"]);var _=new L["a"].Store({state:{isTranslated:!0},getters:{isTranslated:function(e){return e.isTranslated}},mutations:{ToggleIsTranslated:function(e){e.isTranslated=!1}}}),R=_,O=a("d61f"),q=a("11a1");r["default"].use(q["a"]),r["default"].use(O["a"]),r["default"].config.productionTip=!1,new r["default"]({router:z,store:R,i18n:l["a"],render:function(e){return e(H)}}).$mount("#app")},"85ec":function(e,t,a){},9237:function(e){e.exports=JSON.parse('{"Home":"Anasayfa","Skills":"Yetenekler","Projects":"Projeler ","Resume":"Özgeçmiş","Contact":"İletişim","seeResume":"CV\'ye bakın","Hello":"Merhaba 👋🏼! Ben","job":"yazılım mühendisi","Aboutme":"Ben tutkulu bir yazılım geliştiriciyim 🚀 Mısır\'dan 🇪🇬. 5 yılı aşkın teknoloji çözümleri sunma tecrübesiyle, hevesli bir programcı ve hızlı öğrenen, ayrıntılara ve kaliteye takıntılı, geliştirme sürecini ve kod kalitesini her zaman iyileştirmeye çalışan, her sorun için basit ve zarif çözümler yapmayı seviyorum.","iwork":"İle çalışıyorum...","Myprojects":"Bazı projelerim...","city":"Kahire, Mısır","SeeMore":"Daha fazlasını görüntüleyin","GridProject":"Skopenow Grid, mikroservis mimarisi üzerine inşa edilmiş bir gerçek zamanlı durumsal farkındalık platformudur. Temel mantık ve gerçek zamanlı işlemler için Python, PHP ve Node.js kullanır. RESTful API\'ler ve WebSocket aracılığıyla 100.000\'den fazla veri kaynağını entegre eder ve veri depolama için MySQL ve Elasticsearch\'e dayanır. Ölçeklenebilirlik ve güvenilirlik için AWS üzerinde barındırılır.","DotPosProject":"Dot, PHP/Laravel üzerine inşa edilmiş ve HMVC modelini kullanan, MySQL ile veri depolama için modern bir Satış Noktası (POS) sistemidir.","FatoorahProject":"Fatoorah.sa, Suudi Arabistan\'da ödeme ve fatura hizmetleri sunan bir çevrimiçi platformdur. İşletmelere ve bireylere faturalar oluşturma, ödemeleri takip etme ve çevrimiçi ödemeleri kabul etme konusunda kolaylık sağlar. Platform, mali yönetimi basitleştirmeyi ve işlemleri akıcı hale getirmeyi amaçlar.","ItqanProject":"Larvel ve Vue ile bir web site","MahamProject":"Larvel ve Vue ile bir web site","BasimadroopProject":"Laravel ve VueJs\'den yapılmış eğitim platformu.","SOTOProject":"Macera video oyunu-Narrati, MIST ekibi tarafından Unreal Engine kullanılarak geliştirildi.","RobotHello":"Hoş geldin! Ben robot 🤖 Ahmed","helpU":"Size nasıl yardımcı olabilirim?","sayHi":"Sadece merhaba demek istedim. 👋🏼","hireU":"Seni işe almak istiyorum. 💼 ","Based":"nerede yaşıyorsun?","ReponseHi":"geldiğiniz için teşekkür ederim 😀,<br>Umarım çalışmalarıma göz atmaktan keyif almışsınızdır. <br>İyi günler 🙏","ResponseBased":"<br> Mısır\'ın başkenti ve Arap dünyasının en büyük şehri Kahire\'de yaşıyorum, <br> buradan bir resim","ResponsehireU":"Güzel, şimdi bana mesaj at, hadi bu işi bitirelim. 💪","ContactMe":"Benimle iletişime geçin.","Email":"E-posta","Phone":"Telefon","PhoneNumber":"+201550508846","FullAdresse":"Kahire, Mısır","Born":"Doğum tarihi: 21 Eylül 1999","Profile":"Profil","Experience":"Deneyim","Personal":"Kişisel","Languages":"Diller","Links":"Bağlantılar","Education":"Eğitim","Arabic":"Arapça","English":"İngilizce","French":"Fransızca","German":"Almanca","Turkish":"Türkçe","Native":"Ana dili","Advanced":"C1 Sınıfı","Intermediate":"B2","Beginner":"A1","Back":"Ana sayfaya git","NotFound":"Üzgünüz, aradığınız sayfa mevcut değil","contactslogan":"Serbest çalışma fırsatlarıyla, özellikle iddialı projelerle ilgileniyorum. Ama sadece merhaba demek veya bir sorunuz varsa, lütfen benimle iletişime geçmekten çekinmeyin.","Name":"Adınız","Message":"Mesajınız","Send":"Gönder","Email Sent!":"E-posta gönderildi!","Email Not Sent!":"E-posta gönderilemedi!","Thanks":"Mesajınız için teşekkür ederim, yakında size cevap vereceğim 🙏","Senior Backend Developer":"Senior Backend Developer","2020-Present":"2000-Şu ana kadar","Syscape":"Syscape","Backend Developer":"Backend Developer","Almusand":"Almusand","Const Tech":"Const Tech","Bachelor in Computer Science":"Bilgisayar Bilimleri Lisans","Cairo Higher Institute":"Kahire Yüksek Enstitüsü"}')},"9ebb":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex space-x-10 2xl:text-4xl text-3xl slit-in-diagonal-1"},[a("div",[a("a",{attrs:{href:"https://twitter.com/ahmedalmory99",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter-square text-gray-800 dark:text-blueGray-300 dark:hover:text-turquoise hover:text-turquoise"})])]),a("div",[a("a",{attrs:{href:"https://ma.linkedin.com/in/ahmedalmory",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin text-gray-800 dark:text-blueGray-300 dark:hover:text-turquoise hover:text-turquoise"})])]),a("div",[a("a",{attrs:{href:"https://github.com/ahmedalmory",target:"_blank"}},[a("i",{staticClass:"fab fa-github-square text-gray-800 dark:text-blueGray-300 dark:hover:text-turquoise hover:text-turquoise"})])]),a("div",[a("a",{attrs:{href:"https://telegram.me/ahmedalmory",target:"_blank"}},[a("i",{staticClass:"fab fa-telegram-plane text-gray-800 dark:text-blueGray-300 dark:hover:text-turquoise hover:text-turquoise"})])])])}],i={name:"VLinks"},o=i,s=a("2877"),l=Object(s["a"])(o,r,n,!1,null,null,null);t["a"]=l.exports},a54f:function(e){e.exports=JSON.parse('{"Home":"الرئيسية","Skills":"مهارات","Projects":"مشاريع ","Resume":"سيرة ذاتية","Contact":"راسل","seeResume":"سيرتي الذاتية","Hello":"مرحبا 👋🏼! أنا","myName":"أحمد المري","job":"مهندس برمجيات","Aboutme":"أنا مهندس  برمجيات شغوف من مصر . مع أكثر من 5 سنوات من الخبرة في تقديم الحلول التقنية ، مبرمج متعطش ومتعلم سريع ، مهووس بالتفاصيل والجودة ، يحاول دائما تحسين عملية التطوير وجودة الكود ، أحب الحلول البسيطة والأنيقة لكل مشكلة.","iwork":"أنا أعمل ب...","Myprojects":"بعض مشاريعي...","city":"القاهرة، مصر","SeeMore":"عرض المزيد","GridProject":"Skopenow Grid هي منصة للوعي الظرفي في الوقت الفعلي، تم بناء backendها على بنية microservices باستخدام Python وPHP وNode.js للمنطق الأساسي ومعالجة البيانات في الوقت الفعلي. تقوم بدمج أكثر من 100,000 مصدر بيانات عبر واجهات برمجية من نوع RESTful وWebSocket، وتعتمد على MySQL وElasticsearch لتخزين البيانات، وتستضيف على AWS لضمان قابلية التوسع والموثوقية.","DotPosProject":"Dot هو نظام حديث لنقاط البيع (POS) مبني على PHP/Laravel باستخدام نمط HMVC، ويعتمد على MySQL لتخزين البيانات.","FatoorahProject":"اتورة هي منصة عبر الإنترنت في المملكة العربية السعودية توفر خدمات الدفع والفواتير. تقدم وسيلة مريحة للشركات والأفراد لإنشاء الفواتير وتتبع المدفوعات وقبول الدفعات عبر الإنترنت. تهدف المنصة إلى تبسيط إدارة الأمور المالية وتسهيل العمليات المالية.","ItqanProject":"موقع على شبكة الإنترنت مع مصنوعة من larvel و Vue.js","MahamProject":"موقع على شبكة الإنترنت مع مصنوعة من larvel و Vue.js","BasimadroopProject":"منصة تعليمية مصنوعة من laravel و VueJs.","SOTOProject":"لعبة فيديو مغامرة-Narrati تم تطويرها بواسطة فريق MIST باستخدام Unreal Engine.","RobotHello":"أهلاً و سهلاً! أنا روبوت 🤖 أحمد","helpU":"كيف يمكنني مساعدتك ؟","sayHi":"أردت فقط أن أقول مرحبا 👋🏼","hireU":"أود توظيفك 💼 ","Based":"أين تقطن ؟","ReponseHi":"حسنا شكرا على مرورك 😀, اتمنى لك يوم جيد🙏","ResponseBased":"أنا مقيم في القاهرة, <br>  عاصمة مصر وأكبر مدينة في الوطن العربي, <br> هذه صورة لها","ResponsehireU":"جميل، راسلني الأن و لنقم بإنهاء هذا العمل 💪","ContactMe":"تواصل معي","Email":"الإيميل","Phone":"الهاتف","PhoneNumber":"+201550508846","FullAdresse":"القاهرة، مصر","Born":"مواليد 21 سبتمبر 1999","Profile":"بروفيل","Experience":"خبرة","Personal":"شخصي","Languages":"اللغات","Links":"الروابط","Education":"التعليم","Arabic":"عربى","English":"إنجليزي","French":"فرنسي","German":"الماني","Turkish":"التركية","Native":"اللغة الأم","Advanced":"C1","Intermediate":"B2","Beginner":"A1","Back":"العودة إلى الصفحة الرئيسية ","NotFound":"عذرا ، الصفحة التي تبحث عنها غير موجودة ","contactslogan":"أنا مهتم بفرص العمل الحر ، وخاصة المشاريع الطموحة. ولكن إذا كنت تريد فقط إلقاء التحية أو لديك سؤال ، فالرجاء عدم التردد في الاتصال بي.","Name":"الاسم","Message":"الرسالة","Send":"إرسال","Email Sent!":"تم إرسال البريد الإلكتروني!","Email Not Sent!":"لم يتم إرسال البريد الإلكتروني!","Thanks":"شكرا على رسالتك وسأرد عليك قريبا 🙏","Senior Backend Developer":"مطور باكاند سينيور","2020-Present":"2000-حتى الآن","Syscape":"سيسكاب","Backend Developer":"مطور باكاند","Almusand":"المساند","Const Tech":"كوكبة التقنية","Bachelor in Computer Science":"بكالوريوس في علوم الكمبيوتر","Cairo Higher Institute":"معهد القاهرة العالي"}')},a766:function(e,t,a){},e088:function(e){e.exports=JSON.parse('{"Home":"Home","Skills":"Skills","Projects":"Projects","Resume":"Resume","Hello":"Hi 👋🏼! I am","myName":"Ahmed Almory","job":"Software Developer","Aboutme":"I am a passionate Software Developer 🚀 from Egypt 🇪🇬. with more than 5 years experience delivering tech solutions, avid programmer and fast learner, obsessed with details and quality, always trying to improve development process and code quality, I love simple and elegant solutions for every problem.","iwork":"I work with...","Myprojects":"Some of my projects...","seeResume":"View Resume","city":"Cairo, Egypt","SeeMore":"View More","GridProject":"Skopenow Grid is a real-time situational awareness platform with a backend built on a microservices architecture, using Python, PHP, and Node.js for core logic and real-time processing. It integrates 100,000+ data sources via RESTful APIs and WebSocket, it relies on mysql and Elasticsearch for data storage, hosted on AWS for scalability and reliability.","DotPosProject":"Dot is a modern Point-of-Sale system built on PHP/Laravel using the HMVC pattern, with MySQL for data storage.","FatoorahProject":"Fatoorah.sa is an online platform in Saudi Arabia that provides payment and invoicing services. It offers a convenient way for businesses and individuals to create invoices, track payments, and accept online payments. The platform aims to simplify financial management and streamline transactions.","ItqanProject":"website with made with larvel and Vue.js","MahamProject":"website with made with larvel and Vue.js","BasimadroopProject":"An educational platform made with laravel and VueJs.","SOTOProject":"an adventure-Narrati video game developed by MIST team using Unreal Engine.","RobotHello":"Hi! I’m Ahmed\'s Robot 🤖","helpU":"How can I help you ?","sayHi":"Just wanted to say Hi 👋🏼","hireU":"I\'d like to hire you 💼 ","Based":"Where are you based ?","ReponseHi":"Well thanks for passing by 😀,<br>I hope you\\"ve enjoyed browsing my work. <br>Have a good day 🙏","ResponseBased":"I\'m based in Cairo, <br>  the capital of Egypt and the largest city in the Arab world, <br> Here is a picture of it","ResponsehireU":"Great, Contact me and let get that work done 💪","ContactMe":"Contact me","Email":"E-mail","Phone":"Phone","PhoneNumber":"+201550508846","FullAdresse":"Cairo, Egypt","Born":"Born on 21th of September, 1999","Profile":"Profile","Experience":"Experience","Personal":"Personal","Languages":"Languages","Links":"Links","Eduction":"Eduction","Arabic":"Arabic","English":"English","French":"French","German":"German","Turkish":"Turkish","Native":"Native","Advanced":"C1","Intermediate":"B2","Back":"Back to Homepage","NotFound":"Sorry, The page you are looking for does not exist","contactslogan":"I’m interested in freelance opportunities, especially ambitious projects. But if you just want to say hi or have a question, please don’t hesitate to contact me.","Name":"Name","Message":"Message","Send":"Send","Email Sent!":"Email Sent!","Email Not Sent!":"Email Not Sent!","Thanks":"Thank you for your message, I\'ll respond to you soon 🙏","Senior Backend Developer":"Senior Backend Developer","2020-Present":"2020-Present","Syscape":"Syscape","Backend Developer":"Backend Developer","Almusand":"Almusand","Const Tech":"Const Tech","Bachelor in Computer Science":"Bachelor in Computer Science","Cairo Higher Institute":"Cairo Higher Institute"}')},e3af:function(e,t,a){"use strict";a("167e")}});
//# sourceMappingURL=app.12412db5.js.map