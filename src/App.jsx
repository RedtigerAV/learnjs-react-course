import { Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/Theme'
import { store } from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { RestaurantContainer } from './components/Restaurant/container';
import { MainPageContainer } from './pages/MainPage/container';
import { Navigate } from 'react-router-dom';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Navigate to="restaurants"></Navigate>}></Route>
                        <Route path='restaurants' element={<MainPageContainer />}>
                            <Route path=':restaurantId' element={<RestaurantContainer />} />
                        </Route>
                        <Route path='not-found' element={<div>Page not found</div>} ></Route>
                        <Route path="*" element={<Navigate to="not-found"></Navigate>}></Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}