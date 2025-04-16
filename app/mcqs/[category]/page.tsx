import prisma from "@/lib/db";

interface Props {
    params: {
        category: string;
    };
}

export default async function McqsByCategory({ params }: Props) {
    const { category } = params;

    const questions = await prisma.question.findMany({
        where: { category },
    });


    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold capitalize">{category.replace(/-/g, " ")} MCQs</h1>
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

                    {q.solution && (
                        <div className="bg-gray-100 mt-2 p-3 rounded text-sm whitespace-pre-line">
                            <strong>Step-by-step:</strong>
                            <br />
                            {q.solution}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
