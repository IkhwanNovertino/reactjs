const root = document.querySelector('#root');

function tick() {
  const element = (
    <div>
      <h1>Jam Sekarang :</h1>
      <h3>{new Date().toDateString()}</h3>
      <h3>{new Date().toLocaleTimeString()}</h3>
    </div>
  )

  ReactDOM.render(element, root)
}

tick();
setInterval(() => {
  tick()
}, 1000);