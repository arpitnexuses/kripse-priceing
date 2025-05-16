import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingTable() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div className="container mx-auto px-2 py-2 max-w-6xl">
      <div className="mt-16">
        <h2 className="text-4xl text-center text-slate-800 mb-[70px]">
          <span className="font-normal">Compare</span>{" "}
          <span className="font-bold">Plans And Features</span>
        </h2>
        
        <div className="w-full overflow-x-auto">
          <Table className="w-full min-w-[1000px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[500px] text-xl font-bold text-black text-left px-6 py-4">Feature</TableHead>
                <TableHead className="text-xl font-bold text-black text-center px-6 py-4">Free Forever</TableHead>
                <TableHead className="text-xl font-bold w-[300px] min-w-[180px] text-black text-center px-6 py-4">Evaluation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Storage (Can be upgraded to a higher storage)</TableCell>
                <TableCell className="text-center px-6 py-4">10 GB</TableCell>
                <TableCell className="text-center px-6 py-4">20 GB</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Course Creation & Management (Unlimited)</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">User Creation & Management</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Group Creation & Management</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Progress Tracking & Reporting - user, Course & Assessment summary report</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Basic customization - Theme and custom colors - Branding & Logo</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Full scale assessment engine for Assessments & Quizzes</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Manage Questions & Question Pools (Create & manage)</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Communication Tools (e.g., Forums, Notification - Email & Dashboard for Courses, assessments and generic notifications- Create custom templates)</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Gamification</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Dashboard Reports - Quickview</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Certificates Creation & Management</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">In-Built SCORM authoring tool / generator of SCORM files from PDF and PPT on the fly</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Custom Roles & Permissions driven by Groups</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left px-6 py-4">Inbuilt Ticketing System for support (For Admins)</TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
              
              {!showAllFeatures && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center border-b-0 py-8">
                    <Button
                      variant="outline"
                      onClick={() => setShowAllFeatures(!showAllFeatures)}
                      className="mx-auto flex items-center gap-2 px-6 py-2 text-[#742B8F] border-[#742B8F] hover:bg-[#742B8F] hover:text-white transition-all duration-300 rounded-full text-base font-medium shadow-sm hover:shadow-md"
                    >
                      Show More Features
                      <ChevronDown className="h-5 w-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              )}
              {showAllFeatures && (
                <>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Onboarding Journey</TableCell>
                    <TableCell className="text-center px-6 py-4">Basic how to documentation</TableCell>
                    <TableCell className="text-center px-6 py-4">Basic how to documentation and stepy guide</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Dedicated Support</TableCell>
                    <TableCell className="text-center px-6 py-4">Unlimited Email Support</TableCell>
                    <TableCell className="text-center px-6 py-4">Unlimited Priority Email Support, Chat Support, On Demand Phone support***</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">AI Backed Content Recommendation</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">AI based skill compliance matrix</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">In-Built SCORM authoring tool /generator of SCORM files from Video files on the fly</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Mobile Accessibility</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Integrations</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Single Sign-On (SSO)</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Survey engine</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Full scale Assignments</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Virtual (ILT) & In-person Trainings management ( with full Attendance Management)</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Learning Path / Pathways</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                    <TableCell className="text-center px-6 py-4">Optional Add-on</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-left px-6 py-4">Custom add-on feature or workflow development</TableCell>
                    <TableCell className="text-center px-6 py-4">As Low as $25/hour</TableCell>
                    <TableCell className="text-center px-6 py-4">As Low as $25/hour</TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
} 