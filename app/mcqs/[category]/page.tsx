

import prisma from "@/lib/db";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";


interface Props {
    params: { category: string };
}

export default async function McqsByCategory({ params }: Props) {
    const { category } = params;

    const questions = await prisma.question.findMany({
        where: { category },
    });

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold capitalize">{category.replace(/-/g, " ")} MCQs</h1>
            <EditDeleteMcqsList questions={questions} />
        </div>
    );
}
