export default function Footer() {
  return (
      <footer className="pb-14">
          <div className="border-t opacity-10 mb-20"></div>
          <span className="flex justify-center font-chopin text-3xl opacity-50 font-thin">
              "I walk around like everything's fine, but deep down, inside my shoe, my sock is sliding off."
          </span>
          <span className="flex flex-row justify-end font-chopin text-2xl opacity-50 font-thin mt-12 mr-32">
          — Unknown
        </span>
          <div className="flex flex-row justify-center mt-16">
              <img src="/copyright-darkmode.svg" className="opacity-30"/>
              <span className="opacity-30">2024 Luka Cafuta</span>
          </div>
      </footer>
  );
}