import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MessageModel } from '../../app/models/message-model';
import { MessageTypes } from '../../app/enums/messageTypes-enum';

/**
 * Generated class for the ChatComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'chat-component',
  templateUrl: 'chat.html'
})
export class ChatComponent {
  @Input('params') params;
  messages: MessageModel[] = [];
  message: string = "";
  sender: any;

  constructor() {
  }

  ngOnInit() {
    if(this.params){
      this.sender = this.params.sender;
    }
  }

  sendMessage(){
    if(this.message != ""){
      var msgM = new MessageModel(
        new Date().toLocaleTimeString(),
        //this.message.replace(/\n/g, "<br />"),
        this.message,
        "me"
      );
      this.messages.push(msgM);
      //call method in parent
      
      this.sender(msgM);
      this.message = "";
    }
  }

  receivedMessage(message: MessageModel){
    this.messages.push(new MessageModel(
      new Date().toLocaleTimeString(),
      message.msg,
      "remote"
    ));

    /*
    switch(message.type){
      case MessageTypes.text:

        break;

      default:
        break;
    }
    */
  }

  getMessages(){
    return this.messages;
  }

}
