import React from 'react';
import { IMessage } from './Message';
import './index.less';
/**
 * 创建消息管理器：用于控制消息的显示与隐藏
 * @returns FC
 */
declare const MessageManager: () => React.JSX.Element;
export declare const addMessage: (message: IMessage) => void;
export default MessageManager;
