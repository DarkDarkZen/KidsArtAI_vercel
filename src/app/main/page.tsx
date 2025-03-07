"use client";

import { ImageUpload } from "~/components/image-upload";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [isReady, setIsReady] = useState(false);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    // Check if we're in a Telegram Web App environment
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      setIsTelegram(true);
      setIsReady(true);
    } else {
      // If not in Telegram, we can still show the app
      setIsReady(true);
    }
  }, []);

  if (!isReady) {
    return (
      <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
          <p className="mt-2 text-muted-foreground">Please wait while we initialize the app.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8">
      {!isTelegram && (
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold">Welcome to Kids Art AI</h2>
          <p className="mt-2 text-muted-foreground">
            This app works best when opened through Telegram.
          </p>
        </div>
      )}
      <ImageUpload />
    </div>
  );
} 