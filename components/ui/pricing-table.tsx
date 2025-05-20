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
    window.open("https://kprise.mypasslms.us/login#register", "_blank")
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
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-300 p-4 shadow-sm">
              <h3 className="font-medium text-sm mb-1">{feature.name}</h3>
              {feature.description && (
                <p className="text-xs text-slate-600 mb-3">{feature.description}</p>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-xs font-semibold mb-2">Free Forever</p>
                  {typeof feature.free === 'boolean' ? (
                    <img
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="checkmark"
                      className="h-4 w-4 mx-auto"
                    />
                  ) : (
                    <p className="text-sm font-semibold">{feature.free}</p>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold mb-2">Evaluation</p>
                  {typeof feature.evaluation === 'boolean' ? (
                    <img
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="checkmark"
                      className="h-4 w-4 mx-auto"
                    />
                  ) : (
                    <p className="text-sm font-semibold">{feature.evaluation}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button
              onClick={handleSignUp}
              className="w-full bg-[#742B8F] hover:bg-[#5a226f] text-white py-2 text-xs font-medium"
            >
              Sign Up For Free
            </Button>
            <Button
              onClick={handleSignUp}
              className="w-full bg-[#742B8F] hover:bg-[#5a226f] text-white py-2 text-xs font-medium"
            >
              Sign Up For Free
            </Button>
          </div>
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
