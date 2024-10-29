export default function Button({onClick, text}) {
    return <button className="addBtn" onClick={onClick}>{text}</button>
}