(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{463:function(t,e,n){var content=n(467);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("7cc328c5",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return m}));n(29),n(30),n(12);var r=n(21),o=(n(140),n(142));function l(content){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,text=Object(o.a)(content,!0,!0);return text.length>t?text.slice(0,t)+"...":text}function c(t,content){var e,n=t.startsWith("og:")?"property":"name";return e={hid:t},Object(r.a)(e,n,t),Object(r.a)(e,"content",content),e}function m(e){var title=e.title,n=e.description,r=e.coverUrl;function o(t){return"string"==typeof t?t:"function"==typeof t?t.call(this):t.toString()}return function(){var e=t.env.SITE_BASE,l=o.bind(this),head={meta:[]};if(title){var m="".concat(l(title)).concat(" / g0v Summit 2020 台灣零時政府雙年會");head.title=m,head.meta.push(c("og:title",m)),head.meta.push(c("twitter:title",m))}if(n){var d=l(n);head.meta.push(c("description",d)),head.meta.push(c("og:description",d)),head.meta.push(c("twitter:description",d))}if(r){var f=l(r);f.startsWith("/")&&(f="".concat(e).concat(r)),head.meta.push(c("og:image",f)),head.meta.push(c("twitter:image",f)),head.meta.push(c("twitter:card","summary_large_image"))}if(this&&(title||n||r)){var v="".concat(e).concat(this.$route.path);head.meta.push(c("og:url",v))}return head}}}).call(this,n(141))},466:function(t,e,n){"use strict";var r=n(463);n.n(r).a},467:function(t,e,n){(e=n(22)(!1)).push([t.i,'.timeline[data-v-19701650]{position:relative;background-color:#50bc83;color:#fff;line-height:1.5;margin:2rem 0}.timeline[data-v-19701650]:before{content:"";display:block;position:absolute;background-color:#555}@media (max-width:800px){.timeline[data-v-19701650]{padding:2rem}.timeline[data-v-19701650]:before{top:0;left:2.75rem;width:.5rem;height:100%}}@media (min-width:801px){.timeline[data-v-19701650]{padding:8rem 4rem}.timeline[data-v-19701650]:before{top:calc(50% - .25rem);left:0;width:100%;height:.5rem}}.timeline-container[data-v-19701650]{max-width:60rem;margin:0 auto;position:relative;display:flex;justify-content:center}@media (max-width:800px){.timeline-container[data-v-19701650]{flex-direction:column}}.timeline-container>.point>.label>.date[data-v-19701650]{font-size:1.125rem}.timeline-container>.point>.label>.title[data-v-19701650]{font-size:1.25rem;line-height:1.375}.timeline-container>.point>.label>.description[data-v-19701650]{font-size:.875rem;line-height:1.25}.timeline-container>.point.small>.circle[data-v-19701650]{width:1.2rem;height:1.2rem;transform:translate(.4rem,.4rem)}@media (max-width:800px){.timeline-container>.point[data-v-19701650]{position:relative;margin:.5rem 0}.timeline-container>.point>.circle[data-v-19701650]{position:absolute;top:0;left:0;width:2rem;height:2rem;border-radius:50%;background-color:#fff}.timeline-container>.point>.label[data-v-19701650]{margin-left:2.5rem}}@media (min-width:801px){.timeline-container>.point[data-v-19701650]{position:relative;flex-grow:1}.timeline-container>.point.large[data-v-19701650]{flex-grow:2}.timeline-container>.point>.circle[data-v-19701650]{width:2rem;height:2rem;border-radius:50%;background-color:#fff}.timeline-container>.point>.label[data-v-19701650]{position:absolute;left:0}.timeline-container>.point:nth-child(odd)>.label[data-v-19701650]{bottom:2.5rem}.timeline-container>.point:nth-child(2n)>.label[data-v-19701650]{top:2.5rem}}',""]),t.exports=e},471:function(t,e,n){var content=n(485);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4fc67e17",content,!0,{sourceMap:!1})},472:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"CFP_TITLE":"We are calling for proposals!","CFP_GOTO_LIST":"Read Proposals","CFP_SUBMIT":"Submit Your Idea!"},"zh":{"CFP_TITLE":"議程現正徵集中","CFP_GOTO_LIST":"看投稿","CFP_SUBMIT":"馬上投！"}}'),delete t.options._Ctor}},475:function(t,e,n){"use strict";var r={props:{points:{type:Array,default:function(){return[]}}}},o=(n(466),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline"},[n("div",{staticClass:"timeline-container"},t._l(t.points,(function(e,r){return n("div",{key:r,staticClass:"point",class:e.class},[n("div",{staticClass:"circle"}),t._v(" "),n("div",{staticClass:"label"},[e.date?n("div",{staticClass:"date"},[t._v("\n          "+t._s(e.date)+"\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),e.description?n("div",{staticClass:"description"},[t._v("\n          "+t._s(e.description)+"\n        ")]):t._e()])])})),0)])}),[],!1,null,"19701650",null);e.a=component.exports},483:function(t,e,n){t.exports=n.p+"img/e24c283.svg"},484:function(t,e,n){"use strict";var r=n(471);n.n(r).a},485:function(t,e,n){var r=n(22),o=n(74),l=n(486);e=r(!1);var c=o(l);e.push([t.i,".homepage[data-v-f4b1a7aa]{max-width:100vw;overflow-x:hidden}.homepage__cfp[data-v-f4b1a7aa]{background:#50bc83}.homepage__cfp a[data-v-f4b1a7aa]{letter-spacing:2px;transition:.3s ease-in-out}.homepage>.landing[data-v-f4b1a7aa]{height:45vh;max-height:30rem;position:relative;background:url("+c+");background-position:50%;background-size:cover;background-repeat:no-repeat;margin-bottom:2rem}.homepage>.landing .g0v-logo[data-v-f4b1a7aa]{width:28vw;min-width:10rem;max-width:30rem;-webkit-filter:drop-shadow(0 0 .25rem #fff);filter:drop-shadow(0 0 .25rem #fff)}@media (max-width:800px){.homepage>.landing .g0v-logo[data-v-f4b1a7aa]{width:50vw}}",""]),t.exports=e},486:function(t,e,n){t.exports=n.p+"img/e79c4dc.png"},487:function(t,e,n){"use strict";var r=n(472),o=n.n(r);e.default=o.a},503:function(t,e,n){"use strict";n.r(e);var r=n(464),o={components:{Timeline:n(475).a},data:function(){return{bigTimeline:[{title:"summit 2014",class:"small"},{title:"summit 2016",class:"small"},{title:"summit 2018",class:"small"},{title:"summit 2020 "+this.$t("cfp"),class:"large"},{date:"7/15",title:this.$t("cfpClosed"),description:this.$t("cfpClosedDescription"),class:"large"},{date:"8/2",title:this.$t("cfpFinalized"),class:"large"},{date:"12/3-6",title:"summit 2020",class:"large"}]}},head:Object(r.a)({description:function(){return Object(r.b)(this.$t("article/summitAbout"))}})},l=(n(484),n(16)),c=n(487),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"homepage"},[r("div",{staticClass:"landing flex justify-center items-center bg-near-white"},[r("img",{staticClass:"g0v-logo",attrs:{src:n(483)}})]),t._v(" "),r("div",{staticClass:"homepage__cfp pv3 pv4-l mb3 mb4-l shadow-3"},[r("div",{staticClass:"flex flex-column flex-row-l items-center justify-center"},[r("span",{staticClass:"f4 f3-l white tc lh-title"},[t._v("\n        "+t._s(t.$t("CFP_TITLE"))+"\n        "),r("i",{staticClass:"fa fa-heart red"})]),t._v(" "),r("a",{staticClass:"pv1 ph3 mv3 mv0-l mh3-l f5 bg-white shadow-1 br-pill mid-gray hover-black",attrs:{href:"https://propose.summit2020.g0v.tw/proposal-list",rel:"noopener",target:"_blank"}},[t._v("\n        "+t._s(t.$t("CFP_GOTO_LIST"))+"\n      ")]),t._v(" "),r("a",{staticClass:"pv1 ph3 f5 bg-mid-gray white shadow-1 br-pill hover-bg-dark-green b",attrs:{href:"https://propose.summit2020.g0v.tw/",rel:"noopener",target:"_blank"}},[t._v("\n        "+t._s(t.$t("CFP_SUBMIT"))+"\n      ")])])]),t._v(" "),r("div",{staticClass:"text-container with-bubbles"},[r("summit-markdown",{attrs:{content:t.$t("article/communityIntro")}}),t._v(" "),r("summit-markdown",{attrs:{content:t.$t("article/summitAbout")}}),t._v(" "),r("summit-markdown",{attrs:{content:t.$t("article/summitIntro")}}),t._v(" "),r("summit-markdown",{attrs:{content:t.$t("article/summitContent")}})],1),t._v(" "),r("timeline",{attrs:{points:t.bigTimeline}}),t._v(" "),r("div",{staticClass:"text-container with-bubbles"},[r("summit-markdown",{attrs:{content:t.$t("article/summitGuidelines")}})],1)],1)}),[],!1,null,"f4b1a7aa",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports}}]);