"use strict";(self["webpackChunkjoayo"]=self["webpackChunkjoayo"]||[]).push([[443],{5585:function(r,o,a){a.r(o),a.d(o,{default:function(){return E}});var e=a(3396),s=a(9242),n=a(7139);const t=r=>((0,e.dD)("data-v-1f25c07c"),r=r(),(0,e.Cn)(),r),l={class:"container"},i={class:"d-flex align-items-center py-4 bg-body-tertiary"},c={class:"form-signin w-100 m-auto"},d=t((()=>(0,e._)("h1",{class:"h3 mb-3 fw-normal"},"로그인",-1))),m={class:"form-floating"},p=t((()=>(0,e._)("label",{for:"login-email"},"email",-1))),u={class:"form-floating"},f=t((()=>(0,e._)("label",{for:"login-password"},"password",-1))),g={class:"m-auto",id:"error"},w={key:0,class:"text-danger"},h=t((()=>(0,e._)("button",{class:"btn btn-primary w-100 py-2 mt-4",type:"submit"},"로그인",-1)));function y(r,o,a,t,y,_){const b=(0,e.up)("Logo");return(0,e.wg)(),(0,e.iD)("div",l,[(0,e._)("div",i,[(0,e._)("main",c,[(0,e._)("form",{onSubmit:o[4]||(o[4]=(0,s.iM)(((...r)=>_.login&&_.login(...r)),["prevent"]))},[(0,e.Wm)(b),d,(0,e._)("div",m,[(0,e.wy)((0,e._)("input",{type:"email",class:"form-control",id:"login-email",placeholder:"email","onUpdate:modelValue":o[0]||(o[0]=r=>y.formData.username=r),onFocus:o[1]||(o[1]=(...r)=>_.clearError&&_.clearError(...r)),required:""},null,544),[[s.nr,y.formData.username]]),p]),(0,e._)("div",u,[(0,e.wy)((0,e._)("input",{type:"password",class:"form-control",id:"login-password",placeholder:"password","onUpdate:modelValue":o[2]||(o[2]=r=>y.formData.password=r),onFocus:o[3]||(o[3]=(...r)=>_.clearError&&_.clearError(...r)),required:""},null,544),[[s.nr,y.formData.password]]),f]),(0,e._)("div",g,[y.errorMessage?((0,e.wg)(),(0,e.iD)("p",w,(0,n.zw)(y.errorMessage),1)):(0,e.kq)("",!0)]),h],32)])])])}a(560);var _=a(8458),b=a(4239),v=a(1076),D={components:{Logo:_.Z},data(){return{formData:{username:"",password:""},errorMessage:""}},methods:{login(){v.Z.post("/api/login",this.formData,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((r=>{const o=r.headers.authorization;b.Z.commit("login",o),this.$router.push("/")})).catch((r=>{console.log(r),this.errorMessage=r.response.data.message}))},clearError(){this.errorMessage=""}}},k=a(89);const M=(0,k.Z)(D,[["render",y],["__scopeId","data-v-1f25c07c"]]);var E=M}}]);
//# sourceMappingURL=about.def8000c.js.map