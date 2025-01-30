import { StoreContextWrapper } from './wrappers/StoreContextWrapper';
import StoreContextProvider from './context/StoreContextProvider';
function App() {
  return (
    <>
      <StoreContextProvider>
        <StoreContextWrapper />
      </StoreContextProvider>
    </>
  );
}

export default App;
