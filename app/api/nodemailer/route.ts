import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Message From Zia Portfolio" <${process.env.EMAIL_USER}>`,
      to: "ziauddindev2000@gmail.com",
      subject: subject,

      html: `
        <div style="padding:20px">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}