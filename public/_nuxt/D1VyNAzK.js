import{s as f,a as v,b as g,c as y,d as w}from"./BGF0Jvj1.js";import{o as l,c as h,a,m as i,B as C,n as V,p as L,q as p,s as B,u as k,v as S,x as I,y as A,r as T,z as _,b as d,A as O,C as P,F as M}from"./B_6qbqWE.js";var m={name:"MinusIcon",extends:f};function F(n,o,e,t,r,c){return l(),h("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),o[0]||(o[0]=[a("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}m.render=F;var z=function(o){var e=o.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
    transition: background `).concat(e("checkbox.transition.duration"),", color ").concat(e("checkbox.transition.duration"),", border-color ").concat(e("checkbox.transition.duration"),", box-shadow ").concat(e("checkbox.transition.duration"),", outline-color ").concat(e("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("checkbox.transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.focus.border.color"),`;
    box-shadow: `).concat(e("checkbox.focus.ring.shadow"),`;
    outline: `).concat(e("checkbox.focus.ring.width")," ").concat(e("checkbox.focus.ring.style")," ").concat(e("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(e("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
    border-color: `).concat(e("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}
`)},Z={root:function(o){var e=o.instance,t=o.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":t.disabled,"p-invalid":t.invalid,"p-variant-filled":t.variant?t.variant==="filled":e.$primevue.config.inputStyle==="filled"||e.$primevue.config.inputVariant==="filled"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},$=C.extend({name:"checkbox",theme:z,classes:Z}),j={name:"BaseCheckbox",extends:g,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function q(n){return R(n)||H(n)||E(n)||N()}function N(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(n,o){if(n){if(typeof n=="string")return b(n,o);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(n,o):void 0}}function H(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function R(n){if(Array.isArray(n))return b(n)}function b(n,o){(o==null||o>n.length)&&(o=n.length);for(var e=0,t=Array(o);e<o;e++)t[e]=n[e];return t}var x={name:"Checkbox",extends:j,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","update:indeterminate"],data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(o){this.d_indeterminate=o}},methods:{getPTOptions:function(o){var e=o==="root"?this.ptmi:this.ptm;return e(o,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(o){var e=this;if(!this.disabled&&!this.readonly){var t;this.binary?t=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?t=this.modelValue.filter(function(r){return!V(r,e.value)}):t=this.modelValue?[].concat(q(this.modelValue),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$emit("update:modelValue",t),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){this.$emit("blur",o)}},computed:{checked:function(){return this.d_indeterminate?!1:this.binary?this.modelValue===this.trueValue:L(this.value,this.modelValue)}},components:{CheckIcon:v,MinusIcon:m}},U=["data-p-checked","data-p-indeterminate","data-p-disabled"],W=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function D(n,o,e,t,r,c){var s=p("CheckIcon"),u=p("MinusIcon");return l(),h("div",i({class:n.cx("root")},c.getPTOptions("root"),{"data-p-checked":c.checked,"data-p-indeterminate":r.d_indeterminate||void 0,"data-p-disabled":n.disabled}),[a("input",i({id:n.inputId,type:"checkbox",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:n.name,checked:c.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,required:n.required,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,"aria-checked":r.d_indeterminate?"mixed":void 0,onFocus:o[0]||(o[0]=function(){return c.onFocus&&c.onFocus.apply(c,arguments)}),onBlur:o[1]||(o[1]=function(){return c.onBlur&&c.onBlur.apply(c,arguments)}),onChange:o[2]||(o[2]=function(){return c.onChange&&c.onChange.apply(c,arguments)})},c.getPTOptions("input")),null,16,W),a("div",i({class:n.cx("box")},c.getPTOptions("box")),[B(n.$slots,"icon",{checked:c.checked,indeterminate:r.d_indeterminate,class:I(n.cx("icon"))},function(){return[c.checked?(l(),k(s,i({key:0,class:n.cx("icon")},c.getPTOptions("icon")),null,16,["class"])):r.d_indeterminate?(l(),k(u,i({key:1,class:n.cx("icon")},c.getPTOptions("icon")),null,16,["class"])):S("",!0)]})],16)],16,U)}x.render=D;const G={class:"bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20"},J={class:"bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto"},K={class:"flex items-center justify-between mb-12"},Q={class:"flex items-center"},ee=A({__name:"components",setup(n){const o=T(!0);return(e,t)=>{const r=y,c=x,s=w;return l(),h(M,null,[t[6]||(t[6]=a("div",{class:"container"},[a("h1",null,"This is the page where I test components!")],-1)),a("div",G,[a("div",J,[t[5]||(t[5]=_('<div class="text-center mb-8"><svg class="mb-4 mx-auto fill-surface-600 dark:fill-surface-200 h-16" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"></path></svg><div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome Back</div><span class="text-surface-600 dark:text-surface-200 font-medium leading-normal">Don&#39;t have an account?</span><a class="font-medium no-underline ml-2 text-primary cursor-pointer">Create today!</a></div>',1)),a("div",null,[t[3]||(t[3]=a("label",{for:"email1",class:"text-surface-900 dark:text-surface-0 font-medium mb-2 block"},"Email",-1)),d(r,{id:"email1",type:"text",placeholder:"Email address",class:"w-full mb-4"}),t[4]||(t[4]=a("label",{for:"password1",class:"text-surface-900 dark:text-surface-0 font-medium mb-2 block"},"Password",-1)),d(r,{id:"password1",type:"password",placehoder:"Password",class:"w-full mb-4"}),a("div",K,[a("div",Q,[d(c,{id:"rememberme1",modelValue:O(o),"onUpdate:modelValue":t[0]||(t[0]=u=>P(o)?o.value=u:null),binary:!0,class:"mr-2"},null,8,["modelValue"]),t[1]||(t[1]=a("label",{for:"rememberme1"},"Remember me",-1))]),t[2]||(t[2]=a("a",{class:"font-medium no-underline ml-2 text-primary text-right cursor-pointer"},"Forgot password?",-1))]),d(s,{label:"Sign In",icon:"pi pi-user",class:"w-full"})])])])],64)}}});export{ee as default};