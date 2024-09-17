import React, { useState, useEffect } from 'react';
import Message, { IMessage } from './Message';
import './index.less';
let addMessageHandler: any;
/**
 * 创建消息管理器：用于控制消息的显示与隐藏
 * @returns FC
 */
const MessageManager = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    addMessageHandler = (message: IMessage) => {
      // 给messages数组里面添加响应式数据
      setMessages((prevMessages) => [...prevMessages, message]);
      // 定时器任务-三秒后这条信息消失
      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.filter((item) => item !== message)
        );
      }, 3000);
    };
  }, []);

  return (
    <div className="message-container">
      {messages.map((item, index) => (
        <Message key={index} type={item.type} content={item.content}></Message>
      ))}
    </div>
  );
};

export const addMessage = (message: IMessage) => {
  if (addMessageHandler) {
    addMessageHandler(message);
  }
};

export default MessageManager;
