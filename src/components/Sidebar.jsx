import { assets } from "../assets/assets";
import LibraryTab from "./LibraryTab";
import SidebarTab from "./SidebarTab";

function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <SidebarTab imgSrc={assets.home_icon} title={"Home"} />
        <SidebarTab imgSrc={assets.search_icon} title={"Search"} />
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} />
            <img className="w-5" src={assets.plus_icon} />
          </div>
        </div>

        <LibraryTab
          headerText={"Create your first playlist"}
          text={`it's easy we  will help you`}
          buttonText={"Create Playlist"}
        />
        <LibraryTab
          extraClass={"mt-4"}
          headerText={`Let's find some podcasts to follow`}
          text={`we'll keep you updated on new episodes`}
          buttonText={"Browse podcasts"}
        />
      </div>
    </div>
  );
}

export default Sidebar;
