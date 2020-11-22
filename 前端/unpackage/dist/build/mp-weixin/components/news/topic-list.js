(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list"],{"02ef":function(t,e,n){"use strict";n.r(e);var i=n("41d9"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},"0358":function(t,e,n){},"03d7":function(t,e,n){"use strict";n.r(e);var i=n("f8d4"),a=n("02ef");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("cf52");var u,o=n("f0c5"),f=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2481e561",null,!1,i["a"],u);e["default"]=f.exports},"41d9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{ischange:{type:Boolean,default:!1},item:Object,index:Number},methods:{opendetail:function(){if(this.ischange)return t.$emit("changeTopic",{id:this.item.id,title:this.item.title}),void t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=n}).call(this,n("543d")["default"])},cf52:function(t,e,n){"use strict";var i=n("0358"),a=n.n(i);a.a},f8d4:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("03d7"))
        })
    },
    [['components/news/topic-list-create-component']]
]);
