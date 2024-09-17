import React, { MouseEventHandler } from 'react';
import './index.less';
interface IBtn {
    children: string;
    type?: 'default' | 'primary' | 'danger';
    onClick?: MouseEventHandler;
}
/**
 * button组件
 */
declare const _default: (prop?: IBtn) => React.JSX.Element;
export default _default;
