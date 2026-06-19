const RESEND_API_URL = "https://api.resend.com/emails";
const CONTACT_FROM = "onboarding@resend.dev";
const CONTACT_TO = "earljonastigno@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM ?? CONTACT_FROM;
  const to = process.env.CONTACT_TO ?? CONTACT_TO;

  if (!apiKey) {
    return Response.json(
      { error: "Email is not configured yet." },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      message?: unknown;
    };

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill out every field before sending." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 4000) {
      return Response.json(
        { error: "Please keep your message under 4000 characters." },
        { status: 400 }
      );
    }

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <p><strong>Name:</strong> ${escapedName}</p>
          <p><strong>Email:</strong> ${escapedEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${escapedMessage}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = (await response.json().catch(() => null)) as {
        message?: string;
        error?: string;
        name?: string;
      } | null;

      return Response.json(
        {
          error:
            errorBody?.message ??
            errorBody?.error ??
            errorBody?.name ??
            "Unable to send your message right now.",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
