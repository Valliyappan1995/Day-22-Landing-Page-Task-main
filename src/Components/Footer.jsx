
const footer = () => {
    return(
        <footer className="footer-container">
            <div className="row-footer">
                <div className="list-items">
                <ul>
                    <li className="footer-list">
                        <a href="#!">About</a>
                    </li>
                    <li className="footer-list">
                        <a href="#!">Contact</a>
                    </li>
                    <li className="footer-list">
                        <a href="#!">Terms of Use</a>
                    </li>
                    <li className="footer-list">
                        <a href="#!">Privacy Policy</a>
                    </li>
                </ul>
                <p className="footer-txt">© Your Website 2023. All Rights Reserved.</p>
                </div>
                <div className="footer-icons">
                    <ul>
                        <li className="list">
                            <a href="#!">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#!">
                            <i className="fa-brands fa-twitter fa-2x"></i>
                            </a>
                        </li>
                        <li className="list">
                            <a href="#!">
                            <i className="fa-brands fa-instagram fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default footer;