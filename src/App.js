import './App.css';
import {RouterProvider} from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux';
import router from './routes';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
