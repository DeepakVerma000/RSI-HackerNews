
export interface StoryModel  {
    id: number;
    time: number; 
    title: string;
    url: string;
    user:string;
    score:number;
    text: string;
    parent: string;
    poll: string;
    kids: string[];
    parts: string;
    descendants: number;
    type: string;
}