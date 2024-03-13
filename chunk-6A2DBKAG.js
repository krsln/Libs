import{Aa as _,Ba as g,Ca as a,D as k,Da as $,Ea as A,F as v,Fa as te,G as y,Ia as ne,J as u,Ja as ie,K as f,Ka as R,La as O,N as z,Na as I,Oa as x,P as S,W as J,Wa as V,Xa as U,_ as X,a as K,b as W,ba as s,ca as F,gb as re,hb as T,ib as E,lb as b,ma as l,na as Z,oa as o,pa as P,qa as h,qb as oe,ra as ee,rb as se,sa as D,t as Y,tb as ae,ua as c,ub as ce,va as d,vb as de,wa as C,xa as B,ya as L,yb as le}from"./chunk-7VR4C4KM.js";function ue(e,i){if(e&1){let t=_();c(0,"div",2)(1,"div",3),g("click",function(){let m=u(t).$implicit,p=a();return f(p.ChangeAccent(m))}),d()()}if(e&2){let t=i.$implicit,n=a();D("Square Rounded-circle Bg-",t.toLowerCase(),""),h("Bc-silver",t=="Adaptive"&&t!=n.Accent)("Bc-lime",t==n.Accent),o("title",t)}}function fe(e,i){if(e&1){let t=_();c(0,"div",2)(1,"div",3),g("click",function(){let m=u(t).$implicit,p=a();return f(p.ChangeTheme(m))}),d()()}if(e&2){let t=i.$implicit,n=a();D("Square Bg-",t.toLowerCase(),""),h("Bc-silver",t=="Adaptive"&&t!=n.Theme)("Bc-lime",t==n.Theme),o("title",t)}}function N(e,i){e.classList.add(i)}function j(e,i){e.classList.forEach(t=>{t.startsWith(i)&&e.classList.remove(t)})}var et=(()=>{class e{Accents=["Adaptive","Secondary","Success","Info","Warning","Danger"];Accent="Adaptive";constructor(){}ngOnInit(){typeof window<"u"&&typeof document<"u"&&(localStorage.getItem("Accent")&&(this.Accent=localStorage.getItem("Accent")||"Light"),j(document.body,"Accent-"),N(document.body,"Accent-"+this.Accent.toLowerCase()))}ChangeAccent(t){typeof window<"u"&&typeof document<"u"&&(this.Accent=t,localStorage.setItem("Accent",this.Accent),j(document.body,"Accent-"),N(document.body,"Accent-"+this.Accent.toLowerCase()))}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["ql-accent-picker"],["AccentPicker"]],decls:2,vars:1,consts:[[1,"D-flex","Bg-silver","Bg-alpha-20","P-1"],["style","border: 2px solid transparent; cursor: pointer;",3,"class","Bc-silver","title","Bc-lime",4,"ngFor","ngForOf"],[2,"border","2px solid transparent","cursor","pointer",3,"title"],[1,"Centered",3,"click"]],template:function(n,r){n&1&&(c(0,"div",0),l(1,ue,2,8,"div",1),d()),n&2&&(s(),o("ngForOf",r.Accents))},dependencies:[T],styles:[`ql-accent-picker,AccentPicker{position:relative;display:block}
`],encapsulation:2})}return e})(),tt=(()=>{class e{Themes=["Light","Dark","Night"];Theme="Light";constructor(){}ngOnInit(){typeof window<"u"&&typeof document<"u"&&(localStorage.getItem("Theme")&&(this.Theme=localStorage.getItem("Theme")||"Light"),j(document.body,"Theme-"),N(document.body,"Theme-"+this.Theme.toLowerCase()))}ChangeTheme(t){typeof window<"u"&&typeof document<"u"&&(this.Theme=t,localStorage.setItem("Theme",this.Theme),j(document.body,"Theme-"),N(document.body,"Theme-"+this.Theme.toLowerCase()))}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["ql-theme-picker"],["ThemePicker"]],decls:2,vars:1,consts:[[1,"D-flex","Bg-silver","Bg-alpha-20","P-1"],["style","border: 2px solid transparent; cursor: pointer;",3,"class","Bc-silver","title","Bc-lime",4,"ngFor","ngForOf"],[2,"border","2px solid transparent","cursor","pointer",3,"title"],[1,"Centered",3,"click"]],template:function(n,r){n&1&&(c(0,"div",0),l(1,fe,2,8,"div",1),d()),n&2&&(s(),o("ngForOf",r.Themes))},dependencies:[T],styles:[`ql-theme-picker,ThemePicker{position:relative;display:block}
`],encapsulation:2})}return e})(),nt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=y({type:e});static \u0275inj=S({imports:[b]})}return e})();function _e(e,i){if(e&1&&C(0,"i",10),e&2){let t=a(3);o("ngClass",t.Root.FaIcon)}}function ge(e,i){if(e&1&&(c(0,"span"),I(1),d()),e&2){let t=a(3);s(),x(t.Root.Label)}}var H=e=>[e];function ve(e,i){if(e&1&&(c(0,"a",7),l(1,_e,1,1,"i",8)(2,ge,2,1,"span",9),d()),e&2){let t=a(2);o("routerLink",U(3,H,t.Root.Href)),s(),o("ngIf",t.Root.FaIcon),s(),o("ngIf",t.Root.Label)}}function Ce(e,i){if(e&1&&(c(0,"li",5),l(1,ve,3,5,"a",6),d()),e&2){let t=a();s(),o("ngIf",t.Root)}}function Ie(e,i){if(e&1&&C(0,"i",17),e&2){let t=a(2).$implicit;o("ngClass",t.FaIcon)}}function ye(e,i){if(e&1&&(c(0,"span"),I(1),d()),e&2){let t=a(2).$implicit;s(),x(t.Label)}}function Se(e,i){if(e&1&&(c(0,"a",15),l(1,Ie,1,1,"i",16)(2,ye,2,1,"span",9),d()),e&2){let t=a().$implicit;o("href",U(4,H,t.Href?t.Href:""),X)("target","_blank"),s(),o("ngIf",t.FaIcon),s(),o("ngIf",t.Label)}}function xe(e,i){if(e&1&&C(0,"i",17),e&2){let t=a(2).$implicit;o("ngClass",t.FaIcon)}}function Te(e,i){if(e&1&&(c(0,"span"),I(1),d()),e&2){let t=a(2).$implicit;s(),x(t.Label)}}function be(e,i){if(e&1&&(c(0,"a",18),l(1,xe,1,1,"i",16)(2,Te,2,1,"span",9),d()),e&2){let t=a().$implicit;o("routerLink",U(3,H,t.Href?t.Href:"")),s(),o("ngIf",t.FaIcon),s(),o("ngIf",t.Label)}}function we(e,i){if(e&1&&C(0,"i",17),e&2){let t=a(2).$implicit;o("ngClass",t.FaIcon)}}function ke(e,i){if(e&1&&(c(0,"span"),I(1),d()),e&2){let t=a(2).$implicit;s(),x(t.Label)}}function Ee(e,i){if(e&1&&(c(0,"a",19),l(1,we,1,1,"i",16)(2,ke,2,1,"span",9),d()),e&2){let t=a().$implicit;s(),o("ngIf",t.FaIcon),s(),o("ngIf",t.Label)}}var Fe=()=>({exact:!0});function De(e,i){if(e&1&&(B(0),c(1,"li",11),l(2,Se,3,6,"a",12)(3,be,3,5,"a",13)(4,Ee,3,2,"a",14),d(),L()),e&2){let t=i.$implicit,n=i.last;s(),h("Active",n),o("routerLinkActive","Active")("routerLinkActiveOptions",V(8,Fe)),Z("aria-current",n?"page":null),s(),o("ngIf",t.External&&!n),s(),o("ngIf",!t.External&&!n),s(),o("ngIf",!t.External&&n)}}function Ve(e,i){e&1&&(c(0,"div",20)(1,"a",19)(2,"span"),I(3,"No breadcrumb items."),d()()())}var ct=(()=>{class e{router;activatedRoute;ROUTE_DATA_BREADCRUMB="breadcrumb";Chevron="Regular";Letter;Autoload=!1;Root;Items=[];constructor(t,n){this.router=t,this.activatedRoute=n}ngOnInit(){this.Letter&&(this.Letter=`'${this.Letter}'`),this.Root==null&&(this.Root={Label:"Home",Href:"/"}),this.Autoload&&(this.Items=this.createBreadcrumbs(this.activatedRoute.root),this.router.events.pipe(Y(t=>t instanceof oe)).subscribe(()=>this.Items=this.createBreadcrumbs(this.activatedRoute.root)))}createBreadcrumbs(t,n="",r=[]){let m=t.children;if(m.length===0)return r;for(let p of m){let M=p.snapshot.url.map(he=>he.path).join("/");M!==""&&(n+=`/${M}`);let G=p.snapshot.data[this.ROUTE_DATA_BREADCRUMB];return G&&r.push({Label:G,Href:n}),this.createBreadcrumbs(p,n,r)}}static \u0275fac=function(n){return new(n||e)(F(ae),F(se))};static \u0275cmp=v({type:e,selectors:[["ql-breadcrumb"],["NgBreadcrumb"],["Breadcrumb"]],hostAttrs:["ngSkipHydration","true"],inputs:{Chevron:"Chevron",Letter:"Letter",Autoload:"Autoload",Root:"Root",Items:"Items"},decls:5,vars:11,consts:[["aria-label","Breadcrumb"],[1,"Breadcrumb"],["class","Breadcrumb-item",4,"ngIf"],[4,"ngFor","ngForOf"],["class","Breadcrumb-item Active",4,"ngIf"],[1,"Breadcrumb-item"],["class","Breadcrumb-Link P-0",3,"routerLink",4,"ngIf"],[1,"Breadcrumb-Link","P-0",3,"routerLink"],["class","ME-1",3,"ngClass",4,"ngIf"],[4,"ngIf"],[1,"ME-1",3,"ngClass"],[1,"Breadcrumb-item",3,"routerLinkActive","routerLinkActiveOptions"],["class","Breadcrumb-Link",3,"href","target",4,"ngIf"],["class","Breadcrumb-Link",3,"routerLink",4,"ngIf"],["class","Breadcrumb-Link",4,"ngIf"],[1,"Breadcrumb-Link",3,"href","target"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"Breadcrumb-Link",3,"routerLink"],[1,"Breadcrumb-Link"],[1,"Breadcrumb-item","Active"]],template:function(n,r){n&1&&(c(0,"nav",0)(1,"ol",1),l(2,Ce,2,1,"li",2)(3,De,5,9,"ng-container",3)(4,Ve,4,0,"div",4),d()()),n&2&&(P("--ls-breadcrumb-divider",r.Letter),s(),h("Breadcrumb-larger",r.Chevron==="Larger")("Breadcrumb-vertical",r.Chevron==="Vertical")("Breadcrumb-regular",r.Chevron==="Regular"&&!r.Letter),s(),o("ngIf",r.Items.length>0),s(),o("ngForOf",r.Items),s(),o("ngIf",r.Items.length==0))},dependencies:[re,T,E,ce,de],encapsulation:2})}return e})(),dt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=y({type:e});static \u0275inj=S({imports:[b,le]})}return e})();function Me(e,i){if(e&1){let t=_();c(0,"div",3),g("click",function(){u(t);let r=a();return f(r.BackdropClicked())}),d()}if(e&2){let t=a();h("Active",t.Expanded)}}var Pe=["*"],Be=[[["Sidenav"]],"*"],Le=()=>({marginLeft:"329px"}),Ae=()=>({marginLeft:"328px",marginRight:"-328px"}),Re=["Sidenav","*"],Oe=(()=>{class e{eRef;Backdrop=!0;Mode="Side";Change=new k;_expanded=!1;get Expanded(){return this._expanded}set Expanded(t){this._expanded=t,this.Change.emit(t)}constructor(t){this.eRef=t}ngOnInit(){}BackdropClicked(){this.Expanded=!1}Close(){this.Expanded=!1}static \u0275fac=function(n){return new(n||e)(F(z))};static \u0275cmp=v({type:e,selectors:[["Sidenav"]],inputs:{Mode:"Mode",Expanded:"Expanded"},outputs:{Change:"Change"},exportAs:["Sidenav"],ngContentSelectors:Pe,decls:4,vars:7,consts:[["class","Sidenav-backdrop",3,"Active","click",4,"ngIf"],[1,"Sidenav","PB-5"],[1,"Sidenav-inner","Scrollbar","Scrollbar-2"],[1,"Sidenav-backdrop",3,"click"]],template:function(n,r){n&1&&($(),l(0,Me,1,2,"div",0),c(1,"div",1)(2,"div",2),A(3),d()()),n&2&&(o("ngIf",r.Backdrop&&r.Mode!=="Side"),s(),h("Sidenav-mode-over",r.Mode==="Over")("Sidenav-mode-side",r.Mode==="Side")("Sidenav-mode-push",r.Mode==="Push"))},dependencies:[E],encapsulation:2})}return e})(),It=(()=>{class e{subscriptionSidenav;_backdrop=!0;Sidenav;get Backdrop(){return this._backdrop}set Backdrop(t){this._backdrop=t,this.Sidenav&&(this.Sidenav.Backdrop=t)}ngOnDestroy(){this.subscriptionSidenav&&this.subscriptionSidenav.unsubscribe()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["Sidenav-container"]],contentQueries:function(n,r,m){if(n&1&&ne(m,Oe,5),n&2){let p;R(p=O())&&(r.Sidenav=p.first)}},inputs:{Backdrop:"Backdrop"},ngContentSelectors:Re,decls:4,vars:6,consts:[[1,"Sidenav-container","Sidenav-transition"],[1,"Sidenav-content"]],template:function(n,r){n&1&&($(Be),c(0,"div",0),A(1),c(2,"div",1),A(3,1),d()()),n&2&&(h("Opened",r.Sidenav.Expanded),s(2),ee(r.Sidenav.Expanded&&r.Sidenav.Mode==="Side"?V(4,Le):r.Sidenav.Expanded&&r.Sidenav.Mode==="Push"?V(5,Ae):null))},encapsulation:2})}return e})(),yt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=y({type:e});static \u0275inj=S({imports:[b]})}return e})();var Ue=["TreeViewChildren"];function Ne(e,i){e&1&&(c(0,"div",5),C(1,"hr"),d())}function je(e,i){if(e&1){let t=_();c(0,"div",7),g("click",function(){u(t);let r=a(2);return f(r.ToggleChildren())}),C(1,"i",8),d()}}function $e(e,i){if(e&1){let t=_();c(0,"div",7),g("click",function(){u(t);let r=a(2);return f(r.ToggleChildren())}),C(1,"i",9),d()}}function qe(e,i){if(e&1&&(B(0),l(1,je,2,0,"div",6)(2,$e,2,0,"div",6),L()),e&2){let t=a();s(),o("ngIf",t.Item.Expanded),s(),o("ngIf",!t.Item.Expanded)}}function Qe(e,i){if(e&1){let t=_();c(0,"div",16)(1,"div",17)(2,"input",18),g("change",function(){u(t);let r=a(2);return f(r.Selected())}),d(),C(3,"label",19),d()()}if(e&2){let t=a(2);s(2),h("Indeterminate",t.Item.Indeterminate),o("id",t.Id+"_"+t.Item.Id)("checked",t.Item.Checked),s(),te("for",t.Id+"_"+t.Item.Id)}}function He(e,i){if(e&1&&C(0,"i"),e&2){let t=a(2);D("Tree-leaf--icon ",t.Item.Content.Icon,"")}}function Ge(e,i){if(e&1&&(c(0,"div",20),I(1),d()),e&2){let t=a(2);s(),x(t.Item.Content.Text)}}function Ke(e,i){if(e&1&&(c(0,"div",21),I(1),d()),e&2){let t=a(2);s(),x(t.Item.Content.Caption)}}function We(e,i){if(e&1){let t=_();c(0,"div",10),l(1,Qe,4,5,"div",11),c(2,"div",12),g("click",function(){u(t);let r=a();return f(r.Selected())}),l(3,He,1,3,"i",13)(4,Ge,2,1,"div",14)(5,Ke,2,1,"div",15),d()()}if(e&2){let t=a();P("margin-left",t.Item.Children&&t.Item.Children.length>0?"-20px":""),h("Cursor-pointer",!t.Item.Disabled),s(),o("ngIf",t.Mode==="Multiple"),s(2),o("ngIf",t.Item.Content.Icon),s(),o("ngIf",t.Item.Content.Text),s(),o("ngIf",t.Item.Content.Caption)}}function Ye(e,i){if(e&1){let t=_();c(0,"TreeViewItem",24),g("Changed",function(){u(t);let r=a(2);return f(r.UpdateInternal())})("Unselect",function(){u(t);let r=a(2);return f(r.OnUnselect())}),d()}if(e&2){let t=i.$implicit,n=a(2);o("Item",t)("Mode",n.Mode)("Parent",n.Item)("Siblings",n.Item.Children)}}function ze(e,i){if(e&1&&(c(0,"div",22),l(1,Ye,1,4,"TreeViewItem",23),d()),e&2){let t=a();h("Expanded",t.Item.Expanded)("Collapsed",!t.Item.Expanded),s(),o("ngForOf",t.Item.Children)}}function Je(e,i){if(e&1){let t=_();c(0,"TreeViewItem",2),g("Changed",function(){u(t);let r=a();return f(r.Changed())}),d()}if(e&2){let t=i.$implicit,n=a();o("Item",t)("Mode",n.Mode)("Siblings",n.Items)}}var Xe=(()=>{class e{Id="Check".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Item={};Parent=void 0;Siblings=[];Mode="Multiple";Changed=new k;Unselect=new k;Children;constructor(){}ngOnInit(){this.Item.Expanded==null&&(this.Item.Expanded=!0)}Selected(){this.Item.Disabled||(this.Item.Indeterminate=!1,this.Mode==="Single"?(this.OnUnselect(),this.Unselect.emit(!0),this.Item.Checked=!this.Item.Checked):this.Mode==="Multiple"&&(this.Item.Checked=!this.Item.Checked,this.UpdateChildren(this.Item),this.UpdateParents()),this.Emit())}OnUnselect(){this.Parent&&(this.Parent.Indeterminate=!1,this.Parent.Checked=!1,this.UpdateChildren(this.Parent,!1),this.Parent.PId),this.Siblings.forEach(t=>{t.Indeterminate=!1,t.Checked=!1,this.UpdateChildren(t,!1),t.PId&&this.Unselect.emit(!0)}),this.Item.Children?.forEach(t=>{t.Indeterminate=!1,t.Checked=!1,this.UpdateChildren(t,!1)})}UpdateChildren(t,n=t.Checked){t.Children&&t.Children.length>0&&t.Children.forEach(r=>{r.Indeterminate=!1,r.Checked=n,this.UpdateChildren(r)})}UpdateParents(){if(this.Parent){this.Parent.Indeterminate=!1;let t=this.Siblings.map(r=>r.Checked).every(r=>r),n=this.Siblings.map(r=>r.Checked).every(r=>!r);t&&(this.Parent.Checked=!0),n&&(this.Parent.Checked=!1),!t&&!n&&(this.Parent.Checked=!1,this.Parent.Indeterminate=!0)}}ToggleChildren(){this.Item.Disabled||(this.Item.Expanded=!this.Item.Expanded,this.Emit())}Emit(){this.Changed.emit(!0)}UpdateInternal(){this.Mode==="Multiple"&&this.UpdateParents(),this.Emit()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["ql-tree-view-item"],["NgTreeViewItem"],["TreeViewItem"]],viewQuery:function(n,r){if(n&1&&ie(Ue,5),n&2){let m;R(m=O())&&(r.Children=m.first)}},inputs:{Item:"Item",Parent:"Parent",Siblings:"Siblings",Mode:"Mode"},outputs:{Changed:"Changed",Unselect:"Unselect"},decls:5,vars:8,consts:[["class","Tree-separator",4,"ngIf"],[1,"Tree-branch"],[4,"ngIf"],["class","Tree-leaf",3,"margin-left","Cursor-pointer",4,"ngIf"],["class","Tree-trunk Scrollbar","style","max-height: 350px; overflow-y: auto;",3,"Expanded","Collapsed",4,"ngIf"],[1,"Tree-separator"],["class","Tree-chevron",3,"click",4,"ngIf"],[1,"Tree-chevron",3,"click"],[1,"gg-chevron-down"],[1,"gg-chevron-right"],[1,"Tree-leaf"],["class","Tree-leaf--checkbox",4,"ngIf"],[1,"Tree-leaf--content",3,"click"],[3,"class",4,"ngIf"],["class","Tree-leaf--label",4,"ngIf"],["class","Tree-leaf--caption",4,"ngIf"],[1,"Tree-leaf--checkbox"],[1,"Form-check"],["type","checkbox",1,"Form-check-input",3,"id","checked","change"],[1,"Form-check-label",3,"for"],[1,"Tree-leaf--label"],[1,"Tree-leaf--caption"],[1,"Tree-trunk","Scrollbar",2,"max-height","350px","overflow-y","auto"],[3,"Item","Mode","Parent","Siblings","Changed","Unselect",4,"ngFor","ngForOf"],[3,"Item","Mode","Parent","Siblings","Changed","Unselect"]],template:function(n,r){n&1&&(l(0,Ne,2,0,"div",0),c(1,"div",1),l(2,qe,3,2,"ng-container",2)(3,We,6,8,"div",3),d(),l(4,ze,2,5,"div",4)),n&2&&(o("ngIf",r.Item.Separator),s(),h("Disabled",r.Item.Disabled)("Active",r.Item.Checked&&r.Mode==="Single"),s(),o("ngIf",r.Item.Children&&r.Item.Children.length>0),s(),o("ngIf",r.Item.Content),s(),o("ngIf",r.Item.Children&&r.Item.Children.length>0))},dependencies:[T,E,e],encapsulation:2})}return e})(),Vt=(()=>{class e{Id="tv".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Mode="Multiple";SelectedItems=new k;Items=[];Sort=!1;constructor(){}ngOnChanges(t){this.Items&&this.Sort&&this.SortItems(this.Items)}ngOnInit(){}SortItems(t){t.forEach(n=>{n.Children&&this.SortItems(n.Children)}),t.sort((n,r)=>n.Content?.Text>r.Content?.Text?1:n.Content?.Text<r.Content?.Text?-1:0)}Changed(){let t=this.GetItems(this.Items);this.SelectedItems.emit(t)}GetItems(t){let n=[];return t.forEach(r=>{r.Checked&&n.push(W(K({},r),{Children:[]})),r.Children&&n.push(...this.GetItems(r.Children))}),n}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["ql-tree-view"],["NgTreeView"],["TreeView"]],hostAttrs:["ngSkipHydration","true"],inputs:{Mode:"Mode",Items:"Items",Sort:"Sort"},outputs:{SelectedItems:"SelectedItems"},features:[J],decls:2,vars:2,consts:[[1,"Tree-view",3,"id"],[3,"Item","Mode","Siblings","Changed",4,"ngFor","ngForOf"],[3,"Item","Mode","Siblings","Changed"]],template:function(n,r){n&1&&(c(0,"div",0),l(1,Je,1,3,"TreeViewItem",1),d()),n&2&&(o("id",r.Id),s(),o("ngForOf",r.Items))},dependencies:[T,Xe],encapsulation:2})}return e})(),Mt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=y({type:e});static \u0275inj=S({imports:[b]})}return e})();var w=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(w||{}),Lt="*";function At(e,i){return{type:w.Trigger,name:e,definitions:i,options:{}}}function Rt(e,i=null){return{type:w.Animate,styles:i,timings:e}}function Ot(e,i=null){return{type:w.Sequence,steps:e,options:i}}function Ut(e){return{type:w.Style,styles:e,offset:null}}function Nt(e,i,t){return{type:w.State,name:e,styles:i,options:t}}function jt(e){return{type:w.Keyframes,steps:e}}function $t(e,i,t=null){return{type:w.Transition,expr:e,animation:i,options:t}}var me=class{constructor(i=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=i+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},pe=class{constructor(i){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=i;let t=0,n=0,r=0,m=this.players.length;m==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(p=>{p.onDone(()=>{++t==m&&this._onFinish()}),p.onDestroy(()=>{++n==m&&this._onDestroy()}),p.onStart(()=>{++r==m&&this._onStart()})}),this.totalTime=this.players.reduce((p,M)=>Math.max(p,M.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let t=i*this.totalTime;this.players.forEach(n=>{let r=n.totalTime?Math.min(1,t/n.totalTime):1;n.setPosition(r)})}getPosition(){let i=this.players.reduce((t,n)=>t===null||n.totalTime>t.totalTime?n:t,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},qt="!";export{et as a,tt as b,nt as c,ct as d,dt as e,Oe as f,It as g,yt as h,Vt as i,Mt as j,w as k,Lt as l,At as m,Rt as n,Ot as o,Ut as p,Nt as q,jt as r,$t as s,me as t,pe as u,qt as v};
