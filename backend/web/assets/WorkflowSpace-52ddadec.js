import{c as o,A as C,j as D,r as _,U as F,J as W,K as R,H as T,I as E,w as q,l as r,n as i,s as I,q as a,p as w,u as f,x as k,y,z as J,F as G,v as Q,M as X,N as Y,B as Z}from"./index-33277216.js";import{U as ee,_ as te}from"./NewWorkflowModal-67dd3f03.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};const ne=ae;function V(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},c=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable}))),c.forEach(function(d){se(s,d,t[d])})}return s}function se(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var h=function(e,t){var c=V({},e,t.attrs);return o(C,V({},c,{icon:ne}),null)};h.displayName="HomeOutlined";h.inheritAttrs=!1;const re=h;const le={class:"space-container"},ce={__name:"WorkflowSpace",setup(s){const{t:e}=D(),t=_(!1),c=F(),{language:d}=W(c),S=R(),{userFastAccessWorkflows:U}=W(S),O=T(),K=E(),v=_(O.params.workflowId);q(O,m=>{v.value=m.params.workflowId,p.value=[m.params.workflowId]});const p=_([v.value]),b=_(["user-workflows"]),M=_(1),x=_(),B=()=>{x.value.showModal()},L=async m=>{const l=await X("create",{title:e("workspace.workflowSpace.new_workflow")+M.value,language:d.value});if(l.status!=200){Y.error(l.msg);return}const n=l.data;n.update_time=new Date(n.update_time).toLocaleString(),n.create_time=new Date(n.create_time).toLocaleString(),S.addUserWorkflow(n),Z(()=>{p.value=[n.wid],K.push(`/workflow/${n.wid}`)})};return(m,l)=>{const n=r("a-skeleton"),H=r("router-link"),g=r("a-menu-item"),N=r("a-sub-menu"),P=r("a-menu"),j=r("a-layout-sider"),A=r("router-view"),$=r("a-layout-content"),z=r("a-layout");return i(),I("div",le,[o(z,{class:"layout"},{default:a(()=>[o(j,{width:"200",style:{background:"#fff"},breakpoint:"lg","collapsed-width":"0"},{default:a(()=>[t.value?(i(),w(n,{key:0,active:""})):(i(),w(P,{key:1,selectedKeys:p.value,"onUpdate:selectedKeys":l[0]||(l[0]=u=>p.value=u),openKeys:b.value,"onUpdate:openKeys":l[1]||(l[1]=u=>b.value=u),mode:"inline",style:{height:"100%"}},{default:a(()=>[o(g,{key:"my_index"},{default:a(()=>[o(H,{to:"/workflow/"},{default:a(()=>[o(f(re)),k(" "+y(f(e)("workspace.workflowSpace.workflow_index")),1)]),_:1})]),_:1}),o(N,{key:"user-workflows"},{title:a(()=>[J("span",null,[o(f(ee)),k(" "+y(f(e)("workspace.workflowSpace.user_fast_access_workflows")),1)])]),default:a(()=>[(i(!0),I(G,null,Q(f(U),u=>(i(),w(g,{key:u.wid},{default:a(()=>[o(H,{to:`/workflow/${u.wid}`},{default:a(()=>[k(y(u.title),1)]),_:2},1032,["to"])]),_:2},1024))),128)),o(g,{key:"add",onClick:B},{default:a(()=>[k(" + "+y(f(e)("workspace.workflowSpace.add_new_workflow")),1)]),_:1}),o(te,{ref_key:"newWorkflowModal",ref:x,onCreate:L},null,512)]),_:1})]),_:1},8,["selectedKeys","openKeys"]))]),_:1}),o($,{style:{padding:"0 24px",minHeight:"280px"}},{default:a(()=>[t.value?(i(),w(n,{key:0,active:""})):(i(),w(A,{key:v.value}))]),_:1})]),_:1})])}}},_e=oe(ce,[["__scopeId","data-v-d713523a"]]);export{_e as default};
