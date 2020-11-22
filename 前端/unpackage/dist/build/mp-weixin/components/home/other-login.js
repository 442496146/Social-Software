(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/home/other-login"],{4672:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("4795"));function o(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){i(a,r,o,c,u,"next",n)}function u(n){i(a,r,o,c,u,"throw",n)}c(void 0)}))}}function c(n,t){return d(n)||f(n,t)||s(n,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(n,t){if(n){if("string"===typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,t):void 0}}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done);r=!0)if(e.push(a.value),t&&e.length===t)break}catch(u){o=!0,i=u}finally{try{r||null==c["return"]||c["return"]()}finally{if(o)throw i}}return e}}function d(n){if(Array.isArray(n))return n}var v={props:{noback:{type:Boolean,default:!0}},data:function(){return{providerList:[]}},onReady:function(){},methods:{mpGetUserInfo:function(t){var e=this;if(n.showLoading({title:"登录中...",mask:!0}),"getUserInfo:ok"!==t.detail.errMsg)return n.hideLoading(),void n.showModal({title:"获取用户信息失败",content:"错误原因"+t.detail.errMsg,showCancel:!1});var r=t.detail.userInfo;n.login({provider:"weixin",success:function(n){e.MpLogin({url:"/wxlogin",code:n.code,nickName:r.nickName,avatarUrl:r.avatarUrl})},complete:function(){n.hideLoading()}})},MpLogin:function(t){var e=this;this.$http.post(t.url,{code:t.code,nickName:t.nickName,avatarUrl:t.avatarUrl}).then((function(t){var r=c(t,2),o=r[0],i=r[1];if(!e.$http.errorCheck(o,i))return!1;console.log(i.data.data),e.User.token=i.data.data.token,e.User.userinfo=e.User.__formatUserinfo(i.data.data),n.setStorageSync("userinfo",e.User.userinfo),n.setStorageSync("token",e.User.token),e.User.userinfo.id&&e.User.getCounts(),e.User.userinfo.id&&e.$chat.Open(),n.showToast({title:"登录成功"}),e.$emit("logining"),e.noback||n.navigateBack()}))},getLoginAuth:function(){var t=this;n.getProvider({service:"oauth",success:function(n){t.providerList=n.provider.map((function(n){var t="",e="";switch(n){case"weixin":t="微信登录",e="weixin";break;case"qq":t="QQ登录",e="QQ";break;case"sinaweibo":t="新浪微博登录",e="xinlangweibo";break}return{name:t,icon:e,id:n}}))},fail:function(n){console.log("获取登录通道失败",n)}})},tologin:function(t){var e=this;n.login({provider:t.id,success:function(r){n.showLoading({title:"登陆中...",mask:!1}),console.log(r),n.getUserInfo({provider:t.id,success:function(n){console.log(n),console.log(JSON.stringify(n.userInfo));var o=e.User.__formatOtherLogin(t.id,Object.assign(n,r));e.loginEvent(o)}}),console.log("登录成功，保存到本地存储，修改当前用户登录状态")},fail:function(n){console.log("login fail:",n)},complete:function(){n.hideLoading()}})},loginEvent:function(n){var t=this;return a(r.default.mark((function e(){var o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.User.login({url:"/user/otherlogin",data:n,Noback:t.noback});case 2:o=e.sent,o&&t.$emit("logining");case 4:case"end":return e.stop()}}),e)})))()}}};t.default=v}).call(this,e("543d")["default"])},6106:function(n,t,e){"use strict";e.r(t);var r=e("eb4c"),o=e("f7a1");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("e236");var a,c=e("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},dc35:function(n,t,e){},e236:function(n,t,e){"use strict";var r=e("dc35"),o=e.n(r);o.a},eb4c:function(n,t,e){"use strict";var r,o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}))},f7a1:function(n,t,e){"use strict";e.r(t);var r=e("4672"),o=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/home/other-login-create-component',
    {
        'components/home/other-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6106"))
        })
    },
    [['components/home/other-login-create-component']]
]);
