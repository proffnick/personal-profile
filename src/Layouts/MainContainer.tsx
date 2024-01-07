import LeftSideBar from "./LeftSide";
import MainContents from "./RightSide";
const MainContainer  = () => {
  return(
    <section className="row p-0 m-0">
      <LeftSideBar />
      <MainContents />
    </section>
  )
}

export default MainContainer