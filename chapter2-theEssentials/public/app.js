const root = document.querySelector('#root'); //Component lifecycle (effect hooks)

/**
 * useEffect adalah sebuah function yang akan dipanggil jika sebuah component dirender/ di re-render
 * useEffect akan terus dipanggil jika component melakukan perubahan
 * akan tetapi, useEffect bisa dipanggil hanya dengan memperhatikan perubahan salah satu state saja,
 * dengan menambahkan di parameter ke-2 array yang berisi state yang terkait
 * Array di parameter ke-2, bisa berupa array kososng, sehingga useEffect akan dipanggil sekali saja ketika pertama kali render
 */

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(document.getElementById('judul'));
  }, [count] //bisa diisi oleh dua atau lebih state / tidak sama sekali
  );
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello, saya judul"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setDiklik(true);
    }
  }, "Click Me"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "Tambah"), /*#__PURE__*/React.createElement("span", null, ": ", count));
}

setTimeout(() => {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
}, 2000);
/**
//console.log, bisa menghasilkan value karena component sudah dirender
ReactDOM.render(<App />, root)
console.log(document.getElementById('judul'));
 */

/** 
//console.log, memiliki value null karena render dilakukan setelah 2second
// bagaimana cara mendapatkan value element dalam kasus dibawah ini, adalah menggunakan useEffect 
setTimeout(function () {
  ReactDOM.render(<App />, root)
}, 2000);
console.log(document.getElementById('judul'));
*/