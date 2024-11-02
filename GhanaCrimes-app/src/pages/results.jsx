import Footer from "../components/footer";
import Header from "../components/header";
import SearchResultsList from "../components/searchResults";

const SearchResults = () => {
  return ( 
    <>
      <main>
        <Header/>
        <SearchResultsList/>
        <Footer/>
      </main>
    </>
   );
}
 
export default SearchResults;