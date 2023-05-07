import React, { useState } from "react";
import { Icon } from "@iconify/react";

const NoPage = () => {
  const [load, setLoad] = useState(false);

  function backControl() {
    setLoad(true);
    setTimeout(() => {
      window.open("/", "_self");
    }, 1500);
  }

  return (
    <div className="text-white font-Fira-code bg-[#282C33] h-screen flex justify-center flex-col items-center">
      <div className="-mt-10">
        <Icon icon="tabler:error-404" width="300" />
        <div className="-mt-10 text-center relative">
          <p>Are you lost habibi ?🥺</p>
          <button
            className="border-[#0099DB] border  hover:bg-[#00567b] py-2 px-5 mt-5"
            onClick={backControl}
          >
            {load ? "on the way ..." : "Yalla back home !~"}
          </button>
          {load && (
            <Icon
              icon="noto-v1:motor-scooter"
              width="50"
              hFlip={true}
              className="animate-jalan absolute"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NoPage;
