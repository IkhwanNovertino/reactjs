const root = document.querySelector('#root'); //Component and state (state hooks)

function App() {
  /**
  //React useState menghasilkan array dengan 2 element
  const state = React.useState(0);
    const count = state[0] //mengambil value element pertama dari state
  const updateState = state[1] //mengambil value element kedua dari state
    // console.log(state); //cek apa isi dari state
   */
  //Menggunakan ES6
  //biasa ES6 menggunakan keyword set dari pada update
  const [count, setState] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(count - 1);
    }
  }, " - "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(count + 1);
    }
  }, " + "));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);