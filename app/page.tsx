import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import { FaLock } from "react-icons/fa";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-5xl font-semibold text-white drop-shadow-md flex items-center justify-center gap-4",
            font.className
          )}
        >
          <FaLock className="text-4xl" />
          Auth
        </h1>

        <p className="text-white text-lg">A simple authentication service</p>

        <div>
          <LoginButton mode="redirect">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
