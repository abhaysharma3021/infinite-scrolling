import { Movie } from "@prisma/client";
import Image from "next/image";

interface MoviesCardProps {
  data: Movie;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 overflow-hidden">
      <div className=" aspect-square object-cover">
        <Image
          src={data.poster_path}
          alt=""
          width={300}
          height={300}
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <h3 className="font-bold">{data.title}</h3>
        <p className="line-clamp-3 text-muted-foreground my-2">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;
