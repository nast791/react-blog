import React from 'react';
import Input from "../../../UI/Input/Input";

const Search = () => {
  return (
    <Input placeholder="Поиск" name="search" autocomplete="off" data-type="search"/>
  );
};

export default Search;