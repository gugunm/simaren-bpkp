"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[368],{16368:function(e,t,i){var n=i(3336),s=i(82482),l=(i(41539),i(39714),i(73210),i(2707),i(57327),i(92222),i(21249),i(9653),i(74916),i(64765),i(47042),i(69826),i(68309),i(73396)),o=i(49242),r=i(87139);function a(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function u(e){return function(){return!e.apply(void 0,arguments)}}function h(e,t){void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false");var i=e.toString().toLowerCase();return-1!==i.indexOf(t.trim())}function c(e,t,i,n){return t?e.filter((function(e){return h(n(e,i),t)})).sort((function(e,t){return n(e,i).length-n(t,i).length})):e}function p(e){return e.filter((function(e){return!e.$isLabel}))}function d(e,t){return function(i){return i.reduce((function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i}),[])}}function f(e,t,i,n,l){return function(o){return o.map((function(o){var r;if(!o[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var a=c(o[i],e,t,l);return a.length?(r={},(0,s.Z)(r,n,o[n]),(0,s.Z)(r,i,a),r):[]}))}}var g=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce((function(e,t){return t(e)}),e)}},m={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return a(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.modelValue||0===this.modelValue?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):c(i,t,this.label,this.customLabel):this.groupValues?d(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(u(this.isSelected)):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map((function(t){return t[e.trackBy]})):this.internalValue},optionKeys:function(){var e=this,t=this.groupValues?this.flatAndStrip(this.options):this.options;return t.map((function(t){return e.customLabel(t,e.label).toString().toLowerCase()}))},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(e,t,i){return g(f(t,i,this.groupValues,this.groupLabel,this.customLabel),d(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return g(d(this.groupValues,this.groupLabel),p)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled:function(e){return!!e.$isDisabled},getOptionLabel:function(e){if(a(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return a(t)?"":t},select:function(e,t){if(e.$isLabel&&this.groupSelect)this.selectGroup(e);else if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isDisabled||e.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{var i=this.isSelected(e);if(i)return void("Tab"!==t&&this.removeElement(e));this.$emit("select",e,this.id),this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(e){var t=this,i=this.options.find((function(i){return i[t.groupLabel]===e.$groupLabel}));if(i){if(this.wholeGroupSelected(i)){this.$emit("remove",i[this.groupValues],this.id);var n=this.internalValue.filter((function(e){return-1===i[t.groupValues].indexOf(e)}));this.$emit("update:modelValue",n)}else{var s=i[this.groupValues].filter((function(e){return!(t.isOptionDisabled(e)||t.isSelected(e))}));this.$emit("select",s,this.id),this.$emit("update:modelValue",this.internalValue.concat(s))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected:function(e){var t=this;return e[this.groupValues].every((function(e){return t.isSelected(e)||t.isOptionDisabled(e)}))},wholeGroupDisabled:function(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!e.$isDisabled)if(!this.allowEmpty&&this.internalValue.length<=1)this.deactivate();else{var i="object"===(0,n.Z)(e)?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.$emit("remove",e,this.id),this.multiple){var s=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("update:modelValue",s)}else this.$emit("update:modelValue",null);this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick((function(){return e.$refs.search&&e.$refs.search.focus()}))):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search&&this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!==typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom,i=t>this.maxHeight;i||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}},b={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1},pointer:function(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight:function(e,t){var i=this;if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];var n=this.options.find((function(e){return e[i.groupLabel]===t.$groupLabel}));return n&&!this.wholeGroupDisabled(n)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(n)}]:"multiselect__option--disabled"},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}},v={name:"vue-multiselect",mixins:[m,b],props:{name:{type:String,default:""},modelValue:{type:null,default:function(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and ".concat(e," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}},y={ref:"tags",class:"multiselect__tags"},w={class:"multiselect__tags-wrap"},V={class:"multiselect__spinner"},L={key:0},O={class:"multiselect__option"},S={class:"multiselect__option"},$=(0,l.Uk)("No elements found. Consider changing the search query."),_={class:"multiselect__option"},x=(0,l.Uk)("List is empty.");function k(e,t,i,n,s,a){return(0,l.wg)(),(0,l.j4)("div",{tabindex:e.searchable?-1:i.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":i.disabled,"multiselect--above":a.isAbove},"multiselect"],onFocus:t[14]||(t[14]=function(t){return e.activate()}),onBlur:t[15]||(t[15]=function(t){return!e.searchable&&e.deactivate()}),onKeydown:[t[16]||(t[16]=(0,o.D2)((0,o.iM)((function(t){return e.pointerForward()}),["self","prevent"]),["down"])),t[17]||(t[17]=(0,o.D2)((0,o.iM)((function(t){return e.pointerBackward()}),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=(0,o.D2)((0,o.iM)((function(t){return e.addPointerElement(t)}),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=(0,o.D2)((function(t){return e.deactivate()}),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[(0,l.WI)(e.$slots,"caret",{toggle:e.toggle},(function(){return[(0,l.Wm)("div",{onMousedown:t[1]||(t[1]=(0,o.iM)((function(t){return e.toggle()}),["prevent","stop"])),class:"multiselect__select"},null,32)]})),(0,l.WI)(e.$slots,"clear",{search:e.search}),(0,l.Wm)("div",y,[(0,l.WI)(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:a.visibleValues,isOpen:e.isOpen},(function(){return[(0,l.wy)((0,l.Wm)("div",w,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(a.visibleValues,(function(t,i){return(0,l.WI)(e.$slots,"tag",{option:t,search:e.search,remove:e.removeElement},(function(){return[((0,l.wg)(),(0,l.j4)("span",{class:"multiselect__tag",key:i},[(0,l.Wm)("span",{textContent:(0,r.zw)(e.getOptionLabel(t))},null,8,["textContent"]),(0,l.Wm)("i",{tabindex:"1",onKeypress:(0,o.D2)((0,o.iM)((function(i){return e.removeElement(t)}),["prevent"]),["enter"]),onMousedown:(0,o.iM)((function(i){return e.removeElement(t)}),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))]}))})),256))],512),[[o.F8,a.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>i.limit?(0,l.WI)(e.$slots,"limit",{key:0},(function(){return[(0,l.Wm)("strong",{class:"multiselect__strong",textContent:(0,r.zw)(i.limitText(e.internalValue.length-i.limit))},null,8,["textContent"])]})):(0,l.kq)("v-if",!0)]})),(0,l.Wm)(o.uT,{name:"multiselect__loading"},{default:(0,l.w5)((function(){return[(0,l.WI)(e.$slots,"loading",{},(function(){return[(0,l.wy)((0,l.Wm)("div",V,null,512),[[o.F8,i.loading]])]}))]})),_:3}),e.searchable?((0,l.wg)(),(0,l.j4)("input",{key:0,ref:"search",name:i.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:a.inputStyle,value:e.search,disabled:i.disabled,tabindex:i.tabindex,onInput:t[2]||(t[2]=function(t){return e.updateSearch(t.target.value)}),onFocus:t[3]||(t[3]=(0,o.iM)((function(t){return e.activate()}),["prevent"])),onBlur:t[4]||(t[4]=(0,o.iM)((function(t){return e.deactivate()}),["prevent"])),onKeyup:t[5]||(t[5]=(0,o.D2)((function(t){return e.deactivate()}),["esc"])),onKeydown:[t[6]||(t[6]=(0,o.D2)((0,o.iM)((function(t){return e.pointerForward()}),["prevent"]),["down"])),t[7]||(t[7]=(0,o.D2)((0,o.iM)((function(t){return e.pointerBackward()}),["prevent"]),["up"])),t[9]||(t[9]=(0,o.D2)((0,o.iM)((function(t){return e.removeLastElement()}),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=(0,o.D2)((0,o.iM)((function(t){return e.addPointerElement(t)}),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):(0,l.kq)("v-if",!0),a.isSingleLabelVisible?((0,l.wg)(),(0,l.j4)("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=(0,o.iM)((function(){return e.toggle&&e.toggle.apply(e,arguments)}),["prevent"]))},[(0,l.WI)(e.$slots,"singleLabel",{option:a.singleValue},(function(){return[(0,l.Uk)((0,r.zw)(e.currentOptionLabel),1)]}))],32)):(0,l.kq)("v-if",!0),a.isPlaceholderVisible?((0,l.wg)(),(0,l.j4)("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=(0,o.iM)((function(){return e.toggle&&e.toggle.apply(e,arguments)}),["prevent"]))},[(0,l.WI)(e.$slots,"placeholder",{},(function(){return[(0,l.Uk)((0,r.zw)(e.placeholder),1)]}))],32)):(0,l.kq)("v-if",!0)],512),(0,l.Wm)(o.uT,{name:"multiselect"},{default:(0,l.w5)((function(){return[(0,l.wy)((0,l.Wm)("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=function(){return e.activate&&e.activate.apply(e,arguments)}),tabindex:"-1",onMousedown:t[13]||(t[13]=(0,o.iM)((function(){}),["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[(0,l.Wm)("ul",{class:"multiselect__content",style:a.contentStyle,role:"listbox",id:"listbox-"+e.id},[(0,l.WI)(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?((0,l.wg)(),(0,l.j4)("li",L,[(0,l.Wm)("span",O,[(0,l.WI)(e.$slots,"maxElements",{},(function(){return[(0,l.Uk)("Maximum of "+(0,r.zw)(e.max)+" options selected. First remove a selected option to select another.",1)]}))])])):(0,l.kq)("v-if",!0),!e.max||e.internalValue.length<e.max?((0,l.wg)(!0),(0,l.j4)(l.HY,{key:1},(0,l.Ko)(e.filteredOptions,(function(t,i){return(0,l.wg)(),(0,l.j4)("li",{class:"multiselect__element",key:i,id:e.id+"-"+i,role:t&&(t.$isLabel||t.$isDisabled)?null:"option"},[t&&(t.$isLabel||t.$isDisabled)?(0,l.kq)("v-if",!0):((0,l.wg)(),(0,l.j4)("span",{key:0,class:[e.optionHighlight(i,t),"multiselect__option"],onClick:(0,o.iM)((function(i){return e.select(t)}),["stop"]),onMouseenter:(0,o.iM)((function(t){return e.pointerSet(i)}),["self"]),"data-select":t&&t.isTag?e.tagPlaceholder:a.selectLabelText,"data-selected":a.selectedLabelText,"data-deselect":a.deselectLabelText},[(0,l.WI)(e.$slots,"option",{option:t,search:e.search,index:i},(function(){return[(0,l.Wm)("span",null,(0,r.zw)(e.getOptionLabel(t)),1)]}))],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),t&&(t.$isLabel||t.$isDisabled)?((0,l.wg)(),(0,l.j4)("span",{key:1,"data-select":e.groupSelect&&a.selectGroupLabelText,"data-deselect":e.groupSelect&&a.deselectGroupLabelText,class:[e.groupHighlight(i,t),"multiselect__option"],onMouseenter:(0,o.iM)((function(t){return e.groupSelect&&e.pointerSet(i)}),["self"]),onMousedown:(0,o.iM)((function(i){return e.selectGroup(t)}),["prevent"])},[(0,l.WI)(e.$slots,"option",{option:t,search:e.search,index:i},(function(){return[(0,l.Wm)("span",null,(0,r.zw)(e.getOptionLabel(t)),1)]}))],42,["data-select","data-deselect","onMouseenter","onMousedown"])):(0,l.kq)("v-if",!0)],8,["id","role"])})),128)):(0,l.kq)("v-if",!0),(0,l.wy)((0,l.Wm)("li",null,[(0,l.Wm)("span",S,[(0,l.WI)(e.$slots,"noResult",{search:e.search},(function(){return[$]}))])],512),[[o.F8,i.showNoResults&&0===e.filteredOptions.length&&e.search&&!i.loading]]),(0,l.wy)((0,l.Wm)("li",null,[(0,l.Wm)("span",_,[(0,l.WI)(e.$slots,"noOptions",{},(function(){return[x]}))])],512),[[o.F8,i.showNoOptions&&0===e.options.length&&!e.search&&!i.loading]]),(0,l.WI)(e.$slots,"afterList")],12,["id"])],36),[[o.F8,e.isOpen]])]})),_:3})],42,["tabindex","aria-owns"])}v.render=k,t["ZP"]=v}}]);
//# sourceMappingURL=368-legacy.e73c00b3.js.map