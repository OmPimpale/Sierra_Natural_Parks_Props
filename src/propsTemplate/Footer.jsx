let Footer = (props) => {

    let aboutHead = props.foot.about.head;
    let aboutText1 = props.foot.about.text1;
    let aboutText2 = props.foot.about.text2;

    let serviceHead = props.foot.services.head;
    let serviceLi1 = props.foot.services.li1;
    let serviceLi2 = props.foot.services.li2;
    let serviceLi3 = props.foot.services.li3;
    let serviceLi4 = props.foot.services.li4;
    let serviceLi5 = props.foot.services.li5;

    let contactHead = props.foot.contact.head;
    let contactText = props.foot.contact.text3;
    let address = props.foot.contact.address;
    let number = props.foot.contact.number;
    let email = props.foot.contact.email;

    let copyRight = props.foot.copy.right;
    let madeBy = props.foot.copy.creator;
    let name = props.foot.copy.me;

    return (

        <>
            <section className="row justify-content-center" id="footer">
                <div className="col col-md-11 col-xxl-10">
                    <section className="row px-3 px-lg-0 mb-5 justify-content-evenly">
                        <div className="col-12 col-md-4 col-xxl-3">
                            <h3 className="headind mb-4">{aboutHead}</h3>
                            <p className="footpara">{aboutText1}</p>
                            <p className="footpara">{aboutText2}</p>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <h3 className="headind mb-4 mt-5 mt-md-0">{serviceHead}</h3>
                            <ul className="p-0">
                                <li className="footlist my-2"><a href="#" className="footpara1">{serviceLi1}</a></li>
                                <li className="footlist my-1"><a href="#" className="footpara1">{serviceLi2}</a></li>
                                <li className="footlist my-2"><a href="#" className="footpara1">{serviceLi3}</a></li>
                                <li className="footlist my-1"><a href="#" className="footpara1">{serviceLi4}</a></li>
                                <li className="footlist my-2"><a href="#" className="footpara1">{serviceLi5}</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-xxl-3">
                            <h3 className="headind mb-4 mt-5 mt-md-0">{contactHead}</h3>
                            <p className="footpara">{contactText}</p>
                            <div>
                                <p className="my-1"><a href="#" className="footpara1">{address}</a></p>
                                <p className="my-2"><a href="#" className="footpara1">{number}</a></p>
                                <p className="my-1"><a href="#" className="footpara1">{email}</a></p>
                            </div>
                        </div>
                    </section>

                    <section className="row p-3 border-top justify-content-center">
                        <div className="col-12 col-xxl-11 mt-3 d-md-flex text-center justify-content-between">
                            <p className="footpara">{copyRight}</p>
                            <p className="footpara">{madeBy} <a href="#" className="footanchor">{name}</a></p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Footer;