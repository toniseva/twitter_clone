import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    // BEM convention, lowercase "app"
    <div className="app">
      < Sidebar />
      < Feed />
      < Widgets />
    </div>
  );
}

export default App;
