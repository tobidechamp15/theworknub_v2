import Logo from "./Logo";
import NavLink from "./NavLink";
import Cta from "./Cta";

const Navbar = () => {
  return (
    <nav className="bg-[#EAFFE3]">
      <div className=" container flex flex-row items-center justify-between flex-wrap gap-4 py-8 px-4">
        <Logo />
        <NavLink />
        <Cta
          link="https://forms.gle/Qo2XG1smyRqqHNNM6"
          label="book a space"
          className="hidden md:block"
        />
      </div>
    </nav>
  );
};
export default Navbar;
