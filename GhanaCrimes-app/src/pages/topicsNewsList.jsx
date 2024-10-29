import Header from "../components/header";
import TopicsNewsListContent from "../components/topicsNewsListContent";
import Footer from "../components/footer";

const TopicsNewsList = () => {
  return (
    <main className="overflow-x-hidden px-[5%]">
      <Header />
      <TopicsNewsListContent />
      <Footer />
    </main>
  );
};

export default TopicsNewsList;
