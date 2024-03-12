import SearchBar from '../../components/searchBar/SearchBar';
import './homepage.scss';

function Homepage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real State & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis
            itaque rerum dolorem nam! Cumque delectus enim soluta quis sit
            nostrum iusto facere minus amet provident, maiores in minima saepe.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>120+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background picture" />
      </div>
    </div>
  );
}

export default Homepage;
