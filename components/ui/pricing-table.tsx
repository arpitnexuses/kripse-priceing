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
    window.location.href = "https://kprise.mypasslms.us/login#register";
  };

  return (
    <div className="container mx-auto px-4 py-2 max-w-7xl">
      <div className="mt-16">
        <h2 className="text-4xl text-center text-slate-800 mb-[70px]">
          <span className="font-normal">Compare</span>{" "}
          <span className="font-bold">Plans And Features</span>
        </h2>

        <div className="w-full overflow-x-auto rounded-xl border-2 border-[#742B8F]">
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
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Storage (Can be upgraded to a higher storage)
                </TableCell>
                <TableCell className="text-center px-12 py-6 font-semibold text-lg">
                  10 GB
                </TableCell>
                <TableCell className="text-center px-12 py-6 font-semibold text-lg">
                  20 GB
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Course Creation & Management (Unlimited)
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  User Creation & Management
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Group Creation & Management
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Progress Tracking & Reporting - user, Course & Assessment
                  summary report
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Basic customization - Theme and custom colors - Branding &
                  Logo
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Full scale assessment engine for Assessments & Quizzes
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Manage Questions & Question Pools (Create & manage)
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Communication Tools (e.g., Forums, Notification - Email &
                  Dashboard for Courses, assessments and generic notifications-
                  Create custom templates)
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Gamification
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Dashboard Reports - Quickview
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Certificates Creation & Management
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  In-Built SCORM authoring tool / generator of SCORM files from
                  PDF and PPT on the fly
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Custom Roles & Permissions driven by Groups
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Inbuilt Ticketing System for support (For Admins)
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Smart Data Retention Mode (For seasonal or infrequent LMS
                  users, we offer a 50% discounted data retention plan. Keep all
                  your data secure during inactive months without needing to
                  rebuild when you return—perfect for occasional use)
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-12 py-6">
                  <img
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="checkmark"
                    className="h-6 w-6 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Onboarding Journey
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Basic how to documentation
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Basic how to documentation and stepy guide
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Dedicated Support
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Unlimited Email Support
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Unlimited Priority Email Support, Chat Support, On Demand
                  Phone support***
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  AI Backed Content Recommendation
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  AI based skill compliance matrix
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  In-Built SCORM authoring tool /generator of SCORM files from
                  Video files on the fly
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Mobile Accessibility
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Integrations
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Single Sign-On (SSO)
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Survey engine
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Full scale Assignments
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-lg text-left px-12 py-6">
                  Virtual (ILT) & In-person Trainings management (with full
                  Attendance Management)
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Learning Path / Pathways
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-medium">
                  Optional Add-on
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-left text-lg px-12 py-6">
                  Custom add-on feature or workflow development
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-semibold text-[#742B8F]">
                  As Low as $25/Hour
                </TableCell>
                <TableCell className="text-center text-lg px-12 py-6 font-semibold text-[#742B8F]">
                  As Low as $25/Hour
                </TableCell>
              </TableRow>
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
