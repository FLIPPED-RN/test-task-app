import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../styles/Starships.scss";
import { starshipImages } from "../utils/photos";
import { useNavigate } from "react-router";

interface Starship {
  name: string;
  cost_in_credits: string;
  url: string;
}

async function fetchStarships(): Promise<Starship[]> {
  const res = await axios.get("https://swapi.py4e.com/api/starships");
  return res.data.results;
}

export default function Starships() {
  const navigate = useNavigate();
  
  const { data: starships, error, isLoading } = useQuery({
    queryKey: ["starships"],
    queryFn: fetchStarships,
  });

  if (isLoading) return <div className="Starships__loading">Загрузка...</div>;
  if (error) return <div className="Starships__error">Ошибка загрузки данных!</div>;


  return (
    <div className="Starships">
      {starships!.map((ship, index) => (
        <div className="Starships__card"
          key={index}
          onClick={() => {
            const id = ship.url.split("/").filter(Boolean).pop();
            navigate(`/starships/${id}`);
          }}
        >
          <img
            src={
              starshipImages[index] ||
              "https://i.pinimg.com/736x/a9/29/16/a92916d371b56dbbbde21dd289aa13c8.jpg"
            }
            alt={ship.name}
            className="Starships__image"
          />
          <p className="Starships__cost">
            <span>Cost</span>
            {ship.cost_in_credits !== "unknown" ? (
              <strong>
                ${Number(ship.cost_in_credits).toLocaleString()}
              </strong>
            ) : (
              "Н/Д"
            )}
          </p>
          <p className="Starships__title">
            <span>Name: </span>
            <strong>{ship.name}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}
