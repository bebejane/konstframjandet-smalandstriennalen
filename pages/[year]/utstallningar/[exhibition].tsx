import { getStaticYearPaths } from "/lib/utils";
import { AllExhibitionsDocument } from "/graphql";
export { default, getStaticProps } from '/pages/utstallningar/[exhibition]'

export async function getStaticPaths() {
  return getStaticYearPaths(AllExhibitionsDocument, 'exhibition')
}
