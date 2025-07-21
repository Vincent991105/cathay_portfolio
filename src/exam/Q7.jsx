// Read the code below, please figure out why after “Switch Person” button clicked, the
// tasks state doesn’t update correctly, and how to make it update as we expected

import { useState } from "react";
export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  return (
    <div>
      {isPersonAlice ? (
        //為調整上述發生的異常情況；建議在呼叫的元件上增加Key，讓React識別到該元件是需要重新刷新的。
        // <TaskCounter name="Alice" />
        <TaskCounter key="Alice" name="Alice" />
      ) : (
        <TaskCounter key="Bob" name="Bob" />
      )}
      <button
        onClick={() => {
          setIsPersonAlice(!isPersonAlice);
        }}
      >
        Switch Person
      </button>
    </div>
  );
}
function TaskCounter({ name }) {
  const [tasks, setTasks] = useState(0);
  return (
    <>
      <h1>
        {name}'s tasks: {tasks}
      </h1>
      <button onClick={() => setTasks(tasks + 1)}>Complete Task</button>
    </>
  );
}
