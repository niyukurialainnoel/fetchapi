import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';

@Component({
  selector: 'app-listmuscles',
  templateUrl: './listmuscles.component.html',
  styleUrls: ['./listmuscles.component.css']
})
export class ListmusclesComponent {

  exercises=[];

  constructor(private muscleslist:ApidataService) { }

  ngOnInit() {
    
    this.muscleslist.getExercises('biceps') 
      .subscribe((data) => {
        this.exercises = data;
        console.log(this.exercises)
      });
  }
}
