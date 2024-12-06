import { Link } from "react-router-dom"


function Footer() {
    return(
        <footer className="footer">
          <Link className="links" to="/">🏠</Link>
          <Link className="links" to="/red">RED</Link>
          <Link className="links" to="/orange">ORANGE</Link>
          <Link className="links" to="/yellow">YELLOW</Link>
          <Link className="links" to="/green">GREEN</Link>
          <Link className="links" to="/blue">BLUE</Link>
          <Link className="links" to="/indigo">INDIGO</Link>
          <Link className="links" to="/violet">VIOLET</Link>
        </footer>
    )
}

export default Footer