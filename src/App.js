import logo from './logo.svg';
import MiddleColumn from './MiddleColumn';
import LeftColumn from './LeftColumn';

function App() {
  return (
    <div className='columns'>
      <div className='column'>
        <LeftColumn />
      </div>
      <div className='column'>
        <MiddleColumn />
      </div>
      <div className='column'>Third column</div>
    </div>
  );
}

export default App;
