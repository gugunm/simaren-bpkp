"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[465],{465:function(a,t,e){e.d(t,{Z:function(){return Na}});var i=e(3396),s=e(9242),l=e(7139);const n={key:0,class:"h4 mb-4"},o={key:1,class:"h4 mb-4"},d=(0,i.Uk)("ID "),p={class:"col-sm-2"},r=(0,i.Uk)("Nama KAP "),m=(0,i._)("span",{class:"text-red-500"},"*",-1),u={class:"col-sm-9"},c={key:0},k={key:1},h=(0,i.Uk)("Unit Kerja PJ KAP "),f=(0,i._)("span",{class:"text-red-500"},"*",-1),w={class:"col-sm-2"},b={class:"col-sm-2"},g=(0,i.Uk)(" + PKPT "),P={key:1},K=(0,i.Uk)("Tahun "),_=(0,i._)("span",{class:"text-red-500"},"*",-1),y={class:"col-sm-2"},U=(0,i.Uk)("Unit Kerja"),D=(0,i._)("span",{class:"text-red-500"},"*",-1),x={class:"col-sm-4"},W=(0,i.Uk)("Nama PKPT"),v=(0,i._)("span",{class:"text-red-500"},"*",-1),j={class:"col-sm-9"},S=(0,i.Uk)("BIDWAS"),I=(0,i._)("span",{class:"text-red-500"},"*",-1),R={class:"col-sm-9"},V=(0,i.Uk)("Informasi Yang Diharapkan"),B=(0,i._)("span",{class:"text-red-500"},"*",-1),T={class:"col-sm-9"},$=(0,i.Uk)("Rendal Pelaporan"),C=(0,i._)("span",{class:"text-red-500"},"*",-1),O={class:"col-sm-4"},L=(0,i.Uk)("HP "),A=(0,i._)("span",{class:"text-red-500"},"*",-1),E={class:"col-sm-2"},J=(0,i.Uk)("Jenis Kegiatan "),N=(0,i._)("span",{class:"text-red-500"},"*",-1),F={class:"col-sm-4"},q=(0,i.Uk)("Sumber Dana "),z=(0,i._)("span",{class:"text-red-500"},"*",-1),H=["id","value","onChange"],M=["for"],Y=(0,i.Uk)("Total Dana "),Z=(0,i._)("span",{class:"text-red-500"},"*",-1),G={class:"col-sm-4"},Q=(0,i.Uk)("RMP"),X=(0,i._)("span",{class:"text-red-500"},"*",-1),aa={class:"col-sm-4"},ta=(0,i.Uk)("RPL Triwulan "),ea=(0,i._)("span",{class:"text-red-500"},"*",-1),ia={class:"col-sm-4"},sa=(0,i.Uk)("Pilih IKK "),la=(0,i._)("span",{class:"text-red-500"},"*",-1),na={class:"col-sm-4"},oa={class:"col-sm-12"},da={key:0},pa=(0,i.Uk)(" Simpan PKPT "),ra={key:1},ma={key:2,class:"flex flex-col mt-4"},ua={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},ca={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},ka={class:"shadow-sm overflow-hidden border-b border-gray-200 sm:rounded-lg"},ha={class:"min-w-full divide-y divide-gray-200"},fa=(0,i._)("thead",{class:"bg-gray-50"},[(0,i._)("tr",null,[(0,i._)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Nama PKPT "),(0,i._)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Unit Kerja "),(0,i._)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Bidang Was "),(0,i._)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," TW Pelaporan "),(0,i._)("th",{scope:"col",class:"relative px-6 py-3"},[(0,i._)("span",{class:"sr-only"},"Hapus")])])],-1),wa={class:"bg-white divide-y divide-gray-200"},ba={class:"px-6 py-4"},ga={class:"text-sm text-gray-900"},Pa={class:"px-6 py-4 whitespace-nowrap"},Ka={class:"text-sm text-gray-900"},_a={class:"px-6 py-4"},ya={class:"text-sm text-gray-900"},Ua={class:"px-6 py-4 whitespace-nowrap"},Da={class:"text-sm text-gray-900"},xa={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},Wa=["onClick"],va=(0,i.Uk)(" Batal "),ja=(0,i.Uk)(" Reset "),Sa=(0,i._)("p",null,"Simpan",-1),Ia={key:0},Ra=(0,i.Uk)(" Ubah PKPT "),Va={key:1};function Ba(a,t,e,Ba,Ta,$a){const Ca=(0,i.up)("Loading"),Oa=(0,i.up)("CFormLabel"),La=(0,i.up)("CFormInput"),Aa=(0,i.up)("CRow"),Ea=(0,i.up)("VueMultiselect"),Ja=(0,i.up)("CButton"),Na=(0,i.up)("CFormTextarea"),Fa=(0,i.up)("CCol"),qa=(0,i.up)("CSpinner"),za=(0,i.up)("CForm"),Ha=(0,i.up)("CCardBody"),Ma=(0,i.up)("CCard");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(Ca,{active:Ta.loading,"onUpdate:active":t[0]||(t[0]=a=>Ta.loading=a),"is-full-page":!0},null,8,["active"]),(0,i.Wm)(Ma,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(Ha,{class:"p-4"},{default:(0,i.w5)((()=>["create"==e.mode?((0,i.wg)(),(0,i.iD)("h4",n,"Tambah PKPT")):"update"==e.mode?((0,i.wg)(),(0,i.iD)("h4",o,"Edit PKPT")):(0,i.kq)("",!0),"update"==e.mode?((0,i.wg)(),(0,i.j4)(Aa,{key:2,class:"mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i._)("div",p,[(0,i.Wm)(La,{modelValue:Ta.editData.idPkpt,"onUpdate:modelValue":t[1]||(t[1]=a=>Ta.editData.idPkpt=a),readonly:""},null,8,["modelValue"])])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(za,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"nama-kap",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[r,m])),_:1}),(0,i._)("div",u,["update"==e.mode?((0,i.wg)(),(0,i.iD)("div",c,[Ta.selectedKap?((0,i.wg)(),(0,i.j4)(La,{key:0,type:"text",value:Ta.selectedKap.namaKap,readonly:""},null,8,["value"])):(0,i.kq)("",!0)])):((0,i.wg)(),(0,i.iD)("div",k,[$a.isReadOnlyKap?((0,i.wg)(),(0,i.j4)(La,{key:0,type:"text",value:Ta.selectedKap.namaKap,readonly:""},null,8,["value"])):((0,i.wg)(),(0,i.j4)(Ea,{key:1,id:"nama-kap",placeholder:"Pilih KAP",label:"namaKap",modelValue:Ta.selectedKap,"onUpdate:modelValue":t[2]||(t[2]=a=>Ta.selectedKap=a),options:Ta.optionsKap,"track-by":"namaKap",deselectLabel:"",selectLabel:""},null,8,["modelValue","options"]))]))])])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"pj-kap",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[h,f])),_:1}),(0,i._)("div",w,[(0,i.Wm)(La,{type:"text",id:"pj-kap",modelValue:Ta.pjKap,"onUpdate:modelValue":t[3]||(t[3]=a=>Ta.pjKap=a),readonly:"",placeholder:"sesuai kap"},null,8,["modelValue"])])])),_:1}),"create"==e.mode?((0,i.wg)(),(0,i.j4)(Aa,{key:0,class:"mb-4 mt-4"},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i.Wm)(Ja,{type:"button",class:"px-4 py-2",color:"info",size:"sm",onClick:t[4]||(t[4]=a=>Ta.isOpenForm=!Ta.isOpenForm),variant:"outline"},{default:(0,i.w5)((()=>[g])),_:1})])])),_:1})):(0,i.kq)("",!0),Ta.isOpenForm?((0,i.wg)(),(0,i.iD)("div",P,[(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[K,_])),_:1}),(0,i._)("div",y,[(0,i.Wm)(La,{type:"number",id:"tahun",modelValue:Ta.form.tahun,"onUpdate:modelValue":t[5]||(t[5]=a=>Ta.form.tahun=a),readonly:"",required:""},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"unit-kerja",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[U,D])),_:1}),(0,i._)("div",x,[(0,i.Wm)(Ea,{id:"unit-kontributor",modelValue:Ta.selectedUnitPkpt,"onUpdate:modelValue":t[6]||(t[6]=a=>Ta.selectedUnitPkpt=a),options:Ta.optionsUnitPkpt,placeholder:"Pilih Unit Kerja",label:"namaUnitKontributor","track-by":"namaUnitKontributor","custom-label":$a.viewSelectUnitPkpt,selectLabel:"",deselectLabel:""},null,8,["modelValue","options","custom-label"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"nama-pkpt",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[W,v])),_:1}),(0,i._)("div",j,[(0,i.Wm)(Na,{id:"nama-pkpt",modelValue:Ta.form.namaPkpt,"onUpdate:modelValue":t[7]||(t[7]=a=>Ta.form.namaPkpt=a),rows:"3",required:""},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"bidwas",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[S,I])),_:1}),(0,i._)("div",R,[(0,i.Wm)(Ea,{id:"bidwas",modelValue:Ta.selectedBidwas,"onUpdate:modelValue":t[8]||(t[8]=a=>Ta.selectedBidwas=a),options:Ta.optionsBidwas,placeholder:"Pilih Bidwas",label:"namaBidwas","track-by":"namaBidwas",selectLabel:"",deselectLabel:""},null,8,["modelValue","options"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"info-pkpt",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[V,B])),_:1}),(0,i._)("div",T,[(0,i.Wm)(Na,{id:"info-pkpt",rows:"3",modelValue:Ta.infoDiharapkanPkpt,"onUpdate:modelValue":t[9]||(t[9]=a=>Ta.infoDiharapkanPkpt=a),readonly:"",required:""},null,8,["modelValue"])])])),_:1}),$a.isUnitPkptPerwakilan||Ta.isSektorAppd?((0,i.wg)(),(0,i.j4)(Aa,{key:0,class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"rendal-pelaporan",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[$,C])),_:1}),(0,i._)("div",O,[Ta.isSektorAppd?((0,i.wg)(),(0,i.j4)(La,{key:0,value:"D302",readonly:""})):((0,i.wg)(),(0,i.j4)(Ea,{key:1,id:"rendal-pelaporan",modelValue:Ta.selectedRendPelaporan,"onUpdate:modelValue":t[10]||(t[10]=a=>Ta.selectedRendPelaporan=a),options:Ta.optionsRendPelaporan,placeholder:"Pilih Rendal Pelaporan",label:"namaUnitKontributor","track-by":"namaUnitKontributor","custom-label":$a.viewSelectUnitPkpt,selectLabel:"",deselectLabel:""},null,8,["modelValue","options","custom-label"]))])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"hp",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[L,A])),_:1}),(0,i._)("div",E,[(0,i.Wm)(La,{type:"number",modelValue:Ta.form.hp,"onUpdate:modelValue":t[11]||(t[11]=a=>Ta.form.hp=a),id:"hp",required:""},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"jenis-kegiatan",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[J,N])),_:1}),(0,i._)("div",F,[(0,i.Wm)(Ea,{id:"jenis-kegiatan",modelValue:Ta.selectedJenisKegiatan,"onUpdate:modelValue":t[12]||(t[12]=a=>Ta.selectedJenisKegiatan=a),options:Ta.optionsJenisKegiatan,placeholder:"Pilih Jenis Kegiatan",label:"jenisKegiatanName","track-by":"jenisKegiatanName",selectLabel:"",deselectLabel:""},null,8,["modelValue","options"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(Fa,{sm:"3"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"sumber-dana",class:"col-form-label"},{default:(0,i.w5)((()=>[q,z])),_:1})])),_:1}),(0,i.Wm)(Fa,{sm:"9"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Ta.optionsDana,(a=>((0,i.wg)(),(0,i.j4)(Aa,{key:a.deskripsi,class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Fa,{sm:"3"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("input",{class:"mr-3",type:"checkbox",id:a.deskripsi,value:`${a.deskripsi}#${a.id}`,"onUpdate:modelValue":t[13]||(t[13]=a=>Ta.choosenDana=a),onChange:t=>$a.changeCheckedDana(a)},null,40,H),[[s.e8,Ta.choosenDana]]),(0,i._)("label",{for:a.deskripsi},(0,l.zw)(a.deskripsi),9,M)])),_:2},1024),(0,i.Wm)(Fa,{sm:"5"},{default:(0,i.w5)((()=>[(0,i.Wm)(La,{type:"number",modelValue:a.nilai,"onUpdate:modelValue":t=>a.nilai=t,readonly:!a.status},null,8,["modelValue","onUpdate:modelValue","readonly"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"dana",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[Y,Z])),_:1}),(0,i._)("div",G,[(0,i.Wm)(La,{value:a.$func.thousandSeprator($a.totalDana),id:"dana",readonly:""},null,8,["value"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"rmp",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[Q,X])),_:1}),(0,i._)("div",aa,[(0,i.Wm)(Ea,{id:"rmp",modelValue:Ta.selectedRmp,"onUpdate:modelValue":t[14]||(t[14]=a=>Ta.selectedRmp=a),options:Ta.optionsRmp,placeholder:"Pilih RMP",label:"deskripsi","track-by":"deskripsi"},null,8,["modelValue","options"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"tw",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[ta,ea])),_:1}),(0,i._)("div",ia,[(0,i.Wm)(Ea,{id:"tw",modelValue:Ta.form.triwulan,"onUpdate:modelValue":t[15]||(t[15]=a=>Ta.form.triwulan=a),options:Ta.optionsTriwulan,multiple:!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pilih Triwulan"},null,8,["modelValue","options"])])])),_:1}),(0,i.Wm)(Aa,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(Oa,{for:"pilih-ikk",class:"col-sm-3 col-form-label"},{default:(0,i.w5)((()=>[sa,la])),_:1}),(0,i._)("div",na,[(0,i.Wm)(Ea,{id:"pilih-ikk",modelValue:Ta.selectedIkk,"onUpdate:modelValue":t[16]||(t[16]=a=>Ta.selectedIkk=a),options:Ta.optionsIkk,placeholder:"Pilih IKK",label:"uraianIkk","track-by":"uraianIkk","custom-label":$a.viewSelectIkk,selectLabel:"",deselectLabel:""},null,8,["modelValue","options","custom-label"])])])),_:1}),"create"==e.mode?((0,i.wg)(),(0,i.j4)(Aa,{key:1,class:"mb-4 mt-4 text-center"},{default:(0,i.w5)((()=>[(0,i._)("div",oa,[(0,i.Wm)(Ja,{type:"button",class:"px-4 text-white",color:"success",size:"sm",onClick:$a.submit},{default:(0,i.w5)((()=>[Ta.loading?((0,i.wg)(),(0,i.iD)("div",da,[(0,i.Wm)(qa,{color:"white",size:"sm",class:"mr-2"}),pa])):((0,i.wg)(),(0,i.iD)("span",ra,"Simpan PKPT"))])),_:1},8,["onClick"])])])),_:1})):(0,i.kq)("",!0)])):(0,i.kq)("",!0),"update"!=e.mode?((0,i.wg)(),(0,i.iD)("div",ma,[(0,i._)("div",ua,[(0,i._)("div",ca,[(0,i._)("div",ka,[(0,i._)("table",ha,[fa,(0,i._)("tbody",wa,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Ta.pkpts,((a,t)=>((0,i.wg)(),(0,i.iD)("tr",{key:a.nama},[(0,i._)("td",ba,[(0,i._)("div",ga,(0,l.zw)(a.nama_pkpt),1)]),(0,i._)("td",Pa,[(0,i._)("div",Ka,(0,l.zw)(a.nama_kontributor_pkpt),1)]),(0,i._)("td",_a,[(0,i._)("div",ya,(0,l.zw)(a.nama_bidwas),1)]),(0,i._)("td",Ua,[(0,i._)("div",Da,(0,l.zw)(a.triwulan),1)]),(0,i._)("td",xa,[(0,i._)("button",{class:"text-red-600 hover:text-red-900",onClick:e=>$a.deletePkpt(t,a.id)}," Hapus ",8,Wa)])])))),128))])])])])])])):(0,i.kq)("",!0),(0,i.Wm)(Aa,{class:"mt-8 view-form"},{default:(0,i.w5)((()=>[(0,i.Wm)(Fa,{sm:"12",lg:"6",class:"mb-3"},{default:(0,i.w5)((()=>["view"!=e.mode?((0,i.wg)(),(0,i.j4)(Ja,{key:0,variant:"outline",color:"dark",onClick:t[17]||(t[17]=t=>a.$router.push("/pkpt")),class:"px-5"},{default:(0,i.w5)((()=>[va])),_:1})):(0,i.kq)("",!0)])),_:1}),"create"==e.mode||"update"==e.mode?((0,i.wg)(),(0,i.j4)(Fa,{key:0,sm:"12",md:"6",class:"flex content-center justify-end pr-3 mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(Ja,{type:"button",class:"ml-1 px-5 text-white",color:"danger",onClick:$a.reset},{default:(0,i.w5)((()=>[ja])),_:1},8,["onClick"]),"create"==e.mode?((0,i.wg)(),(0,i.j4)(Ja,{key:0,type:"button",color:"info",class:"px-5 ml-2 text-white",onClick:$a.submitToBack},{default:(0,i.w5)((()=>[Sa])),_:1},8,["onClick"])):((0,i.wg)(),(0,i.j4)(Ja,{key:1,type:"button",color:"info",class:"px-5 ml-2 text-white",onClick:$a.submit},{default:(0,i.w5)((()=>[Ta.loading?((0,i.wg)(),(0,i.iD)("div",Ia,[(0,i.Wm)(qa,{color:"white",size:"sm",class:"mr-2"}),Ra])):((0,i.wg)(),(0,i.iD)("p",Va,"Ubah PKPT"))])),_:1},8,["onClick"]))])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})],64)}var Ta=e(6265),$a=e.n(Ta),Ca=e(6368),Oa=e(6216);const La=[{id:60,deskripsi:"Belum Ditentukan"},{id:1,deskripsi:"Januari"},{id:2,deskripsi:"Februari"},{id:3,deskripsi:"Maret"},{id:4,deskripsi:"April"},{id:5,deskripsi:"Mei"},{id:6,deskripsi:"Juni"},{id:7,deskripsi:"Juli"},{id:8,deskripsi:"Agustus"},{id:9,deskripsi:"September"},{id:10,deskripsi:"Oktober"},{id:11,deskripsi:"November"},{id:12,deskripsi:"Desember"}];var Aa={components:{VueMultiselect:Ca.ZP,Loading:Oa.Z},props:["mode","idPkpt"],data(){return{isSektorAppd:!1,idKap:null,pjKap:null,form:this.getEmptyForm(),submitted:!1,loading:!1,isOpenForm:!0,editData:{},selectedKap:null,optionsKap:[],selectedKontributor:null,optionsKontributor:[],selectedBidwas:null,optionsBidwas:[],optionsJenisKegiatan:[],selectedJenisKegiatan:null,optionsIkk:[],selectedIkk:null,refOptionsDana:[],optionsDana:[],choosenDana:["APBN#52"],selectedRmp:null,optionsRmp:La,selectedUnitPkpt:null,optionsUnitPkpt:[],selectedRendPelaporan:null,optionsRendPelaporan:[],optionsTriwulan:[1,2,3,4],infoDiharapkanPkpt:null,pkpts:[]}},watch:{selectedKap:function(a){a&&(a.topiks.some((a=>28==a.idSektor))?(this.isSektorAppd=!0,this.form.idRendPelaporan=339):(this.isSektorAppd=!1,this.form.idRendPelaporan=0),this.idKap=a.idKap,this.pjKap=a.pjKap,this.getOptionsUnitPkpt())},selectedUnitPkpt:function(a){a&&(this.form.idTopikOrKontributor=a.idKontributor,this.form.idUnitKerja=a.idUnitKontributor,this.form.namaUnitKerja=a.namaUnitKontributor,this.form.peranPkpt=a.peranPkpt,this.infoDiharapkanPkpt=a.infoKontributor,this.selectedBidwas=null,this.optionsBidwas=[],this.loadBidwas(this.form.idUnitKerja),a.namaUnitKontributor.includes("PW")&&this.getOptionsRendPelaporan())},selectedRendPelaporan:function(a){a&&(this.form.idRendPelaporan=a.idUnitKontributor)},selectedBidwas:function(a){a&&(this.form.idBidwas=a.id,this.form.namaBidwasPkpt=a.namaBidwas)},selectedJenisKegiatan:function(a){a&&(this.form.jenisKegiatanId=a.jenisKegiatanId,this.form.jenisKegiatanName=a.jenisKegiatanName)},selectedIkk:function(a){a&&(this.form.kodeIkk=a.kodeIkk,this.form.uraianIkk=a.uraianIkk)},selectedRmp:function(a){a&&(this.form.idRmp=a.id,this.form.namaRmp=a.deskripsi)}},computed:{isReadOnlyKap:function(){return this.pkpts.length>0},isUnitPkptPerwakilan:function(){return!!this.selectedUnitPkpt&&!!this.selectedUnitPkpt.namaUnitKontributor.includes("PW")},totalDana(){return this.optionsDana.length>0?this.optionsDana.reduce(((a,{nilai:t})=>a+Number(t)),0):0}},async mounted(){this.form.tahun=localStorage.tahun,this.optionsKap=await this.$store.dispatch("loadListKap"),this.optionsJenisKegiatan=await this.$store.dispatch("loadListJenisKegiatan"),this.optionsIkk=await this.$store.dispatch("loadListIkk");const a=await this.$store.dispatch("loadListSumberDana");this.refOptionsDana=a.map((a=>({id:a.idSumberDana,deskripsi:a.namaSumberDana,nilai:0,status:52==a.idSumberDana}))),this.optionsDana=this.refOptionsDana.map((a=>({...a}))),"update"==this.mode&&(this.loading=!0,await this.loadPkptById(),this.selectedKap=this.optionsKap.filter((a=>a.idKap==this.idKap))[0],await this.getOptionsUnitPkpt(),this.selectedUnitPkpt=this.optionsUnitPkpt.filter((a=>a.idUnitKontributor==this.form.idUnitKerja))[0],this.selectedUnitPkpt.namaUnitKontributor.includes("PW")&&(await this.getOptionsRendPelaporan(),this.selectedRendPelaporan=this.optionsRendPelaporan.filter((a=>a.idUnitKontributor==this.form.idRendPelaporan))[0]),await this.loadBidwas(this.form.idUnitKerja),this.selectedBidwas=this.optionsBidwas.filter((a=>a.id==this.form.idBidwas))[0],this.selectedJenisKegiatan=this.optionsJenisKegiatan.filter((a=>a.jenisKegiatanId==this.form.jenisKegiatanId))[0],this.selectedIkk=this.optionsIkk.filter((a=>a.kodeIkk==this.form.kodeIkk))[0],this.selectedRmp=this.optionsRmp.filter((a=>a.id==this.form.idRmp))[0],this.optionsDana=this.optionsDana.map((a=>{const t=this.form.dataDana.find((t=>t.idSumberDanaPkpt==a.id));return t&&(a.nilai=t.jumlahDanaPkpt,a.status=!0,this.choosenDana.push(`${a.deskripsi}#${a.id}`)),a})))},methods:{changeCheckedDana(a){a.status=!a.status,0==a.status&&(a.nilai=0)},async getOptionsUnitPkpt(){let a=await this.$store.dispatch("loadSelectUnitPkpt",{idKap:this.idKap});const t=[];a.forEach((a=>{t.push(...a.kontributors)})),this.optionsUnitPkpt=t},async getOptionsRendPelaporan(){let a=await this.$store.dispatch("loadSelectUnitPkpt",{idKap:this.idKap});const t=[];a.forEach((a=>{t.push(...a.kontributors)})),this.optionsRendPelaporan=t.filter((a=>!a.namaUnitKontributor.includes("PW")))},async loadBidwas(a){this.optionsBidwas=await this.$store.dispatch("loadBidwas",{idUnit:a})},viewSelectSearch({alias:a,deskripsi:t}){return`${a} - ${t}`},viewSelectUnitPkpt({namaUnitKontributor:a,peranPkpt:t}){return`${a} - ${1==t?"Koordinator Topik":"Kontributor Topik"}`},viewSelectIkk({uraianIkk:a,unitKerjaIkk:t}){return`${a} | (${t})`},async deletePkpt(a,t){try{const e=await $a()({method:"DELETE",baseURL:this.$apiAddress,url:`/api/pkpt/${t}`,params:{token:localStorage.getItem("token"),nip:localStorage.getItem("nip")}});200==e.status&&(this.toastSuccess("Berhasil menghapus data"),this.pkpts.splice(a))}catch(e){this.toastError(e.message)}},submitToBack(){this.pkpts.length>0?setTimeout((()=>{this.$router.push("/pkpt"),this.toastSuccess("Berhasil membuat PKPT")}),500):this.toastWarning("Selesaikan dahulu pembuatan PKPT")},async submit(){const a=this.$func.isNullOfObjElement(this.form);if(a){this.submitted=!0;const a=this.appendToFormData();try{if("create"==this.mode){this.loading=!0;const t=await $a()({method:"POST",baseURL:this.$apiAddress,url:"/api/pkpt",data:a,params:{token:localStorage.getItem("token")}}),e=await t.data;this.optionsDana.filter((a=>a.nilai>0)).forEach((async a=>{await $a()({method:"POST",baseURL:this.$apiAddress,url:"/api/danapkpt",data:{idPkpt:e.id_pkpt,idSumberDana:a.id,namaSumberDana:a.deskripsi,nilaiSumberDana:a.nilai},params:{token:localStorage.getItem("token")}})})),200==t.status?(this.loading=!1,this.toastSuccess("Berhasil menyimpan data")):this.error="Gagal menyimpan data",this.pkpts.push(e),this.reset(),this.form.tahun=localStorage.tahun}else if("update"==this.mode){this.loading=!0;const t=await $a()({method:"POST",baseURL:this.$apiAddress,url:`/api/pkpt/${this.idPkpt}`,data:a,params:{token:localStorage.getItem("token")}});this.optionsDana.filter((a=>a.nilai>0)).forEach((async a=>{await $a()({method:"POST",baseURL:this.$apiAddress,url:"/api/danapkpt",data:{idPkpt:this.idPkpt,idSumberDana:a.id,namaSumberDana:a.deskripsi,nilaiSumberDana:a.nilai},params:{token:localStorage.getItem("token")}})})),200!=t.status?this.error="Gagal merubah data":(this.loading=!1,this.$router.push("/pkpt"),this.toastSuccess("Berhasil merubah data"))}}catch(t){setTimeout((()=>{this.loading=!1,this.toastError("Terjadi kesalahan saat submit data")}),500)}}else this.toastWarning("Lengkapi data sebelum submit!")},reset(){this.form=this.getEmptyForm(),this.submitted=!1,this.selectedUnitPkpt=null,this.infoDiharapkanPkpt=null,this.isReadOnlyKap||(this.pjKap=null,this.selectedKap=null),this.selectedKontributor=null,this.selectedBidwas=null,this.selectedJenisKegiatan=null,this.selectedIkk=null,this.selectedRmp=null,this.choosenDana=[],this.optionsDana=this.refOptionsDana.map((a=>({...a})))},getEmptyForm(){return{tahun:null,idTopikOrKontributor:null,peranPkpt:null,idUnitKerja:null,namaPkpt:null,idBidwas:null,idRendPelaporan:0,hp:null,jenisKegiatanId:null,jenisKegiatanName:null,kodeIkk:null,uraianIkk:null,idSumberDana:52,idRmp:null,namaRmp:null,triwulan:[],namaBidwasPkpt:null,namaUnitKerja:null}},appendToFormData(){const a=new FormData;return"update"==this.mode?a.append("_method","PUT"):(a.append("idKap",this.idKap),a.append("tahunPkpt",this.form.tahun)),a.append("idRendalPelaporan",this.form.idRendPelaporan),a.append("idUnitKerja",this.form.idUnitKerja),a.append("namaUnitKerja",this.form.namaUnitKerja),a.append("namaPkpt",this.form.namaPkpt),a.append("idBidwas",this.form.idBidwas),a.append("namaBidwasPkpt",this.form.namaBidwasPkpt),a.append("triwulan",this.form.triwulan),a.append("hp",this.form.hp),a.append("jenisKegiatanId",this.form.jenisKegiatanId),a.append("jenisKegiatanName",this.form.jenisKegiatanName),a.append("kodeIkk",this.form.kodeIkk),a.append("uraianIkk",this.form.uraianIkk),a.append("dana",this.totalDana),a.append("idSumberDana",this.form.idSumberDana),a.append("namaSumberDana",this.choosenDana.join(",")),a.append("idRmp",this.form.idRmp),a.append("namaRmp",this.form.namaRmp),a.append("peranPkpt",this.form.peranPkpt),a.append("idTopikOrKontributor",this.form.idTopikOrKontributor),a.append("nip",localStorage.getItem("nip")),a},async loadPkptById(){try{const a=await $a()({method:"GET",baseURL:this.$apiAddress,url:`/api/pkpt/${this.idPkpt}`,params:{token:localStorage.getItem("token")}});this.editData=await a.data,200==a.status&&(this.idKap=this.editData.idKap,this.form={tahun:this.editData.tahunPkpt,idTopikOrKontributor:0==this.editData.peranPkpt?this.editData.idKontributor:this.editData.idTopik,peranPkpt:this.editData.peranPkpt,idUnitKerja:this.editData.idUnitKerja,namaPkpt:this.editData.namaPkpt,idBidwas:this.editData.idBidwas,hp:this.editData.hp,jenisKegiatanId:this.editData.jenisKegiatanId,jenisKegiatanName:this.editData.jenisKegiatanName,kodeIkk:this.editData.kodeIkk,uraianIkk:this.editData.uraianIkk,dana:this.editData.dana,idSumberDana:this.editData.idSumberDana,idRmp:this.editData.idRmp,triwulan:this.editData.triwulan,idRendPelaporan:this.editData.idRendalPelaporan,dataDana:this.editData.dataDana}),this.loading=!1}catch(a){this.toastError(a.message),this.loading=!1}},toastSuccess(a){this.$toast.open({message:a,type:"success",position:"top-right",duration:3e3})},toastError(a){this.$toast.open({message:a,type:"error",position:"top-right",duration:3e3})},toastWarning(a){this.$toast.open({message:a,type:"warning",position:"top-right",duration:3e3})}}},Ea=e(89);const Ja=(0,Ea.Z)(Aa,[["render",Ba]]);var Na=Ja}}]);
//# sourceMappingURL=465.ce930fef.js.map