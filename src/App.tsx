import { useState } from "react"
import Stopwatch from "./components/Stopwatch"

function App() {
  const [isStopwatchVisible, setIsStopwatchVisible] = useState(true)

  return (
    <main>
      <h3>Собеседование Metamentor <br /></h3>
      <button onClick={() => setIsStopwatchVisible(!isStopwatchVisible)}>
        {isStopwatchVisible ? 'Закрыть и выключить' : 'Открыть'} секундомер
      </button>
      {isStopwatchVisible && <Stopwatch />}

      {/* <Employees /> */}
    </main>
  )
}

export default App
