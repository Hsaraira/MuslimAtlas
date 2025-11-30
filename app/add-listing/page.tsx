"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CATEGORIES, CATEGORY_TAGS } from "@/lib/constants"
import { ListingCategory } from "@/lib/types"
import { CheckCircle } from "lucide-react"

const STEPS = [
  "Basic Info",
  "Location",
  "Ownership & Halal",
  "Contact & Links",
  "Review"
]

export default function AddListingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Basic Info
    category: "" as ListingCategory | "",
    name: "",
    description: "",

    // Location
    isOnline: false,
    addressLine1: "",
    addressLine2: "",
    city: "",
    stateRegion: "",
    country: "",
    websiteUrl: "",

    // Ownership & Halal
    isMuslimOwned: "",
    halalStatus: "",
    muslimFocus: "",

    // Contact
    phone: "",
    email: "",
    whatsapp: "",
    instagram: "",

    // Tags
    tags: [] as string[]
  })

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! Your listing has been submitted for review.")
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Add Your Listing
          </h1>
          <p className="text-lg text-stone-600">
            Share your masjid, halal business, or online service with the Ummah
          </p>
          <p className="text-sm text-stone-500 mt-2">
            Takes about 2-3 minutes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) => (
              <div
                key={step}
                className={`flex-1 ${index !== 0 ? "ml-2" : ""}`}
              >
                <div className="flex items-center">
                  {index !== 0 && (
                    <div
                      className={`flex-1 h-1 ${
                        index <= currentStep ? "bg-green-700" : "bg-stone-200"
                      }`}
                    />
                  )}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      index <= currentStep
                        ? "bg-green-700 text-white"
                        : "bg-stone-200 text-stone-600"
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle size={20} />
                    ) : (
                      index + 1
                    )}
                  </div>
                </div>
                <p className="hidden md:block text-xs text-stone-600 mt-1 text-center">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-stone-900">
              {STEPS[currentStep]}
            </h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Info */}
              {currentStep === 0 && (
                <div className="space-y-4">
                  <Select
                    label="Type of Listing *"
                    options={[
                      { value: "", label: "Select a category" },
                      ...CATEGORIES.map((cat) => ({
                        value: cat.value,
                        label: cat.label
                      }))
                    ]}
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as ListingCategory })
                    }
                    required
                  />
                  <Input
                    label="Name of Business/Masjid *"
                    placeholder="e.g., Dar Al-Hijrah Islamic Center"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Textarea
                    label="Short Description *"
                    placeholder="Tell us about your place in 2-3 sentences"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={4}
                    required
                  />
                </div>
              )}

              {/* Step 2: Location */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locationType"
                        checked={!formData.isOnline}
                        onChange={() => setFormData({ ...formData, isOnline: false })}
                        className="mr-2"
                      />
                      <span className="text-stone-700">Physical Location</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locationType"
                        checked={formData.isOnline}
                        onChange={() => setFormData({ ...formData, isOnline: true })}
                        className="mr-2"
                      />
                      <span className="text-stone-700">Online Only</span>
                    </label>
                  </div>

                  {!formData.isOnline ? (
                    <>
                      <Input
                        label="Address Line 1 *"
                        placeholder="Street address"
                        value={formData.addressLine1}
                        onChange={(e) =>
                          setFormData({ ...formData, addressLine1: e.target.value })
                        }
                        required
                      />
                      <Input
                        label="Address Line 2"
                        placeholder="Apartment, suite, etc. (optional)"
                        value={formData.addressLine2}
                        onChange={(e) =>
                          setFormData({ ...formData, addressLine2: e.target.value })
                        }
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="City *"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          required
                        />
                        <Input
                          label="State/Region"
                          placeholder="State or region"
                          value={formData.stateRegion}
                          onChange={(e) =>
                            setFormData({ ...formData, stateRegion: e.target.value })
                          }
                        />
                      </div>
                      <Input
                        label="Country *"
                        placeholder="Country"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        required
                      />
                    </>
                  ) : (
                    <Input
                      label="Website URL *"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, websiteUrl: e.target.value })
                      }
                      required
                    />
                  )}
                </div>
              )}

              {/* Step 3: Ownership & Halal */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">
                      Is your business Muslim-owned? *
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                        { value: "prefer-not-say", label: "Prefer not to say" }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="isMuslimOwned"
                            value={option.value}
                            checked={formData.isMuslimOwned === option.value}
                            onChange={(e) =>
                              setFormData({ ...formData, isMuslimOwned: e.target.value })
                            }
                            className="mr-2"
                            required
                          />
                          <span className="text-stone-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">
                      Do you offer halal food/products/services? *
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: "fully", label: "Fully Halal" },
                        { value: "partially", label: "Partially Halal" },
                        { value: "no", label: "No" },
                        { value: "na", label: "Not Applicable" }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="halalStatus"
                            value={option.value}
                            checked={formData.halalStatus === option.value}
                            onChange={(e) =>
                              setFormData({ ...formData, halalStatus: e.target.value })
                            }
                            className="mr-2"
                            required
                          />
                          <span className="text-stone-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">
                      Is your business designed for or primarily serving Muslims? *
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="muslimFocus"
                            value={option.value}
                            checked={formData.muslimFocus === option.value}
                            onChange={(e) =>
                              setFormData({ ...formData, muslimFocus: e.target.value })
                            }
                            className="mr-2"
                            required
                          />
                          <span className="text-stone-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Links */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <Input
                    label="Website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.websiteUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, websiteUrl: e.target.value })
                    }
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="contact@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Input
                    label="WhatsApp Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                  />
                  <Input
                    label="Instagram Handle"
                    placeholder="@yourbusiness"
                    value={formData.instagram}
                    onChange={(e) =>
                      setFormData({ ...formData, instagram: e.target.value })
                    }
                  />
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-stone-50 rounded-lg p-6">
                    <h3 className="font-semibold text-stone-900 mb-4">
                      Review Your Listing
                    </h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm text-stone-600">Category</dt>
                        <dd className="font-medium text-stone-900">
                          {CATEGORIES.find(c => c.value === formData.category)?.label || "Not selected"}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-stone-600">Name</dt>
                        <dd className="font-medium text-stone-900">{formData.name || "Not provided"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-stone-600">Location</dt>
                        <dd className="font-medium text-stone-900">
                          {formData.isOnline ? "Online Only" : `${formData.city}, ${formData.country}` || "Not provided"}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="confirm"
                      required
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="confirm" className="text-sm text-stone-700">
                      I confirm the information I provided is accurate to the best of my knowledge.
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-stone-200">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                {currentStep < STEPS.length - 1 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">
                    Submit for Review
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Confirmation Message */}
        <div className="mt-6 text-center text-sm text-stone-600">
          <p>
            We'll review your listing before it goes live so Muslim Atlas stays clean and beneficial.
          </p>
        </div>
      </div>
    </div>
  )
}
