"use client";

import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { update_mcqs } from "@/app/actions/update_mcqs";

export default function EditDeleteMcqsList({ questions }: { questions: any[] }) {
    return (
        <>
            {questions.map((q, index) => (
                <EditDeleteMCQ key={q.id} q={q} index={index} />
            ))}
        </>
    );
}

function EditDeleteMCQ({ q, index }: any) {
    const [isEditing, setIsEditing] = useState(false);
    const [question, setQuestion] = useState(q.question);
    const [options, setOptions] = useState(q.options);
    const [correctAnswer, setCorrectAnswer] = useState(q.correctAnswer);
    const [solution, setSolution] = useState(q.solution ?? "");
    const [deleted, setDeleted] = useState(false);

    if (deleted) return null;

    async function handleDelete() {
        await delete_mcqs(q.id);
        setDeleted(true);
    }

    async function handleSave() {
        await update_mcqs(q.id, {
            question,
            options,
            correctAnswer,
            solution,
        });
        setIsEditing(false);
    }

    return (
        <div className="border p-4 rounded space-y-2">
            <h3 className="font-semibold">{index + 1}.{" "}
                {isEditing ? (
                    <input value={question} onChange={(e) => setQuestion(e.target.value)} className="border p-1 w-full" />
                ) : (
                    question
                )}
            </h3>

            <ul className="list-none pl-2 space-y-1">
                {options.map((opt: string, idx: number) => (
                    <li key={idx}>
                        {String.fromCharCode(65 + idx)}.{" "}
                        {isEditing ? (
                            <input
                                className="border p-1 w-full"
                                value={opt}
                                onChange={(e) => {
                                    const newOptions = [...options];
                                    newOptions[idx] = e.target.value;
                                    setOptions(newOptions);
                                }}
                            />
                        ) : (
                            <span className={opt === correctAnswer ? "text-green-700 font-semibold" : ""}>
                                {opt}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            {isEditing ? (
                <>
                    <label>Correct Answer:</label>
                    <input
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        className="border p-1 w-full"
                    />
                    <textarea
                        className="border p-1 w-full mt-2"
                        value={solution}
                        onChange={(e) => setSolution(e.target.value)}
                    />
                </>
            ) : (
                solution && (
                    <div className="bg-gray-100 mt-2 p-3 rounded text-sm whitespace-pre-line">
                        <strong>Step-by-step:</strong>
                        <br />
                        {solution}
                    </div>
                )
            )}

            {process.env.NODE_ENV !== "production" && (
                <div className="flex gap-4 mt-2">
                    {isEditing ? (
                        <>
                            <button onClick={handleSave} className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
                            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-3 py-1 rounded">Cancel</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setIsEditing(true)} className="text-blue-600 underline">Edit</button>
                            <button onClick={handleDelete} className="text-red-600 underline">Delete</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
