import prismadb from "@/lib/prismadb";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const file = await fs.readFile(process.cwd() + "/sampledata.json", "utf8");
    const data = JSON.parse(file);
    data.movies.map(async (movie: any) => {
      const _movie = await prismadb.movie.create({
        data: {
          title: movie.title,
          description: movie.overview,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
        },
      });
      return _movie;
    });
    return NextResponse.json(data.movies);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
