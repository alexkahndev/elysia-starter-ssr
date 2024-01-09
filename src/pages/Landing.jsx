import Navbar from '../components/Navbar';

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
          <div className='px-8'>
            
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
