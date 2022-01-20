"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[473],{30317:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(73396),s=n(87139),r={class:"flex flex-col"},o={class:"flex flex-row p-4"},i=(0,a._)("div",{class:"mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mr-4 sm:h-10 sm:w-10"},[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"rgba(220, 38, 38)"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),l={class:"text-lg font-semibold mb-2"},u={class:"bg-gray-50 rounded-b-md px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},c={key:0},m=(0,a.Uk)(" Hapus ");function d(e,t,n,d,f,p){var g=(0,a.up)("CSpinner"),h=(0,a.up)("CModalBody"),w=(0,a.up)("CModal");return(0,a.wg)(),(0,a.j4)(w,{visible:n.statVisible,onClose:t[2]||(t[2]=function(){p.confirmCancel()})},{default:(0,a.w5)((function(){return[(0,a.Wm)(h,{class:"p-0"},{default:(0,a.w5)((function(){return[(0,a._)("div",r,[(0,a._)("div",o,[i,(0,a._)("div",null,[(0,a._)("p",l,(0,s.zw)(n.title||"Meninggalkan halaman"),1),(0,a._)("p",null,(0,s.zw)(n.msg||"Meniggalkan halaman tanpa melakukan submit data akan menghilangkan data yang telah diinput."),1)])]),(0,a._)("div",u,[(0,a._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[0]||(t[0]=function(){return p.confirmOk&&p.confirmOk.apply(p,arguments)})},[f.loading?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(g,{color:"white",size:"sm",class:"mr-2"})])):(0,a.kq)("",!0),m]),(0,a._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[1]||(t[1]=function(e){return p.confirmCancel()})}," Cancel ")])])]})),_:1})]})),_:1},8,["visible"])}var f={props:["statVisible","title","msg"],emits:["close-modal","confirm-ok"],computed:{},watch:{value:function(e){0==e&&this.confirmCancel()}},data:function(){return{loading:!1}},methods:{confirmCancel:function(){this.$emit("close-modal",!1)},confirmOk:function(){var e=this;this.loading=!0,setTimeout((function(){e.$emit("confirm-ok")}),500)}}},p=n(40089);const g=(0,p.Z)(f,[["render",d]]);var h=g},87473:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(73396),s=n(49242),r=n(87139),o=(0,a._)("div",{class:"mb-4"},[(0,a._)("h4",{class:"h4"},"Tema")],-1),i={class:"flex flex-wrap lg:flex-row-reverse"},l={class:"flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"},u={class:"mb-3 w-full lg:w-1/2 flex justify-center lg:justify-start"},c=(0,a._)("span",{class:"inline-block w-2/12 lg:w-1/12 pt-2"},"Search",-1),m=(0,a.Uk)("Edit"),d=(0,a.Uk)("Hapus"),f={key:1};function p(e,t,n,p,g,h){var w=(0,a.up)("Loading"),k=(0,a.up)("CButton"),b=(0,a.up)("vue-good-table"),x=(0,a.up)("ConfirmDelete");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{active:g.loading,"onUpdate:active":t[0]||(t[0]=function(e){return g.loading=e}),"is-full-page":!0},null,8,["active"]),o,(0,a._)("div",null,[(0,a._)("div",i,[(0,a._)("div",l,[g.isShowForNipKhusus?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none",onClick:t[1]||(t[1]=function(t){return e.$router.push("/tema/create")})}," Tambah ")):(0,a.kq)("",!0)]),(0,a._)("div",u,[c,(0,a.wy)((0,a._)("input",{class:"border-2 w-10/12 lg:w-6/12 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm",type:"text",name:"search",placeholder:"Teks..","onUpdate:modelValue":t[2]||(t[2]=function(e){return g.searchTerm=e})},null,512),[[s.nr,g.searchTerm]])])]),g.rows?((0,a.wg)(),(0,a.j4)(b,{key:0,class:"mb-4",theme:"polar-bear",styleClass:"vgt-table striped condensed",columns:g.columns,rows:g.rows,"line-numbers":!0,"search-options":{enabled:!0,externalQuery:g.searchTerm},"pagination-options":{enabled:!0,mode:"records"}},{"table-row":(0,a.w5)((function(t){return["actions"==t.column.field?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[g.isShowForNipKhusus?((0,a.wg)(),(0,a.j4)(k,{key:0,color:"warning",size:"sm",variant:"outline",onClick:function(n){return e.$router.push({name:"Update Tema",params:{idTema:t.row.idTema}})},class:"mx-1"},{default:(0,a.w5)((function(){return[m]})),_:2},1032,["onClick"])):(0,a.kq)("",!0),g.isShowForNipKhusus?((0,a.wg)(),(0,a.j4)(k,{key:1,color:"danger",size:"sm",variant:"outline",onClick:function(e){return h.resDelAction(t.row.idTema)},class:"mx-1"},{default:(0,a.w5)((function(){return[d]})),_:2},1032,["onClick"])):(0,a.kq)("",!0)],64)):((0,a.wg)(),(0,a.iD)("span",f,(0,r.zw)(t.formattedRow[t.column.field]),1))]})),_:1},8,["columns","rows","search-options"])):(0,a.kq)("",!0)]),(0,a.Wm)(x,{statVisible:g.isDeleteConfirm,title:"Hapus data",msg:"Apakah anda yakin akan menghapus data ini?",onCloseModal:t[3]||(t[3]=function(e){return g.isDeleteConfirm=!1}),onConfirmOk:h.actionDelete},null,8,["statVisible","onConfirmOk"])],64)}var g=n(48534),h=(n(36133),n(56265)),w=n.n(h),k=n(6216),b=n(30317),x=[{label:"Id",field:"idTema"},{label:"Nama Sektor",field:"namaSektor",thClass:"text-sm",tdClass:"text-sm"},{label:"Nama Tema",field:"namaTema",thClass:"text-sm",tdClass:"text-sm"},{label:"Informasi Tema Yang Diharapkan",field:"deskripsi",thClass:"text-sm",tdClass:"text-sm"},{label:"Kedeputian Koord Tema",field:"pjDeputi",thClass:"text-sm",tdClass:"text-sm"},{label:"Unit Kerja PJ Tema",field:"unitKerja",thClass:"text-sm",tdClass:"text-sm"},{label:"TW Pelaporan Tema",field:"triwulan",thClass:"text-sm",tdClass:"text-sm"},{label:"Actions",field:"actions",width:"150px",globalSearchDisabled:!0}],v={name:"my-component",components:{Loading:k.Z,ConfirmDelete:b.Z},data:function(){return{searchTerm:"",columns:x,rows:null,loading:!1,isDeleteConfirm:!1,idToDel:null,isShowForNipKhusus:!1}},mounted:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadTema(),t.next=3,e.$func.isNipAllowToAdd();case 3:e.isShowForNipKhusus=t.sent;case 4:case"end":return t.stop()}}),t)})))()},methods:{loadTema:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,w()({method:"GET",baseURL:e.$apiAddress,url:"/api/tema",params:{token:localStorage.getItem("token")}});case 3:return n=t.sent,t.next=6,n.data;case 6:if(a=t.sent,200==n.status){t.next=10;break}throw s=new Error(a.message||"Failed to fetch data"),s;case 10:e.rows=a,e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},resDelAction:function(e){this.idToDel=e,this.isDeleteConfirm=!0},actionDelete:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w()({method:"DELETE",baseURL:e.$apiAddress,url:"/api/tema/".concat(e.idToDel),params:{token:localStorage.getItem("token"),nip:localStorage.getItem("nip")}});case 3:n=t.sent,e.isDeleteConfirm=!1,200==n.status&&(e.loadTema(),e.toastSuccess("Berhasil menghapus data")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.toastError(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},toastSuccess:function(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError:function(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})}}},C=n(40089);const _=(0,C.Z)(v,[["render",p]]);var y=_}}]);
//# sourceMappingURL=473-legacy.580cead7.js.map