import { fetchMovies } from "@/actions/get-movie-action";
import { getMovies, getTotalMovies } from "@/actions/get-movies";
import Container from "@/components/container";
import MoviesContainer from "@/components/movies-container";
import Search from "@/components/search-input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const MoviesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined;

  // const movies = await getMovies({
  //   page: page,
  //   limit: limit,
  //   q: searchParams.q as string,
  // });
  const movies = await fetchMovies({ search: q });
  const totalMovies = await getTotalMovies({ q: q });
  const totalNumberofRows = Math.round((totalMovies + limit - 1) / limit);

  return (
    <Container>
      <div className="px-4 py-3">
        <div className="my-16 flex flex-col gap-y-10">
          {/* Title and Next & Previous Buttons */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-3xl">Movies</h3>
            <Search q={q} />
            {/* <div className="flex items-center gap-x-4">
              <Button disabled={page == 1} className="px-0 py-0">
                <Link
                  href={{
                    pathname: "/movies",
                    query: {
                      ...((searchParams.q as string) ? { q } : {}),
                      page: page > 1 ? page - 1 : 1,
                    },
                  }}
                  className="px-4 py-2"
                >
                  Previous
                </Link>
              </Button>
              <Button
                disabled={!(page < totalNumberofRows)}
                className="px-0 py-0"
              >
                <Link
                  href={{
                    pathname: "/movies",
                    query: {
                      ...((searchParams.q as string) ? { q } : {}),
                      page: page + 1,
                    },
                  }}
                  className="px-4 py-2"
                >
                  Next
                </Link>
              </Button>
            </div> */}
          </div>
          {/* Movies */}
          <MoviesContainer data={movies} search={q} />
        </div>
      </div>
    </Container>
  );
};

export default MoviesPage;
