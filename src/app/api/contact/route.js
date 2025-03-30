import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, comments } = await req.json();

        if (!name || !email || !comments) {
            return NextResponse.json(
                { message: 'Uzupełnij wszystkie wymagane pola' },
                { status: 400 }
            );
        }

        // Konfiguracja transportera Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,      // np. twojemail@gmail.com
                pass: process.env.GMAIL_APP_PASS,  // hasło aplikacji, NIE hasło konta
            },
        });

        // Przygotowanie wiadomości
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_EMAIL,
            subject: `Nowa wiadomość ze strony: ${subject || 'Brak tematu'}`,
            html: `
                <h3>Nowa wiadomość ze strony kontaktowej</h3>
                <p><strong>Imię:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Temat:</strong> ${subject || 'Brak tematu'}</p>
                <p><strong>Wiadomość:</strong></p>
                <p>${comments}</p>
            `,
        };

        // Wysyłanie wiadomości
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Wiadomość została wysłana pomyślnie' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Błąd podczas wysyłania wiadomości:', error);
        return NextResponse.json(
            { message: 'Wystąpił błąd podczas wysyłania wiadomości' },
            { status: 500 }
        );
    }
}
