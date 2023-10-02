export const Button = ({ title, disabled, onClick }) => {
    return <button disabled={disabled} onClick={onClick}>{title}</button>
}