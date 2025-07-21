import BannerItem from "../components/BannerItem";
import ButtonList from "../components/ButtonList";
import ExchangeRate from "../components/ExchangeRate";
import MemberInfo from "../components/MemberInfo";
import NewList from "../components/NewList";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="HomePage">
      <div className="HP_Content">
        <BannerItem />
        {!isMobile && <ButtonList />}
        <NewList />
        <ExchangeRate />
      </div>
      <MemberInfo />
    </div>
  );
}

export default HomePage;
