const root = document.querySelector('#root'); // Todo List

function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [msg, setMsg] = React.useState('');

  const generateId = () => Date.now();

  const saveTodoHandler = event => {
    event.preventDefault();
    if (!activity) return setMsg('Nama Aktifitas harus diisi');
    setMsg('');

    if (edit.id) {
      const updatedTodo = { ...edit,
        activity,
        done: false
      };
      const todoIndex = todos.findIndex(todo => todo.id === edit.id);
      const updatedTodos = [...todos];
      updatedTodos[todoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }

    setTodos([...todos, {
      id: generateId(),
      activity,
      done: false
    }]);
    setActivity(''); // console.log(todos);
  };

  const editTodoHandler = todo => {
    // console.log(todo);
    setEdit(todo);
    setActivity(todo.activity);
  };

  const doneTodoHandler = todo => {
    const updatedTodo = { ...todo,
      done: todo.done ? false : true
    };
    const todoIndex = todos.findIndex(currentTodo => currentTodo.id === todo.id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = updatedTodo;
    setTodos(updatedTodos);
  };

  const removeTodoHandler = todoId => {
    // console.log('Hapus todo dengan id:', todoId);
    const filteredTodos = todos.filter(todo => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  };

  const cancelEditHandler = () => {
    setEdit({});
    setActivity('');
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), msg && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red'
    }
  }, msg), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifikat...",
    value: activity,
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan perubahan' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? 'Selesai' : 'Belum Selesai', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada todo")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);