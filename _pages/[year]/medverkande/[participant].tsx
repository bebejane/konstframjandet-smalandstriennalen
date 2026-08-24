import { getStaticYearPaths } from "/lib/utils";
import { AllParticipantsDocument } from "/graphql";

export { default, getStaticProps } from '/pages/medverkande/[participant]'

export async function getStaticPaths() {
  return getStaticYearPaths(AllParticipantsDocument, 'participant')
}
