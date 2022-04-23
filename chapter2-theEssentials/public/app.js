const root = document.querySelector('#root'); //DOM Manipulation (Ref Hooks)

function App() {
  const judulRef = React.useRef(null); // Manipulasi DOM manual
  // React.useEffect(() => {
  //   const judul = document.getElementById('judul')
  //   console.log(judul);
  //   setTimeout(() => {
  //     judul.textContent= 'Web Page'
  //   }, 2000);
  // })
  // Manipulasi DOM menggunakan  Ref Hooks

  React.useEffect(() => {
    console.log(judulRef);
    setTimeout(() => {
      judulRef.current.textContent = 'Web Page';
    }, 2000);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Application"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);