import{Ai as zn,An as co,B as Ib,Br as pg,Ci as yh,Dr as nA,Ei as z,Er as n5,Gr as qM,Gt as YD,In as di,Ir as or,It as Vo,Jn as g,Kn as fi,Lr as os,Lt as W,Mr as ns,Mt as Ur,Nn as dM,Nr as oA,Nt as Uw,O as El,Oi as zN,Ot as Th,P as Fy,Pr as oN,Qn as gh,Qt as Zb,Rr as pK,Si as ye$1,Sn as bn,St as Sm,Tt as Te$1,Vn as es,Wn as fN,X as L6,Y as L,Yt as Yi,Z as Le$1,Zr as sN,_n as at,an as _e$1,ar as h_,bn as bb,dr as iN,dt as Oe$1,ft as Or,g as D,gn as ap,gt as Pr,h as Cw,hi as wN,ht as Po,ii as tt,in as _b,j as Fe$1,jr as nr,jt as Ub,k as Et,l as Ae$1,lr as hn,n as $b,or as hg,ot as Nb,p as B_,pi as vb,pn as ae,q as Ke$1,qr as qi,r as $f,ri as ts,s as Ab,sn as _u,sr as hh,ti as sp,tn as _N,ur as hx,ut as Ob,v as DN,vr as kc,wr as mb,xi as yN,xt as Rr,yr as lA,zn as en$1,zr as pb}from"./chunk-CeEGOUzy.js";import{c as ft,f as rt,l as ln$1,o as cn$1,p as ut,r as P,u as ot}from"./chunk-UMmgR3-g.js";import{n as B,t as g$1}from"./main-35KCIHZD.js";import{t as O}from"./chunk-Yts-ZXkN.js";import{t as d}from"./chunk-5PoAFc2q.js";import{a as j,i as _,n as I,o as k,r as T,t as F}from"./chunk-BP1BBO2S.js";var wt=[`*`];function Ie(a,r){a&1&&hn(0)}var De=[`tabListContainer`];var Pe=[`tabList`];var Re=[`tabListInner`];var Ne=[`nextPaginator`];var Ee=[`previousPaginator`];var Le=[`content`];function Be(a,r){}var Ae=[`tabBodyWrapper`];var Oe=[`tabHeader`];function ze(a,r){}function Fe(a,r){if(a&1&&pb(0,ze,0,0,`ng-template`,12),a&2){let t=yN().$implicit;bb(`cdkPortalOutlet`,t.templateLabel)}}function He(a,r){if(a&1&&zN(0),a&2){let t=yN().$implicit;Ub(t.textLabel)}}function $e(a,r){if(a&1){let t=fN();kc(0,`div`,7,2),Ib(`click`,function(){let n=hg(t),i=n.$implicit,l=n.$index,x=yN(),T=DN(1);return pg(x._handleClick(i,T,l))})(`cdkFocusChange`,function(n){let i=hg(t).$index;return pg(yN()._tabFocusChanged(n,i))}),_b(2,`span`,8)(3,`div`,9),kc(4,`span`,10)(5,`span`,11),ts(6,Fe,1,1,null,12)(7,He,1,1),hh()()()}if(a&2){let t=r.$implicit,e=r.$index,n=DN(1),i=yN();gh(t.labelClass),zn(`mdc-tab--active`,i.selectedIndex===e),bb(`id`,i._getTabLabelId(t,e))(`disabled`,t.disabled)(`fitInkBarToContent`,i.fitInkBarToContent),es(`tabIndex`,i._getTabIndex(e))(`aria-posinset`,e+1)(`aria-setsize`,i._tabs.length)(`aria-controls`,i._getTabContentId(e))(`aria-selected`,i.selectedIndex===e)(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),Yi(3),bb(`matRippleTrigger`,n)(`matRippleDisabled`,t.disabled||i.disableRipple),Yi(3),ns(t.templateLabel?6:7)}}function Ve(a,r){a&1&&hn(0)}function je(a,r){if(a&1){let t=fN();kc(0,`mat-tab-body`,13),Ib(`_onCentered`,function(){hg(t);return pg(yN()._removeTabBodyWrapperHeight())})(`_onCentering`,function(n){hg(t);return pg(yN()._setTabBodyWrapperHeight(n))})(`_beforeCentering`,function(n){hg(t);return pg(yN()._bodyCentered(n))}),hh()}if(a&2){let t=r.$implicit,e=r.$index,n=yN();gh(t.bodyClass),bb(`id`,n._getTabContentId(e))(`content`,t.content)(`position`,t.position)(`animationDuration`,n._bodyAnimationDuration)(`preserveContent`,n.preserveContent),es(`tabindex`,n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)(`aria-labelledby`,n._getTabLabelId(t,e))(`aria-hidden`,n.selectedIndex!==e)}}var Qe=new D(`MatTabContent`);var Ge=(()=>{class a{template=g(Or);static ɵfac=function(e){return new(e||a)};static ɵdir=Fe$1({type:a,selectors:[[``,`matTabContent`,``]],features:[Zb([{provide:Qe,useExisting:a}])]})}return a})();var We=new D(`MatTabLabel`);var ve=new D(`MAT_TAB`);var Mt=(()=>{class a extends ut{_closestTab=g(ve,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Fy(a)))(n||a)}})();static ɵdir=Fe$1({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Zb([{provide:We,useExisting:a}]),Po]})}return a})();var ye=new D(`MAT_TAB_GROUP`);var It=(()=>{class a{_viewContainerRef=g(Ur);_closestTabGroup=g(ye,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new z;position=null;origin=null;isActive=!1;constructor(){g(bn).load(Uw)}ngOnChanges(t){(t.hasOwnProperty(`textLabel`)||t.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new P(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Et({type:a,selectors:[[`mat-tab`]],contentQueries:function(e,n,i){if(e&1&&Nb(i,Mt,5)(i,Ge,7,Or),e&2){let l;_N(l=wN())&&(n.templateLabel=l.first),_N(l=wN())&&(n._explicitContent=l.first)}},viewQuery:function(e,n){if(e&1&&Ab(Or,7),e&2){let i;_N(i=wN())&&(n._implicitContent=i.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(e,n){e&2&&es(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,at],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Zb([{provide:ve,useExisting:a}]),qi],ngContentSelectors:wt,decls:1,vars:0,template:function(e,n){e&1&&(os(),mb(0,Ie,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return a})();var xt=`mdc-tab-indicator--active`;var _e=`mdc-tab-indicator--no-transition`;var Tt=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var qe=(()=>{class a{_elementRef=g(_e$1);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(xt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,l=t.left-n.left;e.classList.add(_e),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${l}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(_e),e.classList.add(xt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(xt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=Fe$1({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,at]}})}return a})();var xe=(()=>{class a extends qe{elementRef=g(_e$1);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Fy(a)))(n||a)}})();static ɵdir=Fe$1({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(es(`aria-disabled`,!!n.disabled),zn(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,at]},features:[Po]})}return a})();var ge={passive:!0};var Ze=650;var Ye=100;function Ct(a){let r=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(r)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(r)?r:``}var Ke=(()=>{class a{_elementRef=g(_e$1);_changeDetectorRef=g(h_);_viewportRuler=g(cn$1);_dir=g(qM,{optional:!0});_ngZone=g(W);_platform=g(Ae$1);_sharedResizeObserver=g(O);_injector=g(ae);_renderer=g(Pr);_animationsDisabled=Vo();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Oe$1;indexFocused=new Oe$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ge),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ge))}ngAfterContentInit(){let t=this._dir?this._dir.change:nr(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(or(32),fi(this._destroyed)),n=this._viewportRuler.change(150).pipe(fi(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new sp(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),$f(i,{injector:this._injector}),YD(t,n,e,this._items.changes,this._itemsResized()).pipe(fi(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!=`function`?en$1:this._items.changes.pipe(_u(this._items),Sm(t=>new L(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),di(1),tt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Cw(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:l}=e.elementRef.nativeElement,x,T;this._getLayoutDirection()==`ltr`?(x=i,T=x+l):(T=this._tabListInner.nativeElement.offsetWidth-i,x=T-l);let O=this.scrollDistance,Z=this.scrollDistance+n;x<O?this.scrollDistance-=O-x:T>Z&&(this.scrollDistance+=Math.min(T-Z,x-O))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),co(Ze,Ye).pipe(fi(YD(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=Fe$1({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,at],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Th]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Ue=(()=>{class a extends Ke{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Tt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Fy(a)))(n||a)}})();static ɵcmp=Et({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(e,n,i){if(e&1&&Nb(i,xe,4),e&2){let l;_N(l=wN())&&(n._items=l)}},viewQuery:function(e,n){if(e&1&&Ab(De,7)(Pe,7)(Re,7)(Ne,5)(Ee,5),e&2){let i;_N(i=wN())&&(n._tabListContainer=i.first),_N(i=wN())&&(n._tabList=i.first),_N(i=wN())&&(n._tabListInner=i.first),_N(i=wN())&&(n._nextPaginator=i.first),_N(i=wN())&&(n._previousPaginator=i.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(e,n){e&2&&zn(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,at]},features:[Po],ngContentSelectors:wt,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(os(),kc(0,`div`,5,0),Ib(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(l){return n._handlePaginatorPress(`before`,l)})(`touchend`,function(){return n._stopInterval()}),_b(2,`div`,6),hh(),kc(3,`div`,7,1),Ib(`keydown`,function(l){return n._handleKeydown(l)}),kc(5,`div`,8,2),Ib(`cdkObserveContent`,function(){return n._onContentChanges()}),kc(7,`div`,9,3),hn(9),hh()()(),kc(10,`div`,10,4),Ib(`mousedown`,function(l){return n._handlePaginatorPress(`after`,l)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),_b(12,`div`,6),hh()),e&2&&(zn(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),bb(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),Yi(3),zn(`_mat-animation-noopable`,n._animationsDisabled),Yi(2),es(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby||null),Yi(5),zn(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),bb(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[L6,n5],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
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
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
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
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return a})();var Xe=new D(`MAT_TABS_CONFIG`);var ue=(()=>{class a extends ft{_host=g(kt);_ngZone=g(W);_centeringSub=ye$1.EMPTY;_leavingSub=ye$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(_u(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Fy(a)))(n||a)}})();static ɵdir=Fe$1({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Po]})}return a})();var kt=(()=>{class a{_elementRef=g(_e$1);_dir=g(qM,{optional:!0});_ngZone=g(W);_injector=g(ae);_renderer=g(Pr);_diAnimationsDisabled=Vo();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ye$1.EMPTY;_position;_previousPosition;_onCentering=new Oe$1;_beforeCentering=new Oe$1;_afterLeavingCenter=new Oe$1;_onCentered=new Oe$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=g(h_);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),$f(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),$f(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=Et({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(e,n){if(e&1&&Ab(ue,5)(Le,5),e&2){let i;_N(i=wN())&&(n._portalHost=i.first),_N(i=wN())&&(n._contentElement=i.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(e,n){e&2&&es(`inert`,n._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(e,n){e&1&&(kc(0,`div`,1,0),pb(2,Be,0,0,`ng-template`,2),hh()),e&2&&zn(`mat-tab-body-content-left`,n._position===`left`)(`mat-tab-body-content-right`,n._position===`right`)(`mat-tab-body-content-can-animate`,n._position===`center`||n._previousPosition===`center`)},dependencies:[ue,ln$1],styles:[`.mat-mdc-tab-body {
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
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
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
`],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{_elementRef=g(_e$1);_changeDetectorRef=g(h_);_ngZone=g(W);_tabsSubscription=ye$1.EMPTY;_tabLabelSubscription=ye$1.EMPTY;_tabBodySubscription=ye$1.EMPTY;_diAnimationsDisabled=Vo();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Rr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Ct(t.body),this._headerAnimationDuration=Ct(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ct(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Oe$1;focusChange=new Oe$1;animationDone=new Oe$1;selectedTabChange=new Oe$1(!0);_groupId;_isServer=!g(Ae$1).isBrowser;constructor(){let t=g(Xe,{optional:!0});this._groupId=g(ap).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(_u(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new St;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=YD(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=Et({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(e,n,i){if(e&1&&Nb(i,It,5),e&2){let l;_N(l=wN())&&(n._allTabs=l)}},viewQuery:function(e,n){if(e&1&&Ab(Ae,5)(Oe,5)(kt,5),e&2){let i;_N(i=wN())&&(n._tabBodyWrapper=i.first),_N(i=wN())&&(n._tabHeader=i.first),_N(i=wN())&&(n._tabBodies=i)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(e,n){e&2&&(es(`mat-align-tabs`,n.alignTabs),gh(`mat-`+(n.color||`primary`)),Ob(`--%NS%mat-tab-body-animation-duration`,n._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,n._headerAnimationDuration),zn(`mat-mdc-tab-group-dynamic-height`,n.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,n.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,n.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,at],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,at],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,at],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Th],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Th],disablePagination:[2,`disablePagination`,`disablePagination`,at],disableRipple:[2,`disableRipple`,`disableRipple`,at],preserveContent:[2,`preserveContent`,`preserveContent`,at],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Zb([{provide:ye,useExisting:a}])],ngContentSelectors:wt,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(e,n){e&1&&(os(),kc(0,`mat-tab-header`,3,0),Ib(`indexFocused`,function(l){return n._focusChanged(l)})(`selectFocusedIndex`,function(l){return n.selectedIndex=l}),iN(2,$e,8,17,`div`,4,oN),hh(),ts(4,Ve,1,0),kc(5,`div`,5,1),iN(7,je,1,10,`mat-tab-body`,6,oN),hh()),e&2&&(bb(`selectedIndex`,n.selectedIndex||0)(`disableRipple`,n.disableRipple)(`disablePagination`,n.disablePagination),vb(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby),Yi(2),sN(n._tabs),Yi(2),ns(n._isServer?4:-1),Yi(),zn(`_mat-animation-noopable`,n._bodyAnimationsDisabled()),Yi(2),sN(n._tabs))},dependencies:[Ue,xe,dM,L6,ft,kt],styles:[`.mdc-tab {
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
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
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
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
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
`],encapsulation:2,changeDetection:1})}return a})();var St=class{index;tab};var Te=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Le$1({type:a});static ɵinj=Te$1({imports:[El]})}return a})();var ke=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Le$1({type:a});static ɵinj=Te$1({imports:[d,El,d]})}return a})();var tn=(a,r)=>r.person;var en=(a,r)=>r.id;function nn(a,r){if(a&1&&(kc(0,`span`,20),zN(1),hh()),a&2){let t=yN().$implicit;Yi(),Ub(t.person)}}function an(a,r){if(a&1){let t=fN();kc(0,`div`,9),Ib(`click`,function(){hg(t);let n=yN().$implicit;return pg(yN().setSelectedReason(`Billing`,n.person))}),kc(1,`mat-icon`,21),zN(2,`attach_money`),hh(),kc(3,`div`,11),zN(4),hh(),kc(5,`div`,12),zN(6,`Billing`),hh()()}if(a&2){let t=yN().$implicit,e=yN();zn(`selected`,e.selectedReason()===`Billing`&&e.selectedPerson()===t.person),Yi(4),Ub(t.billing)}}function on(a,r){if(a&1&&(zN(0),nA(1,`date`)),a&2){let t=yN().$implicit;yh(` `,oA(1,1,t.start_date),` `)}}function rn(a,r){if(a&1&&(zN(0),nA(1,`date`),nA(2,`date`)),a&2){let t=yN().$implicit;$b(` `,oA(1,2,t.start_date),` - `,oA(2,4,t.end_date),` `)}}function sn(a,r){if(a&1&&(kc(0,`div`,24)(1,`div`,25),ts(2,on,2,3)(3,rn,3,6),hh(),kc(4,`div`,26),zN(5),hh()()),a&2){let t=r.$implicit,e=yN(4);Yi(2),ns(e.isSameDay(t)?2:3),Yi(3),Ub(t.comments||`No comments`)}}function ln(a,r){if(a&1&&(kc(0,`div`,23),iN(1,sn,6,2,`div`,24,en),hh()),a&2){let t=yN(3);Yi(),sN(t.detailedEntries())}}function dn(a,r){if(a&1&&(kc(0,`mat-card`,19)(1,`mat-card-header`)(2,`mat-card-title`),zN(3),hh()(),kc(4,`mat-card-content`,22),ts(5,ln,3,0,`div`,23),hh()()),a&2){let t=yN(2);Yi(3),$b(` `,t.selectedReason(),` — `,t.selectedPerson(),` `),Yi(2),ns(t.detailedEntries().length>0?5:-1)}}function cn(a,r){if(a&1){let t=fN();kc(0,`mat-tab`),pb(1,nn,2,1,`ng-template`,4),kc(2,`div`,5)(3,`mat-card`,6)(4,`mat-card-header`)(5,`div`,7),zN(6),hh(),kc(7,`mat-card-title`),zN(8),hh()(),kc(9,`mat-card-content`)(10,`div`,8)(11,`div`,9),Ib(`click`,function(){let n=hg(t).$implicit;return pg(yN().setSelectedReason(`Vacation`,n.person))}),kc(12,`mat-icon`,10),zN(13,`event_available`),hh(),kc(14,`div`,11),zN(15),hh(),kc(16,`div`,12),zN(17,`Vacation`),hh()(),kc(18,`div`,9),Ib(`click`,function(){let n=hg(t).$implicit;return pg(yN().setSelectedReason(`Called In`,n.person))}),kc(19,`mat-icon`,13),zN(20,`local_hospital`),hh(),kc(21,`div`,11),zN(22),hh(),kc(23,`div`,12),zN(24,`Called In`),hh()(),kc(25,`div`,9),Ib(`click`,function(){let n=hg(t).$implicit;return pg(yN().setSelectedReason(`Leaving Early`,n.person))}),kc(26,`mat-icon`,14),zN(27,`schedule`),hh(),kc(28,`div`,11),zN(29),hh(),kc(30,`div`,12),zN(31,`Leaving Early`),hh()(),kc(32,`div`,9),Ib(`click`,function(){let n=hg(t).$implicit;return pg(yN().setSelectedReason(`Arriving Late`,n.person))}),kc(33,`mat-icon`,15),zN(34,`access_time`),hh(),kc(35,`div`,11),zN(36),hh(),kc(37,`div`,12),zN(38,`Arriving Late`),hh()(),kc(39,`div`,9),Ib(`click`,function(){let n=hg(t).$implicit;return pg(yN().setSelectedReason(`Leaving & Coming Back`,n.person))}),kc(40,`mat-icon`,16),zN(41,`360`),hh(),kc(42,`div`,11),zN(43),hh(),kc(44,`div`,12),zN(45,`Leaving & Coming Back`),hh()(),kc(46,`div`,9),Ib(`click`,function(){let n=hg(t).$implicit;return pg(yN().setSelectedReason(`Off`,n.person))}),kc(47,`mat-icon`,17),zN(48,`event_repeat`),hh(),kc(49,`div`,11),zN(50),hh(),kc(51,`div`,12),zN(52,`Off`),hh()(),ts(53,an,7,3,`div`,18),hh()()(),ts(54,dn,6,3,`mat-card`,19),hh()()}if(a&2){let t=r.$implicit,e=yN();Yi(6),Ub(t.person.charAt(0)),Yi(2),Ub(t.person),Yi(3),zn(`selected`,e.selectedReason()===`Vacation`&&e.selectedPerson()===t.person),Yi(4),Ub(t.vacation),Yi(3),zn(`selected`,e.selectedReason()===`Called In`&&e.selectedPerson()===t.person),Yi(4),Ub(t.sickDays),Yi(3),zn(`selected`,e.selectedReason()===`Leaving Early`&&e.selectedPerson()===t.person),Yi(4),Ub(t.leaveEarly),Yi(3),zn(`selected`,e.selectedReason()===`Arriving Late`&&e.selectedPerson()===t.person),Yi(4),Ub(t.arriveLate),Yi(3),zn(`selected`,e.selectedReason()===`Leaving & Coming Back`&&e.selectedPerson()===t.person),Yi(4),Ub(t.leaveReturn),Yi(3),zn(`selected`,e.selectedReason()===`Off`&&e.selectedPerson()===t.person),Yi(4),Ub(t.off),Yi(3),ns(t.billing>0?53:-1),Yi(),ns(e.showDetailsForReason()?54:-1)}}var Se=class a{calendarService=g(g$1);route=g(B);ngOnInit(){this.route.snapshot.queryParams.demo===`true`&&this.calendarService.enableDemoMode()}selectedPerson=Ke$1(null);selectedReason=Ke$1(null);detailedEntries=lA(()=>{let r=this.selectedPerson(),t=this.selectedReason();return!r||!t?[]:this.calendarService.entries().filter(e=>e.name===r&&e.reason===t)});analyticsData=lA(()=>{let r=this.calendarService.entries(),t=new Map,e=1e3*60*60*24;for(let n of r){let i=n.name,l=n.reason;t.has(i)||t.set(i,new Map);let x=t.get(i),T=new Date(n.start_date).getTime(),O=new Date(n.end_date).getTime(),Z=Math.round(Math.abs(O-T)/e)+1;x.set(l,(x.get(l)??0)+Z)}return Array.from(t,([n,i])=>({person:n,vacation:i.get(`Vacation`)??0,sickDays:i.get(`Called In`)??0,leaveEarly:i.get(`Leaving Early`)??0,arriveLate:i.get(`Arriving Late`)??0,leaveReturn:i.get(`Leaving & Coming Back`)??0,off:i.get(`Off`)??0,billing:i.get(`Billing`)??0,all:i}))});showDetailsForReason=lA(()=>this.selectedPerson()!==null&&this.selectedReason()!==null&&this.detailedEntries().length>0);setSelectedPerson(r){let t=r||null;this.selectedPerson.set(t),this.selectedReason.set(null)}setSelectedReason(r,t){let e=t||null,n=r||null;this.selectedPerson.set(e),this.selectedReason.set(n)}isSameDay(r){let t=new Date(r.start_date),e=new Date(r.end_date);return t.toISOString().slice(0,10)===e.toISOString().slice(0,10)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Et({type:a,selectors:[[`app-dashboard`]],decls:9,vars:0,consts:[[1,`dashboard-container`],[1,`dashboard-header`],[1,`subtitle`],[`dynamicHeight`,``,1,`analytics-tabs`,3,`selectedIndexChange`],[`mat-tab-label`,``],[1,`tab-content`],[1,`summary-card`],[`mat-card-avatar`,``,1,`avatar`],[1,`stats-grid`],[`role`,`button`,`tabindex`,`0`,1,`stat-item`,3,`click`],[1,`stat-icon`,`vacation`],[1,`stat-value`],[1,`stat-label`],[1,`stat-icon`,`sick`],[1,`stat-icon`,`early`],[1,`stat-icon`,`late`],[1,`stat-icon`,`leave-return`],[1,`stat-icon`,`off`],[`role`,`button`,`tabindex`,`0`,1,`stat-item`,3,`selected`],[1,`details-card`],[1,`tab-label`],[1,`stat-icon`,`billing`],[1,`mt-3`],[1,`entry-list`],[1,`entry-row`],[1,`entry-date`],[1,`entry-comments`]],template:function(t,e){t&1&&(kc(0,`div`,0)(1,`div`,1)(2,`h1`),zN(3,`Analytics Dashboard`),hh(),kc(4,`p`,2),zN(5,`View time-off per team member`),hh()(),kc(6,`mat-tab-group`,3),Ib(`selectedIndexChange`,function(i){let l;return e.setSelectedPerson((l=e.analyticsData()[i])==null?null:l.person)}),iN(7,cn,55,22,`mat-tab`,null,tn),hh()()),t&2&&(Yi(7),sN(e.analyticsData()))},dependencies:[B_,Te,Mt,It,Ce,T,I,k,F,j,_,ke,ot,rt,pK,hx],styles:[`[_nghost-%COMP%]{display:block;padding:0}.dashboard-container[_ngcontent-%COMP%]{padding:24px;background:linear-gradient(135deg,#f5f7fa,#c3cfe2);min-height:100vh}.dashboard-header[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:32px;text-align:center}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:600;color:#2c3e50;margin:0 0 12px}.subtitle[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:1rem;font-size:1rem;color:#7f8c8d;margin:0}.analytics-tabs[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 2px 8px #0000001a;max-width:1200px;margin:0 auto}  .analytics-tabs .mat-mdc-tab-labels{border-bottom:2px solid #f0f0f0;padding:0 16px}  .analytics-tabs .mat-mdc-tab{min-width:140px;font-weight:500}  .analytics-tabs .mat-mdc-tab-header-pagination-chevron{border-color:#2196f3}.tab-label[_ngcontent-%COMP%]{font-size:.95rem;font-weight:500}.tab-content[_ngcontent-%COMP%]{padding:32px 24px;max-width:100%}.summary-card[_ngcontent-%COMP%]{margin-bottom:24px;border-radius:8px;box-shadow:0 1px 4px #00000014;border:1px solid #e0e0e0}  .summary-card .mat-mdc-card-header{display:flex;align-items:center;padding:24px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px 8px 0 0;color:#fff;margin:-16px -16px 16px}.avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:#ffffff4d;font-size:1.5rem;font-weight:700;margin-right:16px;flex-shrink:0}  .summary-card .mat-mdc-card-title{color:#fff;font-size:1.5rem;margin:0}.mat-card-content[_ngcontent-%COMP%]{padding:24px!important}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;margin:0}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;background:#f8f9fa;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease;cursor:pointer}.stat-item[_ngcontent-%COMP%]:hover{background:#f0f2f7;transform:translateY(-2px);box-shadow:0 4px 12px #667eea26}.stat-icon[_ngcontent-%COMP%]{font-size:2rem!important;width:2rem!important;height:2rem!important;margin-bottom:8px;display:flex;align-items:center;justify-content:center}.stat-icon.vacation[_ngcontent-%COMP%]{color:#4caf50}.stat-icon.sick[_ngcontent-%COMP%]{color:#f44336}.stat-icon.early[_ngcontent-%COMP%]{color:#ff9800}.stat-icon.late[_ngcontent-%COMP%]{color:#2196f3}.stat-icon.leave-return[_ngcontent-%COMP%]{color:#d5ce43}.stat-icon.off[_ngcontent-%COMP%]{color:#9c27b0}.stat-icon.billing[_ngcontent-%COMP%]{color:#38793c}.stat-value[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:#2c3e50;line-height:1}.stat-label[_ngcontent-%COMP%]{font-size:.85rem;color:#7f8c8d;font-weight:500;margin-top:8px;text-align:center}.details-card[_ngcontent-%COMP%]{border-radius:8px;box-shadow:0 1px 4px #00000014;border:1px solid #e0e0e0}  .details-card .mat-mdc-card-header{padding:24px;border-bottom:1px solid #e0e0e0;margin:0}  .details-card .mat-mdc-card-title{margin:0;font-size:1.25rem;color:#2c3e50}.breakdown-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.breakdown-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px;background:#f8f9fa;border-radius:8px;border-left:3px solid #667eea;transition:all .2s ease}.breakdown-item[_ngcontent-%COMP%]:hover{background:#f0f2f7;transform:translate(4px)}.reason-label[_ngcontent-%COMP%]{font-weight:500;color:#2c3e50;font-size:.95rem}.reason-value[_ngcontent-%COMP%]{background:#667eea;color:#fff;padding:4px 12px;border-radius:20px;font-weight:600;font-size:.9rem}.stat-item.selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #667eea;background:#667eea24;border-radius:10px}.entry-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.entry-row[_ngcontent-%COMP%]{border:1px solid #dde4f0;border-radius:8px;padding:12px;background:#fff}.entry-date[_ngcontent-%COMP%]{font-weight:600;color:#2c3e50}.entry-comments[_ngcontent-%COMP%]{margin-top:4px;color:#5f6c7e;font-size:.9rem}@media(max-width:480px){.dashboard-container[_ngcontent-%COMP%]{padding:12px;background:#f5f7fa}.dashboard-header[_ngcontent-%COMP%]{margin-bottom:20px}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.subtitle[_ngcontent-%COMP%]{font-size:.85rem}.tab-content[_ngcontent-%COMP%]{padding:16px 12px}.summary-card[_ngcontent-%COMP%]{margin-bottom:16px}  .summary-card .mat-mdc-card-header{padding:16px}.avatar[_ngcontent-%COMP%]{width:48px;height:48px;font-size:1.25rem;margin-right:12px}  .summary-card .mat-mdc-card-title{font-size:1.25rem}.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:12px}.stat-item[_ngcontent-%COMP%]{padding:12px;border-left-width:3px}.stat-icon[_ngcontent-%COMP%]{font-size:1.25rem!important;width:1.25rem!important;height:1.25rem!important;margin-bottom:6px}.stat-value[_ngcontent-%COMP%]{font-size:1.25rem}.stat-label[_ngcontent-%COMP%]{font-size:.7rem;margin-top:4px}.breakdown-item[_ngcontent-%COMP%]{padding:12px;font-size:.9rem}.reason-value[_ngcontent-%COMP%]{padding:2px 8px;font-size:.8rem}  .analytics-tabs .mat-mdc-tab-labels{padding:0}  .analytics-tabs .mat-mdc-tab{min-width:80px;font-size:.8rem}.tab-label[_ngcontent-%COMP%]{font-size:.8rem}}@media(max-width:360px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.stat-item[_ngcontent-%COMP%]{min-height:60px}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.25rem}}`]})};export{Se as DashboardComponent};