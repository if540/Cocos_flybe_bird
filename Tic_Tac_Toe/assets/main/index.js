System.register("chunks:///_virtual/main.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,i,o,a,r,s,l,c,u,p,y;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Node,l=t.AudioSource,c=t.tween,u=t.Vec3,p=t.director,y=t.Component}],execute:function(){var h,b,f,d,g,P,A;a._RF.push({},"2adccjftSxNjozAnRaBJSQV","main",void 0);var T=r.ccclass,W=r.property;t("main",(h=T("main"),b=W(s),f=W(s),h((P=n((g=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return n=t.call.apply(t,[this].concat(a))||this,i(o(n),"btnPlayWithAI",P,o(n)),i(o(n),"btnPlayWithFriend",A,o(n)),n}return e(n,t),n.prototype.start=function(){var t=this;this.btnPlayWithFriend.on(s.EventType.TOUCH_START,(function(n){t.getComponents(l)[1].play();var e=t.btnPlayWithFriend.getPosition(),i=.03;c(t.btnPlayWithFriend).to(i,{position:new u(e.x+2,e.y,e.z)},{easing:"elasticOut"}).to(i,{position:new u(e.x+-2,e.y,e.z)},{easing:"elasticOut"}).to(i,{position:e},{easing:"elasticOut"}).start()})),this.btnPlayWithAI.on(s.EventType.TOUCH_CANCEL,(function(n){console.log("CANCEL"),c(t.btnPlayWithAI).to(.05,{scale:new u(1,1,1)},{easing:"elasticOut"}).start(),t.scheduleOnce((function(){p.loadScene("choses")}),.1)})),this.btnPlayWithAI.on(s.EventType.TOUCH_START,(function(n){t.getComponents(l)[0].play(),console.log("start"),c(t.btnPlayWithAI).to(.05,{scale:new u(.7,.7,.7)},{easing:"elasticOut"}).start()})),this.btnPlayWithAI.on(s.EventType.TOUCH_END,(function(n){console.log("end"),c(t.btnPlayWithAI).to(.05,{scale:new u(1,1,1)},{easing:"elasticOut"}).start(),t.scheduleOnce((function(){p.loadScene("choses")}),.1)}))},n}(y)).prototype,"btnPlayWithAI",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=n(g.prototype,"btnPlayWithFriend",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=g))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/choses.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts","./game_mgr.ts"],(function(e){"use strict";var t,n,i,o,a,r,l,s,c,u,p,S,f,g,d,h,_;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,a=e.defineProperty},function(e){r=e.cclegacy,l=e._decorator,s=e.Node,c=e.SpriteFrame,u=e.AudioSource,p=e.tween,S=e.Vec3,f=e.director,g=e.Sprite,d=e.Component},function(e){h=e.RoleState},function(e){_=e.GameMgr}],execute:function(){var R,O,b,y,m,T,v,C,X,w,E,N,H,z,M,U,A;r._RF.push({},"53fa8w3QLZEibIy6y2uiq7X","choses",void 0);var F=l.ccclass,L=l.property;e("choses",(R=F("choses"),O=L(s),b=L(s),y=L(s),m=L(c),T=L(c),v=L(c),C=L(s),R((E=t((w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,i(o(t),"btnStart",E,o(t)),i(o(t),"radioO",N,o(t)),i(o(t),"radioX",H,o(t)),i(o(t),"radioNSpf",z,o(t)),i(o(t),"radioOSpf",M,o(t)),i(o(t),"radioXSpf",U,o(t)),i(o(t),"loading",A,o(t)),a(o(t),"_chosesRoleState",null),a(o(t),"_gameMgr",null),t}n(t,e);var r=t.prototype;return r.onLoad=function(){var e=this;this._gameMgr=_.GetInstance(),this.loading.active=!1,this._chosesRoleState=this._gameMgr.selfRoleState,this.radioO.on(s.EventType.TOUCH_START,(function(t){e.getComponent(u).play(),p(e.radioO).to(.3,{scale:new S(.9,.9,.9)},{easing:"elasticOut"}).start()})),this.radioO.on(s.EventType.TOUCH_END,(function(t){e.onScaleReset(e.radioO),e._gameMgr.toggleRoleState(h.RS_O),e._chosesRoleState=h.RS_O})),this.radioO.on(s.EventType.TOUCH_CANCEL,(function(t){e.onScaleReset(e.radioO),e._gameMgr.toggleRoleState(h.RS_O),e._chosesRoleState=h.RS_O})),this.radioX.on(s.EventType.TOUCH_START,(function(t){e.getComponent(u).play(),p(e.radioX).to(.3,{scale:new S(.9,.9,.9)},{easing:"elasticOut"}).start()})),this.radioX.on(s.EventType.TOUCH_END,(function(t){e._gameMgr.toggleRoleState(h.RS_X),e._chosesRoleState=h.RS_X,e.onScaleReset(e.radioX)})),this.radioX.on(s.EventType.TOUCH_CANCEL,(function(t){e._gameMgr.toggleRoleState(h.RS_X),e._chosesRoleState=h.RS_X,e.onScaleReset(e.radioX)})),this.btnStart.on(s.EventType.TOUCH_START,(function(t){e.getComponent(u).play(),p(e.btnStart).to(.05,{scale:new S(.7,.7,.7)},{easing:"elasticOut"}).start()})),this.btnStart.on(s.EventType.TOUCH_END,(function(t){e.loading.active=!0,p(e.btnStart).to(.05,{scale:new S(1,1,1)},{easing:"elasticOut"}).start(),e.scheduleOnce((function(){f.loadScene("play")}),.1)})),this.btnStart.on(s.EventType.TOUCH_CANCEL,(function(t){e.loading.active=!0,p(e.btnStart).to(.05,{scale:new S(1,1,1)},{easing:"elasticOut"}).start(),e.scheduleOnce((function(){f.loadScene("play")}),.1)}))},r.onScaleReset=function(e){p(e).to(.3,{scale:new S(1,1,1)},{easing:"elasticOut"}).start()},r.start=function(){},r.updateRoleState=function(){var e=this.radioO.children[1].getComponent(g),t=this.radioX.children[1].getComponent(g);this._chosesRoleState==h.RS_O?(e.spriteFrame=this.radioOSpf,t.spriteFrame=this.radioNSpf):this._chosesRoleState==h.RS_X&&(e.spriteFrame=this.radioNSpf,t.spriteFrame=this.radioXSpf)},r.update=function(){this.updateRoleState()},t}(d)).prototype,"btnStart",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=t(w.prototype,"radioO",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(w.prototype,"radioX",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(w.prototype,"radioNSpf",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(w.prototype,"radioOSpf",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(w.prototype,"radioXSpf",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(w.prototype,"loading",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=w))||X));r._RF.pop()}}}));

System.register("chunks:///_virtual/global.ts",["cc"],(function(t){"use strict";var o;return{setters:[function(t){o=t.cclegacy}],execute:function(){var e,c,n;t({Role:void 0,RoleState:void 0,StateColor:void 0}),o._RF.push({},"553cbUOpyZCDqf0hrGx3lC7","global",void 0),function(t){t[t.RS_NULL=0]="RS_NULL",t[t.RS_O=1]="RS_O",t[t.RS_X=2]="RS_X"}(e||(e=t("RoleState",{}))),function(t){t[t.AI=0]="AI",t[t.SELF=1]="SELF"}(c||(c=t("Role",{}))),function(t){t.O="#FF4F4F",t.X="#2C8DFF"}(n||(n=t("StateColor",{}))),o._RF.pop()}}}));

System.register("chunks:///_virtual/play.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts","./piece.ts","./game_mgr.ts","./myDialg.ts"],(function(e){"use strict";var t,n,i,r,a,l,o,s,p,u,c,_,y,m,g,f,h,b,I,S,d,C,E;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.defineProperty,r=e.assertThisInitialized,a=e.initializerDefineProperty},function(e){l=e.cclegacy,o=e._decorator,s=e.SpriteFrame,p=e.Node,u=e.Sprite,c=e.Label,_=e.AudioSource,y=e.Color,m=e.tween,g=e.Vec3,f=e.director,h=e.UIOpacity,b=e.Component},function(e){I=e.RoleState,S=e.Role},function(e){d=e.piece},function(e){C=e.GameMgr},function(e){E=e.myDialg}],execute:function(){var w,v,T,O,x,A,D,R,z,F,L,U,H,N,P,G,k,B,j,M,V,W,X,q,J,K,Q,Z,Y,$,ee;l._RF.push({},"5f46fEZnoVAyqjnyTuQd0JK","play",void 0);var te=o.ccclass,ne=o.property;e("play",(w=te("play"),v=ne({type:s}),T=ne({type:s}),O=ne({type:s}),x=ne({type:s}),A=ne({type:p}),D=ne({group:{name:"AI"},type:u}),R=ne({group:{name:"AI"},type:c}),z=ne({group:{name:"AI"},type:p}),F=ne({group:{name:"SELF"},type:u}),L=ne({group:{name:"SELF"},type:c}),U=ne({group:{name:"SELF"},type:p}),H=ne(p),N=ne(p),P=ne(E),w((B=t((k=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return t=e.call.apply(e,[this].concat(l))||this,i(r(t),"_gameIns",null),a(r(t),"rs_o",B,r(t)),a(r(t),"rs_x",j,r(t)),a(r(t),"rs_o_line",M,r(t)),a(r(t),"rs_x_line",V,r(t)),a(r(t),"panel",W,r(t)),a(r(t),"player_ai_icon",X,r(t)),a(r(t),"player_ai_score",q,r(t)),a(r(t),"player_ai_line",J,r(t)),a(r(t),"player_self_icon",K,r(t)),a(r(t),"player_self_score",Q,r(t)),a(r(t),"player_self_line",Z,r(t)),a(r(t),"btnRest",Y,r(t)),a(r(t),"btnExit",$,r(t)),a(r(t),"myDialog",ee,r(t)),i(r(t),"_pieces",[]),i(r(t),"_gameStart",!1),i(r(t),"_btnAudioClick",null),t}n(t,e);var l=t.prototype;return l.onLoad=function(){var e=this;this._gameIns=C.GetInstance(),this._gameIns.initial(),this._btnAudioClick=this.getComponent(_),this.player_ai_icon.spriteFrame=this._gameIns.playerAI.roleState==I.RS_O?this.rs_o:this.rs_x,y.fromHEX(this.player_ai_score.color,this._gameIns.playerAI.color),this.player_self_icon.spriteFrame=this._gameIns.playerSelf.roleState==I.RS_O?this.rs_o:this.rs_x,y.fromHEX(this.player_self_score.color,this._gameIns.playerSelf.color),this.player_ai_line.getComponent(u).spriteFrame=this._gameIns.playerAI.roleState==I.RS_O?this.rs_o_line:this.rs_x_line,this.player_self_line.getComponent(u).spriteFrame=this._gameIns.playerSelf.roleState==I.RS_O?this.rs_o_line:this.rs_x_line,this.myDialog.myDisable(),this._gameIns.myDialog=this.myDialog,this._pieces=this.panel.children,this._gameIns.setPieces=this._pieces,this._pieces.forEach((function(t,n){t.on(p.EventType.TOUCH_END,(function(i){var r=t.getComponent(d);if(!e._gameStart)return console.log("遊戲未開始，無法操作"),void r.stop();if(e._gameIns.currentPlayer.role!==S.SELF)return console.log("換 AI 下"),void r.stop();var a=e._gameIns.currentPlayer;e._gameIns.setGameData(n,a)}))})),this.btnRest.on(p.EventType.TOUCH_START,(function(t){e._btnAudioClick.play(),m(e.btnRest).to(.05,{scale:new g(.7,.7,.7)},{easing:"elasticOut"}).start()})),this.btnRest.on(p.EventType.TOUCH_CANCEL,(function(t){e._gameIns.reset(),m(e.btnRest).to(.05,{scale:new g(1,1,1)},{easing:"elasticOut"}).start()})),this.btnRest.on(p.EventType.TOUCH_END,(function(t){e._gameIns.reset(),m(e.btnRest).to(.05,{scale:new g(1,1,1)},{easing:"elasticOut"}).start()})),this.btnExit.on(p.EventType.TOUCH_START,(function(t){e._btnAudioClick.play(),m(e.btnExit).to(.05,{scale:new g(.7,.7,.7)},{easing:"elasticOut"}).start()})),this.btnExit.on(p.EventType.TOUCH_CANCEL,(function(t){e._gameIns.exit(),m(e.btnExit).to(.05,{scale:new g(1,1,1)},{easing:"elasticOut"}).start(),e.scheduleOnce((function(){f.loadScene("main")}),.2)})),this.btnExit.on(p.EventType.TOUCH_END,(function(t){e._gameIns.exit(),m(e.btnExit).to(.05,{scale:new g(1,1,1)},{easing:"elasticOut"}).start(),e.scheduleOnce((function(){f.loadScene("main")}),.2)}))},l.start=function(){},l.updateWhoTurnUI=function(){if(null!=this._gameIns.currentPlayer){var e=this._gameIns.currentPlayer.role==S.AI?this.player_ai_line.getComponent(h):this.player_self_line.getComponent(h),t=this._gameIns.currentPlayer.role==S.AI?this.player_self_line.getComponent(h):this.player_ai_line.getComponent(h);e.opacity=255,t.opacity=0}},l.updateGameState=function(){this._gameStart=this._gameIns.gameStart},l.updateScore=function(){this.player_ai_score.string=this._gameIns.aiScore,this.player_self_score.string=this._gameIns.selfScore},l.updateDrawGameData=function(){var e=this;C.GetInstance().gameData.forEach((function(t,n){var i=e._pieces[n];t==I.RS_NULL?i.getChildByName("pieceSprite").getComponent(u).spriteFrame=null:i.getChildByName("pieceSprite").getComponent(u).spriteFrame=t==I.RS_O?e.rs_o:e.rs_x,i.active=!0}))},l.update=function(e){this.updateGameState(),this.updateScore(),this.updateDrawGameData(),this.updateWhoTurnUI()},t}(b)).prototype,"rs_o",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(k.prototype,"rs_x",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(k.prototype,"rs_o_line",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(k.prototype,"rs_x_line",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=t(k.prototype,"panel",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(k.prototype,"player_ai_icon",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(k.prototype,"player_ai_score",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(k.prototype,"player_ai_line",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(k.prototype,"player_self_icon",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(k.prototype,"player_self_score",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(k.prototype,"player_self_line",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(k.prototype,"btnRest",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(k.prototype,"btnExit",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(k.prototype,"myDialog",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=k))||G));l._RF.pop()}}}));

System.register("chunks:///_virtual/myDialg.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts","./game_mgr.ts"],(function(i){"use strict";var t,e,n,o,a,l,s,r,u,c,g,d,h,p,f;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized,a=i.defineProperty},function(i){l=i.cclegacy,s=i._decorator,r=i.Node,u=i.AudioClip,c=i.AudioSource,g=i.tween,d=i.Vec3,h=i.Component},function(i){p=i.Role},function(i){f=i.GameMgr}],execute:function(){var v,y,b,w,m,A,_,D,B,z,C,E,L;l._RF.push({},"6554aEvZnBBp6HnmhiqAdvb","myDialg",void 0);var S=s.ccclass,F=s.property;i("myDialg",(v=S("myDialg"),y=F(r),b=F(r),w=F(r),m=F(r),A=F(u),v((B=t((D=function(i){function t(){for(var t,e=arguments.length,l=new Array(e),s=0;s<e;s++)l[s]=arguments[s];return t=i.call.apply(i,[this].concat(l))||this,n(o(t),"btnContinue",B,o(t)),n(o(t),"win",z,o(t)),n(o(t),"tie",C,o(t)),n(o(t),"loss",E,o(t)),n(o(t),"dialogAudios",L,o(t)),a(o(t),"_dialogAudioBg",null),t}e(t,i);var l=t.prototype;return l.onLoad=function(){this._dialogAudioBg=this.getComponent(c)},l.start=function(){var i=this;this.btnContinue.on(r.EventType.TOUCH_END,(function(t){i.hideDialog()}))},l.hideDialog=function(){this._dialogAudioBg.playing&&this._dialogAudioBg.stop(),this.loss.active=!1,this.win.active=!1,this.tie.active=!1,this.node.active=!1,f.GetInstance().reset();g(this.node).to(1,{scale:new d(0,0,0)},{easing:"elasticOut"}).start()},l.stop=function(){this._dialogAudioBg.stop()},l.play=function(){this._dialogAudioBg.play()},l.showDialog=function(i){this.node.active=!0,i==p.SELF?(this._dialogAudioBg.clip=this.dialogAudios[0],this.play(),this.loss.active=!1,this.win.active=!0,this.tie.active=!1):i==p.AI?(this._dialogAudioBg.clip=this.dialogAudios[1],this.play(),this.loss.active=!0,this.win.active=!1,this.tie.active=!1):null==i&&(this.loss.active=!1,this.win.active=!1,this.tie.active=!0);g(this.node).to(0,{scale:new d(0,0,0)}).to(1,{scale:new d(1,1,1)},{easing:"elasticOut"}).start()},l.myDisable=function(){this.node.active=!1,this.node.setScale(new d(0,0,0))},t}(h)).prototype,"btnContinue",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(D.prototype,"win",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(D.prototype,"tie",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(D.prototype,"loss",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(D.prototype,"dialogAudios",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=D))||_));l._RF.pop()}}}));

System.register("chunks:///_virtual/piece.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts"],(function(t){"use strict";var i,e,n,o,s,a,c,p,l,r,u,h;return{setters:[function(t){i=t.inheritsLoose,e=t.defineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,a=t.AudioSource,c=t.Animation,p=t.ParticleSystem2D,l=t.tween,r=t.Vec3,u=t.Component},function(t){h=t.RoleState}],execute:function(){var _;o._RF.push({},"a045f9/WJhN6YboFB7aHE73","piece",void 0);var d=s.ccclass;s.property,t("piece",d("piece")(_=function(t){function o(){for(var i,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return i=t.call.apply(t,[this].concat(s))||this,e(n(i),"_roleState",h.RS_NULL),e(n(i),"_audioPick",null),e(n(i),"_audioStop",null),e(n(i),"_spAnimation",null),i}i(o,t);var s=o.prototype;return s.onLoad=function(){var t=this.getComponents(a);this._audioPick=t[0],this._audioStop=t[1],this._spAnimation=this.getComponentInChildren(c)},s.hotLine=function(){this.node.getChildByName("ParticleStar").getComponent(p).resetSystem(),this.playAnimation()},s.stopLine=function(){this.node.getChildByName("ParticleStar").getComponent(p).stopSystem(),this.stopAnimation()},s.playAnimation=function(){this._spAnimation.stop();var t=this._roleState==h.RS_O?"piece_blink_red":"piece_blink_blue";this._spAnimation.play(t)},s.stopAnimation=function(){this._spAnimation.stop(),this._spAnimation.play("piece_idle")},s.stop=function(){this._audioStop.play();var t=this.node.getPosition(),i=.03;l(this.node).to(i,{position:new r(t.x+2,t.y,t.z)},{easing:"elasticOut"}).to(i,{position:new r(t.x+-2,t.y,t.z)},{easing:"elasticOut"}).to(i,{position:t},{easing:"elasticOut"}).start()},s.pick=function(t){this._roleState=t,this._audioPick.play();this.node.getChildByName("ParticleExplosion").getComponent(p).resetSystem(),l(this.node).to(0,{scale:new r(0,0,0)}).to(1,{scale:new r(1,1,1)},{easing:"elasticOut"}).start()},o}(u))||_);o._RF.pop()}}}));

System.register("chunks:///_virtual/game_mgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts","./piece.ts","./Player.ts"],(function(e){"use strict";var t,r,n,a,o,i,l,s,_,c;return{setters:[function(e){t=e.inheritsLoose,r=e.createClass,n=e.defineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,i=e.Component},function(e){l=e.RoleState,s=e.Role},function(e){_=e.piece},function(e){c=e.Player}],execute:function(){o._RF.push({},"c7b6bZTr2tKDYKHojUJ6Kpn","game_mgr",void 0);var u=e("GameMgr",function(e){function o(){for(var t,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,n(a(t),"_game_data",[l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL]),n(a(t),"_ai_score",0),n(a(t),"_self_score",0),n(a(t),"_roleAIState",l.RS_O),n(a(t),"_roleSelfState",l.RS_X),n(a(t),"_playerSelf",null),n(a(t),"_playerAI",null),n(a(t),"_currentPlayer",null),n(a(t),"_prePlayer",null),n(a(t),"_gameStart",!1),n(a(t),"_pieces",[]),n(a(t),"myDialog",null),t}t(o,e),o.GetInstance=function(){return null==o.instance&&(o.instance=new o),o.instance};var i=o.prototype;return i.initial=function(){this.initialPlayer(),this._gameStart=!0},i.initialPlayer=function(){this._playerSelf=new c(!1,this._roleSelfState,"Self Player"),this._playerAI=new c(!0,this._roleAIState,"AI Player"),this._currentPlayer=this.playerSelf},i.toggleRoleState=function(e){this._roleSelfState=e,this._roleAIState=this._roleSelfState==l.RS_O?l.RS_X:l.RS_O},i.setGameData=function(e,t){if(this._game_data[e]!==l.RS_NULL)return console.log("不為空，已被選擇"),void this._pieces[e].getComponent(_).stop();null!=e&&null!=t.roleState?t!=this._prePlayer?(this._game_data[e]=t.roleState,this._prePlayer=t,this._pieces[e].getComponent(_).pick(t.roleState),this.checkGetScore(),this._gameStart&&this.switchPlayer(t)):console.log("error: 上一回跟這回是同一個玩家"):console.log("error: index or player 不能為空")},i.switchPlayer=function(e){var t=this;if(this._currentPlayer=e.role==s.AI?this.playerSelf:this.playerAI,this._currentPlayer.role==s.AI){var r=[];this._game_data.forEach((function(e,t){e==l.RS_NULL&&r.push(t)}));var n=Math.floor(Math.random()*r.length),a=r[n];console.log(r,n,a),setTimeout((function(){t.setGameData(a,t._currentPlayer)}),1e3)}},i.checkGetScore=function(){var e=this,t=[];return[[0,1,2],[3,4,5],[6,7,8]].forEach((function(r){for(var n=[],a=0;a<r.length;a++){var o=r[a],i=e._game_data[o];n.push(i)}var s=n.every((function(e){return e!==l.RS_NULL})),_=n.every((function(e){return e!==l.RS_O}))||n.every((function(e){return e!==l.RS_X}));s&&_&&t.push(r)})),[[0,3,6],[1,4,7],[2,5,8]].forEach((function(r){for(var n=[],a=0;a<r.length;a++){var o=r[a],i=e._game_data[o];n.push(i)}var s=n.every((function(e){return e!==l.RS_NULL})),_=n.every((function(e){return e!==l.RS_O}))||n.every((function(e){return e!==l.RS_X}));s&&_&&t.push(r)})),[[0,4,8],[2,4,6]].forEach((function(r){for(var n=[],a=0;a<r.length;a++){var o=r[a],i=e._game_data[o];n.push(i)}var s=n.every((function(e){return e!==l.RS_NULL})),_=n.every((function(e){return e!==l.RS_O}))||n.every((function(e){return e!==l.RS_X}));s&&_&&t.push(r)})),t.length>0?(console.log("game over"),this._gameStart=!1,t[0].forEach((function(t){e._pieces[t].getComponent(_).hotLine()})),void this.scheduleOnce((function(){e.gameData[t[0][0]]==e.playerSelf.roleState?(console.log("恭喜您！獲勝"),e._self_score+=1,e.myDialog.showDialog(s.SELF)):(console.log("喔毆 XD you are loss!"),e._ai_score+=1,e.myDialog.showDialog(s.AI))}),.6)):this._game_data.every((function(e){return e!==l.RS_NULL}))?(console.log("game over"),this._gameStart=!1,console.log("平手！！"),void this.myDialog.showDialog(null)):void 0},i.exit=function(){this._game_data=[l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL],this._ai_score=0,this._self_score=0,this._roleAIState=l.RS_O,this._roleSelfState=l.RS_X,this._playerSelf=null,this._playerAI=null,this._currentPlayer=null,this._prePlayer=null,this._gameStart=!1,console.log("exit game"),this._pieces.forEach((function(e){e.getComponent(_).stopLine()}))},i.reset=function(){this._game_data=[l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL,l.RS_NULL],this._currentPlayer=this.playerSelf,this._prePlayer=null,this._gameStart=!0,this._pieces.forEach((function(e){e.getComponent(_).stopLine()})),console.log("reset game")},r(o,[{key:"setPieces",set:function(e){this._pieces=e}},{key:"playerSelf",get:function(){return this._playerSelf}},{key:"playerAI",get:function(){return this._playerAI}},{key:"currentPlayer",get:function(){return this._currentPlayer}},{key:"prePlayer",get:function(){return this._prePlayer}},{key:"aiScore",get:function(){return this._ai_score.toString()}},{key:"selfScore",get:function(){return this._self_score.toString()}},{key:"gameStart",get:function(){return this._gameStart},set:function(e){this._gameStart=e}},{key:"gameData",get:function(){return this._game_data}},{key:"selfRoleState",get:function(){return this._roleSelfState}}]),o}(i));n(u,"instance",null),o._RF.pop()}}}));

System.register("chunks:///_virtual/Player.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts"],(function(e){"use strict";var t,r,l,o,n,i;return{setters:[function(e){t=e.createClass,r=e.defineProperty},function(e){l=e.cclegacy},function(e){o=e.Role,n=e.RoleState,i=e.StateColor}],execute:function(){l._RF.push({},"f0427Ui5mhImK/dCwGIwCmE","Player",void 0);e("Player",function(){function e(e,t,l){r(this,"_playerName",""),r(this,"_role",null),r(this,"_roleState",null),this._role=e?o.AI:o.SELF,this._roleState=t,this._playerName=l}return t(e,[{key:"color",get:function(){if(null!=this._roleState)return this._roleState==n.RS_O?i.O:i.X}},{key:"roleState",get:function(){return this._roleState}},{key:"role",get:function(){return this._role}}]),e}());l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./main.ts","./global.ts","./piece.ts","./Player.ts","./game_mgr.ts","./choses.ts","./myDialg.ts","./play.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});