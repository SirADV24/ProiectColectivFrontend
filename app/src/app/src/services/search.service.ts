import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SearchResult} from "../model/search-result.model";

@Injectable()
export class SearchService{
  private apiURL = 'http://localhost:8080/api';
  private headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") });

  constructor(private httpClient: HttpClient) {}

  getSearchResult(text: string){
    return this.httpClient.get<SearchResult[]>(
      `${this.apiURL}/posts/search/${text}`,
      {headers: this.headers}
    )
  }

}
