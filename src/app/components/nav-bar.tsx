import MyLink from "./link";

export default function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 p-2 flex flex-row justify-center items-center rounded-full bg-white bg-opacity-10 backdrop-blur-md w-10/12 sm:w-auto">
      <MyLink href="/" >
        Home
      </MyLink>
      <MyLink href="/" >
        Work Experience
      </MyLink>
      <MyLink href="/" >
        Projects
      </MyLink>
    </nav>
  );
}