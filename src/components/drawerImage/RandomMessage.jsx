import { useEffect, useState } from "react";
import { funnyLoginCaptions } from "../../data/funnyLoginCaptions";

function RandomMessage() {
  const [randomMessage, setRandomMessage] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funnyLoginCaptions.length);
    setRandomMessage({
      title: funnyLoginCaptions[randomIndex].title,
      message: funnyLoginCaptions[randomIndex].message,
    });
  }, []);

  return (
    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
      <div className="bg-opacity-20 bg-primary rounded-lg p-10">
        <p className="max-w-xl text-gray-200 text-2xl">{randomMessage.title}</p>
        <p className="max-w-xl mt-3 text-gray-300">{randomMessage.message}</p>
      </div>
    </div>
  );
}

export default RandomMessage;
