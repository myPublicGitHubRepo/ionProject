import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatComponent } from '../components/chat/chat';





declare var cordova;
//https://simplewebrtc.com/notsosimple.html
//https://github.com/andyet/SimpleWebRTC

declare var SimpleWebRTC: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(ChatComponent) Chat: ChatComponent;

  isGuide: boolean = false;

  isLoggedIn: boolean = false;

  // grab the room from the URL
  //var room = location.search && location.search.split('?')[1];
  room: string = "test199875Splinxs!!!";

  websocketMessage: string = "";
  webRTCMessage: string = "";

  autoJoin: boolean = true;

  audioMuted: boolean = false;
  videoMuted: boolean = false;

  audioRemoteMuted: boolean = false;
  videoRemoteMuted: boolean = false;

  peer: any = null;

  readyToCall: boolean = false;
  isVideoStopped: boolean = true;
  connEstablished: boolean = false;

  video: boolean = true;
  // create our webrtc connection
  webrtc: any;

  messages: { date: string, message: string, person: string }[] = [];

  params: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalController: ModalController) { //public androidPermissions: AndroidPermissions
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.checkPermission();

      //do not check if website
      if(platform.is("cordova")){
        var permissions = cordova.plugins.permissions;
        
        
              permissions.hasPermission(permissions.CAMERA, function (status) {
                if (status.hasPermission) {
                  console.log("Yes :D ");
                }
                else {
                  console.warn("No :( I will ask for permission now");
        
                  permissions.requestPermission(permissions.CAMERA, function success(status) {
                    if (!status.hasPermission) { console.log("cam error") };
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
                    if (!status.hasPermission) { console.log("audio error") };
                  }, function error() {
                    console.warn('audio permission is not turned on');
                  });
        
                }
              });
      }

      
    });


  }

  ngOnInit(){
    this.params = { sender: (message: string) => { this.sendMessage(message) } };
  }

  openPage() {
    alert("open");
  }
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

  ngAfterViewInit() {
  }

  muteAudio() {
    this.audioMuted = true;
    this.webrtc.mute();
  }

  unmuteAudio() {
    this.audioMuted = false;
    this.webrtc.unmute();
  }

  startAudio() {
    this.audioMuted = false;
    this.webrtc.config.media.audio = true;
  }

  stopAudio() {
    this.audioMuted = true
    this.webrtc.config.media.audio = false;
  }

  muteVideo() {
    this.videoMuted = true;
    this.webrtc.pauseVideo();
  }

  unmuteVideo() {
    this.videoMuted = false;
    this.webrtc.resumeVideo();
  }

  muteRemoteAudio() {
    this.audioRemoteMuted = true;
  }

  unmuteRemoteAudio() {
    this.audioRemoteMuted = false;
  }

  muteRemoteVideo() {
    this.videoRemoteMuted = true;
  }

  unmuteRemoteVideo() {
    this.videoRemoteMuted = false;
  }

  joinRoom() {
    if (this.readyToCall) {
      if (this.room) this.webrtc.joinRoom(this.room);
    }
    else {
      alert("not ready to call");
    }
  }

  logOut() {

    this.webrtc.leaveRoom();

    this.webrtc.disconnect();
    this.connEstablished = false;
    this.isLoggedIn = false;
    this.room = "";
  }

  sendMessage(message){
    this.sendMessageWebsocket();
  }

  sendMessageWebsocket() {
      this.webrtc.sendToAll('websocket-message', {
        message: this.websocketMessage
      });
  }

  sendMessageWebRTC() {
    this.webrtc.sendDirectlyToAll(
      'webrtc-message',//channel name
      'text',//type of message, will be data.type
      {
        payload: this.webRTCMessage//will be data.payload
      }
    );

    this.appendWebrtcText(this.webRTCMessage);

    this.webRTCMessage = "";
  }

  appendWebsocketText(message) {
    var websocketArea = document.getElementById('websocketArea');
    this.appendText(websocketArea, message);
  }

  appendWebrtcText(message) {
    var webrtcArea = document.getElementById('webrtcArea');
    this.appendText(webrtcArea, message);
  }

  appendText(elem, message) {
    var time = new Date();
    elem.innerHTML += "<br />" + time.toLocaleTimeString() + ": " + message;
  }

  videoChangedTap() {
    console.log("videoChangedtap")
    this.video = !this.video;
    this.peer.send('videoChanged', { video: this.video })
  }

  videoChanged() {


    this.webrtc.config.media.video = this.video;


    /*
           this.webrtc.sendToAll('sendToAll videoChanged', { name: true })
        this.webrtc.connection.emit('videoChanged');
        */
  }
  startVideo() {
    console.log("Button clicked")
    
    this.video = true;
    this.webrtc.config.media.video = true;
    this.webrtc.startLocalVideo();    

    //this.videoMuted = false;
    //this.webrtc.resumeVideo();

    //this.videoMuted = false;
    
  }

  stopVideo() {
    console.log("stop Button clicked")
    this.webrtc.stopLocalVideo();
    this.video = false;
    this.webrtc.config.media.video = false;
    //this.videoMuted = true;
    //this.webrtc.config.media.video = false;
  }

  modalLang() {

    let langModal = this.modalController.create('LangTestPage');
    langModal.present();
  }
  signIn() {

    if (this.room != "") {

      this.initWebRTC();
      this.isLoggedIn = true;

      this.video = !this.isGuide;
      
      if(this.isGuide){
        
        
      }

      //this.joinRoom();
    }
    else {
      alert("Enter a room name");
    }

  }


  private initWebRTC() {
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
    this.webrtc.on('readyToCall', () => {
      // you can name it anything
      console.log("WebRTC is ready to call")
      this.readyToCall = true;
      if (this.autoJoin) { this.joinRoom() }
    });


    // we got access to the camera
    this.webrtc.on('localStream', (stream) => {

      console.log("got local stream");
      console.log(stream);


    });
    // we did not get access to the camera
    this.webrtc.on('localMediaError', (err) => { console.error("local media error: " + err) });
    this.webrtc.on('joinedRoom', (name) => {
      console.log("room sucessfuly joined");

    });

    this.webrtc.on('createdPeer', (peer) => {
      console.log("message createdPeer: ");

      this.peer = peer;
      this.connEstablished = true;

    });

    this.webrtc.on('connectionReady', (Sessionid) => {
      console.log("connectionReady, sessionId: " + Sessionid);

    });

    this.webrtc.connection.on('message', (message) => {

      if (message.type == 'videoChanged') {
        console.log("message recived")
        //this.video = this.message.payload.video;
        
      }

      if (message.type === 'websocket-message') {
        console.log('websocket-message: ' + message.payload.message);
        // this.appendWebsocketText("Remote: " + message.payload.message);

        this.messages.push(
          {
            date: new Date().toLocaleTimeString(),
            message: message.payload.message,
            person: "remote"
          }
        );

        this.websocketMessage = "";
      }


    });

    this.webrtc.on('channelMessage', (peer, channel, data) => {

      if (channel === 'hark') {
        return;
      }

      if (channel === 'webrtc-message') {

        if (data.type === 'text') {
          console.log('webrtc-message: ' + data.payload.payload);
          this.appendWebrtcText(data.payload.payload);
        }

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
      console.log("video removed :(")

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
    this.webrtc.on('iceFailed', (peer) => {
      var connstate = document.querySelector('#container_' + this.webrtc.getDomId(peer) + ' .connectionstate');
      console.log('local fail', connstate);
      if (connstate) {
        alert('Connection failed.');
        //fileinput.disabled = 'disabled';
      }
    });
  }





}

