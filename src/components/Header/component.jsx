import classNames from "classnames"
import styles from './styles.module.scss';

export const Header = ({ logo, content, action, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.logo)}>{logo}</div>
            <div className={classNames(styles.content)}>{content}</div>
            <div className={classNames(styles.action)}>{action}</div>
        </div>
    )
}