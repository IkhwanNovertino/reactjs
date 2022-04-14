const root = document.querySelector('#root');
//inline-style
const element = (
  <div
    style={{
      width: 200,
      height: 200,
      backgroundColor: 'blue'
    }}></div>
)

ReactDOM.render(element, root)
