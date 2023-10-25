import { Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/Theme'
import { store } from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { RestaurantContainer } from './components/Restaurant/container';
import { MainPageContainer } from './pages/MainPage/container';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainPageContainer />}>
                            <Route path=":restaurantId" element={<RestaurantContainer />} />
                        </Route>
                        <Route path='/not-found' element={<div>Page not found</div>} ></Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}