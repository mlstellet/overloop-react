import css from '../assets/css/button.module.css'

export default function Button(props) {
    return (
        <button className={css.call_to_action}>{props.text}</button>
    )
}