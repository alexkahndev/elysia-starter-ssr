import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <header className="flex-initial border-solid border-b-2 border-slate-300">
        <Navbar />
      </header>
      <main className="flex-auto">
        <div className="max-w-[1600px] mx-auto">
          
        </div>
      </main>
      <footer className="flex-initial border-solid border-t-2 border-slate-300">
        <p className='max-w-[1600px] mx-auto px-8 py-4'>&copy; {new Date().getFullYear()} Awesome.Social</p>
      </footer>
    </>
  )
}

export default About