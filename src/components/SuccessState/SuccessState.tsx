import successIcon from '../../assets/images/icon-success.svg';
import Button from '../Button/Button';
import styles from './SuccessState.module.css';

interface SuccessStateProps {
  email: string;
  onDismiss: () => void;
}

export default function SuccessState({ email, onDismiss }: SuccessStateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={successIcon} alt='Success icon' />
        <h2 className={styles.title}>Thanks for subscribing!</h2>
        <p className={styles.message}>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button text='Dismiss message' onClick={onDismiss} />
      </div>
    </div>
  );
}
