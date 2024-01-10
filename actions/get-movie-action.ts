"use server";

import { getMovies } from "./get-movies";

export async function fetchMovies({
  page = 1,
  search,
}: {
  page?: number;
  search?: string | undefined;
}) {
  const movies = await getMovies({ q: search, page });
  return movies;
}
