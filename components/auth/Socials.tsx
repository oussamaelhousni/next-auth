"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
export const Socials = () => {
  return (
    <div className="flex items-center w-full gap-x-2 justify-center">
      <Button variant="outline" size="lg">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="lg">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
