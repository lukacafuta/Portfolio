export default function Footer({ theme }) {
  return (
      <footer>
          <div className="border-t opacity-10 mb-12 md:mb-20 mx-8 border-custom-dark-chocolate-brown dark:border-custom-light-chocolate-brown"></div>

          <div className="flex flex-col mt-16 md:mt-24">
              <div className="flex text-xl md:text-3xl lg:text-4xl max-w-xs md:max-w-md opacity-70 font-bold self-center text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">
                  "I walk around like everything's fine, but deep down, inside my shoe, my sock is sliding off."
              </div>
              <div className="flex flex-row justify-end mr-32 text-base md:text-2xl opacity-50 font-thin mt-6 md:mt-12 text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">
                  — Unknown
              </div>
          </div>

          <div className="flex flex-row justify-center items-center text-sm mt-16 md:mt-24">
              <img
                  src={theme === 'light' ? "/copyright-dark-brown.svg" : "/copyright-light-brown.svg"}
                  className="opacity-30 w-6 h-6 md:w-8 md:h-8"/>
              <span className="opacity-30 text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">2024 Luka Cafuta</span>
          </div>
      </footer>
  );
}