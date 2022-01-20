"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[30],{30317:function(e,t,n){n.d(t,{Z:function(){return w}});var s=n(73396),a=n(87139),r={class:"flex flex-col"},o={class:"flex flex-row p-4"},i=(0,s._)("div",{class:"mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mr-4 sm:h-10 sm:w-10"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"rgba(220, 38, 38)"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),l={class:"text-lg font-semibold mb-2"},u={class:"bg-gray-50 rounded-b-md px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},c={key:0},d=(0,s.Uk)(" Hapus ");function m(e,t,n,m,f,p){var g=(0,s.up)("CSpinner"),w=(0,s.up)("CModalBody"),h=(0,s.up)("CModal");return(0,s.wg)(),(0,s.j4)(h,{visible:n.statVisible,onClose:t[2]||(t[2]=function(){p.confirmCancel()})},{default:(0,s.w5)((function(){return[(0,s.Wm)(w,{class:"p-0"},{default:(0,s.w5)((function(){return[(0,s._)("div",r,[(0,s._)("div",o,[i,(0,s._)("div",null,[(0,s._)("p",l,(0,a.zw)(n.title||"Meninggalkan halaman"),1),(0,s._)("p",null,(0,a.zw)(n.msg||"Meniggalkan halaman tanpa melakukan submit data akan menghilangkan data yang telah diinput."),1)])]),(0,s._)("div",u,[(0,s._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[0]||(t[0]=function(){return p.confirmOk&&p.confirmOk.apply(p,arguments)})},[f.loading?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(g,{color:"white",size:"sm",class:"mr-2"})])):(0,s.kq)("",!0),d]),(0,s._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[1]||(t[1]=function(e){return p.confirmCancel()})}," Cancel ")])])]})),_:1})]})),_:1},8,["visible"])}var f={props:["statVisible","title","msg"],emits:["close-modal","confirm-ok"],computed:{},watch:{value:function(e){0==e&&this.confirmCancel()}},data:function(){return{loading:!1}},methods:{confirmCancel:function(){this.$emit("close-modal",!1)},confirmOk:function(){var e=this;this.loading=!0,setTimeout((function(){e.$emit("confirm-ok")}),500)}}},p=n(40089);const g=(0,p.Z)(f,[["render",m]]);var w=g},87030:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});n(69600);var s=n(73396),a=n(49242),r=n(87139),o=(0,s._)("div",{class:"mb-4"},[(0,s._)("h4",{class:"h4"},"KAP")],-1),i={class:"flex flex-wrap lg:flex-row-reverse"},l={class:"flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"},u={class:"mb-3 w-full lg:w-1/2 flex justify-center lg:justify-start"},c=(0,s._)("span",{class:"inline-block w-2/12 lg:w-1/12 pt-2"},"Search",-1),d={key:0,class:"w-full"},m={width:"150px"},f={width:"250px"},p={width:"200px"},g={class:"break-all"},w={key:1,class:"text-center"},h=(0,s.Uk)("Edit"),k=(0,s.Uk)("Hapus"),b={key:2};function x(e,t,n,x,v,_){var y=(0,s.up)("Loading"),C=(0,s.up)("CButton"),D=(0,s.up)("vue-good-table"),K=(0,s.up)("ConfirmDelete");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(y,{active:v.loading,"onUpdate:active":t[0]||(t[0]=function(e){return v.loading=e}),"is-full-page":!0},null,8,["active"]),o,(0,s._)("div",null,[(0,s._)("div",i,[(0,s._)("div",l,[v.isShowForNipKhusus?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none",onClick:t[1]||(t[1]=function(t){return e.$router.push("/kap/create")})}," Tambah ")):(0,s.kq)("",!0)]),(0,s._)("div",u,[c,(0,s.wy)((0,s._)("input",{class:"border-2 w-10/12 lg:w-6/12 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm",type:"text",name:"search",placeholder:"Teks..","onUpdate:modelValue":t[2]||(t[2]=function(e){return v.searchTerm=e})},null,512),[[a.nr,v.searchTerm]])])]),v.rows?((0,s.wg)(),(0,s.j4)(D,{key:0,class:"mb-4 text-sm",theme:"polar-bear",styleClass:"vgt-table striped condensed",columns:v.columns,rows:v.rows,"line-numbers":!0,"search-options":{enabled:!0,externalQuery:v.searchTerm},"pagination-options":{enabled:!0,mode:"records"}},{"table-row":(0,s.w5)((function(t){return["namaTopik"==t.column.field?((0,s.wg)(),(0,s.iD)("table",d,[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.row.topiks,(function(e){return(0,s.wg)(),(0,s.iD)("tr",{key:e.idTopik},[(0,s._)("td",m,[(0,s._)("p",null,(0,r.zw)(t.row.topiks.length),1)]),(0,s._)("td",f,[(0,s._)("p",null,(0,r.zw)(e.deskripsi),1)]),(0,s._)("td",p,[(0,s._)("p",g,(0,r.zw)(e.kontributors.join(",")),1)])])})),128))])])):(0,s.kq)("",!0),"actions"==t.column.field?((0,s.wg)(),(0,s.iD)("div",w,[v.isShowForNipKhusus?((0,s.wg)(),(0,s.j4)(C,{key:0,color:"warning",size:"sm",variant:"outline",onClick:function(n){return e.$router.push({name:"Update KAP",params:{idKap:t.row.idKap}})},class:"mb-2 w-full"},{default:(0,s.w5)((function(){return[h]})),_:2},1032,["onClick"])):(0,s.kq)("",!0),v.isShowForNipKhusus?((0,s.wg)(),(0,s.j4)(C,{key:1,color:"danger",size:"sm",variant:"outline",onClick:function(e){return _.resDelAction(t.row.idKap)},class:"w-full"},{default:(0,s.w5)((function(){return[k]})),_:2},1032,["onClick"])):(0,s.kq)("",!0)])):((0,s.wg)(),(0,s.iD)("span",b,(0,r.zw)(t.formattedRow[t.column.field]),1))]})),_:1},8,["columns","rows","search-options"])):(0,s.kq)("",!0)]),(0,s.Wm)(K,{statVisible:v.isDeleteConfirm,title:"Hapus data",msg:"Apakah anda yakin akan menghapus data ini?",onCloseModal:t[3]||(t[3]=function(e){return v.isDeleteConfirm=!1}),onConfirmOk:_.actionDelete},null,8,["statVisible","onConfirmOk"])],64)}var v=n(48534),_=(n(36133),n(56265)),y=n.n(_),C=n(30317),D=n(6216),K=[{label:"Id",field:"idKap"},{label:"Nama KAP",field:"namaKap",width:"200px",thClass:"text-sm",tdClass:"text-sm"},{label:"PJ KAP",field:"unitKerjaKap",thClass:"text-sm text-center",tdClass:"text-sm text-center"},{label:"Nama Topik  -  Informasi Yang Diharapkan  -  Kontributor",field:"namaTopik",thClass:"text-sm text-center",tdClass:"text-sm"},{label:"Actions",field:"actions",width:"100px",globalSearchDisabled:!0,thClass:"text-sm text-center",tdClass:"text-sm"}],T={name:"my-component",components:{ConfirmDelete:C.Z,Loading:D.Z},data:function(){return{searchTerm:"",columns:K,rows:null,loading:!1,isDeleteConfirm:!1,idToDel:null,isShowForNipKhusus:!1}},mounted:function(){var e=this;return(0,v.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadKap();case 2:return t.next=4,e.$func.isNipAllowToAdd();case 4:e.isShowForNipKhusus=t.sent;case 5:case"end":return t.stop()}}),t)})))()},methods:{loadKap:function(){var e=this;return(0,v.Z)(regeneratorRuntime.mark((function t(){var n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,y()({method:"GET",baseURL:e.$apiAddress,url:"/api/kap",params:{token:localStorage.getItem("token")}});case 3:return n=t.sent,t.next=6,n.data;case 6:if(s=t.sent,200==n.status){t.next=10;break}throw a=new Error(s.message||"Failed to fetch data"),a;case 10:e.rows=s,e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},resDelAction:function(e){this.idToDel=e,this.isDeleteConfirm=!0},actionDelete:function(){var e=this;return(0,v.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y()({method:"DELETE",baseURL:e.$apiAddress,url:"/api/kap/".concat(e.idToDel),params:{token:localStorage.getItem("token"),nip:localStorage.getItem("nip")}});case 3:n=t.sent,e.isDeleteConfirm=!1,200==n.status&&(e.loadKap(),e.toastSuccess("Berhasil menghapus data")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.toastError(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},toastSuccess:function(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError:function(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})}}},j=n(40089);const S=(0,j.Z)(T,[["render",x]]);var A=S}}]);
//# sourceMappingURL=30-legacy.e0f0736f.js.map