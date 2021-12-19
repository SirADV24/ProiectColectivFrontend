import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SearchResult, SearchUser} from "../../model/search-result.model";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {

  @Input() searchResults: SearchResult[]

  @Output() getResponses = new EventEmitter<string>()

  constructor(private router: Router) {}

  public searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  public searchFilteredController: FormControl = new FormControl();

  onSearchTextChange(event){
    this.getResponses.emit(event.target.value)
  }

  groupBy(searchResults: SearchResult[]){
    return searchResults?.reduce((acc, curr) => {
      return [
        ...acc,
        acc.every((x) => x.id === curr.id) ? curr : null
      ]
    }, []).filter((x) => !!x);
  }

  navigateToUser(searchUser: SearchUser){
    this.router.navigate([`profile/${searchUser.id}`])
  }
}
