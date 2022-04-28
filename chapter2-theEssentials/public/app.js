const root = document.querySelector('#root'); // Data fetch

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true); //Data fetch menggunakan async await

  React.useEffect(() => {
    const getData = async () => {
      const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs'); // console.log(req);

      const res = await req.json(); // console.log(res);

      setNews(res);
      setLoading(false);
    };

    getData();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading Data ...") : /*#__PURE__*/React.createElement("ol", null, news.map(item => {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);