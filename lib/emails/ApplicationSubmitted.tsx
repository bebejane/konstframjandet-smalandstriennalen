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
  MjmlDivider,
} from "mjml-react";

import {
  leadingTight,
  leadingRelaxed,
  textBase,
  textXl,
} from "./components/theme";

const ApplicationSubmitted: React.FC<{ name: string }> = ({ name }) => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <Header loose />
      <MjmlSection padding="0 0" cssClass="smooth">
        <MjmlColumn>
          <MjmlDivider
            borderColor="#666"
            borderWidth="1px"
            padding="0 0 40px 0"
          ></MjmlDivider>
          <MjmlText
            cssClass="paragraph"
            padding="0 0 0 0"
            fontSize={textXl}
            lineHeight={leadingTight}
          >
            {name}, tack för din ansökan!
          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Handläggningstiderna kan variera beroende på vilken region du ansökt om medlemskap i.
            Vi återkommer med ett beslut så snart vi gått igenom din ansökan.
          </MjmlText>
          <MjmlSpacer height="24px" />
          <MjmlText
            padding="0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Med vänliga hälsningar,
            <br />
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

export default ApplicationSubmitted
