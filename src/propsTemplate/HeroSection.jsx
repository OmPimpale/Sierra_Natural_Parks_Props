let HeroSection = (props) => {

    let wellcome = props.hero.wellcome;
    let heading = props.hero.heading;
    let btn = props.btn;

    return (
        <>
            <div className="text-center container-fluid z-2" id="herosection">
                <div>
                    <h4 id="herohead1" className="m-0">{wellcome}</h4>
                    <h1 className="pb-5 pt-3 m-0" id="herohead2">{heading}</h1>
                    <button className="btn px-4 py-3 rounded-5 button">{btn}</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection;