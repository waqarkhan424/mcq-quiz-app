import McqsUploader from "./components/mcqs-uploader";
import McqsList from "./components/mcqs-list";


// export default function Home() {
export default function Home({ searchParams }: { searchParams: { category?: string } }) {
  console.log("searchParams:::::::::::", searchParams)

  return (
    <div className="p-6 space-y-10">
      <McqsUploader />
      <McqsList searchParams={searchParams} />
    </div>
  );
}
