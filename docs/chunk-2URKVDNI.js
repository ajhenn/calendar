import{a as se,b as le,c as de,d as ce,e as me,f as be}from"./chunk-HLFWL2JO.js";import{b as Gt}from"./chunk-ZZNGOGSF.js";import{a as yt}from"./chunk-OZLPJNBM.js";import{a as re}from"./chunk-VUNBIRLI.js";import{a as qt,b as Zt,d as ne,g as ae,h as vt,k as ie,l as oe}from"./chunk-ZGPHNUW6.js";import{a as pe}from"./chunk-UWX3QWME.js";import{Aa as Ot,Ba as J,Bb as b,Cb as V,D as Lt,Da as E,Db as j,Ea as zt,Eb as Q,Ec as ut,Fb as G,Gb as p,Hb as h,Ka as c,La as tt,Lb as _t,Ma as et,Mb as $t,Mc as dt,Nb as _,Nc as ct,Oa as pt,Ob as it,Oc as Wt,Pb as m,Qb as v,Rb as Vt,Sb as gt,T as Bt,Ta as Ft,U as K,V as At,W as F,Wb as O,Wc as Yt,Xa as w,Ya as nt,Yb as ot,Za as M,Zb as rt,_c as Kt,ab as N,bb as $,ca as U,cb as Ht,cc as W,d as S,ea as R,f as Dt,fd as Ut,g as Z,ga as d,hd as Xt,ib as Nt,id as Jt,jb as k,jc as st,k as Pt,kb as I,kc as y,la as u,lb as D,lc as lt,ma as f,mb as ht,n as St,nb as L,nd as mt,ob as B,pa as bt,pb as P,qb as o,rb as s,rd as ft,sb as at,sd as te,ta as C,ua as H,wd as ee,x as Rt,xa as X,xb as A,xc as jt,y as Y,yc as Qt,z as Et,zb as g}from"./chunk-ZR3HKGL7.js";var wt=["*"];function Ie(a,r){a&1&&j(0)}var De=["tabListContainer"],Pe=["tabList"],Se=["tabListInner"],Re=["nextPaginator"],Ee=["previousPaginator"],Le=["content"];function Be(a,r){}var Ae=["tabBodyWrapper"],Oe=["tabHeader"];function ze(a,r){}function Fe(a,r){if(a&1&&$(0,ze,0,0,"ng-template",12),a&2){let t=b().$implicit;P("cdkPortalOutlet",t.templateLabel)}}function He(a,r){if(a&1&&m(0),a&2){let t=b().$implicit;v(t.textLabel)}}function Ne(a,r){if(a&1){let t=A();o(0,"div",7,2),g("click",function(){let n=u(t),i=n.$implicit,l=n.$index,x=b(),T=_t(1);return f(x._handleClick(i,T,l))})("cdkFocusChange",function(n){let i=u(t).$index,l=b();return f(l._tabFocusChanged(n,i))}),at(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),I(6,Fe,1,1,null,12)(7,He,1,1),s()()()}if(a&2){let t=r.$implicit,e=r.$index,n=_t(1),i=b();it(t.labelClass),_("mdc-tab--active",i.selectedIndex===e),P("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),k("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),c(3),P("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),c(3),D(t.templateLabel?6:7)}}function $e(a,r){a&1&&j(0)}function Ve(a,r){if(a&1){let t=A();o(0,"mat-tab-body",13),g("_onCentered",function(){u(t);let n=b();return f(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){u(t);let i=b();return f(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){u(t);let i=b();return f(i._bodyCentered(n))}),s()}if(a&2){let t=r.$implicit,e=r.$index,n=b();it(t.bodyClass),P("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),k("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var je=new R("MatTabContent"),Qe=(()=>{class a{template=d(et);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,selectors:[["","matTabContent",""]],features:[O([{provide:je,useExisting:a}])]})}return a})(),Ge=new R("MatTabLabel"),fe=new R("MAT_TAB"),Mt=(()=>{class a extends ae{_closestTab=d(fe,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=J(a)))(n||a)}})();static \u0275dir=M({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[O([{provide:Ge,useExisting:a}]),N]})}return a})(),ve=new R("MAT_TAB_GROUP"),It=(()=>{class a{_viewContainerRef=d(Ft);_closestTabGroup=d(ve,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Z;position=null;origin=null;isActive=!1;constructor(){d(Wt).load(te)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ne(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&Q(i,Mt,5)(i,Qe,7,et),e&2){let l;p(l=h())&&(n.templateLabel=l.first),p(l=h())&&(n._explicitContent=l.first)}},viewQuery:function(e,n){if(e&1&&G(et,7),e&2){let i;p(i=h())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&k("id",null)},inputs:{disabled:[2,"disabled","disabled",y],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[O([{provide:fe,useExisting:a}]),Ot],ngContentSelectors:wt,decls:1,vars:0,template:function(e,n){e&1&&(V(),Ht(0,Ie,1,0,"ng-template"))},encapsulation:2})}return a})(),xt="mdc-tab-indicator--active",he="mdc-tab-indicator--no-transition",Ct=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},We=(()=>{class a{_elementRef=d(E);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(xt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,l=t.left-n.left;e.classList.add(he),this._inkBarContentElement.style.setProperty("transform",`translateX(${l}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(he),e.classList.add(xt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(xt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y]}})}return a})();var ye=(()=>{class a extends We{elementRef=d(E);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=J(a)))(n||a)}})();static \u0275dir=M({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(k("aria-disabled",!!n.disabled),_("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",y]},features:[N]})}return a})(),_e={passive:!0},qe=650,Ze=100,Ye=(()=>{class a{_elementRef=d(E);_changeDetectorRef=d(st);_viewportRuler=d(oe);_dir=d(dt,{optional:!0});_ngZone=d(H);_platform=d(ut);_sharedResizeObserver=d(pe);_injector=d(bt);_renderer=d(pt);_animationsDisabled=mt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new C;indexFocused=new C;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),_e),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),_e))}ngAfterContentInit(){let t=this._dir?this._dir.change:St("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Lt(32),F(this._destroyed)),n=this._viewportRuler.change(150).pipe(F(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Xt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),tt(i,{injector:this._injector}),Y(t,n,e,this._items.changes,this._itemsResized()).pipe(F(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!="function"?Pt:this._items.changes.pipe(K(this._items),At(t=>new Dt(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Bt(1),Et(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ut(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:l}=e.elementRef.nativeElement,x,T;this._getLayoutDirection()=="ltr"?(x=i,T=x+l):(T=this._tabListInner.nativeElement.offsetWidth-i,x=T-l);let z=this.scrollDistance,q=this.scrollDistance+n;x<z?this.scrollDistance-=z-x:T>q&&(this.scrollDistance+=Math.min(T-q,x-z))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Rt(qe,Ze).pipe(F(Y(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",y],selectedIndex:[2,"selectedIndex","selectedIndex",lt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),Ke=(()=>{class a extends Ye{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ct(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=J(a)))(n||a)}})();static \u0275cmp=w({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&Q(i,ye,4),e&2){let l;p(l=h())&&(n._items=l)}},viewQuery:function(e,n){if(e&1&&G(De,7)(Pe,7)(Se,7)(Re,5)(Ee,5),e&2){let i;p(i=h())&&(n._tabListContainer=i.first),p(i=h())&&(n._tabList=i.first),p(i=h())&&(n._tabListInner=i.first),p(i=h())&&(n._nextPaginator=i.first),p(i=h())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&_("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",y]},features:[N],ngContentSelectors:wt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(V(),o(0,"div",5,0),g("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(l){return n._handlePaginatorPress("before",l)})("touchend",function(){return n._stopInterval()}),at(2,"div",6),s(),o(3,"div",7,1),g("keydown",function(l){return n._handleKeydown(l)}),o(5,"div",8,2),g("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),j(9),s()()(),o(10,"div",10,4),g("mousedown",function(l){return n._handlePaginatorPress("after",l)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),at(12,"div",6),s()),e&2&&(_("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),P("matRippleDisabled",n._disableScrollBefore||n.disableRipple),c(3),_("_mat-animation-noopable",n._animationsDisabled),c(2),k("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),c(5),_("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),P("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[ft,Kt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),Ue=new R("MAT_TABS_CONFIG"),ge=(()=>{class a extends vt{_host=d(Tt);_ngZone=d(H);_centeringSub=S.EMPTY;_leavingSub=S.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(K(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,selectors:[["","matTabBodyHost",""]],features:[N]})}return a})(),Tt=(()=>{class a{_elementRef=d(E);_dir=d(dt,{optional:!0});_ngZone=d(H);_injector=d(bt);_renderer=d(pt);_diAnimationsDisabled=mt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=S.EMPTY;_position;_previousPosition;_onCentering=new C;_beforeCentering=new C;_afterLeavingCenter=new C;_onCentered=new C(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=d(st);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),tt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),tt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&G(ge,5)(Le,5),e&2){let i;p(i=h())&&(n._portalHost=i.first),p(i=h())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&k("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(o(0,"div",1,0),$(2,Be,0,0,"ng-template",2),s()),e&2&&_("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[ge,ie],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),xe=(()=>{class a{_elementRef=d(E);_changeDetectorRef=d(st);_ngZone=d(H);_tabsSubscription=S.EMPTY;_tabLabelSubscription=S.EMPTY;_tabBodySubscription=S.EMPTY;_diAnimationsDisabled=mt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new zt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new C;focusChange=new C;animationDone=new C;selectedTabChange=new C(!0);_groupId;_isServer=!d(ut).isBrowser;constructor(){let t=d(Ue,{optional:!0});this._groupId=d(Jt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(K(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new kt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Y(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&Q(i,It,5),e&2){let l;p(l=h())&&(n._allTabs=l)}},viewQuery:function(e,n){if(e&1&&G(Ae,5)(Oe,5)(Tt,5),e&2){let i;p(i=h())&&(n._tabBodyWrapper=i.first),p(i=h())&&(n._tabHeader=i.first),p(i=h())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(k("mat-align-tabs",n.alignTabs),it("mat-"+(n.color||"primary")),$t("--mat-tab-animation-duration",n.animationDuration),_("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",y],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",y],selectedIndex:[2,"selectedIndex","selectedIndex",lt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",lt],disablePagination:[2,"disablePagination","disablePagination",y],disableRipple:[2,"disableRipple","disableRipple",y],preserveContent:[2,"preserveContent","preserveContent",y],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[O([{provide:ve,useExisting:a}])],ngContentSelectors:wt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(V(),o(0,"mat-tab-header",3,0),g("indexFocused",function(l){return n._focusChanged(l)})("selectFocusedIndex",function(l){return n.selectedIndex=l}),L(2,Ne,8,17,"div",4,ht),s(),I(4,$e,1,0),o(5,"div",5,1),L(7,Ve,1,10,"mat-tab-body",6,ht),s()),e&2&&(P("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Nt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),c(2),B(n._tabs),c(2),D(n._isServer?4:-1),c(),_("_mat-animation-noopable",n._animationsDisabled()),c(2),B(n._tabs))},dependencies:[Ke,ye,Yt,ft,vt,Tt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),kt=class{index;tab};var Ce=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=nt({type:a});static \u0275inj=U({imports:[ct]})}return a})();var Te=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=nt({type:a});static \u0275inj=U({imports:[yt,ct,yt]})}return a})();var Je=(a,r)=>r.person,tn=(a,r)=>r.id;function en(a,r){if(a&1&&(o(0,"span",19),m(1),s()),a&2){let t=b().$implicit;c(),v(t.person)}}function nn(a,r){if(a&1){let t=A();o(0,"div",9),g("click",function(){u(t);let n=b().$implicit,i=b();return f(i.setSelectedReason("Billing",n.person))}),o(1,"mat-icon",20),m(2,"attach_money"),s(),o(3,"div",11),m(4),s(),o(5,"div",12),m(6,"Billing"),s()()}if(a&2){let t=b().$implicit,e=b();_("selected",e.selectedReason()==="Billing"&&e.selectedPerson()===t.person),c(4),v(t.billing)}}function an(a,r){if(a&1&&(m(0),ot(1,"date")),a&2){let t=b().$implicit;Vt(" ",rt(1,1,t.start_date)," ")}}function on(a,r){if(a&1&&(m(0),ot(1,"date"),ot(2,"date")),a&2){let t=b().$implicit;gt(" ",rt(1,2,t.start_date)," - ",rt(2,4,t.end_date)," ")}}function rn(a,r){if(a&1&&(o(0,"div",23)(1,"div",24),I(2,an,2,3)(3,on,3,6),s(),o(4,"div",25),m(5),s()()),a&2){let t=r.$implicit,e=b(4);c(2),D(e.isSameDay(t)?2:3),c(3),v(t.comments||"No comments")}}function sn(a,r){if(a&1&&(o(0,"div",22),L(1,rn,6,2,"div",23,tn),s()),a&2){let t=b(3);c(),B(t.detailedEntries())}}function ln(a,r){if(a&1&&(o(0,"mat-card",18)(1,"mat-card-header")(2,"mat-card-title"),m(3),s()(),o(4,"mat-card-content",21),I(5,sn,3,0,"div",22),s()()),a&2){let t=b(2);c(3),gt(" ",t.selectedReason()," \u2014 ",t.selectedPerson()," "),c(2),D(t.detailedEntries().length>0?5:-1)}}function dn(a,r){if(a&1){let t=A();o(0,"mat-tab"),$(1,en,2,1,"ng-template",4),o(2,"div",5)(3,"mat-card",6)(4,"mat-card-header")(5,"div",7),m(6),s(),o(7,"mat-card-title"),m(8),s()(),o(9,"mat-card-content")(10,"div",8)(11,"div",9),g("click",function(){let n=u(t).$implicit,i=b();return f(i.setSelectedReason("Vacation",n.person))}),o(12,"mat-icon",10),m(13,"event_available"),s(),o(14,"div",11),m(15),s(),o(16,"div",12),m(17,"Vacation"),s()(),o(18,"div",9),g("click",function(){let n=u(t).$implicit,i=b();return f(i.setSelectedReason("Called In",n.person))}),o(19,"mat-icon",13),m(20,"local_hospital"),s(),o(21,"div",11),m(22),s(),o(23,"div",12),m(24,"Called In"),s()(),o(25,"div",9),g("click",function(){let n=u(t).$implicit,i=b();return f(i.setSelectedReason("Leaving Early",n.person))}),o(26,"mat-icon",14),m(27,"schedule"),s(),o(28,"div",11),m(29),s(),o(30,"div",12),m(31,"Leaving Early"),s()(),o(32,"div",9),g("click",function(){let n=u(t).$implicit,i=b();return f(i.setSelectedReason("Arriving Late",n.person))}),o(33,"mat-icon",15),m(34,"access_time"),s(),o(35,"div",11),m(36),s(),o(37,"div",12),m(38,"Arriving Late"),s()(),o(39,"div",9),g("click",function(){let n=u(t).$implicit,i=b();return f(i.setSelectedReason("Off",n.person))}),o(40,"mat-icon",16),m(41,"event_repeat"),s(),o(42,"div",11),m(43),s(),o(44,"div",12),m(45,"Off"),s()(),I(46,nn,7,3,"div",17),s()()(),I(47,ln,6,3,"mat-card",18),s()()}if(a&2){let t=r.$implicit,e=b();c(6),v(t.person.charAt(0)),c(2),v(t.person),c(3),_("selected",e.selectedReason()==="Vacation"&&e.selectedPerson()===t.person),c(4),v(t.vacation),c(3),_("selected",e.selectedReason()==="Called In"&&e.selectedPerson()===t.person),c(4),v(t.sickDays),c(3),_("selected",e.selectedReason()==="Leaving Early"&&e.selectedPerson()===t.person),c(4),v(t.leaveEarly),c(3),_("selected",e.selectedReason()==="Arriving Late"&&e.selectedPerson()===t.person),c(4),v(t.arriveLate),c(3),_("selected",e.selectedReason()==="Off"&&e.selectedPerson()===t.person),c(4),v(t.off),c(3),D(t.billing>0?46:-1),c(),D(e.showDetailsForReason()?47:-1)}}var ke=class a{calendarService=d(re);route=d(Gt);ngOnInit(){this.route.snapshot.queryParams.demo==="true"&&this.calendarService.enableDemoMode()}selectedPerson=X(null);selectedReason=X(null);detailedEntries=W(()=>{let r=this.selectedPerson(),t=this.selectedReason();return!r||!t?[]:this.calendarService.entries().filter(e=>e.name===r&&e.reason===t)});analyticsData=W(()=>{let r=this.calendarService.entries(),t=new Map,e=1e3*60*60*24;for(let n of r){let i=n.name,l=n.reason;t.has(i)||t.set(i,new Map);let x=t.get(i),T=new Date(n.start_date).getTime(),z=new Date(n.end_date).getTime(),q=Math.round(Math.abs(z-T)/e)+1;x.set(l,(x.get(l)??0)+q)}return Array.from(t,([n,i])=>({person:n,vacation:i.get("Vacation")??0,sickDays:i.get("Called In")??0,leaveEarly:i.get("Leaving Early")??0,arriveLate:i.get("Arriving Late")??0,off:i.get("Off")??0,billing:i.get("Billing")??0,all:i}))});showDetailsForReason=W(()=>this.selectedPerson()!==null&&this.selectedReason()!==null&&this.detailedEntries().length>0);setSelectedPerson(r){let t=r||null;this.selectedPerson.set(t),this.selectedReason.set(null)}setSelectedReason(r,t){let e=t||null,n=r||null;this.selectedPerson.set(e),this.selectedReason.set(n)}isSameDay(r){let t=new Date(r.start_date),e=new Date(r.end_date);return t.toISOString().slice(0,10)===e.toISOString().slice(0,10)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=w({type:a,selectors:[["app-dashboard"]],decls:9,vars:0,consts:[[1,"dashboard-container"],[1,"dashboard-header"],[1,"subtitle"],["dynamicHeight","",1,"analytics-tabs",3,"selectedIndexChange"],["mat-tab-label",""],[1,"tab-content"],[1,"summary-card"],["mat-card-avatar","",1,"avatar"],[1,"stats-grid"],["role","button","tabindex","0",1,"stat-item",3,"click"],[1,"stat-icon","vacation"],[1,"stat-value"],[1,"stat-label"],[1,"stat-icon","sick"],[1,"stat-icon","early"],[1,"stat-icon","late"],[1,"stat-icon","off"],["role","button","tabindex","0",1,"stat-item",3,"selected"],[1,"details-card"],[1,"tab-label"],[1,"stat-icon","billing"],[1,"mt-3"],[1,"entry-list"],[1,"entry-row"],[1,"entry-date"],[1,"entry-comments"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),m(3,"Analytics Dashboard"),s(),o(4,"p",2),m(5,"View time-off per team member"),s()(),o(6,"mat-tab-group",3),g("selectedIndexChange",function(i){let l;return e.setSelectedPerson((l=e.analyticsData()[i])==null?null:l.person)}),L(7,dn,48,19,"mat-tab",null,Je),s()()),t&2&&(c(7),B(e.analyticsData()))},dependencies:[Qt,Ce,Mt,It,xe,be,se,me,de,ce,le,Te,Zt,qt,ee,jt],styles:["[_nghost-%COMP%]{display:block;padding:0}.dashboard-container[_ngcontent-%COMP%]{padding:24px;background:linear-gradient(135deg,#f5f7fa,#c3cfe2);min-height:100vh}.dashboard-header[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:32px;text-align:center}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:600;color:#2c3e50;margin:0 0 12px}.subtitle[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:1rem;font-size:1rem;color:#7f8c8d;margin:0}.analytics-tabs[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 2px 8px #0000001a;max-width:1200px;margin:0 auto}  .analytics-tabs .mat-mdc-tab-labels{border-bottom:2px solid #f0f0f0;padding:0 16px}  .analytics-tabs .mat-mdc-tab{min-width:140px;font-weight:500}  .analytics-tabs .mat-mdc-tab-header-pagination-chevron{border-color:#2196f3}.tab-label[_ngcontent-%COMP%]{font-size:.95rem;font-weight:500}.tab-content[_ngcontent-%COMP%]{padding:32px 24px;max-width:100%}.summary-card[_ngcontent-%COMP%]{margin-bottom:24px;border-radius:8px;box-shadow:0 1px 4px #00000014;border:1px solid #e0e0e0}  .summary-card .mat-mdc-card-header{display:flex;align-items:center;padding:24px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px 8px 0 0;color:#fff;margin:-16px -16px 16px}.avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:#ffffff4d;font-size:1.5rem;font-weight:700;margin-right:16px;flex-shrink:0}  .summary-card .mat-mdc-card-title{color:#fff;font-size:1.5rem;margin:0}.mat-card-content[_ngcontent-%COMP%]{padding:24px!important}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;margin:0}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;background:#f8f9fa;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease;cursor:pointer}.stat-item[_ngcontent-%COMP%]:hover{background:#f0f2f7;transform:translateY(-2px);box-shadow:0 4px 12px #667eea26}.stat-icon[_ngcontent-%COMP%]{font-size:2rem!important;width:2rem!important;height:2rem!important;margin-bottom:8px;display:flex;align-items:center;justify-content:center}.stat-icon.vacation[_ngcontent-%COMP%]{color:#4caf50}.stat-icon.sick[_ngcontent-%COMP%]{color:#f44336}.stat-icon.early[_ngcontent-%COMP%]{color:#ff9800}.stat-icon.late[_ngcontent-%COMP%]{color:#2196f3}.stat-icon.off[_ngcontent-%COMP%]{color:#5d5d5d}.stat-icon.billing[_ngcontent-%COMP%]{color:#9c27b0}.stat-value[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:#2c3e50;line-height:1}.stat-label[_ngcontent-%COMP%]{font-size:.85rem;color:#7f8c8d;font-weight:500;margin-top:8px;text-align:center}.details-card[_ngcontent-%COMP%]{border-radius:8px;box-shadow:0 1px 4px #00000014;border:1px solid #e0e0e0}  .details-card .mat-mdc-card-header{padding:24px;border-bottom:1px solid #e0e0e0;margin:0}  .details-card .mat-mdc-card-title{margin:0;font-size:1.25rem;color:#2c3e50}.breakdown-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.breakdown-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px;background:#f8f9fa;border-radius:8px;border-left:3px solid #667eea;transition:all .2s ease}.breakdown-item[_ngcontent-%COMP%]:hover{background:#f0f2f7;transform:translate(4px)}.reason-label[_ngcontent-%COMP%]{font-weight:500;color:#2c3e50;font-size:.95rem}.reason-value[_ngcontent-%COMP%]{background:#667eea;color:#fff;padding:4px 12px;border-radius:20px;font-weight:600;font-size:.9rem}.stat-item.selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #667eea;background:#667eea24;border-radius:10px}.entry-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.entry-row[_ngcontent-%COMP%]{border:1px solid #dde4f0;border-radius:8px;padding:12px;background:#fff}.entry-date[_ngcontent-%COMP%]{font-weight:600;color:#2c3e50}.entry-comments[_ngcontent-%COMP%]{margin-top:4px;color:#5f6c7e;font-size:.9rem}@media(max-width:480px){.dashboard-container[_ngcontent-%COMP%]{padding:12px;background:#f5f7fa}.dashboard-header[_ngcontent-%COMP%]{margin-bottom:20px}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.subtitle[_ngcontent-%COMP%]{font-size:.85rem}.tab-content[_ngcontent-%COMP%]{padding:16px 12px}.summary-card[_ngcontent-%COMP%]{margin-bottom:16px}  .summary-card .mat-mdc-card-header{padding:16px}.avatar[_ngcontent-%COMP%]{width:48px;height:48px;font-size:1.25rem;margin-right:12px}  .summary-card .mat-mdc-card-title{font-size:1.25rem}.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:12px}.stat-item[_ngcontent-%COMP%]{padding:12px;border-left-width:3px}.stat-icon[_ngcontent-%COMP%]{font-size:1.25rem!important;width:1.25rem!important;height:1.25rem!important;margin-bottom:6px}.stat-value[_ngcontent-%COMP%]{font-size:1.25rem}.stat-label[_ngcontent-%COMP%]{font-size:.7rem;margin-top:4px}.breakdown-item[_ngcontent-%COMP%]{padding:12px;font-size:.9rem}.reason-value[_ngcontent-%COMP%]{padding:2px 8px;font-size:.8rem}  .analytics-tabs .mat-mdc-tab-labels{padding:0}  .analytics-tabs .mat-mdc-tab{min-width:80px;font-size:.8rem}.tab-label[_ngcontent-%COMP%]{font-size:.8rem}}@media(max-width:360px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.stat-item[_ngcontent-%COMP%]{min-height:60px}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.25rem}}"],changeDetection:0})};export{ke as DashboardComponent};
