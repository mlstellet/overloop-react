

export default function InputNps(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.nome}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={e => props.setValue(e.target.value)} required />
        </div>
    );
}
