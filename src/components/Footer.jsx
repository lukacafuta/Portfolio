export default function Footer() {
  return (
      <footer>
          <div className="border-t opacity-10 mb-20 mx-8"></div>

          <div className="flex flex-col mt-24">
              <div className="flex text-4xl max-w-md opacity-50 text-custom-light-chocolate-brown font-bold ml-40 self-center">
                  "I walk around like everything's fine, but deep down, inside my shoe, my sock is sliding off."
              </div>
              <div
                  className="flex flex-row justify-end text-2xl opacity-50 text-custom-light-chocolate-brown font-thin mt-12 mr-32">
                  — Unknown
              </div>
          </div>

          <div className="flex flex-row justify-center items-center text-sm mt-24">
              <img src="/copyright-darkmode.svg" className="opacity-30"/>
              <span className="opacity-30">2024 Luka Cafuta</span>
          </div>
      </footer>
  );
}