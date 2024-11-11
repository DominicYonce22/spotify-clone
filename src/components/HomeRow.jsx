import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

function HomeRow({ header, dataArray }) {
  return (
    <>
      <h1 className="my-5 font-bold text-2xl">{header}</h1>
      <div className="flex overflow-auto">
        {dataArray.map((album, index) => (
          <AlbumItem
            key={index}
            name={album.name}
            desc={album.desc}
            id={album.id}
            image={album.image}
          />
        ))}
      </div>
    </>
  );
}

export default HomeRow;
