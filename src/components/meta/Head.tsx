import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
}

const Head: FC<Props> = ({ title, description, type = 'website' }) => {
  const defaultTitle = 'commpass - connpassのイベントを検索しやすくするサイト';
  const defaultDescription =
    'connpassのイベントを検索しやすくするために作られたサイトです。このサイトはconnpassの公式APIを使用しています。';

  return (
    <Helmet>
      <title>{title ? `${title} | ${defaultTitle}` : `${defaultTitle}`}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta
        property="og:title"
        content={title ? `${title} | ${defaultTitle}` : `${defaultTitle}`}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
};

export default Head;
