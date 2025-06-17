import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../styles/StarshipDetail.scss";
import { starshipImages } from "../utils/photos";

interface Starship {
  name: string;
  model: string;
  cost_in_credits: string;
  length: string;
  created: string;
  url: string;
}

async function fetchStarship(id: string): Promise<Starship> {
  const res = await axios.get(`https://swapi.py4e.com/api/starships/${id}/`);
  return res.data;
}

export default function StarshipDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["starship", id],
    queryFn: () => fetchStarship(id!),
    enabled: !!id,
  });

  if (isLoading) return <p className="StarshipDetail__loading">Загрузка...</p>;
  if (error || !data) return <p className="StarshipDetail__error">Ошибка!</p>;

  const index = parseInt(id!) - 1;

  return (
    <div className="StarshipDetail">
      <h1 className="StarshipDetail__title">{data.name}</h1>
      <div className="StarshipDetail__content">
        <div className="StarshipDetail__image-wrapper">
          <img
            src={
              starshipImages[index - 1] ||
              "https://i.pinimg.com/736x/a9/29/16/a92916d371b56dbbbde21dd289aa13c8.jpg"
            }
            alt={data.name}
            className="StarshipDetail__image"
          />
        </div>
        <div className="StarshipDetail__info">
          <p><strong>Model:</strong> {data.model}</p>
          <p><strong>Length:</strong> {data.length}</p>
          <p><strong>Cost:</strong>{" "}
            {data.cost_in_credits !== "unknown"
              ? `$${Number(data.cost_in_credits).toLocaleString()}`
              : "Н/Д"}
          </p>
          <p><strong>Created:</strong> {new Date(data.created).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
