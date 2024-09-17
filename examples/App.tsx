import React from 'react';
import { Button, MessageManager, addMessage } from '../lib/es';
import styles from './style.less';

export default function App() {
  const handleClick = (type: string) => {
    addMessage({ type, content: `This is a ${type} message` });
  };

  return (
    <div className={styles.app}>
      <header>header</header>
      <Button type="primary" onClick={() => handleClick('success')}>
        notice
      </Button>
      <Button onClick={() => handleClick('info')}>happy</Button>
      <Button type="danger" onClick={() => handleClick('error')}>
        warn
      </Button>
      <MessageManager />
    </div>
  );
}
