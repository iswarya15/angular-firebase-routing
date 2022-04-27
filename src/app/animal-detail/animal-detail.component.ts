import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
@Component({
  // selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
})
export class AnimalDetailComponent implements OnInit {
  animal$: any;

  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.router.data.subscribe(
      (response) => {
        this.animal$ = response.data['fields'];
        console.log(this.animal$);
      },
      (err) => console.log(err)
    );
  }
}
