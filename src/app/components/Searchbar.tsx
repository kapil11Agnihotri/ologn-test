"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import Image from "next/image";
import Locations from "../res/Locations.json";
import Link from "next/link";
import { IWeatherLocation } from "../types/HomePageTypes";

const locations: IWeatherLocation[] = Locations;

export default function Searchbar() {
  const [selectedlocations, setSelectedlocations] =useState<IWeatherLocation>();
  const [filteredlocations, setFilteredlocations] = useState<IWeatherLocation[]>([]);
  const [isSearching, setIsSearching] = useState(false); // State to track focus
  const [searchQuery, setSearchQuery] = useState(""); // State to track input text

  const search = (event: AutoCompleteCompleteEvent) => {
    setSearchQuery(event.query); // Update search query state
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredlocations;

      if (!event.query.trim().length) {
        _filteredlocations = [...locations];
      } else {
        _filteredlocations = locations.filter((location) => {
          return location?.localityName
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredlocations(_filteredlocations);
    }, 250);
  };

  // Custom item template for AutoComplete suggestions
  const itemTemplate = (item: IWeatherLocation) => (
    <div className="p-3 w-[29rem]">
      <Link href={`/locality/${item?.localityId}?${item?.localityName},${item?.cityName}`} >
        <div className="font-semibold">{item.localityName}</div>
        <div className="text-sm text-gray-500">{item.cityName}</div>
      </Link>
    </div>
  );

  return (
    <div className="max-w-full">
      <div className="flex gap-7">
        <div className="relative flex items-center">
          <AutoComplete
            className="bg-gray border border-gray-400 h-[3rem] w-[30rem] relative rounded-[25px]"
            field="localityName"
            multiple
            value={selectedlocations}
            suggestions={filteredlocations}
            completeMethod={search}
            onChange={(e) => setSelectedlocations(e.value)}
            onFocus={() => setIsSearching(true)} // Set to true on focus
            onBlur={() => setIsSearching(!isSearching)} // Set to false on blur
            itemTemplate={itemTemplate} // Add custom item template
          />
          {!isSearching && searchQuery === "" && (
            <IoIosSearch className="absolute top-[17px] opacity-70 left-[17px]" />
          )}
          <Image
            src="/mic.png"
            alt="mic-logo"
            className="absolute top-[14px] right-[17px] cursor-pointer"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
}
