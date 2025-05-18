"use client";
import { useState } from "react";
import Header from "./Components/Header";
import { Conversation, TabType } from "./types/chat";
import useIsMobile from "./hooks/use-mobile";
import ChatList from "./Components/ChatList";
import { conversations } from "./data/chatData";

export default function Home() {

  const [activeTab,setActiveTab] = useState<TabType>("matches");
  const [selectedConversion, setSelectedConversation] = useState<Conversation | null>(null);
  const isMobile = useIsMobile();

  const likesCount = 8;
  const matchesCount = 5;

  const handleSelectConversation = (conversation:Conversation)=>{
    setSelectedConversation(conversation);
  }
 
  return (
    <div className="" >
      <Header />
    </div>
  );
}
