import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FuseSharedModule } from '@fuse/shared.module';
import { AcademyCoursesComponent } from '../academy/courses/courses.component';
import { AcademyCoursesService } from '../academy/courses.service';
import { FuseSidebarModule } from '@fuse/components';
import { DemoMaterialModule } from 'app/materialmodule/material-modules';
import { DialogComponent } from './courses/viewdatiles/dialog/dialog.component';
import { ViewdetComponent } from './courses/viewdatiles/viewdet/viewdet.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';

const routes = [
    {
        path     : 'courses',
        component: AcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },

    {
        path     : 'dialog',
        component: DialogComponent,  
    },
  
];

@NgModule({
    declarations: [
        AcademyCoursesComponent,
        DialogComponent,
        ViewdetComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        DemoMaterialModule,
        FuseSharedModule,
        FuseSidebarModule,
        NgxExtendedPdfViewerModule
    ],
    entryComponents:[DialogComponent],
    providers   : [
        AcademyCoursesService,
        
    ]
})
export class AcademyModule
{
}
