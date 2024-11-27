export interface IVideo {
    id: string; 
    title: string; 
    description: string; 
    url: string; 
    thumbnail: string;  
    views: number; 
    uploadedAt: string; 
    isLoaded: boolean;
    category: string;
    likes?: number;
    favorites?: number;


  }