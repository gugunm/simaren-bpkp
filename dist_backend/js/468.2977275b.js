"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[468],{2468:function(e,t,a){a.d(t,{Z:function(){return Z}});var s=a(3396),i=a(9242);const l={key:0,class:"h4 mb-4"},o={key:1,class:"h4 mb-4"},d=(0,s.Uk)("ID "),n={class:"col-sm-2"},m=(0,s.Uk)("Tahun "),r=(0,s._)("span",{class:"text-red-500"},"*",-1),u={class:"col-sm-2"},p=(0,s.Uk)("Nama Sektor "),c=(0,s._)("span",{class:"text-red-500"},"*",-1),h={class:"col-sm-9"},f=(0,s.Uk)("Nama Tema "),k=(0,s._)("span",{class:"text-red-500"},"*",-1),w={class:"col-sm-9"},g=(0,s.Uk)("Informasi Tema Yang Diharapkan "),_=(0,s._)("span",{class:"text-red-500"},"*",-1),b={class:"col-sm-9"},S=(0,s._)("p",{class:"text-sm mt-2 text-red-500"}," note : pisahkan informasi tema dengan titik koma ';' ",-1),T=(0,s.Uk)("Kedeputian Koord Tema "),y=(0,s._)("span",{class:"text-red-500"},"*",-1),W={class:"col-sm-9"},v=(0,s.Uk)("Unit Kerja PJ Tema "),U=(0,s._)("span",{class:"text-red-500"},"*",-1),D={class:"col-sm-9"},V=(0,s.Uk)("Triwulan Pelaporan Tema "),C=(0,s._)("span",{class:"text-red-500"},"*",-1),$={class:"col-sm-4"},j=(0,s.Uk)(" Batal "),x=(0,s.Uk)(" Reset "),K={key:0},R=(0,s.Uk)(" Simpan "),I={key:1};function F(e,t,a,F,P,E){const L=(0,s.up)("Loading"),B=(0,s.up)("CFormLabel"),q=(0,s.up)("CFormInput"),A=(0,s.up)("CRow"),O=(0,s.up)("VueMultiselect"),Z=(0,s.up)("CFormTextarea"),G=(0,s.up)("CButton"),M=(0,s.up)("CCol"),N=(0,s.up)("CSpinner"),H=(0,s.up)("CForm"),Y=(0,s.up)("CCardBody"),z=(0,s.up)("CCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(L,{active:P.loading,"onUpdate:active":t[0]||(t[0]=e=>P.loading=e),"is-full-page":!0},null,8,["active"]),(0,s.Wm)(z,{class:"mb-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{class:"p-4"},{default:(0,s.w5)((()=>["create"==a.mode?((0,s.wg)(),(0,s.iD)("h4",l,"Tambah Tema")):"update"==a.mode?((0,s.wg)(),(0,s.iD)("h4",o,"Edit Tema")):(0,s.kq)("",!0),"update"==a.mode?((0,s.wg)(),(0,s.j4)(A,{key:2,class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[d])),_:1}),(0,s._)("div",n,[(0,s.Wm)(q,{modelValue:P.editData.idTema,"onUpdate:modelValue":t[1]||(t[1]=e=>P.editData.idTema=e),readonly:""},null,8,["modelValue"])])])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(H,{onSubmit:(0,i.iM)(E.submit,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[m,r])),_:1}),(0,s._)("div",u,[(0,s.Wm)(q,{type:"number",id:"tahun",modelValue:P.form.tahun,"onUpdate:modelValue":t[2]||(t[2]=e=>P.form.tahun=e),readonly:"",required:""},null,8,["modelValue"])])])),_:1}),(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"nama-sektor",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[p,c])),_:1}),(0,s._)("div",h,[(0,s.Wm)(O,{id:"nama-sektor",modelValue:P.selectedSektor,"onUpdate:modelValue":t[3]||(t[3]=e=>P.selectedSektor=e),options:P.optionsSektor,placeholder:"Pilih Sektor",label:"deskripsi","track-by":"deskripsi","custom-label":E.viewSelectSektor},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"nama-tema",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[f,k])),_:1}),(0,s._)("div",w,[(0,s.Wm)(q,{type:"text",id:"nama-tema",modelValue:P.form.namaTema,"onUpdate:modelValue":t[4]||(t[4]=e=>P.form.namaTema=e),required:""},null,8,["modelValue"])])])),_:1}),(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"info-tema",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[g,_])),_:1}),(0,s._)("div",b,[(0,s.Wm)(Z,{id:"info-tema",rows:"3",modelValue:P.form.deskripsi,"onUpdate:modelValue":t[5]||(t[5]=e=>P.form.deskripsi=e),required:"",placeholder:"Info A; Info B; Info C;"},null,8,["modelValue"]),S])])),_:1}),(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"deputi-tema",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[T,y])),_:1}),(0,s._)("div",W,[(0,s.Wm)(q,{type:"text",id:"dep-tema",value:P.viewDeputi,readonly:""},null,8,["value"])])])),_:1}),(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"pj-tema",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[v,U])),_:1}),(0,s._)("div",D,[(0,s.Wm)(O,{id:"pj-tema",modelValue:P.selectedRendal,"onUpdate:modelValue":t[6]||(t[6]=e=>P.selectedRendal=e),options:P.optionsRendal,placeholder:"Pilih Unit Kerja Penanggungjawab",label:"deskripsi","track-by":"deskripsi","custom-label":E.viewSelectSearch},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,s.Wm)(A,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{for:"tw-tema",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[V,C])),_:1}),(0,s._)("div",$,[(0,s.Wm)(O,{id:"tw-tema",modelValue:P.form.triwulan,"onUpdate:modelValue":t[7]||(t[7]=e=>P.form.triwulan=e),options:P.optionsTriwulan,multiple:!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pilih Triwulan"},null,8,["modelValue","options"])])])),_:1}),(0,s.Wm)(A,{class:"mt-8 view-form"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{sm:"12",lg:"6",class:"mb-3"},{default:(0,s.w5)((()=>["view"!=a.mode?((0,s.wg)(),(0,s.j4)(G,{key:0,variant:"outline",color:"dark",onClick:t[8]||(t[8]=t=>e.$router.push("/tema")),class:"px-5"},{default:(0,s.w5)((()=>[j])),_:1})):(0,s.kq)("",!0)])),_:1}),"create"==a.mode||"update"==a.mode?((0,s.wg)(),(0,s.j4)(M,{key:0,sm:"12",md:"6",class:"flex content-center justify-end pr-3 mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(G,{type:"button",class:"ml-1 px-5 text-white",color:"danger",onClick:E.reset},{default:(0,s.w5)((()=>[x])),_:1},8,["onClick"]),(0,s.Wm)(G,{type:"submit",color:"info",class:"px-5 ml-2 text-white"},{default:(0,s.w5)((()=>[P.loading?((0,s.wg)(),(0,s.iD)("div",K,[(0,s.Wm)(N,{color:"white",size:"sm",class:"mr-2"}),R])):((0,s.wg)(),(0,s.iD)("p",I,"Simpan"))])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})],64)}var P=a(6265),E=a.n(P),L=a(6368),B=a(6216),q={components:{VueMultiselect:L.ZP,Loading:B.Z},props:["mode","idTema"],data(){return{form:this.getEmptyForm(),submitted:!1,loading:!1,selectedSektor:null,optionsSektor:[],viewDeputi:null,selectedRendal:null,optionsRendal:[],optionsTriwulan:[1,2,3,4],editData:{}}},watch:{selectedSektor:function(e){e&&(this.form.idSektor=e.idSektor)},selectedRendal:function(e){e&&(this.form.idUnitKerja=e.id,this.form.idKedeputian=e.parentId,this.viewDeputi=`${e.deputi} - ${e.namaDeputi}`)}},async mounted(){if(this.form.tahun=localStorage.tahun,this.optionsSektor=await this.$store.dispatch("loadListSektor"),this.optionsRendal=await this.$store.dispatch("loadListRendal"),"update"==this.mode){this.loading=!0,await this.loadTemaById();const e=this.optionsSektor.filter((e=>e.idSektor==this.form.idSektor));this.selectedSektor=e[0];const t=this.optionsRendal.filter((e=>e.id==this.form.idUnitKerja));this.selectedRendal=t[0]}},methods:{viewSelectSektor({namaSektor:e}){return`${e}`},viewSelectSearch({alias:e,deskripsi:t}){return`${e} - ${t}`},async submit(){const e=this.$func.isNullOfObjElement(this.form);if(e){this.submitted=!0;const e=this.appendToFormData();try{if("create"==this.mode){this.loading=!0;const t=await E()({method:"POST",baseURL:this.$apiAddress,url:"/api/tema",data:e,params:{token:localStorage.getItem("token")}});200!=t.status?this.error="Gagal menyimpan data":(this.loading=!1,this.$router.push("/tema"),this.toastSuccess("Berhasil menyimpan data"))}else if("update"==this.mode){this.loading=!0;const t=await E()({method:"POST",baseURL:this.$apiAddress,url:`/api/tema/${this.idTema}`,data:e,params:{token:localStorage.getItem("token")}});200!=t.status?this.error="Gagal merubah data":(this.loading=!1,this.$router.push("/tema"),this.toastSuccess("Berhasil merubah data"))}}catch(t){setTimeout((()=>{this.loading=!1,this.toastError("Terjadi kesalahan saat submit data")}),500)}}else this.toastWarning("Lengkapi data sebelum submit!")},reset(){this.form=this.getEmptyForm(),this.submitted=!1,this.selectedSektor=null,this.viewDeputi=null,this.selectedRendal=null},getEmptyForm(){return{tahun:null,idSektor:null,namaTema:null,deskripsi:null,idKedeputian:null,idUnitKerja:null,triwulan:null}},appendToFormData(){const e=new FormData;return"update"==this.mode&&e.append("_method","PATCH"),e.append("idSektor",this.form.idSektor),e.append("namaTema",this.form.namaTema),e.append("deskripsi",this.form.deskripsi),e.append("idKedeputian",this.form.idKedeputian),e.append("idUnitKerja",this.form.idUnitKerja),e.append("tahun",this.form.tahun),e.append("triwulan",this.form.triwulan),e.append("nip",localStorage.getItem("nip")),e},async loadTemaById(){try{const e=await E()({method:"GET",baseURL:this.$apiAddress,url:`/api/tema/${this.idTema}`,params:{token:localStorage.getItem("token")}});this.editData=await e.data,200==e.status&&(this.form={tahun:this.editData.tahun,idSektor:this.editData.idSektor,namaTema:this.editData.namaTema,deskripsi:this.editData.deskripsi,idKedeputian:this.editData.idKedeputian,idUnitKerja:this.editData.idUnitKerja,triwulan:this.editData.triwulan}),this.loading=!1}catch(e){this.toastError(e.message),this.loading=!1}},toastSuccess(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})},toastWarning(e){this.$toast.open({message:e,type:"warning",position:"top-right",duration:3e3})}}},A=a(89);const O=(0,A.Z)(q,[["render",F]]);var Z=O}}]);
//# sourceMappingURL=468.2977275b.js.map