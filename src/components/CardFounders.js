import '../assets/css/cardFounders.module.css'

function CardFounders(props) {
    return (
        <div className="cards">
            <div className="imgBx">
                <img src={props.avatar} alt="foto Tais" />
            </div>
            <div className="content">
                <div className="details">
                    <h4>{props.name}<br/><span>{props.role}</span></h4>
                        <ul className="social_icons">
                            <li><a href={props.social_icons.face}><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href={props.social_icons.twitter}><i className="fab fa-twitter"></i></a></li>
                            <li><a href={props.social_icons.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href={props.social_icons.insta}><i className="fab fa-instagram"></i></a></li>
                            {/* <i className="fas fa-exclamation-circle"></i> */}
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default CardFounders