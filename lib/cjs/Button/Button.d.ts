import React from 'react';
import './index.less';
interface IBtn {
    children: string;
    type?: 'default' | 'primary' | 'danger';
}
declare const _default: (prop?: IBtn) => React.JSX.Element;
export default _default;
