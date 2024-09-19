import Profile from "./components/profile/profile";

export default function Home() {
  return (
    <main className="w-full mt-36">
      <div className="w-full space-y-6 sm:space-y-20">
        <Profile />
        <div className="w-full flex flex-col space-y-4">
          <h1
            className="font-bold text-5xl sm:text-7xl gradient-text-random">
              Desarrollador de Software
          </h1>
          <p className="text-balance text-gray-400 font-light sm:text-lg">
            Desarrollador de software con más de dos años de experiencia,
            especializado en backend e infraestructura. He migrado sistemas
            monolíticos a microservicios, optimizado plataformas y gestionado
            entornos con Docker Swarm y Ansible. Tengo experiencia en la
            implementación de CI/CD con GitHub Actions, autenticación con Cerbos
            y gestión de APIs con Caddy Server. También cuento con habilidades
            en frontend usando React y Next.js.
          </p>
        </div>
      </div>
    </main>
  );
}
