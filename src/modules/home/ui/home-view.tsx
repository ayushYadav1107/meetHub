"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HomeView = () => {
  const trpc = useTRPC();
  const { data} = useQuery(trpc.hello.queryOptions({ text: "Ayush" }));
  return (
      <div className="flex flex-col p-4 gap-y-4">
        {data?.greeting}
      </div>
  );
};
