import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import TopNavbar from './Components/TopNavbar'
import Home from './Components/Home'
import SAT from './Components/SAT'
import ViewRandomQuestion from './Components/ViewRandomQuestion'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SAT" element={<SAT />} />
        <Route path="/ViewRandomQuestion" element={<ViewRandomQuestion />} />
      </Routes>
    </div>
  );
}

export default App;

{/* <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.tsx</code> and save to test HMR
    </p>
  </div> */}

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
// minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// aliquip ex ea commodo consequat. Duis aute irure dolor in
// reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
// pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
// culpa qui officia deserunt mollit anim id est laborum.
