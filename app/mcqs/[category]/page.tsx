

import prisma from "@/lib/db";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";


interface Props {
    params: { category: string };
}

export default async function McqsByCategory({ params }: Props) {
    const { category } = await params;

    const questions = await prisma.question.findMany({
        where: { category },
    });

    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <Typography variant="h2" className="capitalize text-center">{category.replace(/-/g, " ")} MCQs</Typography>
            <EditDeleteMcqsList questions={questions} />
        </div>
    );
}
