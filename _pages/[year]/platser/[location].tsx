import { getStaticYearPaths } from "/lib/utils";
import { AllLocationsDocument } from "/graphql";
export { default, getStaticProps } from '/pages/platser/[location]'

export async function getStaticPaths() {
  return getStaticYearPaths(AllLocationsDocument, 'location')
}
