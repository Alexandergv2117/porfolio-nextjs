import MyLink from "./link";

export default function NavBar() {
  return (
    <nav className="fixed top-6 space-x-6 p-2 flex flex-row justify-center items-center rounded-full bg-white bg-opacity-5">
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