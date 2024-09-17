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
    console.log('问渠哪得清如许');
  }, []);

  return (
    <div className="message-container">
      <Message type="info" content="这是一条提示信息"></Message>
      <Message type="success" content="这是一条成功信息"></Message>
      <Message
        type="warn"
        content="弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。弹性容器内包含了一个或多个弹性子元素。"
      ></Message>
      <Message
        type="error"
        content="--------------------------我爱你但是我觉得配不上你-------------------------------"
      ></Message>

      {messages.map((item, index) => (
        <Message key={index} type={item.type} content={item.content}></Message>
      ))}
    </div>
  );
};

export const addMessage = (message: IMessage) => {
  console.log('这儿没过来吗？');

  if (addMessageHandler) {
    addMessageHandler(message);
  }
};

export default MessageManager;
