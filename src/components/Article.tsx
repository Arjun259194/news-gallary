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
    <article className="h-60 m-2 cursor-pointer group ">
      <div className="relative rounded-lg overflow-hidden">
        <img className="aspect-video z-10" src={article.urlToImage} />
        <div className=" absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent z-20"></div>
        <div className="p-3 flex items-end absolute inset-0">
          <span className="w-4/5 text-lg font-bold text-stone-200 z-30">
            {article.title}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Article;
