import React from 'react';

import styles from './Button.module.css';

interface Props {
  text: string;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = (props: Props) => {
  const { text, loading, onClick } = props;

  return (
    <button disabled={loading} className={styles.button} onClick={onClick}>
      {loading ? 'Loading' : text}
    </button>
  );
};

export default Button;
