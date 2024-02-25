import logo from "../assets/133 burger-logo.b8503d26.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-24 bg-[rgb(112,59,9)]">
      <div className="bg-white rounded-md p-2">
        <img className="w-[52px]" src={logo} alt="Burger" />
      </div>
      <div className="text-white">
        <button className=" mr-3 bg-[rgb(200,255,0)] py-2 px-3">Burger</button>
        <button>Authenticate</button>
      </div>
    </div>
  );
}
