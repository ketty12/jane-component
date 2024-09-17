import React from 'react';
import './index.less';

export interface IMessage {
  type: string;
  content: string;
}

const Message = (prop: IMessage) => {
  return (
    <div className={`j-message j-message-${prop.type}`}>{prop.content}</div>
  );
};

export default Message;
