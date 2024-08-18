import "./MainPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import List from "../../components/List/List";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import History from "../../components/History/History";
import Post from "../../components/Post/Post";
import Repost from "../../components/Repost/Repost";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <aside className="LeftSide">
        <NavBar />
        <List listType={"subscribes"} />
      </aside>
      <main className="Main">
        <WhatsNew />
        <History />
        <Post />
        <Repost />
      </main>
      <aside className="RightSide">
        <List listType={"closeFriends"} />
        <List listType={"music"} />
      </aside>
    </div>
  );
};
