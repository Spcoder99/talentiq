import { PlusIcon, Code2Icon, UsersIcon } from "lucide-react";
import { useNavigate } from "react-router";

function QuickActions({ onCreateSession }) {

    const navigate = useNavigate();
  return (
    <div className="card bg-base-100 border-2 border-primary/20 hover:border-primary/40 mt-16">
      <div className="card-body">

        <h2 className="text-xl font-black mb-4">Quick Actions</h2>

        <div className="grid md:grid-cols-3 gap-4">

          <button
            onClick={onCreateSession}
            className="card bg-base-200 hover:bg-primary/10 border border-base-300 transition"
          >
            <div className="card-body items-center text-center">
              <PlusIcon className="w-6 h-6 text-primary"/>
              <p className="font-semibold">Create Interview</p>
            </div>
          </button>

          <button onClick={() => navigate("/problems")} className="card bg-base-200 hover:bg-primary/10 border border-base-300 transition">
            <div className="card-body items-center text-center">
              <Code2Icon className="w-6 h-6 text-secondary"/>
              <p className="font-semibold">Practice Problems</p>
            </div>
          </button>

          <button onClick={() => navigate("/community")} className="card bg-base-200 hover:bg-primary/10 border border-base-300 transition  ">
            <div className="card-body items-center text-center">
              <UsersIcon className="w-6 h-6 text-accent"/>
              <p className="font-semibold">Join Community</p>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
}

export default QuickActions;