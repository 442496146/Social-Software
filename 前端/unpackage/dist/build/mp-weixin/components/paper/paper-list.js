(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/paper/paper-list"],{"2c0a":function(e,n,t){"use strict";var u={uniBadge:function(){return t.e("components/uni-badge/uni-badge").then(t.bind(null,"f572"))}},i=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}))},"2e97":function(e,n,t){},7955:function(e,n,t){"use strict";t.r(n);var u=t("be26"),i=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=i.a},b55d:function(e,n,t){"use strict";var u=t("2e97"),i=t.n(u);i.a},be26:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){t.e("components/uni-badge/uni-badge").then(function(){return resolve(t("f572"))}.bind(null,t)).catch(t.oe)},i={components:{uniBadge:u},props:{item:Object,index:Number},computed:{getItemNoreadnum:function(){return this.item.noreadnum}},methods:{opendetail:function(){var e={userid:this.item.userid,username:this.item.username,userpic:this.item.userpic};this.User.navigate({url:"../../pages/user-chat/user-chat?userinfo="+JSON.stringify(e)}),this.$chat.Read(this.item)}}};n.default=i},f592:function(e,n,t){"use strict";t.r(n);var u=t("2c0a"),i=t("7955");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("b55d");var a,c=t("f0c5"),o=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"56ea31fe",null,!1,u["a"],a);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/paper/paper-list-create-component',
    {
        'components/paper/paper-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f592"))
        })
    },
    [['components/paper/paper-list-create-component']]
]);
