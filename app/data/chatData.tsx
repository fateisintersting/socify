import { Conversation,Message,User } from "../types/chat";

export const currentUser:User={
    id:"current-user",
    name:"Vishal",
    avatar:"image/vishal.jpg",
    isOnline:true,
}

export const users:User[]=[
    {
        id:"user-1",
        name:"Mira Celeste",
        avatar:"image/mira.jpg",
        lastSeen:"2 min ago",
        isOnline:true,
    },
    {
    id: "user-2",
    name: "Seraphina Hart",
    avatar: "image/seraphina.jpg",
    lastSeen: "27 min ago",
    isOnline: false
  },
  {
    id: "user-3",
    name: "Aurora Belle",
    avatar: "image/aurora.jpg",
    lastSeen: "1 hour ago",
    isOnline: true
  },
  {
    id: "user-4",
    name: "Luna Everly",
    avatar: "image/luna.jpg",
    lastSeen: "3 hours ago",
    isOnline: false
  }
];

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    user: users[0],
    lastMessage: {
      text: "had dinner???",
      timestamp: "00:00:46 PM"
    },
    unreadCount: 0
  },
  {
    id: "conv-2",
    user: users[1],
    lastMessage: {
      text: "What are doing",
      timestamp: "06:27:03 PM"
    },
    unreadCount: 0
  },
  {
    id: "conv-3",
    user: users[2],
    lastMessage: {
      text: "Let's catchup",
      timestamp: "03:37:43 PM"
    },
    unreadCount: 0
  },
  {
    id: "conv-4",
    user: users[3],
    lastMessage: {
      text: "✓ How are you",
      timestamp: "Yesterday"
    },
    unreadCount: 0
  },
];

export const messages: Record<string, Message[]> = {
  "conv-1": [
    {
      id: "msg-1",
      senderId: "user-1",
      recipientId: "current-user",
      text: "Hi",
      timestamp: "10:30 AM",
      isRead: true
    },
    {
      id: "msg-2",
      senderId: "current-user",
      recipientId: "user-1",
      text: "Hello",
      timestamp: "10:32 AM",
      isRead: true
    },
    {
      id: "msg-3",
      senderId: "user-1",
      recipientId: "current-user",
      text: "How are you doing?",
      timestamp: "10:33 AM",
      isRead: true
    },
    {
      id: "msg-4",
      senderId: "current-user",
      recipientId: "user-1",
      text: "I am doing good",
      timestamp: "10:35 AM",
      isRead: true
    },
    {
      id: "msg-5",
      senderId: "current-user",
      recipientId: "user-1",
      text: "& you?",
      timestamp: "10:35 AM",
      isRead: true
    },
    {
      id: "msg-6",
      senderId: "user-1",
      recipientId: "current-user",
      text: "I am also doing good",
      timestamp: "10:36 AM",
      isRead: true
    },
    {
      id: "msg-7",
      senderId: "user-1",
      recipientId: "current-user",
      text: "What's up",
      timestamp: "10:37 AM",
      isRead: false
    },
    {
      id: "msg-8",
      senderId: "current-user",
      recipientId: "user-1",
      text: "nothing much! Just trying to figure out evening plan, I've to buy some grocery?",
      timestamp: "10:38 AM",
      isRead: false
    },
    {
      id: "msg-9",
      senderId: "user-1",
      recipientId: "current-user",
      text: "had dinner???",
      timestamp: "00:00:46 PM",
      isRead: false
    }
  ]
};