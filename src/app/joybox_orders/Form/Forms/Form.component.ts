import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { Form } from 'app/joybox_orders/models/Form.model';
import { FormService } from 'app/joybox_orders/service/Form.service';
import { takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';

@Component({
    selector     : 'Form-2',
    templateUrl  : './Form.component.html',
    styleUrls    : ['./Form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Form2Component implements OnInit
{
    form:Form;
    pageType: string;
    FormsForm: FormGroup;
     photo: File;
     video:File;
    doc:File;

    selectedFile: File = null;


    // Private

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _service : FormService
    )
    {
         // Set the default
         this.form = new Form();

      
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

       
    }

    UPloadePhoto(event){
     console.log(event);
     this.selectedFile = event.target.files[0];
     this.photo = this.selectedFile;   
    }
    UPloadeVideo(event){
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.video = this.selectedFile;   
       }
       UPloadeDoc(event){
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.doc = this.selectedFile;   
       }

   
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
    }
 
    /////post data
    OnSubmit(data){
       console.log(data);
       const up = new FormData();
       up.append("photo",this.photo);
       console.log(this.photo);

       
       up.append("video",this.video);
       console.log(this.video);

       up.append("doc",this.doc);
       console.log(this.doc);

       up.append("title",data.title);
       up.append("subject",data.subject);

       console.log(data.title);
       this._service.addForm(up)
       .subscribe(res=>{
          console.log(res);
          
       },err => {
           console.log(err);
           
       })

       
    }

}


