import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';

import { AcademyCoursesService } from '../courses.service';
import { Router } from '@angular/router';



@Component({
    selector   : 'academy-courses',
    templateUrl: './courses.component.html',
    styleUrls  : ['./courses.component.scss'],
    animations : fuseAnimations
})
export class AcademyCoursesComponent implements OnInit, OnDestroy
{
    
    // Private
    private _unsubscribeAll: Subject<any>;
    courses: any;
    idcourse: any;

    /**
     * Constructor
     *
     * @param {AcademyCoursesService} _academyCoursesService
     */
    constructor(
        private _academyCoursesService: AcademyCoursesService,
        private router :Router
    )
    {
       
      

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        this._academyCoursesService.getCourses()
        .subscribe(res=>{
            console.log(res);
            this.courses = res.data;
            
        },err=>{
            console.log(err);
            
        })
         
       
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

    
    }

     /**
     * Get courseId
     *
     * 
     */
   
    OncoursId(courseId:any){
    
        console.log('id:',courseId);
        
        this.router.navigate(['/dialog'],{queryParams:{id:courseId}})
      }

        

}

