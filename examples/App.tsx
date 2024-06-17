import React from 'react';
import { Button } from '../lib/es';
import styles from './style.less';

export default function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">header</header>
      <Button type="primary">notice</Button>
      <Button>happy</Button>
      <Button type="danger">warn</Button>
    </div>
  );
}
