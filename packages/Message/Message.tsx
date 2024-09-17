import React from 'react';
import './index.less';

export interface IMessage {
  type: string;
  content: string;
}

const Message = (prop: IMessage) => {
  console.log('孟静娴她太厉害了', prop.type, prop.content);

  return (
    <div className={`j-message j-message-${prop.type}`}>{prop.content}</div>
  );
};

export default Message;
