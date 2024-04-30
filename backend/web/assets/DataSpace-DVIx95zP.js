import{W as E,l as y,a9 as G,s as h,q as O,Z as m,N as r,b as l,f as u,c as s,g as t,aX as q,T as _,A as f,y as p,F as D,B as g,G as b,C as P}from"./index-BK2R8M7z.js";import{u as W}from"./userDatabase-BJs8HZNH.js";import{d as v}from"./database-KrXFxb6r.js";import{L as X}from"./LoadingFour-DvAA0m7R.js";import{D as Z}from"./Delete-DmM-sNsw.js";const j={class:"dataspace-container"},z={key:1},H={key:2},J={key:3},sa={__name:"DataSpace",setup(K){const{t:e}=E(),x=y(!0),N=G(),R=W(),d=h({columns:[{name:e("workspace.dataSpace.database_name"),dataIndex:"name",key:"name"},{title:e("common.status"),dataIndex:"status",key:"status",width:"200px"},{title:e("common.tags"),key:"tags",dataIndex:"tags",width:"200px"},{title:e("common.action"),key:"action",width:"80px"}],data:[],hoverRowVid:null,customRow:n=>({style:{cursor:"pointer"},onClick:async a=>{(a.target.classList.contains("ant-table-cell")||a.target.classList.contains("database-title"))&&await N.push(`/data/${n.vid}`)},onMouseenter:a=>{d.hoverRowVid=n.vid},onMouseleave:a=>{d.hoverRowVid=null}})}),k=async()=>{const n=await v("list",{});n.status==200?(R.setUserDatabases(n.data),d.data=n.data.map(a=>({...a,color:q[a.status],tags:[]})),x.value=!1):m.error(n.msg)};O(async()=>{await k()});const o=h({open:y(!1),creating:y(!1),create:async()=>{o.creating=!0,(await v("create",{name:o.databaseName})).status===200?m.success(e("workspace.dataSpace.create_success")):m.error(e("workspace.dataSpace.create_failed")),await k(),o.creating=!1,o.open=!1}}),L=async n=>{(await v("delete",{vid:n})).status===200?m.success(e("workspace.dataSpace.delete_success")):m.error(e("workspace.dataSpace.delete_failed")),await k()};return(n,a)=>{const S=r("a-button"),I=r("a-input"),V=r("a-form-item"),B=r("a-modal"),M=r("a-typography-text"),C=r("a-tag"),U=r("a-popconfirm"),$=r("a-table"),A=r("a-card"),F=r("a-col"),T=r("a-row");return l(),u("div",j,[s(T,{align:"center",gutter:[16,16]},{default:t(()=>[s(F,{xl:16,lg:18,md:20,sm:22,xs:24},{default:t(()=>[s(A,{loading:x.value},{extra:t(()=>[s(S,{type:"primary",onClick:a[0]||(a[0]=c=>o.open=!0)},{default:t(()=>[_(f(p(e)("workspace.dataSpace.create")),1)]),_:1}),s(B,{open:o.open,"onUpdate:open":a[2]||(a[2]=c=>o.open=c),title:p(e)("workspace.dataSpace.create"),onOk:o.create,confirmLoading:o.creating},{default:t(()=>[s(V,{label:p(e)("workspace.dataSpace.database_name")},{default:t(()=>[s(I,{value:o.databaseName,"onUpdate:value":a[1]||(a[1]=c=>o.databaseName=c)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["open","title","onOk","confirmLoading"])]),default:t(()=>[s($,{columns:d.columns,customRow:d.customRow,"data-source":d.data},{headerCell:t(({column:c})=>[c.key==="name"?(l(),u(D,{key:0},[_(f(p(e)("workspace.dataSpace.database_name")),1)],64)):g("",!0)]),bodyCell:t(({column:c,record:i})=>[c.key==="name"?(l(),b(M,{key:0,class:"database-title"},{default:t(()=>[_(f(i.name),1)]),_:2},1024)):c.key==="status"?(l(),u("span",z,[s(C,{color:i.color},{default:t(()=>[i.status==="CREATING"?(l(),b(p(X),{key:0})):g("",!0),_(" "+f(p(e)(`workspace.dataSpace.status_${i.status.toLowerCase()}`)),1)]),_:2},1032,["color"])])):c.key==="tags"?(l(),u("span",H,[(l(!0),u(D,null,P(i.tags,w=>(l(),b(C,{key:w},{default:t(()=>[_(f(w.toUpperCase()),1)]),_:2},1024))),128))])):c.key==="action"?(l(),u("span",J,[s(U,{title:p(e)("workspace.dataSpace.delete_confirm"),onConfirm:w=>L(i.vid)},{default:t(()=>[s(S,{danger:"",type:"text"},{icon:t(()=>[s(p(Z))]),_:1})]),_:2},1032,["title","onConfirm"])])):g("",!0)]),_:1},8,["columns","customRow","data-source"])]),_:1},8,["loading"])]),_:1})]),_:1})])}}};export{sa as default};