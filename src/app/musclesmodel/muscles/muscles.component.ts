import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';

@Component({
  selector: 'app-listmuscles',
  templateUrl: './muscles.component.html',
  styleUrls: ['./muscles.component.css']
})
export class musclesComponent {

  

  constructor(private muscleslist:ApidataService) { }

  exercises:any=[];

  ngOnInit() {
    
    this.muscleslist.getExercises('biceps') 
      .subscribe((data) => {
        this.exercises = data;
        console.log(this.exercises)
        for (let i=0;i<this.exercises.length;i++){
          console.log(this.exercises[i].name)
        }
      });
  }
}
