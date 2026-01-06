import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Calculator as CalculatorIcon,
  Sun,
  Zap,
  IndianRupee,
  Leaf,
  Download,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const Calculator = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    projectType: "", // "industry" or "residence"
    monthlyBill: "",
    budget: "",
  });
  const [results, setResults] = useState<{
    systemSize: number;
    annualGeneration: number;
    estimatedCost: { min: number; max: number };
    annualSavings: number;
    paybackPeriod: number;
    co2Offset: number;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateStep1 = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.state
    ) {
      toast({
        title: "Please fill all required fields",
        description: "All contact information fields are mandatory.",
        variant: "destructive",
      });
      return false;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian mobile number.",
        variant: "destructive",
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.projectType) {
      toast({
        title: "Please select project type",
        description: "Select whether this is for Industry or Residence.",
        variant: "destructive",
      });
      return false;
    }
    if (formData.projectType === "industry" && !formData.monthlyBill) {
      toast({
        title: "Please provide project details",
        description: "Enter your monthly electricity bill.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const calculateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const monthlyBill = parseFloat(formData.monthlyBill) || 0;
      const isResidence = formData.projectType === "residence";

      // Calculate system size based on inputs
      let systemSizeKW: number;

      if (isResidence) {
        // Fixed residential system
        systemSizeKW = 3; // Standard 3kW residential system
      } else if (monthlyBill > 0) {
        // Assume ₹8 per unit, 4 peak sun hours, 30 days
        const monthlyUnits = monthlyBill / 8;
        systemSizeKW = monthlyUnits / (4 * 30);
      } else {
        systemSizeKW = 5; // Default 5kW
      }

      // Round to nearest 0.5 kW
      systemSizeKW = Math.round(systemSizeKW * 2) / 2;
      systemSizeKW = Math.max(1, Math.min(systemSizeKW, 500)); // Min 1 kW, max 500 kW

      // Annual generation (1500 kWh per kW in Eastern India)
      const annualGeneration = systemSizeKW * 1500;

      // Cost estimation (₹45,000 - ₹55,000 per kW for commercial)
      const estimatedCostMin = systemSizeKW * 45000;
      const estimatedCostMax = systemSizeKW * 55000;

      // Annual savings (₹8 per unit)
      const annualSavings = annualGeneration * 8;

      // Payback period
      const avgCost = (estimatedCostMin + estimatedCostMax) / 2;
      const paybackPeriod = avgCost / annualSavings;

      // CO2 offset (0.82 kg per kWh for India)
      const co2Offset = (annualGeneration * 0.82) / 1000;

      setResults({
        systemSize: systemSizeKW,
        annualGeneration,
        estimatedCost: { min: estimatedCostMin, max: estimatedCostMax },
        annualSavings,
        paybackPeriod,
        co2Offset,
      });

      setStep(3);
      setIsSubmitting(false);

      toast({
        title: "Quote Generated Successfully!",
        description:
          "Your personalized solar quotation is ready. Our team will contact you shortly.",
      });
    }, 1500);
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
  };

  const downloadQuote = () => {
    toast({
      title: "Quote Download",
      description:
        "Your detailed quote PDF will be sent to your email shortly.",
    });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              <CalculatorIcon className="w-4 h-4" />
              Solar Quotation Calculator
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Get Your <span className="text-primary">Free Solar Quote</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80">
              Calculate your estimated solar system size, cost, and savings in
              just a few clicks. Fill in your details to receive a personalized
              quote.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-16 md:w-24 h-1 mx-2 transition-colors ${
                        step > s ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Contact Information */}
            {step === 1 && (
              <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-medium animate-fade-in">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Please provide your details to receive your personalized solar
                  quote.
                </p>

                <form onSubmit={handleStep1Submit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ravi Kumar"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="ABC Industries Pvt Ltd"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        maxLength={10}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ravi@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Industrial Area, City, PIN"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Bihar">Bihar</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    Continue to Project Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-medium animate-fade-in">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">
                  Project Details
                </h2>
                <p className="text-muted-foreground mb-8">
                  Help us understand your energy needs to provide an accurate
                  estimate.
                </p>

                <form onSubmit={calculateQuote} className="space-y-6">
                  {/* Project Type Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="industry">Industry</option>
                      <option value="residence">Residence</option>
                    </select>
                  </div>

                  {/* Industry Fields */}
                  {formData.projectType === "industry" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="monthlyBill">
                          Monthly Electricity Bill (₹) *
                        </Label>
                        <Input
                          id="monthlyBill"
                          name="monthlyBill"
                          type="number"
                          value={formData.monthlyBill}
                          onChange={handleInputChange}
                          placeholder="50000"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Average monthly bill in rupees
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="<10L">Less than ₹10 Lakhs</option>
                          <option value="10-25L">₹10 - 25 Lakhs</option>
                          <option value="25-50L">₹25 - 50 Lakhs</option>
                          <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
                          <option value=">1Cr">More than ₹1 Crore</option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Residence Fields */}
                  {formData.projectType === "residence" && (
                    <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">Residential Solar Package</h3>
                          <p className="text-sm text-muted-foreground">Complete solar solution for your home</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        ₹53,000 <span className="text-base font-normal text-muted-foreground">+ GST</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Fixed budget package including installation, panels, inverter, and warranty.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Calculating...
                        </>
                      ) : (
                        <>
                          Calculate Quote
                          <CalculatorIcon className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Results */}
            {step === 3 && results && (
              <div className="animate-fade-in">
                <div className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-t-2xl">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">
                      Your Solar Quote is Ready!
                    </h2>
                    <p className="text-primary-foreground/80">
                      Based on your inputs, here's your personalized solar
                      system recommendation.
                    </p>
                  </div>
                </div>

                <div className="bg-card p-8 lg:p-12 rounded-b-2xl shadow-medium">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-4 bg-muted rounded-xl">
                      <Sun className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        {results.systemSize} kW
                      </div>
                      <div className="text-sm text-muted-foreground">
                        System Size
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-xl">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        {Math.round(results.annualGeneration).toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        kWh/Year
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-xl">
                      <IndianRupee className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        {formatCurrency(results.annualSavings)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Annual Savings
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-xl">
                      <Leaf className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        {results.co2Offset.toFixed(1)} T
                      </div>
                      <div className="text-sm text-muted-foreground">
                        CO₂ Offset/Year
                      </div>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="bg-muted p-6 rounded-xl mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Cost Breakdown
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Estimated System Cost
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(results.estimatedCost.min)} -{" "}
                          {formatCurrency(results.estimatedCost.max)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Expected Payback Period
                        </span>
                        <span className="font-semibold text-foreground">
                          {results.paybackPeriod.toFixed(1)} Years
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          System Warranty
                        </span>
                        <span className="font-semibold text-foreground">
                          25 Years
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Lifetime Savings (25 yrs)
                        </span>
                        <span className="font-semibold text-accent">
                          {formatCurrency(results.annualSavings * 25)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BOQ Items */}
                  <div className="bg-muted p-6 rounded-xl mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Indicative Bill of Quantities
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Solar Panels ({Math.ceil(results.systemSize / 0.54)}{" "}
                        nos. @ 540W each)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Solar Inverter ({results.systemSize} kW capacity)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Mounting Structure (Hot-dip galvanized)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        AC/DC Cables & Accessories
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Net Meter & Grid Connection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Installation & Commissioning
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={downloadQuote}
                      variant="outline"
                      size="lg"
                      className="flex-1 gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF Quote
                    </Button>
                    <Button asChild size="lg" className="flex-1 gap-2">
                      <a href="tel:+919876543210">
                        <Phone className="w-4 h-4" />
                        Call Us Now
                      </a>
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-6">
                    * This is an indicative quote. Final pricing may vary based
                    on site assessment and specific requirements.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Help with Your Quote?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our solar experts are ready to answer your questions and provide a
            detailed consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <a href="tel:+919876543210" className="gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:info@siyarenewable.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
