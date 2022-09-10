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
        <div className=" buttonGrid flex justify-center p-4 gap-9">
          <button onClick={() => filter("all")}>All</button>
          <button onClick={() => filter("pop")}>Pop</button>
          <button onClick={() => filter("indianClassic")}>
            Indian Classic
          </button>
          <button onClick={() => filter("jazz")}>Jazz</button>
        </div>
        <div className=" container grid grid-cols-4 gap-5 gap-y-5">
          {musicData.map((item) => (
            <div
              key={item.id}
              className=" card bg-white p-2 flex flex-col justify-center items-center rounded-lg"
            >
              <img
                src={item.image}
                className=" w-[15rem] h-[15rem] rounded-lg"
                alt=""
              />
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
