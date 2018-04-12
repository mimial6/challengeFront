import { Component, OnInit } from '@angular/core';
import {OperationsService} from '../../../services/operations.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private operationsService: OperationsService) { }

	repos : Array<Object>;
	//branches : Array<Array<Object>> = new Array<Array<Object>> ();
	//urlCommit : Array<Object>;

	private showRepos(data: Array<Object>) {
	 	this.repos = data;
	 	
	 	for(let i = 0; i < data.length; i++){
	 		//console.log(element);
	 		this.operationsService
	 		.getBranchesList$(data[i]).subscribe(this.showBranches.bind(this,i));
	 	}
	 		
	}	
	private showBranches(pos: number, data: Array<Object>) {
	  	//this.branches.push(data);
	  	this.repos[pos]["branches"] = data; 
	  	//console.log(data);
	  	for(let i = 0; i < data.length; i++){
	  			this.operationsService
	 				.getUrlCommit$(this.repos[pos]["branches"][i]).subscribe(this.showUrlCommit.bind(this, pos, i));
	  	}
	 		//console.log(element);
	}

	private showUrlCommit(pos: number, posBranch: number, data: Object) {
	  	this.repos[pos]["branches"][posBranch]["urlCommit"] = data;
	  	//console.log(data);
	  	
	}

	ngOnInit() {
	    this.operationsService
	    	.getReposList$().subscribe(this.showRepos.bind(this));
		//Se necesita un bucle que pida la lista de Branches de cada repo
		/*for (var i = 0; i < this.repos.length; i++) {
			console.log(this.repos[i]);
		}*/
		//this.repos.forEach(function(element) {
	    	/*this.operationsService
			  	.getBranchesList$(element).subscribe(this.showBranches.bind(this));*/
	//});


	}

	


}
