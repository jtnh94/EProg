import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WarningSetting } from './warning-setting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  constructor(private http: HttpClient) { }

  getWarningTime() {
    return this.http.get<WarningSetting>('api/warning');
  }

  setWarningTime(warning: WarningSetting): Observable<WarningSetting> {
    return this.http.post<WarningSetting>('api/warning', warning);
  }
}
