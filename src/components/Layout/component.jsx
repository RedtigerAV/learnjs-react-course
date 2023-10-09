import classNames from "classnames"
import styles from './styles.module.scss';
import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={classNames(styles.root)} data-theme={theme}>
            <Header className={classNames(styles.header)}>
                <RestaurantTabs />
            </Header>

            <div className={classNames(styles.content)}>
                {children}
            </div>

            <Footer className={classNames(styles.footer)} />
        </div >
    )
}