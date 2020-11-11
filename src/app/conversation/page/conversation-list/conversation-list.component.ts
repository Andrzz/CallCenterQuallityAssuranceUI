import { Component, OnInit } from '@angular/core';
import { ConversationsService } from 'src/app/services/conversations.service';
import { Conversation } from '../../models/conversation';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {

  conversations: Conversation[] = [];

  ngOnInit(): void {
    this.callApi();
  }

  constructor (private conversationService : ConversationsService){}

  public callApi( )
  {
     this.conversationService.sendFilePath().subscribe(x => {
       this.conversations = x.length > 0 ? x : [];
     })
  }

}
