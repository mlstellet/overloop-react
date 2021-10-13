import css from '../assets/css/cardFounders.module.css'

const noSocial = 'fas fa-exclamation-circle'

function CardFounders(props) {
    return (
        <div className={css.cards}>
            <div className={css.imgBx}>
                <img src={props.avatar} alt="foto Tais" />
            </div>
            <div className={css.content}>
                <div className={css.details}>
                    <h4>{props.name}<br/><span>{props.role}</span></h4>
                    <ul className={css.social_icons}>
                        <li><a href={props.social_icons.face}><i className={props.social_icons.face === '' ? noSocial : "fab fa-facebook-f"}></i></a></li>
                        <li><a href={props.social_icons.twitter}><i className={props.social_icons.twitter === '' ? noSocial : "fab fa-twitter"}></i></a></li>
                        <li><a href={props.social_icons.linkedin}><i className={props.social_icons.linkedin === '' ? noSocial : "fab fa-linkedin-in"}></i></a></li>
                        <li><a href={props.social_icons.insta}><i className={props.social_icons.insta === '' ? noSocial : "fab fa-instagram"}></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardFounders