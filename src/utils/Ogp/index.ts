const jsdom = require('jsdom');

const { JSDOM } = jsdom;
/* eslint-disable no-plusplus */
export const getOgpData = async (links: string[]) => {
  const metadata = await Promise.all(
    links.map(async (link) => {
      const metas = await fetch(link)
        // 3. URLからtext/htmlデータを取得 ====================================
        .then((res) => res.text())
        .then((text) => {
          const metaData = {
            url: link,
            title: '',
            description: '',
            image: '',
          };

          const doms = new JSDOM(text);
          const metaInDoms = doms.window.document.getElementsByTagName('meta');
          for (let i = 0; i < metaInDoms.length; i++) {
            let pro = metaInDoms[i].getAttribute('property');
            if (typeof pro === 'string') {
              if (pro.match('title'))
                metaData.title = metaInDoms[i].getAttribute('content');
              if (pro.match('description'))
                metaData.description = metaInDoms[i].getAttribute('content');
              if (pro.match('image'))
                metaData.image = metaInDoms[i].getAttribute('content');
            }
            pro = metaInDoms[i].getAttribute('name');
            if (typeof pro === 'string') {
              if (pro.match('title'))
                metaData.title = metaInDoms[i].getAttribute('content');
              if (pro.match('description'))
                metaData.description = metaInDoms[i].getAttribute('content');
              if (pro.match('image'))
                metaData.image = metaInDoms[i].getAttribute('content');
            }
          }
          return metaData;
        })
        .catch((e) => {
          console.log(e);
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
