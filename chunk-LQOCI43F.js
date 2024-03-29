import{a as mn,b as dn,c as cn,d as pn,e as gn,f as un,g as fn,h as vn,i as hn,j as Sn,m as Le,n as Ae,p as Y,q as Ee,r as In,s as Ne}from"./chunk-M7GLG6NZ.js";import{a as Pn,b as wn}from"./chunk-F76XDG2X.js";import{a as Xe,b as ve,c as se,d as me,e as Me,f as xn,g as Ze,h as Ke,i as et,k as Tn}from"./chunk-EUWVQB2U.js";import{a as I,b as E,c as En,d as _,e as _n,f as w,g as Mn}from"./chunk-IGGS4ZGV.js";import{$ as Jt,$a as tn,Aa as N,Ab as Ie,B as Re,Ba as u,Bb as le,Ca as f,Cb as Ye,D as K,Da as ne,Db as Je,Ea as X,Eb as Qe,F as h,Fa as lt,Fb as Cn,G as D,Gb as bn,H as ae,Ha as ye,I as Ut,Ia as ce,Ib as yn,J as b,K as y,Ka as pe,L as j,La as ge,M as $t,Ma as x,N as Yt,Na as n,O as ue,Oa as P,P as R,Pa as A,Qa as Xt,R as Ce,Ra as Zt,Sa as B,Ta as F,Ua as V,W as qe,Wa as Kt,Xa as ie,Ya as xe,Z as U,Za as en,_ as C,_a as $e,aa as Qt,ab as st,ba as i,bb as Fe,ca as T,da as Ge,db as oe,f as Vt,g as Ot,gb as nn,h as De,i as Ht,ib as z,ja as je,jb as G,k as Se,ka as be,kb as an,l as We,lb as rn,ma as v,mb as O,na as $,nb as Te,oa as a,p as we,pa as re,q as Wt,qa as S,r as zt,ra as Be,s as qt,sa as ot,sb as on,tb as ln,ua as e,ub as sn,va as t,vb as fe,w as ze,wa as p,x as Gt,xa as H,ya as W,z as jt,za as Ue,zb as Ve}from"./chunk-UOP222H4.js";var fi=["*"];function vi(r,d){r&1&&Ue(0)}var hi=(r,d,l)=>({$implicit:r,index:d,toggle:l});function Si(r,d){if(r&1&&(e(0,"div",3),Ue(1,4),e(2,"div",5),v(3,vi,1,0,"ng-container",6),t()()),r&2){let l=d.$implicit,s=d.index,m=f(),o=x(3);S("Disabled",l.Disabled)("Active",m.Expanded.has(s)),i(),a("ngTemplateOutlet",(l==null||l.CustomHeader==null?null:l.CustomHeader.templateRef)||o)("ngTemplateOutletContext",en(10,hi,l,s,m.getToggleState(s))),i(),S("Expanded",m.Expanded.has(s)),a("@contentExpansion",m.Expanded.has(s)?"expanded":"collapsed"),i(),a("ngTemplateOutlet",l.Content.templateRef)}}function Ci(r,d){r&1&&Ue(0)}function bi(r,d){if(r&1&&(j(),$t(),e(0,"span",13),n(1),t()),r&2){let l=f().$implicit;i(),P(l==null?null:l.Title)}}function yi(r,d){if(r&1){let l=N();e(0,"header",7),u("click",function(){let m=b(l),o=m.$implicit,c=m.index,g=f();return y(o.Disabled?{}:g.toggleState(c))}),v(1,Ci,1,0,"ng-container",6),e(2,"button",8),j(),e(3,"svg",9),p(4,"path",10)(5,"path",11),t()()(),v(6,bi,2,1,"ng-template",null,12,Fe)}if(r&2){let l=d.$implicit,s=x(7);i(),a("ngTemplateOutlet",(l==null||l.CustomTitle==null?null:l.CustomTitle.templateRef)||s),i(),a("disabled",l.Disabled)}}var mt=(()=>{class r{templateRef;constructor(l){this.templateRef=l}static \u0275fac=function(s){return new(s||r)(T(Ge))};static \u0275dir=ae({type:r,selectors:[["","AccordionTitle",""]]})}return r})(),dt=(()=>{class r{templateRef;constructor(l){this.templateRef=l}static \u0275fac=function(s){return new(s||r)(T(Ge))};static \u0275dir=ae({type:r,selectors:[["","AccordionHeader",""]]})}return r})();var ct=(()=>{class r{templateRef;constructor(l){this.templateRef=l}static \u0275fac=function(s){return new(s||r)(T(Ge))};static \u0275dir=ae({type:r,selectors:[["","AccordionContent",""]]})}return r})(),pt=(()=>{class r{Title="";Disabled=!1;Expanded=!1;Content;CustomTitle;CustomHeader;static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["AccordionItem"]],contentQueries:function(s,m,o){if(s&1&&(ce(o,ct,5),ce(o,mt,5),ce(o,dt,5)),s&2){let c;pe(c=ge())&&(m.Content=c.first),pe(c=ge())&&(m.CustomTitle=c.first),pe(c=ge())&&(m.CustomHeader=c.first)}},inputs:{Title:"Title",Disabled:"Disabled",Expanded:"Expanded"},ngContentSelectors:fi,decls:1,vars:0,template:function(s,m){s&1&&(ne(),X(0))}})}return r})(),Ln=(()=>{class r{cdr;Expanded=new Set;Collapsing=!0;Items;constructor(l){this.cdr=l}ngAfterViewInit(){this.Items&&zt(this.Items.changes,Se(this.Items)).pipe(We(()=>this.Items?.toArray())).subscribe(l=>{l?.forEach((s,m)=>{s.Expanded&&this.Expanded.add(m)}),this.cdr.detectChanges()})}getToggleState=l=>this.toggleState.bind(this,l);toggleState=l=>{this.Expanded.has(l)?this.Expanded.delete(l):(this.Collapsing&&this.Expanded.clear(),this.Expanded.add(l))};static \u0275fac=function(s){return new(s||r)(T(oe))};static \u0275cmp=h({type:r,selectors:[["Accordion"]],contentQueries:function(s,m,o){if(s&1&&ce(o,pt,4),s&2){let c;pe(c=ge())&&(m.Items=c)}},inputs:{Collapsing:"Collapsing"},decls:4,vars:1,consts:[[1,"Accordion"],["class","Card",3,"Disabled","Active",4,"ngFor","ngForOf"],["defaultHeader",""],[1,"Card"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"Card-body"],[4,"ngTemplateOutlet"],[1,"Card-header",3,"click"],[1,"Accordion-toggle",3,"disabled"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","24","height","24"],["fill","none","d","M0 0h24v24H0z"],["d","M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"],["defaultTitle",""],[1,""]],template:function(s,m){s&1&&(e(0,"section",0),v(1,Si,4,14,"div",1),t(),v(2,yi,8,2,"ng-template",null,2,Fe)),s&2&&(i(),a("ngForOf",m.Items))},dependencies:[z,rn],encapsulation:2,data:{animation:[Le("contentExpansion",[Ee("expanded",Y({height:"*",opacity:1,visibility:"visible"})),Ee("collapsed",Y({height:"0px",padding:0,opacity:0,visibility:"hidden"})),Ne("expanded <=> collapsed",Ae("200ms cubic-bezier(.37,1.04,.68,.98)"))])]}})}return r})();var An=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function Ti(r,d){r&1&&(j(),p(0,"circle",13))}function Ii(r,d){if(r&1&&(j(),p(0,"rect",14)),r&2){let l=f(2);S("Round",l.Variant==="Rounded")}}function Ei(r,d){if(r&1&&(H(0),j(),e(1,"svg",5)(2,"title"),n(3),t(),e(4,"mask",6),p(5,"rect",7),v(6,Ti,1,0,"circle",8),t(),e(7,"g"),p(8,"image",9)(9,"rect",10),e(10,"text",11),n(11),t(),v(12,Ii,1,2,"rect",12),t()(),W()),r&2){let l=f();i(),$("viewBox",l.Letter.length>0?"0 0 35.8 35.8":"0 0 100 100"),i(2),P(l.Alt),i(),a("id",l.Mask_r),i(),S("Round",l.Variant==="Rounded"),i(),a("ngIf",l.Badge),i(),$("mask","url(#"+l.Mask_r+")"),i(),$("href",l.Img,null,"xlink"),i(),$("fill",l.BgColor),i(2),P(l.Letter),i(),a("ngIf",l.Border)}}function _i(r,d){r&1&&(j(),p(0,"circle",13))}function Pi(r,d){r&1&&(j(),p(0,"circle",18))}function wi(r,d){if(r&1&&(H(0),j(),e(1,"svg",5)(2,"title"),n(3),t(),e(4,"mask",6),p(5,"circle",15),v(6,_i,1,0,"circle",8),t(),e(7,"g"),p(8,"image",9)(9,"circle",16),e(10,"text",11),n(11),t(),v(12,Pi,1,0,"circle",17),t()(),W()),r&2){let l=f();i(),$("viewBox",l.Letter.length>0?"0 0 35.8 35.8":"0 0 100 100"),i(2),P(l.Alt),i(),a("id",l.Mask_c),i(2),a("ngIf",l.Badge),i(),$("mask","url(#"+l.Mask_c+")"),i(),$("href",l.Img,null,"xlink"),i(),$("fill",l.BgColor),i(2),P(l.Letter),i(),a("ngIf",l.Border)}}function Mi(r,d){if(r&1&&p(0,"div",19),r&2){let l=f();S("Online",l.Online)}}var Li=["*"];function Ai(r,d){if(r&1&&(e(0,"div",3)(1,"div",4),j(),e(2,"svg",5)(3,"mask",6),p(4,"circle",7)(5,"circle",8),t(),e(6,"g"),p(7,"circle",7),e(8,"text",9),n(9),t(),p(10,"circle",10),t()()()()),r&2){let l=f();i(3),a("id",l.Mask_c+"_Reversed-Num"),i(3),$("mask","url(#"+l.Mask_c+"_Reversed-Num)"),i(3),A("",l.Count-3,"+")}}function Ni(r,d){r&1&&(j(),p(0,"circle",8))}function ki(r,d){if(r&1&&(e(0,"div",11)(1,"div",4),j(),e(2,"svg",12)(3,"mask",6),p(4,"circle",7),v(5,Ni,1,0,"circle",13),t(),e(6,"g"),p(7,"image",14)(8,"circle",10),t()()()()),r&2){let l=d.$implicit,s=d.index,m=d.first,o=d.last,c=f();i(3),a("id",c.Mask_c+"_"+s),i(2),a("ngIf",!m&&!c.Reversed||!o&&c.Reversed),i(),$("mask","url(#"+c.Mask_c+"_"+s+")"),i(),$("href",l,null,"xlink")}}function Di(r,d){if(r&1&&(e(0,"div",3)(1,"div",4),j(),e(2,"svg",5)(3,"mask",6),p(4,"circle",7)(5,"circle",8),t(),e(6,"g"),p(7,"circle",7),e(8,"text",9),n(9),t(),p(10,"circle",10),t()()()()),r&2){let l=f();i(3),a("id",l.Mask_c+"-Num"),i(3),$("mask","url(#"+l.Mask_c+"-Num)"),i(3),A("+",l.Count-3,"")}}var tt=(()=>{class r{Mask_c="Mask_c".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Mask_r="Mask_r".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Alt="";Img="";Letter="";BgColor="transparent";Variant="Circle";Border=!0;Badge=!1;Anchor="Bottom";Online=!1;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-avatar"],["NgAvatar"],["Avatar"]],inputs:{Alt:"Alt",Img:"Img",Letter:"Letter",BgColor:"BgColor",Variant:"Variant",Border:"Border",Badge:"Badge",Anchor:"Anchor",Online:"Online"},ngContentSelectors:Li,decls:7,vars:7,consts:[[1,"Avatar","Sqr","F-shadow"],[1,"Content"],[1,"Position-absolute","Top-50","Start-50","Translate-middle"],[4,"ngIf"],["class","Avatar-badge",3,"Online",4,"ngIf"],["role","img","xmlns","http://www.w3.org/2000/svg"],[3,"id"],["fill","white","rx","8","ry","8","width","85%","height","85%"],["fill","black","r","10%",4,"ngIf"],["width","100%","height","100%"],["rx","8","ry","8","width","100%","height","100%"],["color","black","x","50%","y","50%","font-size","90%"],["class","Avatar-border","rx","8","ry","8","width","85%","height","85%",3,"Round",4,"ngIf"],["fill","black","r","10%"],["rx","8","ry","8","width","85%","height","85%",1,"Avatar-border"],["fill","white","r","50%"],["r","50%"],["class","Avatar-border","r","50%",4,"ngIf"],["r","50%",1,"Avatar-border"],[1,"Avatar-badge"]],template:function(s,m){s&1&&(ne(),e(0,"div",0)(1,"div",1)(2,"div",2),X(3),t(),v(4,Ei,13,11,"ng-container",3)(5,wi,13,9,"ng-container",3)(6,Mi,1,2,"div",4),t()()),s&2&&(S("Sign-top",m.Anchor==="Top")("Sign-bottom",m.Anchor==="Bottom"),i(4),a("ngIf",m.Variant==="Square"||m.Variant==="Rounded"),i(),a("ngIf",m.Variant==="Circle"),i(),a("ngIf",m.Badge))},dependencies:[G],encapsulation:2})}return r})(),Nn=(()=>{class r{Mask_c="Mask_c".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));ImgList=[];Reversed=!1;More=!1;Count=0;constructor(){}ngOnInit(){this.Count=this.ImgList.length,this.More&&(this.ImgList=this.ImgList.slice(0,3)),this.ImgList.length>7&&(this.ImgList=this.ImgList.slice(0,7))}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-avatar-group"],["NgAvatarGroup"],["AvatarGroup"]],inputs:{ImgList:"ImgList",Reversed:"Reversed",More:"More"},decls:4,vars:11,consts:[[1,"Avatar-group","F-shadow"],["class","Sqr Fg-yellow",4,"ngIf"],["class","Sqr",4,"ngFor","ngForOf"],[1,"Sqr","Fg-yellow"],[1,"Centered"],["role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 35.8 35.8"],[3,"id"],["fill","white","r","50%"],["fill","black","r","50%"],["x","50%","y","50%","font-size","80%"],["r","50%",1,"Avatar-border"],[1,"Sqr"],["role","img","xmlns","http://www.w3.org/2000/svg"],["fill","black","r","50%",4,"ngIf"],["width","100%","height","100%"]],template:function(s,m){s&1&&(e(0,"div",0),v(1,Ai,11,3,"div",1)(2,ki,9,4,"div",2)(3,Di,11,3,"div",1),t()),s&2&&(S("Avatar-group-reversed",m.Reversed)("Quadruplet",m.ImgList.length==4||m.More)("Triplet",m.ImgList.length==3)("Twin",m.ImgList.length==2),i(),a("ngIf",m.More&&m.Reversed),i(),a("ngForOf",m.ImgList),i(),a("ngIf",m.More&&!m.Reversed))},dependencies:[z,G],encapsulation:2})}return r})(),kn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();var Ri=[[["",8,"card-img"]],"*",[["",8,"btn-close"]]],Bi=[".Card-img","*",".Btn-close"],nt=(()=>{class r{Orientation="Vertical";Caret=void 0;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-card"],["NgCard"],["Card"]],inputs:{Orientation:"Orientation",Caret:"Caret"},ngContentSelectors:Bi,decls:6,vars:10,consts:[[1,"Card"],[1,"Card-body"],[1,"Position-absolute","Top-0","End-0","M-1"]],template:function(s,m){s&1&&(ne(Ri),e(0,"div",0),X(1),e(2,"div",1),X(3,1),t(),e(4,"div",2),X(5,2),t()()),s&2&&S("Caret-top",m.Caret==="top")("Caret-end",m.Caret==="right")("Caret-bottom",m.Caret==="bottom")("Caret-start",m.Caret==="left")("Card-horizontal",m.Orientation==="Horizontal")},encapsulation:2})}return r})(),Rn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function Fi(r,d){if(r&1){let l=N();e(0,"button",7),u("click",function(){let o=b(l).index,c=f(2);return y(c.currentIndex=o)}),t()}if(r&2){let l=d.index,s=f(2);S("Active",l===s.currentIndex),$("aria-current",l===s.currentIndex)("aria-label","Slide "+(l+1))("data-ls-target","#"+s.Id)("data-ls-slide-to",l)}}function Vi(r,d){if(r&1&&(e(0,"div",5),v(1,Fi,1,6,"button",6),t()),r&2){let l=f();i(),a("ngForOf",l.Images)}}function Oi(r,d){if(r&1&&(e(0,"div",11)(1,"h5"),n(2),t(),e(3,"p"),n(4),t()()),r&2){let l=f().$implicit;i(2),P(l.Caption),i(2),P(l.Description)}}function Hi(r,d){if(r&1&&(e(0,"div",8),p(1,"img",9),v(2,Oi,5,2,"div",10),t()),r&2){let l=d.$implicit,s=d.index,m=f();S("Active",s===m.currentIndex),i(),a("src",l.Src,C)("alt",l.Alt),i(),a("ngIf",m.Captions)}}function Wi(r,d){if(r&1){let l=N();H(0),e(1,"button",12),u("click",function(){b(l);let m=f();return y(m.Prev())}),p(2,"span",13),e(3,"span",14),n(4,"Previous"),t()(),e(5,"button",15),u("click",function(){b(l);let m=f();return y(m.Next())}),p(6,"span",16),e(7,"span",14),n(8,"Next"),t()(),W()}if(r&2){let l=f();i(),$("data-ls-target","#"+l.Id)("data-ls-slide","prev"),i(4),$("data-ls-target","#"+l.Id)("data-ls-slide","next")}}var ke=(()=>{class r{Id="Carousel".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Images=[];Interval=6e3;AutoPlay=!0;Dark=!1;Rounded=!1;Shadow=!1;Captions=!0;NavigationArrows=!0;NavigationIndicators=!0;Dummy=!1;PauseOnHover=!1;Stats=!1;currentIndex=0;intervalSubscription;isBrowser=be(!1);constructor(l){this.isBrowser.set(Te(l))}ngOnInit(){this.Dummy&&[0,1,2].forEach((l,s)=>this.Images.push({Caption:"Caption "+l.toString(),Description:"Description Description "+l.toString(),Src:`https://source.unsplash.com/random/${960+l}x${400+l/2}?sig=${s}`}))}ngOnChanges(l){(l.Interval||l.Captions||l.NavigationArrows||l.NavigationIndicators)&&(this.Clear(),this.Images&&this.Images.length>0&&this.Play(),this.Stats&&console.log(`Interval: ${this.Interval}`,`Captions: ${this.Captions}`,`Arrows: ${this.NavigationArrows}`,`Indicators: ${this.NavigationIndicators}`,`PauseOnHover: ${this.PauseOnHover}`))}Clear(){this.intervalSubscription&&(this.intervalSubscription.remove(this.intervalSubscription),this.intervalSubscription.unsubscribe(),this.intervalSubscription=void 0)}Prev(){this.currentIndex===0?this.currentIndex=this.Images.length-1:this.currentIndex--}Next(){this.currentIndex===this.Images.length-1?this.currentIndex=0:this.currentIndex++}Play(){this.isBrowser()&&this.AutoPlay&&(this.PauseOnHover||!this.intervalSubscription)&&(this.intervalSubscription=Wt(this.Interval).subscribe(()=>this.Next()))}Pause(){this.PauseOnHover&&this.Clear()}ngOnDestroy(){this.Clear()}static \u0275fac=function(s){return new(s||r)(T(Ce))};static \u0275cmp=h({type:r,selectors:[["ql-carousel"],["NgCarousel"],["Carousel"]],inputs:{Images:"Images",Interval:"Interval",AutoPlay:"AutoPlay",Dark:"Dark",Rounded:"Rounded",Shadow:"Shadow",Captions:"Captions",NavigationArrows:"NavigationArrows",NavigationIndicators:"NavigationIndicators",Dummy:"Dummy",PauseOnHover:"PauseOnHover",Stats:"Stats"},features:[qe],decls:5,vars:12,consts:[["data-ls-ride","Carousel",1,"Carousel","Slide","Carousel-fade",3,"id","mouseenter","mouseleave"],["class","Carousel-indicators",4,"ngIf"],[1,"Carousel-inner"],["class","Carousel-item",3,"Active",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"Carousel-indicators"],["type","button",3,"Active","click",4,"ngFor","ngForOf"],["type","button",3,"click"],[1,"Carousel-item"],[1,"D-block","W-100",3,"src","alt"],["class","Carousel-caption D-none D-md-block",4,"ngIf"],[1,"Carousel-caption","D-none","D-md-block"],["type","button",1,"Carousel-control-prev",3,"click"],["aria-hidden","true",1,"Carousel-control-prev-icon"],[1,"Visually-hidden"],["type","button",1,"Carousel-control-next",3,"click"],["aria-hidden","true",1,"Carousel-control-next-icon"]],template:function(s,m){s&1&&(e(0,"div",0),u("mouseenter",function(){return m.Pause()})("mouseleave",function(){return m.Play()}),v(1,Vi,2,1,"div",1),e(2,"div",2),v(3,Hi,3,5,"div",3),t(),v(4,Wi,9,4,"ng-container",4),t()),s&2&&(S("Carousel-dark",m.Dark),a("id",m.Id),i(),a("ngIf",m.NavigationIndicators),i(),S("Shadow-3",m.Shadow)("Rounded",m.Rounded)("Rounded-2",m.Rounded),i(),a("ngForOf",m.Images),i(),a("ngIf",m.NavigationArrows))},dependencies:[z,G],encapsulation:2})}return r})(),Fn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function zi(r,d){if(r&1&&(e(0,"h5",10),n(1),t()),r&2){let l=f(2);i(),P(l.Content.Title)}}function qi(r,d){if(r&1&&p(0,"p",11),r&2){let l=f(2);a("innerHtml",l.Content.InnerHtml,U)}}function Gi(r,d){if(r&1){let l=N();H(0),e(1,"div",5),v(2,zi,2,1,"h5",6),e(3,"button",7),u("click",function(){b(l);let m=f();return y(m.Close())}),t()(),e(4,"div",8),v(5,qi,1,1,"p",9),t(),W()}if(r&2){let l=f();i(2),a("ngIf",l.Content.Title),i(3),a("ngIf",l.Content.InnerHtml)}}function ji(r,d){if(r&1){let l=N();e(0,"button",16),u("click",function(){b(l);let m=f(3);return y(m.Redirect())}),n(1),t()}if(r&2){let l=f(3);a("routerLink",l.Footer.Redirect.Href),i(),A("",l.Footer.Redirect.Label," ")}}function Ui(r,d){if(r&1){let l=N();e(0,"button",17),u("click",function(){b(l);let m=f(3);return y(m.Redirect())}),n(1),t()}if(r&2){let l=f(3);i(),A("",l.Footer.Redirect.Label," ")}}function $i(r,d){if(r&1){let l=N();H(0),e(1,"button",13),u("click",function(){b(l);let m=f(2);return y(m.Close())}),n(2,"Close"),t(),v(3,ji,2,2,"button",14)(4,Ui,2,1,"button",15),W()}if(r&2){let l=f(2);i(3),a("ngIf",l.Footer.Redirect.Href),i(),a("ngIf",!l.Footer.Redirect.Href)}}function Yi(r,d){if(r&1){let l=N();H(0),e(1,"button",13),u("click",function(){b(l);let m=f(2);return y(m.Cancel())}),n(2,"Cancel"),t(),e(3,"button",17),u("click",function(){b(l);let m=f(2);return y(m.Confirm())}),n(4,"Yes"),t(),W()}}function Ji(r,d){if(r&1&&(e(0,"div",12),v(1,$i,5,2,"ng-container",3)(2,Yi,5,0,"ng-container",3),t()),r&2){let l=f();i(),a("ngIf",l.Footer.Redirect),i(),a("ngIf",l.Footer.Prompt)}}var Qi=r=>({display:r}),Xi=Le("Overlay",[Ee("void",Y({transform:"scale(0)",opacity:0})),Ne("void <=> *",[Y({opacity:1}),Ae("150ms cubic-bezier(0.25, 0.8, 0.25, 1)")])]),Vn=In([Y({transform:"translate3d(-1px, 0, 0)",offset:.1}),Y({transform:"translate3d(2px, 0, 0)",offset:.2}),Y({transform:"translate3d(-4px, 0, 0)",offset:.3}),Y({transform:"translate3d(4px, 0, 0)",offset:.4}),Y({transform:"translate3d(-4px, 0, 0)",offset:.5}),Y({transform:"translate3d(4px, 0, 0)",offset:.6}),Y({transform:"translate3d(-4px, 0, 0)",offset:.7}),Y({transform:"translate3d(2px, 0, 0)",offset:.8}),Y({transform:"translate3d(-1px, 0, 0)",offset:.9})]),Zi=Le("Shake",[Ee("start",Y({transform:"scale(1)"})),Ee("end",Y({transform:"scale(1)"})),Ne("start <=> end",Ae("1000ms ease-in",Vn))]),lo=Le("ShakeAuto",[Ne("void => *",Ae("1000ms ease-in",Vn))]),Ki=(()=>{class r{Id="Dialog".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Forced=!1;Content;Footer;OnClosed=new K;OnResponse=new K;Modal=!1;Visible=!0;clickedInside=!0;ShakeIt="start";constructor(){}ngOnInit(){}ClickedInside(){this.clickedInside=!0}ClickedOutside(){if(!this.clickedInside&&this.Modal){this.Forced?this.ShakeIt=this.ShakeIt==="start"?"end":"start":this.Cancel();return}this.clickedInside=!1}Redirect(){this.OnResponse.next({State:"Redirect",Data:!0}),this.Close()}Confirm(){this.OnResponse.next({State:"Confirmed",Data:!0}),this.Close()}Cancel(){this.OnResponse.next({State:"Canceled",Data:!1}),this.Close()}Show(){this.Visible=!0}Close(){this.Visible&&(this.Visible=!1,this.OnClosed.emit(this.Id))}ngOnDestroy(){this.Close(),this.OnResponse.complete(),this.OnClosed.complete()}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-dialog"],["NgDialog"],["Dialog"]],hostBindings:function(s,m){s&1&&u("click",function(){return m.ClickedOutside()},!1,Qt)},inputs:{Forced:"Forced",Content:"Content",Footer:"Footer"},outputs:{OnClosed:"OnClosed",OnResponse:"OnResponse"},decls:5,vars:8,consts:[["tabindex","-1",1,"Modal",3,"id","ngStyle"],[1,"Modal-dialog"],[1,"Modal-content",3,"click"],[4,"ngIf"],["class","Modal-footer",4,"ngIf"],[1,"Modal-header"],["class","Modal-title",4,"ngIf"],["type","button","aria-label","Close",1,"Btn-close",3,"click"],[1,"Modal-body"],[3,"innerHtml",4,"ngIf"],[1,"Modal-title"],[3,"innerHtml"],[1,"Modal-footer"],["type","button",1,"Btn","Btn-sm","Btn-secondary",3,"click"],["type","button","class","Btn Btn-sm Btn-primary",3,"routerLink","click",4,"ngIf"],["type","button","class","Btn Btn-sm Btn-primary",3,"click",4,"ngIf"],["type","button",1,"Btn","Btn-sm","Btn-primary",3,"routerLink","click"],["type","button",1,"Btn","Btn-sm","Btn-primary",3,"click"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),u("click",function(){return m.ClickedInside()}),v(3,Gi,6,2,"ng-container",3)(4,Ji,3,2,"div",4),t()()()),s&2&&(a("id",m.Id)("ngStyle",xe(6,Qi,m.Visible?"block":"none")),i(2),a("@Overlay","enter")("@Shake",m.ShakeIt),i(),a("ngIf",m.Content),i(),a("ngIf",m.Footer))},dependencies:[G,an,fe],encapsulation:2,data:{animation:[Xi,Zi]}})}return r})(),On=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O,Ve]})}return r})(),Hn=(()=>{class r{ViewContainerRef;componentRef;constructor(){}Prompt(l,s=!1){return this.Show(l,{Prompt:!0},s)}Redirect(l,s,m,o=!1){return this.Show(l,{Prompt:!1,Redirect:{Href:s,Label:m}},o)}Show(l,s,m=!1){this.componentRef=this.ViewContainerRef.createComponent(Ki);let o=this.componentRef.hostView.rootNodes[0];return document.body.appendChild(o),this.componentRef.instance.OnClosed.subscribe(c=>this.componentRef.destroy()),this.componentRef.instance.Modal=!0,this.componentRef.instance.Forced=m,this.componentRef.instance.Content=l,this.componentRef.instance.Footer=s,this.componentRef.instance.Show(),this.componentRef.instance.OnResponse.pipe()}static \u0275fac=function(s){return new(s||r)};static \u0275prov=ue({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function ta(r,d){if(r&1){let l=N();e(0,"li",10),u("click",function(){let o=b(l).$implicit;f(2);let c=x(1);return y(c.SetPage(o.Value))}),p(1,"a",11),t()}if(r&2){let l=d.$implicit;f(2);let s=x(1);S("Active",s.Response.Req.CurrentPage===l.Value),i(),a("innerHtml",l.Label,U)}}function na(r,d){if(r&1){let l=N();e(0,"nav",3)(1,"ul",4)(2,"li",5),u("click",function(){b(l),f();let m=x(1);return y(m.SetPage(m.Response.Req.CurrentPage-1))}),e(3,"a",6),p(4,"span",7),t()(),v(5,ta,2,3,"li",8),e(6,"li",5),u("click",function(){b(l),f();let m=x(1);return y(m.SetPage(m.Response.Req.CurrentPage+1))}),e(7,"a",9),p(8,"span",7),t()()()()}if(r&2){let l=f(),s=x(1);i(),S("Justify-content-start",l.Alignment==="Start")("Justify-content-center",l.Alignment==="Center")("Justify-content-end",l.Alignment==="End")("Pagination-lg",l.Sizing==="Large")("Pagination-sm",l.Sizing==="Small")("Pagination-circle",l.Shape==="Circle"),i(),S("Disabled",s.Response.Req.CurrentPage===1),i(2),a("innerHTML",l.Icons.Prev,U),i(),a("ngForOf",s.Response.Pages),i(),S("Disabled",s.Response.Req.CurrentPage===s.Response.TotalPages),i(2),a("innerHTML",l.Icons.Next,U)}}var ia=(()=>{class r{Changed=new K;constructor(){}Paginate(l,s=1,m=10,o=7){let c=Math.ceil(l/m);s<1?s=1:s>c&&(s=c);let g,L;c<=o?(g=1,L=c):s<=+(o/2).toFixed(0)+1?(g=1,L=o):s+4>=c?(g=c-(o-1),L=c):(g=s-+(o/2).toFixed(0)+1,L=s+ +(o/2).toFixed(0)-1);let k=(s-1)*m,de=Math.min(k+m-1,l-1),q=Array.from(Array(L+1-g).keys()).map(ee=>{let He=g+ee;return{Value:He,Label:He.toString()}});return this.Changed.emit(s.toString()),{Req:{TotalItems:l,CurrentPage:s,ItemsPerPage:m,Size:o},Pages:q,TotalPages:c,StartPage:g,StartIndex:k,EndPage:L,EndIndex:de}}static \u0275fac=function(s){return new(s||r)};static \u0275prov=ue({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),ut=(()=>{class r{service;changeDetectorRef;Items=[];CurrentPage=0;ItemPerPage=10;Size=7;PageChanged=new K;PagedItems=new K;Response;changeSub;constructor(l,s){this.service=l,this.changeDetectorRef=s,this.changeSub=this.service.Changed.subscribe(m=>{this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges()})}ngOnChanges(l){this.CurrentPage>=1?this.SetPage(this.CurrentPage):this.SetPage(1)}GetPage=()=>this.CurrentPage;SetPage(l){if(!(l<=0||l>Math.ceil(this.Items.length/this.ItemPerPage))&&this.Items){this.Response=this.service.Paginate(this.Items.length,l,this.ItemPerPage,this.Size);let s=this.Items.slice(this.Response.StartIndex,this.Response.EndIndex+1);this.PagedItems.emit(s),this.PageChanged.emit(l)}}ngOnDestroy(){this.changeSub.unsubscribe()}static \u0275fac=function(s){return new(s||r)(T(ia),T(oe))};static \u0275dir=ae({type:r,selectors:[["","qlPaginate",""],["","Paginate",""]],inputs:{Items:"Items",CurrentPage:"CurrentPage",ItemPerPage:"ItemPerPage",Size:"Size"},outputs:{PageChanged:"PageChanged",PagedItems:"PagedItems"},exportAs:["PaginateApi"],features:[qe]})}return r})(),Wn=(()=>{class r{Shape="Regular";Alignment="Center";Sizing="Regular";Icons={First:"First",Prev:"Prev",Next:"Next",Last:"Last"};Items=[];CurrentPage=0;ItemPerPage=10;Size=7;PageChanged=new K;PagedItems=new K;constructor(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-pagination"],["NgPagination"],["Pagination"]],inputs:{Shape:"Shape",Alignment:"Alignment",Sizing:"Sizing",Items:"Items",CurrentPage:"CurrentPage",ItemPerPage:"ItemPerPage",Size:"Size"},outputs:{PageChanged:"PageChanged",PagedItems:"PagedItems"},decls:3,vars:5,consts:[["Paginate","",3,"Items","CurrentPage","Size","ItemPerPage","PageChanged","PagedItems"],["p","PaginateApi"],["aria-label","Lootstrap Page Navigation",4,"ngIf"],["aria-label","Lootstrap Page Navigation"],[1,"Pagination","MY-2"],[1,"Page-arrow",3,"click"],["aria-label","Previous",1,"Page-link"],["aria-hidden","true",3,"innerHTML"],["class","Page-item",3,"Active","click",4,"ngFor","ngForOf"],["aria-label","Next",1,"Page-link"],[1,"Page-item",3,"click"],[1,"Page-link",3,"innerHtml"]],template:function(s,m){if(s&1&&(H(0,0,1),u("PageChanged",function(c){return m.PageChanged.emit(c)})("PagedItems",function(c){return m.PagedItems.emit(c)}),v(2,na,9,19,"nav",2),W()),s&2){let o=x(1);a("Items",m.Items)("CurrentPage",m.CurrentPage)("Size",m.Size)("ItemPerPage",m.ItemPerPage),i(2),a("ngIf",o.Response&&o.Response.Pages&&o.Response.Pages.length>0)}},dependencies:[z,G,ut],styles:[`.P-symbol{height:100%;font-size:xxx-large;vertical-align:middle;top:-.1em!important}@media (max-width: 767px){.P-symbol{font-size:xx-large}}
`],encapsulation:2})}return r})(),zn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();var qn=["*"];function ra(r,d){if(r&1&&(H(0),j(),e(1,"svg",3)(2,"linearGradient",4),p(3,"stop",5)(4,"stop",6),t()(),W()),r&2){let l=f();i(2),a("id",l.FaGradientId)}}function oa(r,d){if(r&1){let l=N();e(0,"div",8,9),u("click",function(m){let c=b(l).$implicit,g=x(1),L=f(2);return y(L.OnClicked(g.offsetWidth,m,c.Value))})("mousemove",function(m){let c=b(l).$implicit,g=x(1),L=f(2);return y(L.OnHovered(g.offsetWidth,m,c.Value))}),p(2,"div",10),t()}if(r&2){let l=d.$implicit,s=f(2);i(2),S("Fraction",l.Fraction)("Selected",l.Selected)("Hovered",l.Hovered),a("innerHTML",s.GetIcon(s.Value),U)}}function la(r,d){if(r&1&&(H(0),v(1,oa,3,7,"div",7),W()),r&2){let l=f();i(),a("ngForOf",l.ItemList)}}function sa(r,d){if(r&1&&(e(0,"div",11)(1,"span",12),n(2),t()()),r&2){let l=f();i(2),P(l.Rate)}}var ma=r=>({"--ls-rating-active-bg":r}),ft=(()=>{class r{Fraction=!1;ReadOnly=!1;OnClicked=new K;OnHover=new K;Selected=!1;Hovered=!1;Index=0;constructor(){}ngOnInit(){}onClick(l,s){s.offsetX<l/2?this.OnClicked.emit(.5):this.OnClicked.emit(1)}onMouseMove(l,s){s.offsetX<l/2?this.OnHover.emit(.5):this.OnHover.emit(1)}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-rating-item"],["NgRatingItem"],["RatingItem"]],outputs:{OnClicked:"OnClicked",OnHover:"OnHover"},ngContentSelectors:qn,decls:4,vars:6,consts:[[1,"Square"],[1,"Centered",3,"click","mousemove"],["divSquare",""]],template:function(s,m){if(s&1){let o=N();ne(),e(0,"div",0)(1,"div",1,2),u("click",function(g){b(o);let L=x(2);return y(m.onClick(L.offsetWidth,g))})("mousemove",function(g){b(o);let L=x(2);return y(m.onMouseMove(L.offsetWidth,g))}),X(3),t()()}s&2&&(i(),S("Fraction",m.Fraction)("Selected",m.Selected)("Hovered",m.Hovered))},styles:[`RatingItem{position:relative;display:contents}
`],encapsulation:2})}return r})(),Gn=(()=>{class r{Id="Rating".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));FaGradientId="Gradient".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Fraction=!1;ReadOnly=!1;Shadow=!1;BgColor;Pattern="Customized";Icons=[];ShowValue=!1;Rate=0;RateChanged=new K(!0);Value=0;Items;ItemList=[];constructor(){}ngOnInit(){setTimeout(()=>this.Update(this.Rate),1e3),this.Icons.length>0&&(this.ItemList=Array.from({length:this.Icons.length},(l,s)=>({Value:s+1,Selected:!1,Hovered:!1,Fraction:!1})))}ngAfterContentInit(){this.Items.length>0&&(this.Items.map((l,s)=>l.Index=s+1),this.Items.forEach(l=>{l.OnClicked.subscribe(s=>{this.Reset(),this.Fraction?this.SetValue(l.Index-1+s):this.SetValue(l.Index)}),l.OnHover.subscribe(s=>{this.ReadOnly||(this.Reset(),this.Fraction?this.Value=l.Index-1+s:this.Value=l.Index,this.Items.map((m,o)=>{m.Hovered=o<this.Value,m.Fraction=o===this.Value-.5,m.Selected=!1}))})}))}OnClicked(l,s,m){this.Fraction&&(m=s.offsetX<l/2?m-.5:m),this.SetValue(m)}OnHovered(l,s,m){this.Fraction&&(m=s.offsetX<l/2?m-.5:m),this.ReadOnly||(this.Value=m,this.ItemList.map((o,c)=>{o.Hovered=c<m,o.Fraction=c===m-.5,o.Selected=!1}))}GetIcon(l){if(this.Icons.length>0){let s=+l.toFixed(0)-1;return s=s==-1?0:s,`<i class="${this.Icons[s]!==void 0?this.Icons[s]:l.toString()}"></i>`}}Reset(){this.Items?.forEach(l=>{l.Selected=!1,l.Hovered=!1,l.Fraction=!1})}SetValue(l){!this.ReadOnly&&this.Rate!==l&&(this.Rate=l,this.RateChanged.emit(this.Rate)),this.Update(this.Rate)}Update(l){this.Value=l,this.Items?.forEach((s,m)=>{s.Hovered=!1,s.Fraction=(m+1===Math.round(l)&&l%1)>=.5,s.Selected=m+1<=l}),this.ItemList?.forEach((s,m)=>{s.Hovered=!1,s.Fraction=(m+1===Math.round(l)&&l%1)>=.5,s.Selected=m+1<=l})}onMouseLeave(){this.Update(this.Rate)}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-rating"],["NgRating"],["Rating"]],contentQueries:function(s,m,o){if(s&1&&ce(o,ft,4),s&2){let c;pe(c=ge())&&(m.Items=c)}},inputs:{Fraction:"Fraction",ReadOnly:"ReadOnly",Shadow:"Shadow",BgColor:"BgColor",Pattern:"Pattern",Icons:"Icons",ShowValue:"ShowValue",Rate:"Rate"},outputs:{RateChanged:"RateChanged"},ngContentSelectors:qn,decls:5,vars:16,consts:[[3,"id","mouseleave"],[4,"ngIf"],["class","Square FS-5 FW-bolder",4,"ngIf"],["aria-hidden","true","focusable","false",2,"width","0","height","0","position","absolute"],["x2","1","y2","1",3,"id"],["offset","0%"],["offset","100%"],["class","Square",3,"click","mousemove",4,"ngFor","ngForOf"],[1,"Square",3,"click","mousemove"],["divSqr",""],[1,"Centered",3,"innerHTML"],[1,"Square","FS-5","FW-bolder"],[1,"Centered","Rating-value"]],template:function(s,m){s&1&&(ne(),e(0,"div",0),u("mouseleave",function(){return m.onMouseLeave()}),v(1,ra,5,1,"ng-container",1),X(2),v(3,la,2,1,"ng-container",1)(4,sa,3,1,"div",2),t()),s&2&&(Be(m.BgColor?xe(14,ma,m.BgColor):null),re("--ls-rating-gradient-id","url(#"+m.FaGradientId+")"),S("F-shadow",m.Shadow)("Rating",m.Pattern==="Customized")("Rating-base",m.Pattern==="Base"),a("id",m.Id),i(),a("ngIf",m.Pattern==="Customized"),i(2),a("ngIf",m.Icons.length>0),i(),a("ngIf",m.ShowValue))},dependencies:[z,G],encapsulation:2})}return r})(),jn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function ca(r,d){r&1&&p(0,"span")}var pa=()=>[1,2,3,4,5,6,7,8],Un=r=>({color:r});function ga(r,d){if(r&1&&p(0,"SpinnerVortex",4),r&2){let l=f();a("Id",l.Id)("Small",l.Small)("Adaptive",l.Adaptive)("Color",l.Color)}}function ua(r,d){if(r&1&&p(0,"SpinnerVortex",5),r&2){let l=f();a("Square",!0)("Id",l.Id)("Small",l.Small)("Color",l.Color)}}function fa(r,d){if(r&1&&p(0,"SpinnerGrow",4),r&2){let l=f();a("Id",l.Id)("Small",l.Small)("Adaptive",l.Adaptive)("Color",l.Color)}}function va(r,d){if(r&1&&p(0,"SpinnerBorder",4),r&2){let l=f();a("Id",l.Id)("Small",l.Small)("Adaptive",l.Adaptive)("Color",l.Color)}}var _e=function(r){return r[r.Vortex=0]="Vortex",r[r.VortexSqr=1]="VortexSqr",r[r.Grow=2]="Grow",r[r.Border=3]="Border",r}(_e||{}),vt=(()=>{class r{Id;Color;Adaptive=!1;Square;Small=!1;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-spinner-vortex"],["NgSpinnerVortex"],["SpinnerVortex"]],inputs:{Id:"Id",Color:"Color",Adaptive:"Adaptive",Square:"Square",Small:"Small"},decls:6,vars:9,consts:[[1,"Square",3,"id"],[1,"Centered"],["role","status",1,"Spinner-vortex"],[1,"Visually-hidden"],[4,"ngFor","ngForOf"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),n(4,"Loading..."),t(),v(5,ca,1,0,"span",4),t()()()),s&2&&(a("id",m.Id),i(2),S("Spinner-sm",m.Small)("Quadratic",m.Square)("Adaptive",m.Adaptive),i(3),a("ngForOf",ie(8,pa)))},dependencies:[z],encapsulation:2})}return r})(),ht=(()=>{class r{Id;Color;Adaptive=!1;Small=!1;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-spinner-grow"],["NgSpinnerGrow"],["SpinnerGrow"]],inputs:{Id:"Id",Color:"Color",Adaptive:"Adaptive",Small:"Small"},decls:3,vars:9,consts:[["role","status",1,"Spinner-grow",3,"id"],[1,"Visually-hidden"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"span",1),n(2,"Loading..."),t()()),s&2&&(Be(m.Color?xe(7,Un,m.Color):null),S("Spinner-sm",m.Small)("Fg-accent",m.Adaptive),a("id",m.Id))},encapsulation:2})}return r})(),St=(()=>{class r{Id;Color;Adaptive=!1;Small=!1;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-spinner-border"],["NgSpinnerBorder"],["SpinnerBorder"]],inputs:{Id:"Id",Color:"Color",Adaptive:"Adaptive",Small:"Small"},decls:3,vars:9,consts:[["role","status",1,"Spinner-border",3,"id"],[1,"Visually-hidden"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"span",1),n(2,"Loading..."),t()()),s&2&&(Be(m.Color?xe(7,Un,m.Color):null),S("Spinner-sm",m.Small)("Fg-accent",m.Adaptive),a("id",m.Id))},encapsulation:2})}return r})(),ha=(()=>{class r{Patterns=_e;Id="Spinner".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Pattern=_e.Vortex;Color;Adaptive=!1;Overlay=!1;Small=!1;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-spinner"],["NgSpinner"],["Spinner"]],inputs:{Pattern:"Pattern",Color:"Color",Adaptive:"Adaptive",Overlay:"Overlay",Small:"Small"},decls:6,vars:6,consts:[[1,"Spinner-container"],[1,"Spinner-content","Position-absolute","Top-50","Start-50","Translate-middle"],[3,"Id","Small","Adaptive","Color",4,"ngIf"],[3,"Square","Id","Small","Color",4,"ngIf"],[3,"Id","Small","Adaptive","Color"],[3,"Square","Id","Small","Color"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1),v(2,ga,1,4,"SpinnerVortex",2)(3,ua,1,4,"SpinnerVortex",3)(4,fa,1,4,"SpinnerGrow",2)(5,va,1,4,"SpinnerBorder",2),t()()),s&2&&(S("Spinner-overlay",m.Overlay),i(2),a("ngIf",m.Pattern===m.Patterns.Vortex),i(),a("ngIf",m.Pattern===m.Patterns.VortexSqr),i(),a("ngIf",m.Pattern===m.Patterns.Grow),i(),a("ngIf",m.Pattern===m.Patterns.Border))},dependencies:[G,vt,ht,St],styles:[`.Spinner-container{position:fixed;display:flex;width:100vw;height:100vh;top:0;left:0;z-index:100000!important}.Spinner-container.Spinner-overlay{background-color:#fff6}.Spinner-container .Spinner-content{min-width:150px;min-height:150px;text-align:center}.Spinner-container .Spinner-message{text-align:center}
`],encapsulation:2})}return r})(),$n=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})(),Yn=(()=>{class r{ViewContainerRef;componentRef;constructor(){}Show(l,s,m,o,c=void 0,g=!1){if(!this.ViewContainerRef)return console.log("ViewContainerRef not defined!"),"ViewContainerRef not defined!";this.componentRef=this.ViewContainerRef.createComponent(ha);let L=this.componentRef.hostView.rootNodes[0];if(document.body.appendChild(L),this.componentRef.instance.Pattern=l,this.componentRef.instance.Color=c,this.componentRef.instance.Overlay=s,this.componentRef.instance.Adaptive=m,this.componentRef.instance.Small=g,o){let de=new Ht(!0).pipe(jt(q=>q?we(0,1e3):qt),We(q=>(+((o/1e3-q)*1e3/1e3).toFixed(0)<=0&&(this.componentRef.destroy(),de.unsubscribe()),o/1e3-q)),Re(q=>q>=0)).subscribe()}return this.componentRef.instance.Id}Hide(l){console.log(l,this.componentRef),this.componentRef&&this.componentRef.destroy()}static \u0275fac=function(s){return new(s||r)};static \u0275prov=ue({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Jn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function Qn(r){let d=new Date(r);if(!Number.isNaN(d.valueOf()))return d;let l=String(r).match(/\d+/g);if(l===null||l.length<=2)return d;{let[s,m,...o]=l.map(c=>parseInt(c,10));return new Date(Date.UTC(s,m-1,...o))}}var Ca={Separator:" ",PrefixAgo:null,PrefixFromNow:null,SuffixAgo:"ago",SuffixFromNow:"from now",Time:{Seconds:"less than a minute",Minute:"about a minute",Minutes:"%d minutes",Hour:"about an hour",Hours:"about %d hours",Day:"a day",Days:"%d days",Month:"about a month",Months:"%d months",Year:"about a year",Years:"%d years"}};var ba={Separator:" ",PrefixAgo:"hace",PrefixFromNow:"dentro de",SuffixAgo:"",SuffixFromNow:"",Time:{Seconds:"menos de un minuto",Minute:"un minuto",Minutes:"unos %d minutos",Hour:"una hora",Hours:"%d horas",Day:"un d\xEDa",Days:"%d d\xEDas",Month:"un mes",Months:"%d meses",Year:"un a\xF1o",Years:"%d a\xF1os"}};var ya={Separator:" ",PrefixAgo:"vor",PrefixFromNow:"in",SuffixAgo:"",SuffixFromNow:"",Time:{Seconds:"wenigen Sekunden",Minute:"etwa einer Minute",Minutes:"%d Minuten",Hour:"etwa einer Stunde",Hours:"%d Stunden",Day:"etwa einem Tag",Days:"%d Tagen",Month:"etwa einem Monat",Months:"%d Monaten",Year:"etwa einem Jahr",Years:"%d Jahren"}};function Oe(r,d,l,s){let m=r%10;return m===1&&(r===1||r>20)?d:m>1&&m<5&&(r>20||r<10)?l:s}var xa={Separator:" ",PrefixAgo:null,PrefixFromNow:"\u0447\u0435\u0440\u0435\u0437",SuffixAgo:"\u043D\u0430\u0437\u0430\u0434",SuffixFromNow:null,Time:{Seconds:"\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B",Minute:"\u043C\u0438\u043D\u0443\u0442\u0443",Minutes:r=>Oe(r,"%d \u043C\u0438\u043D\u0443\u0442\u0430","%d \u043C\u0438\u043D\u0443\u0442\u044B","%d \u043C\u0438\u043D\u0443\u0442"),Hour:"\u0447\u0430\u0441",Hours:r=>Oe(r,"%d \u0447\u0430\u0441","%d \u0447\u0430\u0441\u0430","%d \u0447\u0430\u0441\u043E\u0432"),Day:"\u0434\u0435\u043D\u044C",Days:r=>Oe(r,"%d \u0434\u0435\u043D\u044C","%d \u0434\u043D\u044F","%d \u0434\u043D\u0435\u0439"),Month:"\u043C\u0435\u0441\u044F\u0446",Months:r=>Oe(r,"%d \u043C\u0435\u0441\u044F\u0446","%d \u043C\u0435\u0441\u044F\u0446\u0430","%d \u043C\u0435\u0441\u044F\u0446\u0435\u0432"),Year:"\u0433\u043E\u0434",Years:r=>Oe(r,"%d \u0433\u043E\u0434","%d \u0433\u043E\u0434\u0430","%d \u043B\u0435\u0442")}};var Ta={Separator:" ",PrefixAgo:null,PrefixFromNow:null,SuffixAgo:"\xF6nce",SuffixFromNow:"sonra",Time:{Seconds:"%d saniye",Minute:"1 dakika",Minutes:"%d dakika",Hour:"1 saat",Hours:"%d saat",Day:"1 g\xFCn",Days:"%d g\xFCn",Week:"hafta",Weeks:"%d hafta",Month:"1 ay",Months:"%d ay",Year:"1 y\u0131l",Years:"%d y\u0131l"}},Ct=class{LocaleStrings=[];constructor(){this.LocaleStrings=[{lang:"en",locale:Ca},{lang:"es",locale:ba},{lang:"de",locale:ya},{lang:"ru",locale:xa},{lang:"tr",locale:Ta}]}Specify(d){let l="";switch(d){case"en":case"en-US":case"en-GB":l="en";break;case"es":case"es-ES":l="es";break;case"de":case"de-DE":l="de";break;case"ru":case"ru-RU":l="ru";break;case"tr":case"tr-TR":l="tr";break;default:l="";break}return l}Locale(d){let l=this.Specify(d);return this.LocaleStrings.find(m=>m.lang===l)?.locale||{}}};var bt=(()=>{class r{MINUTE=60;HOUR=this.MINUTE*60;DAY=this.HOUR*24;WEEK=this.DAY*7;MONTH=this.DAY*30;YEAR=this.DAY*365;Tick(l){let s=Qn(l).valueOf();return s?Se(0).pipe(ze(()=>{let m=Date.now(),o=Math.round(Math.abs(m-s)/1e3),c=o<this.MINUTE?1e3:o<this.HOUR?1e3*this.MINUTE:o<this.DAY?1e3*this.HOUR:0;return c?we(c):Se({})}),Gt(1)):(console.warn("Invalid Date provided"),new Ot)}DefaultFormatter(l){let s=Date.now(),m=Math.round(Math.abs(s-l)/1e3),o=l<s?"ago":"from now",[c,g]=m<this.MINUTE?[Math.round(m),"Second"]:m<this.HOUR?[Math.round(m/this.MINUTE),"Minute"]:m<this.DAY?[Math.round(m/this.HOUR),"Hour"]:m<this.WEEK?[Math.round(m/this.DAY),"Day"]:m<this.MONTH?[Math.round(m/this.WEEK),"Week"]:m<this.YEAR?[Math.round(m/this.MONTH),"Month"]:[Math.round(m/this.YEAR),"Year"];return{value:c,unit:g,suffix:o}}DefaultParser(l,s,m){return l!==1&&(s+="s"),l+" "+s+" "+m}IntlFormatter(l,s,m,o,c,g){let k=new Ct().Locale(l);m==="Week"&&!k.Time.Week&&!k.Time.Weeks&&(s=Math.round(Math.abs(c-g)/(1e3*60*60*24)),m="Day");let q=(he=>rt=>typeof rt=="function"?rt(he).replace(/%d/g,he.toString()):rt?.replace(/%d/g,he.toString()))(s),ee=[];if(o==="ago"&&k.PrefixAgo&&ee.push(q(k.PrefixAgo)),o==="from now"&&k.PrefixFromNow&&ee.push(q(k.PrefixFromNow)),s>1){let he=k.Time[m+"s"]||k.Time[m]||"%d "+m;ee.push(q(he))}else{let he=k.Time[m]||k.Time[m+"s"]||"%d "+m;ee.push(q(he))}o==="ago"&&k.SuffixAgo&&ee.push(q(k.SuffixAgo)),o==="from now"&&k.SuffixFromNow&&ee.push(q(k.SuffixFromNow));let ui=typeof k.Separator=="string"?k.Separator:" ";return ee.join(ui)}Format(l,s=""){let{suffix:m,value:o,unit:c}=this.DefaultFormatter(l);return s?this.IntlFormatter(s,o,c,m,Date.now(),l):this.DefaultParser(o,c,m)}static \u0275fac=function(s){return new(s||r)};static \u0275prov=ue({token:r,factory:r.\u0275fac})}return r})(),Xn=(()=>{class r{cd;elementRef;timeAgoCore;LiveSubscription;Date;Locale;Live=!1;el;stateChanges=new De;isBrowser=be(!1);constructor(l,s,m,o){this.cd=s,this.elementRef=m,this.timeAgoCore=o,this.isBrowser.set(Te(l)),this.el=this.elementRef.nativeElement,this.stateChanges.subscribe(()=>{this.el.innerText=this.timeAgoCore.Format(this.Date,this.Locale),this.cd.markForCheck()})}ngOnInit(){this.isBrowser()&&(this.LiveSubscription=this.timeAgoCore.Tick(this.Date).pipe(Re(()=>this.Live)).subscribe(()=>this.stateChanges.next())),this.stateChanges.next()}ngOnDestroy(){this.LiveSubscription&&(this.LiveSubscription.unsubscribe(),this.LiveSubscription=void 0)}static \u0275fac=function(s){return new(s||r)(T(Ce),T(oe),T(Yt),T(bt))};static \u0275dir=ae({type:r,selectors:[["","qlTimeAgo",""],["","TimeAgo",""]],inputs:{Date:"Date",Locale:"Locale",Live:"Live"}})}return r})(),Zn=(()=>{class r{cd;timeAgoCore;LiveSubscription;Date;Live=!0;Locale="en";Value="";stateChanges=new De;isBrowser=be(!1);constructor(l,s,m){this.cd=s,this.timeAgoCore=m,this.isBrowser.set(Te(l)),this.stateChanges.subscribe(()=>{this.Value=this.timeAgoCore.Format(this.Date,this.Locale),s.markForCheck()})}transform(l,...s){let m=Qn(l).valueOf(),o=!1,[c,g]=[s[0],s[1]];if(typeof c<"u"&&c!==null&&(typeof c=="boolean"&&(o=c),typeof c=="string"&&(this.Locale=c)),typeof g<"u"&&g!==null&&(typeof g=="boolean"&&(o=g),typeof g=="string"&&(this.Locale=g)),this.Date===m&&this.Live===o)return this.Value;if(this.Date=m,this.Live=o,this.Date)this.LiveSubscription&&(this.LiveSubscription.unsubscribe(),this.LiveSubscription=void 0),this.isBrowser()&&(this.LiveSubscription=this.timeAgoCore.Tick(l).pipe(Re(()=>this.Live)).subscribe(()=>this.stateChanges.next())),this.stateChanges.next();else throw new SyntaxError(`Wrong parameter in TimeAgoPipe. Expected a valid date, received: ${l}`);return this.Value}ngOnDestroy(){this.LiveSubscription&&(this.LiveSubscription.unsubscribe(),this.LiveSubscription=void 0),this.stateChanges.complete()}static \u0275fac=function(s){return new(s||r)(T(Ce,16),T(oe,16),T(bt,16))};static \u0275pipe=Ut({name:"TimeAgo",type:r,pure:!1})}return r})(),Kn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({providers:[bt],imports:[O]})}return r})();function Ea(r,d){r&1&&p(0,"div",11)}function _a(r,d){r&1&&p(0,"div",12)}function Pa(r,d){r&1&&p(0,"div",13)}function wa(r,d){r&1&&p(0,"div",14)}function Ma(r,d){if(r&1&&(e(0,"div",3)(1,"div",4),v(2,Ea,1,0,"div",5)(3,_a,1,0,"div",6),t(),e(4,"div",7),p(5,"span"),t(),e(6,"div",8),v(7,Pa,1,0,"div",9)(8,wa,1,0,"div",10),t()()),r&2){let l=f();i(2),a("ngIf",!l.Inverted),i(),a("ngIf",l.Inverted),i(4),a("ngIf",!l.Inverted),i(),a("ngIf",l.Inverted)}}var La=[[["",8,"timeline-badge"]],"*"],Aa=[".Timeline-badge","*"],Na=[[["",8,"timeline-header"]],"*"],ka=[".Timeline-header","*"],yt=(()=>{class r{Inverted=!1;First=!1;Last=!1;Line=!1;constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-timeline-item"],["NgTimelineItem"],["TimelineItem"]],inputs:{Inverted:"Inverted"},ngContentSelectors:Aa,decls:5,vars:7,consts:[[1,"Timeline-item"],[1,"Timeline-content","Anim","Anim-dur-1000ms"],["class","Timeline-line",4,"ngIf"],[1,"Timeline-line"],[1,"Timeline-line-l"],["class","Corner Corner-bottom-left",4,"ngIf"],["class","Corner Corner-top-left",4,"ngIf"],[1,"Timeline-line-c"],[1,"Timeline-line-r"],["class","Corner Corner-top-right",4,"ngIf"],["class","Corner Corner-bottom-right",4,"ngIf"],[1,"Corner","Corner-bottom-left"],[1,"Corner","Corner-top-left"],[1,"Corner","Corner-top-right"],[1,"Corner","Corner-bottom-right"]],template:function(s,m){s&1&&(ne(La),e(0,"div",0),X(1),e(2,"div",1),X(3,1),t()(),v(4,Ma,9,4,"div",2)),s&2&&(S("Inverted",m.Inverted)("First",m.First)("Last",m.Last),i(4),a("ngIf",m.Line&&!m.Last))},dependencies:[G],encapsulation:2})}return r})(),ei=(()=>{class r{document;Id="Timeline".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));Anim=void 0;Layout="Side";Items;elements=[];constructor(l){this.document=l}ngOnInit(){}ngAfterContentInit(){this.Items.length>0&&(this.Items.first.First=!0,this.Items.last.Last=!0,this.Layout==="Connected"&&this.Items.forEach(l=>l.Line=!0))}onScroll(){this.elements.forEach(l=>{let s=this.document.body.scrollTop,m=l.getBoundingClientRect().top,o=this.document.documentElement.clientHeight,c=m-s,g=o*.6;if(this.Anim){let L=`Anim-${this.Anim.toLowerCase()}`;this.SetAnimationClass(l,L,c<g-o/4)}})}SetAnimationClass(l,s,m){m?l.classList.add(s):l.classList.remove(s)}GetAnimationTargets(){if(this.Anim){let s=`#${this.Id} .Timeline-item .Timeline-content`;this.elements=Array.from(this.document.documentElement.querySelectorAll(s))}}ngAfterViewInit(){this.GetAnimationTargets()}static \u0275fac=function(s){return new(s||r)(T(nn))};static \u0275cmp=h({type:r,selectors:[["ql-timeline"],["NgTimeline"],["Timeline"]],contentQueries:function(s,m,o){if(s&1&&ce(o,yt,4),s&2){let c;pe(c=ge())&&(m.Items=c)}},hostBindings:function(s,m){s&1&&u("scroll",function(){return m.onScroll()},!1,Jt)},inputs:{Anim:"Anim",Layout:"Layout"},ngContentSelectors:ka,decls:3,vars:5,consts:[[1,"Timeline",3,"id"]],template:function(s,m){s&1&&(ne(Na),e(0,"div",0),X(1),X(2,1),t()),s&2&&(S("Timeline-connected",m.Layout==="Connected")("Timeline-centered",m.Layout==="Centered"),a("id",m.Id))},styles:[`@media (min-width: 767px){.Timeline-centered .Timeline-item.Inverted:after{left:calc(50% - 2px)}.Timeline-centered .Timeline-item.Inverted .Timeline-badge{margin-left:0}.Timeline-centered .Timeline-item:after{left:calc(50% - 2px)}.Timeline-centered .Timeline-item .Timeline-badge{position:absolute;left:calc(50% - 20px);margin-right:0}.Timeline-centered .Timeline-item .Timeline-content{width:45%;margin-left:0}}@media (max-width: 767px){.Timeline-centered .Timeline-item.Inverted{flex-direction:row}.Timeline-centered .Timeline-item.Inverted:after{left:16px;right:auto}.Timeline-centered .Timeline-item.Inverted .Timeline-badge{margin-left:0;margin-right:.75rem}.Timeline-centered .Timeline-item .Card.Caret-r:after{left:-9%;border-color:transparent var(--ls-bg-surface) transparent transparent}.Timeline-centered .Timeline-item .Card.Caret-r:before{left:calc(-9% - 1px);border-color:transparent hsla(var(--ls-border-hsl),var(--ls-border-alpha)) transparent transparent}}.Timeline-connected .Timeline-item .Timeline-content{width:75%;margin-left:0}.Timeline-connected .Timeline-item .Timeline-content .Card{margin-top:10px}.Timeline-connected .Timeline-line{position:relative;display:flex}.Timeline-connected .Timeline-line .Timeline-line-l,.Timeline-connected .Timeline-line .Timeline-line-c,.Timeline-connected .Timeline-line .Timeline-line-r{display:flex}.Timeline-connected .Timeline-line .Timeline-line-r{margin-left:auto}.Timeline-connected .Timeline-line div.Corner,.Timeline-connected .Timeline-line .Timeline-line-l,.Timeline-connected .Timeline-line .Timeline-line-r{position:relative;padding:0;width:40px;height:40px;overflow:hidden}.Timeline-connected .Timeline-line .Timeline-line-c>span{position:absolute;width:calc(100% - 80px);top:17px;margin:0;border-top:3px solid hsla(var(--ls-border-hsl),var(--ls-border-alpha));opacity:1}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner{width:100%;border:3px solid hsla(var(--ls-border-hsl),var(--ls-border-alpha));border-radius:15px}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-bottom-left,.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-top-left,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-bottom-left,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-top-left{left:40%}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-bottom-right,.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-top-right,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-bottom-right,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-top-right{left:-40%}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-bottom-left,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-bottom-left{top:-50%}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-top-right,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-top-right{top:calc(50% - 3px)}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-bottom-right,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-bottom-right{top:-50%}.Timeline-connected .Timeline-line .Timeline-line-l>.Corner.Corner-top-left,.Timeline-connected .Timeline-line .Timeline-line-r>.Corner.Corner-top-left{top:calc(50% - 3px)}
`],encapsulation:2})}return r})(),ti=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function Ra(r,d){if(r&1&&(H(0),j(),e(1,"svg",3)(2,"g",4),p(3,"circle",5)(4,"circle",6),t(),e(5,"text",7),n(6),t(),e(7,"text",8),n(8),t()(),W()),r&2){let l=f();i(6),P(l.Value),i(2),P(l.Text)}}function Ba(r,d){if(r&1&&(H(0),j(),e(1,"svg",9)(2,"g"),p(3,"path",10)(4,"path",11),t(),e(5,"text",12),n(6),t(),e(7,"text",13),n(8),t()(),W()),r&2){let l=f();i(6),P(l.Value),i(2),P(l.Text)}}function Fa(r,d){if(r&1&&(H(0),p(1,"TimerItem",2)(2,"TimerDivider")(3,"TimerItem",2)(4,"TimerDivider")(5,"TimerItem",2),W()),r&2){let l=f();i(),re("--ls-loader-per",l.timer.Hour.Percent),a("Value",l.timer.Hour.Text)("Text","Hr"),i(2),re("--ls-loader-per",l.timer.Minute.Percent),a("Value",l.timer.Minute.Text)("Text","Min"),i(2),re("--ls-loader-per",l.timer.Second.Percent),a("Value",l.timer.Second.Text)("Text","Sec")}}function Va(r,d){if(r&1&&(H(0),n(1),W()),r&2){let l=f();i(),P(l.Stopwatch.counter)}}function Oa(r,d){r&1&&n(0,"Press Start")}function Ha(r,d){r&1&&p(0,"TimerDivider")}function Wa(r,d){r&1&&p(0,"TimerDivider")}function za(r,d){if(r&1&&(H(0),p(1,"TimerItem",8),v(2,Ha,1,0,"TimerDivider",7),p(3,"TimerItem",8),v(4,Wa,1,0,"TimerDivider",7),p(5,"TimerItem",8),W()),r&2){let l=f();i(),re("--ls-loader-per",l.timer.Hour.Percent),a("Value",l.timer.Hour.Text)("Text","Hr"),i(),a("ngIf",l.timer.Hour),i(),re("--ls-loader-per",l.timer.Minute.Percent),a("Value",l.timer.Minute.Text)("Text","Min"),i(),a("ngIf",l.timer.Minute),i(),re("--ls-loader-per",l.timer.Second.Percent),a("Value",l.timer.Second.Text)("Text","Sec")}}var ni=(()=>{class r{constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-timer-divider"],["NgTimerDivider"],["TimerDivider"]],decls:6,vars:0,consts:[[1,"Timer-divider","MX-n2"],[1,"Square"],[1,"Centered"],["viewBox","0 2 5 15","xmlns","http://www.w3.org/2000/svg"],["x","50%","y","45%","font-size","100%","fill","currentColor","dominant-baseline","central","text-anchor","middle"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),j(),e(3,"svg",3)(4,"text",4),n(5,": "),t()()()()())},styles:[`TimerDivider{position:relative;display:contents}
`],encapsulation:2})}return r})(),ii=(()=>{class r{Type="Path";Value="00";Text="";constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-timer-item"],["NgTimerItem"],["TimerItem"]],inputs:{Value:"Value",Text:"Text"},decls:4,vars:2,consts:[["role","status",1,"Square"],[1,"Centered"],[4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 35.8 35.8"],["transform","rotate(-90.1 17.9 17.9)"],["cx","17.9","cy","17.9","r","15.90",1,"Loader-bg"],["cx","17.9","cy","17.9","r","15.90",1,"Loader-fg"],["x","50%","y","45%","font-size","90%"],["x","50%","y","75%","font-size","30%"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 36 36"],["d","M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",1,"Loader-bg"],["d","M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",1,"Loader-fg"],["x","50%","y","50%","font-size","75%",1,"Loader-text"],["x","50%","y","75%","font-size","20%"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1),v(2,Ra,9,2,"ng-container",2)(3,Ba,9,2,"ng-container",2),t()()),s&2&&(i(2),a("ngIf",m.Type==="Circle"),i(),a("ngIf",m.Type==="Path"))},dependencies:[G],styles:[`TimerItem{position:relative;display:contents}
`],encapsulation:2})}return r})();function ai(r){let d=new Date(r);if(!Number.isNaN(d.valueOf()))return d;let l=String(r).match(/\d+/g);if(l===null||l.length<=2)return d;{let[s,m,...o]=l.map(c=>parseInt(c,10));return new Date(Date.UTC(s,m-1,...o))}}function xt(r){let d=Math.floor(r/864e5),l=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(r%(1e3*60*60)/(1e3*60)),m=Math.floor(r%(1e3*60)/1e3),o=d*365.6/360,c=l*360/24,g=s*360/60,L=m*360/60,k=100*o/360,de=100*c/360,q=100*g/360,ee=100*L/360;return{Day:{Degree:+o.toFixed(2),Percent:+k.toFixed(2),Value:d,Text:d<10?"0"+d:d.toString()},Hour:{Degree:c,Percent:+de.toFixed(2),Value:l,Text:l<10?"0"+l:l.toString()},Minute:{Degree:g,Percent:+q.toFixed(2),Value:s,Text:s<10?"0"+s:s.toString()},Second:{Degree:L,Percent:+ee.toFixed(2),Value:m,Text:m<10?"0"+m:m.toString()}}}function qa(r){let d=new Date().getTime()-r.getTime();return d<0&&(d*=-1),xt(d)}var Ga=(()=>{class r{cd;ClockSubscription;Until;OnChange=new K;stateChanges=new De;isBrowser=be(!1);constructor(l,s){this.cd=s,this.isBrowser.set(Te(l)),this.stateChanges.subscribe(()=>{if(this.Until){let m=ai(new Date(this.Until)),o=qa(m);this.OnChange.emit(o),this.cd.markForCheck()}})}ngOnInit(){this.isBrowser()&&(this.ClockSubscription=this.Tick().subscribe(()=>this.stateChanges.next()))}Tick(){return Se(0).pipe(ze(()=>we(1e3)))}ngOnDestroy(){this.ClockSubscription&&(this.ClockSubscription.unsubscribe(),this.ClockSubscription=void 0)}static \u0275fac=function(s){return new(s||r)(T(Ce),T(oe))};static \u0275dir=ae({type:r,selectors:[["","qlTimer",""],["","Timer",""]],inputs:{Until:"Until"},outputs:{OnChange:"OnChange"}})}return r})(),ri=(()=>{class r{ClassName;Date;Until=new Date;timer;constructor(){}ngOnInit(){this.Date&&(this.Until=ai(new Date(this.Date)))}onChange(l){this.timer=l}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=h({type:r,selectors:[["ql-countdown"],["NgCountdown"],["Countdown"]],inputs:{ClassName:"ClassName",Date:"Date"},decls:2,vars:5,consts:[["Timer","",3,"Until","OnChange"],[4,"ngIf"],[3,"Value","Text"]],template:function(s,m){s&1&&(e(0,"div",0),u("OnChange",function(c){return m.onChange(c)}),v(1,Fa,6,12,"ng-container",1),t()),s&2&&(ot("Timer Loader ",m.ClassName,""),a("Until",m.Date),i(),a("ngIf",m.timer))},dependencies:[G,ni,ii,Ga],styles:[`.Timer{display:flex;position:relative;color:var(--ls-bg-accent);background-color:var(--ls-bg-surface);margin-bottom:10px}.Timer .Timer-divider{position:relative;display:flex;width:10%;margin-top:auto;margin-bottom:auto}
`],encapsulation:2})}return r})(),oi=(()=>{class r{cd;ClassName;timer;Stopwatch={running:!1,startTime:Date.now(),startText:"Start"};constructor(l){this.cd=l}ngOnInit(){this.timer=xt(this.Stopwatch.counter||0)}startTimer(){this.Stopwatch.running=!this.Stopwatch.running,this.Stopwatch.running?(this.Stopwatch.startText="Stop",this.Stopwatch.startTime=Date.now()-(this.Stopwatch.counter||0),this.Stopwatch.timerRef=setInterval(()=>{this.Stopwatch.counter=Date.now()-this.Stopwatch.startTime,this.timer=xt(this.Stopwatch.counter||0),this.cd.markForCheck()})):(this.Stopwatch.startText="Resume",clearInterval(this.Stopwatch.timerRef))}clearTimer(){this.Stopwatch.running=!1,this.Stopwatch.startText="Start",this.Stopwatch.counter=void 0,clearInterval(this.Stopwatch.timerRef)}ngOnDestroy(){clearInterval(this.Stopwatch.timerRef)}static \u0275fac=function(s){return new(s||r)(T(oe))};static \u0275cmp=h({type:r,selectors:[["ql-chronometer"],["NgChronometer"],["NgStopwatch"],["Chronometer"],["Stopwatch"]],inputs:{ClassName:"ClassName"},decls:12,vars:7,consts:[[1,"MB-1","D-flex","Align-items-center"],[1,"Btn-group"],[1,"Btn","Btn-sm","Btn-outline-primary",2,"width","80px",3,"click"],[1,"Btn","Btn-sm","Btn-outline-danger",2,"width","70px",3,"click"],[1,"Badge","Bg-dark","MS-auto"],[4,"ngIf","ngIfElse"],["elseBlock",""],[4,"ngIf"],[3,"Value","Text"]],template:function(s,m){if(s&1&&(e(0,"div",0)(1,"div",1)(2,"button",2),u("click",function(){return m.startTimer()}),n(3),t(),e(4,"button",3),u("click",function(){return m.clearTimer()}),n(5,"Clear"),t()(),e(6,"div",4),v(7,Va,2,1,"ng-container",5)(8,Oa,1,0,"ng-template",null,6,Fe),t()(),e(10,"div"),v(11,za,6,14,"ng-container",7),t()),s&2){let o=x(9);i(3),P(m.Stopwatch.startText),i(4),a("ngIf",m.Stopwatch.counter)("ngIfElse",o),i(3),ot("Timer Loader ",m.ClassName,""),i(),a("ngIf",m.timer)}},dependencies:[G,ni,ii],styles:[".Timer[_ngcontent-%COMP%]{display:flex;position:relative;color:var(--ls-bg-accent);background-color:var(--ls-bg-surface);margin-bottom:10px}.Timer[_ngcontent-%COMP%]   .Timer-divider[_ngcontent-%COMP%]{position:relative;display:flex;width:10%;margin-top:auto;margin-bottom:auto}"]})}return r})(),li=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=D({type:r});static \u0275inj=R({imports:[O]})}return r})();function Ua(r,d){if(r&1){let l=N();e(0,"li",3),u("click",function(){let o=b(l).$implicit,c=f();return y(c.Current=o.Slug)}),e(1,"a",4),n(2),t()()}if(r&2){let l=d.$implicit,s=f();S("Active",s.Current===l.Slug)("PS-0",l.Tag==="H1")("PS-1",l.Tag==="H2")("PS-2",l.Tag==="H3")("PS-3",l.Tag==="H4")("PS-4",l.Tag==="H5")("PS-5",l.Tag==="H6"),i(),a("routerLink",s.URL)("fragment",l.Slug),i(),P(l.Name)}}var si=(()=>{let d=class d{constructor(s){this.router=s,this.ExcludeSelectors=".Example-content",this.URL="",this.Items=[]}ngAfterContentInit(){}Refresh(){this.LoaderAsync().then(s=>{this.Items=s})}LoaderAsync(){return Vt(this,null,function*(){return new Promise((s,m)=>{setTimeout(()=>{if(typeof window<"u"&&typeof document<"u"&&this.Target){let o=this.Target.querySelectorAll("h1,h2,h3,h4,h5,h6");if(o.length>0){this.Current=this.router.parseUrl(this.router.url).fragment,this.URL=this.getUrlWithoutParams();let c=[];o.forEach((g,L)=>{let k="section-"+this.Slugify(g.innerText),de=g.innerText,q=document.createElement("span");q.id=k,q.style.marginBottom="1.5rem";let ee=g.closest(this.ExcludeSelectors);!de||ee||(L===0&&this.Target.parentElement?document.body.id=k:g.parentNode?.insertBefore(q,g),c.push({Tag:g.tagName,Slug:k,Name:de}))}),s(c)}}s([])},200)})})}getUrlWithoutParams(){let s=this.router.parseUrl(this.router.url);return s.queryParams={},s.fragment=null,s.toString()}Slugify(s,m="-"){return String(s).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,m).replace(/-+/g,m)}};d.\u0275fac=function(m){return new(m||d)(T(sn))},d.\u0275cmp=h({type:d,selectors:[["app-table-of-contents"],["TableOfContents"]],inputs:{Target:"Target",ExcludeSelectors:"ExcludeSelectors"},standalone:!0,features:[Kt],decls:3,vars:1,consts:[[1,"TOC-section","Scrollbar","Scrollbar-2"],[1,"TOC-section-nav"],["class","TOC-item",3,"Active","PS-0","PS-1","PS-2","PS-3","PS-4","PS-5","click",4,"ngFor","ngForOf"],[1,"TOC-item",3,"click"],[3,"routerLink","fragment"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"ul",1),v(2,Ua,3,17,"li",2),t()()),m&2&&(i(2),a("ngForOf",o.Items))},dependencies:[z,fe],styles:[`.TOC-section{position:relative;top:6rem;width:14rem;max-height:calc(100vh - 15rem);z-index:1071;overflow-y:auto;overflow-x:hidden;align-self:flex-start}.TOC-section .TOC-section-nav{position:fixed;display:flex;flex-direction:column;font-family:var(--ls-font-sans-serif);padding:.25rem 0;margin:0 0 0 3rem;list-style:none}.TOC-section .TOC-section-nav .TOC-item{background-color:transparent;border-left:2px solid hsla(var(--ls-border-hsl),var(--ls-border-alpha));padding-left:.25rem;transition:all .2s}.TOC-section .TOC-section-nav .TOC-item.Active{border-color:var(--ls-bg-accent)}.TOC-section .TOC-section-nav .TOC-item.Active a{color:var(--ls-bg-accent)}.TOC-section .TOC-section-nav .TOC-item a{padding:.25rem 1rem;color:var(--ls-fg-surface);font-weight:400;white-space:nowrap;min-width:0;overflow:hidden;text-decoration:none;text-overflow:ellipsis;transition:all .2s}.TOC-section .TOC-section-nav .TOC-item a:hover{color:var(--ls-bg-accent)}
`],encapsulation:2});let r=d;return r})();var mi=(()=>{let d=class d{};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-lootstrap-layout"]],hostAttrs:["ngSkipHydration","true"],decls:8,vars:2,consts:[[1,"Container"],[1,"Row","G-2"],[1,"Order-1","D-none","D-lg-block","Col-lg-2"],[3,"Target","ExcludeSelectors"],["toc",""],[1,"Col-12","Col-lg-10"],["tocTarget",""],[3,"activate"]],template:function(m,o){if(m&1){let c=N();e(0,"div",0)(1,"div",1)(2,"div",2),p(3,"TableOfContents",3,4),t(),e(5,"div",5,6)(7,"router-outlet",7),u("activate",function(){b(c);let L=x(4);return y(L.Refresh())}),t()()()()}if(m&2){let c=x(6);i(3),a("Target",c)("ExcludeSelectors",".Example, .Tab-content")}},dependencies:[ln,si]});let r=d;return r})();var di=(()=>{let d=class d{constructor(s){this.route=s,this.ActiveTab="Avatar",this.Package={Host:"https://img.shields.io/",Style:"?style=for-the-badge",Name:"@qrsln/lootstrap-angular",npm:"https://www.npmjs.com/package/@qrsln/lootstrap-angular"}}ngOnInit(){this.route.fragment.subscribe(s=>{s&&(this.ActiveTab=s)})}};d.\u0275fac=function(m){return new(m||d)(T(on))},d.\u0275cmp=h({type:d,selectors:[["app-lootstrap-overview"]],decls:1067,vars:78,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title"],[1,"Badge","Bg-info"],["role","alert",1,"Alert","Alert-outline","MY-3"],["target","_blank",3,"href"],["alt","npm",1,"MB-2","ME-2",3,"src"],["alt","npm bundle size",1,"MB-2","ME-2",3,"src"],[1,"MT-3"],["href","https://www.npmjs.com/package/@qrsln/lootstrap","target","_blank"],[1,"Fg-muted"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Design","routerLink","fragment","OnChange"],[3,"Label","Active"],[1,"Border","P-2","P-lg-3"],[1,"Border-bottom"],[1,"Table-responsive"],[1,"Table","Table-hover","Table-striped","Caption-top"],["scope","col"],[1,"MT-5"],[1,"Table","Table-hover","Table-striped"],[3,"innerHtml"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h4",1),n(2,"Lootstrap Angular "),e(3,"span",2),n(4,"Overview"),t()(),e(5,"div",3)(6,"a",4),p(7,"img",5),t(),p(8,"img",6)(9,"hr")(10,"img",5)(11,"img",5)(12,"img",5)(13,"img",5),t(),e(14,"h5",7),n(15,"Styled by "),e(16,"a",8),n(17,"Lootstrap"),t()(),e(18,"p",9),n(19,"angular.json"),t(),e(20,"textarea",10),n(21,`{
  "styles": [
    "node_modules/@qrsln/lootstrap-angular/Styles/lootstrap.css"
// OR
    "node_modules/@qrsln/lootstrap/dist/css/lootstrap.css"
  ]
}
  `),t(),e(22,"Tabs",11),u("OnChange",function(g){return o.ActiveTab=g}),e(23,"TabPane",12)(24,"div",13)(25,"h5",14),n(26,"Ng - Accordion"),t(),e(27,"div",15)(28,"table",16)(29,"caption"),n(30,"Avatar"),t(),e(31,"thead")(32,"tr")(33,"th",17),n(34,"Params"),t(),e(35,"th",17),n(36,"Description"),t()()(),e(37,"tbody")(38,"tr")(39,"td")(40,"code"),n(41,"[Collapsing]"),t()(),e(42,"td"),n(43," Decides if the single item will be open at once or not. In collapsing mode, toggling one would collapse others "),t()()()()(),e(44,"h5",18),n(45,"***.module.ts"),t(),e(46,"textarea",10),n(47,`import {AccordionModule} from '@qrsln/lootstrap-angular/Libs/Accordion';

@NgModule({
  imports: [AccordionModule, /*...*/],
})
  `),t()()(),e(48,"TabPane",12)(49,"div",13)(50,"h5",14),n(51,"Ng - Avatar"),t(),e(52,"div",15)(53,"table",16)(54,"caption"),n(55,"Avatar"),t(),e(56,"thead")(57,"tr")(58,"th",17),n(59,"Params"),t(),e(60,"th",17),n(61,"Description"),t()()(),e(62,"tbody")(63,"tr")(64,"td")(65,"code"),n(66,"[Img]"),t()(),e(67,"td"),n(68,"Image url."),t()(),e(69,"tr")(70,"td")(71,"code"),n(72,"[Alt]"),t()(),e(73,"td"),n(74,"Alternative text for the avatar image, if the image cannot be displayed."),t()(),e(75,"tr")(76,"td")(77,"code"),n(78,"[Letter]"),t()(),e(79,"td"),n(80,"Can be used with letters (max 3)."),t()(),e(81,"tr")(82,"td")(83,"code"),n(84,"[BgColor]"),t()(),e(85,"td"),n(86,"Color of avatar background."),t()(),e(87,"tr")(88,"td")(89,"code"),n(90,"[Variant]"),t()(),e(91,"td"),n(92,"Options: "),e(93,"code"),n(94,"Square, Rounded, Circle"),t(),n(95,"."),t()(),e(96,"tr")(97,"td")(98,"code"),n(99,"[Anchor]"),t()(),e(100,"td"),n(101,"Options: "),e(102,"code"),n(103,"Top, Bottom, None"),t(),n(104,"."),t()(),e(105,"tr")(106,"td")(107,"code"),n(108,"[Online]"),t()(),e(109,"td"),n(110,"Green badge color. Default value: "),e(111,"code"),n(112,"false"),t(),n(113,"."),t()()()()(),e(114,"div",15)(115,"table",16)(116,"caption"),n(117,"Avatar Group"),t(),e(118,"thead")(119,"tr")(120,"th",17),n(121,"Params"),t(),e(122,"th",17),n(123,"Description"),t()()(),e(124,"tbody")(125,"tr")(126,"td")(127,"code"),n(128,"[ImgList]"),t()(),e(129,"td"),n(130,"Images url."),t()(),e(131,"tr")(132,"td")(133,"code"),n(134,"[Reversed]"),t()(),e(135,"td"),n(136,"Default value: "),e(137,"code"),n(138,"false"),t(),n(139,"."),t()(),e(140,"tr")(141,"td")(142,"code"),n(143,"[More]"),t()(),e(144,"td"),n(145,"Default value: "),e(146,"code"),n(147,"false"),t(),n(148,"."),t()()()()(),e(149,"h5",18),n(150,"***.module.ts"),t(),e(151,"textarea",10),n(152,`import {AvatarModule} from '@qrsln/lootstrap-angular/Libs/Avatar';

@NgModule({
  imports: [AvatarModule, /*...*/],
})
  `),t()()(),e(153,"TabPane",12)(154,"div",13)(155,"h5",14),n(156,"Ng - Breadcrumb"),t(),e(157,"div",15)(158,"table",16)(159,"caption"),n(160,"Avatar"),t(),e(161,"thead")(162,"tr")(163,"th",17),n(164,"Params"),t(),e(165,"th",17),n(166,"Description"),t()()(),e(167,"tbody")(168,"tr")(169,"td")(170,"code"),n(171,"[Letter]"),t()(),e(172,"td"),n(173,"Letter chevron."),t()(),e(174,"tr")(175,"td")(176,"code"),n(177,"[Chevron]"),t()(),e(178,"td"),n(179,"Options: "),e(180,"code"),n(181,"'Regular' (default) 'Larger' 'Vertical'"),t(),n(182,"."),t()(),e(183,"tr")(184,"td")(185,"code"),n(186,"[Root]"),t()(),e(187,"td")(188,"code"),n(189,"Root:BreadcrumbItem;"),t(),n(190,"."),t()(),e(191,"tr")(192,"td")(193,"code"),n(194,"[Items]"),t()(),e(195,"td")(196,"code"),n(197,"Items:BreadcrumbItem[];"),t(),n(198,"."),t()(),e(199,"tr")(200,"td")(201,"code"),n(202,"[Autoload]"),t()(),e(203,"td"),n(204,"Can automatically retrieve custom data from current route ("),e(205,"code"),n(206,"data['breadcrumb']"),t(),n(207,")."),t()(),e(208,"tr")(209,"td")(210,"code"),n(211,"Model"),t()(),e(212,"td")(213,"textarea",10),n(214,`export interface BreadcrumbItem {
    External: boolean;
    FaIcon: string;
    Href: string;
    Label: string;
}
                `),t()()()()()(),e(215,"h5",18),n(216,"***.module.ts"),t(),e(217,"textarea",10),n(218,`import {BreadcrumbModule} from '@qrsln/lootstrap-angular/Libs/Breadcrumb';

@NgModule({
  imports: [BreadcrumbModule, /*...*/],
})
        `),t()()(),e(219,"TabPane",12)(220,"div",13)(221,"h5",14),n(222,"Ng - Card"),t(),e(223,"div",15)(224,"table",19)(225,"thead")(226,"tr")(227,"th",17),n(228,"Params"),t(),e(229,"th",17),n(230,"Description"),t()()(),e(231,"tbody")(232,"tr")(233,"td")(234,"code"),n(235,"[Orientation]"),t()(),e(236,"td"),n(237,"Options: "),e(238,"code"),n(239,"Vertical (default), Horizontal"),t(),n(240,"."),t()(),e(241,"tr")(242,"td")(243,"code"),n(244,"[Caret]"),t()(),e(245,"td"),n(246,"Options: "),e(247,"code"),n(248,"'left' 'top' 'right' 'bottom' undefined"),t(),n(249,"."),t()()()()(),e(250,"h5",18),n(251,"***.module.ts"),t(),e(252,"textarea",10),n(253,`import {CardModule} from '@qrsln/lootstrap-angular/Libs/Card';

@NgModule({
  imports: [CardModule, /*...*/],
})
        `),t()()(),e(254,"TabPane",12)(255,"div",13)(256,"h5",14),n(257,"Ng - Carousel"),t(),e(258,"div",15)(259,"table",19)(260,"thead")(261,"tr")(262,"th",17),n(263,"Params"),t(),e(264,"th",17),n(265,"Description"),t()()(),e(266,"tbody")(267,"tr")(268,"td")(269,"code"),n(270,"[Images:CarouselItem[]]"),t()(),e(271,"td"),n(272,"Images list."),t()(),e(273,"tr")(274,"td")(275,"code"),n(276,"[Interval]"),t()(),e(277,"td"),n(278,"Time in milliseconds before the next slide is shown. Default value: "),e(279,"code"),n(280,"6000"),t(),n(281,"."),t()(),e(282,"tr")(283,"td")(284,"code"),n(285,"[Captions]"),t()(),e(286,"td"),n(287,"If "),e(288,"code"),n(289,"true"),t(),n(290,", captions will be visible. Default value: "),e(291,"code"),n(292,"true"),t(),n(293,"."),t()(),e(294,"tr")(295,"td")(296,"code"),n(297,"[NavigationArrows]"),t()(),e(298,"td"),n(299,"If "),e(300,"code"),n(301,"true"),t(),n(302,", previous and next navigation arrows will be visible on the slide. Default value: "),e(303,"code"),n(304,"true"),t(),n(305,". "),t()(),e(306,"tr")(307,"td")(308,"code"),n(309,"[NavigationIndicators]"),t()(),e(310,"td"),n(311,"If "),e(312,"code"),n(313,"true"),t(),n(314,", navigation indicators at the bottom of the slide will be visible. Default value: "),e(315,"code"),n(316,"true"),t(),n(317,". "),t()(),e(318,"tr")(319,"td")(320,"code"),n(321,"[Dummy]"),t()(),e(322,"td"),n(323,"With dummy images for the test purpose, Default value: "),e(324,"code"),n(325,"false"),t(),n(326,"."),t()(),e(327,"tr")(328,"td")(329,"code"),n(330,"[PauseOnHover]"),t()(),e(331,"td"),n(332,"If "),e(333,"code"),n(334,"true"),t(),n(335,", will pause slide switching when mouse cursor hovers the slide. Default value: "),e(336,"code"),n(337,"false"),t(),n(338,". "),t()(),e(339,"tr")(340,"td")(341,"code"),n(342,"Model"),t()(),e(343,"td")(344,"textarea",10),n(345,`export interface CarouselItem {
    Src: string;
    Alt: string;
    Caption: string;
    Description: string;
}
                `),t()()()()()(),e(346,"h5",18),n(347,"***.module.ts"),t(),e(348,"textarea",10),n(349,`import {CarouselModule} from '@qrsln/lootstrap-angular/Libs/Carousel';

@NgModule({
  imports: [CarouselModule, /*...*/],
})
        `),t()()(),e(350,"TabPane",12)(351,"div",13)(352,"h5",14),n(353,"Ng - Dialog"),t(),e(354,"div",15)(355,"table",16)(356,"caption"),n(357,"Component"),t(),e(358,"thead")(359,"tr")(360,"th",17),n(361,"Params"),t(),e(362,"th",17),n(363,"Description"),t()()(),e(364,"tbody")(365,"tr")(366,"td")(367,"code"),n(368,"[Content]"),t()(),e(369,"td"),n(370,"Dialog Title & InnerHtml."),t()(),e(371,"tr")(372,"td")(373,"code"),n(374,"[Footer]"),t()(),e(375,"td"),n(376,"Redirect Href."),t()(),e(377,"tr")(378,"td")(379,"code"),n(380,"[Forced]"),t()(),e(381,"td"),n(382,"Default value: "),e(383,"code"),n(384,"false"),t(),n(385,"."),t()()()()(),e(386,"div",15)(387,"table",16)(388,"caption"),n(389,"Service - Methods"),t(),e(390,"thead")(391,"tr")(392,"th",17),n(393,"Params"),t(),e(394,"th",17),n(395,"Description"),t()()(),e(396,"tbody")(397,"tr")(398,"td")(399,"code"),n(400,"Redirect"),t()(),e(401,"td"),p(402,"code",20),n(403,"."),t()(),e(404,"tr")(405,"td")(406,"code"),n(407,"Prompt"),t()(),e(408,"td"),p(409,"code",20),n(410,". "),t()()()()(),e(411,"h5",18),n(412,"***.module.ts"),t(),e(413,"textarea",10),n(414,`import {DialogModule} from '@qrsln/lootstrap-angular/Libs/Dialog';

@NgModule({
  imports: [DialogModule, /*...*/],
})
        `),t(),e(415,"p"),n(416," Need to assign "),e(417,"code"),n(418,"ViewContainerRef"),t(),n(419," first, for creating dynamic components through Service as below: "),e(420,"textarea",10),n(421,`constructor(private dialogService: DialogService, private viewContainerRef: ViewContainerRef) {
  this.dialogService.ViewContainerRef = viewContainerRef;
}
  `),t()()()(),e(422,"TabPane",12)(423,"div",13)(424,"h5",14),n(425,"Ng - Notify"),t(),e(426,"div",15)(427,"table",16)(428,"caption"),n(429,"Service Methods"),t(),e(430,"thead")(431,"tr")(432,"th",17),n(433,"Params"),t(),e(434,"th",17),n(435,"Description"),t()()(),e(436,"tbody")(437,"tr")(438,"td")(439,"code"),n(440,"Notify"),t()(),e(441,"td"),n(442,"Image url."),t()(),e(443,"tr")(444,"td")(445,"code"),n(446,"Notify"),t()(),e(447,"td"),n(448,"Root Method."),t()(),e(449,"tr")(450,"td")(451,"code"),n(452,"Show"),t()(),e(453,"td"),n(454,"Root; seperated."),t()(),e(455,"tr")(456,"td")(457,"code"),n(458,"Iconic"),t()(),e(459,"td"),n(460,"For using custom icon like FA Icons."),t()(),e(461,"tr")(462,"td")(463,"code"),n(464,"Notify"),t()(),e(465,"td"),n(466,"Image url."),t()(),e(467,"tr")(468,"td")(469,"code"),n(470,"None"),t()(),e(471,"td"),n(472,"Customized Theme Method."),t()(),e(473,"tr")(474,"td")(475,"code"),n(476,"Success"),t()(),e(477,"td"),n(478,"Customized Theme Method."),t()(),e(479,"tr")(480,"td")(481,"code"),n(482,"Info"),t()(),e(483,"td"),n(484,"Customized Theme Method."),t()(),e(485,"tr")(486,"td")(487,"code"),n(488,"Error"),t()(),e(489,"td"),n(490,"Customized Theme Method."),t()(),e(491,"tr")(492,"td")(493,"code"),n(494,"Warning"),t()(),e(495,"td"),n(496,"Customized Theme Method."),t()()()()(),e(497,"p"),n(498,"Service usage depends on "),e(499,"code"),n(500,"Notify Component"),t(),n(501," at your layout."),t(),e(502,"textarea",10),n(503,`  <!--layout.component.html-->
  <Notify></Notify>

  <router-outlet></router-outlet>
  `),t(),e(504,"h5",18),n(505,"***.module.ts"),t(),e(506,"textarea",10),n(507,`import {NotifyModule} from '@qrsln/lootstrap-angular/Libs/Notify';

@NgModule({
  imports: [NotifyModule, /*...*/],
})
        `),t()()(),e(508,"TabPane",12)(509,"div",13)(510,"h5",14),n(511,"Ng - Pagination"),t(),e(512,"div",15)(513,"table",19)(514,"thead")(515,"tr")(516,"th",17),n(517,"Params"),t(),e(518,"th",17),n(519,"Description"),t()()(),e(520,"tbody")(521,"tr")(522,"td")(523,"code"),n(524,"[Items]"),t()(),e(525,"td"),n(526,"Items that you want to paginate."),t()(),e(527,"tr")(528,"td")(529,"code"),n(530,"[ItemPerPage]"),t()(),e(531,"td"),n(532,"The number of items to display on each page."),t()(),e(533,"tr")(534,"td")(535,"code"),n(536,"[CurrentPage]"),t()(),e(537,"td"),n(538,"The current (active) page number."),t()(),e(539,"tr")(540,"td")(541,"code"),n(542,"[MaxSize]"),t()(),e(543,"td"),n(544,"Defines the maximum number of page links to display. Default is "),e(545,"code"),n(546,"6"),t(),n(547,"."),t()(),e(548,"tr")(549,"td")(550,"code"),n(551,"[Alignment]"),t()(),e(552,"td"),n(553,"Options: "),e(554,"code"),n(555,"'Start' | 'Center' | 'End'"),t(),n(556,"."),t()(),e(557,"tr")(558,"td")(559,"code"),n(560,"[Sizing]"),t()(),e(561,"td"),n(562,"Options: "),e(563,"code"),n(564,"'Regular' | 'Small' | 'Large'"),t(),n(565,"."),t()(),e(566,"tr")(567,"td")(568,"code"),n(569,"[Shape]"),t()(),e(570,"td"),n(571,"Options: "),e(572,"code"),n(573,"'Regular' 'Circle'"),t(),n(574,"."),t()(),e(575,"tr")(576,"td")(577,"code"),n(578,"(PageChanged)"),t()(),e(579,"td")(580,"code"),n(581,"EventEmitter"),t(),n(582," Returns the current page."),t()(),e(583,"tr")(584,"td")(585,"code"),n(586,"(PagedItems)"),t()(),e(587,"td")(588,"code"),n(589,"EventEmitter"),t(),n(590," Returns the current paged Items."),t()()()()(),e(591,"h5",18),n(592,"***.module.ts"),t(),e(593,"textarea",10),n(594,`import {PaginationModule} from '@qrsln/lootstrap-angular/Libs/Pagination';

@NgModule({
  imports: [PaginationModule, /*...*/],
})
        `),t()()(),e(595,"TabPane",12)(596,"div",13)(597,"h5",14),n(598,"Ng - Rating"),t(),e(599,"div",15)(600,"table",19)(601,"thead")(602,"tr")(603,"th",17),n(604,"Params"),t(),e(605,"th",17),n(606,"Description"),t()()(),e(607,"tbody")(608,"tr")(609,"td")(610,"code"),n(611,"[Fraction]"),t()(),e(612,"td"),n(613,"Allows to click half of unit of rate."),t()(),e(614,"tr")(615,"td")(616,"code"),n(617,"[ReadOnly]"),t()(),e(618,"td"),n(619,"Read Only :)."),t()(),e(620,"tr")(621,"td")(622,"code"),n(623,"[Shadow]"),t()(),e(624,"td"),n(625,"Allow drop shadow to items."),t()(),e(626,"tr")(627,"td")(628,"code"),n(629,"[BgColor]"),t()(),e(630,"td"),n(631,"Custom Bg color."),t()(),e(632,"tr")(633,"td")(634,"code"),n(635,"[Pattern]"),t()(),e(636,"td")(637,"code"),n(638,"'Customized' (default), 'Base'"),t(),n(639,"."),t()(),e(640,"tr")(641,"td")(642,"code"),n(643,"[Icons]"),t()(),e(644,"td"),n(645,"Use with other icon libraries."),t()(),e(646,"tr")(647,"td")(648,"code"),n(649,"[ShowValue]"),t()(),e(650,"td"),n(651,"Show rating Value."),t()(),e(652,"tr")(653,"td")(654,"code"),n(655,"[Rate]"),t()(),e(656,"td"),n(657,"Current rating."),t()(),e(658,"tr")(659,"td")(660,"code"),n(661,"(RateChanged)"),t()(),e(662,"td")(663,"code"),n(664,"Event Emitter"),t(),n(665," as "),e(666,"code"),n(667,'(RateChanged)="rateChanged($event)"'),t(),n(668,"."),t()()()()(),e(669,"h5",18),n(670,"***.module.ts"),t(),e(671,"textarea",10),n(672,`import {RatingModule} from '@qrsln/lootstrap-angular/Libs/Rating';

@NgModule({
  imports: [RatingModule, /*...*/],
})
        `),t()()(),e(673,"TabPane",12)(674,"div",13)(675,"h5",14),n(676,"Ng - Spinner"),t(),e(677,"div",15)(678,"table",19)(679,"thead")(680,"tr")(681,"th",17),n(682,"Params"),t(),e(683,"th",17),n(684,"Description"),t()()(),e(685,"tbody")(686,"tr")(687,"td")(688,"code"),n(689,"[Pattern]"),t()(),e(690,"td")(691,"code"),n(692,"Vortex, VortexSqr, Grow, Border"),t(),n(693,"."),t()(),e(694,"tr")(695,"td")(696,"code"),n(697,"[Overlay]"),t()(),e(698,"td"),n(699,"Overlay effect."),t()(),e(700,"tr")(701,"td")(702,"code"),n(703,"[Color]"),t()(),e(704,"td"),n(705,"Css color."),t()(),e(706,"tr")(707,"td")(708,"code"),n(709,"[ExpireIn]"),t()(),e(710,"td"),n(711,"Automatically expires if set; "),e(712,"code"),n(713,"milliseconds"),t(),n(714,"."),t()(),e(715,"tr")(716,"td")(717,"code"),n(718,"[Adaptive]"),t()(),e(719,"td"),n(720,"Uses active theme's accent color if its "),e(721,"code"),n(722,"true"),t(),n(723,"."),t()(),e(724,"tr")(725,"td")(726,"code"),n(727,"[Small]"),t()(),e(728,"td"),n(729,"To make a smaller spinner that can quickly be used within other components."),t()()()()(),e(730,"h5",18),n(731,"***.module.ts"),t(),e(732,"textarea",10),n(733,`import {SpinnerModule} from '@qrsln/lootstrap-angular/Libs/Spinner';

@NgModule({
  imports: [SpinnerModule, /*...*/],
})
        `),t(),e(734,"p"),n(735," Need to assign "),e(736,"code"),n(737,"ViewContainerRef"),t(),n(738," first, for creating dynamic components through Service as below: "),e(739,"textarea",10),n(740,`constructor(private spinnerService: SpinnerService, private viewContainerRef: ViewContainerRef) {
  this.spinnerService.ViewContainerRef = viewContainerRef;
}
  `),t()()()(),e(741,"TabPane",12)(742,"div",13)(743,"h5",14),n(744,"Ng - Table"),t(),e(745,"div",15)(746,"table",19)(747,"thead")(748,"tr")(749,"th",17),n(750,"Params"),t(),e(751,"th",17),n(752,"Description"),t()()(),e(753,"tbody")(754,"tr")(755,"td")(756,"code"),n(757,"[test]"),t()(),e(758,"td"),n(759,"test."),t()()()()(),e(760,"h5",18),n(761,"***.module.ts"),t(),e(762,"textarea",10),n(763,`import {TableModule} from '@qrsln/lootstrap-angular/Libs/Table';

@NgModule({
  imports: [TableModule, /*...*/],
})
        `),t()()(),e(764,"TabPane",12)(765,"div",13)(766,"h5",14),n(767,"Ng - Tabs"),t(),e(768,"div",15)(769,"table",16)(770,"caption"),n(771,"Tabs"),t(),e(772,"thead")(773,"tr")(774,"th",17),n(775,"Params"),t(),e(776,"th",17),n(777,"Description"),t()()(),e(778,"tbody")(779,"tr")(780,"td")(781,"code"),n(782,"[Design]"),t()(),e(783,"td")(784,"code"),n(785,"Tab (default), Pill"),t(),n(786,"."),t()(),e(787,"tr")(788,"td")(789,"code"),n(790,"[ActiveTab]"),t()(),e(791,"td"),n(792,"Default value: "),e(793,"code"),n(794,"Fist tab"),t(),n(795,"."),t()(),e(796,"tr")(797,"td")(798,"code"),n(799,"[Vertical]"),t()(),e(800,"td"),n(801,"Default value: "),e(802,"code"),n(803,"false"),t(),n(804,"."),t()(),e(805,"tr")(806,"td")(807,"code"),n(808,"(OnChange)"),t()(),e(809,"td")(810,"code"),n(811,"Event Emitter"),t(),n(812,". Returns active "),e(813,"code"),n(814,"TabPane"),t(),n(815,"'s "),e(816,"code"),n(817,"[Label]"),t(),n(818,"."),t()()()()(),e(819,"div",15)(820,"table",16)(821,"caption"),n(822,"TabPane"),t(),e(823,"thead")(824,"tr")(825,"th",17),n(826,"Params"),t(),e(827,"th",17),n(828,"Description"),t()()(),e(829,"tbody")(830,"tr")(831,"td")(832,"code"),n(833,"[Label]"),t()(),e(834,"td"),n(835,"Tab title."),t()(),e(836,"tr")(837,"td")(838,"code"),n(839,"[Anim]"),t()(),e(840,"td")(841,"code"),n(842,"FadeIn, BounceIn, ZoomIn"),t(),n(843,"."),t()(),e(844,"tr")(845,"td")(846,"code"),n(847,"[Active]"),t()(),e(848,"td"),n(849,"Default value: "),e(850,"code"),n(851,"false"),t(),n(852,"."),t()(),e(853,"tr")(854,"td")(855,"code"),n(856,"[Disabled]"),t()(),e(857,"td"),n(858,"Default value: "),e(859,"code"),n(860,"false"),t(),n(861,"."),t()()()()(),e(862,"h5",18),n(863,"***.module.ts"),t(),e(864,"textarea",10),n(865,`import {TabsModule} from '@qrsln/lootstrap-angular/Libs/Tabs';

@NgModule({
  imports: [TabsModule, /*...*/],
})
        `),t()()(),e(866,"TabPane",12)(867,"div",13)(868,"h5",14),n(869,"Ng - TimeAgo"),t(),e(870,"div",15)(871,"table",16)(872,"caption"),n(873,"TimeAgoDirective"),t(),e(874,"thead")(875,"tr")(876,"th",17),n(877,"Params"),t(),e(878,"th",17),n(879,"Description"),t()()(),e(880,"tbody")(881,"tr")(882,"td")(883,"code"),n(884,"[Date]"),t()(),e(885,"td"),n(886,"Date."),t()(),e(887,"tr")(888,"td")(889,"code"),n(890,"[Locale]"),t()(),e(891,"td"),n(892,"Language code."),t()(),e(893,"tr")(894,"td")(895,"code"),n(896,"[Live]"),t()(),e(897,"td"),n(898,"Dynamically change. Default value: "),e(899,"code"),n(900,"false"),t(),n(901,"."),t()()()()(),e(902,"div",15)(903,"table",16)(904,"caption"),n(905,"TimeAgoPipe"),t(),e(906,"thead")(907,"tr")(908,"th",17),n(909,"Params"),t(),e(910,"th",17),n(911,"Description"),t()()(),e(912,"tbody")(913,"tr")(914,"td")(915,"code"),n(916,"[args[0]]"),t()(),e(917,"td")(918,"code"),n(919,"String"),t(),n(920," type as Locale value."),t()(),e(921,"tr")(922,"td")(923,"code"),n(924,"[args[1]]"),t()(),e(925,"td")(926,"code"),n(927,"boolean"),t(),n(928," type as Live value."),t()()()()(),e(929,"h5",18),n(930,"***.module.ts"),t(),e(931,"textarea",10),n(932,`import {TimeAgoModule} from '@qrsln/lootstrap-angular/Libs/TimeAgo';

@NgModule({
  imports: [TimeAgoModule, /*...*/],
})
        `),t()()(),e(933,"TabPane",12)(934,"div",13)(935,"h5",14),n(936,"Ng - Timeline"),t(),e(937,"div",15)(938,"table",16)(939,"caption"),n(940,"Timeline"),t(),e(941,"thead")(942,"tr")(943,"th",17),n(944,"Params"),t(),e(945,"th",17),n(946,"Description"),t()()(),e(947,"tbody")(948,"tr")(949,"td")(950,"code"),n(951,"[Anim]"),t()(),e(952,"td")(953,"code"),n(954,"'Shake' 'Rubber-band' 'Wobble' 'Jello' undefined"),t(),n(955,"."),t()(),e(956,"tr")(957,"td")(958,"code"),n(959,"[Layout]"),t()(),e(960,"td")(961,"code"),n(962,"'Side' 'Centered' 'Connected'"),t(),n(963,"."),t()()()()(),e(964,"div",15)(965,"table",16)(966,"caption"),n(967,"TimelineItem"),t(),e(968,"thead")(969,"tr")(970,"th",17),n(971,"Params"),t(),e(972,"th",17),n(973,"Description"),t()()(),e(974,"tbody")(975,"tr")(976,"td")(977,"code"),n(978,"[Inverted]"),t()(),e(979,"td"),n(980,"Default value: "),e(981,"code"),n(982,"false"),t(),n(983,"."),t()()()()(),e(984,"h5",18),n(985,"***.module.ts"),t(),e(986,"textarea",10),n(987,`import {TimelineModule} from '@qrsln/lootstrap-angular/Libs/Timeline';

@NgModule({
  imports: [TimelineModule, /*...*/],
})
        `),t()()(),e(988,"TabPane",12)(989,"div",13)(990,"h5",14),n(991,"Ng - Timer"),t(),e(992,"div",15)(993,"table",19)(994,"thead")(995,"tr")(996,"th",17),n(997,"Params"),t(),e(998,"th",17),n(999,"Description"),t()()(),e(1e3,"tbody")(1001,"tr")(1002,"td")(1003,"code"),n(1004,"[Date]"),t()(),e(1005,"td"),n(1006,"Date."),t()(),e(1007,"tr")(1008,"td")(1009,"code"),n(1010,"[ClassName]"),t()(),e(1011,"td"),n(1012,"Css class."),t()()()()(),e(1013,"h5",18),n(1014,"***.module.ts"),t(),e(1015,"textarea",10),n(1016,`import {TimerModule} from '@qrsln/lootstrap-angular/Libs/Timer';

@NgModule({
  imports: [TimerModule, /*...*/],
})
        `),t()()(),e(1017,"TabPane",12)(1018,"div",13)(1019,"h5",14),n(1020,"Ng - TreeView"),t(),e(1021,"h5",18),n(1022,"Properties"),t(),e(1023,"div",15)(1024,"table",19)(1025,"thead")(1026,"tr")(1027,"th",17),n(1028,"Params"),t(),e(1029,"th",17),n(1030,"Description"),t()()(),e(1031,"tbody")(1032,"tr")(1033,"td")(1034,"code"),n(1035,"[Mode]"),t()(),e(1036,"td")(1037,"code"),n(1038,"Single, Multiple"),t(),n(1039,"."),t()(),e(1040,"tr")(1041,"td")(1042,"code"),n(1043,"[Items]"),t()(),e(1044,"td"),n(1045,"Tree View items."),t()(),e(1046,"tr")(1047,"td")(1048,"code"),n(1049,"[Sort]"),t()(),e(1050,"td"),n(1051,"Sort the items. Default value: "),e(1052,"code"),n(1053,"false"),t(),n(1054,"."),t()(),e(1055,"tr")(1056,"td")(1057,"code"),n(1058,"[SelectedItems]"),t()(),e(1059,"td")(1060,"code"),n(1061,"EventEmitter"),t(),n(1062,", returns selected items."),t()()()()(),e(1063,"h5",18),n(1064,"***.module.ts"),t(),e(1065,"textarea",10),n(1066,`import {TreeViewModule} from '@qrsln/lootstrap-angular/Libs/TreeView';

@NgModule({
  imports: [TreeViewModule, /*...*/],
})
        `),t()()()()()),m&2&&(i(6),lt("href",o.Package.npm,C),i(),ye("src","",o.Package.Host,"npm/v/",o.Package.Name,"",o.Package.Style,"",C),i(),ye("src","",o.Package.Host,"bundlephobia/minzip/",o.Package.Name,"",o.Package.Style,"",C),i(2),ye("src","",o.Package.Host,"npm/dw/",o.Package.Name,"",o.Package.Style,"",C),i(),ye("src","",o.Package.Host,"npm/dm/",o.Package.Name,"",o.Package.Style,"",C),i(),ye("src","",o.Package.Host,"npm/dy/",o.Package.Name,"",o.Package.Style,"",C),i(),ye("src","",o.Package.Host,"npm/dt/",o.Package.Name,"",o.Package.Style,"",C),i(7),a("Lang","json"),i(2),a("Design","Pill")("routerLink","/Lootstrap-angular/Overview")("fragment",o.ActiveTab),i(),a("Label","Accordion")("Active",o.ActiveTab==="Accordion"),i(23),a("Lang","typescript"),i(2),a("Label","Avatar")("Active",o.ActiveTab==="Avatar"),i(103),a("Lang","typescript"),i(2),a("Label","Breadcrumb")("Active",o.ActiveTab==="Breadcrumb"),i(60),a("Lang","typescript"),i(4),a("Lang","typescript"),i(2),a("Label","Card")("Active",o.ActiveTab==="Card"),i(33),a("Lang","typescript"),i(2),a("Label","Carousel")("Active",o.ActiveTab==="Carousel"),i(90),a("Lang","typescript"),i(4),a("Lang","typescript"),i(2),a("Label","Dialog")("Active",o.ActiveTab==="Dialog"),i(52),a("innerHtml","Prompt (Content: DialogContent, Forced = false){...}",U),i(7),a("innerHtml","Redirect (Content: DialogContent, Href: string, Label: string, Forced = false){...}",U),i(4),a("Lang","typescript"),i(7),a("Lang","typescript"),i(2),a("Label","Notify")("Active",o.ActiveTab==="Notify"),i(80),a("Lang","html"),i(4),a("Lang","typescript"),i(2),a("Label","Pagination")("Active",o.ActiveTab==="Pagination"),i(85),a("Lang","typescript"),i(2),a("Label","Rating")("Active",o.ActiveTab==="Rating"),i(76),a("Lang","typescript"),i(2),a("Label","Spinner")("Active",o.ActiveTab==="Spinner"),i(59),a("Lang","typescript"),i(7),a("Lang","typescript"),i(2),a("Label","Table")("Active",o.ActiveTab==="Table"),i(21),a("Lang","typescript"),i(2),a("Label","Tabs")("Active",o.ActiveTab==="Tabs"),i(100),a("Lang","typescript"),i(2),a("Label","TimeAgo")("Active",o.ActiveTab==="TimeAgo"),i(65),a("Lang","typescript"),i(2),a("Label","Timeline")("Active",o.ActiveTab==="Timeline"),i(53),a("Lang","typescript"),i(2),a("Label","Timer")("Active",o.ActiveTab==="Timer"),i(27),a("Lang","typescript"),i(2),a("Label","TreeView")("Active",o.ActiveTab==="TreeView"),i(48),a("Lang","typescript"))},dependencies:[fe,E,I,_]});let r=d;return r})();function Ya(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t())}function Ja(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t(),e(6,"p"),n(7,"A simple and customizable accordion component."),t())}function Qa(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t(),e(6,"p"),n(7,"A simple and customizable accordion component."),t(),e(8,"p"),n(9,"A simple and customizable accordion component."),t())}function Xa(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t())}function Za(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t(),e(6,"p"),n(7,"A simple and customizable accordion component."),t())}function Ka(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t(),e(6,"p"),n(7,"A simple and customizable accordion component."),t(),e(8,"p"),n(9,"A simple and customizable accordion component."),t())}function er(r,d){r&1&&(e(0,"div",22)(1,"span"),n(2,"Custom Title"),t()())}function tr(r,d){r&1&&(e(0,"p"),n(1,"A simple and customizable accordion component."),t(),e(2,"p"),n(3,"A simple and customizable accordion component."),t(),e(4,"p"),n(5,"A simple and customizable accordion component."),t())}function nr(r,d){if(r&1){let l=N();e(0,"div",23),u("click",function(){let o=b(l).toggle;return y(o())}),e(1,"h6"),n(2," Custom Header "),e(3,"span"),n(4,"(with custom toggle button)"),t()(),e(5,"div",24),p(6,"i",25),t()()}}function ir(r,d){r&1&&(e(0,"div",26),n(1," This is a "),e(2,"strong"),n(3,"complete custom header"),t(),n(4," implementation. "),t())}var ci=(()=>{let d=class d{constructor(){this.collapsing=!0}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-accordion"]],decls:73,vars:25,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Form-check","Form-switch"],["type","checkbox","role","switch","id","Collapsing",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","Collapsing",1,"Form-check-label"],[1,"Body"],[1,"Row"],[1,"Col-12","Col-lg-6"],[3,"Collapsing"],["Title","Super simple Accordion"],["AccordionContent",""],["Title","Super simple Accordion",3,"Disabled"],[1,"Accordion-pure",3,"Collapsing"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],["AccordionTitle",""],["AccordionHeader",""],[1,"Flex","Space-x-2"],[1,"D-flex","Align-items-center","Justify-content-between","PX-2","Cursor-pointer",3,"click"],[1,"P-2","Accordion-toggle"],[1,"fa-solid","fa-caret-down"],[1,"P-4"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Accordion"),t(),e(3,"p",2)(4,"span",3),n(5,"Styled by"),t(),e(6,"a",4),n(7,"LS Accordion"),t()(),e(8,"h2",5),n(9,"Basic usage"),t(),e(10,"div",6)(11,"input",7),V("ngModelChange",function(g){return F(o.collapsing,g)||(o.collapsing=g),g}),t(),e(12,"label",8),n(13,"Collapsing"),t()(),e(14,"ExampleViewer")(15,"div",9)(16,"div",10)(17,"div",11)(18,"Accordion",12)(19,"AccordionItem",13),v(20,Ya,6,0,"ng-template",14),t(),e(21,"AccordionItem",15),v(22,Ja,8,0,"ng-template",14),t(),e(23,"AccordionItem",13),v(24,Qa,10,0,"ng-template",14),t()()(),e(25,"div",11)(26,"Accordion",16)(27,"AccordionItem",13),v(28,Xa,6,0,"ng-template",14),t(),e(29,"AccordionItem",15),v(30,Za,8,0,"ng-template",14),t(),e(31,"AccordionItem",13),v(32,Ka,10,0,"ng-template",14),t()()()()(),e(33,"Tabs",17)(34,"TabPane",18)(35,"textarea",19),n(36,`      <Accordion class="Accordion-pure" [Collapsing]="collapsing">
        <AccordionItem Title="Super simple Accordion">
          <ng-template AccordionContent>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
          </ng-template>
        </AccordionItem>
        <AccordionItem Title="Super simple Accordion" [Disabled]="true">
          <ng-template AccordionContent>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
          </ng-template>
        </AccordionItem>
        <AccordionItem Title="Super simple Accordion">
          <ng-template AccordionContent>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
          </ng-template>
        </AccordionItem>
      </Accordion>
        `),t()(),e(37,"TabPane",18)(38,"textarea",19),n(39,`.Accordion-pure{
  .Card {
    box-shadow: none;

    .Card-header {
      background-color: transparent !important;
    }
  }
}
        `),t()(),e(40,"TabPane",18)(41,"textarea",19),n(42,`  collapsing = true;
        `),t()()()(),e(43,"h2",5),n(44,"With Custom title"),t(),e(45,"ExampleViewer")(46,"div",9)(47,"Accordion",12)(48,"AccordionItem"),v(49,er,3,0,"ng-template",20)(50,tr,6,0,"ng-template",14),t()()(),e(51,"Tabs",17)(52,"TabPane",18)(53,"textarea",19),n(54,`      <Accordion [Collapsing]="true">
        <AccordionItem>
          <ng-template AccordionTitle>
            <div class="Flex Space-x-2">
              <span>Custom Title</span>
            </div>
          </ng-template>
          <ng-template AccordionContent>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
            <p>A simple and customizable accordion component.</p>
          </ng-template>
        </AccordionItem>
      </Accordion>
        `),t()(),e(55,"TabPane",18)(56,"textarea",19),n(57,`
        `),t()()()(),e(58,"h2",5),n(59,"With Custom Header"),t(),e(60,"ExampleViewer")(61,"div",9)(62,"Accordion",12)(63,"AccordionItem",13),v(64,nr,7,0,"ng-template",21)(65,ir,5,0,"ng-template",14),t()()(),e(66,"Tabs",17)(67,"TabPane",18)(68,"textarea",19),n(69,`      <Accordion [Collapsing]="collapsing">
        <AccordionItem Title="Super simple Accordion">
          <ng-template AccordionHeader let-toggle="toggle">
            <div class="D-flex Align-items-center Justify-content-between PX-2 Cursor-pointer" (click)="toggle()">
              <h6>
                Custom Header <span>(with custom toggle button)</span>
              </h6>
              <div class="P-2 Accordion-toggle">
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </ng-template>
          <ng-template AccordionContent>
            <div class="P-4">
              This is a <strong>complete custom header</strong> implementation.
            </div>
          </ng-template>
        </AccordionItem>
      </Accordion>
        `),t()(),e(70,"TabPane",18)(71,"textarea",19),n(72,`
        `),t()()()()()),m&2&&(i(6),a("href","https://krsln.github.io/Lootstrap/Components/Accordion",C),i(5),B("ngModel",o.collapsing),i(7),a("Collapsing",o.collapsing),i(3),a("Disabled",!0),i(5),a("Collapsing",o.collapsing),i(3),a("Disabled",!0),i(4),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","SCSS"),i(),a("Lang","scss"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(6),a("Collapsing",!0),i(4),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(6),a("Collapsing",o.collapsing),i(4),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[Xe,se,me,mt,dt,ct,Ln,pt,E,I,w,_],styles:[`.Accordion-pure .Card{box-shadow:none}.Accordion-pure .Card .Card-header{background-color:transparent}
`],encapsulation:2});let r=d;return r})();var Tt=(()=>{let d=class d{constructor(){this.Images=[]}ngOnInit(){this.Images=Array.from({length:10},(s,m)=>"https://i.pravatar.cc/"+(400+m*20))}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-avatar"]],decls:178,vars:86,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"D-flex","Justify-content-center"],[1,"W-25","W-lg-15",3,"Img","Alt"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"Body","Text-center"],[1,"W-25","W-lg-15",3,"Letter","BgColor"],[1,"W-25","W-lg-15",3,"Letter","BgColor","Alt"],[1,"W-10","Fg-white",3,"BgColor"],[1,"fa-solid","fa-bars"],[1,"W-10","Fg-primary"],[1,"fa-solid","fa-code"],[1,"W-10",3,"BgColor","Border"],[1,"fa-solid","fa-download"],[1,"W-20",3,"Img"],[1,"W-10",3,"Img"],[2,"width","5%",3,"Img"],[1,"W-15",3,"Img"],[1,"W-15",3,"Variant","Img"],[1,"W-15",3,"Badge","Img"],[1,"W-15",3,"Badge","Anchor","Variant","Img"],[1,"W-15",3,"Badge","Online","Variant","Img"],[1,"W-15",3,"BgColor"],[1,"W-15",3,"BgColor","Border"],[1,"MT-5","Border-bottom"],[1,"W-100","W-lg-40",3,"ImgList"],[1,"W-100","W-lg-40",3,"ImgList","Reversed"],[1,"W-100","W-lg-40",3,"ImgList","More"],[1,"W-100","W-lg-40",3,"ImgList","More","Reversed"],[1,"Row","G-1"],[1,"Col-12","Col-lg-3","Border","PX-4",3,"ImgList"],[1,"Col-12","Col-lg-4","Border","PX-4",3,"ImgList"],[1,"Col-12","Col-lg-5","Border","PX-4",3,"ImgList"],[1,"Col-12","Col-lg-3","Border","PX-4",3,"ImgList","Reversed"],[1,"Col-12","Col-lg-4","Border","PX-4",3,"ImgList","Reversed"],[1,"Col-12","Col-lg-5","Border","PX-4",3,"ImgList","Reversed"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Avatar"),t(),e(3,"p"),n(4," Avatars are found throughout material design with uses in everything from tables to dialog menus. "),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Avatar"),t()(),e(10,"h2",5),n(11,"Types"),t(),e(12,"h4",5),n(13,"Image avatars"),t(),e(14,"p"),n(15,"Image avatars can be created by passing standard "),e(16,"code"),n(17,"Img"),t(),n(18," props to the component."),t(),e(19,"ExampleViewer")(20,"div",6)(21,"div",7),p(22,"Avatar",8)(23,"Avatar",8),t()(),e(24,"Tabs",9)(25,"TabPane",10)(26,"textarea",11),n(27,`    <div class="D-flex Justify-content-center">
      <Avatar class="W-25 W-lg-15" [Img]="'https://i.pravatar.cc/500'" [Alt]="'John Doe'"></Avatar>
      <Avatar class="W-25 W-lg-15" [Img]="'https://i.pravatar.cc/525'" [Alt]="'Jane Doe'"></Avatar>
    </div>
        `),t()()()(),e(28,"h4",5),n(29,"Letter avatars"),t(),e(30,"p"),n(31,"Avatars containing simple characters."),t(),e(32,"ExampleViewer")(33,"div",12)(34,"div",7),p(35,"Avatar",13)(36,"Avatar",14)(37,"Avatar",14),t()(),e(38,"Tabs",9)(39,"TabPane",10)(40,"textarea",11),n(41,`    <div class="D-flex Justify-content-center">
      <Avatar class="W-25 W-lg-15" [Letter]="'I'" [BgColor]="'#25C0F4'"></Avatar>
      <Avatar class="W-25 W-lg-15" [Letter]="'AM'" [BgColor]="'pink'" [Alt]="'AM I?'"></Avatar>
      <Avatar class="W-25 W-lg-15" [Letter]="'NOT'" [BgColor]="'teal'" [Alt]="'Not at all!!'"></Avatar>
    </div>
        `),t()()()(),e(42,"h4",5),n(43,"Icon avatars"),t(),e(44,"p"),n(45," Icon avatars are created by passing an icon as "),e(46,"code"),n(47,"children"),t(),n(48,". "),t(),e(49,"ExampleViewer")(50,"div",12)(51,"div",7)(52,"Avatar",15),p(53,"i",16),t(),e(54,"Avatar",17),p(55,"i",18),t(),e(56,"Avatar",19),p(57,"i",20),t()()(),e(58,"Tabs",9)(59,"TabPane",10)(60,"textarea",11),n(61,`    <div class="D-flex Justify-content-center">
      <Avatar class="W-10 Fg-white" [BgColor]="'#25C0F4'"><i class="fa-solid fa-bars"></i></Avatar>
      <Avatar class="W-10 Fg-primary"><i class="fa-solid fa-code"></i></Avatar>
      <Avatar class="W-10" [BgColor]="'rgba(0,0,0,.1)'" [Border]="false"><i class="fa-solid fa-download"></i></Avatar>
    </div>
        `),t()()()(),e(62,"h2",5),n(63,"Sizes"),t(),e(64,"p"),n(65,"You can change the size of the avatar with the "),e(66,"code"),n(67,"Css Classes"),t(),n(68," or "),e(69,"code"),n(70,"height"),t(),n(71," and "),e(72,"code"),n(73,"width"),t(),n(74," CSS properties."),t(),e(75,"ExampleViewer")(76,"div",12)(77,"div",7),p(78,"Avatar",21)(79,"Avatar",22)(80,"Avatar",23),t()(),e(81,"Tabs",9)(82,"TabPane",10)(83,"textarea",11),n(84,`    <div class="D-flex Justify-content-center">
      <Avatar class="W-20" [Img]="'https://i.pravatar.cc/500'"></Avatar>
      <Avatar class="W-10" [Img]="'https://i.pravatar.cc/500'"></Avatar>
      <Avatar style="width: 5%;" [Img]="'https://i.pravatar.cc/500'"></Avatar>
    </div>
        `),t()()()(),e(85,"h2",5),n(86,"Variants"),t(),e(87,"p"),n(88,"If you need square or rounded avatars, use the "),e(89,"code"),n(90,"Variant"),t(),n(91," prop."),t(),e(92,"ExampleViewer")(93,"div",12)(94,"div",7),p(95,"Avatar",24)(96,"Avatar",25)(97,"Avatar",25),t()(),e(98,"Tabs",9)(99,"TabPane",10)(100,"textarea",11),n(101,`    <div class="D-flex Justify-content-center">
      <Avatar class="W-15" [Img]="'https://i.pravatar.cc/500'"></Avatar>
      <Avatar class="W-15" [Variant]="'Rounded'" [Img]="'https://i.pravatar.cc/500'"></Avatar>
      <Avatar class="W-15" [Variant]="'Square'" [Img]="'https://i.pravatar.cc/500'"></Avatar>
    </div>
        `),t()()()(),e(102,"h4",5),n(103,"With badge"),t(),e(104,"ExampleViewer")(105,"div",12)(106,"div",7),p(107,"Avatar",26)(108,"Avatar",27)(109,"Avatar",28),t()(),e(110,"Tabs",9)(111,"TabPane",10)(112,"textarea",11),n(113,`      <div class="D-flex Justify-content-center">
        <Avatar class="W-15" [Badge]="true" [Img]="'https://i.pravatar.cc/500'"></Avatar>
        <Avatar class="W-15" [Badge]="true" [Anchor]="'Top'" [Variant]="'Rounded'"
                [Img]="'https://i.pravatar.cc/500'"></Avatar>
        <Avatar class="W-15" [Badge]="true" [Online]="true" [Variant]="'Square'"
                [Img]="'https://i.pravatar.cc/500'"></Avatar>
      </div>
        `),t()()()(),e(114,"h4",5),n(115,"Inner Border"),t(),e(116,"ExampleViewer")(117,"div",12)(118,"div",7),p(119,"Avatar",29)(120,"Avatar",30),t()(),e(121,"Tabs",9)(122,"TabPane",10)(123,"textarea",11),n(124,`    <div class="D-flex Justify-content-center">
      <Avatar class="W-15" [BgColor]="'#25C0F4'"></Avatar>
      <Avatar class="W-15" [BgColor]="'#25C0F4'" [Border]="false"></Avatar>
    </div>
        `),t()()()(),e(125,"h2",31),n(126,"Grouped"),t(),e(127,"h4",5),n(128,"Avatar Group"),t(),e(129,"p")(130,"code"),n(131,"AvatarGroup"),t(),n(132," renders its children as a stack after 3th. Use "),e(133,"code"),n(134,"Reversed"),t(),n(135," prop for reversed group. "),t(),e(136,"ExampleViewer")(137,"div",12)(138,"div",7),p(139,"AvatarGroup",32)(140,"AvatarGroup",33),t()(),e(141,"Tabs",9)(142,"TabPane",10)(143,"textarea",11),n(144,`    <div class="D-flex Justify-content-center">
      <AvatarGroup class="W-100 W-lg-40" [ImgList]="Images"></AvatarGroup>
      <AvatarGroup class="W-100 W-lg-40" [ImgList]="Images" [Reversed]="true"></AvatarGroup>
    </div>
        `),t()(),e(145,"TabPane",10)(146,"textarea",11),n(147,`Images: string[] = [];

ngOnInit(): void {
  this.Images = Array.from({length: 10}, (_, i) => 'https://i.pravatar.cc/' + (400 + (i*7)));
}
        `),t()()()(),e(148,"p"),n(149,"Use the "),e(150,"code"),n(151,"More"),t(),n(152," prop to show counts."),t(),e(153,"ExampleViewer")(154,"div",12)(155,"div",7),p(156,"AvatarGroup",34)(157,"AvatarGroup",35),t()(),e(158,"Tabs",9)(159,"TabPane",10)(160,"textarea",11),n(161,`    <div class="D-flex Justify-content-center">
      <AvatarGroup class="W-100 W-lg-40" [ImgList]="Images" [More]="true"></AvatarGroup>
      <AvatarGroup class="W-100 W-lg-40" [ImgList]="Images" [More]="true" [Reversed]="true"></AvatarGroup>
    </div>
        `),t()()()(),e(162,"p"),n(163,"Fixed up to 4th images."),t(),e(164,"ExampleViewer")(165,"div",12)(166,"div",36),p(167,"AvatarGroup",37)(168,"AvatarGroup",38)(169,"AvatarGroup",39),t(),e(170,"div",36),p(171,"AvatarGroup",40)(172,"AvatarGroup",41)(173,"AvatarGroup",42),t()(),e(174,"Tabs",9)(175,"TabPane",10)(176,"textarea",11),n(177,`    <div class="Row G-1">
      <AvatarGroup class="Col-12 Col-lg-3 Border PX-4" [ImgList]="Images.slice(0,2)"></AvatarGroup>
      <AvatarGroup class="Col-12 Col-lg-4 Border PX-4" [ImgList]="Images.slice(0,3)"></AvatarGroup>
      <AvatarGroup class="Col-12 Col-lg-5 Border PX-4" [ImgList]="Images.slice(0,4)"></AvatarGroup>
    </div>
    <div class="Row G-1">
      <AvatarGroup class="Col-12 Col-lg-3 Border PX-4" [ImgList]="Images.slice(0,2)" [Reversed]="true"></AvatarGroup>
      <AvatarGroup class="Col-12 Col-lg-4 Border PX-4" [ImgList]="Images.slice(0,3)" [Reversed]="true"></AvatarGroup>
      <AvatarGroup class="Col-12 Col-lg-5 Border PX-4" [ImgList]="Images.slice(0,4)" [Reversed]="true"></AvatarGroup>
    </div>
        `),t()()()()()),m&2&&(i(8),a("href","https://krsln.github.io/Lootstrap/Components/Avatar",C),i(14),a("Img","https://i.pravatar.cc/500")("Alt","John Doe"),i(),a("Img","https://i.pravatar.cc/525")("Alt","Jane Doe"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(9),a("Letter","I")("BgColor","#25C0F4"),i(),a("Letter","AM")("BgColor","pink")("Alt","AM I?"),i(),a("Letter","NOT")("BgColor","teal")("Alt","Not at all!!"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("BgColor","#25C0F4"),i(4),a("BgColor","rgba(0,0,0,.1)")("Border",!1),i(2),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(18),a("Img","https://i.pravatar.cc/500"),i(),a("Img","https://i.pravatar.cc/500"),i(),a("Img","https://i.pravatar.cc/500"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("Img","https://i.pravatar.cc/500"),i(),a("Variant","Rounded")("Img","https://i.pravatar.cc/500"),i(),a("Variant","Square")("Img","https://i.pravatar.cc/500"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(7),a("Badge",!0)("Img","https://i.pravatar.cc/500"),i(),a("Badge",!0)("Anchor","Top")("Variant","Rounded")("Img","https://i.pravatar.cc/500"),i(),a("Badge",!0)("Online",!0)("Variant","Square")("Img","https://i.pravatar.cc/500"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(7),a("BgColor","#25C0F4"),i(),a("BgColor","#25C0F4")("Border",!1),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(16),a("ImgList",o.Images),i(),a("ImgList",o.Images)("Reversed",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TS"),i(),a("Lang","typescript"),i(10),a("ImgList",o.Images)("More",!0),i(),a("ImgList",o.Images)("More",!0)("Reversed",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(7),a("ImgList",o.Images.slice(0,2)),i(),a("ImgList",o.Images.slice(0,3)),i(),a("ImgList",o.Images.slice(0,4)),i(2),a("ImgList",o.Images.slice(0,2))("Reversed",!0),i(),a("ImgList",o.Images.slice(0,3))("Reversed",!0),i(),a("ImgList",o.Images.slice(0,4))("Reversed",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"))},dependencies:[tt,Nn,E,I,w,_]});let r=d;return r})();var It=(()=>{let d=class d{constructor(){this.Root={FaIcon:"fa-solid fa-house-chimney",Href:"/"},this.Items=[{Label:"Avatar",Href:"/LootstrapNg"},{Label:"Google",Href:"https://www.google.com",External:!0,FaIcon:"fa-solid fa-arrow-up-right-from-square"},{Label:"Breadcrumb"}]}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-breadcrumb"]],decls:109,vars:50,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[3,"Root"],[3,"Root","Items"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Root","Items","Letter"],[1,"Body","Text-center"],[2,"--ls-breadcrumb-divider","url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPjxwYXRoIGQ9J00yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eicgZmlsbD0nY3VycmVudENvbG9yJy8+PC9zdmc+')",3,"Root","Items"],[3,"Root","Items","Chevron"],[3,"Autoload"],[3,"Root","Autoload","Chevron"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Breadcrumbs"),t(),e(3,"p"),n(4," Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS. "),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Breadcrumb"),t()(),e(10,"h2",5),n(11,"Basic usage"),t(),e(12,"p"),n(13," Use an ordered or unordered list with linked list items to create a minimally styled Breadcrumb. Use our utilities to add additional styles as desired. "),t(),e(14,"ExampleViewer")(15,"div",6),p(16,"Breadcrumb",7)(17,"Breadcrumb",8),t(),e(18,"Tabs",9)(19,"TabPane",10)(20,"textarea",11),n(21,`  <Breadcrumb [Root]="Root"></Breadcrumb>
  <Breadcrumb [Root]="Root" [Items]="Items"></Breadcrumb>
        `),t()()()(),e(22,"h2",5),n(23,"Features"),t(),e(24,"h4",5),n(25,"Changing the dividers"),t(),e(26,"p"),n(27," Dividers can be changed by modifying the "),e(28,"code"),n(29,"[Letter]"),t(),n(30," prop. "),t(),e(31,"ExampleViewer")(32,"div",6),p(33,"Breadcrumb",12)(34,"Breadcrumb",12),t(),e(35,"Tabs",9)(36,"TabPane",10)(37,"textarea",11),n(38,`  <Breadcrumb [Root]="Root" [Items]="Items" [Letter]="'>'"></Breadcrumb>
  <Breadcrumb [Root]="Root" [Items]="Items" [Letter]="'~'"></Breadcrumb>
        `),t()(),e(39,"TabPane",10)(40,"textarea",11),n(41,`  Root = {FaIcon: 'fa-solid fa-house-chimney', Href: '/'} as BreadcrumbItem;
  Items = [
    {Label: 'Avatar', Href: '/LootstrapNg'},
    {Label: 'Google', Href: 'https://www.google.com', External: true, FaIcon: 'fa-solid fa-arrow-up-right-from-square'},
    {Label: 'Breadcrumb'},
  ] as BreadcrumbItem[];
        `),t()()()(),e(42,"p"),n(43," You can also remove the divider setting "),e(44,"code"),n(45,`[Letter]="' '"`),t(),n(46,". "),t(),e(47,"ExampleViewer")(48,"div",13),p(49,"Breadcrumb",12),t(),e(50,"Tabs",9)(51,"TabPane",10)(52,"textarea",11),n(53,`    <Breadcrumb [Root]="Root" [Items]="Items" [Letter]="' '"></Breadcrumb>
        `),t()()()(),e(54,"p"),n(55,"It\u2019s also possible to use an "),e(56,"strong"),n(57,"embedded SVG icon"),t(),n(58,":"),t(),e(59,"ExampleViewer")(60,"div",13),p(61,"Breadcrumb",14),t(),e(62,"Tabs",9)(63,"TabPane",10)(64,"textarea",11),n(65,`    <Breadcrumb [Root]="Root" [Items]="Items"
                style="--ls-breadcrumb-divider: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPjxwYXRoIGQ9J00yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eicgZmlsbD0nY3VycmVudENvbG9yJy8+PC9zdmc+');"></Breadcrumb>
        `),t()()()(),e(66,"h4",5),n(67,"Breadcrumb preset!"),t(),e(68,"p"),n(69," With border, shadow and thicker padding breadcrumb version. Use "),e(70,"code"),n(71,"[Chevron]"),t(),n(72," prop, followed by one of the contextual type "),e(73,"code"),n(74,"Regular"),t(),n(75,", "),e(76,"code"),n(77,"Larger"),t(),n(78," or "),e(79,"code"),n(80,"Vertical"),t(),n(81," to use this style. "),t(),e(82,"ExampleViewer")(83,"div",13),p(84,"Breadcrumb",15)(85,"Breadcrumb",15)(86,"Breadcrumb",15),t(),e(87,"Tabs",9)(88,"TabPane",10)(89,"textarea",11),n(90,`    <Breadcrumb [Root]="Root" [Items]="Items" [Chevron]="'Regular'"></Breadcrumb>
    <Breadcrumb [Root]="Root" [Items]="Items" [Chevron]="'Larger'"></Breadcrumb>
    <Breadcrumb [Root]="Root" [Items]="Items" [Chevron]="'Vertical'"></Breadcrumb>
        `),t()()()(),e(91,"h4",5),n(92,"Autoload"),t(),e(93,"p"),n(94,"Can automatically retrieve custom data from current route ("),e(95,"code"),n(96,"data['breadcrumb']"),t(),n(97,")."),t(),e(98,"ExampleViewer")(99,"div",6),p(100,"Breadcrumb",16)(101,"Breadcrumb",17),t(),e(102,"Tabs",9)(103,"TabPane",10)(104,"textarea",11),n(105,`  <Breadcrumb [Autoload]="true"></Breadcrumb>
  <Breadcrumb [Root]="Root" [Autoload]="true" [Chevron]="'Larger'"></Breadcrumb>
        `),t()(),e(106,"TabPane",10)(107,"textarea",11),n(108,`  // AppRoutingModule
  const routes: Routes = [
  {
    path: 'LootstrapNg', component: LayoutComponent,
    loadChildren: () => import('./Modules/LootStrapNg/loot-strap-ng.module').then(mod => mod.LootStrapNgModule)
  },
    ...
  ];

  // LootStrapNgRoutingModule
  const routes: Routes = [
  {path: '', redirectTo: 'Avatar'},
  {
    path: '',
    children: [
      {
        path: '', data: {breadcrumb: 'LootstrapNg'}, component: LootstrapNgMainComponent, children: [
          {path: 'Avatar', data: {breadcrumb: 'Avatar'}, component: NgAvatarComponent},
          {path: 'Breadcrumb', data: {breadcrumb: 'Breadcrumb'}, component: NgBreadcrumbComponent},
          {path: 'Card', data: {breadcrumb: 'Card'}, component: NgCardComponent},
          {path: 'Carousel', data: {breadcrumb: 'Carousel'}, component: NgCarouselComponent},
          {path: 'Pagination', data: {breadcrumb: 'Pagination'}, component: NgPaginationComponent},
          {path: 'Rating', data: {breadcrumb: 'Rating'}, component: NgRatingComponent},
          {path: 'Tabs', data: {breadcrumb: 'Tabs'}, component: NgTabsComponent},
          {path: 'Time', data: {breadcrumb: 'Time'}, component: NgTimeComponent},
          {path: 'Timeline', data: {breadcrumb: 'Timeline'}, component: NgTimelineComponent},
        ]
      }
    ]
  }];
        `),t()()()()()),m&2&&(i(8),a("href","https://krsln.github.io/Lootstrap/Components/Breadcrumb",C),i(8),a("Root",o.Root),i(),a("Root",o.Root)("Items",o.Items),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(13),a("Root",o.Root)("Items",o.Items)("Letter",">"),i(),a("Root",o.Root)("Items",o.Items)("Letter","~"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(9),a("Root",o.Root)("Items",o.Items)("Letter"," "),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(9),a("Root",o.Root)("Items",o.Items),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(20),a("Root",o.Root)("Items",o.Items)("Chevron","Regular"),i(),a("Root",o.Root)("Items",o.Items)("Chevron","Larger"),i(),a("Root",o.Root)("Items",o.Items)("Chevron","Vertical"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Autoload",!0),i(),a("Root",o.Root)("Autoload",!0)("Chevron","Larger"),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[pn,E,I,w,_]});let r=d;return r})();var Et=(()=>{let d=class d{constructor(){}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-card"]],decls:98,vars:25,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"Row","G-1"],[1,"Col-12","Col-lg-5"],[1,"Card-img"],[3,"Dummy","Captions","NavigationIndicators"],[1,"Border-bottom"],[1,"Badge","Bg-light","Fg-dark"],[1,"D-flex","Align-items-center"],[1,"Btn","Btn-outline-dark","MS-auto"],[1,"Col-12","Col-lg-4"],[1,"Col-12","Col-lg-3"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Orientation"],[1,"Btn-close","F-purple"],[1,"Btn-close","F-red"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Card"),t(),e(3,"p",2)(4,"span",3),n(5,"Styled by"),t(),e(6,"a",4),n(7,"LS Cards"),t()(),e(8,"h2",5),n(9,"Orientations"),t(),e(10,"h4",5),n(11,"Vertical (default)"),t(),e(12,"ExampleViewer")(13,"div",6)(14,"div",7)(15,"div",8)(16,"Card")(17,"div",9),p(18,"Carousel",10),t(),e(19,"h5",11),n(20,"Title"),t(),e(21,"p"),n(22," Some quick example text to build on the card title and make up the bulk of the card's content. "),e(23,"span",12),n(24,"2021-07-21 - 2021-07-30"),t()(),e(25,"div",13)(26,"em"),n(27),t(),e(28,"button",14),n(29,"More..."),t()()()(),e(30,"div",15)(31,"Card")(32,"div",9),p(33,"Carousel",10),t(),e(34,"h5",11),n(35,"Title"),t(),e(36,"p"),n(37," Some quick example text to build on the card title and make up the bulk of the card's content. "),e(38,"span",12),n(39,"2021-07-21 - 2021-07-30"),t()(),e(40,"div",13)(41,"em"),n(42),t(),e(43,"button",14),n(44,"More..."),t()()()(),e(45,"div",16)(46,"Card")(47,"h5",11),n(48,"Title"),t(),e(49,"p"),n(50," Some quick example text to build on the card title and make up the bulk of the card's content. "),e(51,"span",12),n(52,"2021-07-21 - 2021-07-30"),t()(),e(53,"div",13)(54,"em"),n(55),t(),e(56,"button",14),n(57,"More..."),t()()()()()(),e(58,"Tabs",17)(59,"TabPane",18)(60,"textarea",19),n(61),t()()()(),e(62,"h4",5),n(63,"Horizontal"),t(),e(64,"ExampleViewer")(65,"div",6)(66,"Card",20)(67,"div",9),p(68,"Carousel",10),t(),e(69,"h5",11),n(70,"Title"),t(),e(71,"p"),n(72," Some quick example text to build on the card title and make up the bulk of the card's content. "),e(73,"span",12),n(74,"2021-07-21 - 2021-07-30"),t()(),e(75,"div",13)(76,"em"),n(77),t(),e(78,"button",14),n(79,"More..."),t()(),p(80,"button",21),t(),e(81,"Card",20)(82,"h5",11),n(83,"Title"),t(),e(84,"p"),n(85," Some quick example text to build on the card title and make up the bulk of the card's content. "),e(86,"span",12),n(87,"2021-07-21 - 2021-07-30"),t()(),e(88,"div",13)(89,"em"),n(90),t(),e(91,"button",14),n(92,"More..."),t()(),p(93,"button",22),t()(),e(94,"Tabs",17)(95,"TabPane",18)(96,"textarea",19),n(97),t()()()()()),m&2&&(i(6),a("href","https://krsln.github.io/Lootstrap/Components/Card",C),i(12),a("Dummy",!0)("Captions",!1)("NavigationIndicators",!1),i(9),A("",556.5.toFixed(2),"$"),i(6),a("Dummy",!0)("Captions",!1)("NavigationIndicators",!1),i(9),A("",556.5.toFixed(2),"$"),i(13),A("",556.5.toFixed(2),"$"),i(3),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(),A(`    <Card>
      <div class="Card-img">
        <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
      </div>
      <h5 class="Border-bottom">Title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        <span class="Badge Bg-light Fg-dark">2021-07-21 - 2021-07-30</span>
      </p>
      <div class="D-flex Align-items-center">
        <em>`,556.5.toFixed(2),`$</em>
        <button class="Btn Btn-outline-dark MS-auto">More...</button>
      </div>
    </Card>
        `),i(5),a("Orientation","Horizontal"),i(2),a("Dummy",!0)("Captions",!1)("NavigationIndicators",!1),i(9),A("",556.5.toFixed(2),"$"),i(4),a("Orientation","Horizontal"),i(9),A("",556.5.toFixed(2),"$"),i(4),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(),A(`    <Card [Orientation]="'Horizontal'">
      <div class="Card-img">
        <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
      </div>
      <h5 class="Border-bottom">Title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        <span class="Badge Bg-light Fg-dark">2021-07-21 - 2021-07-30</span>
      </p>
      <div class="D-flex Align-items-center">
        <em>`,556.5.toFixed(2),`$</em>
        <button class="Btn Btn-outline-dark MS-auto">More...</button>
      </div>
        <button class="Btn-close F-purple"></button>
    </Card>
        `))},dependencies:[nt,ke,E,I,w,_]});let r=d;return r})();var _t=(()=>{let d=class d{constructor(){this.Interval=3e3,this.Captions=!0,this.Arrows=!0,this.Indicators=!0,this.PauseOnHover=!1,this.Dark=!1}ngOnInit(){this.LoadImages()}LoadImages(){this.Images=[],[0,2,4,6,8,10].forEach((s,m)=>this.Images.push({Caption:"Caption "+s.toString(),Description:"Description Description "+s.toString(),Src:`https://source.unsplash.com/random/${960+s}x${400+s/2}?sig=${m}`}))}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-carousel"]],decls:106,vars:75,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"Row","MY-2"],[1,"Col-12","Col-lg-12"],["for","Interval",1,"Form-label"],["type","number","step","1000","id","Interval",1,"Form-control","Form-control-sm",3,"ngModel","ngModelChange"],[1,"Form-switch","Form-check","Form-check-inline"],["type","checkbox","id","PauseOnHover",1,"Form-check-input",3,"checked","change"],["for","PauseOnHover",1,"Form-check-label"],["type","checkbox","id","Captions",1,"Form-check-input",3,"checked","change"],["for","Captions",1,"Form-check-label"],["type","checkbox","id","Arrows",1,"Form-check-input",3,"checked","change"],["for","Arrows",1,"Form-check-label"],["type","checkbox","id","Indicators",1,"Form-check-input",3,"checked","change"],["for","Indicators",1,"Form-check-label"],[1,"Row"],[3,"Images","Stats","Captions","NavigationArrows","NavigationIndicators","Interval","PauseOnHover"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Images","Interval","PauseOnHover","Captions","NavigationArrows","NavigationIndicators"],[3,"Images","Interval","PauseOnHover","Rounded","Shadow","Captions","NavigationArrows","NavigationIndicators"],[3,"Images","Interval","PauseOnHover","Dark","Captions","NavigationArrows","NavigationIndicators"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Carousel"),t(),e(3,"p"),n(4," A slideshow component for cycling through elements\u2014images or slides of text\u2014like a Carousel. "),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Carousel"),t()(),e(10,"h2",5),n(11,"Basic examples"),t(),e(12,"ExampleViewer")(13,"div",6)(14,"div",7)(15,"div",8)(16,"label",9),n(17,"Interval"),t(),e(18,"input",10),V("ngModelChange",function(g){return F(o.Interval,g)||(o.Interval=g),g}),t()(),e(19,"div",8)(20,"div",11)(21,"input",12),u("change",function(){return o.PauseOnHover=!o.PauseOnHover}),t(),e(22,"label",13),n(23,"PauseOnHover"),t()(),e(24,"div",11)(25,"input",14),u("change",function(){return o.Captions=!o.Captions}),t(),e(26,"label",15),n(27,"Captions"),t()(),e(28,"div",11)(29,"input",16),u("change",function(){return o.Arrows=!o.Arrows}),t(),e(30,"label",17),n(31,"Arrows"),t()(),e(32,"div",11)(33,"input",18),u("change",function(){return o.Indicators=!o.Indicators}),t(),e(34,"label",19),n(35,"Indicators"),t()()()(),e(36,"div",20)(37,"div",8),p(38,"Carousel",21),t()()(),e(39,"Tabs",22)(40,"TabPane",23)(41,"textarea",24),n(42,`    <Carousel [Images]="Images" [Stats]="true"
              [Captions]="Captions" [NavigationArrows]="Arrows" [NavigationIndicators]="Indicators"
              [Interval]="Interval" [PauseOnHover]="PauseOnHover"></Carousel>

    <!-- With dummy images for the test purpose -->
    <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
        `),t()(),e(43,"TabPane",23)(44,"textarea",24),n(45,`  Images!: CarouselItem[];

  Interval = 3000;
  Captions = true;
  Arrows = true;
  Indicators = true;
  PauseOnHover = false;

  ngOnInit(): void {
    this.Images = [];

    [0, 2, 4, 6, 8, 10].forEach((item, index) => this.Images.push({
      Caption: 'Caption ' + item.toString(),
      Description: 'Description Description ' + item.toString(),
      Src: \`https://source.unsplash.com/random/\${960 + item}x\${400 + item / 2}?sig=\${index}\`
      // Src: \`https://picsum.photos/600/400/?image=\${item}\`
    } as CarouselItem));
  }
        `),t()()()(),e(46,"h2",5),n(47,"Variations"),t(),e(48,"h4",5),n(49,"Slides only"),t(),e(50,"ExampleViewer")(51,"div",6),p(52,"Carousel",25),t(),e(53,"Tabs",22)(54,"TabPane",23)(55,"textarea",24),n(56,`      <Carousel [Images]="Images" [Interval]="3000" [PauseOnHover]="true"
                [Captions]="false" [NavigationArrows]="false" [NavigationIndicators]="false"></Carousel>
        `),t()()()(),e(57,"h4",5),n(58,"With controls"),t(),e(59,"p"),n(60," Adding in the previous and next controls: "),t(),e(61,"ExampleViewer")(62,"div",6),p(63,"Carousel",25),t(),e(64,"Tabs",22)(65,"TabPane",23)(66,"textarea",24),n(67,`    <Carousel [Images]="Images" [Interval]="3000" [PauseOnHover]="true"
              [Captions]="false" [NavigationArrows]="true" [NavigationIndicators]="false"></Carousel>
        `),t()()()(),e(68,"h4",5),n(69,"With indicators"),t(),e(70,"p"),n(71," You can also add the indicators to the Carousel, alongside the controls, too. "),t(),e(72,"ExampleViewer")(73,"div",6),p(74,"Carousel",25),t(),e(75,"Tabs",22)(76,"TabPane",23)(77,"textarea",24),n(78,`    <Carousel [Images]="Images" [Interval]="3000" [PauseOnHover]="true"
              [Captions]="false" [NavigationArrows]="true" [NavigationIndicators]="true"></Carousel>
        `),t()()()(),e(79,"h4",5),n(80,"With captions"),t(),e(81,"ExampleViewer")(82,"div",6),p(83,"Carousel",25),t(),e(84,"Tabs",22)(85,"TabPane",23)(86,"textarea",24),n(87,`    <Carousel [Images]="Images" [Interval]="3000" [PauseOnHover]="true"
              [Captions]="true" [NavigationArrows]="true" [NavigationIndicators]="true"></Carousel>
        `),t()()()(),e(88,"h4",5),n(89,"Material style"),t(),e(90,"ExampleViewer")(91,"div",6),p(92,"Carousel",26),t(),e(93,"Tabs",22)(94,"TabPane",23)(95,"textarea",24),n(96,`    <Carousel [Images]="Images" [Interval]="3000" [PauseOnHover]="true"
              [Rounded]="true" [Shadow]="true"
              [Captions]="true" [NavigationArrows]="true" [NavigationIndicators]="true"></Carousel>
        `),t()()()(),e(97,"h4",5),n(98,"Dark variant"),t(),e(99,"ExampleViewer")(100,"div",6),p(101,"Carousel",27),t(),e(102,"Tabs",22)(103,"TabPane",23)(104,"textarea",24),n(105,`    <Carousel [Images]="Images" [Interval]="3000" [PauseOnHover]="true" [Dark]="true"
              [Captions]="true" [NavigationArrows]="true" [NavigationIndicators]="true"></Carousel>
        `),t()()()()()),m&2&&(i(8),a("href","https://krsln.github.io/Lootstrap/Components/Carousel",C),i(10),B("ngModel",o.Interval),i(3),a("checked",o.PauseOnHover),i(4),a("checked",o.Captions),i(4),a("checked",o.Arrows),i(4),a("checked",o.Indicators),i(5),a("Images",o.Images)("Stats",!0)("Captions",o.Captions)("NavigationArrows",o.Arrows)("NavigationIndicators",o.Indicators)("Interval",o.Interval)("PauseOnHover",o.PauseOnHover),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(8),a("Images",o.Images)("Interval",3e3)("PauseOnHover",!0)("Captions",!1)("NavigationArrows",!1)("NavigationIndicators",!1),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(8),a("Images",o.Images)("Interval",3e3)("PauseOnHover",!0)("Captions",!1)("NavigationArrows",!0)("NavigationIndicators",!1),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(8),a("Images",o.Images)("Interval",3e3)("PauseOnHover",!0)("Captions",!1)("NavigationArrows",!0)("NavigationIndicators",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(6),a("Images",o.Images)("Interval",3e3)("PauseOnHover",!0)("Captions",!0)("NavigationArrows",!0)("NavigationIndicators",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(6),a("Images",o.Images)("Interval",3e3)("PauseOnHover",!0)("Rounded",!0)("Shadow",!0)("Captions",!0)("NavigationArrows",!0)("NavigationIndicators",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(6),a("Images",o.Images)("Interval",3e3)("PauseOnHover",!0)("Dark",!0)("Captions",!0)("NavigationArrows",!0)("NavigationIndicators",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"))},dependencies:[ve,Me,se,me,ke,E,I,w,_]});let r=d;return r})();var Pt=(()=>{let d=class d{constructor(s,m){this.dialogService=s,this.viewContainerRef=m,this.htmlContent=`
  <div class="Row">
      <div class="Col-3">
        <p class="Text-center MT-3"><i class="fa-solid fa-cart-shopping fa-4x fa-spin"></i></p>
      </div>
      <div class="Col-9">
        <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
      </div>
    </div>
  `,this.dialogService.ViewContainerRef=m}Prompt(s=!1){this.dialogService.Prompt({Title:"Prompt Title",InnerHtml:"Prompt Body"},s).subscribe(m=>console.log("Prompt",m))}GoToCart(){this.dialogService.Redirect({Title:"Product in the cart",InnerHtml:this.htmlContent},"/Lootstrap/Components/Modal","Go to cart",!1).subscribe(m=>console.log("Redirect",m))}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)(T(Hn),T(je))},d.\u0275cmp=h({type:d,selectors:[["app-ng-dialog"]],decls:47,vars:12,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"Body","Text-center"],[1,"Btn-group"],[1,"Btn","Btn-outline-primary",3,"click"],[3,"Design"],[3,"Label"],[1,"MB-2"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Dialog"),t(),p(3,"p"),e(4,"p",2)(5,"span",3),n(6,"Styled by"),t(),e(7,"a",4),n(8,"LS Modal"),t()(),e(9,"h4",5),n(10,"Usage"),t(),e(11,"p"),n(12," Need to assign "),e(13,"code"),n(14,"ViewContainerRef"),t(),n(15," first, for creating dynamic components through Service as below: "),e(16,"textarea",6),n(17,`constructor(private dialogService: DialogService, private viewContainerRef: ViewContainerRef) {
  this.dialogService.ViewContainerRef = viewContainerRef;
}
  `),t()(),e(18,"h4",5),n(19,"Prompt"),t(),e(20,"ExampleViewer")(21,"div",7)(22,"div",8)(23,"button",9),u("click",function(){return o.Prompt()}),n(24,"Prompt"),t(),e(25,"button",9),u("click",function(){return o.Prompt(!0)}),n(26,"Forced"),t()()(),e(27,"Tabs",10)(28,"TabPane",11)(29,"textarea",6),n(30,`  <button class="Btn Btn-outline-primary" (click)="Prompt()">Prompt</button>
  <button class="Btn Btn-outline-primary" (click)="Prompt(true)">Prompt Forced</button>
        `),t()(),e(31,"TabPane",11)(32,"textarea",6),n(33,`  constructor(private dialogService: DialogService, private viewContainerRef: ViewContainerRef) {
    this.dialogService.ViewContainerRef = viewContainerRef;
  }

  Prompt(Forced: boolean = false): void {
    this.dialogService.Prompt({Title: 'Prompt Title', InnerHtml: 'Prompt Body'}, Forced)
      .subscribe((res: DialogResponse) => console.log('Prompt', res));
  }
        `),t()()()(),e(34,"h4",12),n(35,"With Html Content"),t(),e(36,"ExampleViewer")(37,"div",7)(38,"button",9),u("click",function(){return o.GoToCart()}),n(39,"GoToCart"),t()(),e(40,"Tabs",10)(41,"TabPane",11)(42,"textarea",6),n(43,`        <button class="Btn Btn-outline-primary" (click)="GoToCart()">GoToCart</button>
        `),t()(),e(44,"TabPane",11)(45,"textarea",6),n(46,`  htmlContent = \`
  <div class="Row">
      <div class="Col-3">
        <p class="Text-center MT-3"><i class="fa-solid fa-cart-shopping fa-4x fa-spin"></i></p>
      </div>
      <div class="Col-9">
        <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
      </div>
    </div>
  \`;

  constructor(private dialogService: DialogService, private viewContainerRef: ViewContainerRef) {
    this.dialogService.ViewContainerRef = viewContainerRef;
  }

  GoToCart() {
    const href = '/Lootstrap/Components/Modal';
    this.dialogService.Redirect({Title: 'Product in the cart', InnerHtml: this.htmlContent}, href, 'Go to cart', false)
      .subscribe((res: DialogResponse) => console.log('Redirect', res));
  }
        `),t()()()()()),m&2&&(i(7),a("href","https://krsln.github.io/Lootstrap/Components/Modal",C),i(9),a("Lang","typescript"),i(11),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(8),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[E,I,w,_]});let r=d;return r})();function ar(r,d){if(r&1&&p(0,"option",71),r&2){let l=d.$implicit,s=f();a("value",l)("label",s.Types[+l])}}function rr(r,d){if(r&1&&(e(0,"option",72),n(1),t()),r&2){let l=d.$implicit,s=f();a("value",l),i(),P(s.Positions[+l])}}function or(r,d){if(r&1&&p(0,"option",71),r&2){let l=d.$implicit,s=f();a("value",l)("label",s.IconSizes[+l])}}function lr(r,d){if(r&1&&p(0,"option",71),r&2){let l=d.$implicit,s=f();a("value",l)("label",s.Themes[+l])}}function sr(r,d){if(r&1&&p(0,"option",71),r&2){let l=d.$implicit,s=f();a("value",l)("label",s.Animations[+l])}}function mr(r,d){if(r&1&&p(0,"option",71),r&2){let l=d.$implicit,s=f();a("value",l)("label",s.IconSizes[+l])}}var wt=(()=>{let d=class d{constructor(s){this.notifyService=s,this.Types=Qe,this.IconSizes=Je,this.Positions=Ie,this.Animations=Ye,this.Themes=le,this.Content={Title:"Title",Message:"My message default"},this.ExpireIn=6e3,this.Dismissible=!0,this.Titled=!1,this.ProgressBar=!0,this.Timer=!0,this.Outlined=!1,this.Gradient=!1,this.ShowIcon=!0,this.ListThemes=[],this.ListAnimations=[],this.ListTypes=[],this.ListPositions=[],this.ListIconSizes=[],this.Theme=le.Success,this.Anim=Ye.Grow,this.Type=Qe.Alert,this.Position=Ie.TopCenter,this.IconSize=Je.Normal,this.Show=(m,o,c)=>this.notifyService.Show(+m,+o,c),this.None=m=>this.notifyService.Simpler.None(m),this.Success=m=>this.notifyService.Simpler.Success(m),this.Error=m=>this.notifyService.Simpler.Error(m),this.Info=m=>this.notifyService.Simpler.Info(m),this.Warning=m=>this.notifyService.Simpler.Warning(m),this.Iconic=(m,o,c,g,L,k=4e3)=>this.notifyService.Iconic(m,o,c,g,L,k)}ngOnInit(){this.ListThemes=Object.keys(le).filter(s=>!isNaN(Number(s))),this.ListAnimations=Object.keys(Ye).filter(s=>!isNaN(Number(s))),this.ListTypes=Object.keys(Qe).filter(s=>!isNaN(Number(s))),this.ListPositions=Object.keys(Ie).filter(s=>!isNaN(Number(s))),this.ListIconSizes=Object.keys(Je).filter(s=>!isNaN(Number(s)))}SetIcon(s){return{Size:+this.IconSize,InnerHtml:s}}SetItem(s=this.Theme,m=!1){return console.log("SetItem",s,typeof s),{Content:this.Content,Theme:+s,Anim:+this.Anim,Icon:this.ShowIcon?m?this.SetIcon(this.FaIcons(+s)):this.SetIcon(""):void 0,Countdown:{ExpireIn:this.ExpireIn,Timer:this.Timer,ProgressBar:this.ProgressBar},ShowTitle:this.Titled,Outlined:this.Outlined,Gradient:this.Gradient,Dismissible:this.Dismissible}}FaIcons(s){switch(s){case le.Success:return'<i class="fa-solid fa-check"></i>';case le.Error:return'<i class="fa-solid fa-circle-xmark"></i>';case le.Warning:return'<i class="fa-solid fa-circle-exclamation"></i>';case le.Info:return'<i class="fa-solid fa-circle-info"></i>';case le.None:default:return'<i class="fa-solid fa-bell"></i>'}}WithFaIcon(s,m,o){return{Content:m,Theme:s,Anim:+this.Anim,Icon:o,Countdown:{ExpireIn:this.ExpireIn,Timer:this.Timer,ProgressBar:this.ProgressBar},ShowTitle:this.Titled,Outlined:this.Outlined,Gradient:this.Gradient,Dismissible:this.Dismissible}}ShowAllThemes(s=!1){let m=s?Ie.BottomRight:Ie.BottomLeft;Object.keys(le).filter(o=>!isNaN(Number(o))).forEach(o=>this.Show(+this.Type,+m,this.SetItem(+o,s)))}ShowAllPos(s=!1){let m=(o,c)=>Math.floor(Math.random()*(c-o+1)+o);Object.keys(Ie).filter(o=>!isNaN(Number(o))).forEach(o=>this.Show(+this.Type,+o,this.SetItem(m(0,4),s)))}};d.\u0275fac=function(m){return new(m||d)(T(Cn))},d.\u0275cmp=h({type:d,selectors:[["app-ng-notify"]],decls:223,vars:57,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"Body","Text-center"],[1,"Btn","Btn-light",3,"click"],[1,"Btn","Btn-success",3,"click"],[1,"Btn","Btn-danger",3,"click"],[1,"Btn","Btn-info",3,"click"],[1,"Btn","Btn-warning",3,"click"],[3,"Design"],[3,"Label"],[1,"Body"],[1,"Border","PX-2","PY-2","MB-3"],[1,"Row","G-1"],[1,"Col-6","Col-lg-3"],[1,"Form-label"],[1,"Form-select","Form-select-sm",3,"ngModel","ngModelChange"],[3,"value","label",4,"ngFor","ngForOf"],[3,"value",4,"ngFor","ngForOf"],["for","ExpireIn",1,"Form-label"],["type","number","step","1000","id","ExpireIn",1,"Form-control","Form-control-sm",3,"ngModel","ngModelChange"],[1,"Col-4","Col-lg-2"],["for","Title",1,"Form-label"],["type","text","id","Title",1,"Form-control","Form-control-sm",3,"ngModel","ngModelChange"],[1,"Col-8","Col-lg-5"],["for","Message",1,"Form-label"],["type","text","id","Message",1,"Form-control","Form-control-sm",3,"ngModel","ngModelChange"],[1,"Col-6","Col-lg-2"],[1,"Col-12"],[1,"Form-switch","Form-check","Form-check-inline"],["type","checkbox","id","Outlined",1,"Form-check-input",3,"checked","change"],["for","Outlined",1,"Form-check-label"],["type","checkbox","id","Gradient",1,"Form-check-input",3,"checked","change"],["for","Gradient",1,"Form-check-label"],["type","checkbox","id","Titled",1,"Form-check-input",3,"checked","change"],["for","Titled",1,"Form-check-label"],["type","checkbox","id","Dismissible",1,"Form-check-input",3,"checked","change"],["for","Dismissible",1,"Form-check-label"],["type","checkbox","id","ShowIcon",1,"Form-check-input",3,"checked","change"],["for","ShowIcon",1,"Form-check-label"],["type","checkbox","id","Timer",1,"Form-check-input",3,"checked","change"],["for","Timer",1,"Form-check-label"],["type","checkbox","id","ProgressBar",1,"Form-check-input",3,"checked","change"],["for","ProgressBar",1,"Form-check-label"],[1,"Row","Text-center"],[1,"Col-12","Col-lg-6"],[1,"Btn-group","M-2"],[1,"Btn","Btn-primary",3,"click"],[1,"Btn","Btn-secondary",3,"click"],[1,"Card","Card-body","MT-2","MB-3"],["type","checkbox","id","DismissibleEx",1,"Form-check-input",3,"checked","change"],["for","DismissibleEx",1,"Form-check-label"],["type","checkbox","id","TitledEx",1,"Form-check-input",3,"checked","change"],["for","TitledEx",1,"Form-check-label"],["type","checkbox","id","OutlinedEx",1,"Form-check-input",3,"checked","change"],["for","OutlinedEx",1,"Form-check-label"],["type","checkbox","id","ShowIconEx",1,"Form-check-input",3,"checked","change"],["for","ShowIconEx",1,"Form-check-label"],["type","checkbox","id","GradientEx",1,"Form-check-input",3,"checked","change"],["for","GradientEx",1,"Form-check-label"],[1,"D-inline-block",2,"min-width","90px"],[1,"Btn","Btn-outline-secondary",3,"click"],[1,"Btn","Btn-outline-warning",3,"click"],[1,"Row"],[1,"Col-12","Col-lg-6",3,"Id","Item"],[1,"Btn","Btn-sm","Btn-danger",3,"click"],[1,"Btn","Btn-sm","Btn-info",3,"click"],[3,"value","label"],[3,"value"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Notify"),t(),e(3,"p"),n(4," Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. "),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Alerts"),t(),e(10,"a",4),n(11,"LS Toasts"),t(),e(12,"a",4),n(13,"LS Position"),t()(),e(14,"h3",5),n(15,"Overview"),t(),e(16,"p"),n(17,"Service usage depends on "),e(18,"code"),n(19,"Notify Component"),t(),n(20," at your layout."),t(),e(21,"textarea",6),n(22,`  <!--layout.component.html-->
  <Notify></Notify>

  <router-outlet></router-outlet>
  `),t(),e(23,"p"),n(24,"Themes (defaults)"),t(),e(25,"ExampleViewer")(26,"div",7)(27,"button",8),u("click",function(){return o.None("My None message")}),n(28,"None"),t(),e(29,"button",9),u("click",function(){return o.Success("My Success message")}),n(30,"Success"),t(),e(31,"button",10),u("click",function(){return o.Error("My Error message")}),n(32,"Error"),t(),e(33,"button",11),u("click",function(){return o.Info("My Info message")}),n(34,"Info"),t(),e(35,"button",12),u("click",function(){return o.Warning("My Warning message")}),n(36,"Warning"),t()(),e(37,"Tabs",13)(38,"TabPane",14)(39,"textarea",6),n(40,`      <button class="Btn Btn-light" (click)="None('My None message')">None</button>
      <button class="Btn Btn-success" (click)="Success('My Success message')">Success</button>
      <button class="Btn Btn-danger" (click)="Error('My Error message')">Error</button>
      <button class="Btn Btn-info" (click)="Info('My Info message')">Info</button>
      <button class="Btn Btn-warning" (click)="Warning('My Warning message')">Warning</button>
        `),t()(),e(41,"TabPane",14)(42,"textarea",6),n(43,`  None = (Message:string) => this.notifyService.Simpler.None(Message);
  Success = (Message:string) => this.notifyService.Simpler.Success(Message);
  Error = (Message:string) => this.notifyService.Simpler.Error(Message);
  Info = (Message:string) => this.notifyService.Simpler.Info(Message);
  Warning = (Message:string) => this.notifyService.Simpler.Warning(Message);
        `),t()()()(),e(44,"h3",5),n(45,"How to use service"),t(),e(46,"p"),n(47," There is a simpler way to use service. With "),e(48,"code"),n(49,"Message"),t(),n(50,", "),e(51,"code"),n(52,"ExpireIn?"),t(),n(53," and "),e(54,"code"),n(55,"Position?"),t(),n(56,". "),t(),e(57,"textarea",6),n(58,`    //  this.notifyService.Simpler.None|Success|Error|Info|Warning(Message: string)
    //  this.notifyService.Simpler.None|Success|Error|Info|Warning(Message: string, ExpireIn: number)
    //  this.notifyService.Simpler.None|Success|Error|Info|Warning(Message: string, ExpireIn: number, Position: NotifyPosition)
    this.notifyService.Simpler.None('None test');
    this.notifyService.Simpler.Success('Success test');
    this.notifyService.Simpler.Error('Error test');
    this.notifyService.Simpler.Info('Info test');
    this.notifyService.Simpler.Warning('Warning test');

    this.notifyService.Simpler.None('Test', 5000, NotifyPosition.TopLeft);
  `),t(),e(59,"p"),n(60,"If you dont like simple things!?"),t(),e(61,"textarea",6),n(62,`    //  this.notifyService.None|Success|Error|Info|Warning(Content: NotifyContent)
    //  this.notifyService.None|Success|Error|Info|Warning(Content: NotifyContent, ExpireIn: number)
    //  this.notifyService.None|Success|Error|Info|Warning(Content: NotifyContent, ExpireIn: number, Type: NotifyType)
    //  this.notifyService.None|Success|Error|Info|Warning(Content: NotifyContent, ExpireIn: number, Type: NotifyType, Position: NotifyPosition)

    this.notifyService.None({Message: 'None test', Title: ''});
    this.notifyService.Success({Message: 'Success test', Title: null});
    this.notifyService.Error({Message: 'Error test', Title: undefined});
    this.notifyService.Info({Message: 'Info test', Title: 'Title'});
    this.notifyService.Warning({Message: 'Warning test', Title: 'Title'});

    this.notifyService.None({Message: 'None test', Title: ''}, 5000, NotifyType.Pill, NotifyPosition.TopLeft);
  `),t(),e(63,"p"),n(64,"Not satisfy yet?"),t(),e(65,"textarea",6),n(66,`    //  export interface NotifyItem {
    //   Content: NotifyContent; Theme: NotifyTheme;  Anim: NotifyAnim;
    //   Icon: NotifyIcon | undefined; Countdown: NotifyCountdown;
    //   Outlined: boolean; Gradient: boolean;
    //   ShowTitle: boolean Dismissible: boolean;
    // }
    //  this.notifyService.Show(Type: NotifyType, Position: NotifyPosition, Item: NotifyItem)

    this.notifyService.Show(NotifyType.Alert, NotifyPosition.TopLeft, {
      Content: {Message: 'Test', Title: ''}, Theme: NotifyTheme.Info,
      Icon: {Size: NotifyIconSize.Normal, InnerHtml: \`\`},
      Countdown: {ExpireIn: 5000, Timer: true, ProgressBar: true},
      Outlined: false, Gradient: false, ShowTitle: false, Dismissible: true, Anim: NotifyAnim.Bounce
    });
  `),t(),e(67,"ExampleViewer")(68,"div",15)(69,"div",16)(70,"div",17)(71,"div",18)(72,"label",19),n(73,"Type"),t(),e(74,"select",20),V("ngModelChange",function(g){return F(o.Type,g)||(o.Type=g),g}),v(75,ar,1,2,"option",21),t()(),e(76,"div",18)(77,"label",19),n(78,"Position"),t(),e(79,"select",20),V("ngModelChange",function(g){return F(o.Position,g)||(o.Position=g),g}),v(80,rr,2,2,"option",22),t()(),e(81,"div",18)(82,"label",23),n(83,"ExpireIn"),t(),e(84,"input",24),V("ngModelChange",function(g){return F(o.ExpireIn,g)||(o.ExpireIn=g),g}),t()(),e(85,"div",18)(86,"label",19),n(87,"Icon Size"),t(),e(88,"select",20),V("ngModelChange",function(g){return F(o.IconSize,g)||(o.IconSize=g),g}),v(89,or,1,2,"option",21),t()()(),e(90,"div",17)(91,"div",25)(92,"label",26),n(93,"Title"),t(),e(94,"input",27),V("ngModelChange",function(g){return F(o.Content.Title,g)||(o.Content.Title=g),g}),t()(),e(95,"div",28)(96,"label",29),n(97,"Message"),t(),e(98,"input",30),V("ngModelChange",function(g){return F(o.Content.Message,g)||(o.Content.Message=g),g}),t()(),e(99,"div",18)(100,"label",19),n(101,"Theme"),t(),e(102,"select",20),V("ngModelChange",function(g){return F(o.Theme,g)||(o.Theme=g),g}),v(103,lr,1,2,"option",21),t()(),e(104,"div",31)(105,"label",19),n(106,"Anim"),t(),e(107,"select",20),V("ngModelChange",function(g){return F(o.Anim,g)||(o.Anim=g),g}),v(108,sr,1,2,"option",21),t()(),e(109,"div",32)(110,"div",33)(111,"input",34),u("change",function(){return o.Outlined=!o.Outlined}),t(),e(112,"label",35),n(113,"Outlined"),t()(),e(114,"div",33)(115,"input",36),u("change",function(){return o.Gradient=!o.Gradient}),t(),e(116,"label",37),n(117,"Gradient"),t()(),e(118,"div",33)(119,"input",38),u("change",function(){return o.Titled=!o.Titled}),t(),e(120,"label",39),n(121,"Titled"),t()(),e(122,"div",33)(123,"input",40),u("change",function(){return o.Dismissible=!o.Dismissible}),t(),e(124,"label",41),n(125,"Dismissible"),t()(),e(126,"div",33)(127,"input",42),u("change",function(){return o.ShowIcon=!o.ShowIcon}),t(),e(128,"label",43),n(129,"Icon"),t()(),e(130,"div",33)(131,"input",44),u("change",function(){return o.Timer=!o.Timer}),t(),e(132,"label",45),n(133,"Timer"),t()(),e(134,"div",33)(135,"input",46),u("change",function(){return o.ProgressBar=!o.ProgressBar}),t(),e(136,"label",47),n(137,"Progress"),t()()()()(),e(138,"div",48)(139,"div",49)(140,"div",50)(141,"button",51),u("click",function(){return o.Show(o.Type,o.Position,o.SetItem(+o.Theme))}),n(142,"Show"),t(),e(143,"button",52),u("click",function(){return o.ShowAllPos()}),n(144,"All Pos"),t()()(),e(145,"div",49)(146,"div",50)(147,"button",51),u("click",function(){return o.Show(o.Type,o.Position,o.SetItem(+o.Theme,!0))}),n(148,"Show (FA)"),t(),e(149,"button",52),u("click",function(){return o.ShowAllPos(!0)}),n(150,"All Pos (FA)"),t()()()()(),e(151,"Tabs",13)(152,"TabPane",14)(153,"textarea",6),n(154,`        <div class="Col-12 Col-lg-6">
          <div class="Btn-group M-2">
            <button class="Btn Btn-primary" (click)="Show(Type,Position,SetItem(Theme))">Show</button>
            <button class="Btn Btn-secondary" (click)="ShowAllPos()">All Pos</button>
          </div>
        </div>
        <div class="Col-12 Col-lg-6">
          <div class="Btn-group M-2">
            <button class="Btn Btn-primary" (click)="Show(Type,Position,SetItem(Theme,true))">Show (FA)</button>
            <button class="Btn Btn-secondary" (click)="ShowAllPos(true)">All Pos (FA)</button>
          </div>
        </div>
        `),t()(),e(155,"TabPane",14)(156,"textarea",6),n(157,`  Types = NotifyType;
  IconSizes = NotifyIconSize;
  Positions = NotifyPosition;
  Animations = NotifyAnim;
  Themes = NotifyTheme;

  Content: NotifyContent = {Title: 'Title', Message: 'My message default'};
  ExpireIn = 6000;

  Dismissible = true;
  Titled = false;
  ProgressBar = true;
  Timer = true;
  Outlined = false;
  Gradient = false;
  ShowIcon = true;

  ListThemes: string[] = [];
  ListAnimations: string[] = [];
  ListTypes: string[] = [];
  ListPositions: string[] = [];
  ListIconSizes: string[] = [];

  Theme: NotifyTheme = NotifyTheme.Success;
  Anim: NotifyAnim = NotifyAnim.Grow;
  Type: NotifyType = NotifyType.Alert;
  Position: NotifyPosition = NotifyPosition.TopCenter;
  IconSize: NotifyIconSize = NotifyIconSize.Normal;

  constructor(private notifyService: NotifyService) {
  }

  ngOnInit(): void {
    this.ListThemes = Object.keys(NotifyTheme).filter(k => !isNaN(Number(k)));
    this.ListAnimations = Object.keys(NotifyAnim).filter(k => !isNaN(Number(k)));
    this.ListTypes = Object.keys(NotifyType).filter(k => !isNaN(Number(k)));
    this.ListPositions = Object.keys(NotifyPosition).filter(k => !isNaN(Number(k)));
    this.ListIconSizes = Object.keys(NotifyIconSize).filter(k => !isNaN(Number(k)));
  }

  Show = (Type: NotifyType, Position: NotifyPosition, Item: NotifyItem) => this.notifyService.Show(+Type, +Position, Item);

  // Theme Methods
  None = (Message:string) => this.notifyService.Simpler.None(Message);
  Success = (Message:string) => this.notifyService.Simpler.Success(Message);
  Error = (Message:string) => this.notifyService.Simpler.Error(Message);
  Info = (Message:string) => this.notifyService.Simpler.Info(Message);
  Warning = (Message:string) => this.notifyService.Simpler.Warning(Message);

  Iconic = (Type: NotifyType, Position: NotifyPosition,
            Theme: NotifyTheme, Content: NotifyContent, Icon: NotifyIcon, ExpireIn: number = 4000) => this.notifyService.Iconic(Type, Position, Theme, Content, Icon, ExpireIn);

  SetIcon(innerHtml: string): NotifyIcon {
    return {Size: +this.IconSize, InnerHtml: innerHtml};
  }

  SetItem(theme: NotifyTheme = this.Theme, withFaIcons: boolean = false): NotifyItem {
    return {
      Content: this.Content, Theme: +theme, Anim: +this.Anim,
      Icon: this.ShowIcon ? withFaIcons ? this.SetIcon(this.FaIcons(theme)) : this.SetIcon('') : undefined,
      Countdown: {ExpireIn: this.ExpireIn, Timer: this.Timer, ProgressBar: this.ProgressBar},
      ShowTitle: this.Titled, Outlined: this.Outlined, Gradient: this.Gradient, Dismissible: this.Dismissible
    };
  }

  FaIcons(theme: NotifyTheme): string {
    switch (theme) {
      case NotifyTheme.Success:
        return \`<i class="fa-solid fa-check"></i>\`;
      case NotifyTheme.Error:
        return \`<i class="fa-solid fa-circle-xmark"></i>\`;
      case NotifyTheme.Warning:
        return \`<i class="fa-solid fa-circle-exclamation"></i>\`;
      case NotifyTheme.Info:
        return \`<i class="fa-solid fa-circle-info"></i>\`;
      case NotifyTheme.None:
      default:
        return \`<i class="fa-solid fa-bell"></i>\`;
    }
  }

  WithFaIcon(Theme: NotifyTheme, Content: NotifyContent, Icon: NotifyIcon): NotifyItem {
    return {
      Content, Theme, Anim: +this.Anim, Icon,
      Countdown: {ExpireIn: this.ExpireIn, Timer: this.Timer, ProgressBar: this.ProgressBar},
      ShowTitle: this.Titled, Outlined: this.Outlined, Gradient: this.Gradient, Dismissible: this.Dismissible
    };
  };

  ShowAllThemes(withFaIcons: boolean = false): void {
    const position = withFaIcons ? NotifyPosition.BottomRight : NotifyPosition.BottomLeft;
    Object.keys(NotifyTheme).filter(k => !isNaN(Number(k))).forEach((theme) => this.Show(+this.Type, +position, this.SetItem(+theme, withFaIcons)));
  }

  ShowAllPos(withFaIcons: boolean = false): void {
    const themeRn = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    Object.keys(NotifyPosition).filter(k => !isNaN(Number(k))).forEach((pos) => this.Show(+this.Type, +pos, this.SetItem(themeRn(0, 4), withFaIcons)));
  }

        `),t()()()(),e(158,"h3",5),n(159,"Customization"),t(),e(160,"div",53)(161,"div")(162,"div",33)(163,"input",54),u("change",function(){return o.Dismissible=!o.Dismissible}),t(),e(164,"label",55),n(165,"Dismissible"),t()(),e(166,"div",33)(167,"input",56),u("change",function(){return o.Titled=!o.Titled}),t(),e(168,"label",57),n(169,"Titled"),t()(),e(170,"div",33)(171,"input",58),u("change",function(){return o.Outlined=!o.Outlined}),t(),e(172,"label",59),n(173,"Outlined"),t()(),e(174,"div",33)(175,"input",60),u("change",function(){return o.ShowIcon=!o.ShowIcon}),t(),e(176,"label",61),n(177,"Icon"),t()(),e(178,"div",33)(179,"input",62),u("change",function(){return o.Gradient=!o.Gradient}),t(),e(180,"label",63),n(181,"Gradient"),t()(),e(182,"div",64)(183,"select",20),V("ngModelChange",function(g){return F(o.IconSize,g)||(o.IconSize=g),g}),v(184,mr,1,2,"option",21),t()()()(),e(185,"p"),n(186,"Comparison of Default and Fa Icons"),t(),e(187,"div",48)(188,"div",49)(189,"div",50)(190,"button",65),u("click",function(){return o.ShowAllThemes()}),n(191,"Default Icons"),t()()(),e(192,"div",49)(193,"div",50)(194,"button",66),u("click",function(){return o.ShowAllThemes(!0)}),n(195,"Fa Icons"),t()()(),p(196,"div",49)(197,"div",49),t(),e(198,"h4",5),n(199,"Customized with Fa Icons"),t(),e(200,"ExampleViewer")(201,"div",7)(202,"div",67),p(203,"Alert",68)(204,"Alert",68)(205,"Alert",68)(206,"Alert",68),t(),e(207,"div",67)(208,"div",49)(209,"div",50)(210,"button",69),u("click",function(){return o.Iconic(0,1,2,o.Content,o.SetIcon("<i class='fa-brands fa-youtube'></i>"))}),n(211," Youtube-ish "),t()()(),e(212,"div",49)(213,"div",50)(214,"button",70),u("click",function(){return o.Iconic(0,1,3,o.Content,o.SetIcon("<i class='fa-brands fa-twitter'></i>"))}),n(215," Twitter-ish "),t()()()()(),e(216,"Tabs",13)(217,"TabPane",14)(218,"textarea",6),n(219,`  <Alert [Id]="'Cus_Youtube'"
         [Item]="WithFaIcon(2, Content, SetIcon('<i class=\\'fa-brands fa-youtube\\'></i>'))"></Alert>

  <button class="Btn Btn-sm Btn-danger" (click)="Iconic(0,1,2,Content,SetIcon('<i class=\\'fa-brands fa-youtube\\'></i>'))">
    Youtube-ish
  </button>
        `),t()(),e(220,"TabPane",14)(221,"textarea",6),n(222,`  Content: NotifyContent = {Title: 'Title', Message: 'My message default'};

  Iconic = (Type: NotifyType, Position: NotifyPosition,
            Theme: NotifyTheme, Content: NotifyContent, Icon: NotifyIcon, ExpireIn: number = 4000) => this.notifyService.Iconic(Type, Position, Theme, Content, Icon, ExpireIn);

  SetIcon(innerHtml: string): NotifyIcon {
    return {Size: +this.IconSize, InnerHtml: innerHtml};
  }
        `),t()()()()()),m&2&&(i(8),a("href","https://krsln.github.io/Lootstrap/Components/Alerts",C),i(2),a("href","https://krsln.github.io/Lootstrap/Components/Toasts",C),i(2),a("href","https://krsln.github.io/Lootstrap/Utilities/Position",C),i(9),a("Lang","html"),i(16),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(15),a("Lang","typescript"),i(4),a("Lang","typescript"),i(4),a("Lang","typescript"),i(9),B("ngModel",o.Type),i(),a("ngForOf",o.ListTypes),i(4),B("ngModel",o.Position),i(),a("ngForOf",o.ListPositions),i(4),B("ngModel",o.ExpireIn),i(4),B("ngModel",o.IconSize),i(),a("ngForOf",o.ListIconSizes),i(5),B("ngModel",o.Content.Title),i(4),B("ngModel",o.Content.Message),i(4),B("ngModel",o.Theme),i(),a("ngForOf",o.ListThemes),i(4),B("ngModel",o.Anim),i(),a("ngForOf",o.ListAnimations),i(3),a("checked",o.Outlined),i(4),a("checked",o.Gradient),i(4),a("checked",o.Titled),i(4),a("checked",o.Dismissible),i(4),a("checked",o.ShowIcon),i(4),a("checked",o.Timer),i(4),a("checked",o.ProgressBar),i(16),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(7),a("checked",o.Dismissible),i(4),a("checked",o.Titled),i(4),a("checked",o.Outlined),i(4),a("checked",o.ShowIcon),i(4),a("checked",o.Gradient),i(4),B("ngModel",o.IconSize),i(),a("ngForOf",o.ListIconSizes),i(19),a("Id","Cus_1")("Item",o.WithFaIcon(0,o.Content,o.SetIcon("<i class='fa-regular fa-face-surprise'></i>"))),i(),a("Id","Cus_2")("Item",o.WithFaIcon(1,o.Content,o.SetIcon("<i class='fa-solid fa-coins'></i>"))),i(),a("Id","Cus_Youtube")("Item",o.WithFaIcon(2,o.Content,o.SetIcon("<i class='fa-brands fa-youtube'></i>"))),i(),a("Id","Cus_Twitter")("Item",o.WithFaIcon(3,o.Content,o.SetIcon("<i class='fa-brands fa-twitter'></i>"))),i(10),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[z,Ke,et,ve,Me,Ze,se,me,bn,E,I,w,_]});let r=d;return r})();function dr(r,d){if(r&1&&(e(0,"div",21)(1,"div",22)(2,"h5",23),n(3),t(),e(4,"p",24),n(5),t()()()),r&2){let l=d.$implicit;i(3),A("Id: ",l.Id,""),i(2),P(l.Name)}}function cr(r,d){if(r&1){let l=N();e(0,"li",37),u("click",function(){let o=b(l).$implicit;f(2);let c=x(29);return y(c.SetPage(o.Value))}),p(1,"a",38),t()}if(r&2){let l=d.$implicit;f(2);let s=x(29);S("Active",s.Response.Req.CurrentPage===l.Value),i(),a("innerHtml",l.Label,U)}}function pr(r,d){if(r&1){let l=N();e(0,"nav",25)(1,"ul",26)(2,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(1))}),e(3,"a",28)(4,"span",29),p(5,"i",30),t()()(),e(6,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.Req.CurrentPage-1))}),e(7,"a",31)(8,"span",29),p(9,"i",32),t()()(),v(10,cr,2,3,"li",33),e(11,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.Req.CurrentPage+1))}),e(12,"a",34)(13,"span",29),p(14,"i",35),t()()(),e(15,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.TotalPages))}),e(16,"a",28)(17,"span",29),p(18,"i",36),t()()()()()}if(r&2){f();let l=x(29);i(2),S("Disabled",l.Response.Req.CurrentPage===1),i(4),S("Disabled",l.Response.Req.CurrentPage===1),i(4),a("ngForOf",l.Response.Pages),i(),S("Disabled",l.Response.Req.CurrentPage===l.Response.TotalPages),i(4),S("Disabled",l.Response.Req.CurrentPage===l.Response.TotalPages)}}function gr(r,d){if(r&1){let l=N();e(0,"li",37),u("click",function(){let o=b(l).$implicit;f(2);let c=x(29);return y(c.SetPage(o.Value))}),p(1,"a",38),t()}if(r&2){let l=d.$implicit;f(2);let s=x(29);S("Active",s.Response.Req.CurrentPage===l.Value),i(),a("innerHtml",l.Label,U)}}function ur(r,d){if(r&1){let l=N();e(0,"nav",25)(1,"ul",26)(2,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(1))}),e(3,"a",28)(4,"span",29),p(5,"i",39),t()()(),e(6,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.Req.CurrentPage-1))}),e(7,"a",31)(8,"span",29),p(9,"i",40),t()()(),v(10,gr,2,3,"li",33),e(11,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.Req.CurrentPage+1))}),e(12,"a",34)(13,"span",29),p(14,"i",41),t()()(),e(15,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.TotalPages))}),e(16,"a",28)(17,"span",29),p(18,"i",42),t()()()()()}if(r&2){f();let l=x(29);i(2),S("Disabled",l.Response.Req.CurrentPage===1),i(4),S("Disabled",l.Response.Req.CurrentPage===1),i(4),a("ngForOf",l.Response.Pages),i(),S("Disabled",l.Response.Req.CurrentPage===l.Response.TotalPages),i(4),S("Disabled",l.Response.Req.CurrentPage===l.Response.TotalPages)}}function fr(r,d){if(r&1&&(e(0,"div",21)(1,"div",22)(2,"h5",23),n(3),t(),e(4,"p",24),n(5),t()()()),r&2){let l=d.$implicit;i(3),A("Id: ",l.Id,""),i(2),P(l.Name)}}function vr(r,d){if(r&1){let l=N();e(0,"li",37),u("click",function(){let o=b(l).$implicit;f(2);let c=x(29);return y(c.SetPage(o.Value))}),p(1,"a",38),t()}if(r&2){let l=d.$implicit;f(2);let s=x(29);S("Active",s.Response.Req.CurrentPage===l.Value),i(),a("innerHtml",l.Label,U)}}function hr(r,d){if(r&1){let l=N();e(0,"nav",25)(1,"ul",26)(2,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.Req.CurrentPage-1))}),e(3,"a",31)(4,"span",29),n(5,"Prev"),t()()(),v(6,vr,2,3,"li",33),e(7,"li",27),u("click",function(){b(l),f();let m=x(29);return y(m.SetPage(m.Response.Req.CurrentPage+1))}),e(8,"a",34)(9,"span",29),n(10,"Next"),t()()()()()}if(r&2){f();let l=x(29);i(2),S("Disabled",l.Response.Req.CurrentPage===1),i(4),a("ngForOf",l.Response.Pages),i(),S("Disabled",l.Response.Req.CurrentPage===l.Response.TotalPages)}}var Mt=(()=>{let d=class d{constructor(){this.Items=[],this.WithComponent={CurrentPage:1,Items:[]},this.WithDirective={CurrentPage:1,Items:[]},this.HtmlFA1=`<!--With FA Icons-->
  <ng-container Paginate #p="PaginateApi" [Items]="Items"
                [CurrentPage]="WithDirective.CurrentPage" [Size]="5" [ItemPerPage]="4"
                (PageChanged)="WithDirective.CurrentPage=$event" (PagedItems)="WithDirective.Items=$event">

    <nav aria-label="Lootstrap Page Navigation" *ngIf="p.Response && p.Response.Pages && p.Response.Pages.length>0">
      <ul class="Pagination Justify-content-center MY-2">

        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === 1" (click)="p.SetPage(1)">
          <a class="Page-link" aria-label="First"><span aria-hidden="true"><i class="fa-solid fa-angles-left"></i></span></a>
        </li>
        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === 1"
            (click)="p.SetPage(p.Response.Req.CurrentPage - 1)">
          <a class="Page-link" aria-label="Previous"><span aria-hidden="true"><i class="fa-solid fa-angle-left"></i></span></a>
        </li>
        <!-- Numbers -->
        <li class="Page-item" (click)="p.SetPage(page.Value)"
            [class.Active]="p.Response.Req.CurrentPage === page.Value" *ngFor="let page of p.Response.Pages">
          <a class="Page-link" [innerHtml]="page.Label"></a>
        </li>
        <!-- Numbers -->
        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === p.Response.TotalPages"
            (click)="p.SetPage(p.Response.Req.CurrentPage + 1)">
          <a class="Page-link" aria-label="Next"><span aria-hidden="true"><i
            class="fa-solid fa-angle-right"></i></span></a>
        </li>
        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === p.Response.TotalPages" (click)="p.SetPage(p.Response.TotalPages)">
          <a class="Page-link" aria-label="First"><span aria-hidden="true"><i class="fa-solid fa-angles-right"></i></span></a>
        </li>

      </ul>
    </nav>

  </ng-container>
  `,this.HtmlFA2=`<!--With FA Icons-->
<ng-container Paginate #p="PaginateApi" [Items]="Items"
              [CurrentPage]="WithDirective.CurrentPage" [Size]="5" [ItemPerPage]="4"
              (PageChanged)="WithDirective.CurrentPage=$event" (PagedItems)="WithDirective.Items=$event">

    <nav aria-label="Lootstrap Page Navigation" *ngIf="p.Response && p.Response.Pages && p.Response.Pages.length>0">
      <ul class="Pagination Justify-content-center MY-2">

        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === 1" (click)="p.SetPage(1)">
          <a class="Page-link" aria-label="First">
            <span aria-hidden="true"><i class="fa-solid fa-circle-arrow-left"></i></span>
          </a>
        </li>
        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === 1"
            (click)="p.SetPage(p.Response.Req.CurrentPage - 1)">
          <a class="Page-link" aria-label="Previous">
            <span aria-hidden="true"><i class="fa-solid fa-circle-chevron-left"></i></span>
          </a>
        </li>
        <!-- Numbers -->
        <li class="Page-item" (click)="p.SetPage(page.Value)"
            [class.Active]="p.Response.Req.CurrentPage === page.Value" *ngFor="let page of p.Response.Pages">
          <a class="Page-link" [innerHtml]="page.Label"></a>
        </li>
        <!-- Numbers -->
        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === p.Response.TotalPages"
            (click)="p.SetPage(p.Response.Req.CurrentPage + 1)">
          <a class="Page-link" aria-label="Next">
            <span aria-hidden="true"><i class="fa-solid fa-circle-chevron-right"></i></span>
          </a>
        </li>
        <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === p.Response.TotalPages" (click)="p.SetPage(p.Response.TotalPages)">
          <a class="Page-link" aria-label="First">
            <span aria-hidden="true"><i class="fa-solid fa-circle-arrow-right"></i></span>
          </a>
        </li>

      </ul>
    </nav>

</ng-container>
  `,this.HtmlBS=`<!--Basic-->
      <ng-container Paginate #p="PaginateApi" [Items]="Items"
                    [CurrentPage]="WithDirective.CurrentPage" [Size]="5" [ItemPerPage]="4"
                    (PageChanged)="WithDirective.CurrentPage=$event" (PagedItems)="WithDirective.Items=$event">
        <nav aria-label="Lootstrap Page Navigation" *ngIf="p.Response && p.Response.Pages && p.Response.Pages.length>0">
          <ul class="Pagination Justify-content-center MY-2">

            <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === 1"
                (click)="p.SetPage(p.Response.Req.CurrentPage - 1)">
              <a class="Page-link" aria-label="Previous"><span aria-hidden="true">Prev</span></a>
            </li>
            <!-- Numbers -->
            <li class="Page-item" (click)="p.SetPage(page.Value)"
                [class.Active]="p.Response.Req.CurrentPage === page.Value" *ngFor="let page of p.Response.Pages">
              <a class="Page-link" [innerHtml]="page.Label"></a>
            </li>
            <!-- Numbers -->
            <li class="Page-arrow" [class.Disabled]="p.Response.Req.CurrentPage === p.Response.TotalPages"
                (click)="p.SetPage(p.Response.Req.CurrentPage + 1)">
              <a class="Page-link" aria-label="Next"><span aria-hidden="true">Next</span></a>
            </li>

          </ul>
        </nav>
      </ng-container>
  `}ngOnInit(){this.Items=Array.from({length:140},()=>{let s=Math.floor(Math.random()*40);return{Id:s,Name:`Name ${s}`}})}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-pagination"]],decls:95,vars:79,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[3,"Items","CurrentPage","ItemPerPage","Size","PagedItems","PageChanged"],[1,"Row"],["class","Col-6 Col-lg-3",4,"ngFor","ngForOf"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],["Paginate","",3,"Items","CurrentPage","Size","ItemPerPage","PageChanged","PagedItems"],["p","PaginateApi"],["aria-label","Lootstrap Page Navigation",4,"ngIf"],["Highlighter","",1,"MT-2","MB-3",3,"Lang","Code"],[3,"Sizing","Shape","Items","CurrentPage","ItemPerPage","Size","PagedItems","PageChanged"],[3,"Sizing","Items","CurrentPage","ItemPerPage","Size","PagedItems","PageChanged"],[3,"Shape","Items","CurrentPage","ItemPerPage","Size","PagedItems","PageChanged"],[3,"Alignment","Items","CurrentPage","ItemPerPage","Size","PagedItems","PageChanged"],[1,"Col-6","Col-lg-3"],[1,"Card","Card-body"],[1,"Card-title"],[1,"Card-text"],["aria-label","Lootstrap Page Navigation"],[1,"Pagination","Justify-content-center","MY-2"],[1,"Page-arrow",3,"click"],["aria-label","First",1,"Page-link"],["aria-hidden","true"],[1,"fa-solid","fa-angles-left"],["aria-label","Previous",1,"Page-link"],[1,"fa-solid","fa-angle-left"],["class","Page-item",3,"Active","click",4,"ngFor","ngForOf"],["aria-label","Next",1,"Page-link"],[1,"fa-solid","fa-angle-right"],[1,"fa-solid","fa-angles-right"],[1,"Page-item",3,"click"],[1,"Page-link",3,"innerHtml"],[1,"fa-solid","fa-circle-arrow-left"],[1,"fa-solid","fa-circle-chevron-left"],[1,"fa-solid","fa-circle-chevron-right"],[1,"fa-solid","fa-circle-arrow-right"]],template:function(m,o){if(m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Pagination"),t(),e(3,"p"),n(4," Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages. "),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Pagination"),t()(),e(10,"h4",5),n(11,"Basic example"),t(),e(12,"ExampleViewer")(13,"div",6)(14,"Pagination",7),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t(),e(15,"div",8),v(16,dr,6,2,"div",9),t()(),e(17,"Tabs",10)(18,"TabPane",11)(19,"textarea",12),n(20,`    <Pagination [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>
    <div class="Row">
      <div class="Col-6 Col-lg-3" *ngFor="let item of WithComponent.Items">
        <div class="Card Card-body">
          <h5 class="Card-title">Id: {/{item.Id}/}</h5>
          <p class="Card-text">{/{item.Name}/}</p>
        </div>
      </div>
    </div>
        `),t()(),e(21,"TabPane",11)(22,"textarea",12),n(23,`  Items: { Id: number, Name: string }[] = [];
  WithComponent: { CurrentPage: number, Items: { Id: number, Name: string }[] } = {CurrentPage: 1, Items: []};

  ngOnInit(): void {
    // randomly generated N = 40 length array 0 <= A[N] <= 39
    this.Items = Array.from({length: 140}, () => {
      const num = Math.floor(Math.random() * 40);
      return {Id: num, Name: \`Name \${num}\`};
    });
  }
        `),t()()()(),e(24,"h4",5),n(25,"With Icons Through Directive"),t(),e(26,"ExampleViewer")(27,"div",6),H(28,13,14),u("PageChanged",function(g){return o.WithDirective.CurrentPage=g})("PagedItems",function(g){return o.WithDirective.Items=g}),v(30,pr,19,9,"nav",15)(31,ur,19,9,"nav",15),W(),p(32,"br"),e(33,"div",8),v(34,fr,6,2,"div",9),t(),p(35,"br"),H(36,13,14),u("PageChanged",function(g){return o.WithDirective.CurrentPage=g})("PagedItems",function(g){return o.WithDirective.Items=g}),v(38,hr,11,5,"nav",15),W(),t(),e(39,"Tabs",10)(40,"TabPane",11)(41,"textarea",12),n(42,`  <!--Paged Items => Results-->
  <div class="Row">
    <div class="Col-6 Col-lg-3" *ngFor="let item of WithDirective.Items">
      <div class="Card Card-body">
        <h5 class="Card-title">Id: {/{item.Id}}</h5>
        <p class="Card-text">{/{item.Name}}</p>
      </div>
    </div>
  </div>
        `),t(),p(43,"textarea",16)(44,"textarea",16)(45,"textarea",16),t(),e(46,"TabPane",11)(47,"textarea",12),n(48,`  Items: { Id: number, Name: string }[] = [];
  WithDirective: { CurrentPage: number, Items: { Id: number, Name: string }[] } = {CurrentPage: 1, Items: []};

  ngOnInit(): void {
    // randomly generated N = 40 length array 0 <= A[N] <= 39
    this.Items = Array.from({length: 140}, () => {
      const num = Math.floor(Math.random() * 40);
      return {Id: num, Name: \`Name \${num}\`};
    });
  }
        `),t()()()(),e(49,"h4",5),n(50,"Sizing"),t(),e(51,"p"),n(52," Fancy larger or smaller pagination? Add "),e(53,"code"),n(54,"[Sizing]"),t(),n(55," prop for additional sizes. "),t(),e(56,"ExampleViewer")(57,"div",6)(58,"Pagination",17),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t(),e(59,"Pagination",18),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t(),e(60,"Pagination",18),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t()(),e(61,"Tabs",10)(62,"TabPane",11)(63,"textarea",12),n(64,`    <!--Large-->
    <Pagination [Sizing]="'Large'" [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>

    <!--Small-->
    <Pagination [Sizing]="'Small'" [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>
        `),t()()()(),e(65,"h4",5),n(66,"Shape"),t(),e(67,"p"),n(68,"Add "),e(69,"code"),n(70,"[Shape]"),t(),n(71," prop to change the shape to a circle."),t(),e(72,"ExampleViewer")(73,"div",6)(74,"Pagination",19),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t()(),e(75,"Tabs",10)(76,"TabPane",11)(77,"textarea",12),n(78,`    <Pagination [Shape]="'Circle'" [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>
        `),t()()()(),e(79,"h4",5),n(80,"Alignment"),t(),e(81,"p"),n(82,"Use "),e(83,"code"),n(84,"[Alignment]"),t(),n(85," prop to center or end the pagination."),t(),e(86,"ExampleViewer")(87,"div",6)(88,"Pagination",20),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t(),e(89,"Pagination",20),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t(),e(90,"Pagination",20),u("PagedItems",function(g){return o.WithComponent.Items=g})("PageChanged",function(g){return o.WithComponent.CurrentPage=g}),t()(),e(91,"Tabs",10)(92,"TabPane",11)(93,"textarea",12),n(94,`    <Pagination [Alignment]="'Start'" [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>

    <Pagination [Alignment]="'Center'" [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>

    <Pagination [Alignment]="'End'" [Items]="Items" [CurrentPage]="WithComponent.CurrentPage" [ItemPerPage]="4" [Size]="7"
                (PagedItems)="WithComponent.Items = $event"
                (PageChanged)="WithComponent.CurrentPage=$event"></Pagination>
        `),t()()()()()),m&2){let c=x(29);i(8),a("href","https://krsln.github.io/Lootstrap/Components/Pagination",C),i(6),a("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(2),a("ngForOf",o.WithComponent.Items),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(6),a("Items",o.Items)("CurrentPage",o.WithDirective.CurrentPage)("Size",5)("ItemPerPage",4),i(2),a("ngIf",c.Response&&c.Response.Pages&&c.Response.Pages.length>0),i(),a("ngIf",c.Response&&c.Response.Pages&&c.Response.Pages.length>0),i(3),a("ngForOf",o.WithDirective.Items),i(2),a("Items",o.Items)("CurrentPage",o.WithDirective.CurrentPage)("Size",5)("ItemPerPage",4),i(2),a("ngIf",c.Response&&c.Response.Pages&&c.Response.Pages.length>0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Lang","html")("Code",o.HtmlBS),i(),a("Lang","html")("Code",o.HtmlFA1),i(),a("Lang","html")("Code",o.HtmlFA2),i(),a("Label","TypeScript"),i(),a("Lang","typescript"),i(11),a("Sizing","Large")("Shape","Circle")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Sizing","Large")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Sizing","Small")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Shape","Circle")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Alignment","Start")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Alignment","Center")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Alignment","End")("Items",o.Items)("CurrentPage",o.WithComponent.CurrentPage)("ItemPerPage",4)("Size",7),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html")}},dependencies:[z,G,Wn,ut,E,I,w,_]});let r=d;return r})();function Sr(r,d){if(r&1&&(e(0,"RatingItem"),n(1),t()),r&2){let l=d.$implicit;i(),P(l)}}function Cr(r,d){r&1&&p(0,"RatingItem")}function br(r,d){r&1&&(e(0,"RatingItem"),p(1,"i",20),t())}function yr(r,d){r&1&&(e(0,"RatingItem"),p(1,"i",20),t())}function xr(r,d){r&1&&(e(0,"RatingItem"),p(1,"i",20),t())}function Tr(r,d){r&1&&(e(0,"RatingItem"),p(1,"i",21),t())}function Ir(r,d){r&1&&(e(0,"RatingItem"),p(1,"i",22),t())}function Er(r,d){r&1&&(e(0,"RatingItem"),p(1,"i",23),t())}var Pe=()=>[1,2,3,4,5],_r=()=>[1,2,3,4],Pr=()=>["fa-solid fa-face-frown","fa-solid fa-face-frown-open","fa-solid fa-face-meh","fa-solid fa-face-smile","fa-solid fa-face-grin"],Lt=(()=>{let d=class d{constructor(){this.solid=["fa-solid fa-face-frown","fa-solid fa-face-frown-open","fa-solid fa-face-meh","fa-solid fa-face-smile","fa-solid fa-face-grin"],this.regular=["fa-regular fa-face-frown","fa-regular fa-face-frown-open","fa-regular fa-face-meh","fa-regular fa-face-smile","fa-regular fa-face-grin"]}ngOnInit(){}rateChanged(s){console.log(s)}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-rating"]],decls:132,vars:73,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"W-80","W-lg-40","MX-auto"],[3,"Pattern","Fraction","Rate"],[4,"ngFor","ngForOf"],[3,"Pattern","Fraction","ShowValue","Rate"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Fraction","Rate"],[3,"Fraction","ReadOnly","Rate"],[3,"Fraction","Rate","RateChanged"],[3,"Fraction","Rate","BgColor"],[3,"Fraction","Shadow","Rate","BgColor"],[3,"Fraction","Rate","Icons"],[1,"fa-regular","fa-star"],[1,"fa-solid","fa-heart"],[1,"fa-solid","fa-star","fa-spin"],[1,"fa-solid","fa-tree"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Rating"),t(),e(3,"p"),n(4," Rating provides insight into others opinions and experiences with a product. Use stars or other custom symbols (i.e. smiling faces) :p. "),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Rating"),t()(),e(10,"h4",5),n(11,"Basic example"),t(),e(12,"ExampleViewer")(13,"div",6)(14,"div",7)(15,"Rating",8),v(16,Sr,2,1,"RatingItem",9),t(),p(17,"br"),e(18,"Rating",10),v(19,Cr,1,0,"RatingItem",9),t()()(),e(20,"Tabs",11)(21,"TabPane",12)(22,"textarea",13),n(23,`  <Rating [Pattern]="'Base'" [Fraction]="true" [ShowValue]="true" [Rate]="3.5">
    <RatingItem *ngFor="let _ of [1,2,3,4]"></RatingItem>
  </Rating>
        `),t()()()(),e(24,"h4",5),n(25,"FA Icons"),t(),e(26,"p"),n(27,"By default it takes accent color of active theme's as background."),t(),e(28,"p"),n(29,"Issues: Fraction color not set correctly on some mobile browsers"),t(),e(30,"ExampleViewer")(31,"div",6)(32,"div",7)(33,"Rating",14),v(34,br,2,0,"RatingItem",9),t()()(),e(35,"Tabs",11)(36,"TabPane",12)(37,"textarea",13),n(38,`    <Rating [Fraction]="true" [Rate]="3.5">
      <RatingItem *ngFor="let num of [1,2,3,4,5]"><i class="fa-regular fa-star"></i></RatingItem>
    </Rating>
        `),t()()()(),e(39,"h4",5),n(40,"ReadOnly"),t(),e(41,"p"),n(42," If you want to use a rating to show the score you can use the "),e(43,"code"),n(44,"ReadOnly"),t(),n(45," option "),t(),e(46,"ExampleViewer")(47,"div",6)(48,"div",7)(49,"Rating",15),v(50,yr,2,0,"RatingItem",9),t()()(),e(51,"Tabs",11)(52,"TabPane",12)(53,"textarea",13),n(54,`      <Rating [Fraction]="true" [ReadOnly]="true" [Rate]="3.5">
        <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-regular fa-star"></i></RatingItem>
      </Rating>
        `),t()()()(),e(55,"h4",5),n(56,"Get selected value"),t(),e(57,"p"),n(58," To get the value selected by the user just listen for the "),e(59,"code"),n(60,'(RateChanged)="rateChanged($event)"'),t(),n(61," event that returns a value. Open the browser console to test how it's work "),t(),e(62,"ExampleViewer")(63,"div",6)(64,"div",7)(65,"Rating",16),u("RateChanged",function(g){return o.rateChanged(g)}),v(66,xr,2,0,"RatingItem",9),t()()(),e(67,"Tabs",11)(68,"TabPane",12)(69,"textarea",13),n(70,`      <Rating [Fraction]="true" [Rate]="3.5" (RateChanged)="rateChanged($event)">
        <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-regular fa-star"></i></RatingItem>
      </Rating>
        `),t()(),e(71,"TabPane",12)(72,"textarea",13),n(73,`  rateChanged($event: number): void {
    console.log($event);
  }
        `),t()()()(),e(74,"h4",5),n(75,"Custom Icons & Colors"),t(),e(76,"p"),n(77," You can use FA icons easily. Just put inside "),e(78,"code"),n(79,"RatingItem"),t(),n(80," component. For changing color use "),e(81,"code"),n(82,"[BgColor]"),t(),n(83," porp. "),t(),e(84,"ExampleViewer")(85,"div",6)(86,"div",7)(87,"Rating",17),v(88,Tr,2,0,"RatingItem",9),t(),p(89,"br"),e(90,"Rating",17),v(91,Ir,2,0,"RatingItem",9),t()()(),e(92,"Tabs",11)(93,"TabPane",12)(94,"textarea",13),n(95,`      <Rating [Fraction]="true" [Rate]="2.5" [BgColor]="'darkred'">
        <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-solid fa-heart"></i></RatingItem>
      </Rating>
      <br>
      <!-- Spin -->
      <Rating [Fraction]="true" [Rate]="2.5" [BgColor]="'orange'">
        <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-solid fa-star fa-spin"></i></RatingItem>
      </Rating>
        `),t()()()(),e(96,"h4",5),n(97,"Shadow"),t(),e(98,"p"),n(99," For activate drop shadow on Rating, Just put "),e(100,"code"),n(101,'[Shadow]="true"'),t(),n(102," prop. "),t(),e(103,"ExampleViewer")(104,"div",6)(105,"div",7)(106,"Rating",18),v(107,Er,2,0,"RatingItem",9),t()()(),e(108,"Tabs",11)(109,"TabPane",12)(110,"textarea",13),n(111,`      <Rating [Fraction]="true" [Shadow]="true" [Rate]="2.5" [BgColor]="'#1D9559'">
        <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-solid fa-tree"></i></RatingItem>
      </Rating>
        `),t()()()(),e(112,"h4",5),n(113,"Dynamic icons"),t(),e(114,"p"),n(115," You can make your rating more dynamic by adding "),e(116,"code"),n(117,"[Icons]"),t(),n(118," prop with Fa Icons "),t(),e(119,"ExampleViewer")(120,"div",6)(121,"div",7),p(122,"Rating",19)(123,"br")(124,"Rating",19),t()(),e(125,"Tabs",11)(126,"TabPane",12)(127,"textarea",13),n(128,`  <Rating [Fraction]="true" [Rate]="2.5"
          [Icons]="['fa-solid fa-face-frown', 'fa-solid fa-face-frown-open', 'fa-solid fa-face-meh', 'fa-solid fa-face-smile', 'fa-solid fa-face-grin']"></Rating>
  <br>
  <Rating [Fraction]="true" [Rate]="2.5" [Icons]="regular"></Rating>
        `),t()(),e(129,"TabPane",12)(130,"textarea",13),n(131,`  solid = ['fa-solid fa-face-frown', 'fa-solid fa-face-frown-open', 'fa-solid fa-face-meh', 'fa-solid fa-face-smile', 'fa-solid fa-face-grin',];
  regular = ['fa-regular fa-face-frown', 'fa-regular fa-face-frown-open', 'fa-regular fa-face-meh', 'fa-regular fa-face-smile', 'fa-regular fa-face-grin',];
        `),t()()()()()),m&2&&(i(8),a("href","https://krsln.github.io/Lootstrap/Components/Rating",C),i(7),a("Pattern","Base")("Fraction",!1)("Rate",4),i(),a("ngForOf",ie(64,Pe)),i(2),a("Pattern","Base")("Fraction",!0)("ShowValue",!0)("Rate",3.5),i(),a("ngForOf",ie(65,_r)),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Fraction",!0)("Rate",3.5),i(),a("ngForOf",ie(66,Pe)),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("Fraction",!0)("ReadOnly",!0)("Rate",3.5),i(),a("ngForOf",ie(67,Pe)),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("Fraction",!0)("Rate",3.5),i(),a("ngForOf",ie(68,Pe)),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(15),a("Fraction",!0)("Rate",2.5)("BgColor","darkred"),i(),a("ngForOf",ie(69,Pe)),i(2),a("Fraction",!0)("Rate",2.5)("BgColor","orange"),i(),a("ngForOf",ie(70,Pe)),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("Fraction",!0)("Shadow",!0)("Rate",2.5)("BgColor","#1D9559"),i(),a("ngForOf",ie(71,Pe)),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("Fraction",!0)("Rate",2.5)("Icons",ie(72,Pr)),i(2),a("Fraction",!0)("Rate",2.5)("Icons",o.regular),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[z,Gn,ft,E,I,w,_]});let r=d;return r})();function wr(r,d){if(r&1&&p(0,"option",53),r&2){let l=d.$implicit,s=f();a("value",l)("label",s.Patterns[+l])}}var At=(()=>{let d=class d{constructor(s,m){this.spinnerService=s,this.viewContainerRef=m,this.Patterns=_e,this.SpinnerId="",this.ListPatterns=[],this.Pattern=_e.Border,this.ExpireIn=4e3,this.Color="hsl(45,100%,51%)",this.Overlay=!1,this.Adaptive=!1,this.Small=!1,this.spinnerService.ViewContainerRef=m}ngOnInit(){this.ListPatterns=Object.keys(_e).filter(s=>!isNaN(Number(s)))}Spinner(s,m,o,c,g=void 0,L=!1){this.SpinnerId=this.spinnerService.Show(s,m,o,c,g,L)}};d.\u0275fac=function(m){return new(m||d)(T(Yn),T(je))},d.\u0275cmp=h({type:d,selectors:[["app-ng-spinner"]],decls:216,vars:58,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body","D-flex"],[1,"W-50","W-lg-10","MX-auto"],[3,"Square"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Adaptive"],[3,"Adaptive","Square"],[1,"Body","Text-center"],[1,"Row"],[1,"Col-12","Col-lg-3","MX-auto"],[3,"routerLink"],[1,"Col-12","Col-lg-8","MX-auto"],[1,"Fg-red"],[1,"Fg-orange"],[1,"Fg-yellow"],[1,"Fg-lime"],[1,"Fg-blue"],[1,"Fg-purple"],[1,"Fg-magenta"],[1,"Fg-pink"],["Color","orange"],[1,"Body"],[1,"Text-center"],[3,"Adaptive","Small"],["type","button","disabled","",1,"Btn","Btn-primary"],[3,"Small"],[1,"MT-5","Border-bottom"],[1,"Row","GX-1","PT-3"],[1,"Col-6","Col-lg-4","Form","Form-sm"],[1,"Form-select","Form-select-sm",3,"ngModel","ngModelChange"],[3,"value","label",4,"ngFor","ngForOf"],[1,"Form-label"],["type","text","step","1000","id","Color",1,"Form-control","Form-control-sm",3,"ngModel","ngModelChange"],["for","Color",1,"Form-label"],[1,"Col-6","Col-lg-3","Form","Form-sm"],["type","number","step","1000","id","ExpireIn",1,"Form-control","Form-control-sm",3,"ngModel","ngModelChange"],["for","ExpireIn",1,"Form-label"],[1,"Col-12","Col-lg-12"],[1,"Form-switch","Form-check-inline"],["type","checkbox","id","Overlay",1,"Form-check-input",3,"checked","change"],["for","Overlay",1,"Form-check-label"],["type","checkbox","id","Adaptive",1,"Form-check-input",3,"checked","change"],["for","Adaptive",1,"Form-check-label"],["type","checkbox","id","Small",1,"Form-check-input",3,"checked","change"],["for","Small",1,"Form-check-label"],[1,"Btn","Btn-primary",3,"click"],[3,"value","label"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Spinners"),t(),p(3,"p"),e(4,"p",2)(5,"span",3),n(6,"Styled by"),t(),e(7,"a",4),n(8,"LS Spinners"),t()(),e(9,"h4",5),n(10,"Vortex"),t(),e(11,"ExampleViewer")(12,"div",6)(13,"div",7),p(14,"SpinnerVortex"),t(),e(15,"div",7),p(16,"SpinnerVortex",8),t()(),e(17,"Tabs",9)(18,"TabPane",10)(19,"textarea",11),n(20,`        <SpinnerVortex></SpinnerVortex>
        <SpinnerVortex [Square]="true"></SpinnerVortex>
        `),t()()()(),e(21,"p"),n(22,"With adaptive colors."),t(),e(23,"ExampleViewer")(24,"div",6)(25,"div",7),p(26,"SpinnerVortex",12),t(),e(27,"div",7),p(28,"SpinnerVortex",13),t()(),e(29,"Tabs",9)(30,"TabPane",10)(31,"textarea",11),n(32,`      <SpinnerVortex [Adaptive]="true"></SpinnerVortex>
      <SpinnerVortex [Adaptive]="true" [Square]="true"></SpinnerVortex>
        `),t()()()(),e(33,"h4",5),n(34,"Border"),t(),e(35,"p"),n(36,"Use the border spinners for a lightweight loading indicator"),t(),e(37,"ExampleViewer")(38,"div",14)(39,"div",15)(40,"div",16),p(41,"SpinnerBorder")(42,"SpinnerBorder",12),t()()(),e(43,"Tabs",9)(44,"TabPane",10)(45,"textarea",11),n(46,`          <SpinnerBorder></SpinnerBorder>
          <SpinnerBorder [Adaptive]="true"></SpinnerBorder>
        `),t()()()(),e(47,"h4",5),n(48,"Colors"),t(),e(49,"p"),n(50," The border spinner uses "),e(51,"code"),n(52,"currentColor"),t(),n(53," for its "),e(54,"code"),n(55,"border-color"),t(),n(56,", meaning you can customize the color with "),e(57,"a",17),n(58,"text color utilities"),t(),n(59,". You can use any of our text color utilities on the standard spinner. "),t(),e(60,"ExampleViewer")(61,"div",14)(62,"div",15)(63,"div",18),p(64,"SpinnerBorder",19)(65,"SpinnerBorder",20)(66,"SpinnerBorder",21)(67,"SpinnerBorder",22)(68,"SpinnerBorder",23)(69,"SpinnerBorder",24)(70,"SpinnerBorder",25)(71,"SpinnerBorder",26)(72,"SpinnerBorder",27),t()()(),e(73,"Tabs",9)(74,"TabPane",10)(75,"textarea",11),n(76,`        <SpinnerBorder class="Fg-red"></SpinnerBorder>
        <SpinnerBorder class="Fg-orange"></SpinnerBorder>
        <SpinnerBorder class="Fg-yellow"></SpinnerBorder>
        <SpinnerBorder class="Fg-lime"></SpinnerBorder>
        <SpinnerBorder class="Fg-blue"></SpinnerBorder>
        <SpinnerBorder class="Fg-purple"></SpinnerBorder>
        <SpinnerBorder class="Fg-magenta"></SpinnerBorder>
        <SpinnerBorder class="Fg-pink"></SpinnerBorder>
        <SpinnerBorder Color="orange"></SpinnerBorder>
        `),t()()()(),e(77,"h4",5),n(78,"Grow"),t(),e(79,"p"),n(80," If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow! "),t(),e(81,"ExampleViewer")(82,"div",14)(83,"div",15)(84,"div",16),p(85,"SpinnerGrow")(86,"SpinnerGrow",12),t()()(),e(87,"Tabs",9)(88,"TabPane",10)(89,"textarea",11),n(90,`        <SpinnerGrow></SpinnerGrow>
        <SpinnerGrow [Adaptive]="true"></SpinnerGrow>
        `),t()()()(),e(91,"p"),n(92," Once again, this spinner is built with currentColor, so you can easily change its appearance with "),e(93,"a",17),n(94,"text color utilities"),t(),n(95,". "),t(),e(96,"ExampleViewer")(97,"div",14)(98,"div",15)(99,"div",18),p(100,"SpinnerGrow",19)(101,"SpinnerGrow",20)(102,"SpinnerGrow",21)(103,"SpinnerGrow",22)(104,"SpinnerGrow",23)(105,"SpinnerGrow",24)(106,"SpinnerGrow",25)(107,"SpinnerGrow",26),t()()(),e(108,"Tabs",9)(109,"TabPane",10)(110,"textarea",11),n(111,`        <SpinnerGrow class="Fg-red"></SpinnerGrow>
        <SpinnerGrow class="Fg-orange"></SpinnerGrow>
        <SpinnerGrow class="Fg-yellow"></SpinnerGrow>
        <SpinnerGrow class="Fg-lime"></SpinnerGrow>
        <SpinnerGrow class="Fg-blue"></SpinnerGrow>
        <SpinnerGrow class="Fg-purple"></SpinnerGrow>
        <SpinnerGrow class="Fg-magenta"></SpinnerGrow>
        <SpinnerGrow class="Fg-pink"></SpinnerGrow>
        `),t()()()(),e(112,"h4",5),n(113,"Text align"),t(),e(114,"p"),n(115,"Use following code to align spinner center."),t(),e(116,"ExampleViewer")(117,"div",28)(118,"div",29),p(119,"SpinnerBorder",12),t()(),e(120,"Tabs",9)(121,"TabPane",10)(122,"textarea",11),n(123,`    <div class="Text-center">
      <SpinnerBorder [Adaptive]="true"></SpinnerBorder>
    </div>
        `),t()()()(),e(124,"h4",5),n(125,"Size"),t(),e(126,"p"),n(127," Add "),e(128,"code"),n(129,'[Small]="true"'),t(),n(130," to make a smaller spinner that can quickly be used within other components. "),t(),e(131,"ExampleViewer")(132,"div",14),p(133,"SpinnerBorder",30)(134,"SpinnerGrow",30),t(),e(135,"Tabs",9)(136,"TabPane",10)(137,"textarea",11),n(138,`    <SpinnerBorder [Adaptive]="true" [Small]="true"></SpinnerBorder>
    <SpinnerGrow [Adaptive]="true" [Small]="true"></SpinnerGrow>
        `),t()()()(),e(139,"h4",5),n(140,"Buttons"),t(),e(141,"p"),n(142," Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed. "),t(),e(143,"ExampleViewer")(144,"div",14)(145,"button",31),p(146,"SpinnerBorder",32),t(),e(147,"button",31),p(148,"SpinnerBorder",32),n(149," Loading... "),t(),e(150,"button",31),p(151,"SpinnerGrow",32),t(),e(152,"button",31),p(153,"SpinnerGrow",32),n(154," Loading... "),t()(),e(155,"Tabs",9)(156,"TabPane",10)(157,"textarea",11),n(158,`    <button class="Btn Btn-primary" type="button" disabled>
      <SpinnerBorder [Small]="true"></SpinnerBorder>
    </button>
    <button class="Btn Btn-primary" type="button" disabled>
      <SpinnerBorder [Small]="true"></SpinnerBorder>
      Loading...
    </button>
    <button class="Btn Btn-primary" type="button" disabled>
      <SpinnerGrow [Small]="true"></SpinnerGrow>
    </button>
    <button class="Btn Btn-primary" type="button" disabled>
      <SpinnerGrow [Small]="true"></SpinnerGrow>
      Loading...
    </button>
        `),t()()()(),e(159,"h2",33),n(160,"Through Service"),t(),e(161,"p"),n(162," Need to assign "),e(163,"code"),n(164,"ViewContainerRef"),t(),n(165," first, for creating dynamic components through Service as below: "),e(166,"textarea",11),n(167,`constructor(private spinnerService: SpinnerService, private viewContainerRef: ViewContainerRef) {
  this.spinnerService.ViewContainerRef = viewContainerRef;
}
  `),t()(),e(168,"h4",5),n(169,"Basic usage"),t(),e(170,"p")(171,"code"),n(172,"Adaptive, Color and Small"),t(),n(173," props work on Grow and Border types. "),e(174,"code"),n(175,"Adaptive"),t(),n(176," prop will change color to current theme's accent color if its true. "),t(),e(177,"ExampleViewer")(178,"div",28)(179,"div",34)(180,"div",35)(181,"select",36),V("ngModelChange",function(g){return F(o.Pattern,g)||(o.Pattern=g),g}),v(182,wr,1,2,"option",37),t(),e(183,"label",38),n(184,"Pattern"),t()(),e(185,"div",35)(186,"input",39),V("ngModelChange",function(g){return F(o.Color,g)||(o.Color=g),g}),t(),e(187,"label",40),n(188,"Color"),t()(),e(189,"div",41)(190,"input",42),V("ngModelChange",function(g){return F(o.ExpireIn,g)||(o.ExpireIn=g),g}),t(),e(191,"label",43),n(192,"ExpireIn"),t()(),e(193,"div",44)(194,"div",45)(195,"input",46),u("change",function(){return o.Overlay=!o.Overlay}),t(),e(196,"label",47),n(197,"Overlay"),t()(),e(198,"div",45)(199,"input",48),u("change",function(){return o.Adaptive=!o.Adaptive}),t(),e(200,"label",49),n(201,"Adaptive"),t()(),e(202,"div",45)(203,"input",50),u("change",function(){return o.Small=!o.Small}),t(),e(204,"label",51),n(205,"Small"),t()()()(),e(206,"div",29)(207,"button",52),u("click",function(){return o.Spinner(+o.Pattern,o.Overlay,o.Adaptive,o.ExpireIn,o.Color,o.Small)}),n(208," Show "),t()()(),e(209,"Tabs",9)(210,"TabPane",10)(211,"textarea",11),n(212,`      <button class="Btn Btn-primary"
              (click)="Spinner(+Pattern, Overlay, Adaptive, ExpireIn, Color, Small)">
        Show
      </button>
        `),t()(),e(213,"TabPane",10)(214,"textarea",11),n(215,`Pattern = SpinnerPattern.Border;
