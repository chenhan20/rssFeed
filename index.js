let Parser = require('rss-parser');
let parser = new Parser();
 
(async () => {
  let url = 'http://feeds.marketwatch.com/marketwatch/topstories/';
  let feed = await parser.parseURL(url);
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(item.title);
    // item.link
  });
 
})();