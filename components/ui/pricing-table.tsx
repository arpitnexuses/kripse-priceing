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
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px] text-xl font-bold">Feature</TableHead>
                <TableHead className="text-xl font-bold">Free Forever</TableHead>
                <TableHead className="text-xl font-bold  w-[120px] min-w-[300px]">Evaluation</TableHead>
                <TableHead className="text-xl font-bold">Custom Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Storage (Can be upgraded to a higher storage)</TableCell>
                <TableCell>10 GB</TableCell>
                <TableCell>20 GB</TableCell>
                <TableCell>Contact Us</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Course Creation & Management (Unlimited)</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">User Creation & Management</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Group Creation & Management</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Progress Tracking & Reporting - user, Course & Assessment summary report</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Basic customization - Theme and custom colors - Branding & Logo</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Full scale assessment engine for Assessments & Quizzes</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Manage Questions & Question Pools (Create & manage)</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Communication Tools (e.g., Forums, Notification - Email & Dashboard for Courses, assessments and generic notifications- Create custom templates)</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Gamification</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dashboard Reports - Quickview</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Certificates Creation & Management</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">In-Built SCORM authoring tool / generator of SCORM files from PDF and PPT on the fly</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Custom Roles & Permissions driven by Groups</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Inbuilt Ticketing System for support (For Admins)</TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                <TableCell>
                  <img 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png" 
                    alt="checkmark" 
                    className="h-5 w-5"
                  />
                </TableCell>
                {/* <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell> */}
              </TableRow>
              
              {!showAllFeatures && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center border-b-0 py-8">
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
                    <TableCell className="font-medium">Onboarding Journey</TableCell>
                    <TableCell>Basic how to documentation</TableCell>
                    <TableCell>Basic how to documentation and stepy guide</TableCell>
                    {/* <TableCell>Basic how to documentation and stepy guide</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dedicated Support</TableCell>
                    <TableCell>Unlimited Email Support</TableCell>
                    <TableCell>Unlimited Priority Email Support, Chat Support, On Demand Phone support***</TableCell>
                    {/* <TableCell>Unlimited Priority Email Support, Chat Support, On Demand Phone support***</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI Backed Content Recommendation</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI based skill compliance matrix</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">In-Built SCORM authoring tool /generator of SCORM files from Video files on the fly</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mobile Accessibility</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Integrations</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Single Sign-On (SSO)</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Survey engine</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Full scale Assignments</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Virtual (ILT) & In-person Trainings management ( with full Attendance Management)</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Learning Path / Pathways</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    <TableCell>Optional Add-on</TableCell>
                    {/* <TableCell>Optional Add-on</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Custom add-on feature or workflow development</TableCell>
                    <TableCell>As Low as $25/hour</TableCell>
                    <TableCell>As Low as $25/hour</TableCell>
                    <TableCell>As Low as $25/hour</TableCell>
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