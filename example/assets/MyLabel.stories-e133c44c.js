import{j as q}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const n=({label:e="No Label",size:M="h1",allCaps:N=!1,color:T,fontColor:V})=>q.jsx("span",{className:` label ${M} text-${T}`,style:{color:V},children:N?e.toUpperCase():e});try{n.displayName="MyLabel",n.__docgenInfo={description:"Primary UI component for user interaction",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Este es el label que se mostrara en el componente",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"h1"},description:"Estos son los tamaños que puede tener el componente",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Para Capitalizar el texto",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Color del texto",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color del texto personalizado",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const U={title:"UI/MyLabel",component:n,tags:["autodocs"],argTypes:{size:{control:{type:"select"}},color:{control:{type:"radio"}},fontColor:{control:{type:"color"}}}},j=e=>q.jsx(n,{...e}),a=j.bind({});a.args={size:"normal",label:"Normal",allCaps:!1,color:"primary"};const r={args:{size:"h1",label:"h1"}},o={args:{size:"normal",allCaps:!0,label:"AllCaps"}},s={args:{size:"normal",color:"secondary",label:"Secondary"}},l={args:{size:"normal",color:"tertiary",label:"Tertirary"}},t={args:{size:"h1",label:"CustomColor",fontColor:"#ff0000"}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <MyLabel {...args} />",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'h1'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,f,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    allCaps: true,
    label: 'AllCaps'
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var g,b,z;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'secondary',
    label: 'Secondary'
  }
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var h,v,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'tertiary',
    label: 'Tertirary'
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,_,L;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'CustomColor',
    fontColor: '#ff0000'
  }
}`,...(L=(_=t.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const $=["Basic","h1","AllCaps","Secondary","Tertiary","CustomColor"];export{o as AllCaps,a as Basic,t as CustomColor,s as Secondary,l as Tertiary,$ as __namedExportsOrder,U as default,r as h1};
//# sourceMappingURL=MyLabel.stories-e133c44c.js.map
