(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0b53":function(t,e,n){"use strict";var i=n("e9b4"),r=n.n(i);r.a},"3d8f":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},4604:function(t,e,n){"use strict";(function(t){n("a2a3");i(n("66fd"));var e=i(n("db00"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},dad6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4795")),r=a(n("5378"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||d(t,e)||c(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){r=!0,a=c}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw a}}return n}}function l(t){if(Array.isArray(t))return t}function f(t,e,n,i,r,a,o){try{var u=t[a](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(i,r)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function o(t){f(a,i,r,o,u,"next",t)}function u(t){f(a,i,r,o,u,"throw",t)}o(void 0)}))}}var h=function(){n.e("components/detail/detail-info").then(function(){return resolve(n("9b17"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/detail/comment-list").then(function(){return resolve(n("0264"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/user-chat/user-chat-bottom").then(function(){return resolve(n("91d1"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/common/more-share").then(function(){return resolve(n("438e"))}.bind(null,n)).catch(n.oe)},b={components:{detailInfo:h,commentList:p,userChatBottom:g,moreShare:v},data:function(){return{focus:!1,reply_id:0,sharedata:{title:"",url:"",titlepic:"",shareType:0},shareshow:!1,comment:{count:0,list:[]},detail:{userpic:"",username:"",sex:0,age:0,content:"",isguanzhu:!1,title:"",titlepic:"",morepic:[],video:!1,share:!1,path:"",sharenum:0,commentnum:0,goodnum:0,creat_time:0}}},onLoad:function(t){this.initdata(JSON.parse(t.detailData))},onNavigationBarButtonTap:function(t){0==t.index&&this.togle()},onShareAppMessage:function(t){return{title:this.detail.title,path:"/pages/detail/detail?detailData="+JSON.stringify(this.detail)}},methods:{__initShare:function(t){this.sharedata={title:t.title,content:t.title,url:"http://www.dishaxy.com/",titlepic:t.titlepic?t.titlepic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",shareType:0}},updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break}},updateGuanZhu:function(t){this.detail.isguanzhu=t.data},updateSupport:function(t){"ding"==t.do&&(this.detail.infonum.index=1,this.detail.goodnum++)},initdata:function(e){t.setNavigationBarTitle({title:e.title}),this.__initShare(e),t.showLoading({title:"Loading...",mask:!0}),e.morepic=[],e.content="",e.goodnum=e.infonum.dingnum,this.detail=e,this.comment.count=e.commentnum,this.getdetail(),this.comment.count&&this.getcomment()},getdetail:function(){var e=this;return m(i.default.mark((function n(){var r,a,u,c,s,d,l,f;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/post/"+e.detail.id);case 2:if(r=n.sent,a=o(r,2),u=a[0],c=a[1],s=e.$http.errorCheck(u,c,(function(){t.hideLoading()}),(function(){t.hideLoading()})),s){n.next=9;break}return n.abrupt("return");case 9:for(d=c.data.data.detail,e.detail.content=d.content,l=[],f=0;f<d.images.length;f++)l.push(d.images[f].url);return e.detail.morepic=l,e.detail.age=d.user.userinfo.age,e.detail.sex=d.user.userinfo.sex,e.detail.creat_time=d.creat_time,n.abrupt("return",t.hideLoading());case 18:case"end":return n.stop()}}),n)})))()},togle:function(){return t.showToast({title:"申请中...",icon:"none"})},submit:function(e){var n=this;return m(i.default.mark((function a(){var u,c,s,d,l,f,m,h;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.showLoading({title:"评论中...",mask:!1}),u=n.reply_id,i.next=4,n.$http.post("/post/comment",{post_id:n.detail.id,fid:u,data:e},{token:!0});case 4:if(c=i.sent,s=o(c,2),d=s[0],l=s[1],!d&&!l.data.errorCode){i.next=12;break}return f=l.data.errorCode?l.data.msg:"发送失败，请检查网络~",t.hideLoading(),i.abrupt("return",t.showToast({title:f,icon:"none"}));case 12:if(t.hideLoading(),t.showToast({title:"发送成功~"}),m={id:l.data.data.id,fid:u,userpic:n.User.userinfo.userpic,username:n.User.userinfo.username,time:r.default.gettime.gettime((new Date).getTime()),data:e},n.comment.count++,n.detail.commentnum++,0!==u){i.next=19;break}return i.abrupt("return",n.comment.list.push(m));case 19:h=n.comment.list.findIndex((function(t){return t.id===u})),h>-1&&n.comment.list.splice(h+1,0,m),t.$emit("updateData",{type:"updateComment",post_id:n.detail.id});case 22:case"end":return i.stop()}}),a)})))()},getcomment:function(){var t=this;return m(i.default.mark((function e(){var n,r,a,u,c;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/post/"+t.detail.id+"/comment");case 2:if(n=e.sent,r=o(n,2),a=r[0],u=r[1],t.$http.errorCheck(a,u)){e.next=8;break}return e.abrupt("return");case 8:c=u.data.data.list,t.comment.list=t.comment.list.concat(t.__ArrSort(c));case 10:case"end":return e.stop()}}),e)})))()},__ArrSort:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],i=0,a=function t(e,i,a){for(var o=0;o<e.length;o++){var u=e[o];u.fid==i&&(u.lev=a,n.push({id:u.id,fid:u.fid,userid:u.user.id,userpic:u.user.userpic,username:u.user.username,time:r.default.gettime.gettime(u.create_time),data:u.data}),t(e,u.id,a+1))}};return a(t,e,i),n},reply:function(t){this.reply_id=t,this.focus=!0},blur:function(){this.focus=!1,this.reply_id=0}}};e.default=b}).call(this,n("543d")["default"])},db00:function(t,e,n){"use strict";n.r(e);var i=n("3d8f"),r=n("e438");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("0b53");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=c.exports},e438:function(t,e,n){"use strict";n.r(e);var i=n("dad6"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},e9b4:function(t,e,n){}},[["4604","common/runtime","common/vendor"]]]);