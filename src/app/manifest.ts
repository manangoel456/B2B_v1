import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Barekyne — Premium Clinical Skincare",
    short_name: "Barekyne",
    description: "Premium clinical derma luxury skincare for distributors, clinics & retailers across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#B8964E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
