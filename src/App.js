import './App.css';
import Pagination from './Pagination';
import Search from './Search'
import Stories from './Stories';
function App() {


  return (
  <>
  <div className='welcome'> Welcome to AI-News API app  </div>
  <Search/>
  <Pagination/>
  <Stories/>
  </>
  );
}

export default App;
