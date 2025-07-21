// Read about the code below, please describe the issues and how you will be going to
// improve it

// 增加UseState & useMemo的import
import { useState, useMemo } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "學習 React", completed: false, studyPoint: 3 },
    { id: 2, text: "建立專案", completed: false, studyPoint: 1 },
  ]);

  //   這種使用方式將導致索取出來的資料變成undefined
  //   const { id, text, studyPoint } = todos;

  // const [basePoints, setbasePoints] = useState(3);

  // const [sumPoints, setSumPoints] = useState(0);

  //   此function是錯誤的；無法直接修改todo的內容
  //   const toggleTodo = (id) => {
  //     const todo = todos.find((t) => t.id === id);
  //     todo.completed = !todo.completed;
  //     setTodos(todos);
  //   };

  //   建議修改的方法如下：
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // const handleStudyPointsChange = (e) => {
  //   basePoints(e.target.value);
  //   setSumPoints(parseInt(value1) + parseInt(e.target.value));
  // };

  //   建議修改的方法如下：
  const handleChange = (id, newStudyPoint) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, studyPoint: newStudyPoint } : todo
      )
    );
  };

  const sumPoints = useMemo(() => {
    return todos.reduce(
      (sum, todo) => (todo.completed ? sum + todo.studyPoint : sum),
      0
    );
  }, [todos]);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "16px" }}>
          <p>課程名稱: {todo.text}</p>
          <div>
            <label>學習點數: </label>
            <input
              type="number"
              value={todo.studyPoint}
              onChange={(e) => handleChange(todo.id, Number(e.target.value))}
            />
          </div>
          <button onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "取消完成" : "標記完成"}
          </button>
        </div>
      ))}
      <p>總累積點數: {sumPoints}</p>
    </div>
  );
};

export default TodoList;
