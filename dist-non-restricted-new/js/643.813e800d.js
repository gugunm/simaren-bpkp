"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[643],{8642:function(e,t,s){s.d(t,{Z:function(){return h}});var i=s(3396),o=s(7139);const n={class:"flex flex-col"},a={class:"flex flex-row p-4"},r=(0,i._)("div",{class:"mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mr-4 sm:h-10 sm:w-10"},[(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"rgba(220, 38, 38)"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),l={class:"text-lg font-semibold mb-2"},d={class:"bg-gray-50 rounded-b-md px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},u={key:0},m=(0,i.Uk)(" Hapus ");function c(e,t,s,c,p,g){const f=(0,i.up)("CSpinner"),h=(0,i.up)("CModalBody"),b=(0,i.up)("CModal");return(0,i.wg)(),(0,i.j4)(b,{visible:s.statVisible,onClose:t[2]||(t[2]=()=>{g.confirmCancel()})},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"p-0"},{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i._)("div",a,[r,(0,i._)("div",null,[(0,i._)("p",l,(0,o.zw)(s.title||"Meninggalkan halaman"),1),(0,i._)("p",null,(0,o.zw)(s.msg||"Meniggalkan halaman tanpa melakukan submit data akan menghilangkan data yang telah diinput."),1)])]),(0,i._)("div",d,[(0,i._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[0]||(t[0]=(...e)=>g.confirmOk&&g.confirmOk(...e))},[p.loading?((0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(f,{color:"white",size:"sm",class:"mr-2"})])):(0,i.kq)("",!0),m]),(0,i._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[1]||(t[1]=e=>g.confirmCancel())}," Cancel ")])])])),_:1})])),_:1},8,["visible"])}var p={props:["statVisible","title","msg"],emits:["close-modal","confirm-ok"],computed:{},watch:{value(e){0==e&&this.confirmCancel()}},data(){return{loading:!1}},methods:{confirmCancel(){this.$emit("close-modal",!1)},confirmOk(){this.loading=!0,setTimeout((()=>{this.$emit("confirm-ok")}),500),this.loading=!1}}},g=s(89);const f=(0,g.Z)(p,[["render",c]]);var h=f},1643:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var i=s(3396),o=s(9242),n=s(7139);const a=(0,i._)("div",{class:"mb-4"},[(0,i._)("h4",{class:"h4"},"Kontributor")],-1),r={class:"flex flex-wrap lg:flex-row-reverse"},l={class:"flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"},d={class:"mb-3 w-full lg:w-1/2 flex justify-center lg:justify-start"},u=(0,i._)("span",{class:"inline-block w-2/12 lg:w-1/12 pt-2"},"Search",-1),m=(0,i._)("p",{class:"italic text-yellow-500 mb-2 text-sm blink-animation"},[(0,i._)("span",null,"::: press enter untuk mencari")],-1),c=(0,i.Uk)("Edit"),p=(0,i.Uk)("Hapus"),g={key:1};function f(e,t,s,f,h,b){const w=(0,i.up)("Loading"),k=(0,i.up)("CButton"),x=(0,i.up)("vue-good-table"),C=(0,i.up)("ConfirmDelete");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(w,{active:h.loading,"onUpdate:active":t[0]||(t[0]=e=>h.loading=e),"is-full-page":!0},null,8,["active"]),a,(0,i._)("div",null,[(0,i._)("div",r,[(0,i._)("div",l,[h.isShowForNipKhusus?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none",onClick:t[1]||(t[1]=t=>e.$router.push("/kontributor/create"))}," Tambah ")):(0,i.kq)("",!0)]),(0,i._)("div",d,[u,(0,i.wy)((0,i._)("input",{class:"border-2 w-10/12 lg:w-6/12 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm",type:"text",name:"search",placeholder:"teks yang dicari","onUpdate:modelValue":t[2]||(t[2]=e=>h.searchTerm=e)},null,512),[[o.nr,h.searchTerm,void 0,{lazy:!0}]])])]),m,h.rows?((0,i.wg)(),(0,i.j4)(x,{key:0,class:"mb-4",theme:"polar-bear",styleClass:"vgt-table striped condensed",columns:h.columns,rows:h.rows,"line-numbers":!0,"search-options":{enabled:!0,externalQuery:h.searchTerm},"pagination-options":{enabled:!0,mode:"records"}},{"table-row":(0,i.w5)((t=>["actions"==t.column.field?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[h.isShowForNipKhusus?((0,i.wg)(),(0,i.j4)(k,{key:0,color:"warning",size:"sm",variant:"outline",onClick:s=>e.$router.push({name:"Update Kontributor",params:{idKontributor:t.row.idKontributor}}),class:"mx-1"},{default:(0,i.w5)((()=>[c])),_:2},1032,["onClick"])):(0,i.kq)("",!0),h.isShowForNipKhusus?((0,i.wg)(),(0,i.j4)(k,{key:1,color:"danger",size:"sm",variant:"outline",onClick:e=>b.resDelAction(t.row.idKontributor),class:"mx-1"},{default:(0,i.w5)((()=>[p])),_:2},1032,["onClick"])):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",g,(0,n.zw)(t.formattedRow[t.column.field]),1))])),_:1},8,["columns","rows","search-options"])):(0,i.kq)("",!0)]),(0,i.Wm)(C,{statVisible:h.isDeleteConfirm,title:"Hapus data",msg:"Apakah anda yakin akan menghapus data ini?",onCloseModal:t[3]||(t[3]=e=>h.isDeleteConfirm=!1),onConfirmOk:b.actionDelete},null,8,["statVisible","onConfirmOk"])],64)}var h=s(6265),b=s.n(h),w=s(6216),k=s(8642);const x=[{label:"Id",field:"idKontributor",filterOptions:{enabled:!0,trigger:"enter"}},{label:"Nama Topik",field:"namaTopik",thClass:"text-sm",tdClass:"text-sm",filterOptions:{enabled:!0,trigger:"enter"}},{label:"Unit Kerja Kontributor",field:"unitKontributor",thClass:"text-sm",tdClass:"text-sm",filterOptions:{enabled:!0,trigger:"enter"}},{label:"Informasi Kontributor Yang Diharapkan",field:"deskripsi",thClass:"text-sm",tdClass:"text-sm",filterOptions:{enabled:!0,trigger:"enter"}},{label:"Kedeputian Koord Topik",field:"pjDeputi",thClass:"text-sm",tdClass:"text-sm",filterOptions:{enabled:!0,trigger:"enter"}},{label:"Unit Kerja PJ Topik",field:"unitKerja",thClass:"text-sm",tdClass:"text-sm",filterOptions:{enabled:!0,trigger:"enter"}},{label:"TW Pelaporan Kontributor",field:"triwulan",thClass:"text-sm",tdClass:"text-sm",filterOptions:{enabled:!0,trigger:"enter"}},{label:"Actions",field:"actions",width:"150px",globalSearchDisabled:!0}];var C={name:"my-component",components:{Loading:w.Z,ConfirmDelete:k.Z},data(){return{searchTerm:"",columns:x,rows:null,loading:!1,isDeleteConfirm:!1,idToDel:null,isShowForNipKhusus:!1}},async mounted(){this.loadKontributor(),this.isShowForNipKhusus=await this.$func.isNipAllowToAdd()},methods:{async loadKontributor(){this.loading=!0;const e=await b()({method:"GET",baseURL:this.$apiAddress,url:"/api/kontributor",params:{token:localStorage.getItem("token")}}),t=await e.data;if(200!=e.status){const e=new Error(t.message||"Failed to fetch data");throw e}this.rows=t,this.loading=!1},resDelAction(e){this.idToDel=e,this.isDeleteConfirm=!0},async actionDelete(){try{const e=await b()({method:"DELETE",baseURL:this.$apiAddress,url:`/api/kontributor/${this.idToDel}`,params:{token:localStorage.getItem("token"),nip:localStorage.getItem("nip")}});this.isDeleteConfirm=!1,200==e.status&&(this.loadKontributor(),this.toastSuccess("Berhasil menghapus data"))}catch(e){this.toastError(e.message)}},toastSuccess(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})}}},y=s(89);const v=(0,y.Z)(C,[["render",f]]);var _=v}}]);
//# sourceMappingURL=643.813e800d.js.map