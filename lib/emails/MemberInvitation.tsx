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

const MemberInvitation: React.FC<{ name: string, link: string }> = ({ name, link }) => (
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
            padding="0 0 24px 0"
            fontSize={textXl}
            lineHeight={leadingTight}
          >
            Skapa en portfolio på Konstnärscentrums nya hemsida och bli synlig för framtida uppdragsgivare!
          </MjmlText>
          <MjmlText
            padding="0 0 24px 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Nu kan medlemmar i Konstnärscentrum skapa en portfolio på Konstnärscentrums nya hemsida. <br /><br />
          </MjmlText>
          <MjmlText
            cssClass="paragraph"
            padding="0 0 24px 0"
            fontSize={textXl}
            lineHeight={leadingTight}
          >
            Så här loggar du in
          </MjmlText>

          <MjmlText
            padding="0 0 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Klicka på knappen nedan för att skapa din användarprofil.
          </MjmlText>

          <MjmlSpacer height="24px" />
          <ButtonPrimary link={link} uiText={'Skapa konto'} />
          <MjmlSpacer height="24px" />
          <MjmlText
            padding="0 0 24px 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Ditt användarnamn är din e-postadress. Ditt lösenord väljer du själv genom att klicka på länken och följa instruktionerna.<br /><br />
          </MjmlText>
          <MjmlText
            cssClass="paragraph"
            padding="0 0 24px 0"
            fontSize={textXl}
            lineHeight={leadingTight}
          >
            Så här skapar du din portfolio
          </MjmlText>
          <MjmlText
            padding="0 0 24px 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            <strong>OBS!</strong> Du kan inte skapa din portfolio från mobil eller surfplatta, det krävs att du loggar in med en dator. <br /><br />

            När du loggat in kommer du in på din användarprofil där du uppdaterar din portfolio. <br /><br />

            För att ladda upp bilder till din portfolio, klicka på <strong>Gå till din portfolio</strong>. <br /><br />

            För muspekaren över din omslagsbild, tryck <strong>Redigera</strong> (uppe i vänstra hörnet), och ladda upp din omslagsbild. Tänk på att din bild måste vara minst 1600x1000 pixlar. <br /><br />

            Tryck på din bild för att lägga till en bildtext. Tryck sedan <strong>Spara</strong>. <br /><br />

            För att lägga till fler bilder eller video i din portfolio, scrolla ner och tryck <strong>Lägg till bildsektion</strong> eller <strong>Lägg till videosektion</strong>. <br /><br />

            Tryck <strong>Förhandsvisa</strong> för att se hur din portfolio ser ut. För att fortsätta redigera, tryck <strong>Redigera</strong>. <br /><br />

            När du är nöjd med din portfolio, tryck <strong>Tillbaka till konto-sidan</strong>. <br /><br />

            Skriv sedan in dina uppgifter som du vill dela med dig av i din portfolio (t.ex. konstnärsbio, födelsestad, orten du är verksam i, födelseår samt länk till din hemsida och/eller instagram). Klicka sedan in vilken typ av konst du arbetar med. Tryck på <strong>Spara</strong>. <br /><br />

            Nu är din portfolio publicerad på Konstnärscentrums hemsida! <br /><br />

            För en mer detaljerad guide till hur du skapar en portfolio, se denna guide med bilder.

          </MjmlText>
          <ButtonPrimary link={portfolioGuidePdffUrl} uiText={'Ladda ner guide'} />
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
  </Mjml >
);

export default MemberInvitation