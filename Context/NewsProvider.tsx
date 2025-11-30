// import { useQuery } from "@tanstack/react-query";

"use client";

import axios from "axios";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ApiArticle {
  author?: string;
  category?: string;
  description?: string;
  image?: {
    img: string;
  };
  published_at?: string;
  source?: string;
  title: string;
  content_api?: string;
}

interface ApiResponse {
  response: ApiArticle[];
}

interface NewsContextType {
  feed: ApiArticle[] | null;
  setFeed: Dispatch<SetStateAction<ApiArticle[] | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string; // <-- must be string, not boolean
  setError: Dispatch<SetStateAction<string>>; // <-- must match useState
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

const key = process.env.NEXT_PUBLIC_API_KEY;

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [feed, setFeed] = useState<ApiArticle[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          `https://news.fcsapi.com/api/news?access_key=${key}`
        );
        setFeed(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        setError("Failed to load news");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  const value = {
    feed,
    setFeed,
    loading,
    setLoading,
    error,
    setError,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNewsContext = (): NewsContextType => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error("useNewsContext must be used inside a NewsProvider");
  }
  return context;
};
