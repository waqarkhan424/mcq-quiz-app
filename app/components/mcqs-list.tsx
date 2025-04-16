import prisma from "@/lib/db";

export default async function McqsList() {
    const questions = await prisma.question.findMany();

    return (
        <div className="space-y-4">
            {questions.map((q, index) => (
                <div key={q.id} className="border p-4 rounded space-y-2">
                    <h3 className="font-semibold">{index + 1}. {q.question}</h3>
                    <ul className="list-none pl-2 space-y-1">
                        {q.options.map((opt, idx) => {
                            const isCorrect = opt === q.correctAnswer;
                            return (
                                <li key={idx} className={isCorrect ? "text-green-700 font-semibold" : ""}>
                                    {String.fromCharCode(65 + idx)}. {opt}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}




        </div>
    );
}
