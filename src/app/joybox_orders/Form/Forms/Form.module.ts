import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule } from '@angular/forms';

import { Form2Component } from './Form.component';
import { FormService } from 'app/joybox_orders/service/Form.service';

const routes = [
    {
        path     : '',
        component: Form2Component
    }
];

@NgModule({
    declarations: [
        Form2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule ,
        FormsModule,
        FuseSharedModule
    ],
    providers   : [
       FormService
    ]
    
})
export class Form2Module
{
}
