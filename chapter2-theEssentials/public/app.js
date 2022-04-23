const root = document.querySelector('#root'); //React list & keys

/**
 * Keys-nya nanti bisa berupa productId, karena keys harus merupakan uniq value
 */

function App() {
  //Menampilkan list dengan memanfaatkan fitur yang ada di react
  const fruits = ['Apple', 'Manggo', 'Avocado'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "React Application"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Menampilkan list secara manual")), /*#__PURE__*/React.createElement("li", null, "Apple"), /*#__PURE__*/React.createElement("li", null, "Orange"), /*#__PURE__*/React.createElement("li", null, "Manggo"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Menampilkan list dengan React List & Keys")), fruits.map(fruit => {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }))); //Menampilkan list secara manual
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

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);