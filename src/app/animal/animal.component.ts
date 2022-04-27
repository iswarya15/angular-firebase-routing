import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  // selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  animals$: any = null;
  private getAnimalsList: string =
    'https://firestore.googleapis.com/v1/projects/kanbanfire-a414f/databases/(default)/documents/animals?key=AIzaSyB1ZYAICPTJmLuR7JK_m6XizIl-qVl2hTo';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.getAnimalsList).subscribe(
      (data) => {
        if (data && data['documents'] != undefined) {
          this.animals$ = data['documents'];
          console.log(this.animals$);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
