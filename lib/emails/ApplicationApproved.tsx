import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonPrimary from "./components/ButtonPrimary";
import { portfolioGuidePdffUrl } from "./";

import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlSpacer,
  MjmlDivider
} from "mjml-react";

import {
  leadingTight,
  leadingRelaxed,
  textBase,
  textXl,
} from "./components/theme";

const ApplicationApproved: React.FC<{ name: string, approvalUrl: string }> = ({ name, approvalUrl }) => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <Header loose />
      <MjmlSection padding="0 24px" cssClass="smooth">
        <MjmlColumn>
          <MjmlDivider
            borderColor="#666"
            borderWidth="1px"
            padding="0 0 40px 0"
          ></MjmlDivider>
          <MjmlText
            cssClass="paragraph"
            padding="0"
            fontSize={textXl}
            lineHeight={leadingTight}
          >
            Hej {name},

          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Varmt välkommen som ny medlem i Konstnärscentrum!<br /><br />
            Som medlem har du möjlighet att skapa en egen konstnärsportfolio på vår hemsida. Portfolion är synlig för både allmänhet och potentiella uppdragsgivare.
            <br /><br />
            Klicka på knappen nedan för att skapa ditt användarkonto på Konstnärscentrums hemsida.
          </MjmlText>
          <MjmlSpacer height="24px" />
          <ButtonPrimary link={approvalUrl} uiText={'Skapa konto'} />
          <MjmlSpacer height="8px" />
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Här kan du läsa en <a href={portfolioGuidePdffUrl}>guide för hur du skapar din konstnärsportfolio</a>.

            <br /><br />

            Med vänliga hälsningar,<br />
            Konstnärscentrum
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

export default ApplicationApproved
