import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // Destructure the data from the request body
    const {
        fullname,
        email,
        phone,
        company,
        industry,
        describe_project,
        timeline,
        packages,
        design_preferences,
        existing_content,
        other_information,
        how_heard
    } = req.body;

    // Create a transporter using nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_MAIL_TO,
            pass: process.env.NEXT_PUBLIC_SMTP_PASS,
        },
    });

    // Compose the email content
    const mailOptions = {
        from: `${process.env.NEXT_PUBLIC_SMTP_MAIL_TO}`,
        to: email,
        subject: "Packages Sent Successfully + Make The Payment " + fullname,
        text: `WebCraft Website Details For ${fullname}`,
        html: `<div style="background-color: #f9fafb;width: 600px;">
            <!-- Your HTML content here -->
            <p><strong>Name: </strong>${fullname}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Phone: </strong>${phone}</p>
            <p><strong>Company: </strong>${company}</p>
            <p><strong>Industry: </strong>${industry}</p>
            <p><strong>Describe Project: </strong>${describe_project}</p>
            <p><strong>Timeline: </strong>${timeline}</p>
            <p><strong>Packages: </strong>${packages}</p>
            <p><strong>Design Preferences: </strong>${design_preferences}</p>
            <p><strong>Existing Content: </strong>${existing_content}</p>
            <p><strong>Other Information: </strong>${other_information}</p>
            <p><strong>How Heard: </strong>${how_heard}</p>
        </div>`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        
        res.status(200).send("Packages Sent Successfully. Check your mailbox.");
    } catch (error) {
        // Handle any errors that occur during sending
        console.error(error);
        res.status(500).send("Package Sent Failed");
    }
}
