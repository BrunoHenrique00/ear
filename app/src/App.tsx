import * as ReactDOM from 'react-dom';
import Home from './frontend/pages/Home';

const App = () => {
  return <Home />;
};

function render() {
  ReactDOM.render(<App />, document.body);
}

render();
