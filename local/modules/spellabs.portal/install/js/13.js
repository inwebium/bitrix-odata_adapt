(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PbJ5:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("CcnG"),i=function(){function n(){this.changeActiveItem=new e.n}return n.prototype.handleChangeActiveItem=function(){this.changeActiveItem.emit()},n.ngInjectableDef=e.V({factory:function(){return new n},token:n,providedIn:"root"}),n}()},S4EX:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){},o=t("pMnS"),u=t("vQGG"),s=t("xhmP"),r=t("PbJ5"),c=t("7+tq"),a=t("qa0Y"),g=t("ZYCi"),p=t("nqBZ"),d=t("Ip0R"),b=t("O9Q2"),h=t("LQO2"),m=t("nAuW"),f=t("cuj7"),C=t("nulM"),v=t("IS4z"),w=t("U5Yz"),x=t("rHJy"),k=t("Cdqi"),_=function(){function n(n,l,t,e,i,o){this.newsService=n,this.route=l,this.sidebarService=t,this.newsViewsService=e,this.newsCommentsService=i,this.sharepointService=o,this.rubrics=[],this.top=10,this.pages=[],this.index=0,this.news=[],this.hasPrev=!1,this.hasNext=!1,this.rubricId=null,this.userId=null,this.sidebarService.handleSetSettings({showSidebar:!1,bgColor:"#fff"})}return n.prototype.ngOnInit=function(){this.rubrics=this.route.snapshot.data.newsRubrics,this.pages.push(this.route.snapshot.data.news),this.news=this.route.snapshot.data.news.items,this.loadViewsAndComments(this.news),this.hasNext=this.route.snapshot.data.news.hasNext,this.userId=this.route.snapshot.data.userId},n.prototype.getNextNews=function(){var n=this;this.hasNext&&(this.index===this.pages.length-1?this.pages[this.index].getNext().subscribe(function(l){n.index++,n.news=l.items,n.hasNext=l.hasNext,n.hasPrev=!0,n.pages.push(l),n.loadViewsAndComments(n.news)}):(this.index++,this.news=this.pages[this.index].items,this.hasNext=this.pages[this.index].hasNext,this.hasPrev=!0))},n.prototype.getPrevNews=function(){this.hasPrev&&(this.index--,this.news=this.pages[this.index].items,this.hasNext=!0,this.hasPrev=this.index>0)},n.prototype.filterByRubricId=function(n){this.rubricId=n,this.filterNews()},n.prototype.filterNews=function(){var n=this,l=this.rubricId&&"slNewsRubricLookup/Id eq "+this.rubricId+" and "||"";this.index=0,this.news=[],this.pages=[],this.hasPrev=!1,this.hasNext=!1,this.newsService.getItemsPaged({filter:l+"slNewsPublicationDate le datetime'"+(new Date).toISOString()+"'",top:this.top}).subscribe(function(l){n.pages.push(l),n.news=l.items,n.hasNext=l.hasNext,n.loadViewsAndComments(n.news)})},n.prototype.loadViewsAndComments=function(n){var l=this,t="";if(n.length>0){for(var e=0,i=n;e<i.length;e++)t+="slLookupNews/Id eq "+i[e].id+" or ";t=t.slice(0,-4),this.newsCommentsService.getItems({filter:t,top:5e3}).subscribe(function(n){for(var t=function(l){l.commentsCount=n.filter(function(n){return n.newsLookupId===l.id}).length},e=0,i=l.news;e<i.length;e++)t(i[e])}),this.newsViewsService.getItems({filter:t,top:5e3}).subscribe(function(n){for(var t=function(l){var t=n.filter(function(n){return n.newsLookupId===l.id});l.viewsCount=t&&t.length>0?t[0].count:0},e=0,i=l.news;e<i.length;e++)t(i[e])})}},n.prototype.toggleLike=function(n){var l=this;n.likedByIds.indexOf(this.userId)>=0?(this.newsService.removeLike({id:n.id}).subscribe(),n.likedByIds=n.likedByIds.filter(function(n){return n!==l.userId}),n.likesCount--):(this.newsService.addLike({id:n.id}).subscribe(),n.likedByIds.push(this.userId),n.likesCount++)},n.prototype.hasLike=function(n){return n.likedByIds.indexOf(this.userId)>=0},n.prototype.prepareLink=function(n){return n&&n.replace(/\(/gi,"\\(").replace(/\)/gi,"\\)")||null},n.prototype.create=function(){window.location.href=this.sharepointService.getCurrentUserContext().webServerRelativeUrl+"/Lists/slNews/NewForm.aspx?Source="+encodeURIComponent(window.location.href)},n.prototype.edit=function(n){window.location.href=this.sharepointService.getCurrentUserContext().webServerRelativeUrl+"/Lists/slNews/EditForm.aspx?ID="+n.id+"&Source="+encodeURIComponent(window.location.href)},n.prototype.remove=function(n){var l=this;this.newsService.recycleItem(n).subscribe(function(){return l.filterByRubricId()})},n}(),O=e.qb({encapsulation:0,styles:[["#s4-bodyContainer[_ngcontent-%COMP%]{padding:0}@-webkit-keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}@keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}.l-news[_ngcontent-%COMP%]{max-width:1065px;padding:50px 25px;box-sizing:border-box;position:relative}.l-news[_ngcontent-%COMP%]   .l-new-categories[_ngcontent-%COMP%]{height:30px;position:absolute;top:-30px}.l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]{margin-top:80px;text-align:center}.l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-left[_ngcontent-%COMP%], .l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-right[_ngcontent-%COMP%], .l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-start[_ngcontent-%COMP%]{margin:0;padding:0;border:none;min-width:0;vertical-align:middle;cursor:pointer}.l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-start[_ngcontent-%COMP%]{color:#768692;font-size:18px;background:0 0;margin-right:35px}.l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-left[_ngcontent-%COMP%], .l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-right[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#768692;background-size:27px 27px;background-repeat:no-repeat;background-position:center;background-image:url(/local/js/assets/icons/icon-arrow-right-white-thin.svg)}.l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .go-to-left[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);margin-right:25px}.l-news[_ngcontent-%COMP%]   .l-news__navigation[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{opacity:.4}.l-news__item[_ngcontent-%COMP%]{margin-bottom:50px}.m-news-card[_ngcontent-%COMP%]{padding-left:340px;box-sizing:border-box;position:relative;min-height:200px}.m-news-card[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:300px;height:200px;background-repeat:no-repeat;background-position:center;background-size:cover;cursor:pointer}.m-news-card[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]:hover{opacity:.9}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:#050505;margin-bottom:10px;text-transform:uppercase}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:#050505;margin-left:25px}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%], .m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes-on[_ngcontent-%COMP%], .m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]{display:inline-block;background-repeat:no-repeat;background-position:left;padding-left:35px}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]{background-image:url(/local/js/assets/icons/icon-news-eye-black.svg);background-size:27px 15px;margin-right:25px}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{background-image:url(/local/js/assets/icons/icon-news-like-thin.svg);background-size:18px 18px;padding-left:25px;cursor:pointer}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes-on[_ngcontent-%COMP%]{background-image:url(/local/js/assets/icons/icon-like-red-on.svg);background-size:18px 18px;cursor:pointer}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;text-decoration:none;color:#050505;font-weight:700;margin-bottom:15px;font-size:22px;line-height:32px;max-height:64px}@media screen and (max-width:1440px){.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;line-height:28px;max-height:56px}}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover{color:#dd1e25}.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#050505;font-size:16px;line-height:30px;max-height:120px}@media screen and (max-width:1440px){.m-news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;line-height:28px;max-height:112px}}"]],data:{}});function P(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,2,"app-filters-item",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.filterByRubricId(n.context.$implicit.id)&&e),e},u.b,u.a)),e.rb(1,114688,[[1,4]],0,s.a,[r.a],null,null),(n()(),e.Kb(2,0,[" "," "]))],function(n,l){n(l,1,0)},function(n,l){n(l,2,0,l.context.$implicit.title)})}function M(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,26,"div",[["class","l-news__item"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,25,"div",[["class","m-news-card"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,2,"div",[["class","admin-controls"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,1,"app-admin-controls",[],null,[[null,"create"],[null,"edit"],[null,"remove"]],function(n,l,t){var e=!0,i=n.component;return"create"===l&&(e=!1!==i.create()&&e),"edit"===l&&(e=!1!==i.edit(t)&&e),"remove"===l&&(e=!1!==i.remove(t)&&e),e},c.b,c.a)),e.rb(4,114688,null,0,a.a,[g.a,e.l,p.a],{item:[0,"item"]},{create:"create",edit:"edit",remove:"remove"}),(n()(),e.sb(5,0,null,null,4,"div",[["class","thumb"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,8).onClick()&&i),i},null,null)),e.rb(6,278528,null,0,d.n,[e.v,e.l,e.F],{ngStyle:[0,"ngStyle"]},null),e.Fb(7,{"background-image":0}),e.rb(8,16384,null,0,g.n,[g.m,g.a,[8,null],e.F,e.l],{routerLink:[0,"routerLink"]},null),e.Db(9,1),(n()(),e.sb(10,0,null,null,16,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.sb(11,0,null,null,4,"a",[["appNgslDotdotdot",""],["class","title"]],[[1,"target",0],[8,"href",4]],[[null,"click"],["window","resize"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),"window:resize"===l&&(i=!1!==e.Cb(n,14).sizeChange(t)&&i),i},null,null)),e.rb(12,671744,null,0,g.o,[g.m,g.a,d.h],{routerLink:[0,"routerLink"]},null),e.Db(13,1),e.rb(14,344064,null,0,b.a,[e.l,h.a],null,null),(n()(),e.Kb(15,null,["",""])),(n()(),e.sb(16,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),e.Kb(17,null,["",""])),(n()(),e.sb(18,0,null,null,6,"div",[["class","controls"]],null,null,null,null,null)),(n()(),e.sb(19,0,null,null,1,"div",[["class","views"]],null,null,null,null,null)),(n()(),e.Kb(20,null,["",""])),(n()(),e.sb(21,0,null,null,3,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleLike(n.context.$implicit)&&e),e},null,null)),e.rb(22,278528,null,0,d.i,[e.u,e.v,e.l,e.F],{ngClass:[0,"ngClass"]},null),e.Fb(23,{likes:0,"likes-on":1}),(n()(),e.Kb(24,null,["",""])),(n()(),e.sb(25,0,null,null,1,"div",[["appNgslDotdotdot",""],["class","text"]],[[8,"innerHTML",1]],[["window","resize"]],function(n,l,t){var i=!0;return"window:resize"===l&&(i=!1!==e.Cb(n,26).sizeChange(t)&&i),i},null,null)),e.rb(26,344064,null,0,b.a,[e.l,h.a],null,null)],function(n,l){var t=l.component;n(l,4,0,l.context.$implicit),n(l,6,0,n(l,7,0,"url("+t.prepareLink(l.context.$implicit.imageUrl)+")")),n(l,8,0,n(l,9,0,"/news/"+l.context.$implicit.id)),n(l,12,0,n(l,13,0,"/news/"+l.context.$implicit.id)),n(l,14,0),n(l,22,0,n(l,23,0,!t.hasLike(l.context.$implicit),t.hasLike(l.context.$implicit))),n(l,26,0)},function(n,l){n(l,11,0,e.Cb(l,12).target,e.Cb(l,12).href),n(l,15,0,l.context.$implicit.title),n(l,17,0,l.context.$implicit.newsPublicationDateTitle),n(l,20,0,l.context.$implicit.viewsCount),n(l,24,0,l.context.$implicit.likesCount),n(l,25,0,l.context.$implicit.newsBody)})}function y(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,10,"div",[["class","l-page-header"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,7,"div",[["class","l-breadcrumbs"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,4,"div",[["class","l-breadcrumb"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e.rb(4,671744,null,0,g.o,[g.m,g.a,d.h],{routerLink:[0,"routerLink"]},null),e.Db(5,1),(n()(),e.Kb(-1,null,["\u0413\u043b\u0430\u0432\u043d\u0430\u044f"])),(n()(),e.sb(7,0,null,null,1,"div",[["class","l-breadcrumb"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["\u041d\u043e\u0432\u043e\u0441\u0442\u0438"])),(n()(),e.sb(9,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["\u041d\u043e\u0432\u043e\u0441\u0442\u0438"])),(n()(),e.sb(11,0,null,null,18,"div",[["class","l-page"]],null,null,null,null,null)),(n()(),e.sb(12,0,null,null,17,"div",[["class","l-page-inner"]],null,null,null,null,null)),(n()(),e.sb(13,0,null,null,16,"div",[["class","l-page__content"]],null,null,null,null,null)),(n()(),e.sb(14,0,null,null,15,"div",[["class","l-news"]],null,null,null,null,null)),(n()(),e.sb(15,0,null,null,8,"div",[["class","l-new-categories"]],null,null,null,null,null)),(n()(),e.sb(16,0,null,null,7,"app-filters",[],null,null,null,m.b,m.a)),e.rb(17,1228800,null,1,f.a,[r.a],null,null),e.Ib(603979776,1,{filterItems:1}),(n()(),e.sb(19,0,null,0,2,"app-filters-item",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.filterByRubricId()&&e),e},u.b,u.a)),e.rb(20,114688,[[1,4]],0,s.a,[r.a],null,null),(n()(),e.Kb(-1,0,[" \u0412\u0441\u0435 "])),(n()(),e.jb(16777216,null,0,1,null,P)),e.rb(23,278528,null,0,d.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(n()(),e.jb(16777216,null,null,1,null,M)),e.rb(25,278528,null,0,d.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(26,0,null,null,3,"div",[["class","l-news__navigation"]],null,null,null,null,null)),(n()(),e.sb(27,0,null,null,0,"input",[["class","go-to-start"],["type","button"],["value","\u0412 \u043d\u0430\u0447\u0430\u043b\u043e"]],[[2,"disabled",null]],[[null,"click"]],function(n,l,t){var e=!0,i=n.component;return"click"===l&&(e=!1!==(i.hasPrev&&i.filterNews())&&e),e},null,null)),(n()(),e.sb(28,0,null,null,0,"input",[["class","go-to-left"],["type","button"]],[[2,"disabled",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.getPrevNews()&&e),e},null,null)),(n()(),e.sb(29,0,null,null,0,"input",[["class","go-to-right"],["type","button"]],[[2,"disabled",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.getNextNews()&&e),e},null,null))],function(n,l){var t=l.component;n(l,4,0,n(l,5,0,"/company")),n(l,20,0),n(l,23,0,t.rubrics),n(l,25,0,t.news)},function(n,l){var t=l.component;n(l,3,0,e.Cb(l,4).target,e.Cb(l,4).href),n(l,27,0,!t.hasPrev),n(l,28,0,!t.hasPrev),n(l,29,0,!t.hasNext)})}var I=e.ob("app-news-page",_,function(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"app-news-page",[],null,null,null,y,O)),e.rb(1,114688,null,0,_,[C.a,g.a,v.a,w.a,x.a,k.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),S=t("gtQM"),L=t("dhB6"),z=t("78iw"),N=t("roeL"),A=t("ihYY"),K=t("amLo"),F=t("FXjk"),j=function(){function n(){this.items=[]}return n.prototype.ngOnInit=function(){},n.prototype.prepareLink=function(n){return n&&n.replace(/\(/gi,"\\(").replace(/\)/gi,"\\)")||null},n}(),B=e.qb({encapsulation:0,styles:[["#s4-bodyContainer[_ngcontent-%COMP%]{padding:0}@-webkit-keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}@keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}.l-news-card-carousel[_ngcontent-%COMP%]{position:relative}.l-news-card-carousel[_ngcontent-%COMP%]:before{display:block;content:\" \";width:100%;padding-bottom:25%}.l-news-card-carousel[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}.photo[_ngcontent-%COMP%]{height:100%;padding:0;box-sizing:border-box;cursor:pointer}.photo[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.m-news-gallery-popup[_ngcontent-%COMP%]{position:relative}.m-news-gallery-popup[_ngcontent-%COMP%]:before{display:block;content:\" \";width:100%;padding-bottom:71.42857143%}.m-news-gallery-popup[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}.m-news-gallery-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:15px;box-sizing:border-box;background-color:#fff}.m-news-gallery-popup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:14px;color:#fff;font-weight:600;position:absolute;z-index:10;bottom:-50px;height:35px;line-height:35px;display:inline-block;background-color:#000;padding:0 15px;border-radius:15px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.m-news-gallery-popup[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}.m-news-gallery-popup[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;transition:bottom .3s;padding:15px 20px;box-sizing:border-box;height:135px;background:linear-gradient(to bottom,rgba(0,0,0,.01) 0,rgba(46,46,46,.8) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0)}.m-news-gallery-popup[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{position:absolute;right:20px;bottom:15px}.m-news-gallery-popup[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%]{z-index:100}.m-news-gallery-popup[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:400}"]],data:{}});function R(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.sb(1,0,null,null,3,"div",[["class","photo"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n.parent.parent,11).handleToggleGallery(n.parent.context.index,t)&&i),i},null,null)),(n()(),e.sb(2,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),e.rb(3,278528,null,0,d.n,[e.v,e.l,e.F],{ngStyle:[0,"ngStyle"]},null),e.Fb(4,{"background-image":0})],function(n,l){n(l,3,0,n(l,4,0,"url("+l.component.prepareLink(l.parent.context.$implicit)+")"))},null)}function D(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.jb(0,null,null,1,null,R)),e.rb(2,16384,[[1,4]],0,S.a,[e.O],null,null)],null,null)}function $(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,3,"div",[["class","m-albom-popup"],["id","i"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,2,"div",[["class","m-news-gallery-popup"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,0,"div",[["class","photo"]],[[4,"backgroundImage",null]],null,null,null,null))],null,function(n,l){n(l,3,0,"url("+l.parent.context.$implicit+")")})}function G(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.jb(0,null,null,1,null,$)),e.rb(2,16384,[[4,4]],0,L.a,[e.O],null,null)],null,null)}function V(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,14,"div",[["class","l-news-card-carousel"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,13,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,7,"ngsl-carousel",[],null,null,null,z.b,z.a)),e.rb(3,1294336,null,3,N.c,[A.b],{timing:[0,"timing"],dots:[1,"dots"],infinity:[2,"infinity"],perView:[3,"perView"],margin:[4,"margin"]},null),e.Ib(603979776,1,{items:1}),e.Ib(603979776,2,{dotsList:1}),e.Ib(335544320,3,{control:0}),(n()(),e.sb(7,0,null,null,2,"div",[["class","list"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,D)),e.rb(9,278528,null,0,d.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(10,0,null,null,4,"ngsl-gallery",[],null,[["document","click"]],function(n,l,t){var i=!0;return"document:click"===l&&(i=!1!==e.Cb(n,11).onClick(t.target)&&i),i},K.b,K.a)),e.rb(11,1228800,[["ngslGallery",4]],1,F.a,[e.B],null,null),e.Ib(603979776,4,{items:1}),(n()(),e.jb(16777216,null,0,1,null,G)),e.rb(14,278528,null,0,d.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0,600,!1,!1,t.items.length&&t.items.length>3?3:t.items.length,10),n(l,9,0,t.items),n(l,14,0,t.items)},null)}var q=t("/746"),J=t("ifGX"),U=t("IvsF"),X=function(){function n(n,l,t,e,i){this.route=n,this.sidebarService=l,this.newsService=t,this.newsCommentsService=e,this.newsViewsService=i,this.isAdmin=!1,this.sidebarService.handleSetSettings({showSidebar:!1,bgColor:"#fff"})}return n.prototype.ngOnInit=function(){var n=this;this.item=this.route.snapshot.data.newsCard,this.userId=this.route.snapshot.data.userId,this.route.snapshot.data.groups.indexOf(U.a.administrator)>=0&&(this.isAdmin=!0),this.getComments(this.item.id),this.newsViewsService.getItems({filter:"slLookupNews/Id eq "+this.item.id}).subscribe(function(l){l&&l.length>0?(n.item.viewsCount=l[0].count,l[0].userIds.every(function(l){return l!==n.userId})&&n.newsViewsService.addLike({id:l[0].id})):n.newsViewsService.createItem({id:void 0,title:n.item.title,newsLookupId:n.item.id}).subscribe(function(l){return n.newsViewsService.addLike({id:l.id})})})},n.prototype.createComment=function(n){var l=this;this.newsCommentsService.createItem({id:void 0,title:this.item.title,newsLookupId:this.item.id,comment:n}).subscribe(function(){return l.getComments(l.item.id)})},n.prototype.editComment=function(n){var l=this;this.newsCommentsService.updateItem({id:n[0],title:this.item.title,newsLookupId:this.item.id,comment:n[1]}).subscribe(function(){return l.getComments(l.item.id)})},n.prototype.deleteComment=function(n){var l=this;this.newsCommentsService.deleteItem({id:n,title:""}).subscribe(function(){return l.getComments(l.item.id)})},n.prototype.getComments=function(n){var l=this;this.newsCommentsService.getItems({filter:"slLookupNews/Id eq "+this.item.id}).subscribe(function(n){return l.comments=n})},n.prototype.toggleLike=function(){var n=this;this.item.likedByIds.indexOf(this.userId)>=0?(this.newsService.removeLike({id:this.item.id}).subscribe(),this.item.likesCount--,this.item.likedByIds=this.item.likedByIds.filter(function(l){return l!==n.userId})):(this.newsService.addLike({id:this.item.id}).subscribe(),this.item.likesCount++,this.item.likedByIds.push(this.userId))},n.prototype.hasLike=function(){return this.item.likedByIds.indexOf(this.userId)>=0},n.prototype.prepareLink=function(n){return n&&n.replace(/\(/gi,"\\(").replace(/\)/gi,"\\)")||null},n}(),Q=e.qb({encapsulation:0,styles:[['#s4-bodyContainer[_ngcontent-%COMP%]{padding:0}@-webkit-keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}@keyframes shine-avatar{0%{background-position:-30px}100%,40%{background-position:210px}}.l-breadcrumb[_ngcontent-%COMP%]:last-child{max-width:450px;max-height:16px}.l-news-card[_ngcontent-%COMP%]{max-width:1065px;padding-left:25px;padding-top:0;box-sizing:border-box}.photo[_ngcontent-%COMP%]{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover;width:350px;height:230px;position:relative;vertical-align:top}.body[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - 350px);padding-right:30px;box-sizing:border-box}.description[_ngcontent-%COMP%]{min-height:250px}.description[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-bottom:35px;color:#050505;font-size:14px;line-height:34px}@media (min-width:1440px){.description[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:calc(.00833333 * 100vw + 2px);line-height:calc(.00833333 * 100vw + 14px)}}@media (min-width:1920px){.description[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:18px;line-height:30px}}.description[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:16px;font-family:Arial,Helvetica,sans-serif;margin-bottom:15px;display:inline-block;text-transform:uppercase;color:#050505}.description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:inline-block}.description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes-on[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]{display:inline-block;background-size:25px 16px;background-repeat:no-repeat;background-position:left;padding-left:35px;font-size:16px;color:#000;margin-left:25px}.description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]{background-image:url(/local/js/assets/icons/icon-news-eye.svg)}.description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{background-image:url(/local/js/assets/icons/icon-news-like-thin.svg);cursor:pointer}.description[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .likes-on[_ngcontent-%COMP%]{background-image:url(/local/js/assets/icons/icon-news-like-on.svg);cursor:pointer}.gallery[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;margin-bottom:20px}.gallery[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before{position:absolute;content:"";display:block;left:130px;right:0;bottom:0;height:1px;background-color:#b7bab7}.gallery[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;line-height:18px;color:#050505;font-weight:600}.button[_ngcontent-%COMP%]{margin:30px 0}']],data:{}});function T(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,2,"div",[["class","carousel"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"app-news-card-gallery",[],null,null,null,V,B)),e.rb(2,114688,null,0,j,[],{items:[0,"items"]},null)],function(n,l){n(l,2,0,l.component.item.attachmentFiles)},null)}function Y(n){return e.Mb(0,[e.Eb(0,d.d,[e.w]),(n()(),e.sb(1,0,null,null,16,"div",[["class","l-page-header"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,13,"div",[["class","l-breadcrumbs"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,4,"div",[["class","l-breadcrumb"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e.rb(5,671744,null,0,g.o,[g.m,g.a,d.h],{routerLink:[0,"routerLink"]},null),e.Db(6,1),(n()(),e.Kb(-1,null,["\u0413\u043b\u0430\u0432\u043d\u0430\u044f"])),(n()(),e.sb(8,0,null,null,4,"div",[["class","l-breadcrumb"]],null,null,null,null,null)),(n()(),e.sb(9,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e.rb(10,671744,null,0,g.o,[g.m,g.a,d.h],{routerLink:[0,"routerLink"]},null),e.Db(11,1),(n()(),e.Kb(-1,null,["\u041d\u043e\u0432\u043e\u0441\u0442\u0438"])),(n()(),e.sb(13,0,null,null,2,"div",[["appNgslDotdotdot",""],["class","l-breadcrumb"]],null,[["window","resize"]],function(n,l,t){var i=!0;return"window:resize"===l&&(i=!1!==e.Cb(n,14).sizeChange(t)&&i),i},null,null)),e.rb(14,344064,null,0,b.a,[e.l,h.a],null,null),(n()(),e.Kb(15,null,["",""])),(n()(),e.sb(16,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.Kb(17,null,["",""])),(n()(),e.sb(18,0,null,null,33,"div",[["class","l-page"]],null,null,null,null,null)),(n()(),e.sb(19,0,null,null,30,"div",[["class","l-page-inner"]],null,null,null,null,null)),(n()(),e.sb(20,0,null,null,29,"div",[["class","l-page__content"]],null,null,null,null,null)),(n()(),e.sb(21,0,null,null,28,"div",[["class","l-news-card"]],null,null,null,null,null)),(n()(),e.sb(22,0,null,null,12,"div",[["class","body"]],null,null,null,null,null)),(n()(),e.sb(23,0,null,null,11,"div",[["class","description"]],null,null,null,null,null)),(n()(),e.sb(24,0,null,null,2,"div",[["class","date"]],null,null,null,null,null)),(n()(),e.Kb(25,null,[" "," "])),e.Gb(26,2),(n()(),e.sb(27,0,null,null,6,"div",[["class","controls"]],null,null,null,null,null)),(n()(),e.sb(28,0,null,null,1,"div",[["class","views"]],null,null,null,null,null)),(n()(),e.Kb(29,null,["",""])),(n()(),e.sb(30,0,null,null,3,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleLike()&&e),e},null,null)),e.rb(31,278528,null,0,d.i,[e.u,e.v,e.l,e.F],{ngClass:[0,"ngClass"]},null),e.Fb(32,{likes:0,"likes-on":1}),(n()(),e.Kb(33,null,["",""])),(n()(),e.sb(34,0,null,null,0,"div",[["class","text"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.sb(35,0,null,null,2,"div",[["class","photo"]],null,null,null,null,null)),e.rb(36,278528,null,0,d.n,[e.v,e.l,e.F],{ngStyle:[0,"ngStyle"]},null),e.Fb(37,{"background-image":0}),(n()(),e.sb(38,0,null,null,5,"div",[["class","gallery"]],null,null,null,null,null)),(n()(),e.sb(39,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.sb(40,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["\u0413\u0430\u043b\u0435\u0440\u0435\u044f"])),(n()(),e.jb(16777216,null,null,1,null,T)),e.rb(43,16384,null,0,d.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(44,0,null,null,5,"div",[["class","button"]],null,null,null,null,null)),(n()(),e.sb(45,0,null,null,4,"a",[["class","btn btn-to-back"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,46).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e.rb(46,671744,null,0,g.o,[g.m,g.a,d.h],{routerLink:[0,"routerLink"]},null),e.Db(47,1),(n()(),e.sb(48,0,null,null,0,"i",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" \u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 "])),(n()(),e.sb(50,0,null,null,1,"app-button-up",[],null,null,null,q.b,q.a)),e.rb(51,245760,null,0,J.a,[d.c],null,null)],function(n,l){var t=l.component;n(l,5,0,n(l,6,0,"/company")),n(l,10,0,n(l,11,0,"/news")),n(l,14,0),n(l,31,0,n(l,32,0,!t.hasLike(),t.hasLike())),n(l,36,0,n(l,37,0,"url("+t.prepareLink(t.item.imageUrl)+")")),n(l,43,0,t.item.attachmentFiles.length>0),n(l,46,0,n(l,47,0,"/news")),n(l,51,0)},function(n,l){var t=l.component;n(l,4,0,e.Cb(l,5).target,e.Cb(l,5).href),n(l,9,0,e.Cb(l,10).target,e.Cb(l,10).href),n(l,15,0,t.item.title),n(l,17,0,t.item.title),n(l,25,0,e.Lb(l,25,0,n(l,26,0,e.Cb(l,0),t.item.newsPublicationDate,"dd.MM.yyyy"))),n(l,29,0,t.item.viewsCount||0),n(l,33,0,t.item.likesCount),n(l,34,0,t.item.newsBody),n(l,45,0,e.Cb(l,46).target,e.Cb(l,46).href)})}var E=e.ob("app-news-card-page",X,function(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"app-news-card-page",[],null,null,null,Y,Q)),e.rb(1,114688,null,0,X,[g.a,v.a,C.a,x.a,w.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),H=function(){function n(n){this.newsService=n}return n.prototype.resolve=function(n,l){return this.newsService.getItemsPaged({filter:"slNewsPublicationDate le datetime'"+(new Date).toISOString()+"'"})},n}(),W=t("LFNs"),Z=function(){function n(n){this.newsRubricsService=n}return n.prototype.resolve=function(n,l){return this.newsRubricsService.getItems()},n}(),nn=t("+NRz"),ln=t("ObQA"),tn=function(){function n(n){this.newsService=n}return n.prototype.resolve=function(n,l){return this.newsService.getItem({id:n.params.id})},n}(),en=t("gIcY"),on={animation:"fadeAnimation",title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},un={animation:"fadeAnimation",title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},sn=function(){},rn=t("PCNd");t.d(l,"NewsModuleNgFactory",function(){return cn});var cn=e.pb(i,[],function(n){return e.zb([e.Ab(512,e.k,e.eb,[[8,[o.a,I,E]],[3,e.k],e.z]),e.Ab(4608,d.m,d.l,[e.w,[2,d.y]]),e.Ab(4608,H,H,[C.a]),e.Ab(4608,Z,Z,[W.a]),e.Ab(4608,nn.a,nn.a,[k.a]),e.Ab(4608,ln.a,ln.a,[p.a]),e.Ab(4608,tn,tn,[C.a]),e.Ab(4608,en.p,en.p,[]),e.Ab(1073742336,d.b,d.b,[]),e.Ab(1073742336,g.p,g.p,[[2,g.v],[2,g.m]]),e.Ab(1073742336,sn,sn,[]),e.Ab(1073742336,en.n,en.n,[]),e.Ab(1073742336,en.d,en.d,[]),e.Ab(1073742336,rn.a,rn.a,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,g.k,function(){return[[{path:"",component:_,resolve:{news:H,newsRubrics:Z,userId:nn.a},data:on},{path:":id",component:X,resolve:{newsCard:tn,userId:nn.a,groups:ln.a},data:un}]]},[])])})},cuj7:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("xhmP"),t("PbJ5");var e=function(){function n(n){this.filterService=n,this.height="100%",this.reset=null,this.resetSubscription=null}return n.prototype.resetActiveItems=function(){this.filterItems.toArray().forEach(function(n){n.active=!1})},n.prototype.ngAfterContentInit=function(){var n=this;this.filterService.changeActiveItem.subscribe(function(){n.resetActiveItems()}),0===this.filterItems.filter(function(n){return!0===n.active}).length&&(this.filterItems.first.active=!0),this.reset&&(this.resetSubscription=this.reset.subscribe(function(){n.filterItems.forEach(function(n){n.active=!1}),n.filterItems.first.active=!0}))},n.prototype.ngOnDestroy=function(){null!=this.resetSubscription&&this.resetSubscription.unsubscribe()},n}()},nAuW:function(n,l,t){"use strict";var e=t("CcnG");t("cuj7"),t("PbJ5"),t.d(l,"a",function(){return i}),t.d(l,"b",function(){return o});var i=e.qb({encapsulation:0,styles:[[".sl-filters[_ngcontent-%COMP%]{height:100%;font-size:0}"]],data:{}});function o(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"div",[["class","sl-filters"]],[[4,"height",null]],null,null,null,null)),e.Bb(null,0)],null,function(n,l){n(l,0,0,l.component.height)})}},vQGG:function(n,l,t){"use strict";var e=t("CcnG");t("xhmP"),t("PbJ5"),t.d(l,"a",function(){return i}),t.d(l,"b",function(){return o});var i=e.qb({encapsulation:0,styles:[[".sl-filters__item[_ngcontent-%COMP%]{height:100%;display:inline-block;font-size:16px;color:#768692;padding:0 10px;border:none;border-bottom:2px solid transparent;box-sizing:border-box;margin:0 20px 0 0;background-color:transparent;cursor:pointer}.sl-filters__item.is-current-item[_ngcontent-%COMP%]{color:#000;border-color:#da402b}.sl-filters__item[_ngcontent-%COMP%]:focus{outline:0}"]],data:{}});function o(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"div",[["class","sl-filters__item"]],[[2,"is-current-item",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectItem()&&e),e},null,null)),e.Bb(null,0)],null,function(n,l){n(l,0,0,l.component.active)})}},xhmP:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("CcnG"),i=(t("PbJ5"),function(){function n(n){this.filterService=n,this.active=!1,this.change=new e.n}return n.prototype.selectItem=function(){this.filterService.handleChangeActiveItem(),this.active=!0,this.change.emit()},n.prototype.ngOnInit=function(){},n}())}}]);