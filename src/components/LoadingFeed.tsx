import { loading } from "../assets/svg";
import LoadingArticle from "./LoadingArticle";

const LoadingFeed = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-5xl text-stone-800 font-bold">Loading News...</h3>
      <span className="h-10 my-10 aspect-square animate-spin">{loading}</span>
      <div className="w-full grid grid-cols-4">
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
        <LoadingArticle />
      </div>
    </section>
  );
};

export default LoadingFeed;
