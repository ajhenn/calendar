import{Ai as zn,Ar as n_,B as Ib,Br as pg,Di as zM,Dt as Tg,It as Vo,Jn as g,Lr as os,Lt as W$1,Mr as ns,Nt as Uw,O as El,Oi as zN,Ot as Th,Pr as oN,Qn as gh,Qt as Zb,Rr as pK,Sn as bn,Tt as Te,Vn as es,W as K0,Wn as fN,Wt as Y0,X as L6,Yt as Yi,Z as Le,Zr as sN,_n as at,an as _e,ar as h_,bn as bb,dr as iN,dt as Oe,fi as vT,g as D,gn as ap,hi as wN,in as _b,jt as Ub,k as Et$1,lr as hn,m as Cg,mt as Pa,or as hg,q as Ke$1,qr as qi,ri as ts,rr as hK,s as Ab,sr as hh,tn as _N,v as DN,vr as kc,xi as yN,y as Db,zt as We$1}from"./chunk-CeEGOUzy.js";import{f as rt,u as ot}from"./chunk-UMmgR3-g.js";import{S as un,c as Dt,o as An,r as Ie,w as h}from"./main-35KCIHZD.js";import{c as ee$1,i as Qt,l as zt,n as Ht,o as Xe,r as O,s as Yt,t as Gt}from"./chunk-CP5qq498.js";import"./chunk-Yts-ZXkN.js";import{C as Zl,D as ge,F as xr,O as ka,T as dt,_ as Ss,a as La,f as Pa$1,g as Ro,h as Rn,i as Kl,p as Pn,s as Ms,u as Oa,v as Ta}from"./chunk-CKzIVB3I.js";import{a as j,i as _$1,n as I,r as T$1,t as F}from"./chunk-BP1BBO2S.js";var et=[`input`];var tt=[`*`];var W={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var nt=new D(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>W});var _=(function(t){return t[t.Init=0]=`Init`,t[t.Checked=1]=`Checked`,t[t.Unchecked=2]=`Unchecked`,t[t.Indeterminate=3]=`Indeterminate`,t})(_||{});var ee=class{source;checked};var it=(()=>{class t{_elementRef=g(_e);_changeDetectorRef=g(h_);_ngZone=g(W$1);_animationsDisabled=Vo();_options=g(nt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let c=new ee;return c.source=this,c.checked=e,c}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Oe;indeterminateChange=new Oe;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=_.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){g(bn).load(Uw);let e=g(new n_(`tabindex`),{optional:!0});this._options=this._options||W,this.color=this._options.color||W.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(ap).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let c=e!=this._indeterminate();this._indeterminate.set(e),c&&(e?this._transitionCheckState(_.Indeterminate):this._transitionCheckState(this.checked?_.Checked:_.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Ke$1(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let c=this._currentCheckState,i=this._getAnimationTargetElement();if(!(c===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(c,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let p=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(p)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?_.Checked:_.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,c){if(this._animationsDisabled)return``;switch(e){case _.Init:if(c===_.Checked)return this._animationClasses.uncheckedToChecked;if(c==_.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case _.Unchecked:return c===_.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case _.Checked:return c===_.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case _.Indeterminate:return c===_.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let c=this._inputElement;c&&(c.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(c){return new(c||t)};static ɵcmp=Et$1({type:t,selectors:[[`mat-checkbox`]],viewQuery:function(c,i){if(c&1&&Ab(et,5),c&2){let p;_N(p=wN())&&(i._inputElement=p.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(c,i){c&2&&(Db(`id`,i.id),es(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),gh(i.color?`mat-`+i.color:`mat-accent`),zn(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,at],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,at],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,at],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:Th(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,at],checked:[2,`checked`,`checked`,at],disabled:[2,`disabled`,`disabled`,at],indeterminate:[2,`indeterminate`,`indeterminate`,at]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Zb([{provide:dt,useExisting:Pa(()=>t),multi:!0},{provide:ge,useExisting:t,multi:!0}]),qi],ngContentSelectors:tt,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(c,i){if(c&1&&(os(),kc(0,`label`,3),Ib(`click`,function(J){return i._preventBubblingFromLabel(J)}),kc(1,`span`,4,0),_b(3,`span`,5),kc(4,`input`,6,1),Ib(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(J){return i._onInteractionEvent(J)}),hh(),_b(6,`span`,7),kc(7,`span`,8),Tg(),kc(8,`svg`,9),_b(9,`path`,10),hh(),Cg(),_b(10,`span`,11),hh(),_b(11,`span`,12),hh(),kc(12,`span`,13,2),hn(14),hh()()),c&2){let p=DN(2);bb(`labelPosition`,i.labelPosition)(`for`,i.inputId),Yi(4),zn(`mdc-checkbox--selected`,i.checked),bb(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),es(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),Yi(7),bb(`matRippleTrigger`,p)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[L6,Yt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();var Ke=(()=>{class t{static ɵfac=function(c){return new(c||t)};static ɵmod=Le({type:t});static ɵinj=Te({imports:[it,El]})}return t})();function mt(t,n){if(t&1&&(kc(0,`mat-error`,7),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function st(t,n){if(t&1&&iN(0,mt,2,1,`mat-error`,7,oN),t&2)sN(yN().forgotPwForm.email().errors())}function lt(t,n){if(t&1&&(kc(0,`mat-error`,7),zN(1),hh()),t&2){let e=yN();Yi(),Ub(e.forgotError())}}var Q=class t{dialogRef=g(O);signInService=g(h);dialogData=g(Xe);errorMsgString=`An unexpected error occurred. Please try again later.`;forgotPasswordModel=Ke$1({email:this.dialogData?.email??``});forgotPwForm=Ro(this.forgotPasswordModel,n=>{ka(n.email,500),Pa$1(n.email,{message:`Email is required.`}),Ta(n.email,{message:`Enter a valid email address.`})});forgotError=Ke$1(null);async forgotPassword(n){n.preventDefault();try{(await this.signInService.forgotPassword(this.forgotPasswordModel().email)).error?this.forgotError.set(this.errorMsgString):this.dialogRef.close({email:this.forgotPasswordModel().email??``,successMsg:`Success! A password reset email has been sent.`})}catch(e){e?.message;this.forgotError.set(this.errorMsgString)}}closeDialog(){this.dialogRef.close()}static ɵfac=function(e){return new(e||t)};static ɵcmp=Et$1({type:t,selectors:[[`app-forgot-password`]],decls:19,vars:3,consts:[[1,`calendar-dialog-header`],[`mat-dialog-title`,``],[`mat-icon-button`,``,3,`click`],[`mat-dialog-close`,``],[3,`submit`],[`appearance`,`outline`,1,`calendar-dialog-fw`],[`matInput`,``,`type`,`email`,`placeholder`,`you@example.com`,`autocomplete`,`email`,3,`formField`],[1,`text-sm`,`pl-2`],[1,`pt-4`,`flex`,`justify-end`],[`mat-button`,``,`type`,`button`,1,`calendar-cancel-btn`,3,`click`],[`mat-flat-button`,``,`type`,`submit`]],template:function(e,c){e&1&&(kc(0,`div`,0)(1,`h2`,1),zN(2,`Reset Password`),hh(),kc(3,`button`,2),Ib(`click`,function(){return c.closeDialog()}),kc(4,`mat-icon`,3),zN(5,`close`),hh()()(),kc(6,`mat-dialog-content`)(7,`form`,4),Ib(`submit`,function(p){return c.forgotPassword(p)}),kc(8,`mat-form-field`,5)(9,`mat-label`),zN(10,`Email`),hh(),_b(11,`input`,6),K0(),hh(),ts(12,st,2,0),ts(13,lt,2,1,`mat-error`,7),kc(14,`div`,8)(15,`button`,9),Ib(`click`,function(){return c.closeDialog()}),zN(16,`Cancel`),hh(),kc(17,`button`,10),zN(18,`Send Reset Email`),hh()()()()),e&2&&(Yi(11),bb(`formField`,c.forgotPwForm.email),Y0(),Yi(),ns(c.forgotPwForm.email().touched()&&c.forgotPwForm.email().invalid()?12:-1),Yi(),ns(c.forgotError()?13:-1))},dependencies:[La,Qt,zt,Ht,Gt,Pn,xr,Rn,Ss,ot,rt,Zl,Kl,pK,hK,zM],styles:[`.calendar-dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-right:8px}[mat-dialog-title][_ngcontent-%COMP%]{margin:0}.calendar-dialog-fw[_ngcontent-%COMP%]{width:100%}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:clamp(280px,80vw,420px);padding-top:8px}.calendar-cancel-btn[_ngcontent-%COMP%]{color:#b00020!important;margin-right:10px}`]})};var T=(t,n)=>n.message;function bt(t,n){if(t&1&&(kc(0,`mat-error`,27),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function ht(t,n){if(t&1&&iN(0,bt,2,1,`mat-error`,27,T),t&2)sN(yN(2).signInForm.email().errors())}function ut(t,n){if(t&1&&(kc(0,`mat-error`,27),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function pt(t,n){if(t&1&&iN(0,ut,2,1,`mat-error`,27,T),t&2)sN(yN(2).signInForm.password().errors())}function kt(t,n){if(t&1&&(kc(0,`div`,20),_b(1,`p`,28),hh()),t&2){let e=yN(2);Yi(),bb(`innerHTML`,e.signInError(),vT)}}function _t(t,n){if(t&1&&(kc(0,`div`,21),_b(1,`p`,29),hh()),t&2){let e=yN(2);Yi(),bb(`innerHTML`,e.resetSuccessMessage(),vT)}}function xt(t,n){if(t&1){let e=fN();kc(0,`div`)(1,`mat-card-header`,8),_b(2,`img`,9),kc(3,`div`,10)(4,`mat-card-title`,11),zN(5,`Sign In`),hh(),kc(6,`p`,12),zN(7,`Your calendar is waiting for you!`),hh()()(),kc(8,`mat-card-content`,13)(9,`form`,14),Ib(`submit`,function(i){hg(e);return pg(yN().handleSignIn(i))}),kc(10,`div`,15)(11,`mat-form-field`,16)(12,`mat-label`),zN(13,`Email`),hh(),_b(14,`input`,17),K0(),kc(15,`mat-icon`,18),zN(16,`mail`),hh()(),ts(17,ht,2,0),hh(),kc(18,`div`,15)(19,`mat-form-field`,16)(20,`mat-label`),zN(21,`Password`),hh(),_b(22,`input`,19),K0(),kc(23,`mat-icon`,18),zN(24,`shield_lock`),hh()(),ts(25,pt,2,0),hh(),ts(26,kt,2,1,`div`,20),ts(27,_t,2,1,`div`,21),kc(28,`div`,22)(29,`button`,23),zN(30,` Sign In `),hh(),kc(31,`div`,24)(32,`p`,25),zN(33,` Have an invite code? `),kc(34,`a`,26),Ib(`click`,function(){hg(e);return pg(yN().toggleCreateAccount())}),zN(35,`Create an account`),hh()()()()()()()}if(t&2){let e=yN();zn(`sign-in-exit`,e.isCreateAccount())(`sign-in-enter`,!e.isCreateAccount()),Yi(14),bb(`formField`,e.signInForm.email),Y0(),Yi(3),ns(e.signInForm.email().touched()&&e.signInForm.email().invalid()?17:-1),Yi(5),bb(`formField`,e.signInForm.password),Y0(),Yi(3),ns(e.signInForm.password().touched()&&e.signInForm.password().invalid()?25:-1),Yi(),ns(e.signInError()?26:-1),Yi(),ns(e.resetSuccessMessage()?27:-1)}}function gt(t,n){if(t&1&&(kc(0,`mat-error`,27),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function ft(t,n){if(t&1&&iN(0,gt,2,1,`mat-error`,27,T),t&2)sN(yN(3).createAccountForm.name().errors())}function vt(t,n){if(t&1&&(kc(0,`mat-error`,27),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function yt(t,n){if(t&1&&iN(0,vt,2,1,`mat-error`,27,T),t&2)sN(yN(3).createAccountForm.email().errors())}function Ct(t,n){if(t&1&&(kc(0,`mat-error`,27),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function St(t,n){if(t&1&&iN(0,Ct,2,1,`mat-error`,27,T),t&2)sN(yN(3).createAccountForm.password().errors())}function It(t,n){if(t&1&&(kc(0,`mat-error`,27),zN(1),hh()),t&2){let e=n.$implicit;Yi(),Ub(e.message)}}function wt(t,n){if(t&1&&iN(0,It,2,1,`mat-error`,27,T),t&2)sN(yN(4).createAccountForm.inviteCode().errors())}function Mt(t,n){if(t&1&&(kc(0,`div`,15)(1,`mat-form-field`,16)(2,`mat-label`),zN(3,`Invite Code`),hh(),_b(4,`input`,38),K0(),kc(5,`mat-icon`,18),zN(6,`group_add`),hh()(),ts(7,wt,2,0),hh()),t&2){let e=yN(3);Yi(4),bb(`formField`,e.createAccountForm.inviteCode),Y0(),Yi(3),ns(e.createAccountForm.inviteCode().touched()&&e.createAccountForm.inviteCode().invalid()?7:-1)}}function Et(t,n){if(t&1&&(kc(0,`div`,20),_b(1,`p`,28),hh()),t&2){let e=yN(3);Yi(),bb(`innerHTML`,e.createAccountError(),vT)}}function Nt(t,n){if(t&1){let e=fN();kc(0,`form`,14),Ib(`submit`,function(i){hg(e);return pg(yN(2).handleCreateAccount(i))}),kc(1,`div`,15)(2,`mat-form-field`,16)(3,`mat-label`),zN(4,`Name`),hh(),_b(5,`input`,33),K0(),kc(6,`mat-icon`,18),zN(7,`badge`),hh()(),ts(8,ft,2,0),hh(),kc(9,`div`,15)(10,`mat-form-field`,16)(11,`mat-label`),zN(12,`Email`),hh(),_b(13,`input`,17),K0(),kc(14,`mat-icon`,18),zN(15,`mail`),hh()(),ts(16,yt,2,0),hh(),kc(17,`div`,15)(18,`mat-form-field`,16)(19,`mat-label`),zN(20,`Password`),hh(),_b(21,`input`,34),K0(),kc(22,`button`,35),Ib(`click`,function(){hg(e);return pg(yN(2).toggleCreatePasswordMask())}),kc(23,`mat-icon`),zN(24),hh()()(),ts(25,St,2,0),hh(),ts(26,Mt,8,2,`div`,15),ts(27,Et,2,1,`div`,20),kc(28,`div`,36)(29,`button`,23),zN(30,` Create Account `),hh(),kc(31,`button`,37),Ib(`click`,function(){hg(e);return pg(yN(2).toggleCreateAccount())}),zN(32,` Back to Sign In `),hh()()()}if(t&2){let e=yN(2);Yi(5),bb(`formField`,e.createAccountForm.name),Y0(),Yi(3),ns(e.createAccountForm.name().touched()&&e.createAccountForm.name().invalid()?8:-1),Yi(5),bb(`formField`,e.createAccountForm.email),Y0(),Yi(3),ns(e.createAccountForm.email().touched()&&e.createAccountForm.email().invalid()?16:-1),Yi(5),bb(`type`,e.maskCreatePassword()?`password`:`text`)(`formField`,e.createAccountForm.password),Y0(),Yi(),es(`aria-label`,`Hide or show password`)(`aria-pressed`,!e.maskCreatePassword()),Yi(2),Ub(e.maskCreatePassword()?`visibility_off`:`visibility`),Yi(),ns(e.createAccountForm.password().touched()&&e.createAccountForm.password().invalid()?25:-1),Yi(),ns(e.createAccountForm.hasInviteCode().value()===!0?26:-1),Yi(),ns(e.createAccountError()?27:-1)}}function Ft(t,n){if(t&1){let e=fN();kc(0,`div`,32)(1,`div`,21),_b(2,`p`,29),hh(),kc(3,`button`,37),Ib(`click`,function(){hg(e);return pg(yN(2).toggleCreateAccount())}),zN(4,` Go to Sign In `),hh()()}if(t&2){let e=yN(2);Yi(2),bb(`innerHTML`,e.createAccountSuccess(),vT)}}function Tt(t,n){if(t&1&&(kc(0,`div`)(1,`mat-card-header`,30),_b(2,`img`,9),kc(3,`div`,10)(4,`mat-card-title`,11),zN(5,`Create Account`),hh(),kc(6,`p`,31),zN(7,`Join us today!`),hh()()(),kc(8,`mat-card-content`,13),ts(9,Nt,33,12,`form`,32)(10,Ft,5,1,`div`,32),hh()()),t&2){let e=yN();zn(`create-account-exit`,!e.isCreateAccount())(`create-account-enter`,e.isCreateAccount()),Yi(9),ns(e.createAccountSuccess()?10:9)}}var We=class t{dialog=g(ee$1);destroyRef=g(We$1);router=g(Ie);store=g(Dt);signInService=g(h);isCreateAccount=Ke$1(!1);isTransitioning=Ke$1(!1);signInError=Ke$1(null);signInTimeout=Ke$1(this.router.currentNavigation()?.extras.state?.isTimedOut??!1);createAccountError=Ke$1(null);createAccountSuccess=Ke$1(null);maskCreatePassword=Ke$1(!0);signInModel=Ke$1({email:``,password:``,rememberMe:!1});signInForm=Ro(this.signInModel,n=>{ka(n.email,500),Pa$1(n.email,{message:`Email is required.`}),Ta(n.email,{message:`Enter a valid email address.`}),Pa$1(n.password,{message:`Password is required.`})});createAccountModel=Ke$1({name:``,email:``,password:``,hasInviteCode:!0,inviteCode:``});createAccountForm=Ro(this.createAccountModel,n=>{Pa$1(n.name,{message:`Name is required.`}),ka(n.email,500),Pa$1(n.email,{message:`Email is required.`}),Ta(n.email,{message:`Enter a valid email address.`}),ka(n.password,500),Pa$1(n.password,{message:`Password is required.`}),Oa(n.password,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/,{message:`Password must be at least 10 characters long and include uppercase, lowercase, and a number.`}),Pa$1(n.inviteCode,{message:`Invite code is required.`}),ka(n.inviteCode,500)});resetSuccessMessage=Ke$1(null);toggleCreateAccount(){this.isTransitioning.set(!0),this.signInError.set(null),this.signInTimeout.set(null)}onCardAnimationEnd(){this.isTransitioning()&&(this.isCreateAccount.update(n=>!n),this.isTransitioning.set(!1))}goToCalendar(){this.store.dispatch(An())}toggleCreatePasswordMask(){this.maskCreatePassword.update(n=>!n)}async handleSignIn(n){n.preventDefault(),this.signInError.set(null),this.signInTimeout.set(null);try{let e=await this.signInService.signIn(this.signInModel().email,this.signInModel().password);e.error?this.signInError.set(this.setErrorMsg(e.error)):this.goToCalendar()}catch(e){let c=e?.message||`An unexpected error occurred`;this.signInError.set(this.setErrorMsg(c))}}setErrorMsg(n){let e={"Invalid login credentials":`Incorrect email or password. Please try again.`,"Account Creation Fail":`We're having trouble creating your account. Please try again.`,"Email not confirmed":`Check for the email we sent and confirm your account before signing in.`,default:`Oh shit, something broke! Contact Andy for help. <br><br> Error: `+n};return n&&e[n]||e.default}async handleCreateAccount(n){n.preventDefault(),this.createAccountError.set(null),this.signInTimeout.set(null);try{let e=await this.signInService.signUp(this.createAccountModel().email,this.createAccountModel().password,this.createAccountModel().name,this.createAccountModel().inviteCode);e.error?this.createAccountError.set(e.error):this.createAccountSuccess.set(`Nice work! Check your email to confirm your account and sign in.`)}catch(e){let c=e?.message||`An unexpected error occurred`;this.createAccountError.set(this.setErrorMsg(c))}}openForgotPwModal(){this.dialog.open(Q,{data:{email:this.signInModel().email??``}}).afterClosed().pipe(un(this.destroyRef)).subscribe(({email:n,successMsg:e}={})=>{e&&this.resetSuccessMessage.set(e)})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Et$1({type:t,selectors:[[`app-sign-in`]],decls:8,vars:6,consts:[[1,`flex`,`items-center`,`justify-center`,`min-h-screen`,`bg-gradient-to-br`,`from-blue-50`,`via-indigo-50`,`to-purple-100`],[1,`absolute`,`inset-0`,`overflow-hidden`,`pointer-events-none`],[1,`absolute`,`top-10`,`left-10`,`w-72`,`h-72`,`bg-blue-200`,`rounded-full`,`mix-blend-multiply`,`filter`,`blur-3xl`,`opacity-20`,`animate-blob`],[1,`absolute`,`top-40`,`right-10`,`w-72`,`h-72`,`bg-purple-200`,`rounded-full`,`mix-blend-multiply`,`filter`,`blur-3xl`,`opacity-20`,`animate-blob`,`animation-delay-2000`],[1,`absolute`,`-bottom-8`,`left-1/2`,`w-72`,`h-72`,`bg-pink-200`,`rounded-full`,`mix-blend-multiply`,`filter`,`blur-3xl`,`opacity-20`,`animate-blob`,`animation-delay-4000`],[1,`w-full`,`max-w-md`,`shadow-2xl`,`relative`,`z-10`,`transform`,`hover:shadow-3xl`,`transition-all`,`duration-500`,`backdrop-blur-sm`,`bg-white/95`,3,`animationend`],[3,`sign-in-exit`,`sign-in-enter`],[3,`create-account-exit`,`create-account-enter`],[1,`relative`,`overflow-hidden`,`bg-gradient-to-r`,`from-indigo-600`,`to-purple-600`,`text-white`,`p-8`,`mb-8`,`rounded-t-lg`],[`src`,`calendar_app_icon_shadow.jpg`,`alt`,``,1,`absolute`,`-right-4`,`top-1/2`,`-translate-y-1/2`,`h-36`,`w-36`,`mix-blend-multiply`,`pointer-events-none`,`transform`,`rotate-12`,2,`filter`,`contrast(1.1) brightness(1.1) saturate(1.6)`,`-webkit-mask-image`,`radial-gradient(circle, black 70%, transparent 100%)`,`mask-image`,`radial-gradient(circle, black 70%, transparent 100%)`],[1,`flex`,`flex-col`,`z-10`],[1,`text-3xl`,`font-bold`],[1,`text-indigo-100`,`text-sm`,`mt-3`,`mb-3`,`font-light`,`self-end`],[1,`p-8`],[1,`space-y-6`,3,`submit`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`type`,`email`,`placeholder`,`you@example.com`,`autocomplete`,`email`,3,`formField`],[`matSuffix`,``],[`matInput`,``,`type`,`password`,`placeholder`,`••••••••`,`autocomplete`,`current-password`,3,`formField`],[1,`bg-red-50`,`border`,`border-red-200`,`rounded-md`,`p-4`],[1,`bg-green-50`,`border`,`border-green-200`,`rounded-md`,`p-4`],[1,`flex`,`flex-col`,`gap-8`,`pt-4`],[`mat-raised-button`,``,`color`,`primary`,`type`,`submit`,1,`w-full`,`py-3`,`text-lg`,`font-semibold`,`hover:shadow-lg`,`transition-all`,`duration-300`,`transform`,`hover:scale-105`],[1,`text-center`],[1,`text-sm`,`text-gray-600`],[`href`,`javascript:void(0);`,1,`text-indigo-600`,`hover:text-indigo-800`,`font-semibold`,`transition-colors`,`ml-1`,3,`click`],[1,`text-sm`,`pl-2`],[1,`text-sm`,`text-red-700`,3,`innerHTML`],[1,`text-sm`,`text-green-700`,3,`innerHTML`],[1,`relative`,`overflow-hidden`,`bg-gradient-to-r`,`from-purple-600`,`to-pink-600`,`text-white`,`p-8`,`mb-8`,`rounded-t-lg`],[1,`text-purple-100`,`text-sm`,`mt-3`,`mb-3`,`font-light`,`self-end`],[1,`space-y-6`],[`matInput`,``,`type`,`text`,`placeholder`,`John Doe`,`autocomplete`,`name`,3,`formField`],[`matInput`,``,`placeholder`,`••••••••`,`autocomplete`,`new-password`,3,`type`,`formField`],[`mat-icon-button`,``,`matSuffix`,``,`type`,`button`,3,`click`],[1,`flex`,`flex-col`,`gap-4`,`pt-4`],[`mat-stroked-button`,``,`type`,`button`,1,`w-full`,`py-3`,`text-lg`,`font-semibold`,`text-purple-600`,`border-purple-600`,`hover:bg-purple-50`,`transition-all`,`duration-300`,`transform`,`hover:scale-105`,3,`click`],[`matInput`,``,`type`,`text`,`autocomplete`,`off`,`autocorrect`,`off`,3,`formField`]],template:function(e,c){e&1&&(kc(0,`div`,0)(1,`div`,1),_b(2,`div`,2)(3,`div`,3)(4,`div`,4),hh(),kc(5,`mat-card`,5),Ib(`animationend`,function(){return c.onCardAnimationEnd()}),ts(6,xt,36,10,`div`,6),ts(7,Tt,11,5,`div`,7),hh()()),e&2&&(Yi(5),zn(`card-fade-out`,c.isTransitioning())(`card-fade-in`,!c.isTransitioning()),Yi(),ns(c.isCreateAccount()?-1:6),Yi(),ns(c.isCreateAccount()?7:-1))},dependencies:[La,T$1,I,F,j,_$1,Pn,xr,Rn,Ss,Ms,Zl,Kl,pK,hK,zM,Ke,ot,rt],styles:[`@keyframes _ngcontent-%COMP%_blob{0%,to{transform:translate(0) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(.9)}}@keyframes _ngcontent-%COMP%_fadeOutUpSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(-150px) translate(100px)}}@keyframes _ngcontent-%COMP%_fadeInUpSwipe{0%{opacity:0;transform:translateY(150px) translate(-100px)}to{opacity:1;transform:translateY(0) translate(0)}}@keyframes _ngcontent-%COMP%_fadeOutDownSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(150px) translate(-100px)}}@keyframes _ngcontent-%COMP%_fadeInDownSwipe{0%{opacity:0;transform:translateY(-150px) translate(100px)}to{opacity:1;transform:translateY(0) translate(0)}}.animate-blob[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blob 7s infinite}.animation-delay-2000[_ngcontent-%COMP%]{animation-delay:2s}.animation-delay-4000[_ngcontent-%COMP%]{animation-delay:4s}.sign-in-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.sign-in-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-transition[_ngcontent-%COMP%]{transition:all .6s cubic-bezier(.68,-.55,.265,1.55)}.card-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardPulse .6s cubic-bezier(.68,-.55,.265,1.55) forwards}@keyframes _ngcontent-%COMP%_cardPulse{0%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.02);filter:brightness(1.05)}to{transform:scale(1);filter:brightness(1)}}@keyframes _ngcontent-%COMP%_cardFadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_cardFadeOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}.card-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeIn .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-fade-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeOut .6s cubic-bezier(.68,-.55,.265,1.55) forwards}`]})};export{We as SignInComponent};