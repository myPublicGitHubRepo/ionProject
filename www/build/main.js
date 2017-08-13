webpackJsonp([1],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		266,
		4
	],
	"../pages/lang-test/lang-test.module": [
		264,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 148;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LanguagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LanguagesProvider = (function () {
    function LanguagesProvider(http) {
        var _this = this;
        this.http = http;
        this.languages = [];
        console.log('Hello LanguagesProvider Provider');
        this.http.get('https://splinxs.com/fullLangs.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.languages = data;
        });
    }
    return LanguagesProvider;
}());
LanguagesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LanguagesProvider);

//# sourceMappingURL=languages.provider.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_languages_languages_provider__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AndroidPermissions } from '@ionic-native/android-permissions';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/lang-test/lang-test.module#LangTestPageModule', name: 'LangTestPage', segment: 'lang-test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            //AndroidPermissions,
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_languages_languages_provider__["a" /* LanguagesProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_chat_chat__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalController) {
        this.modalController = modalController;
        this.isGuide = false;
        this.isLoggedIn = false;
        // grab the room from the URL
        //var room = location.search && location.search.split('?')[1];
        this.room = "test199875Splinxs!!!";
        this.websocketMessage = "";
        this.webRTCMessage = "";
        this.autoJoin = true;
        this.audioMuted = false;
        this.videoMuted = false;
        this.audioRemoteMuted = false;
        this.videoRemoteMuted = false;
        this.peer = null;
        this.readyToCall = false;
        this.isVideoStopped = true;
        this.connEstablished = false;
        this.video = true;
        this.messages = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this.checkPermission();
            //do not check if website
            if (platform.is("cordova")) {
                var permissions = cordova.plugins.permissions;
                permissions.hasPermission(permissions.CAMERA, function (status) {
                    if (status.hasPermission) {
                        console.log("Yes :D ");
                    }
                    else {
                        console.warn("No :( I will ask for permission now");
                        permissions.requestPermission(permissions.CAMERA, function success(status) {
                            if (!status.hasPermission) {
                                console.log("cam error");
                            }
                            ;
                        }, function error() {
                            console.warn('Camera permission is not turned on');
                        });
                    }
                });
                permissions.hasPermission(permissions.RECORD_AUDIO, function (status) {
                    if (status.hasPermission) {
                        console.log("Yes :D ");
                    }
                    else {
                        console.warn("No Mic :( I will ask for permission now");
                        permissions.requestPermission(permissions.RECORD_AUDIO, function success(status) {
                            if (!status.hasPermission) {
                                console.log("audio error");
                            }
                            ;
                        }, function error() {
                            console.warn('audio permission is not turned on');
                        });
                    }
                });
            }
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.params = { sender: function (message) { _this.sendMessage(message); } };
    };
    MyApp.prototype.openPage = function () {
        alert("open");
    };
    /*
      checkPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          success => console.log('Camera Permission granted'),
          err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.CAMERA)
        );
    
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
          success => console.log('Mic Permission granted'),
          err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.RECORD_AUDIO)
        );
    
    
    
    
    
      }
      */
    ///////////////////////////////////
    MyApp.prototype.ngAfterViewInit = function () {
    };
    MyApp.prototype.muteAudio = function () {
        this.audioMuted = true;
        this.webrtc.mute();
    };
    MyApp.prototype.unmuteAudio = function () {
        this.audioMuted = false;
        this.webrtc.unmute();
    };
    MyApp.prototype.startAudio = function () {
        this.audioMuted = false;
        this.webrtc.config.media.audio = true;
    };
    MyApp.prototype.stopAudio = function () {
        this.audioMuted = true;
        this.webrtc.config.media.audio = false;
    };
    MyApp.prototype.muteVideo = function () {
        this.videoMuted = true;
        this.webrtc.pauseVideo();
    };
    MyApp.prototype.unmuteVideo = function () {
        this.videoMuted = false;
        this.webrtc.resumeVideo();
    };
    MyApp.prototype.muteRemoteAudio = function () {
        this.audioRemoteMuted = true;
    };
    MyApp.prototype.unmuteRemoteAudio = function () {
        this.audioRemoteMuted = false;
    };
    MyApp.prototype.muteRemoteVideo = function () {
        this.videoRemoteMuted = true;
    };
    MyApp.prototype.unmuteRemoteVideo = function () {
        this.videoRemoteMuted = false;
    };
    MyApp.prototype.joinRoom = function () {
        if (this.readyToCall) {
            if (this.room)
                this.webrtc.joinRoom(this.room);
        }
        else {
            alert("not ready to call");
        }
    };
    MyApp.prototype.logOut = function () {
        this.webrtc.leaveRoom();
        this.webrtc.disconnect();
        this.connEstablished = false;
        this.isLoggedIn = false;
        this.room = "";
    };
    MyApp.prototype.sendMessage = function (message) {
        this.sendMessageWebsocket(message);
    };
    MyApp.prototype.receivedMessage = function (message) {
        this.Chat.receivedMessage(message);
    };
    MyApp.prototype.sendMessageWebsocket = function (message) {
        this.webrtc.sendToAll('websocket-message', {
            message: message
        });
    };
    MyApp.prototype.sendMessageWebRTC = function (message) {
        this.webrtc.sendDirectlyToAll('webrtc-message', //channel name
        'text', //type of message, will be data.type
        {
            payload: message //will be data.payload
        });
    };
    MyApp.prototype.appendWebsocketText = function (message) {
        var websocketArea = document.getElementById('websocketArea');
        this.appendText(websocketArea, message);
    };
    MyApp.prototype.appendWebrtcText = function (message) {
        var webrtcArea = document.getElementById('webrtcArea');
        this.appendText(webrtcArea, message);
    };
    MyApp.prototype.appendText = function (elem, message) {
        var time = new Date();
        elem.innerHTML += "<br />" + time.toLocaleTimeString() + ": " + message;
    };
    MyApp.prototype.videoChangedTap = function () {
        console.log("videoChangedtap");
        this.video = !this.video;
        this.peer.send('videoChanged', { video: this.video });
    };
    MyApp.prototype.videoChanged = function () {
        this.webrtc.config.media.video = this.video;
        /*
               this.webrtc.sendToAll('sendToAll videoChanged', { name: true })
            this.webrtc.connection.emit('videoChanged');
            */
    };
    MyApp.prototype.startVideo = function () {
        console.log("Button clicked");
        this.video = true;
        this.webrtc.config.media.video = true;
        this.webrtc.startLocalVideo();
        //this.videoMuted = false;
        //this.webrtc.resumeVideo();
        //this.videoMuted = false;
    };
    MyApp.prototype.stopVideo = function () {
        console.log("stop Button clicked");
        this.webrtc.stopLocalVideo();
        this.video = false;
        this.webrtc.config.media.video = false;
        //this.videoMuted = true;
        //this.webrtc.config.media.video = false;
    };
    MyApp.prototype.modalLang = function () {
        var langModal = this.modalController.create('LangTestPage');
        langModal.present();
    };
    MyApp.prototype.signIn = function () {
        if (this.room != "") {
            this.initWebRTC();
            this.isLoggedIn = true;
            this.video = !this.isGuide;
            if (this.isGuide) {
            }
            //this.joinRoom();
        }
        else {
            alert("Enter a room name");
        }
    };
    MyApp.prototype.initWebRTC = function () {
        var _this = this;
        this.webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos
            remoteVideosEl: 'remoteVideo',
            // immediately ask for camera access
            autoRequestMedia: true,
            debug: false,
            detectSpeakingEvents: true,
            autoAdjustMic: true,
            // turn off video
            media: { audio: true, video: !this.isGuide },
            enableDataChannels: true
        });
        // when it's ready, join if we got a room from the URL
        this.webrtc.on('readyToCall', function () {
            // you can name it anything
            console.log("WebRTC is ready to call");
            _this.readyToCall = true;
            if (_this.autoJoin) {
                _this.joinRoom();
            }
        });
        // we got access to the camera
        this.webrtc.on('localStream', function (stream) {
            console.log("got local stream");
            console.log(stream);
        });
        // we did not get access to the camera
        this.webrtc.on('localMediaError', function (err) { console.error("local media error: " + err); });
        this.webrtc.on('joinedRoom', function (name) {
            console.log("room sucessfuly joined");
        });
        this.webrtc.on('createdPeer', function (peer) {
            console.log("message createdPeer: ");
            _this.peer = peer;
            _this.connEstablished = true;
        });
        this.webrtc.on('connectionReady', function (Sessionid) {
            console.log("connectionReady, sessionId: " + Sessionid);
        });
        this.webrtc.connection.on('message', function (message) {
            if (message.type == 'videoChanged') {
                console.log("message recived");
                //this.video = this.message.payload.video;
            }
            if (message.type === 'websocket-message') {
                console.log('websocket-message: ' + message.payload.message);
                _this.receivedMessage(message.payload.message);
                // this.appendWebsocketText("Remote: " + message.payload.message);
                /*
                this.messages.push(
                  {
                    date: new Date().toLocaleTimeString(),
                    message: message.payload.message,
                    person: "remote"
                  }
                );
        
                this.websocketMessage = "";
                */
            }
        });
        this.webrtc.on('channelMessage', function (peer, channel, data) {
            if (channel === 'hark') {
                return;
            }
            if (channel === 'webrtc-message') {
                _this.receivedMessage(data);
                /*
                if (data.type === 'text') {
                  console.log('webrtc-message: ' + data.payload.payload);
                  this.appendWebrtcText(data.payload.payload);
                }
                */
            }
        });
        // a peer video has been added
        this.webrtc.on('videoAdded', function (rtcVideo, peer) {
            // if (!this.webrtc.config.media.video) return;
            console.log('video added, peer:', peer);
            console.log('video added, video:', rtcVideo);
            console.log("offet ro recive:");
            console.log(this.webrtc.config.receiveMedia);
            console.log("media:");
            console.log(this.webrtc.config.media);
        });
        // a peer was removed
        this.webrtc.on('videoRemoved', function (video, peer) {
            console.log("video removed :(");
            //var remoteVideo = document.getElementById('remoteVideo');
            //console.log(this.webrtc.getDomId(peer));
            /*
            var el = document.getElementById(peer ? 'container_' + this.webrtc.getDomId(peer) : 'localVideo');
            
            if (remoteVideo && el) {
              remoteVideo.removeChild(el);
      
            }
            */
            //remove video element
            var remEl = document.getElementById('remoteVideo');
            if (remEl) {
                while (remEl.hasChildNodes()) {
                    remEl.removeChild(remEl.firstChild);
                }
            }
        });
        // local p2p/ice failure
        this.webrtc.on('iceFailed', function (peer) {
            var connstate = document.querySelector('#container_' + _this.webrtc.getDomId(peer) + ' .connectionstate');
            console.log('local fail', connstate);
            if (connstate) {
                alert('Connection failed.');
                //fileinput.disabled = 'disabled';
            }
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_chat_chat__["a" /* ChatComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__components_chat_chat__["a" /* ChatComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_chat_chat__["a" /* ChatComponent */]) === "function" && _a || Object)
], MyApp.prototype, "Chat", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Programming\ionic\splinxs\ionProject\src\app\app.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\' [ngStyle]="{\'color\': connEstablished ? \'green\' : \'red\'}"></ion-icon>\n\n    </button>\n\n        <ion-title *ngIf="!isLoggedIn">\n\n\n\n            Ionic Blank\n\n        </ion-title>\n\n        <ion-title *ngIf="isLoggedIn">\n\n\n\n            Room name: {{room}}\n\n        </ion-title>\n\n        <div class="videoContainerLocal">\n\n            <!-- [ngStyle]="{\'visibility\': this.isLoggedIn ? \'visible\': \'hidden\'}"-->\n\n            <video id="localVideo"></video>\n\n            <!--<meter id="localVolume" class="volume" min="-45" max="-20" high="-25" low="-40"></meter>-->\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!--- ############# Menu ############ -->\n\n<ion-menu type="overlay" [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <div *ngIf="webrtc && webrtc.roomName == room && connEstablished">\n\n                <ion-list-header>\n\n                    Local settings\n\n                </ion-list-header>\n\n                <button ion-item menuClose *ngIf="!audioMuted" (tap)="muteAudio()">mute local audio</button>\n\n                <button ion-item menuClose *ngIf="audioMuted" (tap)="unmuteAudio()">unmute local audio</button>\n\n\n\n                <button ion-item menuClose *ngIf="!videoMuted" (tap)="muteVideo()">mute local video</button>\n\n                <button ion-item menuClose *ngIf="videoMuted" (tap)="unmuteVideo()">unmute local video</button>\n\n\n\n                <button ion-item menuClose *ngIf="!audioMuted" (tap)="stopAudio()">stop local audio</button>\n\n                <button ion-item menuClose *ngIf="audioMuted" (tap)="startAudio()">start local audio</button>\n\n\n\n                <button ion-item menuClose *ngIf="video" (tap)="stopVideo()">stop local video</button>\n\n                <button ion-item menuClose *ngIf="!video" (tap)="startVideo()">start local video</button>\n\n\n\n                <ion-list-header>\n\n                    Remote things\n\n                </ion-list-header>\n\n\n\n                <button ion-item menuClose *ngIf="!audioRemoteMuted" (tap)="muteRemoteAudio()">mute remote audio</button>\n\n                <button ion-item menuClose *ngIf="audioRemoteMuted" (tap)="unmuteRemoteAudio()">unmute remote audio</button>\n\n\n\n                <button ion-item menuClose *ngIf="!videoRemoteMuted" (tap)="muteRemoteVideo()">mute remote video</button>\n\n                <button ion-item menuClose *ngIf="videoRemoteMuted" (tap)="unmuteRemoteVideo()">unmute remote video</button>\n\n            </div>\n\n            <ion-list-header>\n\n                Other things\n\n            </ion-list-header>\n\n            <button ion-item menuClose (tap)="joinRoom()" *ngIf="webrtc && readyToCall && webrtc.roomName != room">Join room</button>\n\n            <button ion-item menuClose (tap)="logOut()">Log out</button>\n\n\n\n        </ion-list>\n\n\n\n\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-content #content>\n\n\n\n    <div *ngIf="isLoggedIn else loggedInIf">\n\n\n\n        <!--<ion-label>video currently {{video}}</ion-label>-->\n\n        <!--<ion-toggle checked="{{video}}" (tap)="videoChangedTap()" (ionChange)="videoChanged()" ></ion-toggle>-->\n\n\n\n\n\n\n\n        <div *ngIf="webrtc && webrtc.roomName == room && connEstablished; else waiting_content">\n\n\n\n\n\n            <chat-component [params]="params" ></chat-component>\n\n\n\n            <!--\n\n            <ion-scroll scrollY="true" style="height: 200px;">\n\n                <ion-list *ngIf=" messages.length>0" class="messageList">\n\n\n\n                    <ion-item *ngFor="let message of messages">\n\n                        <h2>{{ message.message }}</h2>\n\n                        <p>From: {{ message.person }}</p>\n\n                        <ion-note item-end>{{ message.date }}</ion-note>\n\n                    </ion-item>\n\n\n\n                </ion-list>\n\n            </ion-scroll>\n\n            <ion-item style="border-top: 1px solid black">\n\n                <ion-textarea type="text" value="" placeholder="message" [(ngModel)]="websocketMessage" fz-elastic></ion-textarea>\n\n                <button item-right ion-button clear (tap)="sendMessageWebsocket()" [disabled]="websocketMessage == \'\'" item-right>send</button>\n\n\n\n            </ion-item>\n\n            -->\n\n\n\n\n\n            <!-- ####### Since websockets are (almost) always superior, we should newer use WebRTC now  #####\n\n                <div>\n\n                    <ion-input type="text" value="" placeholder="message" [(ngModel)]="webRTCMessage"></ion-input>\n\n                    <button ion-button (tap)="sendMessageWebRTC()">send webRTC</button>\n\n                    <ion-textarea id="webrtcArea" readonly="true" style="border: solid 1px"></ion-textarea>\n\n                </div>\n\n                -->\n\n            <!-- REMOTE VIDEO -->\n\n            <div class="videoContainerRemote" overflow-scroll="true">\n\n                <!-- [ngStyle]="{\'visibility\': this.isLoggedIn ? \'visible\': \'hidden\'}"-->\n\n                <div id="remoteVideo" style="height: 150px; border: 1px solid" overflow-scroll="true"></div>\n\n                <!--<meter id="localVolume" class="volume" min="-45" max="-20" high="-25" low="-40"></meter>-->\n\n            </div>\n\n        </div>\n\n\n\n        <!--<button ion-button (tap)="startVideo()" *ngIf="webrtc &&  webrtc.roomName == room && !video && connEstablished">Start video</button>\n\n            <button ion-button (tap)="stopVideo()" *ngIf="webrtc && webrtc.roomName == room && video && connEstablished">Stop video</button>-->\n\n\n\n\n\n        <!-- ELSE BLOCk -->\n\n        <ng-template #waiting_content>\n\n            <h2>Waiting...</h2>\n\n            <ion-spinner></ion-spinner>\n\n\n\n\n\n        </ng-template>\n\n\n\n\n\n\n\n\n\n    </div>\n\n    <!--"start page" settings-->\n\n    <ng-template #loggedInIf>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label fixed>Room name</ion-label>\n\n                <ion-input type="text" value="" placeholder="enter name here" [(ngModel)]="room"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed>Auto join</ion-label>\n\n                <ion-toggle checked="{{autoJoin}}" (ionChange)="autoJoin = !autoJoin"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed>Video</ion-label>\n\n                <ion-toggle checked="{{video}}" (ionChange)="video = !video"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed>Tourist</ion-label>\n\n                <ion-toggle checked="{{!isGuide}}" (ionChange)="isGuide = !isGuide"></ion-toggle>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div padding>\n\n            <button ion-button color="primary" block (tap)="signIn()">Enter room</button>\n\n        </div>\n\n        <div padding>\n\n            <button ion-button color="primary" block (tap)="modalLang()">Show lang</button>\n\n        </div>\n\n\n\n\n\n    </ng-template>\n\n</ion-content>'/*ion-inline-end:"D:\Programming\ionic\splinxs\ionProject\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Programming\ionic\splinxs\ionProject\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Programming\ionic\splinxs\ionProject\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_message_model__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ChatComponent = (function () {
    function ChatComponent() {
        this.messages = [];
        this.message = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        if (this.params) {
            this.sender = this.params.sender;
        }
    };
    ChatComponent.prototype.sendMessage = function () {
        if (this.message != "") {
            var msgM = new __WEBPACK_IMPORTED_MODULE_1__app_models_message_model__["a" /* MessageModel */](new Date().toLocaleTimeString(), 
            //this.message.replace(/\n/g, "<br />"),
            this.message, "me");
            this.messages.push(msgM);
            //call method in parent
            this.sender(msgM);
            this.message = "";
        }
    };
    ChatComponent.prototype.receivedMessage = function (message) {
        this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__app_models_message_model__["a" /* MessageModel */](new Date().toLocaleTimeString(), message.msg, "remote"));
        /*
        switch(message.type){
          case MessageTypes.text:
    
            break;
    
          default:
            break;
        }
        */
    };
    ChatComponent.prototype.getMessages = function () {
        return this.messages;
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('params'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "params", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'chat-component',template:/*ion-inline-start:"D:\Programming\ionic\splinxs\ionProject\src\components\chat\chat.html"*/'<div>\n    <ion-scroll scrollY="true" style="height: 200px;">\n      <ion-list *ngIf=" messages.length>0" class="messageList">\n        <ion-item *ngFor="let message of messages">\n          <!--TODO check for message type-->\n\n          <span *ngIf="message.type === 1" style="white-space: pre;">{{ message.msg }}</span>\n          <img src="{{message.msg}}" alt="image" *ngIf="message.type === 2"/>\n          <p>From: {{ message.sender }}</p>\n          <ion-note item-end>{{ message.date }}</ion-note>\n        </ion-item>\n      </ion-list>\n    </ion-scroll>\n    <ion-item style="border-top: 1px solid black">\n      <ion-textarea type="text" value="" placeholder="message" [(ngModel)]="message"></ion-textarea>\n      <button item-right ion-button clear (tap)="sendMessage()" [disabled]="message == \'\'" item-right>send</button>\n    </ion-item>\n  </div>'/*ion-inline-end:"D:\Programming\ionic\splinxs\ionProject\src\components\chat\chat.html"*/
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_messageTypes_enum__ = __webpack_require__(271);

var MessageModel = (function () {
    function MessageModel(date, msg, sender, type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_0__enums_messageTypes_enum__["a" /* MessageTypes */].text; }
        this.date = date;
        this.msg = msg;
        this.sender = sender;
        this.type = type;
    }
    return MessageModel;
}());

//# sourceMappingURL=message-model.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageTypes; });
var MessageTypes;
(function (MessageTypes) {
    MessageTypes[MessageTypes["text"] = 1] = "text";
    MessageTypes[MessageTypes["image"] = 2] = "image";
    MessageTypes[MessageTypes["location"] = 3] = "location";
})(MessageTypes || (MessageTypes = {}));
//# sourceMappingURL=messageTypes-enum.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map