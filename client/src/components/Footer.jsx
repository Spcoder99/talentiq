import React from "react";
import { Link } from "react-router";
import { SquareTerminalIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-primary/20 mt-20">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-4">

            <Link to="/" className="flex items-center gap-3">

              <div className="size-10 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                <SquareTerminalIcon className="size-6 text-white"/>
              </div>

              <div className="flex flex-col">
                <span className="font-black text-lg bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                  Skill IQ
                </span>
                <span className="text-xs text-base-content/60 -mt-1">
                  Code Together
                </span>
              </div>

            </Link>

            <p className="text-sm text-base-content/70 max-w-xs">
              Skill IQ helps developers conduct real-time coding interviews,
              collaborate on code, and sharpen their technical skills through
              modern interactive tools.
            </p>

          </div>


          {/* PRODUCT */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>

            <ul className="space-y-2 text-base-content/70 text-sm">

              <li>
                <Link to="/problems" className="hover:text-primary transition">
                  Practice Problems
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
              </li>

              <li>
                <a className="hover:text-primary transition cursor-pointer">
                  Live Interviews
                </a>
              </li>

              <li>
                <a className="hover:text-primary transition cursor-pointer">
                  Collaboration Tools
                </a>
              </li>

            </ul>
          </div>


          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>

            <ul className="space-y-2 text-base-content/70 text-sm">

              <li>
                <a className="hover:text-primary transition cursor-pointer">
                  Documentation
                </a>
              </li>

              <li>
                <a className="hover:text-primary transition cursor-pointer">
                  API Reference
                </a>
              </li>

              <li>
                <a className="hover:text-primary transition cursor-pointer">
                  Developer Blog
                </a>
              </li>

              <li>
                <a className="hover:text-primary transition cursor-pointer">
                  Community
                </a>
              </li>

            </ul>
          </div>


          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            <div className="flex items-center gap-3">

              <a className="p-2 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition">
                <GithubIcon className="size-5"/>
              </a>

              <a className="p-2 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition">
                <TwitterIcon className="size-5"/>
              </a>

              <a className="p-2 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition">
                <LinkedinIcon className="size-5"/>
              </a>

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="border-t border-base-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-base-content/60">

          <p>© {new Date().getFullYear()} Skill IQ. All rights reserved.</p>

          <div className="flex gap-4">

            <a className="hover:text-primary transition cursor-pointer">
              Privacy Policy
            </a>

            <a className="hover:text-primary transition cursor-pointer">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;