export interface newsArticle {
  source: {
    id: string | null,
    name: string | null
  },
  author: string | null,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface FormProps {
  fetchData: Function;
}