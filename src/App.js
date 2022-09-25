import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [musicData, setMusicData] = useState(data);

  const filter = (category) => {
    if (category === "all") setMusicData(data);
    else {
      setMusicData(data.filter((item) => item.category === category));
    }
  };

  return (
    <div className="main">
      <header>Music Recommendation App</header>
      <div className=" outer-container">
        <div className=" buttonGrid ">
          <button onClick={() => filter("all")}>All</button>
          <button onClick={() => filter("pop")}>Pop</button>
          <button onClick={() => filter("indianClassic")}>
            Indian Classic
          </button>
          <button onClick={() => filter("jazz")}>Jazz</button>
        </div>
        <div className=" container ">
          {musicData.map((item) => (
            <div key={item.id} className=" card">
              <img src={item.image} alt="" />
              <span>{item.rating}⭐</span>
              <h1>{item.title}</h1>
              <p className=" underline">{item.artist}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="social-icons ">
        <p className="footer">Copyright &copy; 2022 - Gurudatt Puranik</p>
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gurudatt_puranik/">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p className="responsiveFooter">
        Copyright &copy; 2022 - Gurudatt Puranik
      </p>
    </div>
  );
}

export default App;
