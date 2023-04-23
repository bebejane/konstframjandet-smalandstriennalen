import { getStaticYearPaths } from "/lib/utils";
import { AllProgramsDocument } from "/graphql";
export { default, getStaticProps } from '/pages/program/[program]'

export async function getStaticPaths() {
  return getStaticYearPaths(AllProgramsDocument, 'program')
}
