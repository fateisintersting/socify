export interface User{
    id:string;
    name:string;
    avatar:string;
    lastSeen?:string;
    isOnline?:boolean;
}

export interface Message{
    id:string;
    senderId:string;
    recipientId:string;
    text:string;
    timestamp:string;
    isRead:boolean;
}

export interface Conversation{
    id:string;
    user:User;
    lastMessage:{
        text:string;
        timestamp:string;

    }
    unreadCount:number;
}

export type TabType = "find" | "likes" | "matches";