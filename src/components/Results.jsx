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
          `${location.pathname}/search?q=${searchTerm}&mkt=en-US&count=20`
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
        <div className="mt-[30px] ml-[180px]">
          {value?.map(({ url, name, description }, index) => (
            <div key={index} className="mb-[30px]">
              <a href={url} target="_blank" rel="noreferrer">
                <cite className="ml-[21px] pt-[1px] text-[14px] leading-[1.3] not-italic text-[#202124]">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </cite>
                <h3 className="max-w-[600px] text-ellipsis overflow-hidden whitespace-nowrap text-[20px] leading-[1.3] font-normal text-[#1a0dab] pt-[5px]">
                  {name}
                </h3>
                <span className="flex max-w-[600px] text-[#4d5156] text-[14px] leading-[1.58] line-clamp-2">
                  {description}
                </span>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="grid grid-cols-6 gap-[20px] p-[20px]">
          {value?.map(
            (
              { thumbnailUrl, webSearchUrl, hostPageDomainFriendlyName, name },
              index
            ) => (
              <a
                className="group overflow-hidden text-ellipsis whitespace-nowrap"
                href={webSearchUrl}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <div className="group-hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.3)] flex items-center justify-center h-[148px] rounded-[12px] overflow-hidden bg-[rgba(0,0,0,.03)]">
                  <img
                    className="object-cover w-[100%]"
                    src={thumbnailUrl}
                    alt={name}
                    loading="lazy"
                  />
                </div>
                <div className="hover:underline">
                  <div className="text-[#70757a] text-[12px] leading-[20px] tracking-[.2px] px-[4px]">
                    {hostPageDomainFriendlyName}
                  </div>
                  <span className="text-[#3c4043] text-[12px] leading-[20px] tracking-[.2px] max-w-[180px] px-[4px]">
                    {name}
                  </span>
                </div>
              </a>
            )
          )}
        </div>
      );
    case "/videos":
      return (
        <div className="mt-[30px] ml-[180px] max-w-[600px]">
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
              <div key={index} className="mb-[30px]">
                <cite className="ml-[21px] pt-[1px] text-[14px] leading-[1.3] not-italic text-[#202124]">
                  {publisher?.[0]?.name}
                </cite>
                <a href={contentUrl}>
                <h3 className="hover:underline max-w-[600px] text-ellipsis overflow-hidden whitespace-nowrap text-[20px] leading-[24px] font-normal text-[#1a0dab]">
                  {name}
                </h3>
                </a>
                <div className="flex">
                  <span className="mt-[4px] mr-[16px]">
                    <ReactPlayer
                      url={contentUrl}
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 },
                        },
                      }}
                      width={"178px"}
                      height={"100px"}
                    />
                  </span>
                  <div className="flex flex-col">
                    <span className="flex max-w-[406px] text-[#4d5156] text-[14px] leading-[22px] line-clamp-2">
                      {description}
                    </span>
                    <div className="mt-[12px]">
                      <span className="text-[14px] leading-[20px] text-[#3c4043]">
                        {creator?.name}
                      </span>
                      {"  ·  "}
                      <span className="text-[14px] leading-[20px] text-[#70757a]">
                        {datePublished.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div className="mt-[30px] ml-[180px]">
          {value?.map(
            (
              { provider, url, name, description, datePublished, image },
              index
            ) => (
              <a
                key={index}
                className="group flex mb-[30px]"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span className="ml-[21px] mb-[8px] text-[12px] leading-[16px] text-[#202124]">
                    {provider?.[0]?.name}
                  </span>
                  <div>
                    <div className="group-hover:underline max-w-[545px] overflow-hidden whitespace-normal text-[20px] leading-[24px] font-normal text-[#1a0dab] pt-[5px]">
                      {name}
                    </div>
                  </div>
                  <div className="flex max-w-[545px] text-[#4d5156] text-[14px] leading-[1.4] mt-[8px] line-clamp-2">
                    {description}
                  </div>
                  <div className="text-[14px] leading-[16px] mt-[8px] text-[#70757a]">
                    {datePublished.substring(0, 10)}
                  </div>
                </div>
                <div className="flex w-[92px] h-[92px] rounded-[8px] bg-[#f8f9fa] ml-[16px] overflow-hidden">
                  <img
                    className="object-cover h-[100%]"
                    src={image?.thumbnail?.contentUrl}
                    alt={name}
                  />
                </div>
              </a>
            )
          )}
        </div>
      );
    default:
      return "ERROR!";
  }
};
