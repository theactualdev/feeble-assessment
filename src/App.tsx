import "./App.css";
import vl from "./assets/vl.svg";
import arrow from "./assets/arrow-down.svg";
import apple from "./assets/apple.svg";
import Navbar from "./components/Navbar";
import message from "./assets/message.svg";
import firstBird from "./assets/bird-one.svg";
import secondBird from "./assets/bird-two.svg";
import thirdBird from "./assets/bird-three.svg";
import fourthBird from "./assets/bird-four.svg";
import sun from "./assets/sun.svg";
import bird from "./assets/bird.svg";

function App() {
  return (
    <main className="flex relative min-h-screen overflow-x-hidden flex-col font-open-sans pt-10 items-center">
      <img
        src={bird}
        alt="Bird"
        className="absolute bird animate-[bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] top-72.75 left-74.5"
      />
      <img src={bird} alt="Bird" className="absolute bird top-82.25 left-123.75" />
      <img
        src={bird}
        alt="Bird"
        className="absolute bird animate-[fake-bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] top-82.25 left-123.75"
      />
      <img
        src={sun}
        alt="Sun"
        className="absolute w-[33%] md:w-[24%] top-0 left-0"
      />
      <img
        src={bird}
        alt="Bird"
        className="absolute bird animate-[bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] top-76.25 right-128.5"
      />
      <img src={bird} alt="Bird" className="absolute bird top-116.25 right-118.5" />
      <img
        src={bird}
        alt="Bird"
        className="absolute bird animate-[fake-bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] top-116.25 right-118.5"
      />
      <img
        src={thirdBird}
        alt="Bird"
        className="absolute bird top-162.25 left-0 opacity-0 diagonal-bird animate-[fly-diagonal_3.5s_cubic-bezier(0.73,0,0.8,0.83)]"
      />
      <img
        src={thirdBird}
        alt="Bird"
        className="absolute bird scale-x-[-1] top-199.5 right-0 diagonal-bird opacity-0 animate-[fly-diagonal-two_3.5s_cubic-bezier(0.73,0,0.8,0.83)]"
      />
      <Navbar />
      <section className="hero 3xl:mt-80 flex flex-col items-center justify-center gap-12">
        <div className="cta flex flex-col items-center justify-center gap-6 mt-16">
          <div className="flex bg-white px-2 pt-1 pb-1.25 rounded-full gap-2">
            <img src={message} alt="Message" />
            <p className="text-cobalt-blue md:text-base text-xs font-open-sans font-medium">
              #1 iMessage Automation Tool
            </p>
          </div>
          <div className="hero flex flex-col gap-6 max-w-184 items-center justify-center font-open-sans">
            <h1 className="font-extrabold text-5xl md:text-[64px] hero">
              <span className="text-primary-blue">iMessage</span> Automation for
              Teams and AI Workflows.
            </h1>
            <p className="max-w-150 text-sm md:font-normal font-medium px-8 md:px-0 md:text-lg">
              Coup lets you, your team, or AI workflows send iMessages directly
              from your phone number, running securely on your Mac or Mac Mini.{" "}
            </p>
          </div>
        </div>
        <div className="buttons font-medium md:text-lg flex md:flex-row flex-col gap-3">
          <button className="bg-primary-blue text-white py-3 px-5 rounded-[50px]">
            Get Started
          </button>
          <button className="flex items-center justify-center text-neutral-900 rounded-[50px] py-3 px-5 gap-3 border border-blue-gray-600">
            <img src={apple} alt="Apple Logo" />
            <img src={vl} alt="Vertical Line" />
            Download the Mac app
          </button>
        </div>
      </section>
      <p className="flex flex-col md:mt-48.5 mt-10 3xl:mt-168.5 items-center justify-center font-medium bottom-10 md:bottom-30 text-neutral-900 text-lg">
        Scroll to learn more <img src={arrow} alt="Arrow down" />
      </p>
      <div
        className={`w-screen lg:bg-cover 3xl:bg-center overflow-y-hidden h-70 3xl:h-145.25 bg-no-repeat bottom-0 absolute bg-[url('./assets/clouds.svg')] animate-[animate-rise_1.2s_cubic-bezier(0,0.59,0.44,0.99)]`}
      ></div>
      <img
        src={firstBird}
        alt="Illustration"
        className="absolute bird animate-[bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] left-92.75 bottom-38.75"
      />
      <img
        src={secondBird}
        alt="Illustration"
        className="absolute bird animate-[bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] left-166.25 bottom-49.75"
      />
      <img
        src={thirdBird}
        alt="Illustration"
        className="absolute bird animate-[bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] right-164.25 bottom-31"
      />
      <img
        src={fourthBird}
        alt="Illustration"
        className="absolute bird animate-[bird-rise_1.7s_cubic-bezier(0,0.59,0.44,0.99)] right-85.75 bottom-49.5"
      />
    </main>
  );
}

export default App;
