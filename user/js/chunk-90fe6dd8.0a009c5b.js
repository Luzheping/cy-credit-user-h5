(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90fe6dd8"],{"0d3d":function(e,t,n){},1399:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modPhone"},[n("md-field",[n("md-input-item",{ref:"name",attrs:{"preview-type":"text",title:"新手机号",placeholder:"请输入手机号",maxlength:"11","is-title-latent":""},on:{change:e.handleChange,blur:e.scrollVal},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[n("div",{staticClass:"ft4",attrs:{slot:"right"},on:{click:e.handleGetCode},slot:"right"},[e._v(e._s(e.btnContent))])]),n("md-input-item",{ref:"name",attrs:{"preview-type":"text",title:"短信验证码",placeholder:"请输入短信验证码","is-title-latent":""},on:{change:e.handleChange,blur:e.scrollVal},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}}),n("md-input-item",{ref:"name",attrs:{"preview-type":"text",title:"图形验证码",placeholder:"请输入图形验证码","is-title-latent":""},on:{change:e.handleChange,blur:e.scrollVal},model:{value:e.imgCode,callback:function(t){e.imgCode=t},expression:"imgCode"}},[n("img",{staticStyle:{width:"80px"},attrs:{slot:"right",src:e.pic},on:{click:e.handleVerify},slot:"right"})])],1),n("md-button",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交修改")]),n("md-button",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}],staticClass:"btn-g",attrs:{type:"primary"}},[e._v("提交修改")])],1)},o=[],a=n("90fe"),s=n("b9eb"),r=n("b1d0"),l="",d=function(e){return r["a"].request({url:l+"/common/sendSms",method:"get",params:e})},c=function(e){return r["a"].request({url:l+"/common/get/verify",method:"get",params:e})},h=function(e){return r["a"].request({url:l+"/user/update/phone",method:"get",params:e})},u={name:"ModPhone",data:function(){return{phone:"",verifyCode:"",imgCode:"",flag:!1,btnContent:"获取验证码",time:0,pic:""}},mounted:function(){this.handleVerify()},methods:{scrollVal:function(){Object(a["b"])()},handleChange:function(){var e=this;e.phone&&e.verifyCode&&e.imgCode?e.flag=!0:e.flag=!1},handleVerify:function(){var e=this;c({}).then((function(t){if(200===t.code){var n=t.data;e.pic=n}}))},handleGetCode:function(){var e=this,t=/^[1][3-9][0-9]{9}$/,n={cellPhone:e.phone};e.phone?t.test(e.phone)?this.disabled||(d(n).then((function(e){if(200===e.status){var t=e.data;Object(s["a"])({content:t.message,position:"bottom",duration:3e3})}})),this.time=60,this.timer()):Object(s["a"])({content:"手机号码格式错误",position:"bottom",duration:3e3}):Object(s["a"])({content:"手机号码不能为空",position:"bottom",duration:3e3})},timer:function(){if(this.time>0){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var e=setTimeout(this.timer,1e3)}else 0===this.time&&(this.btnContent="获取验证码",clearTimeout(e),this.disabled=!1)},handleSubmit:function(){var e=this,t=this,n=/^[1][3-9][0-9]{9}$/,i={phone:t.phone,verifyCode:t.verifyCode,imageCode:t.imgCode};n.test(t.phone)?h(i).then((function(t){if(200===t.code){var n=t.data;console.log(n),e.$router.push("/personCenter")}})):Object(s["a"])({content:"手机号码格式错误",position:"bottom",duration:3e3})}}},m=u,f=(n("69c8"),n("2877")),p=Object(f["a"])(m,i,o,!1,null,"b8a9fa8a",null);t["default"]=p.exports},"69c8":function(e,t,n){"use strict";var i=n("0d3d"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-90fe6dd8.0a009c5b.js.map