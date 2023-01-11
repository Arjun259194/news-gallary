import { Lines } from "../assets/svg";

const LoadingArticle = () => {
  return (
    <div className="h-48 p-2 m-2 flex flex-col items-start justify-end rounded-lg shadow-2xl animate-pulse">
      {Lines}
    </div>
  );
};

export default LoadingArticle;
