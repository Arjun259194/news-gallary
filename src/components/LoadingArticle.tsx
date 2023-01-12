import { Lines } from "../assets/svg";

const LoadingArticle = () => {
  return (
    <div className="min-h-[12rem] p-2 m-2 flex flex-col items-start justify-end [&:nth-child(3n+1)]:col-span-2 [&:nth-child(3n+1)]:row-span-2 rounded-lg shadow-2xl animate-pulse">
      {Lines}
    </div>
  );
};

export default LoadingArticle;
