import McqsUploader from "./components/mcqs-uploader";
import CategoryLinks from "./components/category-links";


export default function Home() {


  return (
    <div className="p-6 space-y-10">
      <McqsUploader />
      <CategoryLinks />
    </div>
  );
}
