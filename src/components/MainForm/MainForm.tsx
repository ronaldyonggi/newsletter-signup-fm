import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Button/Button';
import styles from './MainForm.module.css';
import SuccessState from '../SuccessState/SuccessState';
import useWindowWidth from '../../hooks/useWindowWidth';
import illustrationDesktop from '../../assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from '../../assets/images/illustration-sign-up-mobile.svg';

interface IFormInput {
  email: string;
}

export default function MainForm() {
  const { width: windowWidth } = useWindowWidth();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsSubmitted(true);
    setEmail(data.email);
    resetField('email');
  };

  if (isSubmitted)
    return (
      <SuccessState email={email} onDismiss={() => setIsSubmitted(false)} />
    );

  return (
    <form className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={windowWidth > 400 ? illustrationDesktop : illustrationMobile}
          alt='Illustration'
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1>Stay updated!</h1>
        <p className={styles.message}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className={styles.benefits}>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <div className={styles.inputContainer}>
          <label htmlFor='email' className={styles.label}>
            Email address
            {errors.email && (
              <p className={styles.errorMessage}>
                {errors.email.message?.toString()}
              </p>
            )}
          </label>
          <input
            type='email'
            id='email'
            placeholder='email@company.com'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Valid email required',
              },
            })}
            className={`${styles.inputEmail} ${
              errors.email && styles.inputError
            }`}
          />
        </div>
        <Button
          type='submit'
          text='Subscribe to monthly newsletter'
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
}
