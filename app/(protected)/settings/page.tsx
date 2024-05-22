import React from "react";
import { auth, signOut } from "@/auth";

const SettingPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirect: true, redirectTo: "/auth/login" });
        }}
      >
        <button type="submit" className="border bg-red-500 p-2">
          Signout
        </button>
      </form>
    </div>
  );
};

export default SettingPage;
