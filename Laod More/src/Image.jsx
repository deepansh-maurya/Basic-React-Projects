import React, { useEffect, useState } from "react";
export const Image = (props) => {
  let [myImage, setmyimage] = useState([]);

  useEffect(() => {
    if (props.image && props.image.hits) {
      setmyimage(props.image.hits);
      console.log(props);
    } else setmyimage([]);
  }, [props.image]);
  const imageArray = Array.from(
    { length: props.image ? props.image.hits.length : 15 },
    (_, index) => `image${index + 1}`
  );

  return (
    <>
      {myImage.length == 0 ? (
        <div className="flex text-5xl justify-center  mt-48 mx-aut">
          {myImage.length == 0 ? "Click on Load More to load Image" : " "}
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-wrap border-red-400 w-[100%] ">
        {imageArray.map((key, index) => (
          <div key={key} className="border-blue-500 w-[20%] ">
            {myImage.length == 0 ? (
              <div></div>
            ) : (
              <img
                className="  w-[100%] aspect-square"
                src={myImage[index]?.previewURL}
                alt="wait"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
