(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Fhu4:function(n,t,l){"use strict";l.r(t);var i=l("CcnG"),u=function(){},o=l("pMnS"),r=l("Ip0R"),e=l("K9Ia"),s=l("t/Na"),a=function(){function n(n){this.http=n,this.istorijats=new e.b,this.path="/api/istorijat",this.header=new s.g({"Content-Type":"application/json"})}return n.prototype.getIstorijat=function(){return this.http.get(this.path)},n.ngInjectableDef=i.V({factory:function(){return new n(i.Z(s.c))},token:n,providedIn:"root"}),n}(),c=function(){function n(n){this.istorijatService=n}return n.prototype.ngOnInit=function(){var n=this;this.istorijatService.getIstorijat().subscribe(function(t){n.istorijats=t}),this.istorijatService.getIstorijat()},n}(),b=i.qb({encapsulation:0,styles:[[""]],data:{}});function p(n){return i.Jb(0,[(n()(),i.sb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),i.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i.Hb(2,null,[" zdravo ovo je opis ",""])),(n()(),i.sb(3,0,null,null,0,"img",[["class","car--image"]],[[8,"src",4]],null,null,null,null))],null,function(n,t){n(t,2,0,t.context.$implicit.tekst),n(t,3,0,i.ub(1,"",t.context.$implicit.slike.sadrzaj,""))})}function f(n){return i.Jb(0,[(n()(),i.jb(16777216,null,null,1,null,p)),i.rb(1,278528,null,0,r.i,[i.R,i.O,i.u],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,1,0,t.component.istorijats)},null)}var h=i.ob("app-istorijat",c,function(n){return i.Jb(0,[(n()(),i.sb(0,0,null,null,1,"app-istorijat",[],null,null,null,f,b)),i.rb(1,114688,null,0,c,[a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),j=l("gIcY"),d=l("ZYCi");l.d(t,"IstorijatModuleNgFactory",function(){return g});var g=i.pb(u,[],function(n){return i.zb([i.Ab(512,i.k,i.eb,[[8,[o.a,h]],[3,i.k],i.z]),i.Ab(4608,r.l,r.k,[i.w,[2,r.r]]),i.Ab(4608,j.q,j.q,[]),i.Ab(4608,j.d,j.d,[]),i.Ab(4608,a,a,[s.c]),i.Ab(1073742336,r.b,r.b,[]),i.Ab(1073742336,j.o,j.o,[]),i.Ab(1073742336,j.e,j.e,[]),i.Ab(1073742336,j.m,j.m,[]),i.Ab(1073742336,d.m,d.m,[[2,d.s],[2,d.k]]),i.Ab(1073742336,u,u,[]),i.Ab(1024,d.i,function(){return[[{path:"",component:c}]]},[])])})}}]);