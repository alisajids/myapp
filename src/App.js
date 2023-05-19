import './App.css';
import LanguageProvider from './IntProvider/LanguageProvider';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <LanguageProvider>
      <MyComponent />
    </LanguageProvider>
  );
};


export default App;
