import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Form } from '../models/Form.model';

@Injectable()
export class FormService implements Resolve<any>
{
    routeParams: any;
    product: any;
    onProductChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onProductChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                
            ]).then(
                () => {
                    resolve(true);
                },
                reject
            );
        });
    }


    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    private formurl = 'http://58one54zero.joybox-me.com/api/store-blog-flutter-task';
    addForm(form : any):Observable<any>{
    return this._httpClient.post(this.formurl,form)
    }
    // addProduct(form:Form):Promise<any>
    // {
    //     // return new Promise((resolve, reject) => {
    //     //     this._httpClient.post('http://58one54zero.joybox-me.com/api/store-blog-flutter-task',form))
    //     //         .subscribe((response: any) => {
    //     //             resolve(response);
    //     //         }, reject);
    //     // });
           
    // }
}
