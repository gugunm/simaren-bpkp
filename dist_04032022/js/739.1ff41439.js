"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[739],{5739:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(3396);function o(e,t,a,o,i,l){const r=(0,s.up)("Form");return(0,s.wg)(),(0,s.j4)(r,{mode:"create"})}var i=a(1434),l={components:{Form:i.Z}},r=a(89);const n=(0,r.Z)(l,[["render",o]]);var d=n},1434:function(e,t,a){a.d(t,{Z:function(){return q}});var s=a(3396),o=a(9242);const i={key:0,class:"h4 mb-4"},l={key:1,class:"h4 mb-4"},r=(0,s.Uk)("ID "),n={class:"col-sm-2"},d=(0,s.Uk)("Tahun "),m=(0,s._)("span",{class:"text-red-500"},"*",-1),u={class:"col-sm-2"},p=(0,s.Uk)("Nama Sektor "),c=(0,s._)("span",{class:"text-red-500"},"*",-1),h={class:"col-sm-9"},f=(0,s.Uk)("Informasi Sektor Yang Diharapkan"),k=(0,s._)("span",{class:"text-red-500"},"*",-1),w={class:"col-sm-9"},g=(0,s._)("p",{class:"text-sm mt-2 text-red-500"}," note : pisahkan informasi sektor dengan titik koma ';' ",-1),_=(0,s.Uk)("Kedeputian Koord Sektor "),b=(0,s._)("span",{class:"text-red-500"},"*",-1),S={class:"col-sm-9"},y=(0,s.Uk)("Unit Kerja PJ Sektor "),v=(0,s._)("span",{class:"text-red-500"},"*",-1),W={class:"col-sm-9"},U=(0,s.Uk)("Triwulan Pelaporan Sektor "),D=(0,s._)("span",{class:"text-red-500"},"*",-1),C={class:"col-sm-4"},V=(0,s.Uk)(" Batal "),j=(0,s.Uk)(" Reset "),x={key:0},K=(0,s.Uk)(" Simpan "),$={key:1};function R(e,t,a,R,T,I){const F=(0,s.up)("Loading"),E=(0,s.up)("CFormLabel"),P=(0,s.up)("CFormInput"),B=(0,s.up)("CRow"),L=(0,s.up)("CFormTextarea"),q=(0,s.up)("VueMultiselect"),Z=(0,s.up)("CButton"),A=(0,s.up)("CCol"),O=(0,s.up)("CSpinner"),G=(0,s.up)("CForm"),M=(0,s.up)("CCardBody"),H=(0,s.up)("CCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(F,{active:T.loading,"onUpdate:active":t[0]||(t[0]=e=>T.loading=e),"is-full-page":!0},null,8,["active"]),(0,s.Wm)(H,null,{default:(0,s.w5)((()=>[(0,s.Wm)(M,{class:"p-4"},{default:(0,s.w5)((()=>["create"==a.mode?((0,s.wg)(),(0,s.iD)("h4",i,"Tambah Sektor")):"update"==a.mode?((0,s.wg)(),(0,s.iD)("h4",l,"Edit Sektor")):(0,s.kq)("",!0),"update"==a.mode?((0,s.wg)(),(0,s.j4)(B,{key:2,class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[r])),_:1}),(0,s._)("div",n,[(0,s.Wm)(P,{modelValue:T.editData.idSektor,"onUpdate:modelValue":t[1]||(t[1]=e=>T.editData.idSektor=e),readonly:""},null,8,["modelValue"])])])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(G,{onSubmit:(0,o.iM)(I.submit,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[d,m])),_:1}),(0,s._)("div",u,[(0,s.Wm)(P,{type:"number",id:"tahun",modelValue:T.form.tahun,"onUpdate:modelValue":t[2]||(t[2]=e=>T.form.tahun=e),readonly:"",required:""},null,8,["modelValue"])])])),_:1}),(0,s.Wm)(B,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"nama-sektor",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[p,c])),_:1}),(0,s._)("div",h,[(0,s.Wm)(P,{type:"text",id:"nama-sektor",modelValue:T.form.namaSektor,"onUpdate:modelValue":t[3]||(t[3]=e=>T.form.namaSektor=e),required:""},null,8,["modelValue"])])])),_:1}),(0,s.Wm)(B,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"info-sektor",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[f,k])),_:1}),(0,s._)("div",w,[(0,s.Wm)(L,{id:"info-sektor",rows:"3",modelValue:T.form.deskripsi,"onUpdate:modelValue":t[4]||(t[4]=e=>T.form.deskripsi=e),required:"",placeholder:"Info A; Info B; Info C;"},null,8,["modelValue"]),g])])),_:1}),(0,s.Wm)(B,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"deputi-sektor",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[_,b])),_:1}),(0,s._)("div",S,[(0,s.Wm)(P,{type:"text",id:"dep-sektor",value:T.viewDeputi,readonly:""},null,8,["value"])])])),_:1}),(0,s.Wm)(B,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"pj-sektor",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[y,v])),_:1}),(0,s._)("div",W,[(0,s.Wm)(q,{id:"pj-sektor",modelValue:T.selectedRendal,"onUpdate:modelValue":t[5]||(t[5]=e=>T.selectedRendal=e),options:T.optionsRendal,placeholder:"Pilih Unit Kerja Penanggungjawab",label:"deskripsi","track-by":"deskripsi","custom-label":I.viewSelectSearch},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,s.Wm)(B,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{for:"tw-sektor",class:"col-sm-3 col-form-label"},{default:(0,s.w5)((()=>[U,D])),_:1}),(0,s._)("div",C,[(0,s.Wm)(q,{id:"tw-sektor",modelValue:T.form.triwulan,"onUpdate:modelValue":t[6]||(t[6]=e=>T.form.triwulan=e),options:T.optionsTriwulan,multiple:!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pilih Triwulan"},null,8,["modelValue","options"])])])),_:1}),(0,s.Wm)(B,{class:"mt-8 view-form"},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{sm:"12",lg:"6",class:"mb-3"},{default:(0,s.w5)((()=>["view"!=a.mode?((0,s.wg)(),(0,s.j4)(Z,{key:0,variant:"outline",color:"dark",onClick:t[7]||(t[7]=t=>e.$router.push({name:"Index Sektor"})),class:"px-5"},{default:(0,s.w5)((()=>[V])),_:1})):(0,s.kq)("",!0)])),_:1}),"create"==a.mode||"update"==a.mode?((0,s.wg)(),(0,s.j4)(A,{key:0,sm:"12",md:"6",class:"flex content-center justify-end pr-3 mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{type:"button",class:"ml-1 px-5 text-white",color:"danger",onClick:I.reset},{default:(0,s.w5)((()=>[j])),_:1},8,["onClick"]),(0,s.Wm)(Z,{type:"submit",color:"info",class:"px-5 ml-2 text-white"},{default:(0,s.w5)((()=>[T.loading?((0,s.wg)(),(0,s.iD)("div",x,[(0,s.Wm)(O,{color:"white",size:"sm",class:"mr-2"}),K])):((0,s.wg)(),(0,s.iD)("p",$,"Simpan"))])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})],64)}var T=a(6265),I=a.n(T),F=a(6368),E=a(6216),P={components:{VueMultiselect:F.ZP,Loading:E.Z},props:["mode","idSektor"],data(){return{form:this.getEmptyForm(),submitted:!1,loading:!1,viewDeputi:null,selectedRendal:null,optionsRendal:[],optionsTriwulan:[1,2,3,4],editData:{}}},watch:{selectedRendal:function(e){e&&(this.form.idUnitKerja=e.id,this.form.idKedeputian=e.parentId,this.viewDeputi=`${e.deputi} - ${e.namaDeputi}`)}},async mounted(){if(this.form.tahun=localStorage.tahun,this.optionsRendal=await this.$store.dispatch("loadListRendal"),"update"==this.mode){this.loading=!0,await this.loadSektorById();const e=this.optionsRendal.filter((e=>e.id==this.form.idUnitKerja));this.selectedRendal=e[0]}},methods:{viewSelectSearch({alias:e,deskripsi:t}){return`${e} - ${t}`},async submit(){const e=this.$func.isNullOfObjElement(this.form);if(e){this.submitted=!0;const e=this.appendToFormData();try{if("create"==this.mode){this.loading=!0;const t=await I()({method:"POST",baseURL:this.$apiAddress,url:"/api/sektor",data:e,params:{token:localStorage.getItem("token")}});200!=t.status?this.error="Gagal menyimpan data":(this.loading=!1,this.$router.push("/sektor"),this.toastSuccess("Berhasil menyimpan data"))}else if("update"==this.mode){this.loading=!0;const t=await I()({method:"POST",baseURL:this.$apiAddress,url:`/api/sektor/${this.idSektor}`,data:e,params:{token:localStorage.getItem("token")}});200!=t.status?this.error="Gagal merubah data":(this.loading=!1,this.$router.push("/sektor"),this.toastSuccess("Berhasil merubah data"))}}catch(t){setTimeout((()=>{this.loading=!1,this.toastError("Terjadi kesalahan saat submit data")}),500)}}else this.toastWarning("Lengkapi data sebelum submit!")},reset(){this.form=this.getEmptyForm(),this.submitted=!1,this.viewDeputi=null,this.selectedRendal=null},getEmptyForm(){return{tahun:null,namaSektor:null,deskripsi:null,idKedeputian:null,idUnitKerja:null,triwulan:null}},appendToFormData(){const e=new FormData;return"update"==this.mode&&e.append("_method","PATCH"),e.append("tahun",this.form.tahun),e.append("namaSektor",this.form.namaSektor),e.append("deskripsi",this.form.deskripsi),e.append("idKedeputian",this.form.idKedeputian),e.append("idUnitKerja",this.form.idUnitKerja),e.append("triwulan",this.form.triwulan),e.append("nip",localStorage.getItem("nip")),e},async loadSektorById(){try{const e=await I()({method:"GET",baseURL:this.$apiAddress,url:`/api/sektor/${this.idSektor}`,params:{token:localStorage.getItem("token")}});this.editData=await e.data,200==e.status&&(this.form={tahun:this.editData.tahun,namaSektor:this.editData.namaSektor,deskripsi:this.editData.deskripsi,idKedeputian:this.editData.idKedeputian,idUnitKerja:this.editData.idUnitKerja,triwulan:this.editData.triwulan}),this.loading=!1}catch(e){this.toastError(e.message),this.loading=!1}},toastSuccess(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})},toastWarning(e){this.$toast.open({message:e,type:"warning",position:"top-right",duration:3e3})}}},B=a(89);const L=(0,B.Z)(P,[["render",R]]);var q=L}}]);
//# sourceMappingURL=739.1ff41439.js.map