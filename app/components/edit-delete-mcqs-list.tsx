"use client";

import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { update_mcqs } from "@/app/actions/update_mcqs";


import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";



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

        <Card>
            <CardHeader>
                <CardTitle className="text-base font-semibold">
                    {index + 1}.{" "}
                    {isEditing ? (
                        <Input
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    ) : (
                        question
                    )}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <ul className="list-none pl-2 space-y-1">
                    {options.map((opt: string, idx: number) => (
                        <li key={idx}>
                            {String.fromCharCode(65 + idx)}.{" "}
                            {isEditing ? (
                                <Input
                                    value={opt}
                                    onChange={(e) => {
                                        const newOptions = [...options];
                                        newOptions[idx] = e.target.value;
                                        setOptions(newOptions);
                                    }}
                                />
                            ) : (
                                <span
                                    className={
                                        opt === correctAnswer
                                            ? "text-green-700 font-semibold"
                                            : ""
                                    }
                                >
                                    {opt}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                {isEditing ? (
                    <>
                        <Label>Correct Answer:</Label>
                        <Input
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                        />
                        <Label className="mt-2 block">Solution:</Label>
                        <Textarea
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}
                        />
                    </>
                ) : (
                    solution && (
                        <div className="bg-muted mt-2 p-3 rounded text-sm whitespace-pre-line">
                            <Label className=" font-bold">Step-by-step:</Label>
                            <br />
                            {solution}
                        </div>
                    )
                )}

                {process.env.NODE_ENV !== "production" && (
                    <div className="flex gap-4 mt-3">
                        {isEditing ? (
                            <>
                                <Button onClick={handleSave}>Save</Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
                                <Button size="sm" variant="destructive" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>





    );
}
