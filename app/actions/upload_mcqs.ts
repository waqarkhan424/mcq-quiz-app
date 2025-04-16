"use server";

import prisma from "@/lib/db";

export async function upload_mcqs(mcqs: {
    question: string;
    options: string[];
    correctAnswer: string;
}[]) {

    console.log("mcqs:::::::::", mcqs)
    try {
        await prisma.question.createMany({
            data: mcqs,
        });

        console.log("MCQs uploaded successfully");

    } catch (error) {

        console.error("Failed to upload MCQs", error)
    }
}
