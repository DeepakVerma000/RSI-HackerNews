/**
*
* @name: hackernewsapiservice.service.ts
*
* @description: This service contains all Hacker News story related API calls.
*
*
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StoryModel} from '../models/story.interface';
import { apiConfig} from '../config'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  // method to get all latest stories //
  getAllStoryList(): Observable<StoryModel[]> {   
    return this.http.get<StoryModel[]>(apiConfig.apiBaseUrl + 'Story/getAllStory');
  }

}
