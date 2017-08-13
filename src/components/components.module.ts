import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ChatComponent],
	imports: [IonicModule],
	exports: [ChatComponent]
})
export class ComponentsModule {}
