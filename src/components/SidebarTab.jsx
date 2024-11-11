function SidebarTab({ imgSrc, title }) {
  return (
    <div className="flex items-center gap-3 pl-8 cursor-pointer">
      <img className="w-6" src={imgSrc} alt="" />
      <p className="font-bold">{title}</p>
    </div>
  );
}

export default SidebarTab;
