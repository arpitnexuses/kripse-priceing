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
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")
  const [userCount, setUserCount] = useState(100)
  const [showComparison, setShowComparison] = useState(false)

  const handleSignUp = () => {
    window.open("https://mypass-waitlist.vercel.app/", "_blank")
  }

  const handleContactUs = () => {
    window.open("https://calendly.com/onlinesales-kprise/30min", "_blank")
  }

  // Pricing tiers based on user count
  const pricingTiers = [
    { min: 21, max: 100, monthly: 140.0, yearly: 98.0, save: 504 },
    { min: 101, max: 200, monthly: 260.0, yearly: 182.0, save: 936 },
    { min: 201, max: 300, monthly: 370.0, yearly: 259.0, save: 1332 },
    { min: 301, max: 400, monthly: 480.0, yearly: 336.0, save: 1728 },
    { min: 401, max: 500, monthly: 580.0, yearly: 406.0, save: 2088 },
  ]

  // Find the current price based on user count
  const getCurrentPrice = () => {
    const tier = pricingTiers.find((tier) => userCount >= tier.min && userCount <= tier.max)
    if (!tier) return pricingTiers[0].monthly
    return billingCycle === "monthly" ? tier.monthly : tier.yearly
  }

  // Get the current tier and savings
  const getCurrentTier = () => {
    const tier = pricingTiers.find((tier) => userCount >= tier.min && userCount <= tier.max)
    return tier || pricingTiers[0]
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Equip Your Team With an
          <br />
          <span className="bg-[#742B8F]/10 text-[#742B8F] px-4 py-2 rounded inline-block mt-2">LMS That Actually Delivers Results</span>
        </h1>
        <div className="text-center text-slate-600 space-y-2 mb-8 md:mb-16 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl">Subscription plans for every team size — simple pricing, no hidden fees.</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8 md:mb-16">
          <span className={`text-lg md:text-xl font-medium ${billingCycle === "monthly" ? "text-[#742B8F]" : "text-slate-500"}`}>
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            className="data-[state=checked]:bg-[#742B8F]"
          />
          <div className="flex items-center gap-2">
            <span className={`text-lg md:text-xl font-medium ${billingCycle === "yearly" ? "text-[#742B8F]" : "text-slate-500"}`}>
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <div className="bg-gradient-to-r from-[#742B8F] to-[#8B5A96] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-white">
                <div className="flex items-center gap-1">
                  <span>-30%</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Free Forever Card */}
          <Card className="border-2 border-slate-200 rounded-xl flex flex-col">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-xl md:text-2xl text-slate-700">Free Forever</CardTitle>
              <div className="text-sm text-slate-500">
                Up to 20 users
              </div>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 flex-grow">
              <div className="flex items-baseline">
                <h3 className="text-4xl md:text-5xl font-bold text-slate-800">0$</h3>
                <span className="text-lg md:text-xl text-slate-600 ml-2">/Year</span>
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
                    <span>Upto 5 Courses or Assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image 
                      src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span>Upto 3 Groups/Branches</span>
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
              <CardTitle className="text-xl md:text-2xl text-[#742B8F]">Growth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 flex-grow">
              <div className="flex items-baseline">
                <h3 className="text-4xl md:text-5xl font-bold text-slate-800">{getCurrentPrice()}$</h3>
                <span className="text-lg md:text-xl text-slate-600 ml-2">
                  /{billingCycle === "yearly" ? "Yearly" : "Month"}
                  {billingCycle === "yearly" && (
                    <span className="text-sm text-[#742B8F] font-medium"> (Save ${getCurrentTier().save})</span>
                  )}
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-slate-500 text-left mb-[15px] mt-[-10px]">
                    Users: {getCurrentTier().min}-{getCurrentTier().max}
                  </div>
                  <Slider
                    id="user-count"
                    min={0}
                    max={4}
                    step={1}
                    value={[pricingTiers.findIndex(tier => userCount >= tier.min && userCount <= tier.max)]}
                    onValueChange={(value) => {
                      const selectedTier = pricingTiers[value[0]]
                      setUserCount(selectedTier.max)
                    }}
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
                    <span>Per user pricing: $6.67 - $1.40/user/month</span>
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
                    <span>Storage upto 100GB</span>
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
              <CardTitle className="text-xl md:text-2xl text-slate-700">Enterprise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 flex-grow">
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
                <li className="flex items-start gap-2">
                  <Image 
                    src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/mdi_tick-circle_2667d89c-7d52-445f-ac2a-b95b7754a4b0.png"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">All features of Evaluation plan included</span>
                </li>
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

      <div className="flex justify-center mt-4 mb-8 md:mb-12">
        <Button 
          onClick={() => {
            setShowComparison(true);
            setTimeout(() => {
              const pricingTable = document.querySelector('.container.mx-auto.px-4.py-2.max-w-7xl');
              if (pricingTable) {
                pricingTable.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          className="bg-[#742B8F] hover:bg-[#5a226f] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          Compare All Features
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
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
