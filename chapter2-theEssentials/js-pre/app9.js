const root = document.querySelector('#root');
//React list & keys
/**
 * Keys-nya nanti bisa berupa productId, karena keys harus merupakan uniq value
 */

function App() {

  //Menampilkan list dengan memanfaatkan fitur yang ada di react
  const fruits = [
    'Apple',
    'Manggo',
    'Avocado'
  ];

  return (
    <>
      <h2>React Application</h2>
      <ul>
        <li><b>Menampilkan list secara manual</b></li>
        <li>Apple</li>
        <li>Orange</li>
        <li>Manggo</li>
        <hr />
        <li><b>Menampilkan list dengan React List & Keys</b></li>
        {fruits.map((fruit) => {
          return <li key={fruit}>{ fruit }</li>
        })}
      </ul>
    </>
  )
  //Menampilkan list secara manual
  // return (
  //   <>
  //     <h2>React Application</h2>
  //     <ul>
  //       <li>Apple</li>
  //       <li>Orange</li>
  //       <li>Manggo</li>
  //     </ul>
  //   </>
  // )
}

ReactDOM.render(<App />, root)