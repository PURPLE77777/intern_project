'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Page() {
  const router = useRouter();
  console.log('router', router);

  return <div className={styles.page}>t</div>;
}
