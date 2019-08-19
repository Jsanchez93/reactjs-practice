import React from 'react';
import { Article } from './style';

interface PreviewProps {
  more: Function,
  data: {
    imageUrl: string,
    setName: string,
    id: string,
  }
}

export const PreviewCard = (props: PreviewProps) => {  
  const { data, more } = props;
  const articleStyle = { backgroundImage: `url(${data.imageUrl})` };
  const moreDetails = (): void => {
    more(data);
  };
  return (
    <Article style={articleStyle} onClick={moreDetails}>
      <span>{data.setName}</span>
    </Article>
  );
};