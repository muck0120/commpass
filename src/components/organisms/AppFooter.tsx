import React, { FC } from 'react';

import styles from 'styles/components/organisms/AppFooter.module.scss';

const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <dl className={styles.list}>
        <dt className={styles.title}>【使用上の注意】</dt>
        <dd className={styles.tip}>
          このWEBサイトは「
          <a
            href="https://connpass.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            connpass - エンジニアをつなぐIT勉強会支援プラットフォーム
          </a>
          」のAPIを使用しています。
        </dd>
        <dd className={styles.tip}>
          APIの仕様上、選択した都道府県で開催されるイベントではなくても、イベントの説明等に当該都道府県がキーワードとして含まれている場合、そのイベントも検索結果に表示されることにご注意ください。
        </dd>
        <dd className={styles.tip}>
          ご要望やバグの報告等は、
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式Twitter
          </a>
          のダイレクトメッセージまたはリプライにて、お問い合わせください。
        </dd>
      </dl>
      <small className={styles.copyright}>
        &copy; {new Date().getFullYear()} commpass
      </small>
    </footer>
  );
};

export default AppFooter;
