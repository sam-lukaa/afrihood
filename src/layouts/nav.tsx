import {
  logo,
  caretup,
  asset,
  account,
  alert,
  menu,
  messages,
  darksearch,
  user,
} from "assets/icons";
import { Button } from "components";
import { INavBar } from "layouts/types";

export const NavBar = (): JSX.Element => {
  const NavLink = ({ src, caption, alt, icon }: INavBar) => {
    return (
      <figure className="flex gap-[0.54rem] w-full cursor-pointer">
        <img src={src} alt={alt} className="w-[1.5rem] h-[1.3rem]" />
        {caption && <figcaption className="text-white">{caption}</figcaption>}
        {icon && <img src={icon} alt={alt} />}
      </figure>
    );
  };

  return (
    <header className="top-0 sticky bg-black">
      <nav className="flex items-center py-[2.75rem] px-[7.92rem] justify-between w-full">
        <div className="flex items-center lg:gap-[5.62rem] w-[30%]">
          <NavLink src={logo} alt="ark logo" caption="Ark" />
          <NavLink src={asset} alt="asset" caption="Asset" icon={caretup} />
          <NavLink
            src={account}
            alt="account"
            caption="Account"
            icon={caretup}
          />
        </div>

        <div className="flex items-center lg:gap-[1.87rem] w-[45%]">
          {/* search button */}
          <div className="bg-white flex items-center gap-[.3rem] w-[35%] pr-[.56rem] pl-[2rem] py-[.31rem] rounded-[.63rem]">
            <input type="search" placeholder="search" className="w-[100%] outline-white" />

            <Button className="cursor-pointer">
              <img src={darksearch} alt="search" />
            </Button>
          </div>

          <div className='flex items-center lg:gap-[1.87rem]'>
            <figure className="w-full cursor-pointer bg-white rounded-full">
              <img src={alert} width='100%' height='100%' alt='alert' className="w-[1.5rem] h-[1.5    rem] rounded-full" />
            </figure>
            <NavLink src={messages} alt="messages" />
            <NavLink src={menu} alt="menu" icon={caretup} />
            <NavLink src={user} alt="profile" icon={caretup} />
          </div>
        </div>
      </nav>
    </header>
  );
};
