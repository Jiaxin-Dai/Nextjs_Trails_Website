'use client';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from "next/navigation";
import { getLatLng } from "../utils";



interface SearchState {
searchText: string;
}

export const Search = () => {
    const [value, setValue] = useState( 'Location' );

    const router = useRouter();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("aaaaaaa")
        const {target} = event;
        setValue( target.value );
      };

      const handlerKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter')
          getLatLng( value)
          .then((result) => {
              console.log(`Latitude: ${result.lat}, Longitude: ${result.lng}`);
              updateSearchParams(result.lat, result.lng)
          })
          .catch((error) => {
              console.error( error.code);
          });
      }

      const updateSearchParams = (lat: number, lng: number) => {
        const searchParams = new URLSearchParams(window.location.search);
        if(lat) {
          searchParams.set("latitude", lat.toString());
        }
        if(lng) {
          searchParams.set("longitude", lng.toString());
        }
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
      }

  return (
    <div className="form-control flex-row gap-10 p-5 pr-32">
        <input
          type={'search'}
          name={'search'}
          placeholder={value}
          className="input input-bordered w-24 md:w-auto"
          onChange={handleInputChange}
          onKeyDown={handlerKeyDown}
        />
    </div>
  
  )
}

export default Search