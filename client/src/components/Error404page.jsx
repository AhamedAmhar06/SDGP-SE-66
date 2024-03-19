import ErrorImg from "../Assets/images/home-img.png";
import {Link} from "react-router-dom";


const Error404page = () => {
    return (
    <div className="h-screen w-full bg-white-600 text-blue-900">
     
      

      
      <section className="home grid h-screen pt-32 pb-16">
      <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center relative">
        <div className="home__data justify-self-center text-center absolute  lg:text-right" style={{ marginLeft: '170px' }}> 
            <p className="pb-2 font-semibold">Error 404</p>
            <h1 className="pb-4 text-5xl font-bold lg:text-6xl">Hey Buddy</h1>
            <p className="pb-8 font-semibold">
              We can't seem to find the page <br />
              you are looking for.
            </p>
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-blue-900 py-4 px-8 font-bold text-white">
             Go Home
            </Link>
          </div>

          <div className="home__img justify-self-center" style={{ marginLeft: '1070px' }}>
             <img
                src={ErrorImg}
                className="w-64 animate-floting lg:w-[500px] lg:ml-[350px]"
                alt="home image"
            />    
              <div className="home__shadow absolute top-0 right-0 h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64" style={{ marginTop: '380px' , marginRight: '-230px'}}></div>

          </div>
        </div>

        <div className="home__footer flex items-center justify-center gap-2 self-end text-sm font-semibold">
          <p>CONTACT US</p>
          <p>|</p>
          <p>
            <Link to='mailto:undergraduplift@gmail.com'>
              undergraduplift@gmail.com
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Error404page;