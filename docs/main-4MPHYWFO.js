import{a as tt}from"./chunk-IT3GDPJP.js";import{A as gn,B as te,b as Lt,c as Ht,d as zt,e as Vt,f as B,g as Ut,h as De,i as Yt,k as mn,l as Pe,o as dn,q as un,s as Fe,v as de,w as fn,x as pn,y as hn,z as _n}from"./chunk-MJEGV4LH.js";import{a as Be}from"./chunk-ZVQKCRJ7.js";import{a as Ot,c as Pt,d as Te,e as Ft,f as Bt,g as jt,h as Nt}from"./chunk-F4OWRC7Z.js";import{a as je}from"./chunk-NJIWGQWW.js";import{a as qt,b as Qt,c as Je,d as Ie,e as ln,h as et,m as Oe}from"./chunk-JPC4IYUR.js";import{Ab as Dt,Ac as It,B as ut,Bb as _,Cb as ce,Da as P,Db as H,E as _e,Ea as Mt,Eb as Se,Ec as Ae,F as ft,Fb as we,G as pt,Gb as C,Hb as k,I as ht,Ka as f,L as $e,La as re,Lb as At,Ma as Ce,Mc as Gt,N as _t,Nb as z,Nc as J,Oa as Ct,Ob as Ee,Oc as Xt,Pb as u,Qa as kt,Rb as le,Rc as $t,Sc as Wt,Ta as xt,U as ge,V as We,Vc as Ke,W as be,Wb as Rt,Xa as p,Y as ve,Ya as F,Za as E,Zc as Kt,a as d,ab as ke,b as G,ba as I,bb as St,ca as O,cb as wt,cc as me,d as pe,dd as Zt,ea as b,ed as Jt,f as dt,fa as X,fd as en,g as h,ga as a,ha as gt,hd as tn,ia as bt,id as Re,jb as L,jc as K,kb as v,kc as Z,la as x,lb as y,ma as S,md as nn,n as ae,na as vt,nd as ee,pa as w,pb as $,qa as q,qb as l,r as he,rb as m,rd as on,sb as T,sd as an,t as Qe,ta as ye,tb as se,td as rn,ua as Me,ub as xe,ud as sn,va as yt,vb as Et,vd as cn,wd as Ze,xa as Q,xb as W,y as N,yb as Tt,yd as bn,z as R,zb as M}from"./chunk-XC23AM5U.js";var Fn={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},Ne="__@ngrx/effects_create__";function Le(n,r={}){let e=r.functional?n:n(),t=d(d({},Fn),r);return Object.defineProperty(e,Ne,{value:t}),e}function Bn(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(Ne)?n[t][Ne].hasOwnProperty("dispatch"):!1).map(t=>{let i=n[t][Ne];return d({propertyName:t},i)})}function jn(n){return Bn(n)}function vn(n){return Object.getPrototypeOf(n)}function Nn(n){return!!n.constructor&&n.constructor.name!=="Object"&&n.constructor.name!=="Function"}function yn(n){return typeof n=="function"}function Ln(n){return n.filter(yn)}function Hn(n,r,e){let t=vn(n),o=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,s=jn(n).map(({propertyName:c,dispatch:g,useEffectsErrorHandler:j})=>{let A=typeof n[c]=="function"?n[c]():n[c],U=j?e(A,r):A;return g===!1?U.pipe(ft()):U.pipe(_t()).pipe(he(fe=>({effect:n[c],notification:fe,propertyName:c,sourceName:o,sourceInstance:n})))});return N(...s)}var zn=10;function Mn(n,r,e=zn){return n.pipe(ut(t=>(r&&r.handleError(t),e<=1?n:Mn(n,r,e-1))))}var Cn=(()=>{class n extends dt{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.\u0275fac=function(t){return new(t||n)(X(Vt))}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function He(...n){return R(r=>n.some(e=>typeof e=="string"?e===r.type:e.type===r.type))}var Vn=new b("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Mn}),Un="@ngrx/effects/init",Yn=Lt(Un);function Gn(n,r){if(n.notification.kind==="N"){let e=n.notification.value;!Xn(e)&&r.handleError(new Error(`Effect ${qn(n)} dispatched an invalid action: ${Qn(e)}`))}}function Xn(n){return typeof n!="function"&&n&&n.type&&typeof n.type=="string"}function qn({propertyName:n,sourceInstance:r,sourceName:e}){let t=typeof r[n]=="function";return!!e?`"${e}.${String(n)}${t?"()":""}"`:`"${String(n)}()"`}function Qn(n){try{return JSON.stringify(n)}catch{return n}}var $n="ngrxOnIdentifyEffects";function Wn(n){return nt(n,$n)}var Kn="ngrxOnRunEffects";function Zn(n){return nt(n,Kn)}var Jn="ngrxOnInitEffects";function ei(n){return nt(n,Jn)}function nt(n,r){return n&&r in n&&typeof n[r]=="function"}var kn=(()=>{class n extends h{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe($e(e=>Nn(e)?vn(e):e),Qe(e=>e.pipe($e(ti))),Qe(e=>{let t=e.pipe(ht(o=>ni(this.errorHandler,this.effectsErrorHandler)(o)),he(o=>(Gn(o,this.errorHandler),o.notification)),R(o=>o.kind==="N"&&o.value!=null),pt()),i=e.pipe(_e(1),R(ei),he(o=>o.ngrxOnInitEffects()));return N(t,i)}))}static{this.\u0275fac=function(t){return new(t||n)(X(yt),X(Vn))}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function ti(n){return Wn(n)?n.ngrxOnIdentifyEffects():""}function ni(n,r){return e=>{let t=Hn(e,n,r);return Zn(e)?e.ngrxOnRunEffects(t):t}}var ii=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||n)(X(kn),X(B))}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function xn(...n){let r=n.flat(),e=Ln(r);return gt([e,bt(()=>{a(Ht),a(zt,{optional:!0});let t=a(ii),i=a(kn),o=!t.isStarted;o&&t.start();for(let s of r){let c=yn(s)?a(s):s;i.addEffects(c)}o&&a(B).dispatch(Yn())})])}var oi=["*",[["mat-toolbar-row"]]],ai=["*","mat-toolbar-row"],ri=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Sn=(()=>{class n{_elementRef=a(P);_platform=a(Ae);_document=a(q);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,i,o){if(t&1&&Se(o,ri,5),t&2){let s;C(s=k())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(Ee(i.color?"mat-"+i.color:""),z("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ai,decls:2,vars:0,template:function(t,i){t&1&&(ce(oi),H(0),H(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var wn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=F({type:n});static \u0275inj=O({imports:[J]})}return n})();var fi=["mat-menu-item",""],pi=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],hi=["mat-icon, [matMenuItemIcon]","*"];function _i(n,r){n&1&&(vt(),l(0,"svg",2),T(1,"polygon",3),m())}var gi=["*"];function bi(n,r){if(n&1){let e=W();se(0,"div",0),Dt("click",function(){x(e);let i=_();return S(i.closed.emit("click"))})("animationstart",function(i){x(e);let o=_();return S(o._onAnimationStart(i.animationName))})("animationend",function(i){x(e);let o=_();return S(o._onAnimationDone(i.animationName))})("animationcancel",function(i){x(e);let o=_();return S(o._onAnimationDone(i.animationName))}),se(1,"div",1),H(2),xe()()}if(n&2){let e=_();Ee(e._classList),z("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Tt("id",e.panelId),L("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ot=new b("MAT_MENU_PANEL"),ue=(()=>{class n{_elementRef=a(P);_document=a(q);_focusMonitor=a(Ke);_parentMenu=a(ot,{optional:!0});_changeDetectorRef=a(K);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new h;_focused=new h;_highlighted=!1;_triggersSubmenu=!1;constructor(){a(Xt).load(an),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&M("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(L("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),z("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z]},exportAs:["matMenuItem"],attrs:fi,ngContentSelectors:hi,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(ce(pi),H(0),l(1,"span",0),H(2,1),m(),T(3,"div",1),v(4,_i,2,0,":svg:svg",2)),t&2&&(f(3),$("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),f(),y(i._triggersSubmenu?4:-1))},dependencies:[on],encapsulation:2,changeDetection:0})}return n})();var vi=new b("MatMenuContent");var yi=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),it="_mat-menu-enter",ze="_mat-menu-exit",ie=(()=>{class n{_elementRef=a(P);_changeDetectorRef=a(K);_injector=a(w);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ee();_allItems;_directDescendantItems=new Mt;_classList={};_panelAnimationState="void";_animationDone=new h;_isAnimating=Q(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,i=d({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ye;close=this.closed;panelId=a(Re).getId("mat-menu-panel-");constructor(){let e=a(yi);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new tn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ge(this._directDescendantItems),We(e=>N(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ge(this._directDescendantItems),We(t=>N(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:en(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=re(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=G(d({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===ze;(t||e===it)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===it||e===ze)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ze),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?it:ze)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ge(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,o){if(t&1&&Se(o,vi,5)(o,ue,5)(o,ue,4),t&2){let s;C(s=k())&&(i.lazyContent=s.first),C(s=k())&&(i._allItems=s),C(s=k())&&(i.items=s)}},viewQuery:function(t,i){if(t&1&&we(Ce,5),t&2){let o;C(o=k())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(t,i){t&2&&L("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Z],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Z(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Rt([{provide:ot,useExisting:n}])],ngContentSelectors:gi,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(ce(),wt(0,bi,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Mi=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=a(w);return()=>mn(n)}});var ne=new WeakMap,Ci=(()=>{class n{_canHaveBackdrop;_element=a(P);_viewContainerRef=a(xt);_menuItemInstance=a(ue,{optional:!0,self:!0});_dir=a(Gt,{optional:!0});_focusMonitor=a(Ke);_ngZone=a(Me);_injector=a(w);_scrollStrategy=a(Mi);_changeDetectorRef=a(K);_animationsDisabled=ee();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=pe.EMPTY;_menuCloseSubscription=pe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=a(ot,{optional:!0});this._parentMaterialMenu=t instanceof ie?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ne.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=ne.get(t);ne.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),s=o.getConfig(),c=s.positionStrategy;this._setPosition(t,c),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof ie&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(be(t.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof ie&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(_e(1)).subscribe(()=>{t.detach(),ne.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ne.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Fe(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof ie&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new Pe({positionStrategy:dn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",s=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,t){let[i,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,c]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[g,j]=[s,c],[A,U]=[i,o],Y=0;if(this._triggersSubmenu()){if(U=i=e.xPosition==="before"?"start":"end",o=A=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let fe=this._parentMaterialMenu.items.first;this._parentInnerPadding=fe?fe._getHostElement().offsetTop:0}Y=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(g=s==="top"?"bottom":"top",j=c==="top"?"bottom":"top");t.withPositions([{originX:i,originY:g,overlayX:A,overlayY:s,offsetY:Y},{originX:o,originY:g,overlayX:U,overlayY:s,offsetY:Y},{originX:i,originY:j,overlayX:A,overlayY:c,offsetY:-Y},{originX:o,originY:j,overlayX:U,overlayY:c,offsetY:-Y}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:ae(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(R(s=>this._menuOpen&&s!==this._menuItemInstance)):ae();return N(e,i,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ie(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ne.get(e)===this}_triggerIsAriaDisabled(){return Z(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){kt()};static \u0275dir=E({type:n})}return n})(),Dn=(()=>{class n extends Ci{_cleanupTouchstart;_hoverSubscription=pe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ye;onMenuOpen=this.menuOpened;menuClosed=new ye;onMenuClose=this.menuClosed;constructor(){super(!0);let e=a(Ct);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Wt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){$t(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&M("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),t&2&&L("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ke]})}return n})();var An=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=F({type:n});static \u0275inj=O({imports:[sn,de,J,Oe]})}return n})();var Rn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=F({type:n});static \u0275inj=O({imports:[Jt,de,J,Oe]})}return n})();function Si(n,r){if(n&1){let e=W();l(0,"div",1)(1,"button",2),M("click",function(){x(e);let i=_();return S(i.action())}),u(2),m()()}if(n&2){let e=_();f(2),le(" ",e.data.action," ")}}var wi=["label"];function Ei(n,r){}var Ti=Math.pow(2,31)-1,V=class{_overlayRef;instance;containerInstance;_afterDismissed=new h;_afterOpened=new h;_onAction=new h;_durationTimeoutId;_dismissedByAction=!1;constructor(r,e){this._overlayRef=e,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,Ti))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ve=new b("MatSnackBarData"),oe=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},st=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Ai=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Ri=(()=>{class n{snackBarRef=a(V);data=a(Ve);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(l(0,"div",0),u(1),m(),v(2,Si,3,1,"div",1)),t&2&&(f(),le(" ",i.data.message,`
`),f(),y(i.hasAction?2:-1))},dependencies:[cn,st,Di,Ai],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),at="_mat-snack-bar-enter",rt="_mat-snack-bar-exit",Ii=(()=>{class n extends ln{_ngZone=a(Me);_elementRef=a(P);_changeDetectorRef=a(K);_platform=a(Ae);_animationsDisabled=ee();snackBarConfig=a(oe);_document=a(q);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=a(w);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new h;_onExit=new h;_onEnter=new h;_animationState="void";_live;_label;_role;_liveElementId=a(Re).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===rt?this._completeExit():e===at&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?re(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(at)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(at)},200)))}exit(){return this._destroyed?ae(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?re(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(rt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(rt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,o="mdc-snackbar__label";i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let o=t[i],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&we(et,7)(wi,7),t&2){let o;C(o=k())&&(i._portalOutlet=o.first),C(o=k())&&(i._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&M("animationend",function(s){return i.onAnimationEnd(s.animationName)})("animationcancel",function(s){return i.onAnimationEnd(s.animationName)}),t&2&&z("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[ke],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),St(4,Ei,0,0,"ng-template",4),m(),T(5,"div"),m()()),t&2&&(f(5),L("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[et],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Oi=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new oe}),In=(()=>{class n{_live=a(Zt);_injector=a(w);_breakpointObserver=a(Kt);_parentSnackBar=a(n,{optional:!0,skipSelf:!0});_defaultConfig=a(Oi);_animationsDisabled=ee();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ri;snackBarContainerComponent=Ii;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let o=d(d({},this._defaultConfig),i);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=w.create({parent:i||this._injector,providers:[{provide:oe,useValue:t}]}),s=new Je(this.snackBarContainerComponent,t.viewContainerRef,o),c=e.attach(s);return c.instance.snackBarConfig=t,c.instance}_attach(e,t){let i=d(d(d({},new oe),this._defaultConfig),t),o=this._createOverlay(i),s=this._attachSnackBarContainer(o,i),c=new V(s,o);if(e instanceof Ce){let g=new Ie(e,null,{$implicit:i.data,snackBarRef:c});c.instance=s.attachTemplatePortal(g)}else{let g=this._createInjector(i,c),j=new Je(e,void 0,g),A=s.attachComponentPortal(j);c.instance=A.instance}return this._breakpointObserver.observe(nn.HandsetPortrait).pipe(be(o.detachments())).subscribe(g=>{o.overlayElement.classList.toggle(this.handsetCssClass,g.matches)}),i.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(c,i),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Pe;t.direction=e.direction;let i=un(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,c=!s&&e.horizontalPosition!=="center";return s?i.left("0"):c?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,Fe(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return w.create({parent:i||this._injector,providers:[{provide:V,useValue:t},{provide:Ve,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ue=class n{snackbarContent=a(Ve);snackBarRef=a(V);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-snackbar"]],decls:2,vars:1,consts:[["matSnackBarLabel","",1,"calendar-snackbar"]],template:function(e,t){e&1&&(l(0,"span",0),u(1),m()),e&2&&(f(),le(" ",t.snackbarContent," "))},dependencies:[st],styles:[".calendar-snackbar[_ngcontent-%COMP%]{display:flex;justify-content:center;color:#fff}"]})};function Pi(n,r){if(n&1){let e=W();l(0,"button",5),M("click",function(){x(e);let i=_();return S(i.logout())}),l(1,"mat-icon"),u(2,"logout"),m(),l(3,"span"),u(4,"Sign Out"),m()()}}function Fi(n,r){n&1&&(l(0,"div",9),u(1,"Demo Mode"),m())}function Bi(n,r){if(n&1&&(l(0,"button",11)(1,"mat-icon"),u(2,"calendar_today"),m()(),l(3,"button",12)(4,"mat-icon"),u(5,"analytics"),m()()),n&2){let e=_();$("queryParamsHandling","merge")("disabled",e.isCalendarActive()),f(3),$("queryParamsHandling","merge")("disabled",e.isDashboardActive())}}var Ye=class n{authService=a(Be);store=a(B);snackBar=a(In);router=a(Te);calendarService=a(je);currentRoute=Q("");constructor(){this.router.events.pipe(R(r=>r instanceof Ot)).subscribe(r=>{this.currentRoute.set(r.url)})}showSignOut=me(()=>this.authService.getAuthState().isLoggedIn&&!this.isDemoMode());isDemoMode=me(()=>this.calendarService.isDemoMode());isCalendarActive=me(()=>this.currentRoute().includes("/home"));isDashboardActive=me(()=>this.currentRoute().includes("/dashboard"));logout(){this.authService.logout(),this.store.dispatch(te({isTimedOut:!1}))}donateToDeveloper(){window.open("https://paypal.me/emissionbassmusic?country.x=US&locale.x=en_US","_blank")}shareSite(){let r=window.location.href;navigator.clipboard.writeText(r),this.openSnackBar()}openSnackBar(){this.snackBar.openFromComponent(Ue,{duration:3e3,data:"Website link copied!"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-header"]],decls:25,vars:4,consts:[["menu","matMenu"],[1,"col-12","header-toolbar","d-flex"],["color","primary"],["mat-icon-button","","aria-label","Menu",3,"matMenuTriggerFor"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"header-txt","cursor-pointer","flex","items-center"],[1,"header-title","bg-gradient-to-r","from-purple-600","to-blue-600","text-transparent","bg-clip-text"],[1,"title-main"],[1,"title-sub","text-orange-400","font-semibold"],[1,"header-spacer"],["mat-icon-button","","routerLink","/home","matTooltip","Calendar",1,"nav-button",3,"queryParamsHandling","disabled"],["mat-icon-button","","routerLink","/dashboard","matTooltip","Analytics",1,"nav-button","nav-button-mobile",3,"queryParamsHandling","disabled"]],template:function(e,t){if(e&1&&(l(0,"div",1)(1,"mat-toolbar",2)(2,"button",3)(3,"mat-icon"),u(4,"menu"),m()(),l(5,"mat-menu",null,0),v(7,Pi,5,0,"button",4),l(8,"button",5),M("click",function(){return t.donateToDeveloper()}),l(9,"mat-icon"),u(10,"volunteer_activism"),m(),l(11,"span"),u(12,"Donate"),m()(),l(13,"button",5),M("click",function(){return t.shareSite()}),l(14,"mat-icon"),u(15,"share"),m(),l(16,"span"),u(17,"Share"),m()()(),l(18,"span",6)(19,"div",7)(20,"div",8),u(21,"Team Calendar"),m(),v(22,Fi,2,0,"div",9),m()(),T(23,"span",10),v(24,Bi,6,4),m()()),e&2){let i=At(6);f(2),$("matMenuTriggerFor",i),f(5),y(t.showSignOut()?7:-1),f(15),y(t.isDemoMode()?22:-1),f(2),y(t.showSignOut()||t.isDemoMode()?24:-1)}},dependencies:[wn,Sn,Qt,qt,Ze,rn,An,ie,ue,Dn,Ft,Rn,tt],styles:[".header-toolbar[_ngcontent-%COMP%]{width:100%;left:0;top:0;z-index:1051;position:sticky}.nav-button[_ngcontent-%COMP%]{transition:all .3s ease;margin-left:.5rem}@media(min-width:480px){.nav-button-mobile[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}}.nav-button[_ngcontent-%COMP%]:not(:disabled):hover{background-color:#ffffff26}.nav-button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed;background-color:#0000001a;color:#ffffffb3}.header-txt[_ngcontent-%COMP%]{padding-left:.5rem;cursor:pointer;display:flex;align-items:center}.header-logo[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:.5rem;background:#ffffff14;padding:.25rem;border-radius:6px}.header-title[_ngcontent-%COMP%]   .title-main[_ngcontent-%COMP%]{font-weight:800;font-size:1.25rem;line-height:1}.header-title[_ngcontent-%COMP%]   .title-sub[_ngcontent-%COMP%]{font-size:.75rem;color:#823a89;margin-top:2px}.header-logo[_ngcontent-%COMP%]{transition:transform .22s cubic-bezier(.2,.9,.3,1),box-shadow .22s ease,background-color .22s ease;transform-origin:center}.header-logo[_ngcontent-%COMP%]:hover, .header-logo[_ngcontent-%COMP%]:focus{transform:scale(1.12) rotate(-6deg);box-shadow:0 6px 18px #00000040;background-color:#ffffff1f}.header-logo[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(255,255,255,.12);outline-offset:2px}.header-spacer[_ngcontent-%COMP%]{flex:1 1 auto}button[routerLinkActive=active][_ngcontent-%COMP%]{color:#fff;background-color:#0000001a;border-radius:4px}"],changeDetection:0})};function ji(n,r){n&1&&(se(0,"div",0)(1,"div",1),Et(2,"div",2),xe()())}var Ge=class n{loaderService=a(bn);isLoading=this.loaderService.isLoading;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-loader"]],decls:1,vars:1,consts:[[1,"loader-overlay"],[1,"loader-container"],[1,"spinner"]],template:function(e,t){e&1&&v(0,ji,3,0,"div",0),e&2&&y(t.isLoading()?0:-1)},styles:[".loader-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#ffffff26;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;z-index:9999}.loader-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;background:transparent;font-family:Inter,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,.3)}.spinner[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50%;background:conic-gradient(from 0deg,#fff6,#4f46e5cc,#fff6);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 6px),black 0);mask:radial-gradient(farthest-side,transparent calc(100% - 6px),black 0);animation:_ngcontent-%COMP%_spin 1s linear infinite,_ngcontent-%COMP%_sweep 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sweep{0%,to{background:conic-gradient(from 0deg,#fff6,#4f46e5cc,#fff6)}50%{background:conic-gradient(from 180deg,#4f46e5cc,#fff6,#4f46e5cc)}}"],changeDetection:0})};var Xe=class n{title=Q("calendar-app");static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-root"]],decls:3,vars:0,template:function(e,t){e&1&&T(0,"app-header")(1,"app-loader")(2,"router-outlet")},dependencies:[Pt,Ye,Ge],styles:["@keyframes _ngcontent-%COMP%_blob{0%,to{transform:translate(0) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(.9)}}.animate-blob[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blob 7s infinite}.animation-delay-2000[_ngcontent-%COMP%]{animation-delay:2s}.animation-delay-4000[_ngcontent-%COMP%]{animation-delay:4s}"]})};var mt=n=>{let r=a(Be),e=a(je),t=a(B);return n.queryParams.demo==="true"?(e.enableDemoMode(),!0):r.getAuthState().isLoggedIn?!0:(t.dispatch(te({isTimedOut:!0})),!1)};var On=[{path:"",redirectTo:"/sign-in",pathMatch:"full"},{path:"sign-in",loadComponent:()=>import("./chunk-XMZRECP5.js").then(n=>n.SignInComponent)},{path:"reset-password",loadComponent:()=>import("./chunk-ZKNYLP6M.js").then(n=>n.ResetPasswordComponent)},{path:"home",loadComponent:()=>import("./chunk-34UEJSPT.js").then(n=>n.CalendarComponent),canActivate:[mt]},{path:"dashboard",loadComponent:()=>import("./chunk-Z7Y6MW6O.js").then(n=>n.DashboardComponent),canActivate:[mt]},{path:"**",redirectTo:"/sign-in"}];var Ni={lists:[],loading:!1,error:null},Pn=Yt(Ni,De(fn,n=>G(d({},n),{loading:!0})),De(pn,(n,{lists:r})=>G(d({},n),{lists:r,loading:!1})),De(hn,(n,{error:r})=>G(d({},n),{error:r,loading:!1})));var qe=class n{actions$=a(Cn);router=a(Te);routerGoToCalendar$=Le(()=>this.actions$.pipe(He(_n),ve(()=>this.router.navigate(["/home"],{queryParamsHandling:"merge"}))),{dispatch:!1});routerGoToDashboard$=Le(()=>this.actions$.pipe(He(gn),ve(()=>this.router.navigate(["/dashboard"],{queryParamsHandling:"merge"}))),{dispatch:!1});routerGoToSignIn$=Le(()=>this.actions$.pipe(He(te),ve(r=>{let e={};r?.isTimedOut&&(e.state={isTimedOut:r.isTimedOut||!1}),this.router.navigate(["/sign-in"],e)})),{dispatch:!1});static \u0275fac=function(e){return new(e||n)};static \u0275prov=I({token:n,factory:n.\u0275fac})};It(Xe,{providers:[Bt(On,jt({scrollPositionRestoration:"top",anchorScrolling:"enabled"}),Nt()),Ut({calendar:Pn}),xn([qe])]}).catch(n=>console.error("bootstrapApplication error: ",n));
