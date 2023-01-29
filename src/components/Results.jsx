import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

import {
  SEARCH_HOST,
  IMAGE_HOST,
  VIDEO_HOST,
  NEWS_HOST,
} from "../constants/constants";

export const Results = () => {
  const {
    results: { webPages, value },
    isLoading,
    getResults,
    searchTerm,
  } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/search") {
        getResults(SEARCH_HOST, `/search?q=${searchTerm}&mkt=en-US&count=10`);
      } else if (location.pathname === "/images") {
        getResults(
          IMAGE_HOST,
          `${location.pathname}/search?q=${searchTerm}&mkt=en-US&count=10`
        );
      } else if (location.pathname === "/news") {
        getResults(
          NEWS_HOST,
          `${location.pathname}/search?q=${searchTerm}&mkt=en-US&count=10`
        );
      } else {
        getResults(
          VIDEO_HOST,
          `${location.pathname}/search?q=${searchTerm}&mkt=en-US&count=10`
        );
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {webPages?.value?.map(({ url, name, snippet }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {name}
                </p>
                <p>{snippet}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {value?.map(
            (
              { thumbnailUrl, webSearchUrl, hostPageDomainFriendlyName, name },
              index
            ) => (
              <a
                className="sm:p-3 p-5"
                href={webSearchUrl}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img src={thumbnailUrl} alt={name} loading="lazy" />
                <p>{hostPageDomainFriendlyName}</p>
                <p className="w-36 break-words text-sm mt-2">{name}</p>
              </a>
            )
          )}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {value?.map(
            (
              {
                name,
                contentUrl,
                description,
                creator,
                publisher,
                datePublished,
              },
              index
            ) => (
              <div key={index} className="p-2">
                <p>{name}</p>
                <ReactPlayer
                  url={contentUrl}
                  controls
                  width="355px"
                  height="200px"
                />
                <p>{description}</p>
                <p>
                  {console.log(publisher?.[0]?.name)}
                  {creator?.name}
                  {datePublished}
                </p>
              </div>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {value?.map(
            ({ provider, url, name, description, datePublished }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <p>{provider?.[0]?.name}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {name}
                  </p>
                </a>
                <p>{description}</p>
                <div className="flex gap-4">{datePublished}</div>
              </div>
            )
          )}
        </div>
      );
    default:
      return "ERROR!";
  }
};
