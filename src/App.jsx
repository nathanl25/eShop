import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import ItemPage from './pages/ItemPage/ItemPage';
import CartPage from './pages/CartPage/CartPage';
import FilteredItemsDisplay from './pages/FilteredItemsDisplay/FilteredItemsDisplay';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categories/:category"
            element={<FilteredItemsDisplay />}
          />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
