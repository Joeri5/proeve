'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageDataProps, SidePageDataProps } from "@/data/types/pageData.t";
import { PageData, extraPaths } from "@/data/pageData";

import "../../styles/searchpage.css"

import SearchIcon from "../../../public/images/icons/search.svg"

type SearchResult = {
  path: string;
  title: string;
  component: string;
  contentSnippet: string;
};

const extractTextContent = (node: React.ReactNode): string => {
  if (typeof node === "string") {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map(extractTextContent).join("");
  }
  if (React.isValidElement(node)) {
    return extractTextContent(node.props.children);
  }
  return "";
};

const buildSearchResults = (searchTerm: string): SearchResult[] => {
  const results: SearchResult[] = [];

  const searchInData = (data: Array<PageDataProps | SidePageDataProps>) => {
    data.forEach((page) => {
      if (page.content) {
        const contentString = extractTextContent(page.content).toLowerCase();
        if (contentString.includes(searchTerm.toLowerCase())) {
          results.push({
            path: page.path,
            title: page.title,
            component: page.component,
            contentSnippet: contentString.substring(0, 150) + "...",
          });
        }
      }
    });
  };

  searchInData(PageData);
  searchInData(extraPaths);

  return results;
};

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    const searchResults = buildSearchResults(searchTerm);
    setResults(searchResults);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="searchForm">
      <nav className="homeButton">
        <Link href="/">⬅ home</Link>
      </nav>
      <section className="searchForm__inputsection">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Added event listener for key press
          placeholder="Search. . ."
          className="searchForm__input"
        />
        <button onClick={handleSearch} className="searchForm__button">
          <Image src={SearchIcon} alt="search icon" className="searchForm__button__icon" />
        </button>
      </section>

      <div className="searchForm__results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="searchForm__results__section">
              <h2 className="searchForm__results__section__title">{result.title}</h2>
              <p className="searchForm__results__section__text">{result.contentSnippet}</p>
              <Link href={result.path} className="searchForm__results__section__link" key={result.path}>Read More</Link>
            </div>
          ))
        ) : (
          <p className="searchForm__results__noresults">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
