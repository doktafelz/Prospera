import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.prosperagroup.co"

    const staticRoutes = [
        { path: "", priority: 1.0 },
        { path: "about", priority: 0.8 },
        { path: "contact", priority: 0.8 },
        { path: "faq", priority: 0.8 },
        { path: "legal", priority: 0.9 },
        { path: "map", priority: 0.9 },
        { path: "services", priority: 0.9 },
        { path: "testimonials", priority: 0.9 },
        { path: "how-it-works", priority: 0.9 },
        { path: "team", priority: 0.9 },

    ]

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}/${route.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
    }))

    return [...staticEntries]
}