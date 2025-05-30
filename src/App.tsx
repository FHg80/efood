import { GlobalCSS } from './styles'

import Hero from './components/Hero';
import CardList from './components/CardList';

function App() {
  return (
    <>
      <GlobalCSS />
      <Hero />
      <div className='container'>
        <CardList/>
      </div>
    </>

  );
}

export default App;
