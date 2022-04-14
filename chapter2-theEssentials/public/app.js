const root = document.querySelector('#root'); // cara basic
// const element = (
//   <button onClick={function () {
//     alert('Hello, saya button')
//   }}>Click Me</button>
// )
//cara ke-2, dengan membuat function terpisah

function hello() {
  alert('Hello, saya dari function hello');
} // const element = (
//   <button onClick={hello}>Click Me</button>
// )
//code ini tidak sesuai keinginan karena alert dieksekusi terlebih dahulu
// const element = (
//   <button onClick={hello()}>Click Me</button>
// )
//cara ke-3, jika ingin menambahkan sebuah message ke dalam argument function
//gunakan keyword namaFunction.bind(this, "message")


function clickMe(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: clickMe.bind(this, 'Hello, saya dari function clickMe()')
}, "Click Me");
ReactDOM.render(element, root);