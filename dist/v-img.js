(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-img'] = factory());
}(this, (function () { 'use strict';

var __cov_0GTwwl$GMPTkkuRWFDyc4w = (Function('return this'))();
if (!__cov_0GTwwl$GMPTkkuRWFDyc4w.__coverage__) { __cov_0GTwwl$GMPTkkuRWFDyc4w.__coverage__ = {}; }
__cov_0GTwwl$GMPTkkuRWFDyc4w = __cov_0GTwwl$GMPTkkuRWFDyc4w.__coverage__;
if (!(__cov_0GTwwl$GMPTkkuRWFDyc4w['/home/fahrenq/code/v-img/lib/ImgScreen.vue'])) {
   __cov_0GTwwl$GMPTkkuRWFDyc4w['/home/fahrenq/code/v-img/lib/ImgScreen.vue'] = {"path":"/home/fahrenq/code/v-img/lib/ImgScreen.vue","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":13}}},"2":{"name":"render","line":13,"loc":{"start":{"line":13,"column":25},"end":{"line":13,"column":43}}},"3":{"name":"click","line":14,"loc":{"start":{"line":14,"column":225},"end":{"line":14,"column":248}}},"4":{"name":"data","line":20,"loc":{"start":{"line":20,"column":8},"end":{"line":20,"column":24}}},"5":{"name":"close","line":31,"loc":{"start":{"line":31,"column":11},"end":{"line":31,"column":28}}},"6":{"name":"next","line":37,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":26}}},"7":{"name":"prev","line":45,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":26}}},"8":{"name":"showUI","line":53,"loc":{"start":{"line":53,"column":12},"end":{"line":53,"column":30}}},"9":{"name":"(anonymous_9)","line":60,"loc":{"start":{"line":60,"column":34},"end":{"line":60,"column":46}}},"10":{"name":"created","line":65,"loc":{"start":{"line":65,"column":11},"end":{"line":65,"column":30}}},"11":{"name":"(anonymous_11)","line":68,"loc":{"start":{"line":68,"column":37},"end":{"line":68,"column":50}}},"12":{"name":"(anonymous_12)","line":76,"loc":{"start":{"line":76,"column":38},"end":{"line":76,"column":50}}},"13":{"name":"(anonymous_13)","line":79,"loc":{"start":{"line":79,"column":41},"end":{"line":79,"column":53}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":11,"column":5}},"2":{"start":{"line":2,"column":2},"end":{"line":10,"column":3}},"3":{"start":{"line":3,"column":4},"end":{"line":5,"column":2130}},"4":{"start":{"line":5,"column":2130},"end":{"line":5,"column":2154}},"5":{"start":{"line":5,"column":2154},"end":{"line":9,"column":5}},"6":{"start":{"line":6,"column":6},"end":{"line":6,"column":37}},"7":{"start":{"line":8,"column":6},"end":{"line":8,"column":54}},"8":{"start":{"line":9,"column":5},"end":{"line":9,"column":29}},"9":{"start":{"line":14,"column":4},"end":{"line":14,"column":19}},"10":{"start":{"line":14,"column":19},"end":{"line":14,"column":47}},"11":{"start":{"line":14,"column":47},"end":{"line":14,"column":75}},"12":{"start":{"line":14,"column":75},"end":{"line":18,"column":1683}},"13":{"start":{"line":15,"column":10},"end":{"line":17,"column":11}},"14":{"start":{"line":16,"column":12},"end":{"line":16,"column":24}},"15":{"start":{"line":17,"column":11},"end":{"line":17,"column":23}},"16":{"start":{"line":21,"column":4},"end":{"line":27,"column":6}},"17":{"start":{"line":32,"column":6},"end":{"line":32,"column":71}},"18":{"start":{"line":33,"column":6},"end":{"line":33,"column":23}},"19":{"start":{"line":34,"column":6},"end":{"line":34,"column":33}},"20":{"start":{"line":35,"column":6},"end":{"line":35,"column":25}},"21":{"start":{"line":39,"column":6},"end":{"line":43,"column":7}},"22":{"start":{"line":40,"column":8},"end":{"line":40,"column":33}},"23":{"start":{"line":42,"column":8},"end":{"line":42,"column":35}},"24":{"start":{"line":47,"column":6},"end":{"line":51,"column":7}},"25":{"start":{"line":48,"column":8},"end":{"line":48,"column":33}},"26":{"start":{"line":50,"column":8},"end":{"line":50,"column":56}},"27":{"start":{"line":54,"column":6},"end":{"line":54,"column":23}},"28":{"start":{"line":58,"column":6},"end":{"line":58,"column":35}},"29":{"start":{"line":59,"column":6},"end":{"line":59,"column":28}},"30":{"start":{"line":60,"column":6},"end":{"line":62,"column":15}},"31":{"start":{"line":61,"column":8},"end":{"line":61,"column":32}},"32":{"start":{"line":66,"column":4},"end":{"line":66,"column":22}},"33":{"start":{"line":68,"column":4},"end":{"line":75,"column":7}},"34":{"start":{"line":70,"column":6},"end":{"line":70,"column":63}},"35":{"start":{"line":70,"column":48},"end":{"line":70,"column":63}},"36":{"start":{"line":72,"column":6},"end":{"line":72,"column":62}},"37":{"start":{"line":72,"column":48},"end":{"line":72,"column":62}},"38":{"start":{"line":74,"column":6},"end":{"line":74,"column":62}},"39":{"start":{"line":74,"column":48},"end":{"line":74,"column":62}},"40":{"start":{"line":76,"column":4},"end":{"line":78,"column":7}},"41":{"start":{"line":77,"column":6},"end":{"line":77,"column":21}},"42":{"start":{"line":79,"column":4},"end":{"line":81,"column":7}},"43":{"start":{"line":80,"column":6},"end":{"line":80,"column":22}}},"branchMap":{"1":{"line":2,"type":"if","locations":[{"start":{"line":2,"column":2},"end":{"line":2,"column":2}},{"start":{"line":2,"column":2},"end":{"line":2,"column":2}}]},"2":{"line":3,"type":"binary-expr","locations":[{"start":{"line":3,"column":15},"end":{"line":3,"column":28}},{"start":{"line":3,"column":32},"end":{"line":3,"column":72}}]},"3":{"line":5,"type":"if","locations":[{"start":{"line":5,"column":2154},"end":{"line":5,"column":2154}},{"start":{"line":5,"column":2154},"end":{"line":5,"column":2154}}]},"4":{"line":14,"type":"binary-expr","locations":[{"start":{"line":14,"column":56},"end":{"line":14,"column":68}},{"start":{"line":14,"column":72},"end":{"line":14,"column":74}}]},"5":{"line":14,"type":"cond-expr","locations":[{"start":{"line":14,"column":165},"end":{"line":18,"column":1669}},{"start":{"line":18,"column":1672},"end":{"line":18,"column":1680}}]},"6":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":10},"end":{"line":15,"column":10}},{"start":{"line":15,"column":10},"end":{"line":15,"column":10}}]},"7":{"line":18,"type":"cond-expr","locations":[{"start":{"line":18,"column":84},"end":{"line":18,"column":211}},{"start":{"line":18,"column":214},"end":{"line":18,"column":222}}]},"8":{"line":18,"type":"cond-expr","locations":[{"start":{"line":18,"column":425},"end":{"line":18,"column":903}},{"start":{"line":18,"column":906},"end":{"line":18,"column":914}}]},"9":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":382},"end":{"line":18,"column":395}},{"start":{"line":18,"column":399},"end":{"line":18,"column":422}}]},"10":{"line":18,"type":"cond-expr","locations":[{"start":{"line":18,"column":1030},"end":{"line":18,"column":1509}},{"start":{"line":18,"column":1512},"end":{"line":18,"column":1520}}]},"11":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":987},"end":{"line":18,"column":1000}},{"start":{"line":18,"column":1004},"end":{"line":18,"column":1027}}]},"12":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":6},"end":{"line":39,"column":6}},{"start":{"line":39,"column":6},"end":{"line":39,"column":6}}]},"13":{"line":47,"type":"if","locations":[{"start":{"line":47,"column":6},"end":{"line":47,"column":6}},{"start":{"line":47,"column":6},"end":{"line":47,"column":6}}]},"14":{"line":70,"type":"if","locations":[{"start":{"line":70,"column":6},"end":{"line":70,"column":6}},{"start":{"line":70,"column":6},"end":{"line":70,"column":6}}]},"15":{"line":70,"type":"binary-expr","locations":[{"start":{"line":70,"column":10},"end":{"line":70,"column":26}},{"start":{"line":70,"column":30},"end":{"line":70,"column":46}}]},"16":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":6},"end":{"line":72,"column":6}},{"start":{"line":72,"column":6},"end":{"line":72,"column":6}}]},"17":{"line":72,"type":"binary-expr","locations":[{"start":{"line":72,"column":10},"end":{"line":72,"column":26}},{"start":{"line":72,"column":30},"end":{"line":72,"column":46}}]},"18":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":6},"end":{"line":74,"column":6}},{"start":{"line":74,"column":6},"end":{"line":74,"column":6}}]},"19":{"line":74,"type":"binary-expr","locations":[{"start":{"line":74,"column":10},"end":{"line":74,"column":26}},{"start":{"line":74,"column":30},"end":{"line":74,"column":46}}]}}};
}
__cov_0GTwwl$GMPTkkuRWFDyc4w = __cov_0GTwwl$GMPTkkuRWFDyc4w['/home/fahrenq/code/v-img/lib/ImgScreen.vue'];
__cov_0GTwwl$GMPTkkuRWFDyc4w.s['1']++;(function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['1']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['2']++;if(document){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['1'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['3']++;var head=(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['2'][0]++,document.head)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['2'][1]++,document.getElementsByTagName('head')[0]),style=document.createElement('style'),css=' *[data-v-5928e1c7] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-5928e1c7] { height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, .7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-5928e1c7] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-5928e1c7] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, .3); height: 50px; z-index: 9999; } .count-v-img[data-v-5928e1c7] { font-family: \'Avenir\', Helvetica, Arial, sans-serif; font-size: 15px; color: white; margin-left: 10px; line-height: 50px; } .close-v-img[data-v-5928e1c7] { float: right; margin-right: 10px; font-family: \'Avenir\', Helvetica, Arial, sans-serif; color: #E5E6EB; font-size: 30px; line-height: 50px; cursor: pointer; -webkit-transition: color .4s ease-in-out; transition: color .4s ease-in-out; } .close-v-img[data-v-5928e1c7]:hover { color: white; } .prev-v-img svg[data-v-5928e1c7], .next-v-img svg[data-v-5928e1c7] { margin: 5px auto; } .prev-v-img[data-v-5928e1c7], .next-v-img[data-v-5928e1c7] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: \'Avenir\', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, .3); z-index: 1000; opacity: .3; -webkit-transition: opacity .3s ease-in-out; transition: opacity .3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-5928e1c7]:hover, .next-v-img[data-v-5928e1c7]:hover { opacity: 1; } .prev-v-img[data-v-5928e1c7] { left: 10px; } .next-v-img[data-v-5928e1c7] { right: 10px; } .v-img-fade-enter[data-v-5928e1c7], .v-img-fade-leave-to[data-v-5928e1c7] { opacity: 0; } .v-img-fade-enter-active[data-v-5928e1c7], .v-img-fade-leave-active[data-v-5928e1c7] { -webkit-transition: opacity .3s ease-in-out; transition: opacity .3s ease-in-out; } .body-fs-v-img {} ';__cov_0GTwwl$GMPTkkuRWFDyc4w.s['4']++;style.type='text/css';__cov_0GTwwl$GMPTkkuRWFDyc4w.s['5']++;if(style.styleSheet){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['3'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['6']++;style.styleSheet.cssText=css;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['3'][1]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['7']++;style.appendChild(document.createTextNode(css));}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['8']++;head.appendChild(style);}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['1'][1]++;}}());var ImgScreen = {render:function render(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['2']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['9']++;var _vm=this;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['10']++;var _h=_vm.$createElement;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['11']++;var _c=(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['4'][0]++,_vm._self._c)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['4'][1]++,_h);__cov_0GTwwl$GMPTkkuRWFDyc4w.s['12']++;return _c('transition',{attrs:{'appear':'','name':'v-img-fade'}},[!_vm.closed?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['5'][0]++,_c('div',{staticClass:'fullscreen-v-img',on:{'click':function click($event){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['3']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['13']++;if($event.target!==$event.currentTarget){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['6'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['14']++;return null;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['6'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['15']++;_vm.close();}}},[_c('div',{staticClass:'header-v-img'},[_vm.images.length>1?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['7'][0]++,_c('span',{staticClass:'count-v-img'},[_vm._v(_vm._s(_vm.currentImageIndex+1)+'/'+_vm._s(_vm.images.length)+' ')])):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['7'][1]++,_vm._e()),_c('span',{staticClass:'close-v-img',on:{'click':_vm.close}},[_vm._v('\xD7')])]),_c('transition',{attrs:{'appear':'','name':'v-img-fade'}},[(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['9'][0]++,_vm.visibleUI)&&(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['9'][1]++,_vm.images.length!==1)?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['8'][0]++,_c('span',{staticClass:'prev-v-img',on:{'click':_vm.prev}},[_c('svg',{attrs:{'width':'25','height':'25','viewBox':'0 0 1792 1915','xmlns':'http://www.w3.org/2000/svg'}},[_c('path',{attrs:{'d':'M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z','fill':'#fff'}})])])):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['8'][1]++,_vm._e())]),_c('transition',{attrs:{'appear':'','name':'v-img-fade'}},[(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['11'][0]++,_vm.visibleUI)&&(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['11'][1]++,_vm.images.length!==1)?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['10'][0]++,_c('span',{staticClass:'next-v-img',on:{'click':_vm.next}},[_c('svg',{attrs:{'width':'25','height':'25','viewBox':'0 0 1792 1915','xmlns':'http://www.w3.org/2000/svg'}},[_c('path',{attrs:{'d':'M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z','fill':'#fff'}})])])):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['10'][1]++,_vm._e())]),_c('div',{staticClass:'content-v-img'},[_c('img',{attrs:{'src':_vm.images[_vm.currentImageIndex]},on:{'click':_vm.next}})])],1)):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['5'][1]++,_vm._e())]);},staticRenderFns:[],_scopeId:'data-v-5928e1c7',data:function data(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['4']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['16']++;return{images:[],visibleUI:true,currentImageIndex:0,closed:true,uiTimeout:null};},methods:{close:function close(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['5']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['17']++;document.querySelector('body').classList.remove('body-fs-v-img');__cov_0GTwwl$GMPTkkuRWFDyc4w.s['18']++;this.images=[];__cov_0GTwwl$GMPTkkuRWFDyc4w.s['19']++;this.currentImageIndex=0;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['20']++;this.closed=true;},next:function next(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['6']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['21']++;if(this.currentImageIndex+1<this.images.length){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['12'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['22']++;this.currentImageIndex++;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['12'][1]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['23']++;this.currentImageIndex=0;}},prev:function prev(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['7']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['24']++;if(this.currentImageIndex>0){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['13'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['25']++;this.currentImageIndex--;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['13'][1]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['26']++;this.currentImageIndex=this.images.length-1;}},showUI:function showUI(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['8']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['27']++;var _this=this;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['28']++;clearTimeout(this.uiTimeout);__cov_0GTwwl$GMPTkkuRWFDyc4w.s['29']++;this.visibleUI=true;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['30']++;this.uiTimeout=setTimeout(function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['9']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['31']++;_this.visibleUI=false;},3500);}},created:function created(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['10']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['32']++;var _this2=this;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['33']++;window.addEventListener('keyup',function(e){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['11']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['34']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['15'][0]++,e.keyCode===27)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['15'][1]++,e.keyCode===81)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['14'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['35']++;_this2.close();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['14'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['36']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['17'][0]++,e.keyCode===39)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['17'][1]++,e.keyCode===76)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['16'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['37']++;_this2.next();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['16'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['38']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['19'][0]++,e.keyCode===37)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['19'][1]++,e.keyCode===72)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['18'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['39']++;_this2.prev();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['18'][1]++;}});__cov_0GTwwl$GMPTkkuRWFDyc4w.s['40']++;window.addEventListener('scroll',function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['12']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['41']++;_this2.close();});__cov_0GTwwl$GMPTkkuRWFDyc4w.s['42']++;window.addEventListener('mousemove',function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['13']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['43']++;_this2.showUI();});}};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var __cov_WuSw60ZQZcI1aW7neh6dWA = (Function('return this'))();
if (!__cov_WuSw60ZQZcI1aW7neh6dWA.__coverage__) { __cov_WuSw60ZQZcI1aW7neh6dWA.__coverage__ = {}; }
__cov_WuSw60ZQZcI1aW7neh6dWA = __cov_WuSw60ZQZcI1aW7neh6dWA.__coverage__;
if (!(__cov_WuSw60ZQZcI1aW7neh6dWA['/home/fahrenq/code/v-img/lib/index.js'])) {
   __cov_WuSw60ZQZcI1aW7neh6dWA['/home/fahrenq/code/v-img/lib/index.js'] = {"path":"/home/fahrenq/code/v-img/lib/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"install","line":6,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":36}}},"2":{"name":"bind","line":10,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":37}}},"3":{"name":"(anonymous_3)","line":45,"loc":{"start":{"line":45,"column":35},"end":{"line":45,"column":47}}},"4":{"name":"(anonymous_4)","line":52,"loc":{"start":{"line":52,"column":43},"end":{"line":52,"column":56}}}},"statementMap":{"1":{"start":{"line":6,"column":0},"end":{"line":61,"column":2}},"2":{"start":{"line":7,"column":2},"end":{"line":7,"column":37}},"3":{"start":{"line":9,"column":2},"end":{"line":60,"column":5}},"4":{"start":{"line":12,"column":6},"end":{"line":12,"column":29}},"5":{"start":{"line":13,"column":6},"end":{"line":13,"column":23}},"6":{"start":{"line":14,"column":6},"end":{"line":14,"column":38}},"7":{"start":{"line":17,"column":6},"end":{"line":21,"column":7}},"8":{"start":{"line":18,"column":8},"end":{"line":18,"column":48}},"9":{"start":{"line":19,"column":8},"end":{"line":19,"column":39}},"10":{"start":{"line":20,"column":8},"end":{"line":20,"column":45}},"11":{"start":{"line":24,"column":6},"end":{"line":24,"column":59}},"12":{"start":{"line":25,"column":6},"end":{"line":27,"column":7}},"13":{"start":{"line":26,"column":8},"end":{"line":26,"column":63}},"14":{"start":{"line":29,"column":6},"end":{"line":29,"column":70}},"15":{"start":{"line":29,"column":16},"end":{"line":29,"column":70}},"16":{"start":{"line":32,"column":6},"end":{"line":32,"column":31}},"17":{"start":{"line":35,"column":6},"end":{"line":35,"column":29}},"18":{"start":{"line":36,"column":6},"end":{"line":41,"column":7}},"19":{"start":{"line":37,"column":8},"end":{"line":37,"column":52}},"20":{"start":{"line":38,"column":8},"end":{"line":38,"column":50}},"21":{"start":{"line":39,"column":8},"end":{"line":39,"column":60}},"22":{"start":{"line":40,"column":8},"end":{"line":40,"column":65}},"23":{"start":{"line":45,"column":6},"end":{"line":58,"column":9}},"24":{"start":{"line":46,"column":8},"end":{"line":46,"column":70}},"25":{"start":{"line":48,"column":8},"end":{"line":48,"column":131}},"26":{"start":{"line":49,"column":8},"end":{"line":56,"column":9}},"27":{"start":{"line":50,"column":10},"end":{"line":50,"column":39}},"28":{"start":{"line":52,"column":10},"end":{"line":54,"column":14}},"29":{"start":{"line":53,"column":12},"end":{"line":53,"column":48}},"30":{"start":{"line":55,"column":10},"end":{"line":55,"column":63}},"31":{"start":{"line":57,"column":8},"end":{"line":57,"column":37}}},"branchMap":{"1":{"line":14,"type":"binary-expr","locations":[{"start":{"line":14,"column":18},"end":{"line":14,"column":29}},{"start":{"line":14,"column":33},"end":{"line":14,"column":37}}]},"2":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":6},"end":{"line":17,"column":6}},{"start":{"line":17,"column":6},"end":{"line":17,"column":6}}]},"3":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":17},"end":{"line":18,"column":37}},{"start":{"line":18,"column":41},"end":{"line":18,"column":47}}]},"4":{"line":19,"type":"binary-expr","locations":[{"start":{"line":19,"column":14},"end":{"line":19,"column":31}},{"start":{"line":19,"column":35},"end":{"line":19,"column":38}}]},"5":{"line":20,"type":"binary-expr","locations":[{"start":{"line":20,"column":16},"end":{"line":20,"column":35}},{"start":{"line":20,"column":39},"end":{"line":20,"column":44}}]},"6":{"line":24,"type":"binary-expr","locations":[{"start":{"line":24,"column":44},"end":{"line":24,"column":49}},{"start":{"line":24,"column":53},"end":{"line":24,"column":57}}]},"7":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":6},"end":{"line":25,"column":6}},{"start":{"line":25,"column":6},"end":{"line":25,"column":6}}]},"8":{"line":25,"type":"binary-expr","locations":[{"start":{"line":25,"column":10},"end":{"line":25,"column":23}},{"start":{"line":25,"column":27},"end":{"line":25,"column":44}}]},"9":{"line":29,"type":"if","locations":[{"start":{"line":29,"column":6},"end":{"line":29,"column":6}},{"start":{"line":29,"column":6},"end":{"line":29,"column":6}}]},"10":{"line":36,"type":"if","locations":[{"start":{"line":36,"column":6},"end":{"line":36,"column":6}},{"start":{"line":36,"column":6},"end":{"line":36,"column":6}}]},"11":{"line":49,"type":"if","locations":[{"start":{"line":49,"column":8},"end":{"line":49,"column":8}},{"start":{"line":49,"column":8},"end":{"line":49,"column":8}}]},"12":{"line":53,"type":"binary-expr","locations":[{"start":{"line":53,"column":19},"end":{"line":53,"column":38}},{"start":{"line":53,"column":42},"end":{"line":53,"column":47}}]}}};
}
__cov_WuSw60ZQZcI1aW7neh6dWA = __cov_WuSw60ZQZcI1aW7neh6dWA['/home/fahrenq/code/v-img/lib/index.js'];
__cov_WuSw60ZQZcI1aW7neh6dWA.s['1']++;var install=function install(Vue){__cov_WuSw60ZQZcI1aW7neh6dWA.f['1']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['2']++;var screen=Vue.extend(ImgScreen);__cov_WuSw60ZQZcI1aW7neh6dWA.s['3']++;Vue.directive('img',{bind:function bind(el,binding){__cov_WuSw60ZQZcI1aW7neh6dWA.f['2']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['4']++;var cursor='pointer';__cov_WuSw60ZQZcI1aW7neh6dWA.s['5']++;var src=el.src;__cov_WuSw60ZQZcI1aW7neh6dWA.s['6']++;var group=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['1'][0]++,binding.arg)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['1'][1]++,null);__cov_WuSw60ZQZcI1aW7neh6dWA.s['7']++;if(typeof binding.value!=='undefined'){__cov_WuSw60ZQZcI1aW7neh6dWA.b['2'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['8']++;cursor=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['3'][0]++,binding.value.cursor)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['3'][1]++,cursor);__cov_WuSw60ZQZcI1aW7neh6dWA.s['9']++;src=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['4'][0]++,binding.value.src)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['4'][1]++,src);__cov_WuSw60ZQZcI1aW7neh6dWA.s['10']++;group=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['5'][0]++,binding.value.group)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['5'][1]++,group);}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['2'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['11']++;el.setAttribute('data-vue-img-group',(__cov_WuSw60ZQZcI1aW7neh6dWA.b['6'][0]++,group)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['6'][1]++,null));__cov_WuSw60ZQZcI1aW7neh6dWA.s['12']++;if((__cov_WuSw60ZQZcI1aW7neh6dWA.b['8'][0]++,binding.value)&&(__cov_WuSw60ZQZcI1aW7neh6dWA.b['8'][1]++,binding.value.src)){__cov_WuSw60ZQZcI1aW7neh6dWA.b['7'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['13']++;el.setAttribute('data-vue-img-src',binding.value.src);}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['7'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['14']++;if(!src){__cov_WuSw60ZQZcI1aW7neh6dWA.b['9'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['15']++;console.error('v-img element missing src parameter.');}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['9'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['16']++;el.style.cursor=cursor;__cov_WuSw60ZQZcI1aW7neh6dWA.s['17']++;var vm=window.vueImg;__cov_WuSw60ZQZcI1aW7neh6dWA.s['18']++;if(!vm){__cov_WuSw60ZQZcI1aW7neh6dWA.b['10'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['19']++;var element=document.createElement('div');__cov_WuSw60ZQZcI1aW7neh6dWA.s['20']++;element.setAttribute('id','imageScreen');__cov_WuSw60ZQZcI1aW7neh6dWA.s['21']++;document.querySelector('body').appendChild(element);__cov_WuSw60ZQZcI1aW7neh6dWA.s['22']++;vm=window.vueImg=new screen().$mount('#imageScreen');}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['10'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['23']++;el.addEventListener('click',function(){__cov_WuSw60ZQZcI1aW7neh6dWA.f['3']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['24']++;document.querySelector('body').classList.add('body-fs-v-img');__cov_WuSw60ZQZcI1aW7neh6dWA.s['25']++;var images=[].concat(toConsumableArray(document.querySelectorAll('img[data-vue-img-group='+group+']')));__cov_WuSw60ZQZcI1aW7neh6dWA.s['26']++;if(images.length==0){__cov_WuSw60ZQZcI1aW7neh6dWA.b['11'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['27']++;Vue.set(vm,'images',[src]);}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['11'][1]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['28']++;Vue.set(vm,'images',images.map(function(e){__cov_WuSw60ZQZcI1aW7neh6dWA.f['4']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['29']++;return(__cov_WuSw60ZQZcI1aW7neh6dWA.b['12'][0]++,e.dataset.vueImgSrc)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['12'][1]++,e.src);}));__cov_WuSw60ZQZcI1aW7neh6dWA.s['30']++;Vue.set(vm,'currentImageIndex',images.indexOf(el));}__cov_WuSw60ZQZcI1aW7neh6dWA.s['31']++;Vue.set(vm,'closed',false);});}});};

return install;

})));
//# sourceMappingURL=v-img.js.map
