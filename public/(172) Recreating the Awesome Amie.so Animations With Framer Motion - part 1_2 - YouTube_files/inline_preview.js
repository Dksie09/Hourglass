(function(g){var window=this;'use strict';var nsb=function(a){g.V.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.C=!1;this.player=a;this.T(a,"onStateChange",this.d2);this.T(a,"videodatachange",this.e2);this.T(a,"onInlinePreviewModeChange",this.O7);this.B=new g.av(this.Z1,null,this);g.M(this,this.B)},J6=function(a){g.YV.call(this,a);
this.j=new nsb(this.player);g.M(this,this.j);this.j.hide();g.KU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.lv(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(nsb,g.V);g.k=nsb.prototype;
g.k.show=function(){g.bv(this.B);if(!this.C){this.tooltip=new g.jY(this.player,this);g.M(this,this.tooltip);g.KU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Td=new g.BW(this.player);g.M(this,this.Td);this.j=new g.V({I:"div",Ma:["ytp-inline-preview-scrim"]});g.M(this,this.j);this.j.Ja(this.element);this.T(this.j.element,"click",this.b2);this.D=new g.cY(this.player,this,300);g.M(this,this.D);this.D.Ja(this.j.element);this.controls=new g.V({I:"div",S:"ytp-inline-preview-controls"});g.M(this,
this.controls);this.controls.Ja(this.element);var a=new g.vX(this.player,this,!1);g.M(this,a);a.Ja(this.controls.element);a=new g.aY(this.player,this);g.M(this,a);a.Ja(this.controls.element);this.progressBar=new g.CX(this.player,this);g.M(this,this.progressBar);g.KU(this.player,this.progressBar.element,4);this.T(this.player,"appresize",this.Yb);this.T(this.player,"fullscreentoggled",this.Yb);this.Yb();this.C=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.progressBar.show();
this.player.ib("onInlinePreviewUiReady")};
g.k.hide=function(){this.B.stop();g.V.prototype.hide.call(this);this.player.isInline()||this.C&&this.progressBar.hide()};
g.k.xa=function(){g.V.prototype.xa.call(this)};
g.k.b2=function(a){a.target===this.j.element&&this.player.ib("onExpandInlinePreview",a)};
g.k.O7=function(){g.ov(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Wf=function(){this.progressBar.Mc();this.D.Mc()};
g.k.Z1=function(){this.Wf();g.bv(this.B)};
g.k.Yb=function(){g.Q_a(this.progressBar,0,this.player.rb().getPlayerSize().width,!1);g.DX(this.progressBar)};
g.k.d2=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.e2=function(a,b){if(this.player.isInline()){g.ov(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.YB);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.ov(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Ne=function(){return this.tooltip};
g.k.Lt=function(a,b,c,d,e){var f=d=0,h=0,l=g.Ds(a);if(b){c=g.jv(b,"ytp-mute-button");var m=g.jv(b,"ytp-subtitles-button"),n=g.Bs(b,this.element);b=g.Ds(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.rb().getPlayerSize().width;h=g.xe(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};g.w(J6,g.YV);J6.prototype.rl=function(){return!1};
J6.prototype.load=function(){this.player.hideControls();this.j.show()};
J6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.XV("inline_preview",J6);})(_yt_player);
