type fastLinkPropType = {
  item: {
    title: string;
    url: string;
  };
};

export const FastLink = ({ item }: fastLinkPropType) => {
  console.log(item);

  return (
    <a href={item?.url}>
      <div className="w-12 h-12 border-2 flex items-center justify-center border-orange-500 rounded-lg relative bg-slate-700">
        <div
          style={{ backgroundImage: `url(${item.url}/favicon.ico)` }}
          className="w-6 h-6 rounded-lg bg-cover bg-center z-10"
        ></div>
        <div className="uppercase font-bold text-white flex items-center justify-center w-8 h-8 rounded-md bg-cover bg-center bg-slate-700 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0">
          {item.title[0]}
        </div>
      </div>
    </a>
  );
};
