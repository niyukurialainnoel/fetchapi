import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';

@Component({
  selector: 'app-listmuscles',
  templateUrl: './listmuscles.component.html',
  styleUrls: ['./listmuscles.component.css']
})
export class ListmusclesComponent {

  

  constructor(private muscleslist:ApidataService) { }
  // const exercisesPromise = new Promise((resolve, reject) => {
  //   this.muscleslist.getExercises('biceps').subscribe(
  //     (data) => {
  //       resolve(data);
  //     },
  //     (error) => {
  //       reject(error);
  //     }
  //   );
  // });

  exercises=[];

  ngOnInit() {
    
    this.muscleslist.getExercises('biceps') 
      .subscribe((data) => {
        this.exercises = data;
        console.log(this.exercises)
        for (let i=0;this.exercises.length;i++){
          console.log(this.exercises[0])
        }
      });
  }
}
