import React, { MouseEventHandler } from 'react';
import classnames from 'classnames';
import './index.less';

interface IBtn {
  children: string;
  type?: 'default' | 'primary' | 'danger';
  onClick?: MouseEventHandler;
}
const prefix = 'j';
/**
 * button组件
 */
export default (prop: IBtn = { children: 'click', type: 'default' }) => {
  const btnName = prefix + '-button';
  return (
    <button
      className={classnames(btnName, btnName + '-' + prop.type)}
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
};
