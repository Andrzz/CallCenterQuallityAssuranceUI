import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversation } from '../conversation/models/conversation';
import { environment } from 'src/environments/environment';
import { EndPoints } from '../models/endpoints';
import { HttpOptionsFactory } from '../helpers/http-options-factories';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private httpClient: HttpClient) { }

  public sendFilePath(): Observable<Conversation[]> {
    let httpOptions =  HttpOptionsFactory();
    return this.httpClient.get<Conversation[]>(
      `${environment.apiurl}/${EndPoints.conversationQuallityAssurance}`,
      { headers: httpOptions.headers }
    )
  }
}


