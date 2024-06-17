import React from 'react';
import classnames from 'classnames';
import './index.less';

interface IBtn {
  children: string;
  type?: 'default' | 'primary' | 'danger';
}
const prefix = 'j';

export default (prop: IBtn = { children: 'click', type: 'default' }) => {
  const btnName = prefix + '-button';
  return (
    <button className={classnames(btnName, btnName + '-' + prop.type)}>
      {prop.children}
    </button>
  );
};
