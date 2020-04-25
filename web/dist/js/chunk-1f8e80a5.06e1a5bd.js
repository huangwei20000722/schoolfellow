(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f8e80a5"],{"4cce":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("用户管理")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete",disabled:0===this.delData.length},on:{click:e.delAll}},[e._v("批量删除")]),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.searchInfo,callback:function(t){e.searchInfo=t},expression:"searchInfo"}}),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.getUsers}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addUserVisible=!0}}},[e._v("新建用户")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isShowloading,expression:"isShowloading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.users,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"orderNum",label:"序号",sortable:"",width:"150"}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"120"}}),a("el-table-column",{attrs:{prop:"rolename",label:"角色名称"}}),a("el-table-column",{attrs:{prop:"isable",label:"状态",formatter:e.formatterState}}),a("el-table-column",{attrs:{prop:"loginTime",label:"登录次数"}}),a("el-table-column",{attrs:{prop:"loginDate",label:"登录时间"}}),a("el-table-column",{attrs:{prop:"creater",label:"创建者"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize},on:{"current-change":e.currentChange}})],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],ref:"editUserForm",attrs:{title:"修改信息",visible:e.editUserVisible,"before-close":e.confirmClose},on:{"update:visible":function(t){e.editUserVisible=t}}},[a("el-form",{ref:"editUserForm",attrs:{model:e.userForm,rules:e.editRule}},[a("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth,prop:"username"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1),a("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth}},[a("el-radio",{attrs:{label:"1"},model:{value:e.userForm.isable,callback:function(t){e.$set(e.userForm,"isable",t)},expression:"userForm.isable"}},[e._v("正常")]),a("el-radio",{attrs:{label:"0"},model:{value:e.userForm.isable,callback:function(t){e.$set(e.userForm,"isable",t)},expression:"userForm.isable"}},[e._v("禁用")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editUserVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.editUser(t)}}},[e._v("确 定")])],1)],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],ref:"addUserForm",attrs:{title:"新建用户",visible:e.addUserVisible},on:{"update:visible":function(t){e.addUserVisible=t}}},[a("el-form",{attrs:{model:e.addUserForm,rules:e.addUserRule}},[a("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth,prop:"username"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addUserForm.username,callback:function(t){e.$set(e.addUserForm,"username",t)},expression:"addUserForm.username"}})],1),a("el-form-item",{attrs:{label:"角色名称","label-width":e.formLabelWidth,prop:"rolename"}},[a("el-select",{model:{value:e.addUserForm.rolename,callback:function(t){e.$set(e.addUserForm,"rolename",t)},expression:"addUserForm.rolename"}},[a("el-option",{attrs:{label:"admin",value:"admin"}}),a("el-option",{attrs:{label:"管理员",value:"管理员"}}),a("el-option",{attrs:{label:"超级管理员",value:"超级管理员"}})],1)],1),a("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth}},[a("el-radio",{attrs:{label:"1"},model:{value:e.addUserForm.isable,callback:function(t){e.$set(e.addUserForm,"isable",t)},expression:"addUserForm.isable"}},[e._v("正常")]),a("el-radio",{attrs:{label:"0"},model:{value:e.addUserForm.isable,callback:function(t){e.$set(e.addUserForm,"isable",t)},expression:"addUserForm.isable"}},[e._v("禁用")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addUserVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveUser}},[e._v("确 定")])],1)],1)],1)])},s=[],n=(a("e712"),a("8cb7"),a("2b45"),a("79dd"),a("276a"),a("4ec3")),l={data:function(){return{url:"",searchInfo:"",users:[],total:0,pageNo:1,pageSize:20,isShowloading:!1,delData:[],editUserVisible:!1,addUserVisible:!1,userForm:{},addUserForm:{username:"",rolename:"",isable:"0"},addUserRule:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],rolename:[{required:!0,message:"请选择角色",trigger:"change"}]},editRule:{username:[{required:!0,message:"请输入姓名",trigger:"blur"}]},formLabelWidth:"120px"}},methods:{formatterState:function(e,t){return"1"==e.isable?"正常":"禁用"},getUsers:function(){var e=this;this.isShowloading=!0;var t={searchInfo:this.searchInfo.trim(),page:this.pageNo};Object(n["f"])(t).then((function(t){e.users=t.data.users,e.total=t.data.total,e.isShowloading=!1}))},currentChange:function(e){this.pageNo=e,this.getUsers()},handleSelectionChange:function(e){this.delData=e},saveUser:function(){var e=this,t=Object.assign({},this.addUserForm);t.username=t.username.trim(),Object(n["a"])(t).then((function(t){e.$message({message:"添加成功",type:"success"}),e.addUserVisible=!1,e.addUserForm={},e.getUsers()}))},delAll:function(){var e=this;this.$confirm("确认删除该用户吗?","提示",{type:"warning"}).then((function(){e.isShowloading=!0;var t=e.delData.map((function(e){return e.userid})).toString(),a={delIds:t};Object(n["b"])(a).then((function(t){e.isShowloading=!1,e.$message({message:"删除成功",type:"success"}),e.getUsers()}))}))},handleEdit:function(e,t){this.editUserVisible=!0,this.userForm=Object.assign({},t)},handleDelete:function(e,t){var a=this,r={userid:t.userid};this.$confirm("确认删除该用户？","提示",{type:"warning"}).then((function(){Object(n["c"])(r).then((function(e){a.$message({type:"success",message:"删除成功"}),a.getUsers()}))}))},editUser:function(){var e=this;this.$refs["editUserForm"].validate((function(t){if(t){var a=e.userForm;Object(n["d"])(a).then((function(t){e.$message({type:"success",message:t.data.msg}),e.getUsers(),e.editUserVisible=!1,e.userForm={}})).bind(e)}}))},confirmClose:function(e){var t=this;this.$confirm("确认关闭将丢失已编辑内容？","提示",{type:"warning"}).then((function(){t.userForm={},e()}))},testFn:function(){this.url="/ms/table/list",this.$axios.get(this.url).then((function(e){console.log(e)})),Object(n["g"])().then((function(e){console.log(e)}))}},mounted:function(){this.testFn()}},i=l,o=(a("c3ff"),a("e90a")),c=Object(o["a"])(i,r,s,!1,null,"354bf639",null);t["default"]=c.exports},"4ec3":function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"g",(function(){return m}));var r=a("f753"),s=a.n(r),n="",l=function(e){return s.a.get("".concat(n,"/user/list"),{params:e})},i=function(){return s.a.get("../../menu.json")},o=function(e){return s.a.get("user/deletUsers",{params:e})},c=function(e){return s.a.get("".concat(n,"/user/editUser"),{params:e})},u=function(e){return s.a.get("".concat(n,"/user/addUser"),{params:e})},d=function(e){return s.a.get("".concat(n,"/user/DeleteOne"),{params:e})},m=function(){return s.a.get("/testApi/getkeywhereisddata?CITY_NAME=全省&S_id=B08I00136&callback=")}},c3ff:function(e,t,a){"use strict";var r=a("cc4c"),s=a.n(r);s.a},cc4c:function(e,t,a){}}]);