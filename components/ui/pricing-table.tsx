import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function PricingTable() {
  const handleSignUp = () => {
    window.open("https://mypass-waitlist.vercel.app/", "_blank")
  };

  const features = [
    {
      name: "Storage",
      description: "Can be upgraded to a higher storage",
      free: "10 GB",
      evaluation: "20 GB"
    },
    {
      name: "Course Creation & Management",
      description: "Unlimited",
      free: true,
      evaluation: true
    },
    {
      name: "User Creation & Management",
      free: true,
      evaluation: true
    },
    {
      name: "Group Creation & Management",
      free: true,
      evaluation: true
    },
    {
      name: "Progress Tracking & Reporting",
      description: "User, Course & Assessment summary report",
      free: true,
      evaluation: true
    },
    {
      name: "Basic customization",
      description: "Theme and custom colors - Branding & Logo",
      free: true,
      evaluation: true
    },
    {
      name: "Full scale assessment engine",
      description: "Assessments & Quizzes",
      free: true,
      evaluation: true
    },
    {
      name: "Manage Questions & Question Pools",
      description: "Create & manage",
      free: true,
      evaluation: true
    },
    {
      name: "Communication Tools",
      description: "Forums, Notification - Email & Dashboard for Courses, assessments and generic notifications- Create custom templates",
      free: true,
      evaluation: true
    },
    {
      name: "Gamification",
      free: true,
      evaluation: true
    },
    {
      name: "Dashboard Reports",
      description: "Quickview",
      free: true,
      evaluation: true
    },
    {
      name: "Certificates Creation & Management",
      free: true,
      evaluation: true
    },
    {
      name: "In-Built SCORM authoring tool",
      description: "Generator of SCORM files from PDF and PPT on the fly",
      free: true,
      evaluation: true
    },
    {
      name: "Custom Roles & Permissions",
      description: "Driven by Groups",
      free: true,
      evaluation: true
    },
    {
      name: "Onboarding Journey",
      description: "Basic how to documentation",
      free: "Basic how to documentation",
      evaluation: "Basic how to documentation and steppy guide"
    },
    {
      name: "Dedicated Support",
      description: "Support options",
      free: "Unlimited Email Support",
      evaluation: "Unlimited Priority Email Support, Chat Support, On Demand Phone support***"
    },
    {
      name: "AI Backed Content Recommendation",
      description: "System Courses and external courses",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "AI based skill compliance matrix",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "In-Built SCORM authoring tool",
      description: "Generator of SCORM files from Video Files on the fly",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Mobile Accessibility",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Integrations",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Single Sign-On (SSO)",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Survey engine",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Full scale Assignments",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Virtual (ILT) & In-person Trainings management",
      description: "With full Attendance Management",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Learning Path / Pathways",
      free: "Optional Add-on",
      evaluation: "Optional Add-on"
    },
    {
      name: "Custom add-on feature or workflow development",
      free: "As Low as $25/Hour",
      evaluation: "As Low as $25/Hour"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-2 max-w-7xl">
      <div className="mt-8 md:mt-16">
        <h2 className="text-xl md:text-4xl text-center text-slate-800 mb-6 md:mb-[70px]">
          <span className="font-normal">Compare</span>{" "}
          <span className="font-bold">Plans And Features</span>
        </h2>

        {/* Mobile View */}
        <div className="md:hidden w-full overflow-x-auto rounded-xl border-2 border-[#742B8F]">
          <Table className="w-full min-w-[600px]">
            <TableHeader className="bg-slate-50">
              <TableRow className="border-b-2 border-[#742B8F]">
                <TableHead className="w-[300px] text-lg font-bold text-black text-left px-4 py-4">
                  Features
                </TableHead>
                <TableHead className="text-lg font-bold text-black text-center px-4 py-4">
                  Free Forever
                </TableHead>
                <TableHead className="text-lg font-bold text-black text-center px-4 py-4">
                  Evaluation
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-sm text-left px-4 py-4">
                    {feature.name}
                    {feature.description && (
                      <p className="text-xs text-slate-600 mt-1">{feature.description}</p>
                    )}
                  </TableCell>
                  <TableCell className="text-center px-4 py-4">
                    {typeof feature.free === 'boolean' ? (
                      <img
                        src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                        alt="checkmark"
                        className="h-5 w-5 mx-auto"
                      />
                    ) : (
                      <span className="font-semibold text-sm">{feature.free}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center px-4 py-4">
                    {typeof feature.evaluation === 'boolean' ? (
                      <img
                        src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                        alt="checkmark"
                        className="h-5 w-5 mx-auto"
                      />
                    ) : (
                      <span className="font-semibold text-sm">{feature.evaluation}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="px-4 py-4"></TableCell>
                <TableCell className="px-4 py-4 text-center">
                  <Button
                    onClick={handleSignUp}
                    className="w-full bg-[#742B8F] hover:bg-[#5a226f] text-white py-2 text-sm font-medium"
                  >
                    Sign Up For Free
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-4 text-center">
                  <Button
                    onClick={handleSignUp}
                    className="w-full bg-[#742B8F] hover:bg-[#5a226f] text-white py-2 text-sm font-medium"
                  >
                    Sign Up For Free
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block w-full overflow-x-auto rounded-xl border-2 border-[#742B8F]">
          <Table className="w-full min-w-[1000px]">
            <TableHeader className="bg-slate-50">
              <TableRow className="border-b-2 border-[#742B8F]">
                <TableHead className="w-[500px] text-2xl font-bold text-black text-left px-12 py-6">
                  Features
                </TableHead>
                <TableHead className="text-2xl font-bold text-black text-center px-12 py-6">
                  Free Forever
                </TableHead>
                <TableHead className="text-2xl font-bold w-[300px] min-w-[180px] text-black text-center px-12 py-6">
                  Evaluation
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-lg text-left px-12 py-6">
                    {feature.name}
                    {feature.description && (
                      <p className="text-sm text-slate-600 mt-1">{feature.description}</p>
                    )}
                  </TableCell>
                  <TableCell className="text-center px-12 py-6">
                    {typeof feature.free === 'boolean' ? (
                      <img
                        src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                        alt="checkmark"
                        className="h-6 w-6 mx-auto"
                      />
                    ) : (
                      <span className="font-semibold text-lg">{feature.free}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center px-12 py-6">
                    {typeof feature.evaluation === 'boolean' ? (
                      <img
                        src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                        alt="checkmark"
                        className="h-6 w-6 mx-auto"
                      />
                    ) : (
                      <span className="font-semibold text-lg">{feature.evaluation}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="px-12 py-6"></TableCell>
                <TableCell className="px-12 py-6 text-center">
                  <Button
                    onClick={handleSignUp}
                    className="w-[200px] bg-[#742B8F] hover:bg-[#5a226f] text-white py-4 text-base font-medium"
                  >
                    Sign Up For Free
                  </Button>
                </TableCell>
                <TableCell className="px-12 py-6 text-center">
                  <Button
                    onClick={handleSignUp}
                    className="w-[200px] bg-[#742B8F] hover:bg-[#5a226f] text-white py-4 text-base font-medium"
                  >
                    Sign Up For Free
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
