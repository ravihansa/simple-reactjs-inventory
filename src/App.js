import Split from 'react-split';
import InventoryList from './components/InventoryList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Split
        className="split-container"
        sizes={[50, 50]}
        minSize={300}
        gutterSize={10}
        direction="horizontal"
      >
        <div className="panel-content">
          <InventoryList />
        </div>
        <div className="panel-content">
          <p>ShoppingCart</p>
        </div>
      </Split>
    </div>
  );
}

export default App;
