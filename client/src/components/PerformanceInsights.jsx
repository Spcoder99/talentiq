import { TrophyIcon, ZapIcon, BarChart3Icon } from "lucide-react";

function PerformanceInsights({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="card bg-base-100 border-2 border-secondary/20 hover:border-secondary/40 mt-16">
      <div className="card-body">

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-secondary to-primary rounded-xl">
            <BarChart3Icon className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-black">Performance Insights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="card bg-base-200 border border-base-300">
            <div className="card-body items-center text-center">
              <ZapIcon className="w-6 h-6 text-primary mb-2"/>
              <p className="text-3xl font-black">{activeSessionsCount}</p>
              <p className="text-sm opacity-60">Live Interviews</p>
            </div>
          </div>

          <div className="card bg-base-200 border border-base-300">
            <div className="card-body items-center text-center">
              <TrophyIcon className="w-6 h-6 text-secondary mb-2"/>
              <p className="text-3xl font-black">{recentSessionsCount}</p>
              <p className="text-sm opacity-60">Completed Sessions</p>
            </div>
          </div>

          <div className="card bg-base-200 border border-base-300">
            <div className="card-body items-center text-center">
              <BarChart3Icon className="w-6 h-6 text-accent mb-2"/>
              <p className="text-3xl font-black">
                {activeSessionsCount + recentSessionsCount}
              </p>
              <p className="text-sm opacity-60">Total Activity</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PerformanceInsights;