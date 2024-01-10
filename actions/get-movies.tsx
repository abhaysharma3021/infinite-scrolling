import prismadb from "@/lib/prismadb";
import { Movie } from "@prisma/client";

interface GetMovieProps {
  page?: number;
  limit?: number;
  q?: string;
}

export const getMovies = async ({
  page = 1,
  limit = 10,
  q,
}: GetMovieProps): Promise<Movie[]> => {
  const skip = (page - 1) * limit;
  const movies = await prismadb.movie.findMany({
    skip: skip,
    take: limit,
    where: {
      OR: [
        {
          title: {
            contains: q || "",
          },
        },
        {
          description: {
            contains: q || "",
          },
        },
      ],
    },
  });
  return movies;
};

export const getTotalMovies = async ({ q }: { q?: string }) => {
  const total = await prismadb.movie.count({
    where: {
      OR: [
        {
          title: {
            contains: q || "",
          },
        },
        {
          description: {
            contains: q || "",
          },
        },
      ],
    },
  });
  return total;
};
