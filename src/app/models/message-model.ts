import { MessageTypes } from '../enums/messageTypes-enum';

export class MessageModel{

    constructor(public date: string, public msg: string, public sender: string, public type: MessageTypes = MessageTypes.text){

    }

}

//TODO inherit and stuff
//text message
//image message
//map message
//