ExpireIn = 4000;
Color = 'hsl(45,100%,51%)';
Overlay = false;
Adaptive = false;
Small = false;

constructor(private spinnerService: SpinnerService, private viewContainerRef: ViewContainerRef) {
  this.spinnerService.ViewContainerRef = viewContainerRef;
}

Spinner(Pattern: SpinnerPattern, Overlay: boolean, Adaptive: boolean, expireIn: number,
        Color: any = undefined, Small: boolean = false): void {
  this.SpinnerId = this.spinnerService.Show(Pattern, Overlay, Adaptive, expireIn, Color, Small);
  // setTimeout(() => this.spinnerService.Hide(this.SpinnerId), 5000);
}
        `),t()()()()()),m&2&&(i(7),a("href","https://krsln.github.io/Lootstrap/Components/Spinners",C),i(9),a("Square",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(7),a("Adaptive",!0),i(2),a("Adaptive",!0)("Square",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Adaptive",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("routerLink","/Lootstrap/Utils/Colors/"),i(16),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Adaptive",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(4),a("routerLink","/Lootstrap/Utils/Colors/"),i(15),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(9),a("Adaptive",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(11),a("Adaptive",!0)("Small",!0),i(),a("Adaptive",!0)("Small",!0),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(9),a("Small",!0),i(2),a("Small",!0),i(3),a("Small",!0),i(2),a("Small",!0),i(2),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(9),a("Lang","typescript"),i(15),B("ngModel",o.Pattern),i(),a("ngForOf",o.ListPatterns),i(4),B("ngModel",o.Color),i(4),B("ngModel",o.ExpireIn),i(5),a("checked",o.Overlay),i(4),a("checked",o.Adaptive),i(4),a("checked",o.Small),i(6),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[z,Ke,et,ve,Me,Ze,se,me,fe,vt,ht,St,E,I,w,_]});let r=d;return r})();var Nt=(()=>{let d=class d{constructor(){}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-table"]],decls:21,vars:6,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Table"),t(),e(3,"p",2)(4,"span",3),n(5,"Styled by"),t(),e(6,"a",4),n(7,"LS Tables"),t()(),e(8,"h1",5),n(9,"Basic usage TODO"),t(),e(10,"p"),n(11,"Data table TODOs(sort, filter, style, checkbox)"),t(),e(12,"ExampleViewer"),p(13,"div",6),e(14,"Tabs",7)(15,"TabPane",8)(16,"textarea",9),n(17,`    <Table [Rows]="rows" [Columns]="columns"></Table>
        `),t()(),e(18,"TabPane",8)(19,"textarea",9),n(20,`  columns: ColumnDef[] = [
    {Field: 'id', Header: 'ID', Width: '70px'},
    {Field: 'firstName', Header: 'First name', Width: '130px'},
    {Field: 'lastName', Header: 'Last name', Width: '130px'},
    {Field: 'age', Header: 'Age', Type: ColumnType.Number, Width: '90px',},
    {
      Field: 'fullName', Header: 'Full name',
      Description: 'This column has a value getter and is not sortable.',
      Sortable: false, Width: '160px',
      Getter: (row: any) => \`\${row.firstName || ''} \${row.lastName || ''}\`,
    },
  ] as unknown as ColumnDef[];

  rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
  ];
        `),t()()()()()),m&2&&(i(6),a("href","https://krsln.github.io/Lootstrap/Components/Tables",C),i(8),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[E,I,w,_]});let r=d;return r})();var kt=(()=>{let d=class d{constructor(){this.LoremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-tabs"]],decls:121,vars:58,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"M-2"],[3,"ActiveTab"],[3,"Label","Anim"],[3,"Label"],[3,"Label","Disabled"],[3,"Design"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Vertical","Design"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Tabs"),t(),e(3,"p"),n(4,"Tabs & Pills are quasi-navigation components which can highly improve website clarity and increase user experience."),t(),e(5,"p",2)(6,"span",3),n(7,"Styled by"),t(),e(8,"a",4),n(9,"LS Pills"),t(),e(10,"a",4),n(11,"LS Tabs"),t()(),e(12,"h4",5),n(13,"Tabs"),t(),e(14,"p"),n(15,"Anim: "),e(16,"code"),n(17,"'FadeIn' | 'BounceIn' | 'ZoomIn'"),t()(),e(18,"ExampleViewer")(19,"div",6)(20,"div",7)(21,"Tabs",8)(22,"TabPane",9)(23,"p")(24,"strong"),n(25,"Home"),t(),n(26),t()(),e(27,"TabPane",9)(28,"p")(29,"strong"),n(30,"Profile"),t(),n(31),t()(),e(32,"TabPane",10)(33,"p")(34,"strong"),n(35,"Contact"),t(),n(36),t()(),e(37,"TabPane",11)(38,"p")(39,"strong"),n(40,"Disabled"),t(),n(41),t()()()()(),e(42,"Tabs",12)(43,"TabPane",10)(44,"textarea",13),n(45),t()(),e(46,"TabPane",10)(47,"textarea",13),n(48,`    LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        `),t()()()(),e(49,"h4",5),n(50,"Pill"),t(),e(51,"ExampleViewer")(52,"div",6)(53,"div",7)(54,"Tabs",12)(55,"TabPane",10)(56,"p")(57,"strong"),n(58,"Home"),t(),n(59),t()(),e(60,"TabPane",10)(61,"p")(62,"strong"),n(63,"Profile"),t(),n(64),t()(),e(65,"TabPane",10)(66,"p")(67,"strong"),n(68,"Contact"),t(),n(69),t()()()()(),e(70,"Tabs",12)(71,"TabPane",10)(72,"textarea",13),n(73,`  <Tabs [Design]="'Pill'">
  <TabPane [Label]="'Home'">
    <p><strong>Home</strong> {/{LoremIpsum}}</p>
  </TabPane>
  <TabPane [Label]="'Profile'">
    <p><strong>Profile</strong> {/{LoremIpsum}}</p>
  </TabPane>
  <TabPane [Label]="'Contact'">
    <p><strong>Contact</strong> {/{LoremIpsum}}</p>
  </TabPane>
  </Tabs>
      `),t()()()(),e(74,"h4",5),n(75,"Vertical"),t(),e(76,"p"),n(77,"Stack your navigation by changing the flex item direction with the "),e(78,"code"),n(79,'[Vertical]="true"'),t(),n(80," prop."),t(),e(81,"ExampleViewer")(82,"div",6)(83,"div",7)(84,"Tabs",14)(85,"TabPane",10)(86,"p")(87,"strong"),n(88,"Home"),t(),n(89),t()(),e(90,"TabPane",10)(91,"p")(92,"strong"),n(93,"Profile"),t(),n(94),t()(),e(95,"TabPane",10)(96,"p")(97,"strong"),n(98,"Contact"),t(),n(99),t()()(),p(100,"hr"),e(101,"Tabs",14)(102,"TabPane",10)(103,"p")(104,"strong"),n(105,"Home"),t(),n(106),t()(),e(107,"TabPane",10)(108,"p")(109,"strong"),n(110,"Profile"),t(),n(111),t()(),e(112,"TabPane",10)(113,"p")(114,"strong"),n(115,"Contact"),t(),n(116),t()()()()(),e(117,"Tabs",12)(118,"TabPane",10)(119,"textarea",13),n(120),t()()()()()),m&2&&(i(8),a("href","https://krsln.github.io/Lootstrap/Components/NavPills",C),i(2),a("href","https://krsln.github.io/Lootstrap/Components/NavTabs",C),i(11),a("ActiveTab","Profile"),i(),a("Label","Home")("Anim","ZoomIn"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Profile")("Anim","BounceIn"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Contact"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Disabled")("Disabled",!0),i(4),A(" ",o.LoremIpsum,""),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(),Xt(`        <Tabs [ActiveTab]="'Profile'">
          <TabPane [Label]="'Home'" [Anim]="'ZoomIn'">
            <p><strong>Home</strong> `,o.LoremIpsum,`</p>
          </TabPane>
          <TabPane [Label]="'Profile'" [Anim]="'BounceIn'">
            <p><strong>Profile</strong> `,o.LoremIpsum,`</p>
          </TabPane>
          <TabPane [Label]="'Contact'">
            <p><strong>Contact</strong> `,o.LoremIpsum,`</p>
          </TabPane>
          <TabPane [Label]="'Disabled'" [Disabled]="true">
            <p><strong>Disabled</strong> `,o.LoremIpsum,`</p>
          </TabPane>
        </Tabs>
      `),i(),a("Label","TypeScript"),i(),a("Lang","typescript"),i(7),a("Design","Pill"),i(),a("Label","Home"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Profile"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Contact"),i(4),A(" ",o.LoremIpsum,""),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(12),a("Vertical",!0)("Design","Tab"),i(),a("Label","Home"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Profile"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Contact"),i(4),A(" ",o.LoremIpsum,""),i(2),a("Vertical",!0)("Design","Pill"),i(),a("Label","Home"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Profile"),i(4),A(" ",o.LoremIpsum,""),i(),a("Label","Contact"),i(4),A(" ",o.LoremIpsum,""),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(),Zt(`    <Tabs [Vertical]="true" [Design]="'Tab'">
      <TabPane [Label]="'Home'">
        <p><strong>Home</strong> `,o.LoremIpsum,`</p>
      </TabPane>
      <TabPane [Label]="'Profile'">
        <p><strong>Profile</strong> `,o.LoremIpsum,`</p>
      </TabPane>
      <TabPane [Label]="'Contact'">
        <p><strong>Contact</strong> `,o.LoremIpsum,`</p>
      </TabPane>
    </Tabs>
    <hr>
    <Tabs [Vertical]="true" [Design]="'Pill'">
      <TabPane [Label]="'Home'">
        <p><strong>Home</strong> `,o.LoremIpsum,`</p>
      </TabPane>
      <TabPane [Label]="'Profile'">
        <p><strong>Profile</strong> `,o.LoremIpsum,`</p>
      </TabPane>
      <TabPane [Label]="'Contact'">
        <p><strong>Contact</strong> `,o.LoremIpsum,`</p>
      </TabPane>
    </Tabs>
        `))},dependencies:[E,I,w,_]});let r=d;return r})();var Dt=(()=>{let d=class d{constructor(){}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-theme"]],decls:18,vars:5,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"MT-5"],[1,"Body"],[1,"MX-auto",2,"width","160px"],[2,"width","100px"],[2,"width","160px"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Theme"),t(),p(3,"p"),e(4,"h4",2),n(5,"Theme & Accent"),t(),e(6,"ExampleViewer")(7,"div",3)(8,"div",4),p(9,"ThemePicker",5)(10,"AccentPicker",6),t()(),e(11,"Tabs",7)(12,"TabPane",8)(13,"textarea",9),n(14,`      <ThemePicker style="width: 100px"></ThemePicker>
      <AccentPicker style="width: 160px"></AccentPicker>
        `),t()(),e(15,"TabPane",8)(16,"textarea",9),n(17,`  import {ThemeModule} from '@qrsln/lootstrap-angular/Libs/Theme';

  @NgModule({
    imports: [ThemeModule, /*...*/],
  })
        `),t()()()()()),m&2&&(i(11),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[E,I,mn,dn,w,_]});let r=d;return r})();function Mr(r,d){if(r&1&&(e(0,"div"),p(1,"span",24),t()),r&2){let l=d.$implicit;i(),a("innerHTML",l.toLocaleString(),U)}}function Lr(r,d){if(r&1&&(e(0,"div"),p(1,"span",25),t()),r&2){let l=d.$implicit,s=d.index;i(),a("Date",l)("Live",s==0)("Locale","en")}}function Ar(r,d){if(r&1&&(e(0,"div"),p(1,"span",26),t()),r&2){let l=d.$implicit,s=d.index;i(),a("Date",l)("Live",s==0)("Locale","tr")}}function Nr(r,d){if(r&1&&(e(0,"div"),p(1,"span",25),t()),r&2){let l=d.$implicit,s=d.index;i(),a("Date",l)("Live",s==0)("Locale","ru")}}function kr(r,d){if(r&1&&(e(0,"span",27),n(1),$e(2,"TimeAgo"),t()),r&2){let l=d.$implicit;i(),P(tn(2,1,l))}}var Rt=(()=>{let d=class d{constructor(){this.minuteInMs=6e4,this.hourInMs=this.minuteInMs*60,this.dayInMs=this.hourInMs*24,this.monthInMs=this.dayInMs*30,this.yearInMs=this.monthInMs*12,this.Now=0,this.dates=[],this.countdown=[]}ngOnInit(){this.Now=Date.now();let s=new Date().getTime();this.dates=[new Date,new Date(s-this.minuteInMs*45),new Date(s-this.hourInMs),new Date(s-this.hourInMs*24),new Date(s-this.dayInMs*21),new Date(s-this.monthInMs*6),new Date(s-this.yearInMs*2),new Date(s+this.hourInMs*8)],this.countdown=[new Date(s+this.minuteInMs*45),new Date(s+this.hourInMs),new Date(s+this.hourInMs*24)]}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-time"]],decls:85,vars:35,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"Row"],[1,"Col-auto"],[4,"ngFor","ngForOf"],[1,"Col"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"Badge","Bg-info","ME-2"],["class","Badge Bg-light ME-2",4,"ngFor","ngForOf"],[1,"Col-12","Col-lg-6","MX-auto"],["ClassName","Border Shadow",3,"Date"],[1,"Row","Justify-content-center"],[1,"Col-12","Col-lg-4"],["ClassName","Fg-yellow",3,"Date"],["ClassName","Fg-green",3,"Date"],[1,"Col-12","Col-lg-6"],["ClassName","Fg-orange"],[1,"ME-2",3,"innerHTML"],["TimeAgo","",1,"Badge","Bg-light",3,"Date","Live","Locale"],["TimeAgo","",1,"Badge","Bg-info",3,"Date","Live","Locale"],[1,"Badge","Bg-light","ME-2"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Time"),t(),p(3,"p"),e(4,"p",2)(5,"span",3),n(6,"Styled by"),t(),e(7,"a",4),n(8,"LS Loader"),t()(),e(9,"h2",5),n(10,"TimeAgo"),t(),e(11,"h4",5),n(12,"Through Directive"),t(),e(13,"p"),n(14,"Locale => "),e(15,"code"),n(16,"en, es, de, ru, tr"),t()(),e(17,"ExampleViewer")(18,"div",6)(19,"div",7)(20,"div",8),v(21,Mr,2,1,"div",9),t(),e(22,"div",10),v(23,Lr,2,3,"div",9),t(),e(24,"div",10),v(25,Ar,2,3,"div",9),t(),e(26,"div",10),v(27,Nr,2,3,"div",9),t()()(),e(28,"Tabs",11)(29,"TabPane",12)(30,"textarea",13),n(31,`    <div ngFor="let date of dates; let index=index;">
      <span class="Badge Bg-light" TimeAgo [Date]="date" [Live]="index==0" [Locale]="'en'"></span>
    </div>
        `),t()(),e(32,"TabPane",12)(33,"textarea",13),n(34,`    const time = new Date().getTime();
    this.dates = [
      new Date(),
      new Date(time - this.minuteInMs * 45),  // 45min ago
      new Date(time - this.hourInMs),         // 1H ago
      new Date(time - this.hourInMs * 24),    // 24H ago
      new Date(time - this.dayInMs * 21),     // 3W ago
      new Date(time - this.monthInMs * 6),    // 6M ago
      new Date(time - this.yearInMs * 2),     // 2Y ago
      new Date(time + this.hourInMs * 8),     // 8H later
    ];
        `),t()()()(),e(35,"h4",5),n(36,"Through Pipe"),t(),e(37,"ExampleViewer")(38,"div",6)(39,"span",14),n(40),$e(41,"TimeAgo"),t(),e(42,"span",14),n(43),$e(44,"TimeAgo"),t(),p(45,"br"),v(46,kr,3,3,"span",15),t(),e(47,"Tabs",11)(48,"TabPane",12)(49,"textarea",13),n(50,`    <span class="Badge Bg-info ME-2">{/{dates[0] | TimeAgo:true:''}/}</span>
    <span class="Badge Bg-info ME-2">{/{dates[0] | TimeAgo:true:'tr'}/}</span>
    <span class="Badge Bg-light ME-2" *ngFor="let date of dates; let index=index;">{/{date | TimeAgo}/}</span>
        `),t()()()(),e(51,"h2",5),n(52,"Timer"),t(),e(53,"h4",5),n(54,"Countdown"),t(),e(55,"ExampleViewer")(56,"div",6)(57,"div",7)(58,"div",16),p(59,"Countdown",17),t()(),e(60,"div",18)(61,"div",19),p(62,"Countdown",20),t(),e(63,"div",19),p(64,"Countdown",21),t()()(),e(65,"Tabs",11)(66,"TabPane",12)(67,"textarea",13),n(68,`      <Countdown ClassName="Border Shadow" [Date]="countdown[0]"></Countdown>
      <Countdown ClassName="Fg-yellow" [Date]="countdown[1]"></Countdown>
      <Countdown ClassName="Fg-green" [Date]="countdown[2]"></Countdown>
        `),t()(),e(69,"TabPane",12)(70,"textarea",13),n(71,`  Now = Date.now();
  countdown = [
    new Date(new Date().getTime() + this.minuteInMs * 45),  // 45min later
    new Date(new Date().getTime() + this.hourInMs),         // 1H later
    new Date(new Date().getTime() + this.hourInMs * 24),    // 24H later
  ];
        `),t()()()(),e(72,"h4",5),n(73,"Stopwatch / Chronometer"),t(),e(74,"ExampleViewer")(75,"div",6)(76,"div",7)(77,"div",22),p(78,"Stopwatch"),t(),e(79,"div",22),p(80,"Chronometer",23),t()()(),e(81,"Tabs",11)(82,"TabPane",12)(83,"textarea",13),n(84,`  <Stopwatch></Stopwatch>
  <Chronometer ClassName="Fg-orange"></Chronometer>
        `),t()()()()()),m&2&&(i(7),a("href","https://krsln.github.io/Lootstrap/Components/Loader",C),i(14),a("ngForOf",o.dates),i(2),a("ngForOf",o.dates),i(2),a("ngForOf",o.dates),i(2),a("ngForOf",o.dates),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(7),P(st(41,27,o.dates[0],!0,"")),i(3),P(st(44,31,o.dates[0],!0,"tr")),i(3),a("ngForOf",o.dates),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(10),a("Date",o.countdown[0]),i(3),a("Date",o.countdown[1]),i(2),a("Date",o.countdown[2]),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(11),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"))},dependencies:[z,E,I,Xn,ri,oi,w,_,Zn]});let r=d;return r})();var Bt=(()=>{let d=class d{constructor(){}ngOnInit(){}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-timeline"]],decls:190,vars:73,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"Row"],[1,"Col-12","Col-lg-6"],[3,"Anim"],[1,"Timeline-header"],[1,"Timeline-badge"],[3,"BgColor","qlTooltip"],[1,"Fg-light","fa-regular","fa-paper-plane"],[3,"Orientation","Caret"],[1,"Border-bottom"],[3,"BgColor"],[1,"Fg-light","fa-solid","fa-gift"],[3,"Inverted"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[3,"Layout","Anim"],[3,"Caret"],[1,"Card-img"],[3,"Dummy","Captions","NavigationIndicators"],[1,"Fg-light","fa-solid","fa-pizza-slice"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Timeline"),t(),e(3,"p",2)(4,"span",3),n(5,"Styled by"),t(),e(6,"a",4),n(7,"LS Timeline"),t()(),e(8,"h4",5),n(9,"Side"),t(),e(10,"ExampleViewer")(11,"div",6)(12,"div",7)(13,"div",8)(14,"Timeline",9)(15,"div",10)(16,"h2"),n(17,"Timeline"),t(),e(18,"p"),n(19,"Default"),t()(),e(20,"TimelineItem")(21,"div",11)(22,"Avatar",12),p(23,"i",13),t()(),e(24,"Card",14)(25,"h5",15),n(26,"Title"),t(),e(27,"p"),n(28," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()(),e(29,"TimelineItem")(30,"div",11)(31,"Avatar",16),p(32,"i",17),t()(),e(33,"Card",14)(34,"h5",15),n(35,"Title"),t(),e(36,"p"),n(37," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()()(),e(38,"div",8)(39,"Timeline",9)(40,"div",10)(41,"h2"),n(42,"Timeline"),t(),e(43,"p"),n(44,"Inverted"),t()(),e(45,"TimelineItem",18)(46,"div",11)(47,"Avatar",16),p(48,"i",13),t()(),e(49,"Card",14)(50,"h5",15),n(51,"Title"),t(),e(52,"p"),n(53," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()(),e(54,"TimelineItem",18)(55,"div",11)(56,"Avatar",16),p(57,"i",17),t()(),e(58,"Card",14)(59,"h5",15),n(60,"Title"),t(),e(61,"p"),n(62," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()()()()(),e(63,"Tabs",19)(64,"TabPane",20)(65,"textarea",21),n(66,`  <Timeline [Anim]="'Shake'">
    <div class="Timeline-header">
      <h2>Timeline</h2>
      <p>Description</p>
    </div>
    <TimelineItem>
      <div class="Timeline-badge">
        <Avatar [BgColor]="'red'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
      </div>
      <Card [Orientation]="'Horizontal'" [Caret]="'left'">
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
    <TimelineItem>
      <div class="Timeline-badge">
        <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
      </div>
      <Card [Orientation]="'Horizontal'" [Caret]="'left'">
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
  </Timeline>
        `),t(),e(67,"textarea",21),n(68,`  <Timeline [Anim]="'Shake'">
  <div class="Timeline-header">
    <h2>Timeline</h2>
    <p>Description</p>
  </div>
  <TimelineItem [Inverted]="true">
    <div class="Timeline-badge">
      <Avatar [BgColor]="'red'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
    </div>
    <Card [Orientation]="'Horizontal'" [Caret]="'right'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
  <TimelineItem [Inverted]="true">
    <div class="Timeline-badge">
      <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
    </div>
    <Card [Orientation]="'Horizontal'" [Caret]="'right'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
  </Timeline>
        `),t()()()(),e(69,"h4",5),n(70,"Centered"),t(),e(71,"ExampleViewer")(72,"div",6)(73,"Timeline",22)(74,"TimelineItem")(75,"div",11)(76,"Avatar",12),p(77,"i",13),t()(),e(78,"Card",23)(79,"h5",15),n(80,"Title"),t(),e(81,"p"),n(82," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()(),e(83,"TimelineItem",18)(84,"div",11)(85,"Avatar",16),p(86,"i",17),t()(),e(87,"Card",23)(88,"div",24),p(89,"Carousel",25),t(),e(90,"h5",15),n(91,"Title"),t(),e(92,"p"),n(93," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()()(),e(94,"Tabs",19)(95,"TabPane",20)(96,"textarea",21),n(97,`  <Timeline [Layout]="'Centered'" [Anim]="'Shake'">
    <TimelineItem>
      <div class="Timeline-badge">
        <Avatar [BgColor]="'red'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
      </div>
      <Card [Caret]="'right'">
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
    <TimelineItem [Inverted]="true">
      <div class="Timeline-badge">
        <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
      </div>
      <Card [Caret]="'left'">
        <div class="Card-img">
          <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
        </div>
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
  </Timeline>
        `),t()()()(),e(98,"h4",5),n(99,"Connected"),t(),e(100,"ExampleViewer")(101,"div",6)(102,"Timeline",22)(103,"TimelineItem")(104,"div",11)(105,"Avatar",12),p(106,"i",13),t()(),e(107,"Card",23)(108,"h5",15),n(109,"Title"),t(),e(110,"p"),n(111," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()(),e(112,"TimelineItem",18)(113,"div",11)(114,"Avatar",16),p(115,"i",17),t()(),e(116,"Card",23)(117,"h5",15),n(118,"Title"),t(),e(119,"p"),n(120," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()(),e(121,"TimelineItem")(122,"div",11)(123,"Avatar",12),p(124,"i",26),t()(),e(125,"Card",23)(126,"h5",15),n(127,"Title"),t(),e(128,"p"),n(129," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()()(),e(130,"Tabs",19)(131,"TabPane",20)(132,"textarea",21),n(133,`  <Timeline [Layout]="'Connected'" [Anim]="'Shake'">
    <TimelineItem>
      <div class="Timeline-badge">
        <Avatar [BgColor]="'red'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
      </div>
      <Card [Caret]="'left'">
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
    <TimelineItem [Inverted]="true">
      <div class="Timeline-badge">
        <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
      </div>
      <Card [Caret]="'right'">
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
    <TimelineItem>
      <div class="Timeline-badge">
        <Avatar [BgColor]="'orange'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-solid fa-pizza-slice"></i></Avatar>
      </div>
      <Card [Caret]="'left'">
        <h5 class="Border-bottom">Title</h5>
        <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      </Card>
    </TimelineItem>
  </Timeline>
        `),t()()()(),e(134,"h4",5),n(135,"Animations"),t(),e(136,"ExampleViewer")(137,"div",6)(138,"p"),n(139,"Shake"),t(),e(140,"Timeline",9)(141,"TimelineItem")(142,"div",11)(143,"Avatar",12),p(144,"i",13),t()(),e(145,"Card",14)(146,"h5",15),n(147,"Title"),t(),e(148,"p"),n(149," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()(),e(150,"p"),n(151,"Wobble"),t(),e(152,"Timeline",9)(153,"TimelineItem")(154,"div",11)(155,"Avatar",12),p(156,"i",13),t()(),e(157,"Card",14)(158,"h5",15),n(159,"Title"),t(),e(160,"p"),n(161," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()(),e(162,"p"),n(163,"Jello"),t(),e(164,"Timeline",9)(165,"TimelineItem")(166,"div",11)(167,"Avatar",12),p(168,"i",13),t()(),e(169,"Card",14)(170,"h5",15),n(171,"Title"),t(),e(172,"p"),n(173," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()(),e(174,"p"),n(175,"Rubber-band"),t(),e(176,"Timeline",9)(177,"TimelineItem")(178,"div",11)(179,"Avatar",12),p(180,"i",13),t()(),e(181,"Card",14)(182,"h5",15),n(183,"Title"),t(),e(184,"p"),n(185," Some quick example text to build on the card title and make up the bulk of the card's content. "),t()()()()(),e(186,"Tabs",19)(187,"TabPane",20)(188,"textarea",21),n(189,`    <Timeline [Anim]="'Shake'">
    <Timeline [Anim]="'Wobble'">
    <Timeline [Anim]="'Jello'">
    <Timeline [Anim]="'Rubber-band'">
        `),t()()()()()),m&2&&(i(6),a("href","https://krsln.github.io/Lootstrap/Components/Timeline",C),i(8),a("Anim","Shake"),i(8),a("BgColor","red")("qlTooltip","Avatar"),i(2),a("Orientation","Horizontal")("Caret","left"),i(7),a("BgColor","blue"),i(2),a("Orientation","Horizontal")("Caret","left"),i(6),a("Anim","Jello"),i(6),a("Inverted",!0),i(2),a("BgColor","red"),i(2),a("Orientation","Horizontal")("Caret","right"),i(5),a("Inverted",!0),i(2),a("BgColor","blue"),i(2),a("Orientation","Horizontal")("Caret","right"),i(5),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Lang","html"),i(6),a("Layout","Centered")("Anim","Shake"),i(3),a("BgColor","red")("qlTooltip","Avatar"),i(2),a("Caret","right"),i(5),a("Inverted",!0),i(2),a("BgColor","blue"),i(2),a("Caret","left"),i(2),a("Dummy",!0)("Captions",!1)("NavigationIndicators",!1),i(5),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(6),a("Layout","Connected")("Anim","Shake"),i(3),a("BgColor","red")("qlTooltip","Avatar"),i(2),a("Caret","left"),i(5),a("Inverted",!0),i(2),a("BgColor","blue"),i(2),a("Caret","right"),i(7),a("BgColor","orange")("qlTooltip","Avatar"),i(2),a("Caret","left"),i(5),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(8),a("Anim","Shake"),i(3),a("BgColor","red")("qlTooltip","Shake"),i(2),a("Orientation","Horizontal")("Caret","left"),i(7),a("Anim","Wobble"),i(3),a("BgColor","red")("qlTooltip","Wobble"),i(2),a("Orientation","Horizontal")("Caret","left"),i(7),a("Anim","Jello"),i(3),a("BgColor","red")("qlTooltip","Jello"),i(2),a("Orientation","Horizontal")("Caret","left"),i(7),a("Anim","Rubber-band"),i(3),a("BgColor","red")("qlTooltip","Rubber-band"),i(2),a("Orientation","Horizontal")("Caret","left"),i(5),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"))},dependencies:[tt,nt,ke,E,I,ei,yt,w,_,Pn]});let r=d;return r})();var Ft=(()=>{let d=class d{constructor(){this.Basic=[{Id:1,Expanded:!1,Content:{Text:"Applications"},Children:[{Id:11,Content:{Text:"WebStorm"}}]},{Id:2,Content:{Text:"Files"},Children:[{Id:21,PId:2,Content:{Text:"tree-view"},Children:[{Id:211,PId:21,Content:{Text:"tree-view.component.html"}},{Id:212,PId:21,Content:{Text:"tree-view.component.ts"}}]},{Id:22,PId:2,Expanded:!1,Content:{Text:"Models"},Children:[{Id:221,PId:22,Content:{Text:"index.ts"}}]}]}],this.Multiple=JSON.parse(JSON.stringify(this.Basic)),this.Mail=[{Id:1,Content:{Text:"All Mail",Icon:"fa-solid fa-envelope"}},{Id:2,Content:{Text:"Trash",Icon:"fa-solid fa-trash"}},{Id:3,Content:{Text:"Categories",Icon:"fa-solid fa-folder"},Children:[{Id:31,PId:3,Content:{Text:"Social",Icon:"fa-solid fa-user-group",Caption:"13"}},{Id:32,PId:3,Content:{Text:"Updates",Icon:"fa-solid fa-circle-info",Caption:"2,666"}},{Id:33,PId:3,Content:{Text:"Forums",Icon:"fa-solid fa-comments",Caption:"5,366"}},{Id:34,PId:3,Content:{Text:"Promotions",Icon:"fa-solid fa-tag",Caption:"842"}}]},{Id:4,Content:{Text:"History",Icon:"fa-solid fa-folder"}}],this.Disabled=[{Id:1,Content:{Text:"One"},Children:[{Id:11,Content:{Text:"Two"}},{Id:12,Content:{Text:"Tree"}}]},{Separator:!0},{Id:2,Expanded:!1,Disabled:!0,Content:{Text:"Four"},Children:[{Content:{Text:"NaN"}}]},{Separator:!0},{Id:3,Content:{Text:"Five"},Children:[{Id:31,PId:3,Expanded:!1,Content:{Text:"Six"},Children:[{Id:311,PId:31,Content:{Text:"Seven"}},{Id:312,PId:31,Content:{Text:"Eight"}}]}]}],this.Categories=this.FillCategories(),this.Sort=!1}ngOnInit(){}FillCategories(){let s=[],m=[{Id:1,Text:"Balkans Tours"},{Id:2,Text:"Spain Tours"},{Id:3,Text:"Italy Tours"}];m.forEach(o=>s.push({Id:o.Id,Content:{Text:o.Text},Expanded:o.Id==2,Children:[]}));for(let o=10;o<=30;o++){let c=Math.floor(Math.random()*m.length)+1;s.find(L=>L.Id===c)?.Children.push({Id:o,Content:{Text:this.Word(4)+" Tour"},PId:c})}return s}Word(s){let m="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=o.length;for(let g=0;g<s;g++)m+=o.charAt(Math.floor(Math.random()*c));return m}SelectedItems(s){console.log("Selected (raw)",s,"Ids",s.map(m=>m.Id))}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-tree-view"]],decls:71,vars:33,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body"],[1,"Row","G-1"],[1,"Col-12","Col-lg-6"],[3,"Mode","Items"],[3,"Mode","Items","SelectedItems"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"W-100","W-lg-50","MX-auto"],[1,"Form-check","Form-check-inline"],["type","checkbox","id","Sort",1,"Form-check-input",3,"checked","change"],["for","Sort",1,"Form-check-label"],[3,"Mode","Items","Sort","SelectedItems"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - TreeView"),t(),e(3,"p",2)(4,"span",3),n(5,"Styled by"),t(),e(6,"a",4),n(7,"LS TreeView"),t()(),e(8,"h4",5),n(9,"Basic usage"),t(),e(10,"ExampleViewer")(11,"div",6)(12,"div",7)(13,"div",8),p(14,"TreeView",9),t(),e(15,"div",8)(16,"TreeView",10),u("SelectedItems",function(g){return o.SelectedItems(g)}),t()()()(),e(17,"Tabs",11)(18,"TabPane",12)(19,"textarea",13),n(20,`  <TreeView [Mode]="'Single'" [Items]="Basic"></TreeView>
  <TreeView [Mode]="'Multiple'" [Items]="Basic" (SelectedItems)="SelectedItems($event)"></TreeView>
        `),t()(),e(21,"TabPane",12)(22,"textarea",13),n(23,`  Basic: TreeItem [] = [
    {Id: 1, Expanded: false, Content: {Text: 'Applications'}, Children: [{Id: 11, Content: {Text: 'WebStorm'}}]},
    {
      Id: 2, Content: {Text: 'Files'}, Children: [
        {
          Id: 21, PId: 2, Content: {Text: 'tree-view'}, Children: [
            {Id: 211, PId: 21, Content: {Text: 'tree-view.component.html'}},
            {Id: 212, PId: 21, Content: {Text: 'tree-view.component.ts'}}
          ]
        },
        {
          Id: 22, PId: 2, Expanded: false, Content: {Text: 'Models'}, Children: [
            {Id: 221, PId: 22, Content: {Text: 'index.ts'}}
          ]
        },
      ]
    }
  ] as TreeItem[];

  SelectedItems(results: TreeItem[]) {
    console.log('Selected (raw)', results, 'Ids', results.map(x => x.Id));
  }
        `),t()()()(),e(24,"h2",5),n(25,"Customization"),t(),e(26,"p"),n(27,"Custom icons, border and animation"),t(),e(28,"h4",5),n(29,"Mail design"),t(),e(30,"ExampleViewer")(31,"div",6)(32,"div",14)(33,"TreeView",10),u("SelectedItems",function(g){return o.SelectedItems(g)}),t()()(),e(34,"Tabs",11)(35,"TabPane",12)(36,"textarea",13),n(37,`  <TreeView [Mode]="'Single'" [Items]="Mail" (SelectedItems)="SelectedItems($event)"></TreeView>
        `),t()(),e(38,"TabPane",12)(39,"textarea",13),n(40,`  Mail: TreeItem [] = [
    {Id: 1, Content: {Text: 'All Mail', Icon: 'fa-solid fa-envelope'}},
    {Id: 2, Content: {Text: 'Trash', Icon: 'fa-solid fa-trash'}},
    {
      Id: 3, Content: {Text: 'Categories', Icon: 'fa-solid fa-folder'}, Children: [
        {Id: 31, PId: 3, Content: {Text: 'Social', Icon: 'fa-solid fa-user-group', Caption: '13'},},
        {Id: 32, PId: 3, Content: {Text: 'Updates', Icon: 'fa-solid fa-circle-info', Caption: '2,666'},},
        {Id: 33, PId: 3, Content: {Text: 'Forums', Icon: 'fa-solid fa-comments', Caption: '5,366'},},
        {Id: 34, PId: 3, Content: {Text: 'Promotions', Icon: 'fa-solid fa-tag', Caption: '842'},},
      ]
    },
    {Id: 4, Content: {Text: 'History', Icon: 'fa-solid fa-folder'}},
  ] as TreeItem[];
        `),t()()()(),e(41,"h4",5),n(42,"Disabled Item and Separator"),t(),e(43,"ExampleViewer")(44,"div",6)(45,"div",14)(46,"TreeView",10),u("SelectedItems",function(g){return o.SelectedItems(g)}),t()()(),e(47,"Tabs",11)(48,"TabPane",12)(49,"textarea",13),n(50,`    <TreeView [Mode]="'Single'" [Items]="Customized" (SelectedItems)="SelectedItems($event)"></TreeView>
        `),t()(),e(51,"TabPane",12)(52,"textarea",13),n(53,`  Disabled: TreeItem [] = [
    {Id: 1, Content: {Text: 'One'}, Children: [{Id: 11, Content: {Text: 'Two'}}, {Id: 12, Content: {Text: 'Tree'}}]},
    {Separator: true} as TreeItem,
    {
      Id: 2,
      Expanded: false, Disabled: true, Content: {Text: 'Four'}, Children: [{Content: {Text: 'NaN'}}]
    },
    {Separator: true} as TreeItem,
    {
      Id: 3, Content: {Text: 'Five'}, Children: [
        {
          Id: 31, PId: 3, Expanded: false, Content: {Text: 'Six'}, Children: [
            {Id: 311, PId: 31, Content: {Text: 'Seven'}},
            {Id: 312, PId: 31, Content: {Text: 'Eight'}}
          ]
        },
      ]
    }
  ] as TreeItem[];
        `),t()()()(),e(54,"h4",5),n(55,"Categories"),t(),e(56,"ExampleViewer")(57,"div",6)(58,"div",15)(59,"input",16),u("change",function(){return o.Sort=!o.Sort}),t(),e(60,"label",17),n(61,"Sort"),t()(),e(62,"div",14)(63,"TreeView",18),u("SelectedItems",function(g){return o.SelectedItems(g)}),t()()(),e(64,"Tabs",11)(65,"TabPane",12)(66,"textarea",13),n(67,`    <TreeView [Mode]="'Multiple'" [Items]="Categories" [Sort]="Sort"
              (SelectedItems)="SelectedItems($event)"></TreeView>
        `),t()(),e(68,"TabPane",12)(69,"textarea",13),n(70,`  Categories: TreeItem [] = this.FillCategories();
  Sort: boolean = false;

  FillCategories(): TreeItem[] {
    const cats: TreeItem[] = [];

    const Parents: any[] = [
      {Id: 1, Text: 'Balkans Tours'},
      {Id: 2, Text: 'Spain Tours'},
      {Id: 3, Text: 'Italy Tours'},
    ];

    Parents.forEach(x => cats.push({
      Id: x.Id,
      Content: {Text: x.Text,},
      Expanded: (x.Id == 2),
      Children: []
    } as unknown as TreeItem));

    for (let i = 10; i <= 30; i++) {
      let parentId = Math.floor(Math.random() * Parents.length) + 1;

      const parent = cats.find(x => x.Id === parentId);
      parent?.Children.push({Id: i, Content: {Text: this.Word(4) + ' Tour',}, PId: parentId} as TreeItem);
    }

    return cats;
  }
        `),t()()()()()),m&2&&(i(6),a("href","https://krsln.github.io/Lootstrap/Components/TreeView",C),i(8),a("Mode","Single")("Items",o.Basic),i(2),a("Mode","Multiple")("Items",o.Multiple),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(11),a("Mode","Single")("Items",o.Mail),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(7),a("Mode","Single")("Items",o.Disabled),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(7),a("checked",o.Sort),i(4),a("Mode","Multiple")("Items",o.Categories)("Sort",o.Sort),i(),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[E,I,hn,w,_]});let r=d;return r})();var pi=(()=>{let d=class d{constructor(){this.Backdrop=!0,this.Expanded=!0,this.ExpandedF=!1,this.Mode="Side"}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=h({type:d,selectors:[["app-ng-sidenav"]],decls:147,vars:26,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title","Border-bottom"],[1,"M-0","Border-bottom"],[1,"Badge","P-2","Bg-info"],[1,"Btn","Btn-link",3,"href"],[1,"MT-5"],[1,"Body",2,"max-height","400px","overflow","auto"],[3,"Backdrop"],[3,"Expanded","Mode","Change"],[1,"Border","M-3","P-2"],[1,"Form-check","Form-switch"],["type","checkbox","role","switch","id","Backdrop",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","Backdrop",1,"Form-check-label"],[1,"Form-check","Form-check-inline"],["type","radio","name","SidenavMode1","id","inlineRadio11","value","Over",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","inlineRadio11",1,"Form-check-label"],["type","radio","name","SidenavMode1","id","inlineRadio12","value","Side",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","inlineRadio12",1,"Form-check-label"],["type","radio","name","SidenavMode1","id","inlineRadio13","value","Push",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","inlineRadio13",1,"Form-check-label"],[1,"Btn","Btn-info",3,"click"],["type","radio","name","SidenavMode","id","inlineRadio1","value","Over",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","inlineRadio1",1,"Form-check-label"],["type","radio","name","SidenavMode","id","inlineRadio2","value","Side",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","inlineRadio2",1,"Form-check-label"],["type","radio","name","SidenavMode","id","inlineRadio3","value","Push",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","inlineRadio3",1,"Form-check-label"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"Ex-fixed",3,"Backdrop"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"h2",1),n(2,"Ng - Sidenav"),t(),e(3,"p",2)(4,"span",3),n(5,"Styled by"),t(),e(6,"a",4),n(7,"LS Sidenav"),t()(),e(8,"h4",5),n(9,"Basic usage"),t(),e(10,"ExampleViewer")(11,"div",6)(12,"Sidenav-container",7)(13,"Sidenav",8),u("Change",function(g){return o.Expanded=g}),e(14,"p"),n(15,"Sidenav"),t(),e(16,"div",9)(17,"div",10)(18,"input",11),V("ngModelChange",function(g){return F(o.Backdrop,g)||(o.Backdrop=g),g}),t(),e(19,"label",12),n(20,"Backdrop"),t()(),p(21,"hr"),n(22," Mode: "),p(23,"hr"),e(24,"div",13)(25,"input",14),V("ngModelChange",function(g){return F(o.Mode,g)||(o.Mode=g),g}),t(),e(26,"label",15),n(27,"Over"),t()(),e(28,"div",13)(29,"input",16),V("ngModelChange",function(g){return F(o.Mode,g)||(o.Mode=g),g}),t(),e(30,"label",17),n(31,"Side"),t()(),e(32,"div",13)(33,"input",18),V("ngModelChange",function(g){return F(o.Mode,g)||(o.Mode=g),g}),t(),e(34,"label",19),n(35,"Push"),t()()(),p(36,"br")(37,"br")(38,"br")(39,"br")(40,"br"),t(),e(41,"button",20),u("click",function(){return o.Expanded=!o.Expanded}),n(42,"Toggle"),t(),e(43,"p"),n(44,"SidenavContent"),t(),e(45,"div",9),n(46," Mode: "),e(47,"div",13)(48,"input",21),V("ngModelChange",function(g){return F(o.Mode,g)||(o.Mode=g),g}),t(),e(49,"label",22),n(50,"Over"),t()(),e(51,"div",13)(52,"input",23),V("ngModelChange",function(g){return F(o.Mode,g)||(o.Mode=g),g}),t(),e(53,"label",24),n(54,"Side"),t()(),e(55,"div",13)(56,"input",25),V("ngModelChange",function(g){return F(o.Mode,g)||(o.Mode=g),g}),t(),e(57,"label",26),n(58,"Push"),t()()(),p(59,"br")(60,"br")(61,"br")(62,"br")(63,"br")(64,"br")(65,"br")(66,"br")(67,"br")(68,"br")(69,"br")(70,"br")(71,"br")(72,"br")(73,"br")(74,"br")(75,"br")(76,"br")(77,"br")(78,"br")(79,"br")(80,"br")(81,"br")(82,"br")(83,"br")(84,"br")(85,"br")(86,"br")(87,"br")(88,"br"),t()(),e(89,"Tabs",27)(90,"TabPane",28)(91,"textarea",29),n(92,`      <Sidenav-container [Backdrop]="Backdrop">
        <Sidenav [Expanded]="Expanded" [Mode]="Mode" (Change)="Expanded=$event">
          <p>Sidenav</p>
          <div class="Border M-3 P-2">
            <div class="Form-check Form-switch">
              <input class="Form-check-input" type="checkbox" role="switch" [(ngModel)]="Backdrop" id="Backdrop"/>
              <label class="Form-check-label" for="Backdrop">Backdrop</label>
            </div>
            <hr>
            Mode:
            <hr>
            <div class="Form-check Form-check-inline">
              <input class="Form-check-input" type="radio" name="SidenavMode1"
                     id="inlineRadio11" value="Over" [(ngModel)]="Mode"/>
              <label class="Form-check-label" for="inlineRadio11">Over</label>
            </div>
            <div class="Form-check Form-check-inline">
              <input class="Form-check-input" type="radio" name="SidenavMode1"
                     id="inlineRadio12" value="Side" [(ngModel)]="Mode"/>
              <label class="Form-check-label" for="inlineRadio12">Side</label>
            </div>

            <div class="Form-check Form-check-inline">
              <input class="Form-check-input" type="radio" name="SidenavMode1"
                     id="inlineRadio13" value="Push" [(ngModel)]="Mode"/>
              <label class="Form-check-label" for="inlineRadio13">Push</label>
            </div>

          </div>
          <br><br><br><br><br>
        </Sidenav>

        <button class="Btn Btn-info" (click)="Expanded=!Expanded">Toggle</button>

        <p>SidenavContent</p>
        <div class="Border M-3 P-2">
          Mode:
          <div class="Form-check Form-check-inline">
            <input class="Form-check-input" type="radio" name="SidenavMode"
                   id="inlineRadio1" value="Over" [(ngModel)]="Mode"/>
            <label class="Form-check-label" for="inlineRadio1">Over</label>
          </div>
          <div class="Form-check Form-check-inline">
            <input class="Form-check-input" type="radio" name="SidenavMode"
                   id="inlineRadio2" value="Side" [(ngModel)]="Mode"/>
            <label class="Form-check-label" for="inlineRadio2">Side</label>
          </div>

          <div class="Form-check Form-check-inline">
            <input class="Form-check-input" type="radio" name="SidenavMode"
                   id="inlineRadio3" value="Push" [(ngModel)]="Mode"/>
            <label class="Form-check-label" for="inlineRadio3">Push</label>
          </div>

        </div>
        <br><br><br><br><br>
      </Sidenav-container>
        `),t()(),e(93,"TabPane",28)(94,"textarea",29),n(95,`  Backdrop = true;
  Expanded = true;
  Mode: "Over" | "Side" | "Push" = 'Side';
        `),t()()()(),e(96,"h4",5),n(97,"Fixed position"),t(),e(98,"p"),n(99,"Cant demonstrate here properly. It'll work! Promise :p"),t(),e(100,"ExampleViewer")(101,"div",6)(102,"Sidenav-container",30)(103,"Sidenav",8),u("Change",function(g){return o.ExpandedF=g}),e(104,"p"),n(105,"Sidenav"),t(),n(106," ... "),t(),e(107,"button",20),u("click",function(){return o.ExpandedF=!o.ExpandedF}),n(108,"Toggle"),t(),e(109,"p"),n(110,"SidenavContent"),t(),n(111," ... "),p(112,"br")(113,"br")(114,"br")(115,"br")(116,"br")(117,"br")(118,"br")(119,"br")(120,"br")(121,"br")(122,"br")(123,"br")(124,"br")(125,"br")(126,"br")(127,"br")(128,"br")(129,"br")(130,"br")(131,"br")(132,"br")(133,"br")(134,"br")(135,"br")(136,"br"),t()(),e(137,"Tabs",27)(138,"TabPane",28)(139,"textarea",29),n(140,`      <Sidenav-container [Backdrop]="Backdrop" class="Ex-fixed">
        <Sidenav [Expanded]="Expanded" [Mode]="Mode" (Change)="Expanded=$event">
          <p>Sidenav</p>
          ...
        </Sidenav>

        <button class="Btn Btn-info" (click)="Expanded=!Expanded">Toggle</button>

        <p>SidenavContent</p>
        ...

        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
      </Sidenav-container>

        `),t()(),e(141,"TabPane",28)(142,"textarea",29),n(143,`.Ex-fixed {
  .Sidenav-container {

    .Sidenav {
      position: fixed;
      top: 55px; // for navbar
    }
  }
}
        `),t()(),e(144,"TabPane",28)(145,"textarea",29),n(146,`
        `),t()()()()()),m&2&&(i(6),a("href","https://krsln.github.io/Lootstrap/Components/Sidenav",C),i(6),a("Backdrop",o.Backdrop),i(),a("Expanded",o.Expanded)("Mode",o.Mode),i(5),B("ngModel",o.Backdrop),i(7),B("ngModel",o.Mode),i(4),B("ngModel",o.Mode),i(4),B("ngModel",o.Mode),i(15),B("ngModel",o.Mode),i(4),B("ngModel",o.Mode),i(4),B("ngModel",o.Mode),i(33),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"),i(8),a("Backdrop",o.Backdrop),i(),a("Expanded",o.ExpandedF)("Mode",o.Mode),i(34),a("Design","Pill"),i(),a("Label","HTML"),i(),a("Lang","html"),i(2),a("Label","SCSS"),i(),a("Lang","scss"),i(2),a("Label","TypeScript"),i(),a("Lang","typescript"))},dependencies:[ve,Xe,xn,se,me,E,I,w,_,un,fn],styles:[`.Body .Sidenav-container{top:0}.Body .Sidenav-container .Sidenav{position:absolute;top:0}.Body .Ex-fixed .Sidenav-container .Sidenav{position:fixed;top:55px}
`],encapsulation:2});let r=d;return r})();var Dr=[{path:"",redirectTo:"Overview",pathMatch:"prefix"},{path:"",children:[{path:"",data:{breadcrumb:"Lootstrap-angular"},component:mi,children:[{path:"Overview",data:{breadcrumb:"Overview"},component:di},{path:"Accordion",data:{breadcrumb:"Accordion"},component:ci},{path:"Avatar",data:{breadcrumb:"Avatar"},component:Tt},{path:"Breadcrumb",data:{breadcrumb:"Breadcrumb"},component:It},{path:"Card",data:{breadcrumb:"Card"},component:Et},{path:"Carousel",data:{breadcrumb:"Carousel"},component:_t},{path:"Dialog",data:{breadcrumb:"Dialog"},component:Pt},{path:"Notify",data:{breadcrumb:"Notify"},component:wt},{path:"Pagination",data:{breadcrumb:"Pagination"},component:Mt},{path:"Rating",data:{breadcrumb:"Rating"},component:Lt},{path:"Sidenav",data:{breadcrumb:"Sidenav"},component:pi},{path:"Spinner",data:{breadcrumb:"Spinner"},component:At},{path:"Table",data:{breadcrumb:"Table"},component:Nt},{path:"Tabs",data:{breadcrumb:"Tabs"},component:kt},{path:"Theme",data:{breadcrumb:"Theme"},component:Dt},{path:"Time",data:{breadcrumb:"Time"},component:Rt},{path:"Timeline",data:{breadcrumb:"Timeline"},component:Bt},{path:"TreeView",data:{breadcrumb:"TreeView"},component:Ft}]}]}],gi=(()=>{let d=class d{};d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=D({type:d}),d.\u0275inj=R({imports:[Ve.forChild(Dr),Ve]});let r=d;return r})();var Rr=[An,kn,gn,Rn,Fn,On,yn,zn,jn,$n,Jn,En,cn,Kn,ti,li,Sn];var U0=(()=>{let d=class d{};d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=D({type:d}),d.\u0275inj=R({imports:[O,Tn,gi,Rr,Mn,_n,wn,vn]});let r=d;return r})();export{U0 as NgLootstrapModule};
