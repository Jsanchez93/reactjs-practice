import React from 'react';
import { Cost, Img, Span } from './style';

interface ManaCostProps {
  manaCost: string,
}
interface ListType {
  [key: string]: string,
}

export const ManaCost = ({ manaCost }: ManaCostProps) => {
  const arrayMana = manaCost.split('}{').map(el => el.replace('{', '').replace('}', ''));
  const imageList: ListType = {
    W: 'https://gkmtg.pro/images/mana_w.svg',
    U: 'https://gkmtg.pro/images/mana_u.svg',
    B: 'https://gkmtg.pro/images/mana_b.svg',
    G: 'https://gkmtg.pro/images/mana_g.svg',
    R: 'https://gkmtg.pro/images/mana_r.svg',
    'B/G': 'https://gkmtg.pro/images/mana_bg.svg',
    'B/R': 'https://gkmtg.pro/images/mana_br.svg',
    'G/U': 'https://gkmtg.pro/images/mana_gu.svg',
    'G/W': 'https://gkmtg.pro/images/mana_gw.svg',
    'R/G': 'https://gkmtg.pro/images/mana_rg.svg',
    'R/W': 'https://gkmtg.pro/images/mana_rw.svg',
    'U/B': 'https://gkmtg.pro/images/mana_ub.svg',
    'U/R': 'https://gkmtg.pro/images/mana_ur.svg',
    'W/B': 'https://gkmtg.pro/images/mana_wb.svg',
    'W/U': 'https://gkmtg.pro/images/mana_wu.svg',
  };

  const mana = arrayMana.map((el) => {
    if (imageList[el]) {
      return imageList[el];
    }
    return { element: el };
  });
  
  return (
    <Cost>
      { 
        mana.map((el, index) => {
          if (typeof el === 'object') {
            return (
              <Span key={index}>{el.element}</Span> 
            );
          } else {
            return (
              <Img key={index} src={el} alt="Mana"/>
            );
          }
        }) 
      }
      
    </Cost>
  );
};