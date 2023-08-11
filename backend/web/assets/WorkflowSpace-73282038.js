import{c as t,A as D,j as F,r as d,M as R,K as W,L as T,I as E,J as q,w as J,l as s,p as i,v as I,s as a,q as p,u as f,y as k,z as y,B as G,F as Q,x as X,O as Y,P as Z,n as ee}from"./index-b7ac1d68.js";import{U as te,_ as oe}from"./NewWorkflowModal-db35185b.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import"./AddOne-ba4f5f16.js";var ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};const se=ne;function V(r){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(o).filter(function(_){return Object.getOwnPropertyDescriptor(o,_).enumerable}))),u.forEach(function(_){re(r,_,o[_])})}return r}function re(r,e,o){return e in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}var h=function(e,o){var u=V({},e,o.attrs);return t(D,V({},u,{icon:se}),null)};h.displayName="HomeOutlined";h.inheritAttrs=!1;const le=h;const ce={class:"space-container"},ue={__name:"WorkflowSpace",setup(r){const{t:e}=F(),o=d(!1),u=R(),{language:_}=W(u),S=T(),{userFastAccessWorkflows:L}=W(S),O=E(),K=q(),v=d(O.params.workflowId);J(O,m=>{v.value=m.params.workflowId,w.value=[m.params.workflowId]});const w=d([v.value]),b=d(["user-workflows"]),M=d(1),x=d(),P=()=>{x.value.showModal()},U=async m=>{const l=await Y("create",{title:e("workspace.workflowSpace.new_workflow")+M.value,language:_.value});if(l.status!=200){Z.error(l.msg);return}const n=l.data;n.update_time=new Date(n.update_time).toLocaleString(),n.create_time=new Date(n.create_time).toLocaleString(),S.addUserWorkflow(n),ee(()=>{w.value=[n.wid],K.push(`/workflow/${n.wid}`)})};return(m,l)=>{const n=s("a-skeleton"),H=s("router-link"),g=s("a-menu-item"),B=s("a-tooltip"),j=s("a-sub-menu"),A=s("a-menu"),N=s("a-layout-sider"),$=s("router-view"),z=s("a-layout-content"),C=s("a-layout");return i(),I("div",ce,[t(C,{class:"layout"},{default:a(()=>[t(N,{width:"200",style:{background:"#fff"},breakpoint:"lg","collapsed-width":"0"},{default:a(()=>[o.value?(i(),p(n,{key:0,active:""})):(i(),p(A,{key:1,selectedKeys:w.value,"onUpdate:selectedKeys":l[0]||(l[0]=c=>w.value=c),openKeys:b.value,"onUpdate:openKeys":l[1]||(l[1]=c=>b.value=c),mode:"inline",style:{height:"100%"}},{default:a(()=>[t(g,{key:"my_index"},{default:a(()=>[t(H,{to:"/workflow/"},{default:a(()=>[t(f(le)),k(" "+y(f(e)("workspace.workflowSpace.workflow_index")),1)]),_:1})]),_:1}),t(j,{key:"user-workflows"},{title:a(()=>[G("span",null,[t(f(te)),k(" "+y(f(e)("workspace.workflowSpace.user_fast_access_workflows")),1)])]),default:a(()=>[(i(!0),I(Q,null,X(f(L),c=>(i(),p(g,{key:c.wid},{default:a(()=>[t(B,{placement:"topLeft",title:c.title},{default:a(()=>[t(H,{to:`/workflow/${c.wid}`},{default:a(()=>[k(y(c.title),1)]),_:2},1032,["to"])]),_:2},1032,["title"])]),_:2},1024))),128)),t(g,{key:"add",onClick:P},{default:a(()=>[k(" + "+y(f(e)("workspace.workflowSpace.add_new_workflow")),1)]),_:1}),t(oe,{ref_key:"newWorkflowModal",ref:x,onCreate:U},null,512)]),_:1})]),_:1},8,["selectedKeys","openKeys"]))]),_:1}),t(z,{style:{padding:"0 24px",minHeight:"280px"}},{default:a(()=>[o.value?(i(),p(n,{key:0,active:""})):(i(),p($,{key:v.value}))]),_:1})]),_:1})])}}},pe=ae(ue,[["__scopeId","data-v-4edfc794"]]);export{pe as default};
