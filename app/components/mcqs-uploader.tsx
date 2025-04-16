//@ts-nocheck
"use client";

import { upload_mcqs } from "../actions/upload_mcqs";
import { useState } from "react";

export default function McqsUploader() {
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        setLoading(true);
        const mcqs = [
            {
                question: "What is the capital of France?",
                options: ["Paris", "Berlin", "Madrid", "London"],
                correctAnswer: "Paris",
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: "4",
            },
        ];
        await upload_mcqs(mcqs);

        setLoading(false);
    };

    return (
        <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
        >
            {loading ? "Uploading..." : "Upload MCQs"}
        </button>
    );
}
