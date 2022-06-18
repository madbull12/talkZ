export interface IPost {
    body:String;
    id:string;
    image:string;
    subtalkz_id:string;
    talkZ_voteList:Vote[];
    talkZ_subtalkz:Subtalkz;
    talkz_commentList:Comment[];
    title:string;
    username:string;
    created_at:Date;
    talkZ_user:User
}

interface User {
    name:string;
    image:string;
    id:string;
}

export interface Subtalkz {
    id:string;
    topic:string;
    talkZ_postList:IPost[]
}

export interface Vote {
    upvote:boolean;
    username:string

}