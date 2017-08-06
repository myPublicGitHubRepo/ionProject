import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';





//https://simplewebrtc.com/notsosimple.html
//https://github.com/andyet/SimpleWebRTC

declare var SimpleWebRTC: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isLoggedIn: boolean = false;

  // grab the room from the URL
  //var room = location.search && location.search.split('?')[1];
  room: string = "test";

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




  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public androidPermissions: AndroidPermissions) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage() {
    alert("open");
  }

  checkPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      success => console.log('Permission granted'),
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.CAMERA)
    );
  }






  ///////////////////////////////////

  ngAfterViewInit() {
    this.checkPermission();
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

  sendMessageWebsocket() {
    if (this.websocketMessage != "") {
      this.webrtc.sendToAll('websocket-message', {
        message: this.websocketMessage
      });

      //this.appendWebsocketText("Me: " + this.websocketMessage);

      this.messages.push(
        {
          date: new Date().toLocaleTimeString(),
          message: this.websocketMessage,
          person: "me"
        }
      );

      this.websocketMessage = "";
    }
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
    this.webrtc.startLocalVideo();
    //this.videoMuted = false;
    //  this.webrtc.config.media.video = true;
  }

  stopVideo() {
    console.log("stop Button clicked")
    this.webrtc.stopLocalVideo();
    this.video = false;
    //this.videoMuted = true;
    //this.webrtc.config.media.video = false;
  }

  signIn() {
    if (this.room != "") {

      this.initWebRTC();
      this.isLoggedIn = true;

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
      media: { audio: true, video: this.video },
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
        debugger;
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
      //debugger;

      //console.log(this.webrtc.getDomId(peer));

      /*
      var el = document.getElementById(peer ? 'container_' + this.webrtc.getDomId(peer) : 'localVideo');
      debugger;
      if (remoteVideo && el) {
        remoteVideo.removeChild(el);

      }
      */


      //remove video element
      var remEl = document.getElementById('remoteVideo');
      if (remEl) {
        while (remEl.hasChildNodes()) {
          remEl.removeChild(remEl.firstChild);
          debugger;
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

