export interface IData{
    id: string;
    title: string;
    subject: string;
    created_at:string;
    updated_at:string;
    medias:IMedias[];
    message:string;
    errors:string;
    status_code:string;
  
  }
  export interface IMedias {
    id: string;
    flutter_task_id: string;
    media: string;
    type:string;
  
  }