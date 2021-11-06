import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { AcademyCoursesService } from 'app/joybox_orders/academy/courses.service';
import { IData } from 'app/joybox_orders/interfaces/IData';
import { AlertsService } from 'app/joybox_orders/service/alerts.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


   data:any;


  dataSources: IData;
  IdQuery= '';

  

  constructor(private route: ActivatedRoute,
    private _academyService: AcademyCoursesService,
    private alert : AlertsService) {
    
  }

  
  ngOnInit() {
  

  this.data = this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.IdQuery = params.id

      this._academyService.getCourseId(this.IdQuery)
      .subscribe(res => {
        console.log(res);
        this.dataSources = res.data
        this.alert.openSnackBar('successfully');
          console.log(this.dataSources);
          

      }, err => {
        console.log(err);
        this.alert.openSnackBarFail(err.errors);


      })

    })

   
  }



  

 
}





