"use strict";(self.webpackChunkNgShowcase=self.webpackChunkNgShowcase||[]).push([[592],{9759:(k,g,p)=>{p.d(g,{i9:()=>h,z8:()=>c});var i=p(1223),n=p(9808);const f=["Tooltip"];let b=(()=>{class l{constructor(){this.Id="Tooltip".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15)),this.Content="",this.Rounded=!1,this.Outline=!1,this.Placement="top",this.Theme="light"}ngOnInit(){if(this.div){const t=this.div.nativeElement;t.id=this.Id,t.innerHTML=`<span>${this.Content}</span>`;const o=this.GetPositions(t),e=`top:${o.top}px; left:${o.left}px;`;t.className="Tooltip".concat(this.Theme?` Tooltip-${this.Theme}`:"",this.Outline?" Tooltip-outline":"",this.Rounded?" Tooltip-rounded":"",` Tooltip-${o.arrow}`),t.setAttribute("style",e)}}GetPositions(t){let o=0,e=0,r="";if(this.Element)switch(this.Placement){case"right":r="l",o=this.Element.offsetTop+this.Element.offsetHeight/2-16,e=this.Element.offsetLeft+this.Element.offsetWidth+5;break;case"left":r="r",o=this.Element.offsetTop+this.Element.offsetHeight/2-16,e=this.Element.offsetLeft-t.offsetWidth-5;break;case"top":r="b",o=this.Element.offsetTop-t.offsetHeight-5,e=this.Element.offsetLeft+this.Element.offsetWidth/2-t.offsetWidth/2;break;case"bottom":r="t",o=this.Element.offsetTop+this.Element.offsetHeight+5,e=this.Element.offsetLeft+this.Element.offsetWidth/2-t.offsetWidth/2}return{arrow:r,top:o,left:e}}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=i.Xpm({type:l,selectors:[["ql-tooltip"]],viewQuery:function(t,o){if(1&t&&i.Gf(f,7),2&t){let e;i.iGM(e=i.CRH())&&(o.div=e.first)}},decls:2,vars:0,consts:[[1,"Tooltip"],["Tooltip",""]],template:function(t,o){1&t&&i._UZ(0,"div",0,1)},styles:['.Tooltip-primary{--ls-tooltip-bg: #4712af;--ls-tooltip-bg-hsl: 260deg,81%,38%;--ls-tooltip-bg-body: #f2edfd;--ls-tooltip-bg-active: #5917de;--ls-tooltip-bg-active-hsl: 260deg,81%,48%;--ls-tooltip-bg-surface: #dfd1fa;--ls-tooltip-bg-lightest: #efe8fd;--ls-tooltip-bg-light: #cebaf8;--ls-tooltip-bg-dark: #773deb;--ls-tooltip-bg-darkest: #4712af;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(260deg, 81%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 260deg,81%,70% }.Tooltip-secondary{--ls-tooltip-bg: #6d767e;--ls-tooltip-bg-hsl: 208deg,7%,46%;--ls-tooltip-bg-body: #f4f5f6;--ls-tooltip-bg-active: #878f97;--ls-tooltip-bg-active-hsl: 208deg,7%,56%;--ls-tooltip-bg-surface: #e4e6e7;--ls-tooltip-bg-lightest: #f1f2f3;--ls-tooltip-bg-light: #d6d9db;--ls-tooltip-bg-dark: #a2a9ae;--ls-tooltip-bg-darkest: #6d767e;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(208deg, 7%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 208deg,7%,70% }.Tooltip-success{--ls-tooltip-bg: #29a847;--ls-tooltip-bg-hsl: 134deg,61%,41%;--ls-tooltip-bg-body: #effbf1;--ls-tooltip-bg-active: #36ce59;--ls-tooltip-bg-active-hsl: 134deg,61%,51%;--ls-tooltip-bg-surface: #d6f5dd;--ls-tooltip-bg-lightest: #eafaee;--ls-tooltip-bg-light: #c1f0cc;--ls-tooltip-bg-dark: #5fd87b;--ls-tooltip-bg-darkest: #29a847;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(134deg, 61%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 134deg,61%,70% }.Tooltip-info{--ls-tooltip-bg: #0367d8;--ls-tooltip-bg-hsl: 212deg,97%,43%;--ls-tooltip-bg-body: #ebf4ff;--ls-tooltip-bg-active: #137ffb;--ls-tooltip-bg-active-hsl: 212deg,97%,53%;--ls-tooltip-bg-surface: #cde4fe;--ls-tooltip-bg-lightest: #e6f1ff;--ls-tooltip-bg-light: #b4d6fe;--ls-tooltip-bg-dark: #459bfc;--ls-tooltip-bg-darkest: #0367d8;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(212deg, 97%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 212deg,97%,70% }.Tooltip-warning{--ls-tooltip-bg: #ffc105;--ls-tooltip-bg-hsl: 45deg,100%,51%;--ls-tooltip-bg-body: #fffaeb;--ls-tooltip-bg-active: #ffcd38;--ls-tooltip-bg-active-hsl: 45deg,100%,61%;--ls-tooltip-bg-surface: #fff2cc;--ls-tooltip-bg-lightest: #fff9e6;--ls-tooltip-bg-light: #ffecb3;--ls-tooltip-bg-dark: #ffda6b;--ls-tooltip-bg-darkest: #ffc105;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(45deg, 100%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 45deg,100%,70% }.Tooltip-danger{--ls-tooltip-bg: #d73c4c;--ls-tooltip-bg-hsl: 354deg,66%,54%;--ls-tooltip-bg-body: #fceeef;--ls-tooltip-bg-active: #e06773;--ls-tooltip-bg-active-hsl: 354deg,66%,64%;--ls-tooltip-bg-surface: #f6d5d8;--ls-tooltip-bg-lightest: #fbeaec;--ls-tooltip-bg-light: #f2c0c5;--ls-tooltip-bg-dark: #e8919a;--ls-tooltip-bg-darkest: #d73c4c;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(354deg, 66%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 354deg,66%,70% }.Tooltip-light{--ls-tooltip-bg: #f9fafb;--ls-tooltip-bg-hsl: 210deg,20%,98%;--ls-tooltip-bg-body: #d1d9e0;--ls-tooltip-bg-active: #3692fc;--ls-tooltip-bg-active-hsl: 212deg,97%,60%;--ls-tooltip-bg-surface: white;--ls-tooltip-bg-lightest: #f9fafb;--ls-tooltip-bg-light: #f6f7f9;--ls-tooltip-bg-dark: #f0f2f5;--ls-tooltip-bg-darkest: #e0e6eb;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: black;--ls-tooltip-fg-darkest: black;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(210deg, 20%, 90%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 210deg,20%,90% }.Tooltip-dark{--ls-tooltip-bg: #353b41;--ls-tooltip-bg-hsl: 210deg,10%,23%;--ls-tooltip-bg-body: #171a1c;--ls-tooltip-bg-active: #8965cd;--ls-tooltip-bg-active-hsl: 261deg,51%,60%;--ls-tooltip-bg-surface: #454d54;--ls-tooltip-bg-lightest: #5c6670;--ls-tooltip-bg-light: #73808c;--ls-tooltip-bg-dark: #394046;--ls-tooltip-bg-darkest: #22262a;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: white;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: white;--ls-tooltip-fg-lightest: white;--ls-tooltip-fg-light: white;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 255,255,255;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(210deg, 10%, 45%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 210deg,10%,45% }.Tooltip-night{--ls-tooltip-bg: black;--ls-tooltip-bg-hsl: 0deg,0%,0%;--ls-tooltip-bg-body: #0d0d0d;--ls-tooltip-bg-active: #8965cd;--ls-tooltip-bg-active-hsl: 261deg,51%,60%;--ls-tooltip-bg-surface: #333333;--ls-tooltip-bg-lightest: #4d4d4d;--ls-tooltip-bg-light: #666666;--ls-tooltip-bg-dark: #262626;--ls-tooltip-bg-darkest: #1a1a1a;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: white;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: white;--ls-tooltip-fg-lightest: white;--ls-tooltip-fg-light: white;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 255,255,255;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(0deg, 0%, 35%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 0deg,0%,35% }.Tooltip{position:absolute;display:flex;z-index:1000;padding:.25rem .5rem;color:var(--ls-tooltip-fg-dark, var(--ls-fg-dark));background-color:var(--ls-tooltip-bg-dark, var(--ls-bg-dark));border:1px solid var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest));box-shadow:0 1px 1px -1px rgba(var(--ls-tooltip-shadow-color-rgb, var(--ls-shadow-color-rgb)),.18),0 2px 2px 0 rgba(var(--ls-tooltip-shadow-color-rgb, var(--ls-shadow-color-rgb)),.12),0 4px 6px 0 rgba(var(--ls-tooltip-shadow-color-rgb, var(--ls-shadow-color-rgb)),.06)}.Tooltip.Tooltip-outline{color:var(--ls-tooltip-fg-lightest, var(--ls-fg-lightest));background-color:var(--ls-tooltip-bg-lightest, var(--ls-bg-lightest));border:1px solid var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest))}.Tooltip:before,.Tooltip:after{content:"";display:block;position:absolute;border-style:solid;width:0;height:0;z-index:1;clear:both;border-width:6px}.Tooltip-rounded{border-radius:var(--ls-border-radius)}.Tooltip-t:after,.Tooltip-b:after{left:calc(50% - 6px)}.Tooltip-t:before,.Tooltip-b:before{left:calc(50% - 6px)}.Tooltip-r:after,.Tooltip-l:after{top:calc(50% - 6px)}.Tooltip-r:before,.Tooltip-l:before{top:calc(50% - 6px)}.Tooltip-t:after{bottom:100%;border-color:transparent transparent var(--ls-tooltip-bg-dark, var(--ls-bg-dark)) transparent}.Tooltip-t:before{bottom:calc(100% + 1px);border-color:transparent transparent var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest)) transparent}.Tooltip-r:after{left:100%;border-color:transparent transparent transparent var(--ls-tooltip-bg-dark, var(--ls-bg-dark))}.Tooltip-r:before{left:calc(100% + 1px);border-color:transparent transparent transparent var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest))}.Tooltip-b:after{top:100%;border-color:var(--ls-tooltip-bg-dark, var(--ls-bg-dark)) transparent transparent transparent}.Tooltip-b:before{top:calc(100% + 1px);border-color:var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest)) transparent transparent transparent}.Tooltip-l:after{right:100%;border-color:transparent var(--ls-tooltip-bg-dark, var(--ls-bg-dark)) transparent transparent}.Tooltip-l:before{right:calc(100% + 1px);border-color:transparent var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest)) transparent transparent}\n'],encapsulation:2}),l})(),h=(()=>{class l{constructor(t,o){this.elementRef=t,this.viewContainerRef=o,this.Content="",this.ContentII="",this.Placement="top",this.Theme="light",this.Duration=500,this.Rounded=!1,this.Outline=!1,this.Refs=[],this.el=this.elementRef.nativeElement}onMouseEnter(){this.ContentII&&(this.Content=this.ContentII),this.Content.length>0&&null===this.el.getAttribute("TooltipId")&&this.Show()}onMouseLeave(){const t=this.el.getAttribute("TooltipId");t&&setTimeout(()=>{this.Hide(t)},this.Duration)}Show(){const t=this.GetComponentRef();return t.instance.Content=this.Content,t.instance.Placement=this.Placement,t.instance.Theme=this.Theme||"light",t.instance.Rounded=this.Rounded,t.instance.Outline=this.Outline,t.instance.Element=this.el,this.el.removeAttribute("TooltipId"),this.el.setAttribute("TooltipId",t.instance.Id),this.Refs.push({Id:t.instance.Id,Ref:t}),t.instance.Id}GetComponentRef(){const t=this.viewContainerRef.createComponent(b),o=t.hostView.rootNodes[0];return this.el.parentNode?this.el.parentNode.insertBefore(o,this.el.nextSibling):this.el.appendChild(o),t}Hide(t){const o=this.Refs.find(e=>e.Id===t);o&&o.Ref&&(o.Ref.destroy(),this.Refs.splice(this.Refs.indexOf(o),1),this.el.removeAttribute("TooltipId"))}ngOnDestroy(){this.Refs.forEach((t,o)=>this.Hide(t.Id)),this.Refs=[]}}return l.\u0275fac=function(t){return new(t||l)(i.Y36(i.SBq),i.Y36(i.s_b))},l.\u0275dir=i.lG2({type:l,selectors:[["","qlTooltip",""],["","Tooltip",""]],hostBindings:function(t,o){1&t&&i.NdJ("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()})},inputs:{Content:["Tooltip","Content"],ContentII:["qlTooltip","ContentII"],Placement:"Placement",Theme:"Theme",Duration:"Duration",Rounded:"Rounded",Outline:"Outline"}}),l})(),c=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[[n.ez]]}),l})()}}]);