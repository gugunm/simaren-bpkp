"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[157],{3157:function(t,e,i){i.d(e,{Z:function(){return O}});var o=i(3396),a=i(9242);const s={key:0,class:"h4 mb-4"},l={key:1,class:"h4 mb-4"},r=(0,o.Uk)("ID "),n={class:"col-sm-2"},d=(0,o.Uk)("Tahun "),m=(0,o._)("span",{class:"text-red-500"},"*",-1),u={class:"col-sm-2"},p=(0,o.Uk)("Nama Sektor "),c=(0,o._)("span",{class:"text-red-500"},"*",-1),h={class:"col-sm-9"},k=(0,o.Uk)("Nama Tema "),f=(0,o._)("span",{class:"text-red-500"},"*",-1),b={class:"col-sm-9"},T=(0,o.Uk)("Nama Topik "),w=(0,o._)("span",{class:"text-red-500"},"*",-1),g={class:"col-sm-9"},S=(0,o.Uk)("Unit Kerja Kontributor"),_=(0,o._)("span",{class:"text-red-500"},"*",-1),v={class:"col-sm-9"},K=(0,o.Uk)("Informasi Kontributor Yang Diharapkan "),U=(0,o._)("span",{class:"text-red-500"},"*",-1),y={class:"col-sm-9"},W=(0,o._)("p",{class:"text-sm mt-2 text-red-500"}," note : pisahkan informasi kontributor dengan titik koma ';' ",-1),D=(0,o.Uk)("Triwulan Pelaporan Tema "),V=(0,o._)("span",{class:"text-red-500"},"*",-1),$={class:"col-sm-4"},C=(0,o.Uk)(" Batal "),L=(0,o.Uk)(" Reset "),x={key:0},j=(0,o.Uk)(" Simpan "),I={key:1};function F(t,e,i,F,P,R){const E=(0,o.up)("Loading"),B=(0,o.up)("CFormLabel"),q=(0,o.up)("CFormInput"),A=(0,o.up)("CRow"),N=(0,o.up)("VueMultiselect"),O=(0,o.up)("CFormTextarea"),Z=(0,o.up)("CButton"),G=(0,o.up)("CCol"),M=(0,o.up)("CSpinner"),H=(0,o.up)("CForm"),Y=(0,o.up)("CCardBody"),z=(0,o.up)("CCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(E,{active:P.loading,"onUpdate:active":e[0]||(e[0]=t=>P.loading=t),"is-full-page":!0},null,8,["active"]),(0,o.Wm)(z,{class:"mb-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{class:"p-4"},{default:(0,o.w5)((()=>["create"==i.mode?((0,o.wg)(),(0,o.iD)("h4",s,"Tambah Kontributor")):"update"==i.mode?((0,o.wg)(),(0,o.iD)("h4",l,"Edit Kontributor")):(0,o.kq)("",!0),"update"==i.mode?((0,o.wg)(),(0,o.j4)(A,{key:2,class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[r])),_:1}),(0,o._)("div",n,[(0,o.Wm)(q,{modelValue:P.editData.idKontributor,"onUpdate:modelValue":e[1]||(e[1]=t=>P.editData.idKontributor=t),readonly:""},null,8,["modelValue"])])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(H,{onSubmit:(0,a.iM)(R.submit,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[d,m])),_:1}),(0,o._)("div",u,[(0,o.Wm)(q,{type:"number",id:"tahun",modelValue:P.form.tahun,"onUpdate:modelValue":e[2]||(e[2]=t=>P.form.tahun=t),readonly:"",required:""},null,8,["modelValue"])])])),_:1}),(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"nama-sektor",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[p,c])),_:1}),(0,o._)("div",h,[(0,o.Wm)(N,{id:"nama-sektor",modelValue:P.selectedSektor,"onUpdate:modelValue":e[3]||(e[3]=t=>P.selectedSektor=t),options:P.optionsSektor,placeholder:"Pilih Sektor",label:"deskripsi","track-by":"deskripsi","custom-label":R.viewSelectSektor},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"nama-tema",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[k,f])),_:1}),(0,o._)("div",b,[(0,o.Wm)(N,{id:"nama-tema",modelValue:P.selectedTema,"onUpdate:modelValue":e[4]||(e[4]=t=>P.selectedTema=t),options:P.optionsTema,placeholder:"Pilih Tema",label:"deskripsi","track-by":"deskripsi","custom-label":R.viewSelectTema},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"nama-topik",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[T,w])),_:1}),(0,o._)("div",g,[(0,o.Wm)(N,{id:"nama-topik",modelValue:P.selectedTopik,"onUpdate:modelValue":e[5]||(e[5]=t=>P.selectedTopik=t),options:P.optionsTopik,placeholder:"Pilih Topik",label:"deskripsi","track-by":"deskripsi","custom-label":R.viewSelectTopik},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"unit-kontributor",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[S,_])),_:1}),(0,o._)("div",v,[(0,o.Wm)(N,{id:"unit-kontributor",modelValue:P.selectedKontributor,"onUpdate:modelValue":e[6]||(e[6]=t=>P.selectedKontributor=t),options:P.optionsKontributor,placeholder:"Pilih Unit Kerja Kontributor",label:"deskripsi","track-by":"deskripsi","custom-label":R.viewSelectSearch},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"info-kontributor",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[K,U])),_:1}),(0,o._)("div",y,[(0,o.Wm)(O,{id:"info-kontributor",rows:"3",modelValue:P.form.deskripsi,"onUpdate:modelValue":e[7]||(e[7]=t=>P.form.deskripsi=t),required:"",placeholder:"Info A; Info B; Info C;"},null,8,["modelValue"]),W])])),_:1}),(0,o.Wm)(A,{class:"mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{for:"tw-tema",class:"col-sm-3 col-form-label"},{default:(0,o.w5)((()=>[D,V])),_:1}),(0,o._)("div",$,[(0,o.Wm)(N,{id:"tw-sektor",modelValue:P.form.triwulan,"onUpdate:modelValue":e[8]||(e[8]=t=>P.form.triwulan=t),options:P.optionsTriwulan,multiple:!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pilih Triwulan"},null,8,["modelValue","options"])])])),_:1}),(0,o.Wm)(A,{class:"mt-8 view-form"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{sm:"12",lg:"6",class:"mb-3"},{default:(0,o.w5)((()=>["view"!=i.mode?((0,o.wg)(),(0,o.j4)(Z,{key:0,variant:"outline",color:"dark",onClick:e[9]||(e[9]=e=>t.$router.push("/kontributor")),class:"px-5"},{default:(0,o.w5)((()=>[C])),_:1})):(0,o.kq)("",!0)])),_:1}),"create"==i.mode||"update"==i.mode?((0,o.wg)(),(0,o.j4)(G,{key:0,sm:"12",md:"6",class:"flex content-center justify-end pr-3 mb-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{type:"button",class:"ml-1 px-5 text-white",color:"danger",onClick:R.reset},{default:(0,o.w5)((()=>[L])),_:1},8,["onClick"]),(0,o.Wm)(Z,{type:"submit",color:"info",class:"px-5 ml-2 text-white"},{default:(0,o.w5)((()=>[P.loading?((0,o.wg)(),(0,o.iD)("div",x,[(0,o.Wm)(M,{color:"white",size:"sm",class:"mr-2"}),j])):((0,o.wg)(),(0,o.iD)("p",I,"Simpan"))])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})],64)}var P=i(6265),R=i.n(P),E=i(6368),B=i(6216),q={components:{VueMultiselect:E.ZP,Loading:B.Z},props:["mode","idKontributor"],data(){return{form:this.getEmptyForm(),submitted:!1,loading:!1,selectedSektor:null,optionsSektor:[],selectedTema:null,optionsTema:[],selectedTopik:null,optionsTopik:[],selectedKontributor:null,optionsKontributor:[],optionsTriwulan:[1,2,3,4],editData:{},valDeputi:null,valRendal:null}},watch:{selectedSektor:function(t){t&&(this.form.idSektor=t.idSektor,this.selectedTema="",this.getListTema(),this.selectedTopik="",this.getListTopik())},selectedTema:function(t){t&&(this.form.idTema=t.idTema,this.selectedTopik="",this.getListTopik())},selectedTopik:function(t){t&&(this.form.idTopik=t.idTopik,this.form.valDeputi=t.idKedeputian,this.form.valRendal=t.idUnitKerja)},selectedKontributor:function(t){t&&(this.form.idUnitKontributor=t.id)}},async mounted(){if(this.form.tahun=localStorage.tahun,this.optionsSektor=await this.$store.dispatch("loadListSektor"),this.optionsKontributor=await this.$store.dispatch("loadListUnitKontributor"),"update"==this.mode){this.loading=!0,await this.loadKontributorById();const t=this.optionsSektor.filter((t=>t.idSektor==this.form.idSektor));this.selectedSektor=t[0],await this.getListTema();const e=this.optionsTema.filter((t=>t.idTema==this.form.idTema));this.selectedTema=e[0],await this.getListTopik();const i=this.optionsTopik.filter((t=>t.idTopik==this.form.idTopik));this.selectedTopik=i[0];const o=this.optionsKontributor.filter((t=>t.id==this.form.idUnitKontributor));this.selectedKontributor=o[0]}},methods:{async getListTema(){this.optionsTema=await this.$store.dispatch("loadListTema",{idSektor:this.form.idSektor})},async getListTopik(){this.optionsTopik=await this.$store.dispatch("loadListTopik",{idSektor:this.form.idSektor,idTema:this.form.idTema})},viewSelectSektor({namaSektor:t}){return`${t}`},viewSelectTema({namaTema:t}){return`${t}`},viewSelectTopik({namaTopik:t}){return`${t}`},viewSelectSearch({alias:t,deskripsi:e}){return`${t} - ${e}`},async submit(){const t=this.$func.isNullOfObjElement(this.form);if(t){this.submitted=!0;const t=this.appendToFormData();try{if("create"==this.mode){this.loading=!0;const e=await R()({method:"POST",baseURL:this.$apiAddress,url:"/api/kontributor",data:t,params:{token:localStorage.getItem("token")}});200!=e.status?this.error="Gagal menyimpan data":(this.loading=!1,this.$router.push("/kontributor"),this.toastSuccess("Berhasil menyimpan data"))}else if("update"==this.mode){this.loading=!0;const e=await R()({method:"POST",baseURL:this.$apiAddress,url:`/api/kontributor/${this.idKontributor}`,data:t,params:{token:localStorage.getItem("token")}});200!=e.status?this.error="Gagal merubah data":(this.loading=!1,this.$router.push("/kontributor"),this.toastSuccess("Berhasil merubah data"))}}catch(e){setTimeout((()=>{this.loading=!1,this.toastError("Terjadi kesalahan saat submit data")}),500)}}else this.toastWarning("Lengkapi data sebelum submit!")},reset(){this.form=this.getEmptyForm(),this.submitted=!1,this.selectedSektor=null,this.selectedTema=null,this.selectedTopik=null,this.valDeputi=null,this.valRendal=null,this.selectedKontributor=null},getEmptyForm(){return{tahun:null,idSektor:null,idTema:null,idTopik:null,valDeputi:null,valRendal:null,idUnitKontributor:null,deskripsi:null,triwulan:null}},appendToFormData(){const t=new FormData;return"update"==this.mode&&t.append("_method","PATCH"),t.append("idSektor",this.form.idSektor),t.append("idTema",this.form.idTema),t.append("idTopik",this.form.idTopik),t.append("idKedeputian",this.form.valDeputi),t.append("idUnitKerja",this.form.valRendal),t.append("idUnitKontributor",this.form.idUnitKontributor),t.append("deskripsi",this.form.deskripsi),t.append("tahun",this.form.tahun),t.append("triwulan",this.form.triwulan),t.append("nip",localStorage.getItem("nip")),t},async loadKontributorById(){try{const t=await R()({method:"GET",baseURL:this.$apiAddress,url:`/api/kontributor/${this.idKontributor}`,params:{token:localStorage.getItem("token")}});this.editData=await t.data,200==t.status&&(this.form={tahun:this.editData.tahun,idSektor:this.editData.idSektor,idTema:this.editData.idTema,idTopik:this.editData.idTopik,idKedeputian:this.editData.idKedeputian,idUnitKerja:this.editData.idUnitKerja,idUnitKontributor:this.editData.idUnitKontributor,deskripsi:this.editData.deskripsi,triwulan:this.editData.triwulan}),this.loading=!1}catch(t){this.toastError(t.message),this.loading=!1}},toastSuccess(t){this.$toast.open({message:t,type:"success",position:"top-right",duration:3e3})},toastError(t){this.$toast.open({message:t,type:"error",position:"top-right",duration:3e3})},toastWarning(t){this.$toast.open({message:t,type:"warning",position:"top-right",duration:3e3})}}},A=i(89);const N=(0,A.Z)(q,[["render",F]]);var O=N}}]);
//# sourceMappingURL=157.efe35527.js.map