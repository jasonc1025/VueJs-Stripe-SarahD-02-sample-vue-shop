webpackJsonp([2],{"/TYz":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("rLIh"),r=a("iA8U"),n=!1;var i=function(e){n||a("kaG/")},c=a("VU/8")(o.a,r.a,!1,i,null,null);c.options.__file="pages\\index.vue",t.default=c.exports},"2Bca":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"aside{float:left;width:19.1489%}.content{float:right;width:79.7872%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;padding:0!important}@supports (display:grid){.capsule>*{width:auto;margin:0}}",""])},FKbW:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"aside[data-v-4762cd83]{background:#fff;float:left;padding:20px}.sidearea[data-v-4762cd83]{border-bottom:1px solid #ccc}.sidearea[data-v-4762cd83]:last-of-type{border:none}.callout[data-v-4762cd83]{padding:20px 0}.callout h4[data-v-4762cd83]{padding-bottom:10px}.sidearea[data-v-4762cd83]:first-of-type{padding-bottom:40px}label[data-v-4762cd83]{font-family:Playfair Display,serif;padding:15px 0;text-align:center}span[data-v-4762cd83]{font-family:Barlow,sans-serif}.max[data-v-4762cd83]{font-size:12px;float:right;color:#565656}.min[data-v-4762cd83]{float:left;font-size:12px;color:#565656}",""])},JufQ:function(e,t,a){"use strict";var o=a("oFWD"),r=a("N8rF"),n=!1;var i=function(e){n||a("xg01")},c=a("VU/8")(o.a,r.a,!1,i,"data-v-4762cd83",null);c.options.__file="components\\AppSidebar.vue",t.a=c.exports},KwuV:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidearea"},[a("h4",[e._v("Only Show Sale Items")]),a("div",{staticClass:"can-toggle demo-rebrand-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.trigger,expression:"trigger"}],attrs:{id:"e",type:"checkbox"},domProps:{checked:Array.isArray(e.trigger)?e._i(e.trigger,null)>-1:e.trigger},on:{change:[function(t){var a=e.trigger,o=t.target,r=!!o.checked;if(Array.isArray(a)){var n=e._i(a,null);o.checked?n<0&&(e.trigger=a.concat([null])):n>-1&&(e.trigger=a.slice(0,n).concat(a.slice(n+1)))}else e.trigger=r},e.updateSale]}}),e._m(0)])])};o._withStripped=!0;var r={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"e"}},[t("div",{staticClass:"can-toggle__switch",attrs:{"data-checked":"Yes","data-unchecked":"No"}})])}]};t.a=r},N8rF:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",[a("div",{staticClass:"sidearea"},[a("label",{attrs:{for:"pricerange"}},[e._v("Highest Price: "),a("span",[e._v("$"+e._s(e.pricerange))])]),a("input",{staticClass:"slider",attrs:{id:"pricerange",type:"range",min:e.min,max:e.max,step:"0.1"},domProps:{value:e.pricerange},on:{input:function(t){e.$emit("update:pricerange",t.target.value)}}}),a("span",{staticClass:"min"},[e._v("$"+e._s(e.min))]),a("span",{staticClass:"max"},[e._v("$"+e._s(e.max))])]),e.sale?e._e():a("app-switch"),e._m(0),e._m(1)],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sidearea callout"},[t("h4",[this._v("Special Sale!")]),t("p",[this._v("Shop now because half our items are greatly reduced")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sidearea callout"},[t("h4",[this._v("Contact Us")]),t("p",[this._v("Questions? Call us at 1-888-555-SHOP, we're happy to be of service.")])])}]};t.a=r},NZB7:function(e,t,a){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"masthead",style:"background:"+this.bkcolor},[t("img",{staticClass:"ppl-banner",attrs:{src:"/"+this.img+".png",alt:"Banner Image"}}),t("h1",[this._v(this._s(this.title))])])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};t.a=r},UAoI:function(e,t,a){"use strict";t.a={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},filters:{usdollar:function(e){return"$"+e}},methods:{addItem:function(){this.$store.commit("addItem",this.item)}}}},cDst:function(e,t,a){var o=a("xjDy");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("77a24786",o,!1,{sourceMap:!1})},iA8U:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"capsule"},[a("app-masthead"),a("div",{staticClass:"contain"},[a("app-sidebar",{attrs:{pricerange:e.highprice},on:{"update:pricerange":function(t){e.highprice=t}}}),a("transition-group",{staticClass:"content",attrs:{name:"items",tag:"section"}},e._l(e.products,function(e,t){return a("app-item",{key:"item",attrs:{item:e,index:t}})}))],1)],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[]};t.a=r},iZYI:function(e,t,a){"use strict";t.a={props:{bkcolor:{type:String,default:"#3b60ed"},title:{type:String,default:"Shoppity-Plus"},img:{type:String,default:"banner-ppl"}}}},jlTb:function(e,t,a){"use strict";var o=a("iZYI"),r=a("NZB7"),n=!1;var i=function(e){n||a("cDst")},c=a("VU/8")(o.a,r.a,!1,i,"data-v-0ea53284",null);c.options.__file="components\\AppMasthead.vue",t.a=c.exports},"kaG/":function(e,t,a){var o=a("2Bca");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("1a49cbb0",o,!1,{sourceMap:!1})},musj:function(e,t,a){"use strict";t.a={data:function(){return{trigger:this.checked}},computed:{checked:function(){return this.$store.state.sale}},methods:{updateSale:function(){this.$store.commit("switchSale")}}}},oFWD:function(e,t,a){"use strict";var o=a("sEUc");t.a={props:{sale:{type:Boolean,default:!1},pricerange:{type:[Number,String],default:300}},data:function(){return{min:0,max:400}},components:{AppSwitch:o.a}}},"p/c1":function(e,t,a){"use strict";var o=a("UAoI"),r=a("vubd"),n=!1;var i=function(e){n||a("q3Pt")},c=a("VU/8")(o.a,r.a,!1,i,"data-v-7c385e08",null);c.options.__file="components\\AppItem.vue",t.a=c.exports},q3Pt:function(e,t,a){var o=a("rooF");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("5d83076a",o,!1,{sourceMap:!1})},rLIh:function(e,t,a){"use strict";var o=a("JufQ"),r=a("jlTb"),n=a("p/c1");t.a={components:{AppSidebar:o.a,AppMasthead:r.a,AppItem:n.a},data:function(){return{highprice:300}},computed:{products:function(){var e=this;return this.$store.state.products.filter(function(t){return e.$store.state.sale?t.price<e.highprice&&t.sale:t.price<e.highprice})}}}},rooF:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".item[data-v-7c385e08]{border-radius:5px;padding:20px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.salepill[data-v-7c385e08]{background:#e82319;color:#fff;font-family:Barlow,sans-serif;position:absolute;right:30px;top:60px;padding:2px 10px 4px;text-transform:uppercase;font-size:13px;font-weight:700;border-radius:1000px}p[data-v-7c385e08]{font-size:18px}",""])},sEUc:function(e,t,a){"use strict";var o=a("musj"),r=a("KwuV"),n=!1;var i=function(e){n||a("tsin")},c=a("VU/8")(o.a,r.a,!1,i,"data-v-e989b746",null);c.options.__file="components\\AppSwitch.vue",t.a=c.exports},tsin:function(e,t,a){var o=a("yh6w");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("4d6e3a22",o,!1,{sourceMap:!1})},vubd:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item"},[a("p",[e._v(e._s(e.item.name))]),e.item.sale?a("span",{staticClass:"salepill"},[e._v("Sale")]):e._e(),a("img",{attrs:{src:"/"+e.item.img,alt:"Image of "+e.item.name}}),a("p",[e._v(e._s(e._f("usdollar")(e.item.price)))]),a("button",{staticClass:"add",on:{click:e.addItem}},[e._v("Add Item")])])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};t.a=r},xg01:function(e,t,a){var o=a("FKbW");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("4addd0bf",o,!1,{sourceMap:!1})},xjDy:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"h1[data-v-0ea53284]{color:#fff;position:relative;z-index:100;font-size:60px;padding:30px 50px}.bk[data-v-0ea53284]{position:absolute;top:0;left:0}.ppl-banner[data-v-0ea53284]{position:absolute;z-index:10}.masthead[data-v-0ea53284]{width:100%;height:150px;color:#fff;position:relative;overflow:hidden;margin:10px 0}",""])},yh6w:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"h4[data-v-e989b746]{margin:20px 0}.can-toggle[data-v-e989b746]{position:relative}.can-toggle [data-v-e989b746],.can-toggle [data-v-e989b746]:after,.can-toggle [data-v-e989b746]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.can-toggle input[type=checkbox][data-v-e989b746]{opacity:0;position:absolute;top:0;left:0}.can-toggle input[type=checkbox][disabled]~label[data-v-e989b746]{pointer-events:none}.can-toggle input[type=checkbox][disabled]~label .can-toggle__switch[data-v-e989b746]{opacity:.4}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-e989b746]:before{content:attr(data-unchecked);left:0}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-e989b746]:after{content:attr(data-checked)}.can-toggle label[data-v-e989b746]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.can-toggle label .can-toggle__label-text[data-v-e989b746]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:32px}.can-toggle label .can-toggle__switch[data-v-e989b746]{position:relative}.can-toggle label .can-toggle__switch[data-v-e989b746]:before{content:attr(data-checked);position:absolute;top:0;text-transform:uppercase;text-align:center}.can-toggle label .can-toggle__switch[data-v-e989b746]:after{content:attr(data-unchecked);position:absolute;z-index:5;text-transform:uppercase;text-align:center;background:#fff;-webkit-transform:translateZ(0);transform:translateZ(0)}.can-toggle.demo-rebrand-2[data-v-e989b746]{cursor:pointer}.can-toggle.demo-rebrand-2 input[type=checkbox][disabled]~label[data-v-e989b746]{color:hsla(0,0%,53%,.5)}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-e989b746],.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-e989b746]{background-color:#888}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-e989b746]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-e989b746]:after{color:#6f6f6f}.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label[data-v-e989b746]{color:#7b7b7b}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label[data-v-e989b746]:hover{color:#3059e8}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-e989b746]{background-color:#5576ed}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-e989b746]:after{color:#2752e7}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-e989b746],.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-e989b746]{background-color:#3e64ea}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-e989b746]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-e989b746]:after{color:#1844dd}.can-toggle.demo-rebrand-2 label[data-v-e989b746]{font-family:Barlow,sans-serif;cursor:pointer}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;background:#959595}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]:before{color:hsla(0,0%,100%,.7)}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]:after{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;color:#888}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-e989b746]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-e989b746]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-e989b746]:after{-webkit-transform:translate3d(27px,0,0);transform:translate3d(27px,0,0)}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-e989b746]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-e989b746]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.demo-rebrand-2 label[data-v-e989b746]{font-size:0}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]{height:30px;-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;border-radius:22px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]:before{left:22px;font-size:9px;line-height:30px;width:30px;padding:0 12px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]:after{top:3px;left:3px;border-radius:11px;width:27px;line-height:24px;font-size:9px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-e989b746]:hover:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.sidearea[data-v-e989b746]{padding-bottom:30px}",""])}});