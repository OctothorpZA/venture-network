'use server';

import * as brevo from '@getbrevo/brevo';

// Define the shape of the form state
export interface FormState {
  message: string;
  error: boolean;
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Basic server-side validation
  if (!name || !email || !message) {
    return { message: 'All fields are required.', error: true };
  }

  // Initialize Brevo API client
  const api = new brevo.TransactionalEmailsApi();
  api.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
  );

  // Construct the email
  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `New Contact Form Submission from ${name}`;
  sendSmtpEmail.to = [{ email: 'VNetwork@oitw.site' }]; // IMPORTANT: Replace with your actual recipient email
  sendSmtpEmail.htmlContent = `
    <html>
      <body>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </body>
    </html>
  `;
  sendSmtpEmail.sender = { name: 'Venture Network Website', email: 'VNetwork@oitw.site' }; // IMPORTANT: Replace with a verified sender email in Brevo

  try {
    await api.sendTransacEmail(sendSmtpEmail);
    return { message: 'Success! Your message has been sent.', error: false };
  } catch (error) {
    console.error('Brevo API Error:', error);
    return { message: 'Error: Could not send message. Please try again later.', error: true };
  }
}
