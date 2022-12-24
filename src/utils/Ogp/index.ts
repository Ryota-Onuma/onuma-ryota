/* eslint-disable no-restricted-syntax */
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
export type OGP = {
  url: string;
  title: string;
  description: string;
  image: string;
};

/* eslint-disable no-plusplus */
export const getOgpData = async (links: string[]) => {
  const metadata = await Promise.all(
    links.map(async (link) => {
      const metas = await fetch(link)
        // 3. URLからtext/htmlデータを取得 ====================================
        .then((res) => res.text())
        .then((text) => {
          const metaData: OGP = {
            url: link,
            title: '',
            description: '',
            image: '',
          };

          const doms = new JSDOM(text);
          const metaInDoms = doms.window.document.getElementsByTagName('meta');
          for (const meta of metaInDoms) {
            const np =
              meta.getAttribute('name') || meta.getAttribute('property');
            if (typeof np === 'string') {
              if (np.match(/title/)) {
                metaData.title = meta.getAttribute('content');
              }
              if (np.match(/description/)) {
                metaData.description = meta
                  .getAttribute('content')
                  .slice(0, 100);
              }
              if (np.match(/image/)) {
                metaData.image = meta.getAttribute('content');
              }
            }
          }
          return metaData;
        });
      return metas;
    })
  );
  return metadata.filter((d) => d !== undefined);
};

export const getFloatingUrls = (md: string): string[] => {
  const regFloatUrl =
    /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+/g;
  const floatUrls = md.match(regFloatUrl);

  return floatUrls ?? [];
};
