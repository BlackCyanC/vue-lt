(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77acb5bd"],{"02c3":function(e,r,t){"use strict";var s=t("e012"),o=t.n(s);o.a},"52d9":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"login"}},[t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"age"}},[t("el-input",{model:{value:e.ruleForm2.age,callback:function(r){e.$set(e.ruleForm2,"age",e._n(r))},expression:"ruleForm2.age"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm2.pass,callback:function(r){e.$set(e.ruleForm2,"pass",r)},expression:"ruleForm2.pass"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm2.checkPass,callback:function(r){e.$set(e.ruleForm2,"checkPass",r)},expression:"ruleForm2.checkPass"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm2")}}},[e._v("提交")]),t("el-button",{on:{click:function(r){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)],1)},o=[],l={data(){var e=(e,r,t)=>{if(!r)return t(new Error("用户名不能为空"));setTimeout(()=>{Number.isInteger(r)?r<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))},1e3)},r=(e,r,t)=>{""===r?t(new Error("请输入密码")):(""!==this.ruleForm2.checkPass&&this.$refs.ruleForm2.validateField("checkPass"),t())},t=(e,r,t)=>{""===r?t(new Error("请再次输入密码")):r!==this.ruleForm2.pass?t(new Error("两次输入密码不一致!")):t()};return{ruleForm2:{pass:"",checkPass:"",age:""},rules2:{pass:[{validator:r,trigger:"blur"}],checkPass:[{validator:t,trigger:"blur"}],age:[{validator:e,trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm(e){this.$refs[e].resetFields()}}},a=l,u=(t("02c3"),t("2877")),i=Object(u["a"])(a,s,o,!1,null,"3c561c09",null);i.options.__file="Register.vue";r["default"]=i.exports},e012:function(e,r,t){}}]);
//# sourceMappingURL=chunk-77acb5bd.92225263.js.map