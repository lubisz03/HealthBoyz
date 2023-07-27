import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

const App: React.FC = () => {
  return <AppRouter />;
};

const div = document.getElementById('root')!;
const root = ReactDOM.createRoot(div);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
