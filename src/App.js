import logo from './logo.svg';
import MiddleColumn from './MiddleColumn';

function App() {
  return (
    <div className='columns'>
      <div className='column'>First column</div>
      <div className='column'>
        <MiddleColumn />
      </div>
      <div className='column'>Third column</div>
    </div>
  );
}

export default App;
