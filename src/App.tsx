import { useEffect, useState } from "react";
import { Countries } from "./modules/enums";
import { newsArticle } from "./modules/interfaces";
import Form from "./components/Form";
import NewsFeed from "./components/NewsFeed";

function App() {
  const apikey: string = "a481486cec3745ddae53821bb5132799";
  const [news, setNews] = useState<newsArticle[]>();
  const [country, setCountry] = useState<Countries>(Countries.USA);

  const fetchData = async (country: Countries) => {
    const url = new URL("https://newsapi.org/v2/top-headlines");
    url.searchParams.set("apikey", apikey);
    url.searchParams.set("country", country);
    try {
      const res = await fetch(url.href);
      res.ok ? null : new Error("Response not ok");
      const data = await res.json();
      data?.article ? new Error("Data is undefined") : setNews(data.articles);
    } catch (error) {
      console.log("%cThere is an Error :" + error, "color:red;font-size:3rem;");
    }
  };

  const changeCountry = (con: Countries): void => setCountry(con);

  useEffect(() => {
    fetchData(country);
  }, [country]);

  return (
    <div className="w-screen overflow-hidden">
      <Form changeCountry={changeCountry} />
      <NewsFeed news={news as newsArticle[]} country={country} />
    </div>
  );
}

export default App;
