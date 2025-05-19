"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import LogoSection from "@/components/ui/logo-section"
import PricingTable from "@/components/ui/pricing-table"
import Image from "next/image"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [userCount, setUserCount] = useState(30)
  const [showComparison, setShowComparison] = useState(false)

  const handleSignUp = () => {
    window.location.href = "https://kprise.mypasslms.us/login#register"
  }

  const handleContactUs = () => {
    window.location.href = "https://kprise.com/contact-us-new/"
  }

  // Pricing tiers based on user count
  const pricingTiers = [
    { min: 21, max: 40, monthly: 119.0, yearly: 95.2 },
    { min: 41, max: 60, monthly: 149.0, yearly: 119.2 },
    { min: 61, max: 80, monthly: 169.0, yearly: 135.2 },
    { min: 81, max: 100, monthly: 189.0, yearly: 151.2 },
    { min: 101, max: 120, monthly: 209.0, yearly: 167.2 },
    { min: 121, max: 140, monthly: 229.0, yearly: 183.2 },
    { min: 141, max: 160, monthly: 249.0, yearly: 199.2 },
    { min: 161, max: 180, monthly: 269.0, yearly: 215.2 },
    { min: 181, max: 200, monthly: 289.0, yearly: 231.2 },
    { min: 201, max: 220, monthly: 309.0, yearly: 247.2 },
    { min: 221, max: 240, monthly: 329.0, yearly: 263.2 },
    { min: 241, max: 260, monthly: 359.0, yearly: 287.2 },
    { min: 261, max: 280, monthly: 379.0, yearly: 303.2 },
    { min: 281, max: 300, monthly: 399.0, yearly: 319.2 },
    { min: 301, max: 320, monthly: 419.0, yearly: 335.2 },
    { min: 321, max: 340, monthly: 439.0, yearly: 351.2 },
    { min: 341, max: 360, monthly: 459.0, yearly: 367.2 },
    { min: 361, max: 380, monthly: 479.0, yearly: 383.2 },
    { min: 381, max: 400, monthly: 499.0, yearly: 399.2 },
    { min: 401, max: 420, monthly: 519.0, yearly: 415.2 },
    { min: 421, max: 440, monthly: 539.0, yearly: 431.2 },
    { min: 441, max: 460, monthly: 559.0, yearly: 447.2 },
    { min: 461, max: 480, monthly: 579.0, yearly: 463.2 },
    { min: 481, max: 500, monthly: 599.0, yearly: 479.2 },
  ]

  // Find the current price based on user count
  const getCurrentPrice = () => {
    const tier = pricingTiers.find((tier) => userCount >= tier.min && userCount <= tier.max)
    if (!tier) return pricingTiers[0].monthly
    return billingCycle === "monthly" ? tier.monthly : tier.yearly
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-5xl font-bold text-center text-slate-800 mb-4">Flexible Plans That Grow With You</h1>
        <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">
          From startups to enterprises — choose the right plan, no hidden fees, no surprises.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-xl font-medium ${billingCycle === "monthly" ? "text-[#742B8F]" : "text-slate-500"}`}>
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            className="data-[state=checked]:bg-[#742B8F]"
          />
          <span className={`text-xl font-medium ${billingCycle === "yearly" ? "text-[#742B8F]" : "text-slate-500"}`}>
            Yearly
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Forever Card */}
          <Card className="border-2 border-slate-200 rounded-xl flex flex-col">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-2xl text-slate-700">Free Forever</CardTitle>
              <div className="text-sm text-slate-500">
                Up to 20 users
              </div>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              <div className="flex items-baseline">
                <h3 className="text-5xl font-bold text-slate-800">0$</h3>
                <span className="text-xl text-slate-600 ml-2">/Month</span>
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Upto 20 users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Free for life time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Storage upto 10GB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Unlimited Email Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>All features included, no restriction</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                className="w-full bg-white hover:bg-slate-100 text-[#742B8F] border-2 border-[#742B8F]"
                onClick={handleSignUp}
              >
                Sign Up For Free
              </Button>
            </CardFooter>
          </Card>

          {/* Evaluation Card */}
          <Card className="border-2 border-[#742B8F] rounded-xl flex flex-col">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-2xl text-[#742B8F]">Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow]">
              {billingCycle === "yearly" && (
                <div className="text-sm text-[#742B8F] text-left font-medium -mt-2 mb-1 bg-purple-50 px-3 py-1.5 rounded-md">
                  Price applies when paid annually in a single payment
                </div>
              )}
              <div className="flex items-baseline">
                <h3 className="text-5xl font-bold text-slate-800">{getCurrentPrice()}$</h3>
                <span className="text-xl text-slate-600 ml-2">/Month</span>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-slate-500 text-left mb-[15px] mt-[-10px]">
                    Users: {userCount}
                  </div>
                  <Slider
                    id="user-count"
                    min={21}
                    max={500}
                    step={1}
                    value={[userCount]}
                    onValueChange={(value) => setUserCount(value[0])}
                    className="w-full text-[#742B8F]"
                  />
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Upto 500 users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span className="leading-relaxed">Free access for 3 months and extendable upto 6 months with verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Storage upto 20GB</span>
                  </li>
                  {/* <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Vector_(1)_e3f241be-e21f-4879-812a-0805e8358819.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Unlimited Priority Email Support, Chat, Phone support</span>
                  </li> */}
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>All features included, no restriction</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                className="w-full bg-[#742B8F] hover:bg-[#5a226f] text-white"
                onClick={handleSignUp}
              >
                Sign Up For Free
              </Button>
            </CardFooter>
          </Card>

          {/* Custom Enterprise Card */}
          <Card className="border-2 border-slate-200 rounded-xl flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-700">Custom Enterprise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">Above 500 starting as low as $0.50/User/Month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">Perfect for large organizations or agencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">Unlimited Users Included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">Unlimited storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">Priority customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">Smart AI Engine</span>
                </li>

                {/* Highlighted Smart Data Retention Mode Section */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                  <div className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-purple-800">Smart Data Retention Mode</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        For seasonal or infrequent LMS users, we offer a 50% discounted data retention plan. Keep all your data secure during inactive months without needing to rebuild when you return—perfect for occasional use.
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                className="w-full bg-white hover:bg-slate-100 text-slate-700 border-2 border-slate-300"
                onClick={handleContactUs}
              >
                Talk To Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-12">
        <Button 
          onClick={() => {
            setShowComparison(true);
            setTimeout(() => {
              const pricingTable = document.querySelector('.mt-16');
              if (pricingTable) {
                pricingTable.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="bg-[#742B8F] hover:bg-[#5a226f] text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          Compare All Features
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </Button>
      </div>

      <LogoSection />
      
      {showComparison && <PricingTable />}
    </>
  )
}
