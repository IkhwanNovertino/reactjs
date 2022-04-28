const root = document.querySelector('#root');
// Data fetch
function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  //Data fetch menggunakan async await
  React.useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        'https://api.spaceflightnewsapi.net/v3/blogs'
      );
      // console.log(req);
      const res = await req.json();
      // console.log(res);
      setNews(res)
      setLoading(false)
    }
    getData()
  })

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? ( <i>Loading Data ...</i>
      ) : (
        <ol>
          {news.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ol>
      )}
    </>
  )
}

ReactDOM.render(<App />, root)