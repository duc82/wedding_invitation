import About from "../../components/About";
import Album from "../../components/Album";
import Banner from "../../components/Banner";
import Countdown from "../../components/Countdown";
import Timeline from "../../components/Timeline";
import Invitation from "../../components/Invitation";
import Mesage from "../../components/Message";
import Form from "../../components/Form";
import Gift from "../../components/Gift";
import Thankyou from "../../components/Thankyou";
import Footer from "../../components/Footer";
import ToggleAudio from "../../components/ToggleAudio";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Timeline />
      <Album />
      <Countdown />
      <Invitation />
      <Mesage />
      <Form />
      <Gift />
      <Thankyou />
      <Footer />
      <ToggleAudio />
    </>
  );
};

export default Home;
