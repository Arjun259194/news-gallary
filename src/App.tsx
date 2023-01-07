import { useEffect, useState } from "react";
import { Countries } from "./modules/enums";
import { newsArticle } from "./modules/interfaces";
import Form from "./components/Form";

function App() {
  const apikey: string = "a481486cec3745ddae53821bb5132799";
  const [posts, setPosts] = useState<newsArticle[]>();

  const fetchData = async (country: Countries) => {
    const url = new URL("https://newsapi.org/v2/top-headlines");

    url.searchParams.set("apikey", apikey);
    url.searchParams.set("country", country);

    console.table(url);

    //! test when internet is available
    // try {
    //   const res = await fetch(url.href);
    //   const data = await res.json();
    // } catch (error) {
    //   console.log("%cThere is an Error :" + error, "color:red;font-size:3rem;");
    // }
  };

  useEffect(() => {
    // fetchData(Countries.India);
  }, []);

  return (
    <div className="w-screen">
      <Form fetchData={fetchData} />
    </div>
  );
}

export default App;
