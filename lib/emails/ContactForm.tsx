import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
  MjmlSpacer,
  MjmlDivider
} from "mjml-react";

import {
  leadingTight,
  leadingRelaxed,
  textBase,
  textXl,
} from "./components/theme";

const ContactForm: React.FC<{
  subject: string,
  fromName: string,
  fromEmail: string,
  fields: { title: string, value: string }[],
}> = ({ subject, fromName, fromEmail, fields }) => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <Header loose />
      <MjmlSection padding="0 24px">
        <MjmlColumn>
          <MjmlDivider
            borderColor="#666"
            borderWidth="1px"
            padding="8px 0 32px 0"
          ></MjmlDivider>
          <MjmlText
            padding="18px 0 0 0"
            fontSize={textXl}
            lineHeight={leadingTight}
            cssClass="paragraph"
          >
            {subject}
          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            <span>Från: </span>{fromName} <span>({fromEmail})</span>
          </MjmlText>
          <MjmlText
            padding="0 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            {fields.map(({ title, value }, idx) =>
              <p key={idx}>
                <span>{title}</span><br />
                {value}
              </p>
            )}
          </MjmlText>
          <MjmlDivider
            borderColor="#666"
            borderWidth="1px"
            padding="40px 0 0 0"
          ></MjmlDivider>
        </MjmlColumn>
      </MjmlSection>
      <Footer />
    </MjmlBody>
  </Mjml>
);

export default ContactForm
