import { Camera, Upload } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleCameraCapture = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Here you would typically open a camera view and capture the image
      // For now, we'll just close the stream
      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="flex aspect-square w-full max-w-md flex-col items-center justify-center p-8">
        <div className="relative aspect-square w-full rounded-lg border-2 border-dashed border-muted-foreground/25">
          {image ? (
            <Image
              src={image}
              alt="Uploaded image"
              fill
              className="object-contain p-2"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="rounded-full bg-muted p-4">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Загрузите или сделайте фото
              </p>
            </div>
          )}
        </div>
      </Card>

      <div className="flex w-full max-w-md gap-2">
        <Button
          variant="outline"
          className="flex-1 gap-2"
          size="lg"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <Upload className="h-5 w-5" />
          Загрузить
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </Button>
        <Button
          variant="outline"
          className="flex-1 gap-2"
          size="lg"
          onClick={handleCameraCapture}
        >
          <Camera className="h-5 w-5" />
          Сделать фото
        </Button>
      </div>

      <Button
        className="w-full max-w-md"
        size="lg"
        disabled={!image}
      >
        Проанализировать
      </Button>
    </div>
  );
} 