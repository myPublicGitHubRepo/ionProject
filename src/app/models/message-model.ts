import { MessageTypes } from '../enums/messageTypes-enum';

export class MessageModel{

    constructor(public date: string, public message: string, public sender: string, public type: MessageTypes = MessageTypes.text){

    }

}