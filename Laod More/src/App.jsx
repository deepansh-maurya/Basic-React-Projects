import { useEffect, useState } from "react";
import "./App.css";
import { Image } from "./Image";
import { Load } from "./Load";
function App() {
  let response;
  const [output, setoutput] = useState();

  let [photo, setphoto] = useState(15);
  let getImage = async () => {
    console.log("mai aag ya", photo);
    try {
      response = await fetch(
        `https://pixabay.com/api/?key=41785510-21b02ee3cc5f5e2b9b484afdd&image_type=photo&per_page=${photo}`
      );
      setphoto(Number(photo + 15));
      let temp = await response.json();
      console.log(temp, "  temp");
      setoutput(temp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className="w-[100%] h-[100%] overflow-x-hidden ">
        <Image setphoto={setphoto} image={output}></Image>
        <Load load={getImage} photo={photo} setphoto={setphoto}></Load>
      </div>
    </div>
  );
}

export default App;
