(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{KiKm:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){},o=e("pMnS"),a=e("/jYg"),r=e("ZYjt"),i=e("ZYCi"),c=e("Ip0R"),g=e("IS4z"),d=e("l1rk"),s=e("32RR"),b=e("/iSE"),p=e("zIWb"),m=function(){function l(l,n,e,t){this.sidebarService=l,this.photoLibraryService=n,this.imagesService=e,this.videosService=t,this.albumsTotal=null,this.videosTotal=null,this.photoUrl=null,this.video=null,this.sidebarService.handleSetSettings({showSidebar:!1,bgColor:"#fff"})}return l.prototype.ngOnInit=function(){var l=this;this.photoLibraryService.getItems({filter:"ContentType eq '"+encodeURI(p.a.album)+"'",top:5e3}).subscribe(function(n){return l.albumsTotal=n.length}),this.photoLibraryService.getRandomItems({top:1,filter:"ContentType eq '"+encodeURI(p.a.photo)+"'"}).subscribe(function(n){n.length>0&&(l.photoUrl=n[0].url)}),this.videosService.getItems().subscribe(function(n){if(l.videosTotal=n.length,n.length>0){var e=Math.floor(Math.random()*n.length);l.video=n[e]}})},l.prototype.getEnding=function(l,n){var e;if((l%=100)>=11&&l<=19)e=n[2];else switch(l%10){case 1:e=n[0];break;case 2:case 3:case 4:e=n[1];break;default:e=n[2]}return e},l.prototype.prepareLink=function(l){return this.imagesService.prepareBackgroundUrl(l)},l}(),h=t.qb({encapsulation:0,styles:[['#s4-bodyContainer[_ngcontent-%COMP%]{padding:0}@-webkit-keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}@keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}.l-page-header[_ngcontent-%COMP%]{padding-bottom:40px}.l-mediagallery[_ngcontent-%COMP%]{width:90%;padding-left:25px}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]{position:relative;display:inline-block;width:49%;background-repeat:no-repeat;background-size:cover;background-position:center}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;height:100%}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]:before, .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]:before{display:block;content:" ";width:100%;padding-bottom:60.60606061%}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px 40px;box-sizing:border-box;background-repeat:no-repeat;background-size:30% 30%;background-position:center}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(to bottom,rgba(5,5,5,.7),rgba(88,88,88,0))}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:34px;font-weight:700;margin-bottom:7px}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   .items-counter[_ngcontent-%COMP%], .l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   .items-counter[_ngcontent-%COMP%]{color:#fff;font-size:22px}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]{margin-right:2%}.l-mediagallery[_ngcontent-%COMP%]   .photogallery-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-image:url(/assets/icons/icon-photo.svg)}.l-mediagallery[_ngcontent-%COMP%]   .videogallery-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-image:url(/assets/icons/icon-play.svg)}']],data:{}});function y(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Kb(1,null,[" "," "," "])),t.Db(2,3)],null,function(l,n){var e=n.component;l(n,1,0,e.albumsTotal,e.getEnding(e.albumsTotal,l(n,2,0,"\u0430\u043b\u044c\u0431\u043e\u043c","\u0430\u043b\u044c\u0431\u043e\u043c\u0430","\u0430\u043b\u044c\u0431\u043e\u043c\u043e\u0432")))})}function C(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t.Kb(-1,null,[" \u041d\u0435\u0442 \u0430\u043b\u044c\u0431\u043e\u043c\u043e\u0432 "]))],null,null)}function f(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"iframe",[],[[8,"src",5]],null,null,null,null)),t.Gb(2,1)],null,function(l,n){var e=n.component;l(n,1,0,t.Lb(n,1,0,l(n,2,0,t.Cb(n.parent,0),e.video.videoUrl)))})}function v(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t.sb(1,0,null,null,0,"video",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,1,0,t.ub(1,"",n.component.video.videoUrl,""))})}function M(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t.Kb(1,null,[" "," \u0432\u0438\u0434\u0435\u043e "]))],null,function(l,n){l(n,1,0,n.component.videosTotal)})}function O(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t.Kb(-1,null,[" \u041d\u0435\u0442 \u0432\u0438\u0434\u0435\u043e "]))],null,null)}function P(l){return t.Mb(0,[t.Eb(0,a.a,[r.c]),(l()(),t.sb(1,0,null,null,10,"div",[["class","l-page-header"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,7,"div",[["class","l-breadcrumbs"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,4,"div",[["class","l-breadcrumb"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.rb(5,671744,null,0,i.o,[i.m,i.a,c.h],{routerLink:[0,"routerLink"]},null),t.Db(6,1),(l()(),t.Kb(-1,null,["\u0413\u043b\u0430\u0432\u043d\u0430\u044f"])),(l()(),t.sb(8,0,null,null,1,"div",[["class","l-breadcrumb"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\u041c\u0435\u0434\u0438\u0430\u0433\u0430\u043b\u0435\u0440\u0435\u044f"])),(l()(),t.sb(10,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" \u041c\u0435\u0434\u0438\u0430\u0433\u0430\u043b\u0435\u0440\u0435\u044f "])),(l()(),t.sb(12,0,null,null,33,"div",[["class","l-page"]],null,null,null,null,null)),(l()(),t.sb(13,0,null,null,32,"div",[["class","l-page-inner"]],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,31,"div",[["class","l-page__content"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,30,"div",[["class","l-mediagallery"]],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,13,"a",[["class","photogallery-card"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,19).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.rb(17,278528,null,0,c.n,[t.v,t.l,t.F],{ngStyle:[0,"ngStyle"]},null),t.Fb(18,{"background-image":0}),t.rb(19,671744,null,0,i.o,[i.m,i.a,c.h],{routerLink:[0,"routerLink"]},null),t.Db(20,1),(l()(),t.sb(21,0,null,null,0,"div",[["class","gradient"]],null,null,null,null,null)),(l()(),t.sb(22,0,null,null,7,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.sb(23,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" \u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f "])),(l()(),t.sb(25,0,null,null,4,"div",[["class","items-counter"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,y)),t.rb(27,16384,null,0,c.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,C)),t.rb(29,16384,null,0,c.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(30,0,null,null,15,"a",[["class","videogallery-card"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,31).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.rb(31,671744,null,0,i.o,[i.m,i.a,c.h],{routerLink:[0,"routerLink"]},null),t.Db(32,2),(l()(),t.jb(16777216,null,null,1,null,f)),t.rb(34,16384,null,0,c.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,v)),t.rb(36,16384,null,0,c.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(37,0,null,null,0,"div",[["class","gradient"]],null,null,null,null,null)),(l()(),t.sb(38,0,null,null,7,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.sb(39,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" \u0412\u0438\u0434\u0435\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f "])),(l()(),t.sb(41,0,null,null,4,"div",[["class","items-counter"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,M)),t.rb(43,16384,null,0,c.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,O)),t.rb(45,16384,null,0,c.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,5,0,l(n,6,0,"/company")),l(n,17,0,l(n,18,0,"url("+e.prepareLink(e.photoUrl)+")")),l(n,19,0,l(n,20,0,"photo")),l(n,27,0,e.albumsTotal>0),l(n,29,0,0===e.albumsTotal),l(n,31,0,l(n,32,0,"video","search")),l(n,34,0,e.video&&e.video.isIFrame),l(n,36,0,e.video&&!e.video.isIFrame),l(n,43,0,e.albumsTotal>0),l(n,45,0,0===e.albumsTotal)},function(l,n){l(n,4,0,t.Cb(n,5).target,t.Cb(n,5).href),l(n,16,0,t.Cb(n,19).target,t.Cb(n,19).href),l(n,30,0,t.Cb(n,31).target,t.Cb(n,31).href)})}var _=t.ob("app-mediagallery-page",m,function(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-mediagallery-page",[],null,null,null,P,h)),t.rb(1,114688,null,0,m,[g.a,d.a,s.a,b.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=e("gIcY"),I={animation:"fadeAnimation",title:"\u041c\u0435\u0434\u0438\u0430\u0433\u0430\u043b\u0435\u0440\u0435\u044f"},K=function(){},S=e("PCNd");e.d(n,"MediagalleryModuleNgFactory",function(){return w});var w=t.pb(u,[],function(l){return t.zb([t.Ab(512,t.k,t.eb,[[8,[o.a,_]],[3,t.k],t.z]),t.Ab(4608,c.m,c.l,[t.w,[2,c.y]]),t.Ab(4608,k.p,k.p,[]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,i.p,i.p,[[2,i.v],[2,i.m]]),t.Ab(1073742336,K,K,[]),t.Ab(1073742336,k.n,k.n,[]),t.Ab(1073742336,k.d,k.d,[]),t.Ab(1073742336,S.a,S.a,[]),t.Ab(1073742336,u,u,[]),t.Ab(1024,i.k,function(){return[[{path:"",component:m,data:I},{path:"photo",loadChildren:"../photogallery/photogallery.module#PhotogalleryModule"},{path:"video",loadChildren:"../videogallery/videogallery.module#VideogalleryModule"}]]},[])])})}}]);