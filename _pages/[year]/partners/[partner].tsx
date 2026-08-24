import { getStaticYearPaths } from "/lib/utils";
import { AllPartnersDocument } from "/graphql";
export { default, getStaticProps } from '/pages/partners/[partner]'

export async function getStaticPaths() {
  return getStaticYearPaths(AllPartnersDocument, 'partner')
}
