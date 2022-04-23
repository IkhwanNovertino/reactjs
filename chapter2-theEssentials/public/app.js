const root = document.querySelector('#root'); // React Form

function App() {
  //Membuat Form menggunakan state (control component)
  const [nama, setNama] = React.useState('Xavi');

  function submitForm(event) {
    event.preventDefault();
    console.log('Form berhasil di-submit');
    console.log('Nama :', nama);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "React Application"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submitForm
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: event => setNama(event.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"))); //Membuat Form secara manual (uncontrol component) dengan bantuan refHooks
  // const namaRef= React.useRef(null)
  // function submitForm(event) {
  //   event.preventDefault();
  //   const nama = namaRef.current.value;
  //   console.log('Form berhasil di-submit');
  //   console.log('Nama :', nama);
  // }
  // return (
  //   <>
  //     <h2>React Application</h2>
  //     <form onSubmit={submitForm}>
  //       <div>
  //         <label>Nama :</label>
  //         <input type='text' name='nama' ref={namaRef}/>
  //       </div>
  //       <button type="submit">Kirim</button>
  //     </form>
  //   </>
  // )
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);