import Link from "next/link";
import RestaurantMenu from "../../constmenu/Restaurantmenu";

export default function Restaurant() {
  return (
    <div>
      {RestaurantMenu.map((restaurant) => (
        <div key={restaurant.name} className="flex flex-wrap">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.price}</p>
        </div>
      ))}
    </div>
  );
}
