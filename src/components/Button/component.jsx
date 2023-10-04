export const Button = ({ title, disabled, onClick, type = 'button' }) => {
    return <button type={type} disabled={disabled} onClick={onClick}>{title}</button>
}