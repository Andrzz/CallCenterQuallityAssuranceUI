import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from 'src/app/conversation/models/conversation';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.css']
})
export class ConversationItemComponent implements OnInit {

  @Input() conversationItem: Conversation = null;
  constructor() { }

  ngOnInit(): void {
  }

  public getstars(score: number):number{
    if(score <= 0){
      return 0
    }
    else if(score < 25){
      return 1
    }
    else if(score < 50){
      return 2
    }
    else if(score < 75){
      return 3
    }
    else if(score < 90){
      return 4
    }
    else {
      return 5
    }
  }

}
