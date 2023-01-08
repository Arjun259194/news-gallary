import { FC } from "react";
import { newsArticle } from "../modules/interfaces";
import imageNotFound from "../assets/image-not-found.png";

interface Props {
  article: newsArticle;
}

const getImageType = (url: string): string | undefined => url.split(".").pop();

const Article: FC<Props> = ({ article }) => {
  article.urlToImage =
    !article.urlToImage || getImageType(article.urlToImage) === "gif"
      ? imageNotFound
      : article.urlToImage;

  return (
    <article className="m-2 rounded-lg overflow-hidden cursor-pointer relative group [&:nth-child(4n+1)]:col-span-2 [&:nth-child(4n+1)]:row-span-2  hover:rotate-x-180 transition-all duration-300">
      <div className="h-full relative rounded-lg overflow-hidden z-10 group-hover:z-0 transition-all duration-300">
        <img className="h-full z-20" src={article.urlToImage} />
        <div className=" absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent z-30"></div>
        <div className="p-3 flex items-end absolute inset-0">
          <span className="w-4/5 text-lg font-bold text-stone-200 z-30">
            {article.title}
          </span>
        </div>
      </div>

      <div className="p-2 flex flex-col items-start absolute bg-stone-500 inset-0 z-0 rotate-x-180 group-hover:z-10 transition-all duration-300">
        <span>{article.description}</span>
        <a href={article.url}>more</a>
      </div>
    </article>
  );
};

export default Article;
