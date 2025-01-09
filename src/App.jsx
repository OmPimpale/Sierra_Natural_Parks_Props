import './App.css'
import About from './propsTemplate/About'
import Footer from './propsTemplate/Footer'
import HeroSection from './propsTemplate/HeroSection'
import NavBar from './propsTemplate/NavBar'
import Projects from './propsTemplate/Projects'
import Services from './propsTemplate/Services'

function App() {
  // navbar
  let navData = {
    logo: "../../public/sierra_nature_logo.svg",
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact"
  }

  // herosection
  let heroData = {
    wellcome: "Wellcome To",
    heading: "Sierra Natural Park"
  }

  // button
  let btn = "Learn More";

  // about
  let about = {
    abouthead: "About US",
    heading: "One Touch Of Nature Makes The Whole World Kin",
    abouttext1: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.",
    abouttext2: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
  }

  // services
  let service = {
    mainHead: "Services",
    subHead: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper.",
    head1: "Study Nature, Love Nature",
    head2: "Autumn Is a Second Spring",
    head3: "Just Let It Rain",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    sideHead: "A Light Wind Swept Over The Corn, And All Nature Laughed In The Sunshine."
  }

  // projects
  let project = {
    mainHead: "Projects",
    subHead: "Forest Wilderness",
    img1: "public/img-01-free-img.jpg",
    img2: "public/img-02-free-img.jpg",
    img3: "public/img-03-free-img.jpg",
    imghead1: "Look DeepInto Nature",
    imghead2: "Just Living is Not Enough",
    imghead3: "Adopt the Pace of Nature",
    sidehead: "Get started with lorem ipsum dolor sit amet consectetur.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }

  // footer
  let foot = {
    about: {
      head: "About",
      text1: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.",
      text2: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit nam nec tellus a odio tincidunt auctor a ornare conubia nostra."
    },
    services: {
      head: "Services",
      li1: "Study Nature",
      li2: "Nature is a Gift",
      li3: "A Second Spring",
      li4: "Smiles of Nature",
      li5: "Just Let it Rain"
    },
    contact: {
      head: "Contact",
      text3: "Proin gravida nibh auctor aliquet amet anean sollicitudin, lorem quis.",
      address: "12 Avenue, New York, NY 10160",
      number: "+1 910-626-85255",
      email: "contact@nature.com"
    },
    copy: {
      right: "Copyright © 2024.",
      creator: "Made By : ",
      me: "Om Pimpale (PP113).",
    }
  }

  return (
    <>
      <div className="overflow-hidden">
        <NavBar sendData={navData} />
        <HeroSection hero={heroData} btn={btn} />
        <About about={about} btn={btn} />
        <Services service={service} />
        <Projects project={project} btn={btn} />
        <Footer foot={foot} />
      </div>
    </>
  )
}

export default App
