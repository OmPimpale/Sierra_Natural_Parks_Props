let About = (props) => {

    let head1 = props.about.abouthead;
    let head2 = props.about.heading;
    let para1 = props.about.abouttext1;
    let para2 = props.about.abouttext2;
    let btn = props.btn;

    return (
        <>
            <div className="text-center container-fluid px-3 py-5" id="about">
                <h4 id="abouthead1" className="pb-2">{head1}</h4>
                <h2 id="abouthead2" className="pb-4">{head2}</h2>
                <p id="aboutpara1">{para1}</p>
                <p id="aboutpara2" className="py-5">{para2}</p>
                <button className="btn px-4 py-3 rounded-5 button">{btn}</button>
            </div>
        </>
    )
}

export default About;