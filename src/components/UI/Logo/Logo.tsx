import styles from './Logo.module.scss';

type Props = {
  size: 'small' | 'medium' | 'large' | 'free';
};

export default function Logo({ size }: Props) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <p className={styles['first-half']}></p>
      <p className={styles.blurr}></p>
    </div>
  );
}
