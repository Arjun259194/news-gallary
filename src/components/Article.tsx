import { FC } from "react";
import { newsArticle } from "../modules/interfaces";
import imageNotFound from "../assets/image-not-found.png";

interface Props {
  article: newsArticle;
}

const getImageType = (url: string): string | undefined => url.split(".").pop();

const removeHTML = (stringWithHTML: string): string =>
  new DOMParser()
    .parseFromString(stringWithHTML, "text/html")
    .getElementsByTagName("body")[0].innerText;

const formateDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString();

const Article: FC<Props> = ({ article }) => {
  article.urlToImage =
    !article.urlToImage || getImageType(article.urlToImage) === "gif"
      ? imageNotFound
      : article.urlToImage;

  article.description = article.description?.length
    ? removeHTML(article.description)
    : "Description is not found, Click on more to read the full news";

  return (
    <article className="m-3 rounded-lg overflow-hidden shadow-xl  cursor-default  group [&:nth-child(3n+1)]:col-span-2 [&:nth-child(3n+1)]:row-span-2 last:col-span-2 ">
      <div className="h-full w-full relative group-hover:rotate-x-180 transition-all duration-500 ease-out">
        <div className="h-full relative overflow-hidden z-10 group-hover:z-0 transition-all duration-500 ease-out">
          <img className="h-full w-full z-20" src={article.urlToImage} />
          <div className=" absolute inset-0 bg-gradient-to-t from-stone-800 to-transparent z-30"></div>
          <div className="p-3 flex items-end absolute inset-0">
            <h3 className="w-4/5 text-sm group-[&:nth-child(3n+1)]:text-xl group-last:text-xl font-semibold text-stone-200 z-30">
              {article.title}
            </h3>
          </div>
        </div>
        <div className="p-2 flex flex-col items-start justify-between absolute border-2 border-white bg-white inset-0 z-0 rotate-x-180 group-hover:z-10 transition-all duration-500 ease-out">
          <span className="group-[&:nth-child(3n+1)]:text-lg group-last:text-lg font-semibold text-sm">
            {article.description}
          </span>
          <div className="w-full flex items-end justify-between">
            <a href={article.url} target="_blank">
              <button className="px-4 py-1 bg-blue-300 rounded-lg capitalize text-center text-lg hover:brightness-105">
                more
              </button>
            </a>
            <span className="text-xs text-stone-500">
              {formateDate(article.publishedAt)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
