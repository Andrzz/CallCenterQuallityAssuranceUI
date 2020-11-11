import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationListComponent } from './page/conversation-list/conversation-list.component';
import { ConversationItemComponent } from './page/conversation-list/conversation-item/conversation-item.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ConversationListComponent, ConversationItemComponent],
  imports: [
    CommonModule, NgbRatingModule
  ],
  exports:[ConversationListComponent]
})
export class ConversationModule { }
