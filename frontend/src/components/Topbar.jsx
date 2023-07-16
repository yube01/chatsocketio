import {Link} from "react-router-dom"


const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <img className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <img />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <img />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/`}>
          <img
            src=""
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
