import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { route } from 'src/utils/route';
import { Provider } from 'src/components/ui/provider';
import 'src/styles/App.scss';

const App = () => (
  <Provider>
    <BrowserRouter>
      <Routes>
        {route.map(({ url, component: Component }) => (
          <Route key={url} path={url} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
