import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, first } from 'rxjs';
import { logEvent } from '@angular/fire/analytics';

@Injectable()
export class PreloadGuard implements Resolve<any> {
  private getAnimalData: string = `https://firestore.googleapis.com/v1/projects/kanbanfire-a414f/databases/(default)/documents/animals/`;
  private webAPIKey = 'AIzaSyB1ZYAICPTJmLuR7JK_m6XizIl-qVl2hTo';
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const name = route.paramMap.get('name').toLowerCase();

      return this.http.get(
        this.getAnimalData + name + '?key=' + this.webAPIKey
      );
    } catch (error) {
      console.log(error);
    }
  }
}
