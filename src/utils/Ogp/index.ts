const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export const getOgpData = async (links: string[]) => {
  const metadata = await Promise.all(links.map(async(link) => {
    const metas = await fetch(link)
    // 3. URLからtext/htmlデータを取得 ====================================
    .then(res => res.text())
    .then(text => {
        const metaData = {
            url: link,
            title: "",
            description: "",
            image: "",
        };

        const doms = new JSDOM(text);
        const metas = doms.window.document.getElementsByTagName('meta');

        for (let i = 0; i < metas.length; i++) {
            let pro = metas[i].getAttribute("property");
            if (typeof pro == "string") {
                if (pro.match("title"))       metaData.title = metas[i].getAttribute("content");
                if (pro.match("description")) metaData.description = metas[i].getAttribute("content");
                if (pro.match("image"))       metaData.image = metas[i].getAttribute("content");
            }
            pro = metas[i].getAttribute("name");
            if (typeof pro == "string") {
                if (pro.match("title"))       metaData.title = metas[i].getAttribute("content");
                if (pro.match("description")) metaData.description = metas[i].getAttribute("content");
                if (pro.match("image"))       metaData.image = metas[i].getAttribute("content");
            }
        }
        return metaData;
    })
    .catch(e => {console.log(e);});
    return metas;
}));
// 配列の整形　※コンポーネントに渡す際はjson情報に変換するようなので
// undefinedのようなオブジェクトは除外する。
return metadata.filter(d => d !== undefined);

}

export const getFloatingUrls = (md: string): string[] => {
  const regFloatUrl = /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+/g;
  const floatUrls = md.match(regFloatUrl);

  return floatUrls ?? [];
};

