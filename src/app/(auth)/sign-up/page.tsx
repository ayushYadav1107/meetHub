import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import React from "react";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

async function Page() {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
      if (!!session) {
        redirect("/");
      }
    return(<SignUpView/>
  );
}

export default Page;

// http://localhost:3000/sign-in
