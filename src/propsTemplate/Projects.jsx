let Projects = (props) => {

    let head1 = props.project.mainHead;
    let head2 = props.project.subHead;
    let head3 = props.project.imghead1;
    let img1 = props.project.img1;
    let img2 = props.project.img2;
    let img3 = props.project.img3;
    let head4 = props.project.imghead2;
    let head5 = props.project.imghead3;
    let head6 = props.project.sidehead;
    let btn = props.btn;
    let para = props.project.para;

    return (
        <>
            <section className="row overflow-hidden py-5 justify-content-center" id="projects">
                <div className="col col-md-11 col-xxl-9">
                    <section className="row mx-4">
                        <div className="col-12 text-center py-4">
                            <h4 id="mianhead">{head1}</h4>
                            <h3 id="subhead">{head2}</h3>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-4 my-3">
                                    <img src={img1} alt="project1" className="img-fluid mb-4" />
                                    <h3 className="imghead">{head3}</h3>
                                    <p className="imgpara">{para}</p>
                                </div>
                                <div className="col-12 col-md-4 my-3">
                                    <img src={img2} alt="project2" className="img-fluid mb-4" />
                                    <h3 className="imghead">{head4}</h3>
                                    <p className="imgpara">{para}</p>
                                </div>
                                <div className="col-12 col-md-4 my-3">
                                    <img src={img3} alt="project3" className="img-fluid mb-4" />
                                    <h3 className="imghead">{head5}</h3>
                                    <p className="imgpara">{para}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row justify-content-between">
                                <div className="col-12 col-md-8 col-xxl-7 text-center text-md-start my-5">
                                    <h4 id="sidehead" className="py-3">{head6}</h4>
                                </div>
                                <div className="col-12 col-md-4 text-center text-md-start my-5">
                                    <button className="btn px-4 py-3 my-3 rounded-5 button">{btn}</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Projects;