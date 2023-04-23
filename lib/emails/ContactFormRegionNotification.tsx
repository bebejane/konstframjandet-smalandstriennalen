import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonPrimary from "./components/ButtonPrimary";

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

const ContactFormRegionNotification: React.FC<{
  name: string
  datoUrl: string
}> = ({ name, datoUrl }) => (
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
            Ny ansökning
          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Det har inkommit en ny ansökning från {name}
          </MjmlText>

          <MjmlSpacer height="24px" />
          <ButtonPrimary link={datoUrl} uiText={'Visa ansökning'} />
          <MjmlSpacer height="8px" />

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

export default ContactFormRegionNotification
