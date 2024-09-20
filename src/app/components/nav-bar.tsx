import MyLink from "./link";

export default function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 p-2 flex flex-row justify-center items-center rounded-full bg-white bg-opacity-10 backdrop-blur-md w-10/12 sm:w-full min-w-[23rem] sm:min-w-[26rem] max-w-[30rem]">
      <MyLink href="/" >
        Inicio
      </MyLink>
      <MyLink href="/" >
        Experiencia Laboral
      </MyLink>
      <MyLink href="/" >
        Proyectos
      </MyLink>
    </nav>
  );
}