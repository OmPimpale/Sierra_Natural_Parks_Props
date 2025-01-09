let Services = (props) => {

    let mainHead = props.service.mainHead;
    let subHead = props.service.subHead;
    let head1 = props.service.head1;
    let head2 = props.service.head2;
    let head3 = props.service.head3;
    let para1 = props.service.text1;
    let para2 = props.service.text2;
    let para3 = props.service.text3;
    let sideHead = props.service.sideHead;

    return (
        <>
            <section className="row container-fluid py-5 mx-auto justify-content-center" id="servises">
                <div className="col col-md-11">
                    <section className="d-xxl-none row justify-content-center">
                        <div className="col-12">
                            <div>
                                <h2 className="sidehead">{sideHead}</h2>
                            </div>
                            <h5 className="mainhead pt-4">{mainHead}</h5>
                            <div className="pb-3 border-bottom">
                                <h3 className="subhead">{subHead}</h3>
                            </div>
                            <div className="py-3 border-bottom">
                                <h4 className="head">{head1}</h4>
                                <p className="para">{para1}</p>
                            </div>
                            <div className="py-3 border-bottom">
                                <h4 className="head">{head2}</h4>
                                <p className="para">{para2}</p>
                            </div>
                            <div className="py-3">
                                <h4 className="head">{head3}</h4>
                                <p className="para">{para3}</p>
                            </div>
                        </div>
                    </section>
                    <section className="d-none d-xxl-flex row justify-content-xxl-evenly">
                        <div className="col-4">
                            <h5 className="mainhead pt-4">{mainHead}</h5>
                            <div className="pb-3 border-bottom border-white">
                                <h3 className="subhead">{subHead}</h3>
                            </div>
                            <div className="py-3 border-bottom border-white">
                                <h4 className="head">{head1}</h4>
                                <p className="para">{para1}</p>
                            </div>
                            <div className="py-3 border-bottom border-white">
                                <h4 className="head">{head2}</h4>
                                <p className="para">{para2}</p>
                            </div>
                            <div className="py-3">
                                <h4 className="head">{head3}</h4>
                                <p className="para">{para3}</p>
                            </div>
                        </div>
                        <div className="col-4 my-auto">
                            <h2 className="sidehead">{sideHead}</h2>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Services;