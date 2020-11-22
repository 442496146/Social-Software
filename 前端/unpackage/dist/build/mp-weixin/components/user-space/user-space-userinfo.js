(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-space/user-space-userinfo"],{"2b49":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("5378"));function r(t){return t&&t.__esModule?t:{default:t}}var i={props:{userinfo:Object},computed:{getRegAge:function(){return this.userinfo.regtime?u.default.gettime.sumAge(this.userinfo.regtime):"未知"},getXingZuo:function(){return console.log(this.userinfo.birthday),this.userinfo.birthday&&"未知"!=this.userinfo.birthday&&""!==this.userinfo.birthday?u.default.gettime.getHoroscope(this.userinfo.birthday):"未知"}}};e.default=i},"3f3f":function(t,e,n){"use strict";var u,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}))},8845:function(t,e,n){"use strict";n.r(e);var u=n("3f3f"),r=n("97d9");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("c9f3");var f,o=n("f0c5"),s=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"192e9b4a",null,!1,u["a"],f);e["default"]=s.exports},"97d9":function(t,e,n){"use strict";n.r(e);var u=n("2b49"),r=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=r.a},c9f3:function(t,e,n){"use strict";var u=n("fa56"),r=n.n(u);r.a},fa56:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-space/user-space-userinfo-create-component',
    {
        'components/user-space/user-space-userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8845"))
        })
    },
    [['components/user-space/user-space-userinfo-create-component']]
]);
