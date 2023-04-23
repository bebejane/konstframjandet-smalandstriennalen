import * as dotenv from 'dotenv'
import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";
import ResetPassword from './ResetPassword'
import ApplicationSubmitted from './ApplicationSubmitted'
import ApplicationApproved from './ApplicationApproved'
import ContactForm from "./ContactForm";
import MemberInvitation from "./MemberInvitation";
import postmarkTransport from 'nodemailer-postmark-transport'
import ContactFormRegionNotification from "./ContactFormRegionNotification";
dotenv.config({ path: "./.env" });

const transport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: process.env.POSTMARK_API_KEY
  }
}))

const sendMail = buildSendMail({
  transport,
  defaultFrom: process.env.POSTMARK_FROM_EMAIL,
  configPath: "./mailing.config.json",
});

export const isValidUrl = (str: string): boolean => {
  if (!str) return false
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return pattern.test(str);
}

export const portfolioGuidePdffUrl = 'https://www.datocms-assets.com/55629/1675722618-kc_manual_portfolio.pdf'

export const Email = {
  resetPassword: ({ email, token }: { email: string, token: string }) =>
    sendMail({
      to: email,
      subject: 'Återställ ditt lösenord',
      component:
        <ResetPassword
          link={`${process.env.NEXTAUTH_URL}/konstnar/konto/aterstall-losenord?token=${token}`}
          ctaText={'Återställ lösenord'}
          body={
            <>
              Vi har tagit emot din begäran om att ändra ditt lösenord.
              Använd länken nedan för att skapa ett nytt lösenord för ditt konto.
            </>
          }
        />
    })
  ,
  applicationSubmitted: ({ email, name }: { email: string, name: string }) =>
    sendMail({
      to: email,
      subject: 'Tack för din ansökan!',
      component: <ApplicationSubmitted name={name} />
    })
  ,
  applicationApproved: ({ email, name, token }: { email: string, name: string, token: string }) =>
    sendMail({
      to: email,
      subject: 'Din ansökan har blivit godkänd!',
      component:
        <ApplicationApproved
          name={name}
          approvalUrl={`${process.env.NEXTAUTH_URL}/konstnar/konto/registrera?token=${token}`}
        />
    }),
  memberInvitation: ({ email, name, link }: { email: string, name: string, link: string, }) =>
    sendMail({
      to: email,
      subject: 'Inbjudan till Konstnärscentrum',
      component:
        <MemberInvitation
          name={name}
          link={link}
        />
    }),
  contactForm: ({ fromName, fromEmail, to, subject, fields }: {
    fromName: string,
    fromEmail: string,
    to: string,
    subject: string,
    fields: { title: string, value: string }[],
  }) =>
    sendMail({
      to,
      subject,
      component:
        <ContactForm
          fromName={fromName}
          fromEmail={fromEmail}
          subject={subject}
          fields={fields}
        />
    }),
  contactFormNotification: ({ datoUrl, name, to }: {
    to: string
    name: string
    datoUrl: string
  }) =>
    sendMail({
      to,
      subject: `Ny medlemsansökning från ${name}`,
      component:
        <ContactFormRegionNotification
          name={name}
          datoUrl={datoUrl}
        />
    })
}

export default sendMail;
