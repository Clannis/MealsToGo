import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const locationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <locationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: () => null,
        keyword,
      }}
    >
      {children}
    </locationContext.Provider>
  );
};
