import React from 'react';
import './index.less';
export interface IMessage {
    type: string;
    content: string;
}
declare const Message: (prop: IMessage) => React.JSX.Element;
export default Message;
