import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // /search
  const getResults = async (host, type) => {
    setIsLoading(true);

    const response = await fetch(`https://${host}${type}`, {
      method: "GET",
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': process.env.REACT_APP_API_ACCESS_KEY,
        'X-RapidAPI-Host': host
      },
    });

    const data = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
