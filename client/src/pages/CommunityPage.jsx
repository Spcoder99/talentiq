import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  UsersIcon,
  MessageCircleIcon,
  CrownIcon,
  TrophyIcon,
  FlameIcon,
  VideoIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "lucide-react";

function CommunityPage() {

  const discussions = [
    { title: "Best approach for Two Sum interview question?", replies: 24 },
    { title: "How to crack FAANG coding interviews in 3 months?", replies: 18 },
    { title: "System Design vs DSA for interviews?", replies: 12 },
  ];

  const contributors = [
    { name: "Aman Verma", points: 142 },
    { name: "Priya Sharma", points: 128 },
    { name: "Rahul Dev", points: 110 },
  ];

  return (
    <div className="min-h-screen bg-base-300">

      <Navbar />

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex items-center gap-4 mb-4">

            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-4xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skill IQ Community
            </h1>

          </div>

          <p className="text-base-content/70 max-w-xl ml-14">
            Connect with developers, discuss interview questions, collaborate in
            coding sessions and grow together.
          </p>

        </div>
      </div>


      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* TRENDING DISCUSSIONS */}
          <div className="lg:col-span-2 card bg-base-100 border-2 border-primary/20 hover:border-primary/30">

            <div className="card-body">

              <div className="flex items-center gap-3 mb-6">

                <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <FlameIcon className="w-5 h-5 text-white" />
                </div>

                <h2 className="text-xl font-black">
                  Trending Discussions
                </h2>

              </div>

              <div className="space-y-3">

                {discussions?.map((d, i) => (

                  <div
                    key={i}
                    className="p-4 rounded-xl border border-base-300 hover:border-primary transition flex justify-between items-center bg-base-200"
                  >

                    <p className="font-medium">{d?.title}</p>

                    <div className="flex items-center gap-2 text-sm opacity-70">
                      <MessageCircleIcon className="w-4 h-4" />
                      {d?.replies}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* TOP CONTRIBUTORS */}
          <div className="card bg-base-100 border-2 border-secondary/20 hover:border-secondary/40">

            <div className="card-body">

              <div className="flex items-center gap-3 mb-6">

                <div className="p-2 rounded-xl bg-gradient-to-br from-secondary to-accent">
                  <CrownIcon className="w-5 h-5 text-white" />
                </div>

                <h2 className="text-xl font-black">
                  Top Contributors
                </h2>

              </div>

              <div className="space-y-3">

                {contributors?.map((user, i) => (

                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-base-200 border border-base-300"
                  >

                    <span className="font-medium">{user.name}</span>

                    <span className="badge badge-primary">
                      {user.points} pts
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>



        {/* COMMUNITY ROOMS */}
        <div className="card bg-base-100 border-2 border-primary/20 hover:border-primary/30">

          <div className="card-body">

            <div className="flex items-center gap-3 mb-6">

              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary">
                <VideoIcon className="w-5 h-5 text-white" />
              </div>

              <h2 className="text-xl font-black">
                Community Practice Rooms
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="flex items-center justify-between p-4 rounded-xl border border-base-300 bg-base-200">

                <div className="flex items-center gap-3">
                  <UsersIcon className="w-5 h-5" />
                  <span>Mock Interview Room</span>
                </div>

                <button className="btn btn-primary btn-sm gap-2">
                  Join
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

              </div>


              <div className="flex items-center justify-between p-4 rounded-xl border border-base-300 bg-base-200">

                <div className="flex items-center gap-3">
                  <UsersIcon className="w-5 h-5" />
                  <span>DSA Discussion Room</span>
                </div>

                <button className="btn btn-primary btn-sm gap-2">
                  Join
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>

        </div>



        {/* LEADERBOARD */}
        <div className="card bg-base-100 border-2 border-accent/20 hover:border-accent/40">

          <div className="card-body">

            <div className="flex items-center gap-3 mb-6">

              <div className="p-2 rounded-xl bg-gradient-to-br from-accent to-secondary">
                <TrophyIcon className="w-5 h-5 text-white" />
              </div>

              <h2 className="text-xl font-black">
                Community Leaderboard
              </h2>

            </div>

            <progress
              className="progress progress-primary w-full"
              value="75"
              max="100"
            />

            <p className="text-sm opacity-70 mt-3">
              Earn points by solving problems, helping others and participating in interviews.
            </p>

          </div>

        </div>



        {/* CTA */}
        <div className="card bg-gradient-to-r from-primary/10 via-primary/30 to-secondary/50 text-white">

          <div className="card-body text-center py-12">

            <SparklesIcon className="w-8 h-8 mx-auto mb-4" />

            <h2 className="text-3xl font-black mb-2">
              Be Part of the Skill IQ Community
            </h2>

            <p className="opacity-90 mb-6">
              Discuss coding problems, practice mock interviews and grow with thousands of developers.
            </p>

            <button className="btn btn-dash btn-soft gap-2 mx-auto">
              Start a Discussion
            </button>

          </div>

        </div>


      </div>

      <Footer />

    </div>
  );
}

export default CommunityPage;