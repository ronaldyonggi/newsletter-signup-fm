import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
