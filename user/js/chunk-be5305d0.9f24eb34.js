(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be5305d0"],{"71f2":function(t,e,i){"use strict";var n=i("bec4"),s=i.n(n);s.a},bec4:function(t,e,i){},f7b0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"applyRecord"},[i("div",{staticClass:"apply-content"},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"c-item mrb-10"},[i("div",{staticClass:"c-item-header"},[i("label",[t._v("申请时间: "+t._s(e.applyTime))]),i("label",[1===e.state?i("mt-button",{staticStyle:{height:"25px"},attrs:{size:"small",type:"primary"},on:{click:function(i){return t.closeLoan(e.id,0)}}},[t._v("关闭")]):t._e(),0===e.state?i("mt-button",{staticStyle:{height:"25px"},attrs:{size:"small",type:"primary"},on:{click:function(i){return t.closeLoan(e.id,1)}}},[t._v("打开")]):t._e()],1)]),i("div",{staticClass:"c-item-content"},[i("div",{staticClass:"c-item-time"},[i("div",{staticClass:"c-item-num"},[t._v("申请金额: "+t._s(e.loanAmount)+"万")]),i("div",[t._v("申请期限: "+t._s(e.expire))])])])])})),0),i("div",{staticClass:"apply-footer"},[i("mt-button",{staticStyle:{width:"100%",height:"100%","border-radius":"0px"},attrs:{type:"primary"},on:{click:t.applyLoan}},[t._v("申请贷款")])],1)])},s=[],a=(i("b6ce"),i("5441")),c=i.n(a),o=i("aeef"),r={name:"ApplyRecord",data:function(){return{userId:this.$route.query.userId,list:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,e={userId:this.userId};Object(o["g"])(e).then((function(e){if(200===e.code){var i=e.data;t.list=i.records}}))},applyLoan:function(){this.$router.push({path:"/index"})},closeLoan:function(t,e){var i=this;0===e?c.a.confirm("关闭后银行将无法查看到你的借款需求?").then((function(n){Object(o["a"])({id:t,state:e}).then((function(t){200===t.code&&i.getList()}))})):c.a.confirm("确认打开该订单吗?").then((function(n){Object(o["a"])({id:t,state:e}).then((function(t){200===t.code&&i.getList()}))}))}}},l=r,u=(i("71f2"),i("2877")),d=Object(u["a"])(l,n,s,!1,null,"ee00dfd0",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-be5305d0.9f24eb34.js.map