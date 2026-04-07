import{a as P,b as D,c as ze,d as M,e as A,f as R,g as j}from"./chunk-63IVXENA.js";import{a as Be,b as Ue,c as je,d as Ge,e as He,f as Ye,g as Xe,i as $e}from"./chunk-MXRLCIN6.js";import{a as ve,f as ye,z as Pe}from"./chunk-XI3X4XDV.js";import{B,C as U,a as De,c as Oe,q as L,r as N,v as V,w as q}from"./chunk-OQK7ZDUO.js";import"./chunk-33XCSMKR.js";import{a as Re,b as Le,c as Ne,d as Ve,f as qe}from"./chunk-UGK3YUE4.js";import{a as we,b as Me}from"./chunk-YSOC3A5W.js";import"./chunk-PDWQ4NDA.js";import{$a as i,Da as f,Ea as v,Eb as ke,Ha as F,Ia as me,Nb as _e,Sb as xe,T as ee,Ta as $,Tb as w,Ua as _,Ub as ge,V as te,Va as x,Vc as Ee,W as ne,Wa as y,Xa as C,Y as s,Ya as I,Za as u,_a as c,_c as Se,ab as b,ba as S,ca as T,cd as Te,da as oe,dd as Fe,ea as ae,ed as Ae,fb as Q,gb as se,gd as O,ha as ie,hb as p,hd as z,ia as Y,ja as ce,jb as l,kb as le,kc as fe,la as k,lb as be,nb as he,oa as re,ob as Z,pb as J,qa as de,tb as ue,va as X,vb as E,wa as r,wb as pe,xb as d,yb as g,yc as Ce,zc as Ie}from"./chunk-UZ7JENIL.js";var Ke=["input"],We=["label"],et=["*"],K={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},tt=new ne("mat-checkbox-default-options",{providedIn:"root",factory:()=>K}),h=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(h||{}),W=class{source;checked},nt=(()=>{class t{_elementRef=s(de);_changeDetectorRef=s(xe);_ngZone=s(ce);_animationsDisabled=Se();_options=s(tt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let a=new W;return a.source=this,a.checked=e,a}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Y;indeterminateChange=new Y;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=h.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(Ie).load(Fe);let e=s(new _e("tabindex"),{optional:!0});this._options=this._options||K,this.color=this._options.color||K.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(Ee).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let a=e!=this._indeterminate();this._indeterminate.set(e),a&&(e?this._transitionCheckState(h.Indeterminate):this._transitionCheckState(this.checked?h.Checked:h.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=k(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let a=this._currentCheckState,n=this._getAnimationTargetElement();if(!(a===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let m=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(m)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?h.Checked:h.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,a){if(this._animationsDisabled)return"";switch(e){case h.Init:if(a===h.Checked)return this._animationClasses.uncheckedToChecked;if(a==h.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case h.Unchecked:return a===h.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case h.Checked:return a===h.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case h.Indeterminate:return a===h.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let a=this._inputElement;a&&(a.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=F({type:t,selectors:[["mat-checkbox"]],viewQuery:function(a,n){if(a&1&&he(Ke,5)(We,5),a&2){let m;Z(m=J())&&(n._inputElement=m.first),Z(m=J())&&(n._labelElement=m.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(a,n){a&2&&(se("id",n.id),$("tabindex",null)("aria-label",null)("aria-labelledby",null),pe(n.color?"mat-"+n.color:"mat-accent"),E("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",w],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",w],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ge(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],checked:[2,"checked","checked",w],disabled:[2,"disabled","disabled",w],indeterminate:[2,"indeterminate","indeterminate",w]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ke([{provide:De,useExisting:ee(()=>t),multi:!0},{provide:Oe,useExisting:t,multi:!0}]),re],ngContentSelectors:et,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(a,n){if(a&1&&(le(),c(0,"div",3),p("click",function(H){return n._preventBubblingFromLabel(H)}),c(1,"div",4,0)(3,"div",5),p("click",function(){return n._onTouchTargetClick()}),i(),c(4,"input",6,1),p("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(H){return n._onInteractionEvent(H)}),i(),b(6,"div",7),c(7,"div",8),oe(),c(8,"svg",9),b(9,"path",10),i(),ae(),b(10,"div",11),i(),b(11,"div",12),i(),c(12,"label",13,2),be(14),i()()),a&2){let m=ue(2);u("labelPosition",n.labelPosition),r(4),E("mdc-checkbox--selected",n.checked),u("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),$("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),r(7),u("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),r(),u("for",n.inputId)}},dependencies:[Te,Be],styles:[`.mdc-checkbox {
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
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
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
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
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
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),Ze=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=me({type:t});static \u0275inj=te({imports:[nt,Ce]})}return t})();function rt(t,o){if(t&1&&(c(0,"mat-error",7),d(1),i()),t&2){let e=o.$implicit;r(),g(e.message)}}function dt(t,o){if(t&1&&C(0,rt,2,1,"mat-error",7,y),t&2){let e=l();I(e.forgotPwForm.email().errors())}}function mt(t,o){if(t&1&&(c(0,"mat-error",7),d(1),i()),t&2){let e=l();r(),g(e.forgotError())}}var G=class t{dialogRef=s(Ue);signInService=s(j);dialogData=s(je);errorMsgString="An unexpected error occurred. Please try again later.";forgotPasswordModel=k({email:this.dialogData?.email??""});forgotPwForm=P(this.forgotPasswordModel,o=>{A(o.email,500),M(o.email,{message:"Email is required."}),D(o.email,{message:"Enter a valid email address."})});forgotError=k(null);async forgotPassword(o){o.preventDefault();try{(await this.signInService.forgotPassword(this.forgotPasswordModel().email)).error?this.forgotError.set(this.errorMsgString):this.dialogRef.close({email:this.forgotPasswordModel().email??"",successMsg:"Success! A password reset email has been sent."})}catch(e){let a=e?.message||"An unexpected error occurred";this.forgotError.set(this.errorMsgString)}}closeDialog(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-forgot-password"]],decls:19,vars:3,consts:[[1,"calendar-dialog-header"],["mat-dialog-title",""],["mat-icon-button","",3,"click"],["mat-dialog-close",""],[3,"submit"],["appearance","outline",1,"calendar-dialog-fw"],["matInput","","type","email","placeholder","you@example.com","autocomplete","email",3,"formField"],[1,"text-sm","pl-2"],[1,"pt-4","flex","justify-end"],["mat-button","","type","button",1,"calendar-cancel-btn",3,"click"],["mat-flat-button","","type","submit"]],template:function(e,a){e&1&&(c(0,"div",0)(1,"h2",1),d(2,"Reset Password"),i(),c(3,"button",2),p("click",function(){return a.closeDialog()}),c(4,"mat-icon",3),d(5,"close"),i()()(),c(6,"mat-dialog-content")(7,"form",4),p("submit",function(m){return a.forgotPassword(m)}),c(8,"mat-form-field",5)(9,"mat-label"),d(10,"Email"),i(),b(11,"input",6),f(),i(),_(12,dt,2,0),_(13,mt,2,1,"mat-error",7),c(14,"div",8)(15,"button",9),p("click",function(){return a.closeDialog()}),d(16,"Cancel"),i(),c(17,"button",10),d(18,"Send Reset Email"),i()()()()),e&2&&(r(11),u("formField",a.forgotPwForm.email),v(),r(),x(a.forgotPwForm.email().touched()&&a.forgotPwForm.email().invalid()?12:-1),r(),x(a.forgotError()?13:-1))},dependencies:[R,$e,He,Ye,Xe,q,V,L,N,Me,we,U,B,z,O,Ae],styles:[".calendar-dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-right:8px}[mat-dialog-title][_ngcontent-%COMP%]{margin:0}.calendar-dialog-fw[_ngcontent-%COMP%]{width:100%}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:clamp(280px,80vw,420px);padding-top:8px}.calendar-cancel-btn[_ngcontent-%COMP%]{color:#b00020!important;margin-right:10px}"]})};function st(t,o){if(t&1&&(c(0,"mat-error",24),d(1),i()),t&2){let e=o.$implicit;r(),g(e.message)}}function lt(t,o){if(t&1&&C(0,st,2,1,"mat-error",24,y),t&2){let e=l(2);I(e.signInForm.email().errors())}}function bt(t,o){if(t&1&&(c(0,"mat-error",24),d(1),i()),t&2){let e=o.$implicit;r(),g(e.message)}}function ht(t,o){if(t&1&&C(0,bt,2,1,"mat-error",24,y),t&2){let e=l(2);I(e.signInForm.password().errors())}}function ut(t,o){if(t&1&&(c(0,"div",17),b(1,"p",25),i()),t&2){let e=l(2);r(),u("innerHTML",e.signInError(),X)}}function pt(t,o){if(t&1&&(c(0,"div",18),b(1,"p",26),i()),t&2){let e=l(2);r(),u("innerHTML",e.resetSuccessMessage(),X)}}function kt(t,o){if(t&1){let e=Q();c(0,"div")(1,"mat-card-header",8)(2,"div",9)(3,"mat-card-title",10),d(4,"Sign In"),i(),c(5,"p",11),d(6,"Your calendar is waiting for you!"),i()()(),c(7,"mat-card-content",12)(8,"form",13),p("submit",function(n){S(e);let m=l();return T(m.handleSignIn(n))}),c(9,"div",9)(10,"mat-form-field",14)(11,"mat-label"),d(12,"Email"),i(),b(13,"input",15),f(),i(),_(14,lt,2,0),i(),c(15,"div",9)(16,"mat-form-field",14)(17,"mat-label"),d(18,"Password"),i(),b(19,"input",16),f(),i(),_(20,ht,2,0),i(),_(21,ut,2,1,"div",17),_(22,pt,2,1,"div",18),c(23,"div",19)(24,"a",20),p("click",function(){S(e);let n=l();return T(n.openForgotPwModal())}),d(25,"Forgot password?"),i()(),c(26,"div",21)(27,"button",22),d(28," Sign In "),i(),c(29,"button",23),p("click",function(){S(e);let n=l();return T(n.toggleCreateAccount())}),d(30," Create Account "),i()()()()()}if(t&2){let e=l();E("sign-in-exit",e.isCreateAccount())("sign-in-enter",!e.isCreateAccount()),r(13),u("formField",e.signInForm.email),v(),r(),x(e.signInForm.email().touched()&&e.signInForm.email().invalid()?14:-1),r(5),u("formField",e.signInForm.password),v(),r(),x(e.signInForm.password().touched()&&e.signInForm.password().invalid()?20:-1),r(),x(e.signInError()?21:-1),r(),x(e.resetSuccessMessage()?22:-1)}}function _t(t,o){if(t&1&&(c(0,"mat-error",24),d(1),i()),t&2){let e=o.$implicit;r(),g(e.message)}}function xt(t,o){if(t&1&&C(0,_t,2,1,"mat-error",24,y),t&2){let e=l(2);I(e.createAccountForm.name().errors())}}function gt(t,o){if(t&1&&(c(0,"mat-error",24),d(1),i()),t&2){let e=o.$implicit;r(),g(e.message)}}function ft(t,o){if(t&1&&C(0,gt,2,1,"mat-error",24,y),t&2){let e=l(2);I(e.createAccountForm.email().errors())}}function vt(t,o){if(t&1&&(c(0,"mat-error",24),d(1),i()),t&2){let e=o.$implicit;r(),g(e.message)}}function yt(t,o){if(t&1&&C(0,vt,2,1,"mat-error",24,y),t&2){let e=l(2);I(e.createAccountForm.password().errors())}}function Ct(t,o){if(t&1){let e=Q();c(0,"div")(1,"mat-card-header",27)(2,"div",9)(3,"mat-card-title",10),d(4,"Create Account"),i(),c(5,"p",28),d(6,"Join us today!"),i()()(),c(7,"mat-card-content",12)(8,"form",13),p("submit",function(n){S(e);let m=l();return T(m.handleCreateAccount(n))}),c(9,"mat-form-field",14)(10,"mat-label"),d(11,"Name"),i(),b(12,"input",29),f(),i(),_(13,xt,2,0),c(14,"mat-form-field",14)(15,"mat-label"),d(16,"Email"),i(),b(17,"input",30),f(),i(),_(18,ft,2,0),c(19,"mat-form-field",14)(20,"mat-label"),d(21,"Password"),i(),b(22,"input",31),f(),i(),_(23,yt,2,0),c(24,"div",21)(25,"button",22),d(26," Create Account "),i(),c(27,"button",32),p("click",function(){S(e);let n=l();return T(n.toggleCreateAccount())}),d(28," Back to Sign In "),i()()()()()}if(t&2){let e=l();E("create-account-exit",!e.isCreateAccount())("create-account-enter",e.isCreateAccount()),r(12),u("formField",e.createAccountForm.name),v(),r(),x(e.createAccountForm.name().touched()&&e.createAccountForm.name().invalid()?13:-1),r(4),u("formField",e.createAccountForm.email),v(),r(),x(e.createAccountForm.email().touched()&&e.createAccountForm.email().invalid()?18:-1),r(4),u("formField",e.createAccountForm.password),v(),r(),x(e.createAccountForm.password().touched()&&e.createAccountForm.password().invalid()?23:-1)}}var Je=class t{dialog=s(Ge);destroyRef=s(ie);router=s(fe);store=s(ye);signInService=s(j);isCreateAccount=k(!1);isTransitioning=k(!1);signInError=k(null);signInTimeout=k(this.router.currentNavigation()?.extras.state?.isTimedOut??!1);createAccountError=k(null);signInModel=k({email:"",password:"",rememberMe:!1});signInForm=P(this.signInModel,o=>{A(o.email,500),M(o.email,{message:"Email is required."}),D(o.email,{message:"Enter a valid email address."}),M(o.password,{message:"Password is required."})});createAccountModel=k({name:"",email:"",password:""});createAccountForm=P(this.createAccountModel,o=>{M(o.name,{message:"Name is required."}),A(o.email,500),M(o.email,{message:"Email is required."}),D(o.email,{message:"Enter a valid email address."}),A(o.password,500),M(o.password,{message:"Password is required."}),ze(o.password,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/,{message:"Password must be at least 10 characters long and include uppercase, lowercase, and a number."})});resetSuccessMessage=k(null);toggleCreateAccount(){this.isTransitioning.set(!0),this.signInError.set(null),this.signInTimeout.set(null)}onCardAnimationEnd(){this.isTransitioning()&&(this.isCreateAccount.update(o=>!o),this.isTransitioning.set(!1))}goToCalendar(){this.store.dispatch(Pe())}async handleSignIn(o){o.preventDefault(),this.signInError.set(null),this.signInTimeout.set(null);try{let e=await this.signInService.signIn(this.signInModel().email,this.signInModel().password);e.error?this.signInError.set(this.setErrorMsg(e.error)):this.goToCalendar()}catch(e){let a=e?.message||"An unexpected error occurred";this.signInError.set(this.setErrorMsg(a))}}setErrorMsg(o){let e={"Invalid login credentials":"Incorrect email or password. Please try again.","Account Creation Fail":"We're having trouble creating your account. Please try again.",default:"Oh shit, something broke! Contact Andy for help. <br><br> Error: "+o};return o&&e[o]||e.default}async handleCreateAccount(o){o.preventDefault(),this.createAccountError.set(null),this.signInTimeout.set(null);try{let e=await this.signInService.signUp(this.createAccountModel().email,this.createAccountModel().password,this.createAccountModel().name);e.error?this.createAccountError.set("Oh shit, can't create account! Contact Andy for help. <br><br> Error:"+e.error):(console.log("Sign-up successful:",e.data),e?.data&&e?.data?.role==="authenticated"?this.goToCalendar():this.createAccountError.set(this.setErrorMsg("Account Creation Fail")))}catch(e){let a=e?.message||"An unexpected error occurred";this.createAccountError.set(this.setErrorMsg(a))}}openForgotPwModal(){this.dialog.open(G,{data:{email:this.signInModel().email??""}}).afterClosed().pipe(ve(this.destroyRef)).subscribe(({email:o,successMsg:e}={})=>{console.log("modal close data",{email:o,successMsg:e}),e&&this.resetSuccessMessage.set(e)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-sign-in"]],decls:8,vars:6,consts:[[1,"flex","items-center","justify-center","min-h-screen","bg-gradient-to-br","from-blue-50","via-indigo-50","to-purple-100"],[1,"absolute","inset-0","overflow-hidden","pointer-events-none"],[1,"absolute","top-10","left-10","w-72","h-72","bg-blue-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob"],[1,"absolute","top-40","right-10","w-72","h-72","bg-purple-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob","animation-delay-2000"],[1,"absolute","-bottom-8","left-1/2","w-72","h-72","bg-pink-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob","animation-delay-4000"],[1,"w-full","max-w-md","shadow-2xl","relative","z-10","transform","hover:shadow-3xl","transition-all","duration-500","backdrop-blur-sm","bg-white/95",3,"animationend"],[3,"sign-in-exit","sign-in-enter"],[3,"create-account-exit","create-account-enter"],[1,"bg-gradient-to-r","from-indigo-600","to-purple-600","text-white","p-8","mb-8","rounded-t-lg"],[1,"flex","flex-col"],[1,"text-3xl","font-bold"],[1,"text-indigo-100","text-sm","mt-3","mb-3","font-light","self-end"],[1,"p-8"],[1,"space-y-6",3,"submit"],["appearance","outline",1,"w-full"],["matInput","","type","email","placeholder","you@example.com","autocomplete","email",3,"formField"],["matInput","","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","current-password",3,"formField"],[1,"bg-red-50","border","border-red-200","rounded-md","p-4"],[1,"bg-green-50","border","border-green-200","rounded-md","p-4"],[1,"flex","items-center","justify-between","pt-2"],["href","javascript:void(0);",1,"text-sm","text-indigo-600","hover:text-indigo-800","font-light","transition-colors",3,"click"],[1,"flex","flex-col","gap-4","pt-4"],["mat-raised-button","","color","primary","type","submit",1,"w-full","py-3","text-lg","font-semibold","hover:shadow-lg","transition-all","duration-300","transform","hover:scale-105"],["mat-stroked-button","","type","button",1,"w-full","py-3","text-lg","font-semibold","text-indigo-600","border-indigo-600","hover:bg-indigo-50","transition-all","duration-300","transform","hover:scale-105",3,"click"],[1,"text-sm","pl-2"],[1,"text-sm","text-red-700",3,"innerHTML"],[1,"text-sm","text-green-700",3,"innerHTML"],[1,"bg-gradient-to-r","from-purple-600","to-pink-600","text-white","p-8","mb-8","rounded-t-lg"],[1,"text-purple-100","text-sm","mt-3","mb-3","font-light","self-end"],["matInput","","type","text","placeholder","John Doe","autocomplete","off","autocorrect","off",3,"formField"],["matInput","","type","email","placeholder","you@example.com","autocomplete","off","autocorrect","off",3,"formField"],["matInput","","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","off","autocorrect","off",3,"formField"],["mat-stroked-button","","type","button",1,"w-full","py-3","text-lg","font-semibold","text-purple-600","border-purple-600","hover:bg-purple-50","transition-all","duration-300","transform","hover:scale-105",3,"click"]],template:function(e,a){e&1&&(c(0,"div",0)(1,"div",1),b(2,"div",2)(3,"div",3)(4,"div",4),i(),c(5,"mat-card",5),p("animationend",function(){return a.onCardAnimationEnd()}),_(6,kt,31,10,"div",6),_(7,Ct,29,10,"div",7),i()()),e&2&&(r(5),E("card-fade-out",a.isTransitioning())("card-fade-in",!a.isTransitioning()),r(),x(a.isCreateAccount()?-1:6),r(),x(a.isCreateAccount()?7:-1))},dependencies:[R,qe,Re,Ne,Ve,Le,q,V,L,N,U,B,z,O,Ze],styles:["@keyframes _ngcontent-%COMP%_blob{0%,to{transform:translate(0) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(.9)}}@keyframes _ngcontent-%COMP%_fadeOutUpSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(-150px) translate(100px)}}@keyframes _ngcontent-%COMP%_fadeInUpSwipe{0%{opacity:0;transform:translateY(150px) translate(-100px)}to{opacity:1;transform:translateY(0) translate(0)}}@keyframes _ngcontent-%COMP%_fadeOutDownSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(150px) translate(-100px)}}@keyframes _ngcontent-%COMP%_fadeInDownSwipe{0%{opacity:0;transform:translateY(-150px) translate(100px)}to{opacity:1;transform:translateY(0) translate(0)}}.animate-blob[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blob 7s infinite}.animation-delay-2000[_ngcontent-%COMP%]{animation-delay:2s}.animation-delay-4000[_ngcontent-%COMP%]{animation-delay:4s}.sign-in-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.sign-in-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-transition[_ngcontent-%COMP%]{transition:all .6s cubic-bezier(.68,-.55,.265,1.55)}.card-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardPulse .6s cubic-bezier(.68,-.55,.265,1.55) forwards}@keyframes _ngcontent-%COMP%_cardPulse{0%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.02);filter:brightness(1.05)}to{transform:scale(1);filter:brightness(1)}}@keyframes _ngcontent-%COMP%_cardFadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_cardFadeOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}.card-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeIn .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-fade-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeOut .6s cubic-bezier(.68,-.55,.265,1.55) forwards}"]})};export{Je as SignInComponent};
