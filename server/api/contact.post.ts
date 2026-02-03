interface ContactForm {
  name: string;
  mail: string;
  phone: string;
  message: string;
  privacyCheck: boolean;
  honeypot: string;
}

export default defineEventHandler(async (event) => {
  try {
    const { sendMail } = useNodeMailer();
    const body = await readBody<ContactForm>(event);

    // Validate required fields
    if (!body.name || !body.mail || !body.message || !body.privacyCheck) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage:
            "Missing required fields: name, mail and message are required and you need to accept the privacy notice.",
        }),
      );
    }

    if (body.honeypot && body.honeypot.trim() !== "") {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Contact form could not be sent.",
        }),
      );
    }

    // Send email
    await sendMail({
      to: "moin@ferdi.digital",
      subject: `New contact form submission from ${body.name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.mail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(
          body.phone || "Not provided",
        )}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, "<br>")}</p>
      `,
      replyTo: body.mail,
    });

    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Failed to send email. Please try again later.",
      }),
    );
  }
});

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
