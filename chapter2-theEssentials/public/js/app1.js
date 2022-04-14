const root = document.querySelector('#root');

function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang :"), /*#__PURE__*/React.createElement("h3", null, new Date().toDateString()), /*#__PURE__*/React.createElement("h3", null, new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
}

tick();
setInterval(() => {
  tick();
}, 1000);