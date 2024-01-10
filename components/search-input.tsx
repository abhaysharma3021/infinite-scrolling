"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = ({ q }: { q?: string }) => {
  const router = useRouter();
  const [text, setText] = useState(q);
  const [query] = useDebounce(text, 500);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!query) {
      router.push(`/movies`);
    } else {
      router.push(`/movies?q=${query}`);
    }
  }, [query, router]);
  return (
    <div className="md:w-[40%]">
      <Input
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
