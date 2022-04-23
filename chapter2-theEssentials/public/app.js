const root = document.querySelector('#root'); //Conditional rendering

/**
 * Conditional rendering memungkinkan kita untuk merender sebuah component
 * dengan kondisi tertentu.
 */

function App() {
  const [login, setLogin] = React.useState(false); //jika ingin menggunakan block if
  // if (login) {
  //   return (
  //     <>
  //       <h1>Login Successfull.</h1>
  //       <button
  //       onClick={() => {
  //         setLogin(false)
  //       }}
  //     >
  //       Login
  //     </button>
  //     </>
  //   )
  // }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Application"), /*#__PURE__*/React.createElement("p", null, login ? /*#__PURE__*/React.createElement("b", null, "Sudah Login") : /*#__PURE__*/React.createElement("i", null, "Belum Login")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (login) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);