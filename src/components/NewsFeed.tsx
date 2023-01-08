import { FC } from "react";
import { Countries } from "../modules/enums";
import { newsArticle } from "../modules/interfaces";

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
    <div>
      <h1>{codeToName[country]}</h1>
      <div className="flex flex-col items-center">
        {news.map(article => (
          <div key={article.url}>
            <img src={article.urlToImage} alt="" />
            <h2 className="text-6xl text-red-500">{article.title}</h2>
            <span>{article.description}</span>
            <p>{`name: ${article.source.name}`}</p>
            <a href={article.url}>MORE...</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
