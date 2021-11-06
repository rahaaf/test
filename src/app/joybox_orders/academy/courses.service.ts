import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AlertsService } from '../service/alerts.service';

@Injectable()
export class AcademyCoursesService implements Resolve<any>
{
    onCategoriesChanged: BehaviorSubject<any>;
    onCoursesChanged: BehaviorSubject<any>;
    courseid:any;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private alertservice : AlertsService
    )
    {
        // Set the defaults
        this.onCategoriesChanged = new BehaviorSubject({});
        this.onCoursesChanged = new BehaviorSubject({});
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCourses(),
                this.getCourseId(this.courseid)
            ]).then(
                () => {
                    resolve(true);
                },
                reject
            );
        });
    }

   
    
    /**
     * Get courses
     *
     * @returns {Observable<any>}
     */
    getCourses() :Observable<any>{
        return this._httpClient.get('http://58one54zero.joybox-me.com/api/blogs-flutter-task');

    }
    /**
     * Get courseId
     *
     * @returns {Observable<any>}
     */
    getCourseId(Id:any): Observable<any>{

       return this._httpClient.get('http://58one54zero.joybox-me.com/api/blog-flutter-task'+`/?id=${Id}`);       
       
    }
 


}
