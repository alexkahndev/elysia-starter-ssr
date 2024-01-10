import Navbar from '../components/Navbar';
import { GraphUpArrow, Megaphone, ChatSquareText } from 'react-bootstrap-icons';

const Landing = () => {
  return (
    <>
      <header className="flex-initial border-solid border-b-2 border-slate-300">
        <Navbar />
      </header>
      <main className="flex-auto">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center px-8 py-32 bg-hero-img">
            <div className="max-w-[750px]">
              <h1 className='text-6xl font-bold text-sunglow mb-4'>
                Maximize social media with personalized strategies just for you.
              </h1>
              <h2 className="text-2xl text-white">
                Experience the difference with our expert social media services and personalized strategies.
              </h2>
            </div>
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/NpEaa2P7qZI?si=mxQB9Yz1l8DkNYAd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex justify-between px-8 py-32">
            <div className="p-8 border-4 border-solid border-black rounded-xl w-[500px]">
              <div className="flex justify-center mb-4">
                <GraphUpArrow className="text-8xl"/>
              </div>
              <h1 className="font-bold text-4xl text-center mb-4">Business Growth</h1>
              <p>Unlock unparalleled growth for your business by investing in our cutting-edge social media marketing services.</p>
            </div>
            <div className="p-8 border-4 border-solid border-black rounded-xl w-[500px]">
              <div className="flex justify-center mb-4">
                <Megaphone className="text-8xl"/>
              </div>
              <h1 className="font-bold text-4xl text-center mb-4">Targeted Advertising</h1>
              <p>Precision targeting ensures that your marketing efforts reach the most relevant audience, maximizing the impact of your campaigns and increasing the likelihood of converting leads into customers.</p>
            </div>
            <div className="p-8 border-4 border-solid border-black rounded-xl w-[500px]">
              <div className="flex justify-center mb-4">
                <ChatSquareText className="text-8xl"/>
              </div>
              <h1 className="font-bold text-4xl text-center mb-4">Real-time Engagement</h1>
              <p>Receive instant feedback, address concerns promptly, and stay ahead of the curve as we transform your online presence into a dynamic space for continuous growth and customer satisfaction.</p>
            </div>
          </div>
          <div className="px-8">
          </div>
        </div>
      </main>
      <footer className="flex-initial border-solid border-t-2 border-slate-300">
        <p className='max-w-[1600px] mx-auto px-8 py-4'>&copy; {new Date().getFullYear()} Awesome.Social</p>
      </footer>
    </>
  );
};

export default Landing;
