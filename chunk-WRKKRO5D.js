import{Ba as g,E as a,F as p,G as f,H as d,Ja as m,Ka as C,La as v,N as c,P as b,ca as i,ja as h,lb as T,wa as u}from"./chunk-7VR4C4KM.js";var I=["Tooltip"],y=(()=>{class r{Id="Tooltip".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15));div;Content="";Rounded=!1;Outline=!1;Placement="top";Theme="light";Element;constructor(){}ngOnInit(){if(this.div){let t=this.div.nativeElement;t.id=this.Id,t.innerHTML=`<span>${this.Content}</span>`;let e=this.GetPositions(t),o=`top:${e.top}px; left:${e.left}px;`,l=this.Theme?` Tooltip-${this.Theme}`:"",s=this.Outline?" Tooltip-outline":"",n=this.Rounded?" Tooltip-rounded":"",w=` Caret-${e.arrow}`;t.className="Tooltip".concat(l,s,n,w),t.setAttribute("style",o)}}GetPositions(t){let e=0,o=0,l="",s=32;if(this.Element)switch(this.Placement){case"right":l="start",e=this.Element.offsetTop+this.Element.offsetHeight/2-s/2,o=this.Element.offsetLeft+this.Element.offsetWidth+5;break;case"left":l="end",e=this.Element.offsetTop+this.Element.offsetHeight/2-s/2,o=this.Element.offsetLeft-t.offsetWidth-5;break;case"top":l="bottom",e=this.Element.offsetTop-t.offsetHeight-5,o=this.Element.offsetLeft+this.Element.offsetWidth/2-t.offsetWidth/2;break;case"bottom":l="top",e=this.Element.offsetTop+this.Element.offsetHeight+5,o=this.Element.offsetLeft+this.Element.offsetWidth/2-t.offsetWidth/2;break}return{arrow:l,top:e,left:o}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["ql-Tooltip"]],viewQuery:function(e,o){if(e&1&&m(I,7),e&2){let l;C(l=v())&&(o.div=l.first)}},decls:2,vars:0,consts:[[1,"Tooltip"],["Tooltip",""]],template:function(e,o){e&1&&u(0,"div",0,1)},styles:[`:root{--ls-border-hsl: 0deg, 0%, 88%;--ls-border-alpha: 1;--ls-shadow-hsl: 240deg, 7%, 18%;--ls-bg-accent: #0f69fa;--ls-bg-surface: white;--ls-fg-surface: black;--ls-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.Caret-top,.Caret-bottom,.Caret-end,.Caret-start{--ls-caret-border-color: hsla(var(--ls-border-hsl), var(--ls-border-alpha));--ls-caret-border-width: 1px;--ls-caret-size: 8px;--ls-caret-pseudo-before-bg: hsla(var(--ls-border-hsl), var(--ls-border-alpha));--ls-caret-pseudo-after-fg: var(--ls-bg-surface);position:relative;overflow:visible;border:var(--ls-caret-border-width) solid var(--ls-caret-border-color)}.Caret-top:before,.Caret-top:after,.Caret-bottom:before,.Caret-bottom:after,.Caret-end:before,.Caret-end:after,.Caret-start:before,.Caret-start:after{content:"";display:block;position:absolute;border-style:solid;width:0;height:0;z-index:1;clear:both;border-width:var(--ls-caret-size)}.Caret-top.Caret-top:after,.Caret-top.Caret-bottom:after,.Caret-bottom.Caret-top:after,.Caret-bottom.Caret-bottom:after,.Caret-end.Caret-top:after,.Caret-end.Caret-bottom:after,.Caret-start.Caret-top:after,.Caret-start.Caret-bottom:after{left:calc(50% - var(--ls-caret-size))}.Caret-top.Caret-top:before,.Caret-top.Caret-bottom:before,.Caret-bottom.Caret-top:before,.Caret-bottom.Caret-bottom:before,.Caret-end.Caret-top:before,.Caret-end.Caret-bottom:before,.Caret-start.Caret-top:before,.Caret-start.Caret-bottom:before{left:calc(50% - var(--ls-caret-size))}.Caret-top.Caret-start:after,.Caret-top.Caret-end:after,.Caret-bottom.Caret-start:after,.Caret-bottom.Caret-end:after,.Caret-end.Caret-start:after,.Caret-end.Caret-end:after,.Caret-start.Caret-start:after,.Caret-start.Caret-end:after{top:calc(50% - var(--ls-caret-size))}.Caret-top.Caret-start:before,.Caret-top.Caret-end:before,.Caret-bottom.Caret-start:before,.Caret-bottom.Caret-end:before,.Caret-end.Caret-start:before,.Caret-end.Caret-end:before,.Caret-start.Caret-start:before,.Caret-start.Caret-end:before{top:calc(50% - var(--ls-caret-size))}.Caret-top:after{bottom:100%;border-color:transparent transparent var(--ls-caret-pseudo-after-fg) transparent}.Caret-top:before{bottom:calc(100% + 1px);border-color:transparent transparent var(--ls-caret-pseudo-before-bg) transparent}.Caret-bottom:after{top:100%;border-color:var(--ls-caret-pseudo-after-fg) transparent transparent transparent}.Caret-bottom:before{top:calc(100% + 1px);border-color:var(--ls-caret-pseudo-before-bg) transparent transparent transparent}.Caret-end:after{left:100%;border-color:transparent transparent transparent var(--ls-caret-pseudo-after-fg)}.Caret-end:before{left:calc(100% + 1px);border-color:transparent transparent transparent var(--ls-caret-pseudo-before-bg)}.Caret-start:after{right:100%;border-color:transparent var(--ls-caret-pseudo-after-fg) transparent transparent}.Caret-start:before{right:calc(100% + 1px);border-color:transparent var(--ls-caret-pseudo-before-bg) transparent transparent}.Tooltip{--ls-tooltip-padding-y: .3125rem;--ls-tooltip-padding-x: .625rem;--ls-tooltip-color: var(--ls-fg-surface);--ls-tooltip-bg: var(--ls-bg-surface);--ls-tooltip-border-width: 1px;--ls-tooltip-border-color: hsla(var(--ls-border-hsl), var(--ls-border-alpha));--ls-tooltip-border-radius: 0;--ls-tooltip-box-shadow: 0 1px 3px hsla(var(--ls-shadow-hsl), .12), 0 1px 2px hsla(var(--ls-shadow-hsl), .24);--ls-caret-size: 7px;position:absolute;display:flex;z-index:1000;padding:var(--ls-tooltip-padding-y) var(--ls-tooltip-padding-x);color:var(--ls-tooltip-color);background-color:var(--ls-tooltip-bg);border:var(--ls-tooltip-border-width) solid var(--ls-tooltip-border-color);border-radius:var(--ls-tooltip-border-radius);box-shadow:var(--ls-tooltip-box-shadow)}.Tooltip.Tooltip-outline{--ls-tooltip-color: var(--ls-fg-surface);--ls-tooltip-bg: transparent;--ls-tooltip-border-color: hsla(var(--ls-border-hsl), var(--ls-border-alpha))}.Tooltip-rounded{--ls-tooltip-border-radius: .375rem}.Tooltip-light{--ls-tooltip-color: #000;--ls-tooltip-bg: hsl(0, 0%, 98%);--ls-tooltip-border-color: hsl(0, 0%, 98%);--ls-caret-pseudo-before-bg: hsl(0, 0%, 98%);--ls-caret-pseudo-after-fg: hsl(0, 0%, 98%)}.Tooltip-light.Tooltip-outline{--ls-tooltip-color: #000;--ls-tooltip-bg: #fcfcfc;--ls-tooltip-border-color: #e0e0e0;--ls-caret-pseudo-before-bg: #e0e0e0;--ls-caret-pseudo-after-fg: #fcfcfc}.Tooltip-dark{--ls-tooltip-color: #fff;--ls-tooltip-bg: hsl(240, 7%, 18%);--ls-tooltip-border-color: hsl(240, 7%, 18%);--ls-caret-pseudo-before-bg: hsl(240, 7%, 18%);--ls-caret-pseudo-after-fg: hsl(240, 7%, 18%)}.Tooltip-dark.Tooltip-outline{--ls-tooltip-color: #fff;--ls-tooltip-bg: #6b6b6f;--ls-tooltip-border-color: #131316;--ls-caret-pseudo-before-bg: #131316;--ls-caret-pseudo-after-fg: #6b6b6f}.Tooltip-night{--ls-tooltip-color: #fff;--ls-tooltip-bg: hsl(0, 0%, 7%);--ls-tooltip-border-color: hsl(0, 0%, 7%);--ls-caret-pseudo-before-bg: hsl(0, 0%, 7%);--ls-caret-pseudo-after-fg: hsl(0, 0%, 7%)}.Tooltip-night.Tooltip-outline{--ls-tooltip-color: #fff;--ls-tooltip-bg: #595959;--ls-tooltip-border-color: black;--ls-caret-pseudo-before-bg: black;--ls-caret-pseudo-after-fg: #595959}.Tooltip-primary{--ls-tooltip-color: #fff;--ls-tooltip-bg: hsl(217, 96%, 52%);--ls-tooltip-border-color: hsl(217, 96%, 52%);--ls-caret-pseudo-before-bg: hsl(217, 96%, 52%);--ls-caret-pseudo-after-fg: hsl(217, 96%, 52%)}.Tooltip-primary.Tooltip-outline{--ls-tooltip-color: #fff;--ls-tooltip-bg: #5796fc;--ls-tooltip-border-color: #0453d2;--ls-caret-pseudo-before-bg: #0453d2;--ls-caret-pseudo-after-fg: #5796fc}.Tooltip-secondary{--ls-tooltip-color: #fff;--ls-tooltip-bg: hsl(208, 7%, 46%);--ls-tooltip-border-color: hsl(208, 7%, 46%);--ls-caret-pseudo-before-bg: hsl(208, 7%, 46%);--ls-caret-pseudo-after-fg: hsl(208, 7%, 46%)}.Tooltip-secondary.Tooltip-outline{--ls-tooltip-color: #fff;--ls-tooltip-bg: #999fa5;--ls-tooltip-border-color: #555c62;--ls-caret-pseudo-before-bg: #555c62;--ls-caret-pseudo-after-fg: #999fa5}.Tooltip-success{--ls-tooltip-color: #fff;--ls-tooltip-bg: hsl(150, 67%, 35%);--ls-tooltip-border-color: hsl(150, 67%, 35%);--ls-caret-pseudo-before-bg: hsl(150, 67%, 35%);--ls-caret-pseudo-after-fg: hsl(150, 67%, 35%)}.Tooltip-success.Tooltip-outline{--ls-tooltip-color: #fff;--ls-tooltip-bg: #61b58b;--ls-tooltip-border-color: #156a40;--ls-caret-pseudo-before-bg: #156a40;--ls-caret-pseudo-after-fg: #61b58b}.Tooltip-info{--ls-tooltip-color: #000;--ls-tooltip-bg: hsl(195, 90%, 55%);--ls-tooltip-border-color: hsl(195, 90%, 55%);--ls-caret-pseudo-before-bg: hsl(195, 90%, 55%);--ls-caret-pseudo-after-fg: hsl(195, 90%, 55%)}.Tooltip-info.Tooltip-outline{--ls-tooltip-color: #000;--ls-tooltip-bg: #66d3f7;--ls-tooltip-border-color: #0ba6da;--ls-caret-pseudo-before-bg: #0ba6da;--ls-caret-pseudo-after-fg: #66d3f7}.Tooltip-warning{--ls-tooltip-color: #000;--ls-tooltip-bg: hsl(45, 100%, 45%);--ls-tooltip-border-color: hsl(45, 100%, 45%);--ls-caret-pseudo-before-bg: hsl(45, 100%, 45%);--ls-caret-pseudo-after-fg: hsl(45, 100%, 45%)}.Tooltip-warning.Tooltip-outline{--ls-tooltip-color: #000;--ls-tooltip-bg: #eec54d;--ls-tooltip-border-color: #b38600;--ls-caret-pseudo-before-bg: #b38600;--ls-caret-pseudo-after-fg: #eec54d}.Tooltip-danger{--ls-tooltip-color: #fff;--ls-tooltip-bg: hsl(354, 66%, 54%);--ls-tooltip-border-color: hsl(354, 66%, 54%);--ls-caret-pseudo-before-bg: hsl(354, 66%, 54%);--ls-caret-pseudo-after-fg: hsl(354, 66%, 54%)}.Tooltip-danger.Tooltip-outline{--ls-tooltip-color: #fff;--ls-tooltip-bg: #e37782;--ls-tooltip-border-color: #ba2635;--ls-caret-pseudo-before-bg: #ba2635;--ls-caret-pseudo-after-fg: #e37782}
`],encapsulation:2})}return r})(),x=(()=>{class r{elementRef;viewContainerRef;Content="";ContentII="";Placement="top";Theme="light";Duration=500;Rounded=!1;Outline=!1;el;Refs=[];constructor(t,e){this.elementRef=t,this.viewContainerRef=e,this.el=this.elementRef.nativeElement}onMouseEnter(){this.ContentII&&(this.Content=this.ContentII),this.Content.length>0&&this.el.getAttribute("TooltipId")===null&&this.Show()}onMouseLeave(){let t=this.el.getAttribute("TooltipId");t&&setTimeout(()=>{this.Hide(t)},this.Duration)}Show(){let t=this.GetComponentRef();t.instance.Content=this.Content,t.instance.Placement=this.Placement,t.instance.Theme=this.Theme||"light",t.instance.Rounded=this.Rounded,t.instance.Outline=this.Outline,t.instance.Element=this.el,this.el.removeAttribute("TooltipId"),this.el.setAttribute("TooltipId",t.instance.Id);let e={Id:t.instance.Id,Ref:t};return this.Refs.push(e),t.instance.Id}GetComponentRef(){let t=this.viewContainerRef.createComponent(y),e=t.hostView.rootNodes[0];return this.el.parentNode?this.el.parentNode.insertBefore(e,this.el.nextSibling):this.el.appendChild(e),t}Hide(t){let e=this.Refs.find(o=>o.Id===t);e&&e.Ref&&(e.Ref.destroy(),this.Refs.splice(this.Refs.indexOf(e),1),this.el.removeAttribute("TooltipId"))}ngOnDestroy(){this.Refs.forEach(t=>this.Hide(t.Id)),this.Refs=[]}static \u0275fac=function(e){return new(e||r)(i(c),i(h))};static \u0275dir=d({type:r,selectors:[["","qlTooltip",""],["","Tooltip",""]],hostBindings:function(e,o){e&1&&g("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()})},inputs:{Content:[a.None,"Tooltip","Content"],ContentII:[a.None,"qlTooltip","ContentII"],Placement:"Placement",Theme:"Theme",Duration:"Duration",Rounded:"Rounded",Outline:"Outline"}})}return r})(),D=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=f({type:r});static \u0275inj=b({imports:[T]})}return r})();export{x as a,D as b};
