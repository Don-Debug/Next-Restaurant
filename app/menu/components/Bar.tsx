import Link from "next/link";
import barMenu from "../../constmenu/Barmenu";

export default function Bar() {
  return (
    <div>
      {barMenu.map((bar) => (
        <div key={bar.name} className="flex flex-col">
          <h1>{bar.name}</h1>
          <p>{bar.price}</p>
        </div>
      ))}
    </div>
  );
}
