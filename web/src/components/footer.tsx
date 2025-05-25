import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col text-center gap-1 mt-auto w-full justify-center items-center">
      <p className="flex text-center gap-1 w-full justify-center items-center">
        Made with <Heart className="text-primary" /> by{" "}
        <a
          href="https://lorenzo0111.me"
          target="_blank"
          className="text-primary"
        >
          Lorenzo0111
        </a>
      </p>

      <div className="flex text-center gap-3 w-full justify-center items-center">
        <a href="https://to.lorenzo0111.me/burnpp" className="text-sm text-gray-500">
          Privacy Policy
        </a>

        <a href="https://to.lorenzo0111.me/burntos" className="text-sm text-gray-500">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
