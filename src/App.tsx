import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom'

import { store } from './store';
import { GlobalCSS } from './styles'

import Rotas from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
