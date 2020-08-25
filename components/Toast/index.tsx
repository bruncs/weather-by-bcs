import React, { useState } from 'react';

import styles from './Toast.module.css';

interface Props {
  message: string;
}

const Toast: React.FC<Props> = (props: Props) => {
  const { message } = props;
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.container}>
      {!imageError && <img src="/images/times-circle.svg" onError={() => setImageError(true)} />}
      {message}
    </div>
  );
};

export default Toast;
