(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[18],{669:function(e,t,a){"use strict";a.r(t);var n=a(88),r=a(1),c=a(671),o=a(672),s=a(551),i=a(552),l=a(605),h=a(604),b=a(148),d=a.n(b),u=a(387),j=a(683),p=a(632),y=a(630),O=a(335),f=a(645),m=a(670),x=a(25),g=a(246),w=a.n(g),k=a(5);function M(e){return d()(new Date(1e3*e),"MMMM d, p yyyy")}function v(e,t,a){var n=Number.POSITIVE_INFINITY;return e.forEach((function(e){n>e[t]&&(n=e[t])})),Math.round(n-n*a)}var S=["1 Week","1 Month","6 Months"];t.default=Object(x.a)((function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}}),{withTheme:!0})((function(e){var t=e.color,a=e.data,b=e.title,d=e.classes,x=e.theme,g=e.height,C=Object(r.useState)(null),I=Object(n.a)(C,2),N=I[0],E=I[1],T=Object(r.useState)("1 Month"),W=Object(n.a)(T,2),F=W[0],L=W[1],H=Object(r.useCallback)((function(e){E(e.currentTarget)}),[E]),P=Object(r.useCallback)((function(e){return[e,b]}),[b]),z=Object(r.useCallback)((function(){switch(F){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}}),[F]),D=Object(r.useCallback)((function(){var e;switch(F){case"1 Week":e=604800;break;case"1 Month":e=2678400;break;case"6 Months":e=16070400;break;default:throw new Error("No branch selected in switch-statement")}for(var t=new Date/1e3-e,n=[],r=0;r<a.length;r+=1)t<a[r].timestamp&&n.unshift(a[r]);return n}),[a,F]),J=Object(r.useCallback)((function(){E(null)}),[E]),K=Object(r.useCallback)((function(e){L(e),J()}),[L,J]),R=Boolean(N);return Object(k.jsxs)(u.a,{children:[Object(k.jsx)(j.a,{pt:2,px:2,pb:4,children:Object(k.jsxs)(j.a,{display:"flex",justifyContent:"space-between",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(p.a,{variant:"subtitle1",children:b}),Object(k.jsx)(p.a,{variant:"body2",color:"textSecondary",children:z()})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(y.a,{"aria-label":"More","aria-owns":R?"long-menu":void 0,"aria-haspopup":"true",onClick:H,children:Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{id:"long-menu",anchorEl:N,open:R,onClose:J,PaperProps:{style:{maxHeight:216,width:200}},disableScrollLock:!0,children:S.map((function(e){return Object(k.jsx)(f.a,{selected:e===F,onClick:function(){K(e)},name:e,children:e},e)}))})]})]})}),Object(k.jsx)(m.a,{children:Object(k.jsx)(j.a,{className:d.cardContentInner,height:g,children:Object(k.jsx)(c.a,{width:"100%",height:"100%",children:Object(k.jsxs)(o.a,{data:D(),type:"number",children:[Object(k.jsx)(s.a,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),Object(k.jsx)(i.a,{domain:[v(a,"value",.05),"dataMax"],hide:!0}),Object(k.jsx)(l.a,{type:"monotone",dataKey:"value",stroke:t,fill:t}),Object(k.jsx)(h.a,{labelFormatter:M,formatter:P,cursor:!1,contentStyle:{border:"none",padding:x.spacing(1),borderRadius:x.shape.borderRadius,boxShadow:x.shadows[1]},labelStyle:x.typography.body1,itemStyle:{fontSize:x.typography.body1.fontSize,letterSpacing:x.typography.body1.letterSpacing,fontFamily:x.typography.body1.fontFamily,lineHeight:x.typography.body1.lineHeight,fontWeight:x.typography.body1.fontWeight}})]})})})})]})}))}}]);
//# sourceMappingURL=18.bf5407d3.chunk.js.map