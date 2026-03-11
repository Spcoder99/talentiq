import { SparklesIcon } from "lucide-react";

function ProductivityTips() {
  return (
    <div className="card bg-base-100 border-2 border-accent/20 hover:border-accent/40 mt-16">
      <div className="card-body">

        <div className="flex items-center gap-3 mb-4">
          <SparklesIcon className="w-5 h-5 text-accent"/>
          <h2 className="text-xl font-black">Pro Tip</h2>
        </div>

        <p className="opacity-70">
          Conduct interviews in short focused sessions. Candidates perform better
          when problems are clearly scoped and collaborative discussion is encouraged.
        </p>

      </div>
    </div>
  );
}

export default ProductivityTips;