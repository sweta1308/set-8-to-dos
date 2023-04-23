import './App.css';
import {Home} from './pages/Home';
import {DoneTodo} from './pages/DoneTodo';
import {OpenTodo} from './pages/OpenTodo';
import {TodoDetails} from './pages/Details';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doneTodo' element={<DoneTodo />} />
        <Route path='/openTodo' element={<OpenTodo />} />
        <Route path='/details/:id' element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
