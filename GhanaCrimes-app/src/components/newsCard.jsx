import { Link } from "react-router-dom";

const NewsCard = (articleData=[]) => {

  // const [article, setArticle] = useState();

  // useEffect(()=> {
  //   setArticle(articleData.articleData)
  // }, [articleData])

  if (!articleData) return null

  return ( 
    <>
      <Link to={`/news/${articleData.articleData.slug}`}>
                  <div className=" h-[250px] lg:h-40 shadow-md ">
                    <img
                      src={articleData.articleData.image?.image}
                      alt={articleData.articleData.main_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                    {" "}
                    {articleData.articleData.topic?.toUpperCase()}
                  </p>
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                    {articleData.articleData.main_title.charAt(0).toUpperCase() + articleData.articleData.main_title.slice(1)}
                  </p>
        </Link>
    </>
   );
}
 
export default NewsCard;