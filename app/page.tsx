import "@coreui/icons/css/free.min.css";
import "@coreui/icons/css/brand.min.css";
import "@coreui/icons/css/flag.min.css";

import React, { Suspense } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Carousel />
      </Suspense>

      <h1 className="m-4 py-3">hello</h1>
    </main>
  );
}
