import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <button
        className={`px-2 py-2 rounded cursor-pointer text-sm font-semibold ${dark ? "text-primary bg-bg-hover" : "text-white bg-black"}`}
        onClick={() => setDark(!dark)}
      >
        <div className="flex items-center gap-2">
          <span>{dark ? "Light" : "Dark"}</span>

          {dark ? (
            <div>
              <MdLightMode size={20} color="#FAE369" />
            </div>
          ) : (
            <div>
              <MdDarkMode size={20} color="white" />
            </div>
          )}
        </div>
      </button>
    </>
  );
};

export default DarkMode;
