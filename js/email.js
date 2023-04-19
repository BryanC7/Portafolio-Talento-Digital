import { SMTPClient } from 'emailjs'

export async function sendEmail(name, email) {
    const client = new SMTPClient({
        user: 'user',
        password: 'password',
        host: 'digitalizate.chile@gmail.com',
        ssl: true,
    })
    
    try {
        const message = await client.sendAsync({
                text: `${name}, i hope this works`,
                from: 'digitalizate.chile@gmail.com',
                to: `${email}`,
                subject: 'testing emailjs'
            })
        console.log(message)
    } catch (error) {
        console.log(error)
    }
}