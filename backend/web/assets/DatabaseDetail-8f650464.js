import{c as o,A as U,U as q,r as R,a9 as J,aa as Q,m as W,b as Y,a2 as w,D as K,P as f,o as i,e as v,x as a,u as r,R as p,H as _,F as O,I as h,K as g,aZ as ee,V as te}from"./index-51905ea3.js";import{a as $,d as ae}from"./database-adffb067.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{C as oe,D as V}from"./DatabaseOutlined-78db540c.js";var se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"}}]},name:"audio",theme:"outlined"};const re=se;function L(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(m){return Object.getOwnPropertyDescriptor(t,m).enumerable}))),u.forEach(function(m){le(s,m,t[m])})}return s}function le(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var P=function(e,t){var u=L({},e,t.attrs);return o(U,L({},u,{icon:re}),null)};P.displayName="AudioOutlined";P.inheritAttrs=!1;const ce=P;var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"}}]},name:"picture",theme:"outlined"};const ue=ie;function M(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(m){return Object.getOwnPropertyDescriptor(t,m).enumerable}))),u.forEach(function(m){de(s,m,t[m])})}return s}function de(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var j=function(e,t){var u=M({},e,t.attrs);return o(U,M({},u,{icon:ue}),null)};j.displayName="PictureOutlined";j.inheritAttrs=!1;const pe=j;const _e={class:"dataspace-container"},me={key:1},fe={__name:"DatabaseDetail",setup(s){const{t:e}=q(),t=R(!0),u=J(),m=Q(),k=u.params.databaseId,D=R({}),n=W({columns:[{name:e("workspace.databaseDetail.object_title"),dataIndex:"title",key:"title"},{title:e("workspace.databaseDetail.data_type"),key:"data_type",dataIndex:"data_type",width:"200px"},{title:e("workspace.databaseDetail.source_url"),key:"source_url",dataIndex:"source_url",width:"200px"},{title:e("common.create_time"),key:"create_time",dataIndex:"create_time",sorter:!0,sortDirections:["descend","ascend"],width:"200px"},{title:e("common.action"),key:"action",width:"200px"}],data:[],loading:!1,current:1,pageSize:10,total:0,pagination:Y(()=>({total:n.total,current:n.current,pageSize:n.pageSize})),handleTableChange:(c,l,b)=>{n.load({page_size:c.pageSize,page:c.current,sort_field:b.field,sort_order:b.order})},hoverRowOid:null,customRow:c=>({style:{cursor:"pointer"},onClick:async l=>{(l.target.classList.contains("ant-table-cell")||l.target.classList.contains("object-title"))&&await m.push(`/data/${k}/object/${c.oid}`)},onMouseenter:l=>{n.hoverRowOid=c.vid},onMouseleave:l=>{n.hoverRowOid=null}}),load:async c=>{n.loading=!0;const l=await $("list",{vid:k,...c});l.status==200?n.data=l.data.objects.map(b=>(b.create_time=new Date(b.create_time).toLocaleString(),b)):w.error(l.msg),n.total=l.data.total,n.pageSize=l.data.page_size,n.current=l.data.page,n.loading=!1}}),T=async()=>{await n.load({});const c=await ae("get",{vid:k});c.status==200?(D.value=c.data,t.value=!1):w.error(c.msg)};K(async()=>{await T()});const B=async()=>{await m.push(`/data/${k}/create`)},E=c=>{$("delete",{oid:c}).then(l=>{l.status===200?w.success(e("workspace.databaseDetail.delete_success")):w.error(e("workspace.databaseDetail.delete_failed")),n.load({})})};return(c,l)=>{const b=f("router-link"),S=f("a-breadcrumb-item"),H=f("a-breadcrumb"),z=f("a-col"),N=f("a-button"),x=f("a-typography-text"),C=f("a-tag"),I=f("a-typography-link"),F=f("a-popconfirm"),G=f("a-table"),X=f("a-card"),Z=f("a-row");return i(),v("div",_e,[o(Z,{align:"center",gutter:[16,16]},{default:a(()=>[o(z,{xl:16,lg:18,md:20,sm:22,xs:24},{default:a(()=>[o(H,null,{default:a(()=>[o(S,null,{default:a(()=>[o(b,{to:"/data"},{default:a(()=>[o(r(oe)),p(" "+_(r(e)("components.layout.basicHeader.data_space")),1)]),_:1})]),_:1}),o(S,null,{default:a(()=>[o(r(V)),p(" "+_(D.value.name),1)]),_:1})]),_:1})]),_:1}),o(z,{xl:16,lg:18,md:20,sm:22,xs:24},{default:a(()=>[o(X,{loading:t.value},{title:a(()=>[o(r(V)),p(" "+_(D.value.name),1)]),extra:a(()=>[o(N,{type:"primary",onClick:B},{default:a(()=>[p(_(r(e)("workspace.databaseDetail.add_object")),1)]),_:1})]),default:a(()=>[o(G,{loading:n.loading,customRow:n.customRow,columns:n.columns,"data-source":n.data,pagination:n.pagination,onChange:n.handleTableChange},{headerCell:a(({column:y})=>[y.key==="title"?(i(),v(O,{key:0},[p(_(r(e)("workspace.databaseDetail.object_title")),1)],64)):h("",!0)]),bodyCell:a(({column:y,record:d})=>{var A;return[y.key==="title"?(i(),v(O,{key:0},[d.status=="PR"?(i(),g(x,{key:0,disabled:""},{default:a(()=>[p(_(d.title)+" ",1),o(r(ee))]),_:2},1024)):(i(),g(x,{key:1,class:"object-title"},{default:a(()=>[p(_(d.title),1)]),_:2},1024))],64)):y.key==="data_type"?(i(),v("span",me,[d.data_type.toUpperCase()=="TEXT"?(i(),g(C,{key:0,color:"blue"},{default:a(()=>[o(r(te)),p(" "+_(r(e)(`workspace.databaseDetail.data_type_${d.data_type.toUpperCase()}`)),1)]),_:2},1024)):h("",!0),d.data_type.toUpperCase()=="IMAGE"?(i(),g(C,{key:1,color:"green"},{default:a(()=>[o(r(pe)),p(" "+_(r(e)(`workspace.databaseDetail.data_type_${d.data_type.toUpperCase()}`)),1)]),_:2},1024)):h("",!0),d.data_type.toUpperCase()=="AUDIO"?(i(),g(C,{key:2,color:"purple"},{default:a(()=>[o(r(ce)),p(" "+_(r(e)(`workspace.databaseDetail.data_type_${d.data_type.toUpperCase()}`)),1)]),_:2},1024)):h("",!0)])):y.key==="source_url"?(i(),v(O,{key:2},[((A=d.source_url)==null?void 0:A.length)>0?(i(),g(I,{key:0,href:d.source_url,target:"_blank"},{default:a(()=>[p(_(r(e)("workspace.databaseDetail.source_url")),1)]),_:2},1032,["href"])):(i(),g(x,{key:1,disabled:""},{default:a(()=>[p(_(r(e)("workspace.databaseDetail.source_url")),1)]),_:1}))],64)):y.key==="action"?(i(),v(O,{key:3},[d.status!="PR"?(i(),g(F,{key:0,placement:"leftTop",title:r(e)("workspace.databaseDetail.delete_confirm"),onConfirm:be=>E(d.oid)},{default:a(()=>[o(I,{type:"danger"},{default:a(()=>[p(_(r(e)("workspace.databaseDetail.delete")),1)]),_:1})]),_:2},1032,["title","onConfirm"])):h("",!0)],64)):h("",!0)]}),_:1},8,["loading","customRow","columns","data-source","pagination","onChange"])]),_:1},8,["loading"])]),_:1})]),_:1})])}}},ke=ne(fe,[["__scopeId","data-v-956bc8c6"]]);export{ke as default};