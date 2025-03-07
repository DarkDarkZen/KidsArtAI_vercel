"use client";

import { ImageUpload } from "~/components/image-upload";

export default function HomePage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4">
      <ImageUpload />
    </div>
  );
} 