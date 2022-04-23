const root = document.querySelector('#root');
//Conditional rendering
/**
 * Conditional rendering memungkinkan kita untuk merender sebuah component
 * dengan kondisi tertentu.
 */

function App() {
  const [login, setLogin] = React.useState(false);
  //jika ingin menggunakan block if
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

  return (
    <>
      <h1>Application</h1>
      <p>{ login ? <b>Sudah Login</b> : <i>Belum Login</i>}</p>
      {/* <p>{ login ? <b>Sudah Login</b> : <i>Belum Login</i>}</p> //Bisa seperti ini untuk 2 kondisi */}
      {/* <p>{ login && <b>Sudah Login</b>}</p> //Bisa untuk satu kondisi */}
      <button
        onClick={() => {
          if (login) {
            setLogin(false)
          } else {
            setLogin(true)
          }
        }}
      >
        Login
      </button>
    </>
  )
}

ReactDOM.render(<App />, root)