import{a as D,b as O,c as Re,d as I,e as E,f as V}from"./chunk-5OLKEIP7.js";import{a as N}from"./chunk-YGCZZAQN.js";import{a as Be,b as je,c as He,d as Ge,e as $e,f as Ye,g as Xe,i as Qe}from"./chunk-3LCQLB7T.js";import{a as ye,f as Ce,z as De}from"./chunk-O7KLVEDW.js";import{B as H,C as G,a as Oe,c as ze,q,r as U,v as B,w as j}from"./chunk-ZTATAFUV.js";import{a as Le,b as Ne,c as Ve,d as qe,f as Ue}from"./chunk-7QDOQ3EF.js";import{d as ve}from"./chunk-5PLG7QRB.js";import{a as Me,b as Ee}from"./chunk-XHLHCAP5.js";import"./chunk-SJ5XSFHO.js";import{Aa as re,Bb as m,Cb as be,Da as de,Db as he,Fb as ue,Gb as Z,Hb as J,Ia as P,Ka as r,Lb as pe,Nb as M,Nc as Ie,Ob as ke,Oc as we,Pb as d,Qb as g,Ra as f,Sa as v,Wb as _e,Xa as F,Ya as me,aa as ee,ca as te,ea as ne,ec as xe,ga as b,id as Se,jb as Q,jc as ge,kb as u,kc as w,la as S,lb as p,lc as fe,ma as T,mb as le,na as ie,nb as y,nd as Te,oa as oe,ob as C,pb as h,qb as c,ra as ae,rb as a,rd as Fe,sb as l,sd as Ae,ta as X,td as Pe,ua as ce,vd as R,wd as L,xa as _,xb as z,yb as se,zb as x}from"./chunk-FOGNVDA3.js";var We=["input"],et=["label"],tt=["*"],K={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},nt=new ne("mat-checkbox-default-options",{providedIn:"root",factory:()=>K}),k=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(k||{}),W=class{source;checked},it=(()=>{class t{_elementRef=b(de);_changeDetectorRef=b(ge);_ngZone=b(ce);_animationsDisabled=Te();_options=b(nt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let o=new W;return o.source=this,o.checked=e,o}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new X;indeterminateChange=new X;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=k.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b(we).load(Ae);let e=b(new xe("tabindex"),{optional:!0});this._options=this._options||K,this.color=this._options.color||K.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b(Se).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let o=e!=this._indeterminate();this._indeterminate.set(e),o&&(e?this._transitionCheckState(k.Indeterminate):this._transitionCheckState(this.checked?k.Checked:k.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=_(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let o=this._currentCheckState,i=this._getAnimationTargetElement();if(!(o===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(o,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let s=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(s)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?k.Checked:k.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,o){if(this._animationsDisabled)return"";switch(e){case k.Init:if(o===k.Checked)return this._animationClasses.uncheckedToChecked;if(o==k.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case k.Unchecked:return o===k.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case k.Checked:return o===k.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case k.Indeterminate:return o===k.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let o=this._inputElement;o&&(o.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=F({type:t,selectors:[["mat-checkbox"]],viewQuery:function(o,i){if(o&1&&ue(We,5)(et,5),o&2){let s;Z(s=J())&&(i._inputElement=s.first),Z(s=J())&&(i._labelElement=s.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(o,i){o&2&&(se("id",i.id),Q("tabindex",null)("aria-label",null)("aria-labelledby",null),ke(i.color?"mat-"+i.color:"mat-accent"),M("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",w],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",w],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:fe(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],checked:[2,"checked","checked",w],disabled:[2,"disabled","disabled",w],indeterminate:[2,"indeterminate","indeterminate",w]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[_e([{provide:Oe,useExisting:ee(()=>t),multi:!0},{provide:ze,useExisting:t,multi:!0}]),re],ngContentSelectors:tt,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(o,i){if(o&1&&(be(),c(0,"div",3),x("click",function(Y){return i._preventBubblingFromLabel(Y)}),c(1,"div",4,0)(3,"div",5),x("click",function(){return i._onTouchTargetClick()}),a(),c(4,"input",6,1),x("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(Y){return i._onInteractionEvent(Y)}),a(),l(6,"div",7),c(7,"div",8),ie(),c(8,"svg",9),l(9,"path",10),a(),oe(),l(10,"div",11),a(),l(11,"div",12),a(),c(12,"label",13,2),he(14),a()()),o&2){let s=pe(2);h("labelPosition",i.labelPosition),r(4),M("mdc-checkbox--selected",i.checked),h("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Q("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),r(7),h("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),r(),h("for",i.inputId)}},dependencies:[Fe,Be],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),Je=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=me({type:t});static \u0275inj=te({imports:[it,Ie]})}return t})();function dt(t,n){if(t&1&&(c(0,"mat-error",7),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function mt(t,n){if(t&1&&y(0,dt,2,1,"mat-error",7,le),t&2){let e=m();C(e.forgotPwForm.email().errors())}}function lt(t,n){if(t&1&&(c(0,"mat-error",7),d(1),a()),t&2){let e=m();r(),g(e.forgotError())}}var $=class t{dialogRef=b(je);signInService=b(N);dialogData=b(He);errorMsgString="An unexpected error occurred. Please try again later.";forgotPasswordModel=_({email:this.dialogData?.email??""});forgotPwForm=D(this.forgotPasswordModel,n=>{E(n.email,500),I(n.email,{message:"Email is required."}),O(n.email,{message:"Enter a valid email address."})});forgotError=_(null);async forgotPassword(n){n.preventDefault();try{(await this.signInService.forgotPassword(this.forgotPasswordModel().email)).error?this.forgotError.set(this.errorMsgString):this.dialogRef.close({email:this.forgotPasswordModel().email??"",successMsg:"Success! A password reset email has been sent."})}catch(e){let o=e?.message||"An unexpected error occurred";this.forgotError.set(this.errorMsgString)}}closeDialog(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-forgot-password"]],decls:19,vars:3,consts:[[1,"calendar-dialog-header"],["mat-dialog-title",""],["mat-icon-button","",3,"click"],["mat-dialog-close",""],[3,"submit"],["appearance","outline",1,"calendar-dialog-fw"],["matInput","","type","email","placeholder","you@example.com","autocomplete","email",3,"formField"],[1,"text-sm","pl-2"],[1,"pt-4","flex","justify-end"],["mat-button","","type","button",1,"calendar-cancel-btn",3,"click"],["mat-flat-button","","type","submit"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"h2",1),d(2,"Reset Password"),a(),c(3,"button",2),x("click",function(){return o.closeDialog()}),c(4,"mat-icon",3),d(5,"close"),a()()(),c(6,"mat-dialog-content")(7,"form",4),x("submit",function(s){return o.forgotPassword(s)}),c(8,"mat-form-field",5)(9,"mat-label"),d(10,"Email"),a(),l(11,"input",6),f(),a(),u(12,mt,2,0),u(13,lt,2,1,"mat-error",7),c(14,"div",8)(15,"button",9),x("click",function(){return o.closeDialog()}),d(16,"Cancel"),a(),c(17,"button",10),d(18,"Send Reset Email"),a()()()()),e&2&&(r(11),h("formField",o.forgotPwForm.email),v(),r(),p(o.forgotPwForm.email().touched()&&o.forgotPwForm.email().invalid()?12:-1),r(),p(o.forgotError()?13:-1))},dependencies:[V,Qe,$e,Ye,Xe,j,B,q,U,Ee,Me,G,H,L,R,Pe],styles:[".calendar-dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-right:8px}[mat-dialog-title][_ngcontent-%COMP%]{margin:0}.calendar-dialog-fw[_ngcontent-%COMP%]{width:100%}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:clamp(280px,80vw,420px);padding-top:8px}.calendar-cancel-btn[_ngcontent-%COMP%]{color:#b00020!important;margin-right:10px}"],changeDetection:0})};var A=(t,n)=>n.message;function st(t,n){if(t&1&&(c(0,"mat-error",24),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function bt(t,n){if(t&1&&y(0,st,2,1,"mat-error",24,A),t&2){let e=m(2);C(e.signInForm.email().errors())}}function ht(t,n){if(t&1&&(c(0,"mat-error",24),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function ut(t,n){if(t&1&&y(0,ht,2,1,"mat-error",24,A),t&2){let e=m(2);C(e.signInForm.password().errors())}}function pt(t,n){if(t&1&&(c(0,"div",19),l(1,"p",25),a()),t&2){let e=m(2);r(),h("innerHTML",e.signInError(),P)}}function kt(t,n){if(t&1&&(c(0,"div",20),l(1,"p",26),a()),t&2){let e=m(2);r(),h("innerHTML",e.resetSuccessMessage(),P)}}function _t(t,n){if(t&1){let e=z();c(0,"div")(1,"mat-card-header",8),l(2,"img",9),c(3,"div",10)(4,"mat-card-title",11),d(5,"Sign In"),a(),c(6,"p",12),d(7,"Your calendar is waiting for you!"),a()()(),c(8,"mat-card-content",13)(9,"form",14),x("submit",function(i){S(e);let s=m();return T(s.handleSignIn(i))}),c(10,"div",15)(11,"mat-form-field",16)(12,"mat-label"),d(13,"Email"),a(),l(14,"input",17),f(),a(),u(15,bt,2,0),a(),c(16,"div",15)(17,"mat-form-field",16)(18,"mat-label"),d(19,"Password"),a(),l(20,"input",18),f(),a(),u(21,ut,2,0),a(),u(22,pt,2,1,"div",19),u(23,kt,2,1,"div",20),c(24,"div",21)(25,"button",22),d(26," Sign In "),a(),c(27,"button",23),x("click",function(){S(e);let i=m();return T(i.toggleCreateAccount())}),d(28," Create Account "),a()()()()()}if(t&2){let e=m();M("sign-in-exit",e.isCreateAccount())("sign-in-enter",!e.isCreateAccount()),r(14),h("formField",e.signInForm.email),v(),r(),p(e.signInForm.email().touched()&&e.signInForm.email().invalid()?15:-1),r(5),h("formField",e.signInForm.password),v(),r(),p(e.signInForm.password().touched()&&e.signInForm.password().invalid()?21:-1),r(),p(e.signInError()?22:-1),r(),p(e.resetSuccessMessage()?23:-1)}}function xt(t,n){if(t&1&&(c(0,"mat-error",24),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function gt(t,n){if(t&1&&y(0,xt,2,1,"mat-error",24,A),t&2){let e=m(3);C(e.createAccountForm.name().errors())}}function ft(t,n){if(t&1&&(c(0,"mat-error",24),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function vt(t,n){if(t&1&&y(0,ft,2,1,"mat-error",24,A),t&2){let e=m(3);C(e.createAccountForm.email().errors())}}function yt(t,n){if(t&1&&(c(0,"mat-error",24),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function Ct(t,n){if(t&1&&y(0,yt,2,1,"mat-error",24,A),t&2){let e=m(3);C(e.createAccountForm.password().errors())}}function It(t,n){if(t&1&&(c(0,"mat-error",24),d(1),a()),t&2){let e=n.$implicit;r(),g(e.message)}}function wt(t,n){if(t&1&&y(0,It,2,1,"mat-error",24,A),t&2){let e=m(4);C(e.createAccountForm.inviteCode().errors())}}function Mt(t,n){if(t&1&&(c(0,"mat-form-field",16)(1,"mat-label"),d(2,"Invite Code"),a(),l(3,"input",33),f(),a(),u(4,wt,2,0)),t&2){let e=m(3);r(3),h("formField",e.createAccountForm.inviteCode),v(),r(),p(e.createAccountForm.inviteCode().touched()&&e.createAccountForm.inviteCode().invalid()?4:-1)}}function Et(t,n){if(t&1&&(c(0,"div",19),l(1,"p",25),a()),t&2){let e=m(3);r(),h("innerHTML",e.createAccountError(),P)}}function St(t,n){if(t&1){let e=z();c(0,"form",14),x("submit",function(i){S(e);let s=m(2);return T(s.handleCreateAccount(i))}),c(1,"mat-form-field",16)(2,"mat-label"),d(3,"Name"),a(),l(4,"input",30),f(),a(),u(5,gt,2,0),c(6,"mat-form-field",16)(7,"mat-label"),d(8,"Email"),a(),l(9,"input",17),f(),a(),u(10,vt,2,0),c(11,"mat-form-field",16)(12,"mat-label"),d(13,"Password"),a(),l(14,"input",31),f(),a(),u(15,Ct,2,0),u(16,Mt,5,2),u(17,Et,2,1,"div",19),c(18,"div",21)(19,"button",22),d(20," Create Account "),a(),c(21,"button",32),x("click",function(){S(e);let i=m(2);return T(i.toggleCreateAccount())}),d(22," Back to Sign In "),a()()()}if(t&2){let e=m(2);r(4),h("formField",e.createAccountForm.name),v(),r(),p(e.createAccountForm.name().touched()&&e.createAccountForm.name().invalid()?5:-1),r(4),h("formField",e.createAccountForm.email),v(),r(),p(e.createAccountForm.email().touched()&&e.createAccountForm.email().invalid()?10:-1),r(4),h("formField",e.createAccountForm.password),v(),r(),p(e.createAccountForm.password().touched()&&e.createAccountForm.password().invalid()?15:-1),r(),p(e.createAccountForm.hasInviteCode().value()===!0?16:-1),r(),p(e.createAccountError()?17:-1)}}function Tt(t,n){if(t&1){let e=z();c(0,"div",29)(1,"div",20),l(2,"p",26),a(),c(3,"button",32),x("click",function(){S(e);let i=m(2);return T(i.toggleCreateAccount())}),d(4," Go to Sign In "),a()()}if(t&2){let e=m(2);r(2),h("innerHTML",e.createAccountSuccess(),P)}}function Ft(t,n){if(t&1&&(c(0,"div")(1,"mat-card-header",27),l(2,"img",9),c(3,"div",10)(4,"mat-card-title",11),d(5,"Create Account"),a(),c(6,"p",28),d(7,"Join us today!"),a()()(),c(8,"mat-card-content",13),u(9,St,23,8,"form",29)(10,Tt,5,1,"div",29),a()()),t&2){let e=m();M("create-account-exit",!e.isCreateAccount())("create-account-enter",e.isCreateAccount()),r(9),p(e.createAccountSuccess()?10:9)}}var Ke=class t{dialog=b(Ge);destroyRef=b(ae);router=b(ve);store=b(Ce);signInService=b(N);isCreateAccount=_(!1);isTransitioning=_(!1);signInError=_(null);signInTimeout=_(this.router.currentNavigation()?.extras.state?.isTimedOut??!1);createAccountError=_(null);createAccountSuccess=_(null);signInModel=_({email:"",password:"",rememberMe:!1});signInForm=D(this.signInModel,n=>{E(n.email,500),I(n.email,{message:"Email is required."}),O(n.email,{message:"Enter a valid email address."}),I(n.password,{message:"Password is required."})});createAccountModel=_({name:"",email:"",password:"",hasInviteCode:!0,inviteCode:""});createAccountForm=D(this.createAccountModel,n=>{I(n.name,{message:"Name is required."}),E(n.email,500),I(n.email,{message:"Email is required."}),O(n.email,{message:"Enter a valid email address."}),E(n.password,500),I(n.password,{message:"Password is required."}),Re(n.password,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/,{message:"Password must be at least 10 characters long and include uppercase, lowercase, and a number."}),I(n.inviteCode,{message:"Invite code is required."}),E(n.inviteCode,500)});resetSuccessMessage=_(null);toggleCreateAccount(){this.isTransitioning.set(!0),this.signInError.set(null),this.signInTimeout.set(null)}onCardAnimationEnd(){this.isTransitioning()&&(this.isCreateAccount.update(n=>!n),this.isTransitioning.set(!1))}goToCalendar(){this.store.dispatch(De())}async handleSignIn(n){n.preventDefault(),this.signInError.set(null),this.signInTimeout.set(null);try{let e=await this.signInService.signIn(this.signInModel().email,this.signInModel().password);e.error?this.signInError.set(this.setErrorMsg(e.error)):this.goToCalendar()}catch(e){let o=e?.message||"An unexpected error occurred";this.signInError.set(this.setErrorMsg(o))}}setErrorMsg(n){let e={"Invalid login credentials":"Incorrect email or password. Please try again.","Account Creation Fail":"We're having trouble creating your account. Please try again.","Email not confirmed":"Check for the email we sent and confirm your account before signing in.",default:"Oh shit, something broke! Contact Andy for help. <br><br> Error: "+n};return n&&e[n]||e.default}async handleCreateAccount(n){n.preventDefault(),this.createAccountError.set(null),this.signInTimeout.set(null);try{let e=await this.signInService.signUp(this.createAccountModel().email,this.createAccountModel().password,this.createAccountModel().name,this.createAccountModel().inviteCode);e.error?this.createAccountError.set(e.error):this.createAccountSuccess.set("Nice work! Check your email to confirm your account and sign in.")}catch(e){let o=e?.message||"An unexpected error occurred";this.createAccountError.set(this.setErrorMsg(o))}}openForgotPwModal(){this.dialog.open($,{data:{email:this.signInModel().email??""}}).afterClosed().pipe(ye(this.destroyRef)).subscribe(({email:n,successMsg:e}={})=>{e&&this.resetSuccessMessage.set(e)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-sign-in"]],decls:8,vars:6,consts:[[1,"flex","items-center","justify-center","min-h-screen","bg-gradient-to-br","from-blue-50","via-indigo-50","to-purple-100"],[1,"absolute","inset-0","overflow-hidden","pointer-events-none"],[1,"absolute","top-10","left-10","w-72","h-72","bg-blue-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob"],[1,"absolute","top-40","right-10","w-72","h-72","bg-purple-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob","animation-delay-2000"],[1,"absolute","-bottom-8","left-1/2","w-72","h-72","bg-pink-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob","animation-delay-4000"],[1,"w-full","max-w-md","shadow-2xl","relative","z-10","transform","hover:shadow-3xl","transition-all","duration-500","backdrop-blur-sm","bg-white/95",3,"animationend"],[3,"sign-in-exit","sign-in-enter"],[3,"create-account-exit","create-account-enter"],[1,"relative","overflow-hidden","bg-gradient-to-r","from-indigo-600","to-purple-600","text-white","p-8","mb-8","rounded-t-lg"],["src","calendar_app_icon_shadow.jpg","alt","",1,"absolute","-right-4","top-1/2","-translate-y-1/2","h-36","w-36","mix-blend-multiply","pointer-events-none","transform","rotate-12",2,"filter","contrast(1.1) brightness(1.1) saturate(1.6)","-webkit-mask-image","radial-gradient(circle, black 70%, transparent 100%)","mask-image","radial-gradient(circle, black 70%, transparent 100%)"],[1,"flex","flex-col","z-10"],[1,"text-3xl","font-bold"],[1,"text-indigo-100","text-sm","mt-3","mb-3","font-light","self-end"],[1,"p-8"],[1,"space-y-6",3,"submit"],[1,"flex","flex-col"],["appearance","outline",1,"w-full"],["matInput","","type","email","placeholder","you@example.com","autocomplete","email",3,"formField"],["matInput","","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","current-password",3,"formField"],[1,"bg-red-50","border","border-red-200","rounded-md","p-4"],[1,"bg-green-50","border","border-green-200","rounded-md","p-4"],[1,"flex","flex-col","gap-4","pt-4"],["mat-raised-button","","color","primary","type","submit",1,"w-full","py-3","text-lg","font-semibold","hover:shadow-lg","transition-all","duration-300","transform","hover:scale-105"],["mat-stroked-button","","type","button",1,"w-full","py-3","text-lg","font-semibold","text-indigo-600","border-indigo-600","hover:bg-indigo-50","transition-all","duration-300","transform","hover:scale-105",3,"click"],[1,"text-sm","pl-2"],[1,"text-sm","text-red-700",3,"innerHTML"],[1,"text-sm","text-green-700",3,"innerHTML"],[1,"relative","overflow-hidden","bg-gradient-to-r","from-purple-600","to-pink-600","text-white","p-8","mb-8","rounded-t-lg"],[1,"text-purple-100","text-sm","mt-3","mb-3","font-light","self-end"],[1,"space-y-6"],["matInput","","type","text","placeholder","John Doe","autocomplete","name",3,"formField"],["matInput","","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","new-password",3,"formField"],["mat-stroked-button","","type","button",1,"w-full","py-3","text-lg","font-semibold","text-purple-600","border-purple-600","hover:bg-purple-50","transition-all","duration-300","transform","hover:scale-105",3,"click"],["matInput","","type","text","autocomplete","off","autocorrect","off",3,"formField"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"div",1),l(2,"div",2)(3,"div",3)(4,"div",4),a(),c(5,"mat-card",5),x("animationend",function(){return o.onCardAnimationEnd()}),u(6,_t,29,10,"div",6),u(7,Ft,11,5,"div",7),a()()),e&2&&(r(5),M("card-fade-out",o.isTransitioning())("card-fade-in",!o.isTransitioning()),r(),p(o.isCreateAccount()?-1:6),r(),p(o.isCreateAccount()?7:-1))},dependencies:[V,Ue,Le,Ve,qe,Ne,j,B,q,U,G,H,L,R,Je],styles:["@keyframes _ngcontent-%COMP%_blob{0%,to{transform:translate(0) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(.9)}}@keyframes _ngcontent-%COMP%_fadeOutUpSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(-150px) translate(100px)}}@keyframes _ngcontent-%COMP%_fadeInUpSwipe{0%{opacity:0;transform:translateY(150px) translate(-100px)}to{opacity:1;transform:translateY(0) translate(0)}}@keyframes _ngcontent-%COMP%_fadeOutDownSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(150px) translate(-100px)}}@keyframes _ngcontent-%COMP%_fadeInDownSwipe{0%{opacity:0;transform:translateY(-150px) translate(100px)}to{opacity:1;transform:translateY(0) translate(0)}}.animate-blob[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blob 7s infinite}.animation-delay-2000[_ngcontent-%COMP%]{animation-delay:2s}.animation-delay-4000[_ngcontent-%COMP%]{animation-delay:4s}.sign-in-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.sign-in-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-transition[_ngcontent-%COMP%]{transition:all .6s cubic-bezier(.68,-.55,.265,1.55)}.card-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardPulse .6s cubic-bezier(.68,-.55,.265,1.55) forwards}@keyframes _ngcontent-%COMP%_cardPulse{0%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.02);filter:brightness(1.05)}to{transform:scale(1);filter:brightness(1)}}@keyframes _ngcontent-%COMP%_cardFadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_cardFadeOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}.card-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeIn .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-fade-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeOut .6s cubic-bezier(.68,-.55,.265,1.55) forwards}"],changeDetection:0})};export{Ke as SignInComponent};
