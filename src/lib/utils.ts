import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix basePath ke semua src gambar — diperlukan karena next/image
// tidak otomatis menambahkan basePath saat unoptimized: true + static export
export function img(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
