"use client"

import { useEffect, useRef } from "react"

interface HubSpotFormProps {
  portalId: string
  formId: string
  region?: string
}

export function HubSpotForm({ portalId, formId, region = "na1" }: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    script.onload = () => {
      // @ts-ignore - HubSpot global object
      if (window.hbspt && formRef.current) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#hubspot-form-${formId}`,
          onFormReady: () => {
            // Apply custom styling after form loads
            applyCustomStyling()
          },
        })
      }
    }

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [portalId, formId, region])

  const applyCustomStyling = () => {
    // Add custom CSS for HubSpot form
    const style = document.createElement("style")
    style.textContent = `
      .hs-form-frame {
        font-family: 'Inter', sans-serif !important;
      }

      .hs-form input[type="text"],
      .hs-form input[type="email"],
      .hs-form input[type="tel"],
      .hs-form textarea,
      .hs-form select {
        background-color: var(--background) !important;
        border: 1px solid var(--border) !important;
        color: var(--foreground) !important;
        border-radius: 8px !important;
        padding: 12px 16px !important;
        font-size: 16px !important;
        transition: all 0.3s ease !important;
        width: 100% !important;
      }

      .hs-form input:focus,
      .hs-form textarea:focus,
      .hs-form select:focus {
        border-color: var(--primary) !important;
        outline: none !important;
        box-shadow: 0 0 0 3px rgba(11, 203, 191, 0.15) !important;
      }

      .hs-form label {
        color: var(--foreground) !important;
        opacity: 0.8 !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        margin-bottom: 8px !important;
        display: block !important;
      }

      .hs-button {
        background-color: var(--primary) !important;
        color: var(--primary-foreground) !important;
        border: none !important;
        border-radius: 8px !important;
        padding: 14px 32px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 8px 24px -6px rgba(11, 203, 191, 0.35) !important;
        width: 100% !important;
      }

      .hs-button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 12px 32px -6px rgba(11, 203, 191, 0.45) !important;
      }

      .hs-error-msg {
        color: var(--destructive) !important;
        font-size: 13px !important;
        margin-top: 4px !important;
      }

      .hs-form-required {
        color: var(--primary) !important;
      }

      .hs-form fieldset {
        max-width: 100% !important;
      }

      .hs-form .hs-input {
        width: 100% !important;
      }

      .hs-form .hs-field-desc {
        color: var(--muted-foreground) !important;
        font-size: 13px !important;
      }

      .submitted-message {
        color: var(--primary) !important;
        font-size: 18px !important;
        text-align: center !important;
        padding: 40px 20px !important;
      }
    `
    document.head.appendChild(style)
  }

  return (
    <div ref={formRef} id={`hubspot-form-${formId}`} className="hubspot-form-container">
      {/* HubSpot form will be injected here */}
    </div>
  )
}
