import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, organization, phone, website, message, project, type } = await req.json();

    if (type === "Project Form" && !project) {
      return NextResponse.json({ error: "Missing project field" }, { status: 400 });
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID!,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            phone || "",
            organization || "",
            website || "",
            project || "",
            message,
            new Date().toLocaleString(),
          ],
        ],
      },
    });
    


    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `"${type === "Project Form" ? "Project Form" : "Contact Form"}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, 
      subject: `📬 ${type === "Project Form" ? "Project Form" : "Contact Form"} Submission`,
      text: `
You received a new message from your website:

Form Type: ${type}

Details:
-----------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Organization: ${organization || "N/A"}
Website: ${website || "N/A"}
Project Type: ${project || "N/A"}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
-----------------------------------
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error handling form submission:", err);
    return NextResponse.json({ error: "Failed to save or send email" }, { status: 500 });
  }
}
