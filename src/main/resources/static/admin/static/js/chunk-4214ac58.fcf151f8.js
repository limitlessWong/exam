(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4214ac58"],{"294d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"line-height":"1.8"}},[1==e.qType||2==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),n("div",{staticClass:"q-content"},e._l(e.question.items,(function(t){return n("span",{key:t.id,staticClass:"q-item-contain"},[n("span",{staticClass:"q-item-prefix"},[e._v(e._s(t.prefix))]),n("span",{staticClass:"q-item-content",domProps:{innerHTML:e._s(t.content)}})])})),0)]):3==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:e._s(e.question.title)}}),n("span",[e._v("（")]),e._l(e.question.items,(function(t){return n("span",{key:t.id},[n("span",{staticClass:"q-item-content",domProps:{innerHTML:e._s(t.content)}})])})),n("span",[e._v("）")])],2):4==e.qType||5==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}})]):n("div")])},i=[],o=(n("513c"),{name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{}}),r=o,u=n("9ca4"),s=Object(u["a"])(r,a,i,!1,null,null,null);t["a"]=s.exports},"2ac8":function(e,t,n){"use strict";var a=n("b775");t["a"]={pageList:function(e){return Object(a["a"])("/api/admin/question/page",e)},edit:function(e){return Object(a["a"])("/api/admin/question/edit",e)},select:function(e){return Object(a["a"])("/api/admin/question/select/"+e)},deleteQuestion:function(e){return Object(a["a"])("/api/admin/question/delete/"+e)}}},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("513c");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,n){var a=u(),i=e-a,s=20,l=0;t="undefined"===typeof t?500:t;var c=function e(){l+=s;var u=Math.easeInOutQuad(l,a,i,t);r(u),l<t?o(e):n&&"function"===typeof n&&n()};c()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=l,d=(n("39d5"),n("9ca4")),p=Object(d["a"])(c,a,i,!1,null,"90fd946a",null);t["a"]=p.exports},"39d5":function(e,t,n){"use strict";var a=n("aaac"),i=n.n(a);i.a},"3af7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"queryForm",attrs:{model:e.queryParam,inline:!0}},[n("el-form-item",{attrs:{label:"题目ID："}},[n("el-input",{attrs:{clearable:""},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1),n("el-form-item",{attrs:{label:"部门："}},[n("el-select",{attrs:{placeholder:"部门",clearable:""},on:{change:e.levelChange},model:{value:e.queryParam.level,callback:function(t){e.$set(e.queryParam,"level",t)},expression:"queryParam.level"}},e._l(e.levelEnum,(function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"学科："}},[n("el-select",{attrs:{clearable:""},model:{value:e.queryParam.subjectId,callback:function(t){e.$set(e.queryParam,"subjectId",t)},expression:"queryParam.subjectId"}},e._l(e.subjectFilter,(function(e){return n("el-option",{key:e.id,attrs:{value:e.id,label:e.name+" ( "+e.levelName+" )"}})})),1)],1),n("el-form-item",{attrs:{label:"题型："}},[n("el-select",{attrs:{clearable:""},model:{value:e.queryParam.questionType,callback:function(t){e.$set(e.queryParam,"questionType",t)},expression:"queryParam.questionType"}},e._l(e.questionType,(function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("查询")]),n("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e._l(e.editUrlEnum,(function(t){return n("el-button",{key:t.key,attrs:{type:"warning",size:"mini"},on:{click:function(n){return e.$router.push({path:t.value})}}},[e._v(e._s(t.name)+" ")])})),n("el-button",{staticClass:"link-left",attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("添加")])],2)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"id",label:"Id",width:"90px"}}),n("el-table-column",{attrs:{prop:"subjectId",label:"学科",formatter:e.subjectFormatter,width:"120px"}}),n("el-table-column",{attrs:{prop:"questionType",label:"题型",formatter:e.questionTypeFormatter,width:"70px"}}),n("el-table-column",{attrs:{prop:"shortTitle",label:"题干","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"score",label:"分数",width:"60px"}}),n("el-table-column",{attrs:{prop:"difficult",label:"难度",width:"60px"}}),n("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160px"}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"220px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.showQuestion(a)}}},[e._v("预览")]),n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.editQuestion(a)}}},[e._v("编辑")]),n("el-button",{staticClass:"link-left",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.deleteQuestion(a)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParam.pageIndex,limit:e.queryParam.pageSize},on:{"update:page":function(t){return e.$set(e.queryParam,"pageIndex",t)},"update:limit":function(t){return e.$set(e.queryParam,"pageSize",t)},pagination:e.search}}),n("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.questionShow.dialog},on:{"update:visible":function(t){return e.$set(e.questionShow,"dialog",t)}}},[n("QuestionShow",{attrs:{qType:e.questionShow.qType,question:e.questionShow.question,qLoading:e.questionShow.loading}})],1)],1)},i=[],o=(n("dbb3"),n("e35a"),n("9cf3"),n("d0f5")),r=n("9f3a"),u=n("333d"),s=n("294d"),l=n("2ac8"),c={components:{Pagination:u["a"],QuestionShow:s["a"]},data:function(){return{queryParam:{id:null,questionType:null,level:null,subjectId:null,pageIndex:1,pageSize:10},subjectFilter:null,listLoading:!0,tableData:[],total:0,questionShow:{qType:0,dialog:!1,question:null,loading:!1}}},created:function(){this.initSubject(),this.search()},methods:Object(o["a"])({submitForm:function(){this.queryParam.pageIndex=1,this.search()},search:function(){var e=this;this.listLoading=!0,l["a"].pageList(this.queryParam).then((function(t){var n=t.response;e.tableData=n.list,e.total=n.total,e.queryParam.pageIndex=n.pageNum,e.listLoading=!1}))},levelChange:function(){var e=this;this.queryParam.subjectId=null,this.subjectFilter=this.subjects.filter((function(t){return t.level===e.queryParam.level}))},addQuestion:function(){this.$router.push("/exam/question/edit/singleChoice")},showQuestion:function(e){var t=this;this.questionShow.dialog=!0,this.questionShow.loading=!0,l["a"].select(e.id).then((function(e){t.questionShow.qType=e.response.questionType,t.questionShow.question=e.response,t.questionShow.loading=!1}))},editQuestion:function(e){var t=this.enumFormat(this.editUrlEnum,e.questionType);this.$router.push({path:t,query:{id:e.id}})},deleteQuestion:function(e){var t=this;l["a"].deleteQuestion(e.id).then((function(e){1===e.code?(t.search(),t.$message.success(e.message)):t.$message.error(e.message)}))},questionTypeFormatter:function(e,t,n,a){return this.enumFormat(this.questionType,n)},subjectFormatter:function(e,t,n,a){return this.subjectEnumFormat(n)}},Object(r["b"])("exam",{initSubject:"initSubject"})),computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])("enumItem",["enumFormat"])),Object(r["e"])("enumItem",{questionType:function(e){return e.exam.question.typeEnum},editUrlEnum:function(e){return e.exam.question.editUrlEnum},levelEnum:function(e){return e.user.levelEnum}})),Object(r["c"])("exam",["subjectEnumFormat"])),Object(r["e"])("exam",{subjects:function(e){return e.subjects}}))},d=c,p=n("9ca4"),m=Object(p["a"])(d,a,i,!1,null,null,null);t["default"]=m.exports},"9cf3":function(e,t,n){"use strict";var a=n("b2a2"),i=n("857c"),o=n("2732"),r=n("9d5c"),u=n("59da");a("search",1,(function(e,t,n){return[function(t){var n=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var o=i(e),s=String(this),l=o.lastIndex;r(l,0)||(o.lastIndex=0);var c=u(o,s);return r(o.lastIndex,l)||(o.lastIndex=l),null===c?-1:c.index}]}))},"9d5c":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},aaac:function(e,t,n){}}]);