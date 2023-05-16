import s from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { AllProgramsDocument, AllProgramCategoriesDocument } from "/graphql";
import { CardContainer, Card, Thumbnail, FilterBar } from "/components";
import { formatDate } from "/lib/utils";
import { useState } from "react";
import { useRouter } from "next/router";
import { DatoSEO } from "dato-nextjs-utils/components";
import { useTranslations } from "next-intl";
import { pageSlugs } from "/lib/i18n";

export type Props = {
  programs: ProgramRecord[]
  programCategories: ProgramCategoryRecord[]
}

export default function Program({ programs, programCategories }: Props) {

  const t = useTranslations()
  const { asPath } = useRouter()
  const options = programCategories.map(({ id, title: label, desc }) => ({ id, label, description: desc }))
  const [category, setCategory] = useState<string>()
  const categoryFilter = ({ programCategory: { id } }: ProgramRecord) => !category || category === id
  const haveProgramItems = programs.filter(categoryFilter).length > 0

  return (
    <>
      <DatoSEO title={t('Menu.program')} />
      <FilterBar
        options={options}
        multi={false}
        onChange={(opt) => setCategory(opt as string)}
      />
      {haveProgramItems ?
        <CardContainer key={`${category}-${asPath}`}>
          {programs.filter(categoryFilter).map(({ id, image, title, intro, slug, startDate, endDate, programCategory }) =>
            <Card key={id}>
              <Thumbnail
                title={title}
                titleRows={2}
                image={image}
                intro={intro}
                meta={`${formatDate(startDate, endDate)} • ${programCategory.title}`}
                slug={`/program/${slug}`}
              />
            </Card>
          )}
        </CardContainer>
        :
        <p className={s.nomatch}>{t('Program.noProgramItems')}</p>
      }
    </>
  )
}

export const getStaticProps = withGlobalProps({ queries: [AllProgramsDocument, AllProgramCategoriesDocument] }, async ({ props, revalidate, context }: any) => {

  // Filter out program categories that don't have any programs
  const programCategories = props.programCategories.filter(({ id }) => props.programs.some(({ programCategory }) => programCategory.id === id))

  return {
    props: {
      ...props,
      programCategories,
      page: {
        section: 'program',
        slugs: pageSlugs('program', props.year.title)
      } as PageProps
    },
    revalidate
  };
});