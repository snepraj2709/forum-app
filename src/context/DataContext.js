import { createContext, useContext, useState } from "react";
import { forumData } from "../data/data";
import { useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [trending, setTrending] = useState(true);
  let [posts, setPosts] = useState([...forumData.posts]);

  const timeAgo = (date) => {
    const newDate = new Date(date);
    const seconds = Math.floor((new Date() - newDate) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }

    if (seconds < 10) return "just now";

    return Math.floor(seconds) + " seconds ago";
  };

  const sortByLatest = () => {
    const updatedArray = forumData.posts.map((post) => {
      const newDate = new Date(post.createdAt);
      const seconds = Math.floor((new Date() - newDate) / 1000);
      return { ...post, secondsAgo: seconds };
    });

    const sortedArray = updatedArray.sort(
      (a, b) => a.secondsAgo - b.secondsAgo
    );
    return sortedArray;
  };

  const sortByVote = () => {
    const updatedArray = forumData.posts.map((post) => {
      const voteDifference = post.upvotes - post.downvotes;
      return { ...post, votes: voteDifference };
    });
    const sortedArray = updatedArray.sort((a, b) => b.votes - a.votes);

    return sortedArray;
  };

  useEffect(() => {
    if (trending) {
      const updatedArray = sortByLatest();
      setPosts(updatedArray);
    } else {
      const updatedArray = sortByVote();
      setPosts(updatedArray);
    }
  }, [trending]);

  return (
    <DataContext.Provider
      value={{
        forumData,
        posts,
        sortByLatest,
        timeAgo,
        trending,
        setTrending,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
