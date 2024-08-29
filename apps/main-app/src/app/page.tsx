import styles from './page.module.css';
import { SharedUi } from '@nextjs-monorepo/shared-ui';
import { SuccessButton } from '@nextjs-monorepo/shared-ui';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome main-app 👋
            </h1>
          </div>
          <SharedUi />
          <SuccessButton />
        </div>
      </div>
    </div>
  );
}
