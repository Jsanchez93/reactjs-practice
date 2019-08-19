import axios from 'axios';
import React from 'react';
import { MdSearch } from "react-icons/md";
import { Button, Bar, Input } from './style';
import { useInputChange } from '../../Hooks/useInputChange';

interface ResultProp {
  onResult: Function;
  isLoading: Function;
  loading: boolean,
}

export const SearchBar = ({ onResult, isLoading, loading }: ResultProp) => {
  const [input, handleInputChange] = useInputChange();  

  const search = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    isLoading(true);
    axios.get('cards', {
      params: {
        name: input.searchInput,
      },
    })
    .then(({data}) => {
      onResult(data.cards);
      isLoading(false);
    });
  };

  return (
    <Bar className="searchBar">
      <form onSubmit={search}>
        <Input disabled={loading} id="searchInput" name="searchInput" type="text" onChange={handleInputChange} value={input.searchInput || ''} />
        <Button disabled={loading} type="submit" className="red darken-4 waves-effect waves-light btn extra">
          Search <MdSearch />
        </Button>
      </form>
    </Bar>
  );
};