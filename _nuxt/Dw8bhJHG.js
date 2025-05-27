import{V as t,an as r,c as a,o as n,T as s,af as p}from"./DqA0wvgn.js";import{s as c}from"./DwqQTTJx.js";var u=`
.p-checkbox-group {
    display: inline-flex;
}
`,i={root:"p-checkbox-group p-component"},m=t.extend({name:"checkboxgroup",style:u,classes:i}),l={name:"BaseCheckboxGroup",extends:c,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},d={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function h(e,o,x,f,k,g){return n(),a("div",p({class:e.cx("root")},e.ptmi("root")),[s(e.$slots,"default")],16)}d.render=h;export{d as default};
