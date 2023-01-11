import { FC } from "react";
import { Countries } from "../modules/enums";
import { newsArticle } from "../modules/interfaces";
import Article from "./Article";
import LoadingFeed from "./LoadingFeed";

interface Props {
  news: Array<newsArticle>;
  country: Countries;
}

const NewsFeed: FC<Props> = ({ news, country }) => {
  const codeToName = {
    in: "India",
    ca: "Canada",
    au: "Australia",
    jp: "Japan",
    us: "USA",
    ru: "Russia",
    cn: "China",
    de: "Germany",
    br: "Brazil",
    mx: "Mexico",
    nz: "NewZealand",
  };

  return (
    <section className="flex flex-col items-center bg-white overflow-hidden">
      <span className="text-xl text-gray-800">You are seeing top headlines for</span>
      <h1 className="text-5xl text-stone-800 font-bold">{codeToName[country]}</h1>
      <div className="w-full p-4 pt-6 grid grid-cols-4 grid-flow-dense">
        {news?.map(article => (
          <Article key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
