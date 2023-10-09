import classNames from "classnames"
import styles from './styles.module.scss';
import { Logo } from "../Logo/component";
import { ThemeToggle } from "../ThemeToggle/component";

export const Header = ({ children, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.logo)}> <Logo /> </div>
            <div className={classNames(styles.content)}>{children}</div>
            <div className={classNames(styles.action)}> <ThemeToggle /> </div>
        </div>
    )
}