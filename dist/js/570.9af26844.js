"use strict";(self["webpackChunkjoayo"]=self["webpackChunkjoayo"]||[]).push([[570],{6570:function(t,n,o){o.r(n),o.d(n,{default:function(){return h}});var s=o(3396),i=o(7139),e=o(9242);const r={class:"container bg-body-tertiary"},a=(0,s._)("h1",null,"글수정",-1),l={class:"mb-3"};function p(t,n,o,p,c,d){const u=(0,s.up)("LinkedButton");return(0,s.wg)(),(0,s.iD)("div",r,[a,(0,s._)("div",null,"작성자 : "+(0,i.zw)(c.posting.nickname),1),(0,s._)("div",l,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>c.posting.title=t),type:"text",class:"form-control",placeholder:"글 제목을 입력하세요"},null,512),[[e.nr,c.posting.title]])]),(0,s.wy)((0,s._)("textarea",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=t=>c.posting.contents=t),rows:"10",placeholder:"글 내용을 입력하세요"},"\r\n        ",512),[[e.nr,c.posting.contents]]),(0,s.Wm)(u,{msg:"돌아가기",linked:`/postings/${c.posting.postingId}`},null,8,["linked"]),(0,s.Wm)(u,{msg:"수정완료",linked:`/postings/${c.posting.postingId}`,onClick:d.submit},null,8,["linked","onClick"])])}var c=o(1076),d=o(1834),u={data(){return{posting:{}}},components:{LinkedButton:d.Z},mounted(){const t=this.$route.params.postingId;c.Z.get(`/api/board/postings/${t}`).then((({data:t})=>{this.posting=t.data})).catch((t=>{console.error(t)}))},methods:{submit(){if(!this.posting.title.trim()||!this.posting.contents.trim())return void alert("제목과 내용을 모두 입력하세요.");const t=this.$route.params.postingId;c.Z.patch(`/api/board/postings/${t}`,this.posting).then((({data:t})=>{console.log(t)})).catch((t=>{console.error(t)}))}}},g=o(89);const m=(0,g.Z)(u,[["render",p]]);var h=m}}]);
//# sourceMappingURL=570.9af26844.js.map