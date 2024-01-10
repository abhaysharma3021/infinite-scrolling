import Container from "@/components/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="font-bold text-2xl">LOGO</h3>
              <div className="px-8 flex items-center gap-x-4">
                <Link href="/">Home</Link>
                <Link href="/movies">Movies</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
