const pathname = window.location.pathname;

if (pathname.endsWith('html') && pathname.indexOf("/hidden/") === -1) {
  const gitalk = new Gitalk({
    clientID: '1bf57da7ef29fff1c805',
    clientSecret: '4047aa37daa86e166357b057d7e0417e6ed1fd3a',
    repo: 'ludics.github.io',
    owner: 'ludics',
    admin: ['ludics'],
    id: pathname,
  });
  gitalk.render('gitalk-container');
}

if (pathname === "/" || pathname === "/index.html") {
  window.onhashchange = function () {
    const mark = window.location.hash.substr(2);
    const cards = document.getElementsByClassName("card");
    for (card of cards) {
      var found = false;
      const tags = card.getElementsByClassName("tag");
      for (tag of tags) {
        const a = tag.children[0];
        if (a.innerText === mark) {
          tag.classList.add("selected");
          a.href = "#";
          found = true;
        } else {
          tag.classList.remove("selected");
          a.href = "#/" + a.innerText;
        }
      }
      card.hidden = mark.length > 0 && !found;
    }
  }

  window.onhashchange();
}

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-146462957-1', 'auto'); ga('send', 'pageview');
