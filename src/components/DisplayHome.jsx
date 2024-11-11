import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import HomeRow from "./HomeRow";
import SongRow from "./SongRow";
function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <HomeRow header={"Featured Charts"} dataArray={albumsData} />
        <SongRow header={"Todays Top Hits"} dataArray={songsData} />
      </div>
    </>
  );
}

export default DisplayHome;
