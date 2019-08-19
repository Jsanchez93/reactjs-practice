import React from 'react';
import { ManaCost } from '../ManaCost';
import { MdFavorite, MdFileDownload } from "react-icons/md";
import { Download } from '../../utils/download';
import { Button } from '../SearchBar/style';
import { NoCard, Section, H2, Actions, Img, P } from './style';
import Back from '../../assets/images/Magic_card_back.png';

interface DetailProps {
  data: any
}

export const Detail = ({ data }: DetailProps) => {
  const downloadData = (): void => {
    Download(data);
  };

  if (!data.name) {
    return (
      <Section>
        <Img src={Back} alt="MTG" />
        <NoCard>No card selected</NoCard>
      </Section>
    );
  }

  return (
    <Section>
      <Img src={data.imageUrl} alt={data.name} />
      {data.manaCost && 
        <ManaCost manaCost={data.manaCost} />
      }
      <H2>
        {data.name}
        <small>{data.type}</small>
      </H2>
      <P>
        <span>Description:</span>
        {data.text}
      </P>
      <ul>
        <li>Artist: {data.artist}</li>
        <li>Set: {data.setName}</li>
        <li>ID: {data.id}</li>
      </ul>
      <Actions>
        <Button onClick={downloadData} type="button" className="red darken-4 waves-effect waves-light btn">
          Download Info <MdFileDownload />
        </Button>
        <Button type="button" className="red darken-4 waves-effect waves-light btn">
          Add to Favorites <MdFavorite />
        </Button>
      </Actions>
    </Section>
  );
};