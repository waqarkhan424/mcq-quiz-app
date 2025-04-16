//@ts-nocheck
import prisma from "@/lib/db";

// export default async function McqsList() {
export default async function McqsList({ searchParams }: { searchParams: { category?: string } }) {
    console.log("searchParams::::11111:::::::", searchParams)

    const category = searchParams.category;


    const questions = await prisma.question.findMany({
        where: { category },
    });

    // const questions = await prisma.question.findMany();

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






                    {/*  Add solution block here */}
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
