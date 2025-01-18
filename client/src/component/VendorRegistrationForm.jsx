import React, { useState } from 'react';
import  Button  from "../component/ui/Button";
import  {Input}  from "../component/ui/input";
import  {Label}  from "../component/ui/label";
import { Textarea } from "../component/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../component/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../component/ui/select";

const VendorRegistrationForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const serviceFactors = {
    detonator: [
      { name: 'safety', label: 'Safety Rating', type: 'number', min: 1, max: 10 },
      { name: 'sensitivity', label: 'Sensitivity Level', type: 'number', min: 1, max: 10 },
      { name: 'delayTime', label: 'Delay Time (ms)', type: 'number' },
      { name: 'compatibility', label: 'Compatibility Rating', type: 'number', min: 1, max: 10 },
      { name: 'reliability', label: 'Reliability Score', type: 'number', min: 1, max: 10 }
    ],
    draglines: [
      { name: 'bucketCapacity', label: 'Bucket Capacity (m³)', type: 'number' },
      { name: 'riskFactor', label: 'Risk Factor Rating', type: 'number', min: 1, max: 10 },
      { name: 'maxDigDepth', label: 'Maximum Dig Depth (m)', type: 'number' },
      { name: 'maxDumpHeight', label: 'Maximum Dump Height (m)', type: 'number' },
      { name: 'operationalEfficiency', label: 'Operational Efficiency (%)', type: 'number', min: 0, max: 100 }
    ],
    electricShovel: [
      { name: 'safety', label: 'Safety Rating', type: 'number', min: 1, max: 10 },
      { name: 'powerEfficiency', label: 'Power Efficiency Rating', type: 'number', min: 1, max: 10 },
      { name: 'durability', label: 'Durability Score', type: 'number', min: 1, max: 10 },
      { name: 'operationalCapacity', label: 'Operational Capacity (m³/hr)', type: 'number' },
      { name: 'mobility', label: 'Mobility Rating', type: 'number', min: 1, max: 10 }
    ],
    explosives: [
      { name: 'energyOutput', label: 'Energy Output (MJ/kg)', type: 'number' },
      { name: 'sensitivity', label: 'Sensitivity Level', type: 'number', min: 1, max: 10 },
      { name: 'stability', label: 'Stability Rating', type: 'number', min: 1, max: 10 },
      { name: 'cost', label: 'Cost per Unit (USD)', type: 'number' },
      { name: 'environmentalImpact', label: 'Environmental Impact Rating', type: 'number', min: 1, max: 10 }
    ],
    wheelDozer: [
      { name: 'enginePower', label: 'Engine Power (HP)', type: 'number' },
      { name: 'bladeCapacity', label: 'Blade Capacity (m³)', type: 'number' },
      { name: 'durability', label: 'Durability Rating', type: 'number', min: 1, max: 10 },
      { name: 'safety', label: 'Safety Rating', type: 'number', min: 1, max: 10 }
    ]
  };

  const handleServiceAdd = (value) => {
    // Ensure we are not adding the same service multiple times
    if (!selectedServices.includes(value)) {
      setSelectedServices([...selectedServices, value]);
    }
  };
  
  const handleSelectItem = (value) => {
    handleServiceAdd(value);
  };

  const handleServiceRemove = (serviceToRemove) => {
    setSelectedServices(selectedServices.filter(service => service !== serviceToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vendor Registration</CardTitle>
          <CardDescription className="text-center">
            Please fill in your company details and service specifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form  onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input id="companyName" placeholder="Enter company name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Business Registration Number *</Label>
                  <Input id="registrationNumber" placeholder="Enter registration number" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Company Address *</Label>
                <Textarea id="address" placeholder="Enter complete address" required />
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Services Offered</h3>
              
              <div className="space-y-2">
                <Label htmlFor="serviceType">Add Service</Label>
                <div className="flex gap-2">
                <Select onValueChange={(value) => handleServiceAdd(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="detonator" onSelect={(value) => handleServiceAdd(value)}>
                    Detonators
                  </SelectItem>
                  <SelectItem value="draglines" onSelect={(value) => handleServiceAdd(value)}>
                    Draglines
                  </SelectItem>
                  <SelectItem value="electricShovel" onSelect={(value) => handleServiceAdd(value)}>
                    Electric Shovels
                  </SelectItem>
                  <SelectItem value="explosives" onSelect={(value) => handleServiceAdd(value)}>
                    Explosives
                  </SelectItem>
                  <SelectItem value="wheelDozer" onSelect={(value) => handleServiceAdd(value)}>
                    Wheel Dozers
                  </SelectItem>
                </SelectContent>
              </Select>

                </div>
              </div>

              {/* Service Specific Fields */}
              {selectedServices.map((service) => (
                <Card key={service} className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold capitalize">{service.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <Button 
                      type="button"
                      variant="destructive"
                      onClick={() => handleServiceRemove(service)}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      Remove
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceFactors[service].map((factor) => (
                      <div key={factor.name} className="space-y-2">
                        <Label htmlFor={`${service}-${factor.name}`}>{factor.label}</Label>
                        <Input
                          id={`${service}-${factor.name}`}
                          type={factor.type}
                          min={factor.min}
                          max={factor.max}
                          placeholder={`Enter ${factor.label.toLowerCase()}`}
                          required
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Registration
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorRegistrationForm;
