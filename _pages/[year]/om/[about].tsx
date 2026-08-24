import { getStaticYearPaths } from "/lib/utils";
import { AllAboutsDocument } from "/graphql";
export { default, getStaticProps } from '/pages/om/[about]'

export async function getStaticPaths() {
  return getStaticYearPaths(AllAboutsDocument, 'about')
}
