const root = document.querySelector('#root');
// Todo List
function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [msg, setMsg] = React.useState('');

  const generateId = () => Date.now();

  const saveTodoHandler = (event) => {
    event.preventDefault();

    if (!activity) return setMsg('Nama Aktifitas harus diisi');

    setMsg('')

    if (edit.id) {
      const updatedTodo = {
        ... edit,
        activity,
        done: false
      }

      const todoIndex = todos.findIndex((todo) => todo.id === edit.id)

      const updatedTodos = [...todos]
      
      updatedTodos[todoIndex] = updatedTodo

      setTodos(updatedTodos)
      
      return cancelEditHandler();
    }

    setTodos([...todos, {
      id: generateId(),
      activity,
      done: false,
    }]);
    setActivity('')

    // console.log(todos);
    
  }

  const editTodoHandler = (todo) => {
    // console.log(todo);
    setEdit(todo);
    setActivity(todo.activity)
  }

  const doneTodoHandler = (todo) => {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    }

    const todoIndex = todos.findIndex((currentTodo) => currentTodo.id === todo.id)

    const updatedTodos = [...todos]
      
    updatedTodos[todoIndex] = updatedTodo

    setTodos(updatedTodos)
  }

  const removeTodoHandler = (todoId) => {
    // console.log('Hapus todo dengan id:', todoId);
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    })

    setTodos(filteredTodos)

    if (edit.id) cancelEditHandler();
  }

  const cancelEditHandler = () => {
    setEdit({})
    setActivity('')
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      {msg && <p style={{ color: 'red' }}>{msg}</p>}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Nama Aktifikat..."
          value={activity}
          onChange={(event) => {setActivity(event.target.value)}}
        />
        <button type="submit">
          {edit.id ? 'Simpan perubahan' : 'Tambah'}
        </button>
        {edit.id &&  <button onClick={cancelEditHandler}>Batal</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={doneTodoHandler.bind(this, todo)}
              />
              {todo.activity}
              ({todo.done ? 'Selesai' : 'Belum Selesai'})
              <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
              <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
            </li>
          )
        })}
        </ul>  
      ) : (
          <p><i>Tidak ada todo</i></p>
      )
      }
      
    </>
  )
}

ReactDOM.render(<App />, root)