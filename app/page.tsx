import McqsUploader from "./components/mcqs-uploader";
import McqsList from "./components/mcqs-list";


export default function Home() {
  return (
    <div className="p-6 space-y-10">
      <McqsUploader />
      <McqsList />
    </div>
  );
}
