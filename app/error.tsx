"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
