'use client';
import React, { useState, ChangeEvent } from 'react';
import { getLatLng } from "../utils";



interface SearchState {
searchText: string;
}

export const Search = () => {
    const [state, setState] = useState<SearchState>({ searchText: '' });
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("aaaaaaa")
        const searchText = event.target.value;
        setState({ searchText });
        getLatLng( 'Tempe' )
            .then((result) => {
                console.log(`Latitude: ${result.lat}, Longitude: ${result.lng}`);
            })
            .catch((error) => {
                console.error( error.code);
            });
      };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        value={state.searchText}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Search