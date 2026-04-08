import React from "react";
import { fraunces } from "../Shared/Font";

export default function Experience() {
  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="space-y-4">
          <h2 className="uppercase text-sm text-secondary font-medium">
            Where I've Worked
          </h2>
          <h1 className={`${fraunces.className} text-4xl font-semibold`}>
            Experience
          </h1>
          <p className="text-base text-secondary font-medium">
            I build full-stack web applications, focusing on performance,
            scalability, and clean user experiences.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <div className="grid grid-cols-[25%_75%] p-10 bg-white rounded-md border border-gray-100">
            <div>
              <h1>Anthropic</h1>
              <h5>Contract · 3 Months</h5>
            </div>
            <div>
              <h1>Developer Advocate</h1>
              <p>
                Built real apps showcasing Claude Code use cases. Demonstrated
                how to use Artifacts for live code output and helped developers
                understand AI features through practical demos and engaging
                content.Built real apps showcasing Claude Code use cases.
                Demonstrated how to use Artifacts for live code output and
                helped developers understand AI features through practical demos
                and engaging content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
