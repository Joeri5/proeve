'use client';

import React, { useState } from "react";
import Link from "next/link";
import { PageDataProps, SidePageDataProps } from "@/data/types/pageData.t";

// Import your page data
import { PageData, extraPaths } from "@/data/pageData";

// Define the type for search results
type SearchResult = {
  path: string;
  title: string;
  component: string;
  contentSnippet: string;
};

// Helper function to extract text content from React nodes
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

// Function to search through content
const searchContent = (searchTerm: string): SearchResult[] => {
  const results: SearchResult[] = [];

  // Function to search in data and add results
  const searchInData = (data: Array<PageDataProps | SidePageDataProps>) => {
    data.forEach((page) => {
      if (page.content) {
        const contentString = extractTextContent(page.content).toLowerCase();
        if (contentString.includes(searchTerm.toLowerCase())) {
          results.push({
            path: page.path,
            title: page.title,
            component: page.component,
            contentSnippet: contentString.substring(0, 100) + "...", // First 100 characters of the content
          });
        }
      }
    });
  };

  // Search through main and extra page data
  searchInData(PageData);
  searchInData(extraPaths);

  return results;
};

// The Search Component
const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    const searchResults = searchContent(searchTerm);
    setResults(searchResults);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              <h2>{result.title}</h2>
              <p>{result.contentSnippet}</p>
              <Link href={result.path}>Read more</Link>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
