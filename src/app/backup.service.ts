import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private http: HttpClient) { }

  set(list: String[]): Observable<boolean>{
    return this.http.post('http://localhost:3000/todo-list/backup', list).pipe(
      map((data: any) => data.msg === 'ok'),
      catchError(() => of(false))
    );
  }

}
