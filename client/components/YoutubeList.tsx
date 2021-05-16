const items = [
  {
    title: 'Canon EOS M50 Mark II + EF-M 15-45mm Kit',
    category: 'Camera',
    source:
      '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KSKV35C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=codetechtv-20&language=en_US',
    url: 'https://www.amazon.com/dp/B08KSKV35C?_encoding=UTF8&pd_rd_i=B08KSKV35C&pd_rd_w=fQpWD&pf_rd_p=a9c971b6-8236-406c-a72d-474685615e32&pf_rd_r=T1ZM4S94KRHK1A65S4RP&pd_rd_r=5e6d0301-dc4c-4cd7-8895-e53a7bb5b50b&pd_rd_wg=SdcVZ&linkCode=ll1&tag=codetechtv-20&linkId=ca94971f2539e72aec2572d193edf090&language=en_US&ref_=as_li_ss_tl',
  },
  {
    title: 'Blue Yeti USB Mic',
    category: 'Audio',
    source:
      '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00N1YPXW2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=codetechtv-20&language=en_US',
    url: 'https://www.amazon.com/dp/B00N1YPXW2?&linkCode=li2&tag=codetechtv-20&linkId=c1682ed66b0d87306258f9b0aa89031c&language=en_US&ref_=as_li_ss_il',
  },
  {
    title: 'Microphone Stand for Blue Yeti',
    category: 'Audio',
    source:
      '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07Q6W8TQ9&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=codetechtv-20&language=en_US',
    url: 'https://www.amazon.com/dp/B07Q6W8TQ9?&linkCode=li2&tag=codetechtv-20&linkId=d3083c955e813d9471a2e9b79a3d11d0&language=en_US&ref_=as_li_ss_il',
  },
  {
    title: 'Neewer 2-Pack LED Video Light',
    category: 'Lighting',
    source:
      '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08NX6HWDZ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=codetechtv-20&language=en_US',
    url: 'https://www.amazon.com/Neewer-Conference-3200K-5600K-Dimmable-Streaming-dp-B08NX6HWDZ/dp/B08NX6HWDZ?&linkCode=li2&tag=codetechtv-20&linkId=9839e099da836a49bda642398fd42c61&language=en_US&ref_=as_li_ss_il',
  },
];

const YoutubeList = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {items.map(items => (
        <li key={items.source} className="relative">
          <a href={items.url} target="_blank" rel="noopener noreferrer">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img
                src={items.source}
                alt=""
                className="object-cover pointer-events-none group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {items.title}</span>
              </button>
            </div>
          </a>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {items.title}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {items.category}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default YoutubeList;
