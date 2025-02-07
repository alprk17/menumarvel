import { Link } from "react-router-dom";
import MENU from "~/constants/menu";

export default function Footer() {
  return (
    <div className="pb-5">
      <div className="p-[41px] mt-[58px] bg-secondary rounded-[15px] shadow-primaryShadow">
        <div className="flex flex-wrap justify-between">
          <div className="mb-[50px]">
            <div className="flex items-center gap-[15px] mb-[14px]">
              <img
                className="w-[30px] h-[30px] rounded-full object-cover"
                src="/images/logo.png"
                alt="logo"
              />
              <p className="text-xl font-extrabold">Menu Marvel!</p>
            </div>
            <p className="text-sm font-bold">
              The most reliable &amp; secure digital/QR menu generator for
              businesses.
            </p>
          </div>
          <div className="w-full md:w-[25%] flex justify-between mb-[50px]">
            <div>
              <h3 className="mb-[11px] font-extrabold text-[16px] leading-[19px]">
                TABS
              </h3>
              <nav>
                <ul>
                  {MENU.map((menuItem, index) => (
                    <li key={index}>
                      <Link
                        to={menuItem.path}
                        className="mb-[10px] font-bold text-[14px] leading-[16px] cursor-pointer hover:text-primary transition-all"
                      >
                        {menuItem.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/"
                      className="mb-[10px] font-bold text-[14px] leading-[16px] cursor-pointer hover:text-primary transition-all"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="mb-[11px] font-extrabold text-[16px] leading-[19px]">
                SOCIAL
              </h3>
              <nav>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="mb-[10px] font-bold text-[14px] leading-[16px] cursor-pointer hover:text-primary transition-all"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="mb-[10px] font-bold text-[14px] leading-[16px] cursor-pointer hover:text-primary transition-all"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="mb-[10px] font-bold text-[14px] leading-[16px] cursor-pointer hover:text-primary transition-all"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="mb-[10px] font-bold text-[14px] leading-[16px] cursor-pointer hover:text-primary transition-all"
                    >
                      YouTube
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between text-center">
          <p className="font-bold text-sm">
            Menu Marvel &copy; {new Date().getFullYear()}
          </p>
          <p className="font-bold text-sm">
            Powered by{" "}
            <Link
              className="hover:text-primary transition-all"
              to="https://github.com/batincelik"
              target="_blank"
            >
              Batın Çelik
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
