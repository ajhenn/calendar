import{A as ln,B as un,C as mn,a as ue,c as Zt,d as Wt,e as Qt,h as Jt,q as an,r as cn,v as sn,w as dn}from"./chunk-5OEQBXW4.js";import{f as Lt,j as $t,n as Yt}from"./chunk-DR3D6IDR.js";import{a as en,b as tn,c as nn,d as rn,f as on}from"./chunk-B6BXNQHB.js";import"./chunk-IY5EFWVR.js";import{$a as s,Aa as xt,Da as z,Ea as j,Eb as le,Ha as de,Ia as Ct,Ja as Et,Ka as wt,Kb as h,Lb as c,Mb as P,Nb as Dt,Ob as Rt,S as b,Sb as Ft,T as mt,Ta as Ne,Tb as A,U as ht,Ua as S,Ub as Pt,Uc as Bt,V as ft,Va as I,Vb as Ot,W as L,Wa as B,Xa as K,Y as l,Ya as U,Za as x,Zc as Kt,_a as d,a as v,aa as Se,ab as y,b as Q,ba as J,bd as Ut,c as Me,ca as ee,cd as qt,da as bt,ea as pt,fa as te,fb as Ae,fd as Gt,gb as Mt,gd as Ht,ha as gt,hb as E,hd as Re,ia as Ie,id as Xt,ja as kt,jb as _,kb as St,kc as Vt,la as p,lb as It,ma as ce,nb as Nt,oa as yt,ob as Te,pb as De,qa as se,sa as _t,tb as At,va as vt,vb as F,wa as m,wb as Tt,xb as f,xc as zt,yb as q,yc as jt}from"./chunk-6WH5EFXX.js";var Fe=0;function Dn(){return Fe}function T(n,e){return(...t)=>{try{return Fe=e,n(...t)}finally{Fe=0}}}function Rn(n){return!n}function hn(n){return n}function N(n){return Array.isArray(n)}function G(n){return(typeof n=="object"||typeof n=="function")&&n!=null}var O=Symbol(),_e=Symbol(),re=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(fn(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(r=>fn(this.predicates,r)):e.fns;this.fns.push(...t)}},he=class extends re{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let r=t(e);return r&&r!==_e})}},H=class n extends re{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,r)=>{let i=r(e);return i===void 0||i===_e?t:N(i)?[...t,...this.ignore?i.filter(o=>!this.ignore(o)):i]:this.ignore&&this.ignore(i)?t:[...t,i]},[])}},Pe=class extends H{constructor(e){super(e,void 0)}},Oe=class extends re{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let r=0;r<this.fns.length;r++){let i=this.fns[r](e);i!==_e&&(t=this.key.reducer.reduce(t,i))}return t}};function fn(n,e){return n.length===0?e:t=>{for(let r of n){let i=t.stateOf(r.path),o=h(i.structure.pathKeys).length-r.depth;for(let a=0;a<o;a++)i=i.structure.parent;if(!r.fn(i.context))return _e}return e(t)}}var $=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new he(e),this.disabledReasons=new Pe(e),this.readonly=new he(e),this.syncErrors=H.ignoreNull(e),this.syncTreeErrors=H.ignoreNull(e),this.asyncErrors=H.ignoreNull(e)}hasMetadata(e){return this.metadata.has(e)}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Oe(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let r=e.metadata.get(t);this.getMetadata(t).mergeIn(r)}}},fe=class{depth;constructor(e){this.depth=e}build(){return new be(this,[],0)}},Y=class n extends fe{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===O){let t=this.getCurrent().children;t.size>(t.has(O)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:T(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ie(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},ie=class extends fe{logic=new $([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(T(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(T(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(T(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(T(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(T(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(T(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(T(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new Y(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}},be=class n{builder;predicates;depth;logic;constructor(e,t,r){this.builder=e,this.predicates=t,this.depth=r,this.logic=e?Fn(e,t,r):new $([])}getChild(e){let t=this.builder?gn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:r,predicates:i}=t[0];return new n(r,[...this.predicates,...i.map(o=>Le(o,this.depth))],this.depth+1)}else{let r=t.map(({builder:i,predicates:o})=>new n(i,[...this.predicates,...o.map(a=>Le(a,this.depth))],this.depth+1));return new Ve(r)}}hasLogic(e){return this.builder?.hasLogic(e)??!1}},Ve=class n{all;logic;constructor(e){this.all=e,this.logic=new $([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}};function gn(n,e){if(n instanceof Y)return n.all.flatMap(({builder:t,predicate:r})=>{let i=gn(t,e);return r?i.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,r]})):i});if(n instanceof ie)return[...e!==O&&n.children.has(O)?[{builder:n.getChild(O),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new b(1909,!1)}function Fn(n,e,t){let r=new $(e);if(n instanceof Y){let i=n.all.map(({builder:o,predicate:a})=>new be(o,a?[...e,Le(a,t)]:e,t));for(let o of i)r.mergeIn(o.logic)}else if(n instanceof ie)r.mergeIn(n.logic);else throw new b(1909,!1);return r}function Le(n,e){return Q(v({},n),{depth:e})}var kn=Symbol("PATH"),w=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Pn);logicBuilder;constructor(e,t,r,i){this.keys=e,this.parent=r,this.keyInParent=i,this.root=t??this,r||(this.logicBuilder=Y.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let r=e.compile();this.builder.mergeIn(r.builder,t)}static unwrapFieldPath(e){return e[kn]}static newRoot(){return new n([],void 0,void 0,void 0)}},Pn={get(n,e){return e===kn?n:n.getChild(e).fieldPathProxy}},me,ne=new Map,pe=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ne.has(this))return ne.get(this);let e=w.newRoot();ne.set(this,e);let t=me;try{me=e,this.schemaFn(e.fieldPathProxy)}finally{me=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ne.clear(),e===void 0?w.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ne.clear()}}};function On(n){return n instanceof pe||typeof n=="function"}function ve(n){if(me!==w.unwrapFieldPath(n).root)throw new b(1908,!1)}function ae(n,e,t){return ve(n),w.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var D={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:Math.min(n,e),getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:Math.max(n,e),getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:Vn};function Vn(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var ge=class{reducer;create;brand;constructor(e,t){this.reducer=e,this.create=t}};function M(n){return new ge(n??D.override())}var Xe=M(D.or()),yn=M(D.max()),_n=M(D.min()),vn=M(D.max()),xn=M(D.min()),Ze=M(D.list());function Ln(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var ze=class{node;constructor(e){this.node=e}rawSyncTreeErrors=c(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=c(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...zn(this.node.submitState.submissionErrors())]);syncValid=c(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Rn));syncTreeErrors=c(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree));rawAsyncErrors=c(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=c(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e==="pending"||e.fieldTree===this.node.fieldTree));parseErrors=c(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()));errors=c(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!=="pending")]);errorSummary=c(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,r)=>[...r,...t.errorSummary()]);return h(()=>e.sort(jn)),e});pending=c(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(e,t)=>t||e.validationState.asyncErrors().includes("pending")));status=c(()=>{if(this.shouldSkipValidation())return"valid";let e=Ln(this);return this.node.structure.reduceChildren(e,(t,r)=>r==="invalid"||t.validationState.status()==="invalid"?"invalid":r==="unknown"||t.validationState.status()==="unknown"?"unknown":"valid",t=>t==="invalid")});valid=c(()=>this.status()==="valid");invalid=c(()=>this.status()==="invalid");shouldSkipValidation=c(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function zn(n){return n===void 0?[]:N(n)?n:[n]}function Cn(n,e){if(N(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function bn(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function jn(n,e){let t=bn(n),r=bn(e);return t===r?0:t===void 0||r===void 0?t===void 0?1:-1:t.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ke=M(),je=class{node;cache=new WeakMap;constructor(e){this.node=e}resolve(e){if(!this.cache.has(e)){let t=c(()=>{let r=w.unwrapFieldPath(e),i=this.node,o=Dn();for(;o>0||!i.structure.logic.hasLogic(r.root.builder);)if(o--,i=i.structure.parent,i===void 0)throw new b(1900,!1);for(let a of r.keys)if(i=i.structure.getChild(a),i===void 0)throw new b(1901,!1);return i.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=c(()=>{let e=this.key();if(!N(h(this.node.structure.parent.value)))throw new b(1906,!1);return Number(e)});fieldTreeOf=e=>this.resolve(e);stateOf=e=>this.resolve(e)();valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Jt)throw new b(1907,!1);return t}},Be=class{node;metadata=new Map;constructor(e){this.node=e;for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let r=this.node.logicNode.logic.getMetadata(t),i=h(()=>Se(this.node.structure.injector,()=>t.create(c(()=>r.compute(this.node.context)))));this.metadata.set(t,i)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new b(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,c(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}},Bn={get(n,e,t){let r=n(),i=r.structure.getChild(e);if(i!==void 0)return i.fieldTree;let o=h(r.value);if(N(o)){if(e==="length")return r.value().length;if(e===Symbol.iterator)return()=>(r.value(),Array.prototype[Symbol.iterator].apply(r.fieldTree))}if(G(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=h(n().value),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&!r.configurable&&(r.configurable=!0),r},ownKeys(n){let e=h(n().value);return typeof e=="object"&&e!==null?Reflect.ownKeys(e):[]}};function Kn(n,e){let t=c(()=>n()[e()]);return t[Me]=n[Me],t.set=r=>{n.update(i=>Un(i,r,e()))},t.update=r=>{t.set(r(h(t)))},t.asReadonly=()=>t,t}function Un(n,e,t){if(N(n)){let r=[...n];return r[t]=e,r}else return Q(v({},n),{[t]:e})}var ye=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=te.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,r){this.logic=e,this.node=t,this.createChildNode=r}children(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>h(t.reader))}getChild(e){let t=e.toString(),r=h(this.childrenMap)?.byPropertyKey.get(t)?.reader;return r||(r=this.createReader(t)),r()}reduceChildren(e,t,r){let i=this.childrenMap();if(!i)return e;let o=e;for(let a of i.byPropertyKey.values()){if(r?.(o))break;o=t(h(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(e,t,r){if(e.kind==="root")return En;if(t===void 0){let i=r;return c(()=>{if(this.parent.structure.getChild(i)!==this.node)throw new b(1902,!1);return i})}else{let i=r;return c(()=>{let o=this.parent.structure.value();if(!N(o))throw new b(1903,!1);let a=o[i];if(G(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===t)return i;for(let u=0;u<o.length;u++){let k=o[u];if(G(k)&&k.hasOwnProperty(this.parent.structure.identitySymbol)&&k[this.parent.structure.identitySymbol]===t)return i=u.toString()}throw new b(1904,!1)})}}createChildrenMap(){return P({source:this.value,computation:(e,t)=>{if(!G(e))return;let r=t?.value??{byPropertyKey:new Map},i,o=N(e);r!==void 0&&(o?i=Gn(r,e,this.identitySymbol):i=Hn(r,e));for(let a of Object.keys(e)){let u,k=e[a];if(k===void 0){r.byPropertyKey.has(a)&&(i??=v({},r),i.byPropertyKey.delete(a));continue}o&&G(k)&&!N(k)&&(u=k[this.identitySymbol]??=Symbol(""));let C;u&&(r.byTrackingKey?.has(u)||(i??=v({},r),i.byTrackingKey??=new Map,i.byTrackingKey.set(u,this.createChildNode(a,u,o))),C=(i??r).byTrackingKey.get(u));let R=r.byPropertyKey.get(a);R===void 0?(i??=v({},r),i.byPropertyKey.set(a,{reader:this.createReader(a),node:C??this.createChildNode(a,u,o)})):C&&C!==R.node&&(i??=v({},r),R.node=C)}return i??r}})}createReader(e){return c(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}},Ke=class extends ye{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return qn}get keyInParent(){return En}childrenMap;constructor(e,t,r,i,o){super(t,e,o),this.fieldManager=r,this.value=i,this.childrenMap=this.createChildrenMap()}},Ue=class extends ye{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,r,i,o,a){super(t,e,a),this.logic=t,this.parent=r,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:r,pathNode:void 0,logic:t,initialKeyInParent:o,identityInParent:i,fieldAdapter:void 0},i,o),this.pathKeys=c(()=>[...r.structure.pathKeys(),this.keyInParent()]),this.value=Kn(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var qn=c(()=>[]),En=c(()=>{throw new b(1905,!1)});function Gn(n,e,t){let r,i=new Set(n.byPropertyKey.keys()),o=new Set(n.byTrackingKey?.keys());for(let a=0;a<e.length;a++){let u=e[a];i.delete(a.toString()),G(u)&&u.hasOwnProperty(t)&&o.delete(u[t])}if(i.size>0){r??=v({},n);for(let a of i)r.byPropertyKey.delete(a)}if(o.size>0){r??=v({},n);for(let a of o)r.byTrackingKey?.delete(a)}return r}function Hn(n,e){let t;for(let r of n.byPropertyKey.keys())e.hasOwnProperty(r)||(t??=v({},n),t.byPropertyKey.delete(r));return t}var qe=class{node;selfSubmitting=p(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=P({source:this.node.structure.value,computation:()=>[]})}submitting=c(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},oe=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new je(this)}fieldProxy=new Proxy(()=>this,Bn);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new Be(this),this.submitState=new qe(this),this.controlValue=this.controlValueSignal()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){let e=this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(pn,void 0);return e||this.structure.children().map(t=>t.getBindingForFocus()).reduce(pn,void 0)}pendingSync=P({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(_n)}get maxLength(){return this.metadata(xn)}get min(){return this.metadata(yn)}get minLength(){return this.metadata(vn)}get pattern(){return this.metadata(Ze)??$n}get required(){return this.metadata(Xe)??Yn}metadata(e){return this.metadataState.get(e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(){h(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){h(()=>this._reset(e))}_reset(e){e!==void 0&&this.value.set(e),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.structure.children())t._reset()}controlValueSignal(){let e=P(this.value),{set:t,update:r}=e;return e.set=i=>{t(i),this.markAsDirty(),this.debounceSync()},e.update=i=>{r(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=h(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,r=e(t.signal);if(r&&(this.pendingSync.set(t),await r,t.signal.aborted))return}this.sync()}static newRoot(e,t,r,i){return i.newRoot(e,t,r,i)}createStructure(e){return e.kind==="root"?new Ke(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new Ue(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,r){let i,o;return r?(i=this.pathNode.getChild(O),o=this.structure.logic.getChild(O)):(i=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:i,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}},$n=c(()=>[]),Yn=c(()=>!1);function pn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var Ge=class{node;selfTouched=p(!1);selfDirty=p(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=p([]);constructor(e){this.node=e}dirty=c(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,r)=>r||t.nodeState.dirty(),hn)});touched=c(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,r)=>r||t.nodeState.touched(),hn)});disabledReasons=c(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=c(()=>!!this.disabledReasons().length);readonly=c(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=c(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=c(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=c(()=>{if(this.node.logicNode.logic.hasMetadata(ke)){let t=this.node.logicNode.logic.getMetadata(ke).compute(this.node.context);if(t)return r=>t(this.node.context,r)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=c(()=>this.hidden()||this.disabled()||this.readonly())},He=class{newRoot(e,t,r,i){return new oe({kind:"root",fieldManager:e,value:t,pathNode:r,logic:r.builder.build(),fieldAdapter:i})}newChild(e){return new oe(e)}createNodeState(e){return new Ge(e)}createValidationState(e){return new ze(e)}createStructure(e,t){return e.createStructure(t)}},$e=class{injector;rootName;submitOptions;constructor(e,t,r){this.injector=e,this.rootName=t??`${this.injector.get(_t)}.form${Xn++}`,this.submitOptions=r}structures=new Set;createFieldManagementEffect(e){ce(()=>{let t=new Set;this.markStructuresLive(e,t);for(let r of this.structures)t.has(r)||(this.structures.delete(r),h(()=>r.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let r of e.children())this.markStructuresLive(r.structure,t)}},Xn=0;function Zn(n){let e,t,r;return n.length===3?[e,t,r]=n:n.length===2?On(n[1])?[e,t]=n:[e,r]=n:[e]=n,[e,t,r]}function xe(...n){let[e,t,r]=Zn(n),i=r?.injector??l(te),o=Se(i,()=>pe.rootCompile(t)),a=new $e(i,r?.name,r?.submission),u=r?.adapter??new He,k=oe.newRoot(a,e,o,u);return a.createFieldManagementEffect(k.structure),k.fieldTree}var Ye=class{kind="compat";control;fieldTree;context;message;constructor({context:e,kind:t,control:r}){this.context=e,this.kind=t,this.control=r}};function wn(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof Ye?t.context:t;return e}var Wn=new L("");function X(n,e){return n instanceof Function?n(e):n}function it(n){return typeof n=="number"?isNaN(n):n===""||n===!1||n==null}function Mn(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function ot(n,e){ve(n),w.unwrapFieldPath(n).builder.addSyncErrorRule(r=>Cn(e(r),r.fieldTree))}function Qn(n){return new We(n)}function Jn(n,e){return new Qe(n,e)}function er(n){return new Je(n)}var Z=class{__brand=void 0;kind="";fieldTree;message;constructor(e){e&&Object.assign(this,e)}},We=class extends Z{kind="required"};var Qe=class extends Z{pattern;kind="pattern";constructor(e,t){super(t),this.pattern=e}},Je=class extends Z{kind="email"},et=class extends Z{kind="parse"};var tr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function at(n,e){ot(n,t=>{if(!it(t.value())&&!tr.test(t.value()))return e?.error?X(e.error,t):er({message:X(e?.message,t)})})}function In(n,e,t){let r=ae(n,M(),i=>e instanceof RegExp?e:e(i));ae(n,Ze,({state:i})=>i.metadata(r)()),ot(n,i=>{if(it(i.value()))return;let o=i.state.metadata(r)();if(o!==void 0&&!o.test(i.value()))return t?.error?X(t.error,i):Jn(o,{message:X(t?.message,i)})})}function W(n,e){let t=ae(n,M(),r=>e?.when?e.when(r):!0);ae(n,Xe,({state:r})=>r.metadata(t)()),ot(n,r=>{if(r.state.metadata(t)()&&it(r.value()))return e?.error?X(e.error,r):Qn({message:X(e?.message,r)})})}function Ce(n,e){ve(n);let t=w.unwrapFieldPath(n),r=nr(e);t.builder.addMetadataRule(ke,()=>r)}function nr(n){return typeof n=="function"?n:n==="blur"?ir():n>0?rr(n):or}function rr(n){return(e,t)=>new Promise(r=>{let i,o=()=>{clearTimeout(i),r()};i=setTimeout(()=>{t.removeEventListener("abort",o),r()},n),t.addEventListener("abort",o,{once:!0})})}function ir(){return(n,e)=>new Promise(t=>{e.addEventListener("abort",()=>t(),{once:!0})})}function or(){}var ar=new L("");function cr(n,e,t){let r=P({source:n,computation:()=>[]}),i=o=>{let a=t(o);r.set(Mn(a.error)),a.value!==void 0&&e(a.value),r.set(Mn(a.error))};return{errors:r.asReadonly(),setRawValue:i}}var tt=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return wn(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new b(1910,!1)}valueAccessor=null;hasValidator(e){return e===Wt.required?this.field().required():!1}updateValueAndValidity(){}},nt={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},sr=(()=>{let n={};for(let e of Object.keys(nt))n[nt[e]]=e;return n})();function ct(n,e){let t=sr[e];return n[t]?.()}var st=Object.values(nt);function Ee(){return{}}function V(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function dr(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function lr(n){if(n.tagName!=="INPUT")return!1;let e=n.type;return e==="date"||e==="datetime-local"||e==="month"||e==="number"||e==="range"||e==="time"||e==="week"}function ur(n){return n.tagName==="INPUT"||n.tagName==="TEXTAREA"}function mr(n,e){let t;if(n.validity.badInput)return{error:new et};switch(n.type){case"checkbox":return{value:n.checked};case"number":case"range":case"datetime-local":if(t=h(e),typeof t=="number"||t===null)return{value:n.value===""?null:n.valueAsNumber};break;case"date":case"month":case"time":case"week":if(t=h(e),t===null||t instanceof Date)return{value:n.valueAsDate};if(typeof t=="number")return{value:n.valueAsNumber};break}return{value:n.value}}function hr(n,e){switch(n.type){case"checkbox":n.checked=e;return;case"radio":n.checked=e===n.value;return;case"number":case"range":case"datetime-local":if(typeof e=="number"){Sn(n,e);return}else if(e===null){n.value="";return}break;case"date":case"month":case"time":case"week":if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e=="number"){Sn(n,e);return}}n.value=e}function Sn(n,e){isNaN(e)?n.value="":n.valueAsNumber=e}function dt(n,e,t,r){switch(t){case"name":n.setAttribute(e,t,r);break;case"disabled":case"readonly":case"required":r?n.setAttribute(e,t,""):n.removeAttribute(e,t);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?n.setAttribute(e,t,r.toString()):n.removeAttribute(e,t);break}}function fr(n,e){n.listenToCustomControlModel(r=>e.state().controlValue.set(r)),n.listenToCustomControlOutput("touchedChange",()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Ee();return()=>{let r=e.state(),i=r.controlValue();V(t,"controlValue",i)&&n.setCustomControlModelInput(i);for(let o of st){let a;o==="errors"?a=e.errors():a=ct(r,o),V(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o)&&dt(e.renderer,e.nativeFormElement,o,a))}}}function br(n,e){e.controlValueAccessor.registerOnChange(r=>e.state().controlValue.set(r)),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched()),e.registerAsBinding();let t=Ee();return()=>{let r=e.state(),i=r.value();V(t,"controlValue",i)&&h(()=>e.controlValueAccessor.writeValue(i));for(let o of st){let a=ct(r,o);if(V(t,o,a)){let u=n.setInputOnDirectives(o,a);o==="disabled"&&e.controlValueAccessor.setDisabledState?h(()=>e.controlValueAccessor.setDisabledState(a)):!u&&e.elementAcceptsNativeProperty(o)&&dt(e.renderer,e.nativeFormElement,o,a)}}}}function pr(n,e,t){if(typeof MutationObserver!="function")return;let r=new MutationObserver(i=>{i.some(o=>gr(o))&&e()});r.observe(n,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>r.disconnect())}function gr(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function kr(n,e,t){let r=!1,i=e.nativeFormElement,o=cr(()=>e.state().value(),u=>e.state().controlValue.set(u),()=>mr(i,e.state().value));t.set(o.errors),n.listenToDom("input",()=>o.setRawValue(void 0)),n.listenToDom("blur",()=>e.state().markAsTouched()),e.registerAsBinding(),i.tagName==="SELECT"&&pr(i,()=>{r&&(i.value=e.state().controlValue())},e.destroyRef);let a=Ee();return()=>{let u=e.state(),k=u.controlValue();V(a,"controlValue",k)&&hr(i,k);for(let C of st){let R=ct(u,C);V(a,C,R)&&(n.setInputOnDirectives(C,R),e.elementAcceptsNativeProperty(C)&&dt(e.renderer,i,C,R))}r=!0}}var yr=Symbol(),_r=new L(""),Nn=(()=>{class n{field=Rt.required({alias:"formField"});renderer=l(xt);destroyRef=l(gt);state=c(()=>this.field()());injector=l(te);element=l(se).nativeElement;elementIsNativeFormElement=dr(this.element);elementAcceptsNumericValues=lr(this.element);elementAcceptsTextualValues=ur(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=l(ue,{optional:!0,self:!0});config=l(Wn,{optional:!0});parseErrorsSource=p(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new tt(this.state)}parseErrors=c(()=>this.parseErrorsSource()?.().map(t=>Q(v({},t),{fieldTree:h(this.state).fieldTree,formField:this}))??[]);errors=c(()=>this.state().errors().filter(t=>!t.formField||t.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([i,o])=>[i,c(()=>o(this))]);if(t.length===0)return;let r=Ee();Ot({write:()=>{for(let[i,o]of t){let a=o();V(r,i,a)&&(a?this.renderer.addClass(this.element,i):this.renderer.removeClass(this.element,i))}}},{injector:this.injector})}focus(t){this.focuser(t)}registerAsBinding(t){if(this.isFieldBinding)throw new b(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=r=>t.focus(r)),ce(r=>{let i=this.state();i.nodeState.formFieldBindings.update(o=>[...o,this]),r(()=>{i.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[yr];\u0275ngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=br(t,this);else if(t.customControl)this.\u0275ngControlUpdate=fr(t,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=kr(t,this,this.parseErrorsSource);else throw new b(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(r){return new(r||n)};static \u0275dir=Et({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[le([{provide:_r,useExisting:n},{provide:Qt,useFactory:()=>l(n).interopNgControl},{provide:ar,useFactory:()=>l(n).parseErrorsSource}]),wt("formField")]})}return n})();var vr=["input"],xr=["label"],Cr=["*"],lt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Er=new L("mat-checkbox-default-options",{providedIn:"root",factory:()=>lt}),g=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(g||{}),ut=class{source;checked},wr=(()=>{class n{_elementRef=l(se);_changeDetectorRef=l(Ft);_ngZone=l(kt);_animationsDisabled=Kt();_options=l(Er,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let r=new ut;return r.source=this,r.checked=t,r}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Ie;indeterminateChange=new Ie;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=g.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(jt).load(qt);let t=l(new Dt("tabindex"),{optional:!0});this._options=this._options||lt,this.color=this._options.color||lt.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=l(Bt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let r=t!=this._indeterminate();this._indeterminate.set(t),r&&(t?this._transitionCheckState(g.Indeterminate):this._transitionCheckState(this.checked?g.Checked:g.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=p(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let r=this._currentCheckState,i=this._getAnimationTargetElement();if(!(r===t||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(r,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!=="noop"?(this.indeterminate&&t!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?g.Checked:g.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,r){if(this._animationsDisabled)return"";switch(t){case g.Init:if(r===g.Checked)return this._animationClasses.uncheckedToChecked;if(r==g.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case g.Unchecked:return r===g.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case g.Checked:return r===g.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case g.Indeterminate:return r===g.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(t){let r=this._inputElement;r&&(r.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(t){t.target&&this._labelElement.nativeElement.contains(t.target)&&t.stopPropagation()}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=de({type:n,selectors:[["mat-checkbox"]],viewQuery:function(r,i){if(r&1&&Nt(vr,5)(xr,5),r&2){let o;Te(o=De())&&(i._inputElement=o.first),Te(o=De())&&(i._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(r,i){r&2&&(Mt("id",i.id),Ne("tabindex",null)("aria-label",null)("aria-labelledby",null),Tt(i.color?"mat-"+i.color:"mat-accent"),F("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",A],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",A],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?void 0:Pt(t)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",A],checked:[2,"checked","checked",A],disabled:[2,"disabled","disabled",A],indeterminate:[2,"indeterminate","indeterminate",A]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[le([{provide:ue,useExisting:mt(()=>n),multi:!0},{provide:Zt,useExisting:n,multi:!0}]),yt],ngContentSelectors:Cr,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(r,i){if(r&1&&(St(),d(0,"div",3),E("click",function(a){return i._preventBubblingFromLabel(a)}),d(1,"div",4,0)(3,"div",5),E("click",function(){return i._onTouchTargetClick()}),s(),d(4,"input",6,1),E("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(a){return i._onInteractionEvent(a)}),s(),y(6,"div",7),d(7,"div",8),bt(),d(8,"svg",9),y(9,"path",10),s(),pt(),y(10,"div",11),s(),y(11,"div",12),s(),d(12,"label",13,2),It(14),s()()),r&2){let o=At(2);x("labelPosition",i.labelPosition),m(4),F("mdc-checkbox--selected",i.checked),x("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Ne("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),m(7),x("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),m(),x("for",i.inputId)}},dependencies:[Ut,mn],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})(),An=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=Ct({type:n});static \u0275inj=ft({imports:[wr,zt]})}return n})();var we=class n{authService=l($t);loaderService=l(Xt);async signUp(e,t,r){this.loaderService.show();try{let{data:i,error:o}=await Re.auth.signUp({email:e,password:t,options:{data:{display_name:r||e.split("@")[0]}}});return o?{data:null,error:o.message}:{data:i,error:null}}catch(i){return{data:null,error:i?.message||"An unexpected error occurred during sign up"}}finally{this.loaderService.hide()}}async signIn(e,t){this.loaderService.show();try{let{data:r,error:i}=await Re.auth.signInWithPassword({email:e,password:t});if(i)return{data:null,error:i.message};if(r&&r.user){let o={id:r.user.id,email:r.user.email||"",displayName:r.user.user_metadata?.display_name||void 0};this.authService.login(o)}return{data:r,error:null}}catch(r){return{data:null,error:r?.message||"An unexpected error occurred during sign in"}}finally{this.loaderService.hide()}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ht({token:n,factory:n.\u0275fac,providedIn:"root"})};function Mr(n,e){if(n&1&&(d(0,"mat-error",21),f(1),s()),n&2){let t=e.$implicit;m(),q(t.message)}}function Sr(n,e){if(n&1&&K(0,Mr,2,1,"mat-error",21,B),n&2){let t=_(2);U(t.signInForm.email().errors())}}function Ir(n,e){if(n&1&&(d(0,"mat-error",21),f(1),s()),n&2){let t=e.$implicit;m(),q(t.message)}}function Nr(n,e){if(n&1&&K(0,Ir,2,1,"mat-error",21,B),n&2){let t=_(2);U(t.signInForm.password().errors())}}function Ar(n,e){if(n&1&&(d(0,"div",17),y(1,"p",22),s()),n&2){let t=_(2);m(),x("innerHTML",t.signInError(),vt)}}function Tr(n,e){if(n&1){let t=Ae();d(0,"div")(1,"mat-card-header",8)(2,"div",9)(3,"mat-card-title",10),f(4,"Sign In"),s(),d(5,"p",11),f(6,"Your calendar is waiting for you!"),s()()(),d(7,"mat-card-content",12)(8,"form",13),E("submit",function(i){J(t);let o=_();return ee(o.handleSignIn(i))}),d(9,"div",9)(10,"mat-form-field",14)(11,"mat-label"),f(12,"Email"),s(),y(13,"input",15),z(),s(),S(14,Sr,2,0),s(),d(15,"div",9)(16,"mat-form-field",14)(17,"mat-label"),f(18,"Password"),s(),y(19,"input",16),z(),s(),S(20,Nr,2,0),s(),S(21,Ar,2,1,"div",17),d(22,"div",18)(23,"button",19),f(24," Sign In "),s(),d(25,"button",20),E("click",function(){J(t);let i=_();return ee(i.toggleCreateAccount())}),f(26," Create Account "),s()()()()()}if(n&2){let t=_();F("sign-in-exit",t.isCreateAccount())("sign-in-enter",!t.isCreateAccount()),m(13),x("formField",t.signInForm.email),j(),m(),I(t.signInForm.email().touched()&&t.signInForm.email().invalid()?14:-1),m(5),x("formField",t.signInForm.password),j(),m(),I(t.signInForm.password().touched()&&t.signInForm.password().invalid()?20:-1),m(),I(t.signInError()?21:-1)}}function Dr(n,e){if(n&1&&(d(0,"mat-error",21),f(1),s()),n&2){let t=e.$implicit;m(),q(t.message)}}function Rr(n,e){if(n&1&&K(0,Dr,2,1,"mat-error",21,B),n&2){let t=_(2);U(t.createAccountForm.name().errors())}}function Fr(n,e){if(n&1&&(d(0,"mat-error",21),f(1),s()),n&2){let t=e.$implicit;m(),q(t.message)}}function Pr(n,e){if(n&1&&K(0,Fr,2,1,"mat-error",21,B),n&2){let t=_(2);U(t.createAccountForm.email().errors())}}function Or(n,e){if(n&1&&(d(0,"mat-error",21),f(1),s()),n&2){let t=e.$implicit;m(),q(t.message)}}function Vr(n,e){if(n&1&&K(0,Or,2,1,"mat-error",21,B),n&2){let t=_(2);U(t.createAccountForm.password().errors())}}function Lr(n,e){if(n&1){let t=Ae();d(0,"div")(1,"mat-card-header",23)(2,"div",9)(3,"mat-card-title",10),f(4,"Create Account"),s(),d(5,"p",24),f(6,"Join us today!"),s()()(),d(7,"mat-card-content",12)(8,"form",13),E("submit",function(i){J(t);let o=_();return ee(o.handleCreateAccount(i))}),d(9,"mat-form-field",14)(10,"mat-label"),f(11,"Name"),s(),y(12,"input",25),z(),s(),S(13,Rr,2,0),d(14,"mat-form-field",14)(15,"mat-label"),f(16,"Email"),s(),y(17,"input",26),z(),s(),S(18,Pr,2,0),d(19,"mat-form-field",14)(20,"mat-label"),f(21,"Password"),s(),y(22,"input",27),z(),s(),S(23,Vr,2,0),d(24,"div",18)(25,"button",19),f(26," Create Account "),s(),d(27,"button",28),E("click",function(){J(t);let i=_();return ee(i.toggleCreateAccount())}),f(28," Back to Sign In "),s()()()()()}if(n&2){let t=_();F("create-account-exit",!t.isCreateAccount())("create-account-enter",t.isCreateAccount()),m(12),x("formField",t.createAccountForm.name),j(),m(),I(t.createAccountForm.name().touched()&&t.createAccountForm.name().invalid()?13:-1),m(4),x("formField",t.createAccountForm.email),j(),m(),I(t.createAccountForm.email().touched()&&t.createAccountForm.email().invalid()?18:-1),m(4),x("formField",t.createAccountForm.password),j(),m(),I(t.createAccountForm.password().touched()&&t.createAccountForm.password().invalid()?23:-1)}}var Tn=class n{router=l(Vt);store=l(Lt);signInService=l(we);isCreateAccount=p(!1);isTransitioning=p(!1);signInError=p(null);signInTimeout=p(this.router.currentNavigation()?.extras.state?.isTimedOut??!1);createAccountError=p(null);signInModel=p({email:"",password:"",rememberMe:!1});signInForm=xe(this.signInModel,e=>{Ce(e.email,500),W(e.email,{message:"Email is required."}),at(e.email,{message:"Enter a valid email address."}),W(e.password,{message:"Password is required."})});createAccountModel=p({name:"",email:"",password:""});createAccountForm=xe(this.createAccountModel,e=>{W(e.name,{message:"Name is required."}),Ce(e.email,500),W(e.email,{message:"Email is required."}),at(e.email,{message:"Enter a valid email address."}),Ce(e.password,500),W(e.password,{message:"Password is required."}),In(e.password,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/,{message:"Password must be at least 10 characters long and include uppercase, lowercase, and a number."})});toggleCreateAccount(){this.isTransitioning.set(!0),this.signInError.set(null),this.signInTimeout.set(null)}onCardAnimationEnd(){this.isTransitioning()&&(this.isCreateAccount.update(e=>!e),this.isTransitioning.set(!1))}goToCalendar(){this.store.dispatch(Yt())}async handleSignIn(e){e.preventDefault(),this.signInError.set(null),this.signInTimeout.set(null);try{let t=await this.signInService.signIn(this.signInModel().email,this.signInModel().password);t.error?this.signInError.set("Oh shit, it's broke can't log you in! Contact Andy for help. <br><br> Error:"+t.error):this.goToCalendar()}catch(t){let r=t?.message||"An unexpected error occurred";this.signInError.set("Oh shit, it's broke can't log you in! Contact Andy for help. <br><br> Error:"+r)}}async handleCreateAccount(e){e.preventDefault(),this.createAccountError.set(null),this.signInTimeout.set(null);try{let t=await this.signInService.signUp(this.createAccountModel().email,this.createAccountModel().password,this.createAccountModel().name);t.error?this.createAccountError.set("Oh shit, can't create account! Contact Andy for help. <br><br> Error:"+t.error):console.log("Sign-up successful:",t.data)}catch(t){let r=t?.message||"An unexpected error occurred";this.createAccountError.set("Oh shit, can't create account! Contact Andy for help. <br><br> Error:"+r)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=de({type:n,selectors:[["app-sign-in"]],decls:8,vars:6,consts:[[1,"flex","items-center","justify-center","min-h-screen","bg-gradient-to-br","from-blue-50","via-indigo-50","to-purple-100"],[1,"absolute","inset-0","overflow-hidden","pointer-events-none"],[1,"absolute","top-10","left-10","w-72","h-72","bg-blue-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob"],[1,"absolute","top-40","right-10","w-72","h-72","bg-purple-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob","animation-delay-2000"],[1,"absolute","-bottom-8","left-1/2","w-72","h-72","bg-pink-200","rounded-full","mix-blend-multiply","filter","blur-3xl","opacity-20","animate-blob","animation-delay-4000"],[1,"w-full","max-w-md","shadow-2xl","relative","z-10","transform","hover:shadow-3xl","transition-all","duration-500","backdrop-blur-sm","bg-white/95",3,"animationend"],[3,"sign-in-exit","sign-in-enter"],[3,"create-account-exit","create-account-enter"],[1,"bg-gradient-to-r","from-indigo-600","to-purple-600","text-white","p-8","mb-8","rounded-t-lg"],[1,"flex","flex-col"],[1,"text-3xl","font-bold"],[1,"text-indigo-100","text-sm","mt-3","mb-3","font-light","self-end"],[1,"p-8"],[1,"space-y-6",3,"submit"],["appearance","outline",1,"w-full"],["matInput","","type","email","placeholder","you@example.com","autocomplete","email",3,"formField"],["matInput","","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","current-password",3,"formField"],[1,"bg-red-50","border","border-red-200","rounded-md","p-4"],[1,"flex","flex-col","gap-4","pt-4"],["mat-raised-button","","color","primary","type","submit",1,"w-full","py-3","text-lg","font-semibold","hover:shadow-lg","transition-all","duration-300","transform","hover:scale-105"],["mat-stroked-button","","type","button",1,"w-full","py-3","text-lg","font-semibold","text-indigo-600","border-indigo-600","hover:bg-indigo-50","transition-all","duration-300","transform","hover:scale-105",3,"click"],[1,"text-sm","pl-2"],[1,"text-sm","text-red-700",3,"innerHTML"],[1,"bg-gradient-to-r","from-purple-600","to-pink-600","text-white","p-8","mb-8","rounded-t-lg"],[1,"text-purple-100","text-sm","mt-3","mb-3","font-light","self-end"],["matInput","","type","text","placeholder","John Doe","autocomplete","off","autocorrect","off",3,"formField"],["matInput","","type","email","placeholder","you@example.com","autocomplete","off","autocorrect","off",3,"formField"],["matInput","","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","off","autocorrect","off",3,"formField"],["mat-stroked-button","","type","button",1,"w-full","py-3","text-lg","font-semibold","text-purple-600","border-purple-600","hover:bg-purple-50","transition-all","duration-300","transform","hover:scale-105",3,"click"]],template:function(t,r){t&1&&(d(0,"div",0)(1,"div",1),y(2,"div",2)(3,"div",3)(4,"div",4),s(),d(5,"mat-card",5),E("animationend",function(){return r.onCardAnimationEnd()}),S(6,Tr,27,9,"div",6),S(7,Lr,29,10,"div",7),s()()),t&2&&(m(5),F("card-fade-out",r.isTransitioning())("card-fade-in",!r.isTransitioning()),m(),I(r.isCreateAccount()?-1:6),m(),I(r.isCreateAccount()?7:-1))},dependencies:[Nn,on,en,nn,rn,tn,dn,sn,an,cn,un,ln,Ht,Gt,An],styles:["@keyframes _ngcontent-%COMP%_blob{0%,to{transform:translate(0) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(.9)}}@keyframes _ngcontent-%COMP%_fadeOutUpSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(-150px) translate(100px)}}@keyframes _ngcontent-%COMP%_fadeInUpSwipe{0%{opacity:0;transform:translateY(150px) translate(-100px)}to{opacity:1;transform:translateY(0) translate(0)}}@keyframes _ngcontent-%COMP%_fadeOutDownSwipe{0%{opacity:1;transform:translateY(0) translate(0)}to{opacity:0;transform:translateY(150px) translate(-100px)}}@keyframes _ngcontent-%COMP%_fadeInDownSwipe{0%{opacity:0;transform:translateY(-150px) translate(100px)}to{opacity:1;transform:translateY(0) translate(0)}}.animate-blob[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blob 7s infinite}.animation-delay-2000[_ngcontent-%COMP%]{animation-delay:2s}.animation-delay-4000[_ngcontent-%COMP%]{animation-delay:4s}.sign-in-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUpSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.create-account-exit[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOutDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.sign-in-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInDownSwipe .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-transition[_ngcontent-%COMP%]{transition:all .6s cubic-bezier(.68,-.55,.265,1.55)}.card-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardPulse .6s cubic-bezier(.68,-.55,.265,1.55) forwards}@keyframes _ngcontent-%COMP%_cardPulse{0%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.02);filter:brightness(1.05)}to{transform:scale(1);filter:brightness(1)}}@keyframes _ngcontent-%COMP%_cardFadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_cardFadeOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}.card-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeIn .6s cubic-bezier(.68,-.55,.265,1.55) forwards}.card-fade-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFadeOut .6s cubic-bezier(.68,-.55,.265,1.55) forwards}"]})};export{Tn as SignInComponent};
