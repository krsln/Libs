"use strict";(self.webpackChunkNgShowcase=self.webpackChunkNgShowcase||[]).push([[382],{2382:(bn,gt,c)=>{c.d(gt,{Wl:()=>I,Fj:()=>b,u5:()=>Mn,JJ:()=>xe,On:()=>te,YN:()=>rt,wV:()=>ne,Q7:()=>P,EJ:()=>k,Kr:()=>it});var o=c(1223),le=c(9808),mt=c(8306),_t=c(4742),yt=c(8421),vt=c(3269),Ct=c(5403),Vt=c(3268),At=c(1810),Dt=c(2076),bt=c(4004);let ue=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),m=(()=>{class n extends ue{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Et={provide:h,useExisting:(0,o.Gpc)(()=>I),multi:!0};let I=(()=>{class n extends m{writeValue(e){this.setProperty("checked",e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target.checked)})("blur",function(){return r.onTouched()})},features:[o._Bn([Et]),o.qOj]}),n})();const Ft={provide:h,useExisting:(0,o.Gpc)(()=>b),multi:!0},wt=new o.OlP("CompositionEventMode");let b=(()=>{class n extends ue{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ot(){const n=(0,le.q)()?(0,le.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(wt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ft]),o.qOj]}),n})();const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function fe(n){return function f(n){return null==n||0===n.length}(n.value)?{required:!0}:null}function E(n){return null}function ve(n){return null!=n}function Ce(n){const t=(0,o.QGY)(n)?(0,Dt.D)(n):n;return(0,o.CqO)(t),t}function Ve(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Ae(n,t){return t.map(e=>e(n))}function Me(n){return n.map(t=>function St(n){return!n.validate}(t)?t:e=>t.validate(e))}function T(n){return null!=n?function De(n){if(!n)return null;const t=n.filter(ve);return 0==t.length?null:function(e){return Ve(Ae(e,t))}}(Me(n)):null}function H(n){return null!=n?function be(n){if(!n)return null;const t=n.filter(ve);return 0==t.length?null:function(e){return function Mt(...n){const t=(0,vt.jO)(n),{args:e,keys:r}=(0,_t.D)(n),i=new mt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let y=a,C=a;for(let R=0;R<a;R++){let ae=!1;(0,yt.Xf)(e[R]).subscribe((0,Ct.x)(s,Dn=>{ae||(ae=!0,C--),d[R]=Dn},()=>y--,void 0,()=>{(!y||!ae)&&(C||s.next(r?(0,At.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,Vt.Z)(t)):i}(Ae(e,t).map(Ce)).pipe((0,bt.U)(Ve))}}(Me(n)):null}function Ee(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function j(n){return n?Array.isArray(n)?n:[n]:[]}function F(n,t){return Array.isArray(n)?n.includes(t):n===t}function we(n,t){const e=j(t);return j(n).forEach(i=>{F(e,i)||e.push(i)}),e}function Ne(n,t){return j(t).filter(e=>!F(n,e))}class Se{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=T(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=H(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class g extends Se{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class u extends Se{get formDirective(){return null}get path(){return null}}let xe=(()=>{class n extends class Ge{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})();function V(n,t){(function q(n,t){const e=function Fe(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Ee(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Oe(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Ee(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();S(t._rawValidators,i),S(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),function Ht(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&ke(n,t)})}(n,t),function Ut(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function jt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&ke(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Tt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function S(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ke(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function W(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const A="VALID",x="INVALID",v="PENDING",M="DISABLED";function J(n){return(B(n)?n.validators:n)||null}function Te(n){return Array.isArray(n)?T(n):n||null}function Q(n,t){return(B(t)?t.asyncValidators:n)||null}function He(n){return Array.isArray(n)?H(n):n||null}function B(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const Z=n=>n instanceof K;function Ue(n){return(n=>n instanceof Ye)(n)?n.value:n.getRawValue()}function Le(n,t){const e=Z(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function qe(n,t){Z(n),n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class X{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Te(this._rawValidators),this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===x}get pending(){return this.status==v}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Te(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=He(t)}addValidators(t){this.setValidators(we(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(we(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ne(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ne(t,this._rawAsyncValidators))}hasValidator(t){return F(this._rawValidators,t)}hasAsyncValidator(t){return F(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=Ce(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function $t(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=Z(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:(n=>n instanceof zt)(r)&&r.at(i)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(x)?x:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){B(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class Ye extends X{constructor(t=null,e,r){super(J(e),Q(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){W(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){W(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class K extends X{constructor(t,e,r){super(J(e),Q(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){qe(this,t),Object.keys(t).forEach(r=>{Le(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Ue(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class zt extends X{constructor(t,e,r){super(J(e),Q(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){qe(this,t),t.forEach((r,i)=>{Le(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Ue(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Zt={provide:g,useExisting:(0,o.Gpc)(()=>te)},ze=(()=>Promise.resolve(null))();let te=(()=>{class n extends g{constructor(e,r,i,s,a){super(),this._changeDetectorRef=a,this.control=new Ye,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function $(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===b?e=s:function Yt(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Y(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){V(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ze.then(()=>{var r;this.control.setValue(e,{emitViewToModelChange:!1}),null===(r=this._changeDetectorRef)||void 0===r||r.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=""===r||r&&"false"!==r;ze.then(()=>{var s;i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),null===(s=this._changeDetectorRef)||void 0===s||s.markForCheck()})}_getPath(e){return this._parent?function w(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,9),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Zt]),o.qOj,o.TTD]}),n})();const Kt={provide:h,useExisting:(0,o.Gpc)(()=>ne),multi:!0};let ne=(()=>{class n extends m{writeValue(e){this.setProperty("value",null==e?"":e)}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([Kt]),o.qOj]}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const un={provide:h,useExisting:(0,o.Gpc)(()=>k),multi:!0};function nt(n,t){return null==n?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let k=(()=>{class n extends m{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const i=nt(this._getOptionId(e),e);this.setProperty("value",i)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){const r=function cn(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r):e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([un]),o.qOj]}),n})(),rt=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(nt(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(k,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();const dn={provide:h,useExisting:(0,o.Gpc)(()=>se),multi:!0};function ot(n,t){return null==n?`${t}`:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let se=(()=>{class n extends m{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let r;if(this.value=e,Array.isArray(e)){const i=e.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(i.indexOf(a.toString())>-1)}}else r=(i,s)=>{i._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{const i=[],s=r.selectedOptions;if(void 0!==s){const a=s;for(let d=0;d<a.length;d++){const C=this._getOptionValue(a[d].value);i.push(C)}}else{const a=r.options;for(let d=0;d<a.length;d++){const y=a[d];if(y.selected){const C=this._getOptionValue(y.value);i.push(C)}}}this.value=i,e(i)}}_registerOption(e){const r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){const r=function hn(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([dn]),o.qOj]}),n})(),it=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(ot(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(ot(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(se,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})(),_=(()=>{class n{constructor(){this._validator=E}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):E,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const mn={provide:l,useExisting:(0,o.Gpc)(()=>P),multi:!0};let P=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=e=>function fn(n){return null!=n&&!1!==n&&"false"!=`${n}`}(e),this.createValidator=e=>fe}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([mn]),o.qOj]}),n})(),An=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Je]]}),n})(),Mn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[An]}),n})()}}]);