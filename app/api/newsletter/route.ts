import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send to email service (Mailchimp, SendGrid, etc.)
    // 3. Send confirmation email

    // For now, just log it
    console.log("Newsletter signup:", email);

    // In production, you'd save this to a database or email service
    // Example for different services:

    // Mailchimp example:
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${listId}/members`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed',
    //   }),
    // })

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
