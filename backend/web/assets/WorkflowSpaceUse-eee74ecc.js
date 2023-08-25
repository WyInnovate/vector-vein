import{c as t,U as Ee,ac as He,$ as _e,r as w,ab as ze,a9 as Ae,aa as Oe,D as Be,a1 as A,a2 as g,a3 as ee,m as te,ap as qe,b as Pe,P as i,a5 as Je,o as s,e as p,K as f,x as o,R as y,H as v,u as r,G as D,y as R,F as M,a7 as W,a8 as O,I as U,ae,a4 as Ze,aq as Ge,ar as pe}from"./index-77a0d554.js";import{u as Ke}from"./userDatabase-48dde2cf.js";import{_ as Qe,a as Xe,b as Ye,c as et,d as tt,e as at}from"./EchartsRenderer-d8659d61.js";import{_ as ot}from"./UploaderFieldUse-d6c824c8.js";import{_ as lt}from"./WorkflowRunRecordsDrawer-a9e7e33e.js";import{d as st}from"./database-bdaa70f4.js";import{_ as nt}from"./_plugin-vue_export-helper-c27b6911.js";import{I as B}from"./index-9da988ab.js";const rt=B("edit",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M7 42H43",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])}),it=B("full-screen-one",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M6 6L16 15.8995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M6 41.8995L16 32",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M42.0001 41.8995L32.1006 32",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M41.8995 6L32 15.8995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M33 6H42V15",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M42 33V42H33",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M15 42H6V33",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M6 15V6H15",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ut=B("lightning",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M19 4H37L26 18H41L17 44L22 25H8L19 4Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])}),ct=B("off-screen-one",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M6 6L16 15.8995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M6 41.8995L16 32",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M42.0001 41.8995L32.1006 32",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M41.8995 6L32 15.8995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M32 7V16H41",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M16 7V16H7",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M16 41V32H7",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M32 41V32H40.8995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});const dt={key:0,class:"space-container"},kt=["src"],_t=["src"],pt={key:0},ft={key:0},wt={key:1},vt={key:2},mt={key:3},ht={key:4},yt={key:5},gt={key:6},Lt={key:0},St={__name:"WorkflowSpaceUse",setup(e){const{t:n}=Ee(),fe=He(),{language:we,setting:ve}=_e(fe),oe=Ke(),{userDatabases:me}=_e(oe),le=w(!0),he=w(!1),se=ze(),q=Ae(),P=Oe(),J=q.params.workflowId,Z=w(!1),ye=w(window.innerWidth<=768?"90vw":"60vw"),L=w(!1),$=w([]),T=w([]),N=w([]);Be(async()=>{const k=A("get",{wid:J}),u=st("list",{}),d=await k,l=await u;if(l.status==200&&oe.setUserDatabases(l.data),d.status!=200){g.error(n("workspace.workflowSpace.get_workflow_failed")),P.push({name:"WorkflowSpaceMain"});return}c.value=d.data,c.value.data.nodes.forEach(C=>{C.category=="vectorDb"&&(C.data.template.database.options=me.value.filter(x=>x.status=="VALID").map(x=>({value:x.vid,label:x.name})))});const m=ee(c.value),h=te(m);if($.value=h.inputFields,T.value=h.outputNodes,N.value=h.triggerNodes,G.value=JSON.parse(JSON.stringify(c.value)),q.query.rid){const x=await qe("get",{rid:q.query.rid});try{ie(x.data)}catch{g.error(n("workspace.workflowSpace.get_workflow_record_failed"))}}le.value=!1});const c=w({}),G=w({}),b=w(!1),K=w(null),E=w(null),ge=async()=>{E.value=null,H.value=!1;let k=!0;try{$.value.forEach(l=>{let m=!0;l.field_type!="checkbox"&&l.show&&l.required&&((l.field_type=="file"&&l.value.length==0||l.field_type=="number"&&typeof l.value!="number"||!l.value&&!l.value===0)&&(m=!1),m||(g.error(n("workspace.workflowSpace.field_is_empty",{field:l.display_name})),k=!1))})}catch{k=!1}if(!k)return;let u=JSON.parse(JSON.stringify(G.value));u.data.nodes.forEach(l=>{l.data.has_inputs&&Ge(l)&&!["triggers"].includes(l.category)&&Object.keys(l.data.template).forEach(m=>{l.data.template[m].show&&(l.data.template[m].value=c.value.data.nodes.find(h=>h.id==l.id).data.template[m].value)})}),b.value=!0,u.data.setting=ve.value.data;const d=await A("run",u);d.status==200?(g.success(n("workspace.workflowSpace.submit_workflow_success")),E.value=d.data.rid,K.value=setInterval(async()=>{const l=await A("check_status",{rid:E.value});if(l.status==200){g.success(n("workspace.workflowSpace.run_workflow_success")),clearInterval(K.value),b.value=!1,c.value=l.data;const m=ee(c.value),h=te(m);$.value=h.inputFields,T.value=h.outputNodes,N.value=h.triggerNodes}else l.status==500&&(b.value=!1,I.value="FAILED",g.error(n("workspace.workflowSpace.run_workflow_failed")),clearInterval(K.value),re(l.data.error_task),H.value=!0)},1e3)):(g.error(n("workspace.workflowSpace.submit_workflow_failed")),b.value=!1)},Le=async()=>{b.value=!0,(await pe("update",{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,...c.value})).status==200?g.success(n("workspace.workflowSpace.update_schedule_success")):g.error(n("workspace.workflowSpace.update_schedule_failed")),b.value=!1},ne=w(!1),Se=async()=>{ne.value=!0,(await pe("delete",{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,...c.value})).status==200?g.success(n("workspace.workflowSpace.delete_schedule_success")):g.error(n("workspace.workflowSpace.delete_schedule_failed")),ne.value=!1},be=async()=>{(await A("delete",{wid:c.value.wid})).status==200?(g.success(n("workspace.workflowSpace.delete_success")),se.deleteUserWorkflow(c.value.wid),se.deleteUserWorkflow(c.value.wid,!0),P.push({name:"WorkflowSpaceMain"})):g.error(n("workspace.workflowSpace.delete_failed"))},je=()=>{P.push({name:"WorkflowEditor",params:{workflowId:J}})},H=w(!1),I=w(""),Q=w(""),xe=Pe(()=>I.value=="FINISHED"?"success":I.value=="FAILED"?"error":"info"),re=k=>{let[u,d]=(k||".").split(".");u=u.split("_").map((l,m)=>m===0?l.charAt(0).toLowerCase()+l.slice(1):l.charAt(0).toUpperCase()+l.slice(1)).join(""),u=="output"&&(u="outputs"),d=d.split("_").map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(""),d=="OpenAi"?d="OpenAI":d=="ChatGlm"&&(d="ChatGLM"),Q.value=`${u}.${d}`},ie=k=>{E.value=k.rid,I.value=k.status,c.value.data={...k.data,ui:G.value.data.ui||{}},re(k.data.error_task);const u=ee(c.value),d=te(u);$.value=d.inputFields,T.value=d.outputNodes,N.value=d.triggerNodes,H.value=!0},We=k=>{window.pywebview.api.open_local_file(k)};return(k,u)=>{const d=i("a-skeleton"),l=i("a-typography-title"),m=i("a-typography-text"),h=i("a-divider"),C=i("a-carousel"),x=i("a-modal"),X=i("a-typography-link"),Ue=i("a-tag"),Y=i("a-space"),S=i("a-col"),F=i("a-button"),ue=i("a-popconfirm"),V=i("a-row"),Ie=i("a-alert"),Ve=i("a-select"),De=i("a-textarea"),Me=i("a-input"),$e=i("a-input-number"),Ce=i("a-checkbox"),Fe=i("a-form-item"),Re=i("a-form"),Te=i("cron-ant"),Ne=i("a-card"),ce=i("a-tooltip"),de=i("a-typography-paragraph"),ke=i("a-spin"),z=Je("highlight");return le.value?(s(),p("div",dt,[t(d,{active:""})])):(s(),f(ke,{key:1,spinning:he.value,class:"space-container"},{default:o(()=>[t(V,{justify:"space-between",align:"middle"},{default:o(()=>[t(S,null,{default:o(()=>[t(l,null,{default:o(()=>[y(v(c.value.title),1)]),_:1}),t(Y,null,{default:o(()=>[t(m,{type:"secondary"},{default:o(()=>[y(v(r(n)("workspace.workflowSpace.update_time",{time:new Date(c.value.update_time).toLocaleString()})),1)]),_:1}),t(h,{type:"vertical"}),t(X,{onClick:u[1]||(u[1]=a=>Z.value=!0)},{default:o(()=>[y(v(r(n)("workspace.workflowSpace.brief"))+" ",1),t(x,{open:Z.value,title:r(n)("workspace.workflowSpace.brief"),width:ye.value,footer:null,class:"introduction-modal",onCancel:u[0]||(u[0]=a=>Z.value=!1)},{default:o(()=>[t(C,{autoplay:"",arrows:"","dots-class":"slick-dots slick-thumb"},{customPaging:o(a=>[D("a",null,[D("img",{src:c.value.images[a.i]},null,8,kt)])]),default:o(()=>[(s(!0),p(M,null,R(c.value.images,(a,j)=>(s(),p("div",{key:j},[D("img",{src:a},null,8,_t)]))),128))]),_:1}),W(t(r(O),{source:c.value.brief,class:"custom-scrollbar markdown-body custom-hljs"},null,8,["source"]),[[z]])]),_:1},8,["open","title","width"])]),_:1}),t(h,{type:"vertical"}),(s(!0),p(M,null,R(c.value.tags,(a,j)=>(s(),f(Ue,{color:a.color,key:j},{default:o(()=>[y(v(a.title),1)]),_:2},1032,["color"]))),128))]),_:1})]),_:1}),t(S,null,{default:o(()=>[t(Y,null,{default:o(()=>[t(lt,{workflowId:r(J),onOpenRecord:ie},null,8,["workflowId"]),t(F,{onClick:je},{default:o(()=>[y(v(r(n)("workspace.workflowSpace.edit")),1)]),_:1}),t(ue,{placement:"leftTop",title:r(n)("workspace.workflowSpace.delete_confirm"),onConfirm:be},{default:o(()=>[t(F,{type:"primary",danger:""},{default:o(()=>[y(v(r(n)("workspace.workflowSpace.delete")),1)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1})]),_:1}),t(h),t(V,{gutter:[16,16]},{default:o(()=>[H.value?(s(),f(S,{key:0,span:24},{default:o(()=>[t(Ie,{type:xe.value,"show-icon":""},{message:o(()=>[D("span",null,v(r(n)("workspace.workflowSpace.record_status",{status:r(n)(`components.workspace.workflowRunRecordsDrawer.status_${I.value.toLowerCase()}`)})),1),t(h,{type:"vertical"}),I.value=="FAILED"&&Q.value!="."?(s(),p("span",pt,v(r(n)("workspace.workflowSpace.record_error_task",{task:r(n)("components.nodes."+Q.value+".title")})),1)):U("",!0)]),_:1},8,["type"])]),_:1})):U("",!0),W(t(S,{xxl:6,xl:8,lg:10,md:24},{default:o(()=>[t(V,{gutter:[16,16]},{default:o(()=>[t(l,{level:3},{default:o(()=>[t(r(rt),{fill:"#28c5e5"}),y(" "+v(r(n)("workspace.workflowSpace.inputs")),1)]),_:1}),t(S,{span:24},{default:o(()=>[t(Re,{layout:"vertical"},{default:o(()=>[(s(!0),p(M,null,R($.value,(a,j)=>(s(),p("div",{key:`field-${a}-${j}`},[r(Ze).includes(a.field_type)?U("",!0):(s(),f(Fe,{key:0},{label:o(()=>[y(v(a.display_name),1)]),default:o(()=>[a.category=="llms"&&a=="temperature"?(s(),f(Qe,{key:0,modelValue:a.value,"onUpdate:modelValue":_=>a.value=_},null,8,["modelValue","onUpdate:modelValue"])):a.field_type=="select"?(s(),f(Ve,{key:1,value:a.value,"onUpdate:value":_=>a.value=_,options:a.options},null,8,["value","onUpdate:value","options"])):a.field_type=="textarea"?(s(),f(De,{key:2,value:a.value,"onUpdate:value":_=>a.value=_,autoSize:!0,showCount:!0,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):a.field_type=="input"?(s(),f(Me,{key:3,value:a.value,"onUpdate:value":_=>a.value=_,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):a.field_type=="number"?(s(),f($e,{key:4,value:a.value,"onUpdate:value":_=>a.value=_,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):a.field_type=="checkbox"?(s(),f(Ce,{key:5,checked:a.value,"onUpdate:checked":_=>a.value=_},null,8,["checked","onUpdate:checked"])):a.field_type=="file"?(s(),f(ot,{key:6,modelValue:a.value,"onUpdate:modelValue":_=>a.value=_},null,8,["modelValue","onUpdate:modelValue"])):a.field_type=="list"?(s(),f(Xe,{key:7,modelValue:a.value,"onUpdate:modelValue":_=>a.value=_},null,8,["modelValue","onUpdate:modelValue"])):U("",!0)]),_:2},1024)),a.field_type=="typography-paragraph"?(s(),f(V,{key:1},{default:o(()=>[t(S,{span:24,class:"ui-special-item-container"},{default:o(()=>[W(t(r(O),{source:a.value,class:"markdown-body custom-hljs ui-special-item"},null,8,["source"]),[[z]])]),_:2},1024)]),_:2},1024)):U("",!0)]))),128))]),_:1})]),_:1}),t(h),t(S,{span:24},{default:o(()=>[t(V,{gutter:[16,16]},{default:o(()=>[(s(!0),p(M,null,R(N.value,a=>(s(),f(S,{key:`node-${a.id}`,span:24},{default:o(()=>[a.type=="ButtonTrigger"?(s(),f(F,{key:0,type:"primary",block:"",onClick:ge,loading:b.value},{default:o(()=>[y(v(a.data.template.button_text.value),1)]),_:2},1032,["loading"])):a.type=="ScheduleTrigger"?(s(),f(Ne,{key:1,title:r(n)("components.nodes.triggers.ScheduleTrigger.schedule_settings")},{extra:o(()=>[t(Y,null,{default:o(()=>[t(F,{type:"primary",onClick:Le,loading:b.value},{default:o(()=>[y(v(r(n)("components.nodes.triggers.ScheduleTrigger.save_schedule_settings")),1)]),_:1},8,["loading"]),t(ue,{title:r(n)("workspace.workflowSpace.delete_schedule_trigger_confirm"),onConfirm:Se},{default:o(()=>[t(F,{type:"primary",danger:""},{default:o(()=>[y(v(r(n)("workspace.workflowSpace.delete")),1)]),_:1})]),_:1},8,["title"])]),_:1})]),default:o(()=>[t(Te,{modelValue:a.data.template.schedule.value,"onUpdate:modelValue":j=>a.data.template.schedule.value=j,"button-props":{type:"primary",shape:"round"},locale:r(we)},null,8,["modelValue","onUpdate:modelValue","locale"])]),_:2},1032,["title"])):U("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1},512),[[ae,!L.value]]),t(S,{xxl:L.value?24:18,xl:L.value?24:16,lg:L.value?24:14,md:24},{default:o(()=>[t(l,{level:3,style:{display:"flex","justify-content":"space-between"}},{default:o(()=>[D("span",null,[t(r(ut),{fill:"#28c5e5"}),y(" "+v(r(n)("workspace.workflowSpace.outputs")),1)]),D("span",null,[t(ce,{title:r(n)("workspace.workflowSpace.maximize_output")},{default:o(()=>[W(t(r(it),{onClick:u[2]||(u[2]=a=>L.value=!L.value)},null,512),[[ae,!L.value]])]),_:1},8,["title"]),t(ce,{title:r(n)("workspace.workflowSpace.normalize_output")},{default:o(()=>[W(t(r(ct),{onClick:u[3]||(u[3]=a=>L.value=!L.value)},null,512),[[ae,L.value]])]),_:1},8,["title"])])]),_:1}),t(ke,{spinning:b.value},{default:o(()=>[t(V,{gutter:[16,16]},{default:o(()=>[(s(!0),p(M,null,R(T.value,(a,j)=>(s(),f(S,{span:24,class:"draggable-item",key:`node-${a.id}-${j}`},{default:o(()=>{var _;return[a.type=="Text"?(s(),p("div",ft,[t(l,{level:5},{default:o(()=>[y(v(a.data.template.output_title.value),1)]),_:2},1024),a.data.template.render_markdown.value?(s(),p(M,{key:0},[W(t(r(O),{source:a.data.template.text.value,class:"markdown-body custom-hljs"},null,8,["source"]),[[z]]),t(de,{copyable:{text:a.data.template.text.value}},null,8,["copyable"])],64)):(s(),f(de,{key:1,copyable:{text:a.data.template.text.value}},{default:o(()=>[y(v(a.data.template.text.value),1)]),_:2},1032,["copyable"]))])):a.type=="Document"?(s(),p("div",wt,[t(X,{onClick:bt=>We(a.data.template.output.value)},{default:o(()=>[y(v(a.data.template.output.value),1)]),_:2},1032,["onClick"])])):a.type=="Audio"?(s(),p("div",vt,[t(Ye,{audios:[(_=a.data.template.audio_url)==null?void 0:_.value]},null,8,["audios"])])):a.type=="Mindmap"?(s(),p("div",mt,[t(et,{content:a.data.template.content.value,style:{width:"100%","min-height":"50vh"}},null,8,["content"])])):a.type=="Mermaid"?(s(),p("div",ht,[t(tt,{content:a.data.template.content.value,style:{width:"100%","min-height":"50vh"}},null,8,["content"])])):a.type=="Echarts"?(s(),p("div",yt,[t(at,{option:a.data.template.option.value,style:{width:"100%","min-height":"50vh"}},null,8,["option"])])):(s(),p("div",gt,[a.field_type=="typography-paragraph"?(s(),p("div",Lt,[W(t(r(O),{source:a.value,class:"markdown-body custom-hljs ui-special-item"},null,8,["source"]),[[z]])])):U("",!0)]))]}),_:2},1024))),128))]),_:1})]),_:1},8,["spinning"])]),_:1},8,["xxl","xl","lg"])]),_:1})]),_:1},8,["spinning"]))}}},$t=nt(St,[["__scopeId","data-v-9f6aad00"]]);export{$t as default};
