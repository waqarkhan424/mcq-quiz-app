"use client";

import { useRouter } from "next/navigation";

const categories = [
    "percentage",
    "geometry",
    "discount",
    "time-distance",
    "partnership",
    "simple-interest",
    "compound-interest",
    "area",
    "quadratic",
    "arithmetic",
    "mensuration",
    "ratio-proportion",
];

export default function CategoryLinks() {
    const router = useRouter();

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-bold mb-2">Maths MCQs</h2>
            {categories.map((cat, index) => (
                <p
                    key={cat}
                    className="text-blue-600 underline cursor-pointer"
                    onClick={() => router.push(`/?category=${cat}`)}
                >
                    {index + 1}. {formatCategory(cat)}
                </p>
            ))}
        </div>
    );
}

function formatCategory(category: string) {
    return category
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()) + " MCQs";
}
