(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{117:function(e,t,a){e.exports=a(240)},122:function(e,t,a){},123:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=(a(122),a(14)),i=(a(123),a(15)),s=a.n(i),u=a(20),m=a(107),d=a.n(m),f=a(108),v=a.n(f),g=a(269),p=a(272),E=a(274),b=a(275),h=a(242),y=a(276),C=a(290),O=a(292),j=a(277),x=a(42),k=a.n(x),w="https://disease.sh/v3/covid-19",D=void 0,L={getAllData:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(w,"/countries"));case 2:return t=e.sent,a=t.data,D=a,e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getCountriesList:function(){var e;return null===(e=D)||void 0===e?void 0:e.map((function(e){return e.country}))},getCountryData:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(w,"/").concat("WORLDWIDE"===t?"all":"countries/".concat(t)));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCountryListAndCases:function(){var e;return null===(e=D)||void 0===e?void 0:e.map((function(e){return{name:e.country,cases:e.cases,recovered:e.recovered,deaths:e.deaths}})).sort((function(e,t){return t.cases-e.cases}))},getHistoryCases:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="WORLDWIDE"!==t&&t?t:"all",n="".concat(w,"/historical/").concat(a,"?lastdays=120"),e.next=4,k.a.get(n);case 4:return r=e.sent,c=r.data,o="WORLDWIDE"!==t?c:{country:"Worldwide",timeline:c},e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCountryLocation:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(w,"/").concat("WORLDWIDE"===t?"all":"countries/".concat(t)));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.countryInfo);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCountriesLocationData:function(){return D.map((function(e){return{name:e.country,iso2:e.countryInfo.iso2,flag:e.countryInfo.flag,lat:e.countryInfo.lat,lng:e.countryInfo.long,cases:e.cases,deaths:e.deaths,recovered:e.recovered,population:e.population}}))}};function S(){var e=Object(n.useContext)(be),t=Object(g.a)((function(t){return{appbar:{backgroundColor:e?"#424242":"white"},logo:{height:"100%",color:"hotpink",marginRight:t.spacing(1)},svg:{marginLeft:t.spacing(1)},button:{marginLeft:t.spacing(1)},title:{height:"100%"},select:{maxHeight:"100px"}}}))(),a=Object(n.useContext)(he),c=Object(n.useState)([]),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(n.useContext)(de);return Object(n.useEffect)((function(){var e=L.getCountriesList();s(e)}),[]),r.a.createElement(p.a,{position:"static",className:t.appbar},r.a.createElement(E.a,null,r.a.createElement(b.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(b.a,{item:!0},r.a.createElement(b.a,{container:!0,alignItems:"center",className:t.title},r.a.createElement(b.a,{item:!0},r.a.createElement(d.a,{className:t.logo})),r.a.createElement(b.a,{item:!0},r.a.createElement(h.a,{variant:"h6",display:"inline",color:e?"textSecondary":"textPrimary"},"COVID 19 Tracker")))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{size:"small"},r.a.createElement(C.a,{variant:"outlined",value:null===u||void 0===u?void 0:u.selectedCountry,color:e?"secondary":"primary",className:t.select,onChange:function(e){return null===u||void 0===u?void 0:u.setSelectedCountry(e.target.value)}},r.a.createElement(O.a,{key:"worldwide",value:"WORLDWIDE",style:{backgroundColor:"rgba(166, 220, 239, 0.3)"}},r.a.createElement("b",null,"Worldwide")),i&&i.map((function(e,t){return r.a.createElement(O.a,{key:t,value:e},e)})))),r.a.createElement(j.a,{variant:"contained",color:e?"secondary":"default",className:t.button,onClick:function(){return a&&a((function(e){return!e}))}},e?"LIGHT":"DARK"," ",r.a.createElement(v.a,{className:t.svg}))))))}var N=a(278),W=a(279);function I(e){var t=e.title,a=e.total,n=e.cases,c=e.color,o=Object(g.a)((function(e){return{card:{cursor:"pointer",alignItems:"center",justifyContent:"center","&:hover":{borderLeft:"5px solid ".concat(c)}}}}))();return r.a.createElement(N.a,{className:o.card,elevation:8},r.a.createElement(W.a,null,r.a.createElement(h.a,{color:"textSecondary",align:"center"},t),r.a.createElement(h.a,{variant:"h5",align:"center"},n?function(e){var t="";e>0?t="+":e<0&&(t="-");return t+" "+e.toLocaleString()}(n):0),r.a.createElement(h.a,{color:"textSecondary",align:"center"},a?a.toLocaleString():0," Total")))}var R=a(113),A=a(280),T=a(294),H=a(295),P=a(291),z=a(296),B=(a(88),Object(g.a)((function(e){return{media:{height:0,paddingTop:"56.25%",border:"1px solid black"},right:{textAlign:"right"},left:{textAlign:"left"}}})));function F(e){var t=e.field,a=e.value,n=B();return r.a.createElement("tr",null,r.a.createElement("td",{className:n.left},t),r.a.createElement("td",null,":"),r.a.createElement("td",{className:n.right},"Country"===t?r.a.createElement("b",null,a):a))}function M(e){var t=e.coordinate,a=B(),c=Object(n.useContext)(fe),o=Object(n.useContext)(de),i=Object(n.useState)(void 0),s=Object(l.a)(i,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){var e=L.getCountriesLocationData();m(e)}),[]),r.a.createElement(R.a,{className:"map",elevation:8,style:{height:"700px"}},r.a.createElement(T.a,{center:t,zoom:"WORLDWIDE"===(null===o||void 0===o?void 0:o.selectedCountry)?2:5,className:"leaflet-container",minZoom:1},r.a.createElement(H.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),u&&u.map((function(e){var t=e.lat,n=e.lng,o=e.flag,l=e.cases,i=e.deaths,s=e.recovered,u=e.population,m=e.iso2,d=e.name,f=V[c],v=f.color,g=f.fillColor,p=f.multiplier;return r.a.createElement(P.a,{key:"".concat(d,"-").concat(m),center:{lat:t,lng:n},color:v,fillColor:g,fillOpacity:.4,radius:Math.sqrt(e[c])*p},r.a.createElement(z.a,{closeButton:!1,maxHeight:250,maxWidth:180},r.a.createElement(N.a,null,r.a.createElement(A.a,{className:a.media,image:o,title:d}),r.a.createElement(W.a,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement(F,{field:"Country",value:d}),r.a.createElement(F,{field:"Population",value:u.toLocaleString()}),r.a.createElement(F,{field:"Cases",value:l.toLocaleString()}),r.a.createElement(F,{field:"Deaths",value:i.toLocaleString()}),r.a.createElement(F,{field:"Recovered",value:s.toLocaleString()})))))))}))))}var V={cases:{color:"red",fillColor:"hotpink",multiplier:800},deaths:{color:"darkred",fillColor:"red",multiplier:4e3},recovered:{color:"green",fillColor:"lightgreen",multiplier:1400}};function Y(e){var t=e.selectedCountryData,a=e.setViewType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{item:!0,xs:4,onClick:function(){return a("cases")}},r.a.createElement(I,{color:V.cases.color,title:"Cases",cases:null===t||void 0===t?void 0:t.todayCases,total:null===t||void 0===t?void 0:t.cases})),r.a.createElement(b.a,{item:!0,xs:4,onClick:function(){return a("recovered")}},r.a.createElement(I,{color:V.recovered.color,title:"Recovered",cases:null===t||void 0===t?void 0:t.todayRecovered,total:null===t||void 0===t?void 0:t.recovered})),r.a.createElement(b.a,{item:!0,xs:4,onClick:function(){return a("deaths")}},r.a.createElement(I,{color:V.deaths.color,title:"Deaths",cases:null===t||void 0===t?void 0:t.todayDeaths,total:null===t||void 0===t?void 0:t.deaths})))}var J=a(4),q=a(293),G=a(281),K=a(282),Z=a(283),$=a(284),Q=a(285),U=a(286),X=Object(g.a)((function(e){return{controller:{padding:e.spacing(2)},overflow:{display:"grid",overflow:"hidden",height:"100%"},container:{maxHeight:"55vh"},table:{minWidth:100},text:{fontSize:"0.9rem"}}})),_=Object(J.a)((function(e){return Object(q.a)({root:{cursor:"pointer","&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover},"&:hover":{backgroundColor:"#c0c0c0"}}})}))(G.a);function ee(){var e=X(),t=Object(n.useContext)(de),a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=L.getCountryListAndCases(),i(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(b.a,{className:e.controller},r.a.createElement(K.a,{component:R.a,className:e.container},r.a.createElement(Z.a,{stickyHeader:!0,className:e.table},r.a.createElement($.a,null,r.a.createElement(G.a,null,r.a.createElement(Q.a,{align:"left",onClick:function(){return null===t||void 0===t?void 0:t.setSelectedCountry("WORLDWIDE")},style:{cursor:"pointer"}},"Country"),r.a.createElement(Q.a,{align:"right"},"Cases"),r.a.createElement(Q.a,{align:"right"},"Deaths"),r.a.createElement(Q.a,{align:"right"},"Recovered"))),r.a.createElement(U.a,null,o.map((function(a,n){return r.a.createElement(_,{key:n,onClick:function(){return null===t||void 0===t?void 0:t.setSelectedCountry(a.name)},className:"table-li"},r.a.createElement(Q.a,{align:"left"},r.a.createElement(h.a,{className:e.text},a.name)),r.a.createElement(Q.a,{align:"right"},r.a.createElement(h.a,{className:e.text},a.cases.toLocaleString())),r.a.createElement(Q.a,{align:"right"},r.a.createElement(h.a,{className:"table-li-red"},a.deaths.toLocaleString())),r.a.createElement(Q.a,{align:"right"},r.a.createElement(h.a,{className:"table-li-green"},a.recovered.toLocaleString())))}))))))}var te=a(110),ae=a(71),ne=a.n(ae),re=Object(g.a)((function(e){return{controller:{paddingTop:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},card:{padding:e.spacing(1)}}})),ce={legend:{display:!0},element:{point:{radius:0}},maintainAspectRatio:!0,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return ne()(e.value).format("+0.0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return ne()(e).format("0a")}}}]}};function oe(){var e=re(),t=Object(n.useContext)(de),a=Object(n.useState)("..."),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(void 0),u=Object(l.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){L.getHistoryCases(null===t||void 0===t?void 0:t.selectedCountry).then((function(e){i(e.country),d({labels:Object.keys(e.timeline.cases),datasets:[{label:"Cases",data:Object.values(e.timeline.cases),borderColor:"rgba(0, 0, 0, 1)",backgroundColor:"rgba(0, 0, 120, 0.2",legend:!0},{label:"Deaths",data:Object.values(e.timeline.deaths),borderColor:"rgba(255, 99, 132, 0.6)",backgroundColor:"rgba(120, 0, 0, 0.2",legend:!0},{label:"Recovered",data:Object.values(e.timeline.recovered),borderColor:"rgba(90, 255, 132, 0.6)",backgroundColor:"rgba(0, 120, 0, 0.2",legend:!0}]})}))}),[t]),r.a.createElement(b.a,{className:e.controller},r.a.createElement(N.a,{className:e.card,elevation:8},"LOCATION : ",o,m&&r.a.createElement(te.Line,{data:m,options:ce})))}var le=a(287);function ie(){return r.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Created by : ",r.a.createElement(le.a,{color:"inherit",href:"https://www.github.com/nicktanryo"},"Nicholas Tanryo")," ",(new Date).getFullYear(),".")}var se=a(288),ue=Object(g.a)((function(e){return{container:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}}));function me(){var e=ue();return r.a.createElement("div",{className:e.container},r.a.createElement(se.a,null))}var de=r.a.createContext(void 0),fe=r.a.createContext("cases"),ve={lat:20,lng:0};function ge(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("WORLDWIDE"),i=Object(l.a)(o,2),m=i[0],d=i[1],f=Object(n.useState)(void 0),v=Object(l.a)(f,2),g=v[0],p=v[1],E=Object(n.useState)(ve),h=Object(l.a)(E,2),y=h[0],C=h[1],O=Object(n.useState)("cases"),j=Object(l.a)(O,2),x=j[0],k=j[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,L.getAllData();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getCountryData(m);case 2:t=e.sent,p(t),"WORLDWIDE"===m?C(ve):L.getCountryLocation(m).then((function(e){var t=e.lat,a=e.long;C({lat:t,lng:a})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]),a?r.a.createElement(de.Provider,{value:{selectedCountry:m,setSelectedCountry:d}},r.a.createElement(fe.Provider,{value:x},r.a.createElement(b.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(b.a,{item:!0,xs:12,md:6,lg:8,container:!0,direction:"column",justify:"space-between"},r.a.createElement(b.a,{item:!0},r.a.createElement(S,null)),r.a.createElement(b.a,{item:!0,style:{flex:1}},r.a.createElement(M,{coordinate:y})),r.a.createElement(b.a,{item:!0,container:!0,justify:"space-around",spacing:1},r.a.createElement(Y,{selectedCountryData:g,setViewType:k}))),r.a.createElement(b.a,{item:!0,xs:12,md:6,lg:4,container:!0,direction:"column",justify:"space-between"},r.a.createElement(b.a,{item:!0,style:{flex:1}}," ",r.a.createElement(ee,null)),r.a.createElement(b.a,{item:!0,container:!0},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(oe,null))))),r.a.createElement(b.a,{style:{margin:"25px auto auto auto"}},r.a.createElement(ie,null)))):r.a.createElement(me,null)}var pe=a(111),Ee=a(289),be=r.a.createContext(!1),he=r.a.createContext(void 0);function ye(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(pe.a)({palette:{type:a?"dark":"light"}});return r.a.createElement(Ee.a,{theme:o},r.a.createElement(be.Provider,{value:a},r.a.createElement(he.Provider,{value:c},r.a.createElement(R.a,{className:"App",elevation:0,style:{minHeight:"100vh"}},r.a.createElement(ge,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.efd21a81.chunk.js.map