import Banner from "../assets/Component/Banner/Banner";
import LatesNews from "../assets/Component/LatesNews/LatesNews";
import Popular from "../assets/Component/Popular/Popular";
import SpotLight from "../assets/Component/SpotLiight/SpotLight";
import TopDeals from "../assets/Component/TopDeals/TopDeals";
import WinnerContest from "../assets/Component/WinnerContest/WinnerContest";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="m-24">
           <Popular></Popular>
           <SpotLight></SpotLight>
           <WinnerContest></WinnerContest>
           <TopDeals></TopDeals>
           <LatesNews></LatesNews>
           </div>
        </div>
    );
};

export default Home;