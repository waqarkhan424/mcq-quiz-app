import prisma from "@/lib/db";

export default async function McqsList() {
    const questions = await prisma.question.findMany();

    return (
        <div className="space-y-4">
            {questions.map((q) => (
                <div key={q.id} className="border p-4 rounded">
                    <h3 className="font-bold">{q.question}</h3>
                    <ul className="list-disc ml-6">
                        {q.options.map((opt, idx) => (
                            <li key={idx}>{opt}</li>
                        ))}
                    </ul>
                    <p className="text-green-600 mt-2">
                        Correct: {q.correctAnswer}
                    </p>
                </div>
            ))}
        </div>
    );
}
