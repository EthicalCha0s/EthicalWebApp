import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>Task Manager</h1>
            <Button color={showAdd ? "green" : "black"} text={showAdd ? "Add" : "Close"} onClick={onAdd}></Button>
        </header>
    )
}

export default Header
