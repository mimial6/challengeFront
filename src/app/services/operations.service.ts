import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperationsService {

  constructor(private http: HttpClient) { }
  	
	private url = "https://api.github.com/users/mimial6/repos";
  	private url2 = "https://api.github.com/repos/mimial6/";
  	private url3 = "";
  	public getReposList$(): Observable<Array<Object>> {
	  return this.http.get<Array<Object>>(this.url);
	}



	public getBranchesList$(repo): Observable<Array<Object>> {
	  return this.http.get<Array<Object>>(this.url2.concat(repo.name).concat("/branches"));
	}

	public getUrlCommit$(branch): Observable<Array<Object>> {
	  //if(branch.name == "master"){
	  	return this.http.get<Array<Object>>(this.url3.concat(branch.commit.url));
	  /*}else{
	  	return new Observable();	
	  }*/
	  
	}
}