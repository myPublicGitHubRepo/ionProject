import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MessageModel } from '../../app/models/message-model';

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

      this.messages.push(new MessageModel(
        new Date().toLocaleTimeString(),
        this.message,
        "me"
      ));
      //call method in parent
      
      this.sender(this.message);
      this.message = "";
    }
  }

  receivedMessage(message){

  }

  getMessages(){
    return this.messages;
  }

}
