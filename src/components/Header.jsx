export default function Header() {
  return (
      <header className="flex flex-row justify-between w-full pt-14">
          <div className="pl-[6.5rem]">
                <img src="/luca-logo.svg" alt="Luca logo"/>
          </div>
          <div className="pr-[6.5rem]">
                <img src="/darkmode-button.svg" alt="Dark mode button"/>
          </div>
      </header>
  );
}