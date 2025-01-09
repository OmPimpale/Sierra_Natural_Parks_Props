let NavBar = (props) => {

    let mylogo = props.sendData.logo;
    let home = props.sendData.home;
    let about = props.sendData.about;
    let services = props.sendData.services;
    let projects = props.sendData.projects;
    let contact = props.sendData.contact;

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container-fluid py-3 px-2 px-lg-4 px-xxl-5 barnav">
                    <a className="navbar-brand" href="#"><img src={mylogo} alt="logo" /></a>
                    <button className="navbar-toggler navbarbtn rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbarbtn1"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link active navlink" aria-current="page" href="#">{home}</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link navlink" href="#">{about}</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link navlink" href="#">{services}</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link navlink" href="#">{projects}</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link navlink" href="#">{contact}</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn d-none d-lg-inline-block ms-4 px-4 py-3 rounded-5 button">Take Action</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar;