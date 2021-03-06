const root = document.querySelector('#root');
// Data fetch
function App() {
  //Data fetch menggunakan async await
  React.useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        'https://api.spaceflightnewsapi.net/v3/blogs'
      );
      // console.log(req);
      const res = await req.json();
      console.log(res);
    }
    getData()
  })

  //Data fetch menggunakan promise
  // React.useEffect(() => {
  //   const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
  //     .then((res) => {
  //       return res.json();
  //     }).then((response) => {
  //       return response;
  //     })
  // }, [])

  return <h1>Data Fetch</h1>
}

ReactDOM.render(<App />, root)