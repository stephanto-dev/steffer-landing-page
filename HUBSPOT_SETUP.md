# HubSpot Form Integration Setup

This guide will help you configure the HubSpot form integration for the Steffer website.

## Prerequisites

1. A HubSpot account (free or paid)
2. Access to HubSpot Forms

## Step 1: Create a Form in HubSpot

1. Log in to your HubSpot account
2. Navigate to **Marketing** > **Forms**
3. Click **Create form**
4. Choose **Embedded form**
5. Add the following fields:
   - **Name** (Single-line text, required)
   - **Email** (Email, required)
   - **Phone** (Phone number, required)
   - **Message** (Multi-line text, optional)
6. Configure form options:
   - Set thank you message: "Obrigado! Entraremos em contato em até 24 horas."
   - Enable GDPR options if needed
   - Configure notifications to your team
7. Click **Publish**

## Step 2: Get Your Form Credentials

After publishing your form:

1. Click on the **Share** tab
2. Look for the embed code
3. Find these two values in the code:
   - **Portal ID**: Usually a 7-8 digit number
   - **Form ID**: A UUID string (e.g., "12345678-1234-1234-1234-123456789abc")

Example embed code:
\`\`\`html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "1234567",  // <-- This is your Portal ID
    formId: "12345678-1234-1234-1234-123456789abc"  // <-- This is your Form ID
  });
</script>
\`\`\`

## Step 3: Update the Contact Section

1. Open `components/contact-section.tsx`
2. Replace the placeholder values:

\`\`\`tsx
// Replace these with your actual HubSpot Portal ID and Form ID
const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID"  // Replace with your Portal ID
const HUBSPOT_FORM_ID = "YOUR_FORM_ID"      // Replace with your Form ID
\`\`\`

Example:
\`\`\`tsx
const HUBSPOT_PORTAL_ID = "1234567"
const HUBSPOT_FORM_ID = "12345678-1234-1234-1234-123456789abc"
\`\`\`

3. If your HubSpot account is in a different region (not North America), update the region:
   - `na1` - North America (default)
   - `eu1` - Europe
   - `ap1` - Asia Pacific

\`\`\`tsx
<HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORM_ID} region="eu1" />
\`\`\`

## Step 4: Test the Form

1. Save your changes
2. Navigate to the contact section on your website
3. Fill out and submit the form
4. Check your HubSpot account to verify the submission was received
5. Verify that you receive email notifications (if configured)

## Customization

The form styling is already customized to match the Steffer brand with:
- Dark background (#0C1523)
- Tiffany blue accents (#27E8DC)
- Custom focus states
- Responsive design

If you need to adjust the styling, edit the CSS in `components/hubspot-form.tsx` in the `applyCustomStyling()` function.

## Troubleshooting

**Form not appearing:**
- Check that Portal ID and Form ID are correct
- Verify the form is published in HubSpot
- Check browser console for errors

**Styling issues:**
- Clear browser cache
- Check that the custom CSS is being applied
- Verify no conflicting CSS rules

**Submissions not received:**
- Check HubSpot form settings
- Verify email notifications are configured
- Check spam folder

## Alternative: Use Native Form (Without HubSpot)

If you prefer not to use HubSpot, you can revert to the native form by replacing the content of `components/contact-section.tsx` with the previous version that includes the native React form with state management.

## Support

For HubSpot-specific issues, refer to:
- [HubSpot Forms Documentation](https://developers.hubspot.com/docs/api/marketing/forms)
- [HubSpot Support](https://help.hubspot.com/)

For website issues, contact your development team.
