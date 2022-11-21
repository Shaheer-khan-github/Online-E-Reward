import './button.styles.css'

export function Button ({ children, className, handleClick, clear }) {
    
    return (
        <button 
            className={`button ${clear ? 'button-clear' : ''} ${className}`}
            onClick={handleClick}
        >
            { children }
        </button>
    )
}