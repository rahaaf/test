import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Form
{
    id: string;
    title: string;
    handle: string;
    subject: string;
    video: string[];
    doc: string[];
    photo:string[];


    /**
     * Constructor
     *
     * @param form
     */
    constructor(form?)
    {
        form = form || {};
        this.id = form.id || FuseUtils.generateGUID();
        this.title = form.title || '';
        this.subject = form.subject || '';
        this.video = form.video || [];
        this.doc = form.doc || [];
        this.photo = form.photo || [];
    }

   
}
