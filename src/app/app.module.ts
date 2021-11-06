import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { ToolbarComponent } from './joybox_orders/toolbar/toolbar.component';

import { DemoMaterialModule } from './materialmodule/material-modules'
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './joybox_orders/footer/footer.component';

const appRoutes: Routes = [
   
 
    {
            path: 'Form', loadChildren: () =>
                import('./joybox_orders/Form/Forms/Form.module').then((m) => m.Form2Module)
        
       
    },

    {
        path: 'product', loadChildren: () =>
            import('./joybox_orders/academy/academy.module').then((a) => a.AcademyModule)
    
   
   },
   {
    path: '**',
    redirectTo:'Form',
  },
  
]



@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,


        // Material moment date module
        MatMomentDateModule,

        // Material
         DemoMaterialModule,

        // Fuse modules
        RouterModule.forRoot(appRoutes),

        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
