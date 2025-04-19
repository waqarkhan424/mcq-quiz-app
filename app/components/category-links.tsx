
"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import {
    Percent,
    Ruler,
    Tag,
    Clock,
    Users,
    Coins,
    Banknote,
    AreaChart,
    Sigma,
    Calculator,
    Divide,
} from "lucide-react";




const categories = [
    { key: "percentage", label: "Percentage", icon: Percent, color: "text-rose-600" },
    { key: "geometry", label: "Geometry", icon: Ruler, color: "text-indigo-600" },
    { key: "discount", label: "Discount", icon: Tag, color: "text-yellow-600" },
    { key: "time-distance", label: "Time and Distance", icon: Clock, color: "text-cyan-600" },
    { key: "time-work", label: "Time and Work", icon: Clock, color: "text-blue-600" },
    { key: "partnership", label: "Partnership", icon: Users, color: "text-emerald-600" },
    { key: "simple-interest", label: "Simple Interest", icon: Coins, color: "text-orange-600" },
    { key: "compound-interest", label: "Compound Interest", icon: Banknote, color: "text-pink-600" },
    { key: "area-related", label: "Area Related", icon: AreaChart, color: "text-yellow-700" },
    { key: "quadratic", label: "Quadratic Equation", icon: Sigma, color: "text-purple-600" },
    { key: "races-games", label: "Races and Games", icon: Calculator, color: "text-pink-600" },
    { key: "stock-share", label: "Stock and Share", icon: Banknote, color: "text-green-700" },
    { key: "mensuration", label: "Mensuration", icon: Ruler, color: "text-lime-600" },
    { key: "ratio-proportion", label: "Ratio and Proportion", icon: Divide, color: "text-red-600" },
    { key: "lcm-hcf", label: "LCM and HCF", icon: Divide, color: "text-indigo-600" },
    { key: "basic-arithmetic", label: "Basic Arithmetic", icon: Calculator, color: "text-sky-700" },
    { key: "accounting", label: "Accounting", icon: Coins, color: "text-orange-700" },
    { key: "basic-maths", label: "Basic Maths", icon: Sigma, color: "text-red-700" },
];






export default function CategoryLinks() {
    const router = useRouter();

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">

            <Typography variant="h2" className="mb-6 text-center">
                Choose a Math Topic to Begin
            </Typography>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <Card
                            key={cat.key}
                            onClick={() => router.push(`/mcqs/${cat.key}`)}
                            className="cursor-pointer bg-yellow-50 transition rounded-xl border-none shadow-sm"
                        // className="cursor-pointer bg-yellow-50 transition-transform transform hover:-translate-y-1 hover:shadow-md rounded-xl border-none"
                        >
                            <CardContent className="p-5 flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2">
                                <Icon className={`w-5 h-5 ${cat.color}`} />
                                {cat.label} MCQs
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
