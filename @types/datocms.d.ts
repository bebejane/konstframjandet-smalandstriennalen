type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  Date: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

type AboutModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type AboutModelContentField = {
  __typename?: 'AboutModelContentField';
  blocks: Array<AboutModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type AboutModelContentFieldMultiLocaleField = {
  __typename?: 'AboutModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<AboutModelContentField>;
};

/** Linking fields */
enum AboutModelFieldsReferencingYearModel {
  about_year = 'about_year'
}

type AboutModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  year?: InputMaybe<LinkFilter>;
};

enum AboutModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Om (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _allContentLocales?: Maybe<Array<AboutModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<AboutModelContentField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  position?: Maybe<Scalars['IntType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  year?: Maybe<YearRecord>;
};


/** Record of type Om (about) */
type AboutRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Om (about) */
type AboutRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Om (about) */
type AboutRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

type ButtonModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Knapp (button) */
type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  link: ButtonModelLinkField;
};


/** Block of type Knapp (button) */
type ButtonRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  cssRgb: Scalars['String'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

type ContactModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type ContactModelContentField = {
  __typename?: 'ContactModelContentField';
  blocks: Array<ContactModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type ContactModelContentFieldMultiLocaleField = {
  __typename?: 'ContactModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ContactModelContentField>;
};

/** Record of type Kontakt (contact) */
type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
  _allContentLocales?: Maybe<Array<ContactModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<ContactModelContentField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};


/** Record of type Kontakt (contact) */
type ContactRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt (contact) */
type ContactRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Kontakt (contact) */
type ContactRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt (contact) */
type ContactRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt (contact) */
type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt (contact) */
type ContactRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt (contact) */
type ContactRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Kontakt (contact) */
type ContactRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt (contact) */
type ContactRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter Date fields */
type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']>;
};

/** Specifies how to filter DateTime fields */
type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type ExhibitionModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type ExhibitionModelContentField = {
  __typename?: 'ExhibitionModelContentField';
  blocks: Array<ExhibitionModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type ExhibitionModelContentFieldMultiLocaleField = {
  __typename?: 'ExhibitionModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ExhibitionModelContentField>;
};

/** Linking fields */
enum ExhibitionModelFieldsReferencingLocationModel {
  exhibition_location = 'exhibition_location'
}

/** Linking fields */
enum ExhibitionModelFieldsReferencingParticipantModel {
  exhibition_participants = 'exhibition_participants'
}

/** Linking fields */
enum ExhibitionModelFieldsReferencingYearModel {
  exhibition_year = 'exhibition_year'
}

type ExhibitionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExhibitionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExhibitionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  endDate?: InputMaybe<DateFilter>;
  externalLink?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  location?: InputMaybe<LinkFilter>;
  misc?: InputMaybe<StringFilter>;
  participants?: InputMaybe<LinksFilter>;
  partner?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  time?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  year?: InputMaybe<LinkFilter>;
};

enum ExhibitionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  endDate_ASC = 'endDate_ASC',
  endDate_DESC = 'endDate_DESC',
  externalLink_ASC = 'externalLink_ASC',
  externalLink_DESC = 'externalLink_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  misc_ASC = 'misc_ASC',
  misc_DESC = 'misc_DESC',
  startDate_ASC = 'startDate_ASC',
  startDate_DESC = 'startDate_DESC',
  time_ASC = 'time_ASC',
  time_DESC = 'time_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Utställning (exhibition) */
type ExhibitionRecord = RecordInterface & {
  __typename?: 'ExhibitionRecord';
  _allContentLocales?: Maybe<Array<ExhibitionModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allMiscLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingInternalLinks: Array<InternalLinkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingInternalLinksMeta: CollectionMetadata;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<ExhibitionModelContentField>;
  endDate?: Maybe<Scalars['Date']>;
  externalLink?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  location?: Maybe<LocationRecord>;
  misc?: Maybe<Scalars['String']>;
  participants: Array<ParticipantRecord>;
  partner: Array<PartnerRecord>;
  slug: Scalars['String'];
  startDate?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  year: YearRecord;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allMiscLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allReferencingInternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenInternalLinkAndExhibition>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allReferencingInternalLinksMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenInternalLinkAndExhibition>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecordmiscArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Utställning (exhibition) */
type ExhibitionRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ExternalLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExternalLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExternalLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

enum ExternalLinkModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Extern länk (external_link) */
type ExternalLinkRecord = RecordInterface & {
  __typename?: 'ExternalLinkRecord';
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title: Scalars['String'];
  url: Scalars['String'];
};


/** Record of type Extern länk (external_link) */
type ExternalLinkRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Extern länk (external_link) */
type ExternalLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Extern länk (external_link) */
type ExternalLinkRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Block of type Financiär (funder) */
type FunderRecord = RecordInterface & {
  __typename?: 'FunderRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  logo?: Maybe<FileField>;
  url?: Maybe<Scalars['String']>;
};


/** Block of type Financiär (funder) */
type FunderRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Generellt (general) */
type GeneralRecord = RecordInterface & {
  __typename?: 'GeneralRecord';
  _allAboutLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  about?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  instagram?: Maybe<Scalars['String']>;
};


/** Record of type Generellt (general) */
type GeneralRecord_allAboutLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Generellt (general) */
type GeneralRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Generellt (general) */
type GeneralRecordaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

/** Block of type Bilder (image_gallery) */
type ImageGalleryRecord = RecordInterface & {
  __typename?: 'ImageGalleryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  images: Array<FileField>;
};


/** Block of type Bilder (image_gallery) */
type ImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Bild (image) */
type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: FileField;
  layout: Scalars['String'];
};


/** Block of type Bild (image) */
type ImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  solid = 'solid'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Linking fields */
enum InternalLinkModelFieldsReferencingExhibitionModel {
  internalLink_record = 'internalLink_record'
}

/** Linking fields */
enum InternalLinkModelFieldsReferencingLocationModel {
  internalLink_record = 'internalLink_record'
}

/** Linking fields */
enum InternalLinkModelFieldsReferencingParticipantModel {
  internalLink_record = 'internalLink_record'
}

type InternalLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InternalLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InternalLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  record?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

enum InternalLinkModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type InternalLinkModelRecordField = AboutRecord | ExhibitionRecord | LocationRecord | NewsRecord | ParticipantRecord | ProgramRecord;

/** Record of type Intern länk (internal_link) */
type InternalLinkRecord = RecordInterface & {
  __typename?: 'InternalLinkRecord';
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  record?: Maybe<InternalLinkModelRecordField>;
  title?: Maybe<Scalars['String']>;
};


/** Record of type Intern länk (internal_link) */
type InternalLinkRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Intern länk (internal_link) */
type InternalLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Intern länk (internal_link) */
type InternalLinkRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenAboutAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AboutModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AboutModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenExhibitionAndLocation = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ExhibitionModelFieldsReferencingLocationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ExhibitionModelFieldsReferencingLocationModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenExhibitionAndParticipant = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ExhibitionModelFieldsReferencingParticipantModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ExhibitionModelFieldsReferencingParticipantModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenExhibitionAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ExhibitionModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ExhibitionModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenInternalLinkAndExhibition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<InternalLinkModelFieldsReferencingExhibitionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<InternalLinkModelFieldsReferencingExhibitionModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenInternalLinkAndLocation = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<InternalLinkModelFieldsReferencingLocationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<InternalLinkModelFieldsReferencingLocationModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenInternalLinkAndParticipant = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<InternalLinkModelFieldsReferencingParticipantModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<InternalLinkModelFieldsReferencingParticipantModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenLocationAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LocationModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LocationModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenParticipantAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ParticipantModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ParticipantModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenPartnerAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProgramAndLocation = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProgramModelFieldsReferencingLocationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProgramModelFieldsReferencingLocationModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProgramAndParticipant = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProgramModelFieldsReferencingParticipantModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProgramModelFieldsReferencingParticipantModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProgramAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProgramModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProgramModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenAboutAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAboutAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenExhibitionAndLocation = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenExhibitionAndLocation>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenExhibitionAndParticipant = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenExhibitionAndParticipant>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenExhibitionAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenExhibitionAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenInternalLinkAndExhibition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenInternalLinkAndExhibition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenInternalLinkAndLocation = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenInternalLinkAndLocation>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenInternalLinkAndParticipant = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenInternalLinkAndParticipant>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenLocationAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLocationAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenParticipantAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenParticipantAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenPartnerAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProgramAndLocation = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProgramAndLocation>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProgramAndParticipant = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProgramAndParticipant>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProgramAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProgramAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Linking locales */
enum LinkingLocale {
  _nonLocalized = '_nonLocalized',
  sv = 'sv'
}

/** Specifies how to filter by linking locales */
type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

type LocationModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type LocationModelContentField = {
  __typename?: 'LocationModelContentField';
  blocks: Array<LocationModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type LocationModelContentFieldMultiLocaleField = {
  __typename?: 'LocationModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<LocationModelContentField>;
};

/** Linking fields */
enum LocationModelFieldsReferencingYearModel {
  location_year = 'location_year'
}

type LocationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  webpage?: InputMaybe<StringFilter>;
  year?: InputMaybe<LinkFilter>;
};

enum LocationModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  address_ASC = 'address_ASC',
  address_DESC = 'address_DESC',
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  webpage_ASC = 'webpage_ASC',
  webpage_DESC = 'webpage_DESC'
}

/** Record of type Plats (location) */
type LocationRecord = RecordInterface & {
  __typename?: 'LocationRecord';
  _allContentLocales?: Maybe<Array<LocationModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingExhibitions: Array<ExhibitionRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingExhibitionsMeta: CollectionMetadata;
  _allReferencingInternalLinks: Array<InternalLinkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingInternalLinksMeta: CollectionMetadata;
  _allReferencingPrograms: Array<ProgramRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProgramsMeta: CollectionMetadata;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  content?: Maybe<LocationModelContentField>;
  id: Scalars['ItemId'];
  image: FileField;
  intro: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  webpage?: Maybe<Scalars['String']>;
  year: YearRecord;
};


/** Record of type Plats (location) */
type LocationRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Plats (location) */
type LocationRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Plats (location) */
type LocationRecord_allReferencingExhibitionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExhibitionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenExhibitionAndLocation>;
};


/** Record of type Plats (location) */
type LocationRecord_allReferencingExhibitionsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenExhibitionAndLocation>;
};


/** Record of type Plats (location) */
type LocationRecord_allReferencingInternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenInternalLinkAndLocation>;
};


/** Record of type Plats (location) */
type LocationRecord_allReferencingInternalLinksMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenInternalLinkAndLocation>;
};


/** Record of type Plats (location) */
type LocationRecord_allReferencingProgramsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProgramAndLocation>;
};


/** Record of type Plats (location) */
type LocationRecord_allReferencingProgramsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenProgramAndLocation>;
};


/** Record of type Plats (location) */
type LocationRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Plats (location) */
type LocationRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Plats (location) */
type LocationRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Plats (location) */
type LocationRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Plats (location) */
type LocationRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

type NewsModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type NewsModelContentField = {
  __typename?: 'NewsModelContentField';
  blocks: Array<NewsModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type NewsModelContentFieldMultiLocaleField = {
  __typename?: 'NewsModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<NewsModelContentField>;
};

type NewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

enum NewsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Nyheter (news) */
type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _allContentLocales?: Maybe<Array<NewsModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<NewsModelContentField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** Record of type Nyheter (news) */
type NewsRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Nyheter (news) */
type NewsRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Nyheter (news) */
type NewsRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

type ParticipantModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type ParticipantModelContentField = {
  __typename?: 'ParticipantModelContentField';
  blocks: Array<ParticipantModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type ParticipantModelContentFieldMultiLocaleField = {
  __typename?: 'ParticipantModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ParticipantModelContentField>;
};

/** Linking fields */
enum ParticipantModelFieldsReferencingYearModel {
  participant_year = 'participant_year'
}

type ParticipantModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParticipantModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParticipantModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  year?: InputMaybe<LinkFilter>;
};

enum ParticipantModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC'
}

/** Record of type Medverkande (participant) */
type ParticipantRecord = RecordInterface & {
  __typename?: 'ParticipantRecord';
  _allContentLocales?: Maybe<Array<ParticipantModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingExhibitions: Array<ExhibitionRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingExhibitionsMeta: CollectionMetadata;
  _allReferencingInternalLinks: Array<InternalLinkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingInternalLinksMeta: CollectionMetadata;
  _allReferencingPrograms: Array<ProgramRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProgramsMeta: CollectionMetadata;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<ParticipantModelContentField>;
  id: Scalars['ItemId'];
  image: FileField;
  intro: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  year: YearRecord;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allReferencingExhibitionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExhibitionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenExhibitionAndParticipant>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allReferencingExhibitionsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenExhibitionAndParticipant>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allReferencingInternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenInternalLinkAndParticipant>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allReferencingInternalLinksMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenInternalLinkAndParticipant>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allReferencingProgramsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProgramAndParticipant>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allReferencingProgramsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenProgramAndParticipant>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medverkande (participant) */
type ParticipantRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type PartnerModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type PartnerModelContentField = {
  __typename?: 'PartnerModelContentField';
  blocks: Array<PartnerModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type PartnerModelContentFieldMultiLocaleField = {
  __typename?: 'PartnerModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<PartnerModelContentField>;
};

/** Linking fields */
enum PartnerModelFieldsReferencingYearModel {
  partner_year = 'partner_year'
}

type PartnerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PartnerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PartnerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  webpage?: InputMaybe<StringFilter>;
  year?: InputMaybe<LinkFilter>;
};

enum PartnerModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  address_ASC = 'address_ASC',
  address_DESC = 'address_DESC',
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  webpage_ASC = 'webpage_ASC',
  webpage_DESC = 'webpage_DESC'
}

/** Record of type Partner (partner) */
type PartnerRecord = RecordInterface & {
  __typename?: 'PartnerRecord';
  _allContentLocales?: Maybe<Array<PartnerModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  content?: Maybe<PartnerModelContentField>;
  id: Scalars['ItemId'];
  image: FileField;
  intro: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  webpage?: Maybe<Scalars['String']>;
  year: YearRecord;
};


/** Record of type Partner (partner) */
type PartnerRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner (partner) */
type PartnerRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Partner (partner) */
type PartnerRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner (partner) */
type PartnerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner (partner) */
type PartnerRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner (partner) */
type PartnerRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Partner (partner) */
type PartnerRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>;
};

type ProgramCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProgramCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProgramCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  desc?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProgramCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  desc_ASC = 'desc_ASC',
  desc_DESC = 'desc_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Program kategori (program_category) */
type ProgramCategoryRecord = RecordInterface & {
  __typename?: 'ProgramCategoryRecord';
  _allDescLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  desc?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
};


/** Record of type Program kategori (program_category) */
type ProgramCategoryRecord_allDescLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program kategori (program_category) */
type ProgramCategoryRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program kategori (program_category) */
type ProgramCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program kategori (program_category) */
type ProgramCategoryRecorddescArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program kategori (program_category) */
type ProgramCategoryRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProgramModelContentBlocksField = ButtonRecord | ImageGalleryRecord | ImageRecord | VideoRecord;

type ProgramModelContentField = {
  __typename?: 'ProgramModelContentField';
  blocks: Array<ProgramModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type ProgramModelContentFieldMultiLocaleField = {
  __typename?: 'ProgramModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProgramModelContentField>;
};

/** Linking fields */
enum ProgramModelFieldsReferencingLocationModel {
  program_location = 'program_location'
}

/** Linking fields */
enum ProgramModelFieldsReferencingParticipantModel {
  program_partipants = 'program_partipants'
}

/** Linking fields */
enum ProgramModelFieldsReferencingYearModel {
  program_year = 'program_year'
}

type ProgramModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProgramModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProgramModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  address?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  endDate?: InputMaybe<DateFilter>;
  externalLink?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  location?: InputMaybe<LinkFilter>;
  misc?: InputMaybe<StringFilter>;
  partipants?: InputMaybe<LinksFilter>;
  partner?: InputMaybe<LinksFilter>;
  programCategory?: InputMaybe<LinkFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  time?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  year?: InputMaybe<LinkFilter>;
};

enum ProgramModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  address_ASC = 'address_ASC',
  address_DESC = 'address_DESC',
  endDate_ASC = 'endDate_ASC',
  endDate_DESC = 'endDate_DESC',
  externalLink_ASC = 'externalLink_ASC',
  externalLink_DESC = 'externalLink_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  misc_ASC = 'misc_ASC',
  misc_DESC = 'misc_DESC',
  startDate_ASC = 'startDate_ASC',
  startDate_DESC = 'startDate_DESC',
  startTime_ASC = 'startTime_ASC',
  startTime_DESC = 'startTime_DESC',
  time_ASC = 'time_ASC',
  time_DESC = 'time_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Program (program) */
type ProgramRecord = RecordInterface & {
  __typename?: 'ProgramRecord';
  _allContentLocales?: Maybe<Array<ProgramModelContentFieldMultiLocaleField>>;
  _allIntroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allMiscLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  content?: Maybe<ProgramModelContentField>;
  endDate?: Maybe<Scalars['Date']>;
  externalLink?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image: FileField;
  intro: Scalars['String'];
  location?: Maybe<LocationRecord>;
  misc?: Maybe<Scalars['String']>;
  partipants: Array<ParticipantRecord>;
  partner: Array<PartnerRecord>;
  programCategory: ProgramCategoryRecord;
  slug: Scalars['String'];
  startDate: Scalars['Date'];
  startTime?: Maybe<Scalars['DateTime']>;
  time?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  year: YearRecord;
};


/** Record of type Program (program) */
type ProgramRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecord_allIntroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Program (program) */
type ProgramRecord_allMiscLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecord_allSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecord_allTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecordintroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Program (program) */
type ProgramRecordmiscArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecordslugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Program (program) */
type ProgramRecordtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAboutsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allExhibitionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allExternalLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInternalLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLocationsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allParticipantsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPartnersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProgramCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProgramsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>;
  /** Returns meta information regarding a record collection */
  _allYearsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  about?: Maybe<AboutRecord>;
  /** Returns a collection of records */
  allAbouts: Array<AboutRecord>;
  /** Returns a collection of records */
  allExhibitions: Array<ExhibitionRecord>;
  /** Returns a collection of records */
  allExternalLinks: Array<ExternalLinkRecord>;
  /** Returns a collection of records */
  allInternalLinks: Array<InternalLinkRecord>;
  /** Returns a collection of records */
  allLocations: Array<LocationRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allParticipants: Array<ParticipantRecord>;
  /** Returns a collection of records */
  allPartners: Array<PartnerRecord>;
  /** Returns a collection of records */
  allProgramCategories: Array<ProgramCategoryRecord>;
  /** Returns a collection of records */
  allPrograms: Array<ProgramRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allYears: Array<YearRecord>;
  /** Returns the single instance record */
  contact?: Maybe<ContactRecord>;
  /** Returns a specific record */
  exhibition?: Maybe<ExhibitionRecord>;
  /** Returns a specific record */
  externalLink?: Maybe<ExternalLinkRecord>;
  /** Returns the single instance record */
  general?: Maybe<GeneralRecord>;
  /** Returns a specific record */
  internalLink?: Maybe<InternalLinkRecord>;
  /** Returns a specific record */
  location?: Maybe<LocationRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns a specific record */
  participant?: Maybe<ParticipantRecord>;
  /** Returns a specific record */
  partner?: Maybe<PartnerRecord>;
  /** Returns a specific record */
  program?: Maybe<ProgramRecord>;
  /** Returns a specific record */
  programCategory?: Maybe<ProgramCategoryRecord>;
  /** Returns the single instance record */
  start?: Maybe<StartRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  year?: Maybe<YearRecord>;
};


/** The query root for this schema */
type Query_allAboutsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allExhibitionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExhibitionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allExternalLinksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allInternalLinksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allLocationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allParticipantsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ParticipantModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allPartnersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProgramCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProgramCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProgramsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProgramModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allYearsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
};


/** The query root for this schema */
type QueryallAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallExhibitionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExhibitionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExhibitionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallExternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallInternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallLocationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallParticipantsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ParticipantModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ParticipantModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProgramCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProgramCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProgramsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProgramModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallYearsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<YearModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QuerycontactArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryexhibitionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExhibitionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExhibitionModelOrderBy>>>;
};


/** The query root for this schema */
type QueryexternalLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalLinkModelOrderBy>>>;
};


/** The query root for this schema */
type QuerygeneralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryinternalLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
};


/** The query root for this schema */
type QuerylocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>;
};


/** The query root for this schema */
type QuerynewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
type QueryparticipantArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ParticipantModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ParticipantModelOrderBy>>>;
};


/** The query root for this schema */
type QuerypartnerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprogramArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProgramModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprogramCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProgramCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
type QueryyearArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<YearModelOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  sv = 'sv'
}

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type StartFullBleedImageModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Utfallande bild (start_full_bleed_image) */
type StartFullBleedImageRecord = RecordInterface & {
  __typename?: 'StartFullBleedImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headline: Scalars['String'];
  id: Scalars['ItemId'];
  image: FileField;
  link: StartFullBleedImageModelLinkField;
  text: Scalars['String'];
};


/** Block of type Utfallande bild (start_full_bleed_image) */
type StartFullBleedImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Utfallande bild (start_full_bleed_image) */
type StartFullBleedImageRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type StartFullscreenImageModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Stor bild (start_fullscreen_image) */
type StartFullscreenImageRecord = RecordInterface & {
  __typename?: 'StartFullscreenImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headline: Scalars['String'];
  id: Scalars['ItemId'];
  image: FileField;
  link: StartFullscreenImageModelLinkField;
  text: Scalars['String'];
};


/** Block of type Stor bild (start_fullscreen_image) */
type StartFullscreenImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartFullscreenVideoModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Fullbredd video (start_fullscreen_video) */
type StartFullscreenVideoRecord = RecordInterface & {
  __typename?: 'StartFullscreenVideoRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headline: Scalars['String'];
  id: Scalars['ItemId'];
  link: StartFullscreenVideoModelLinkField;
  text: Scalars['String'];
  video: VideoFileField;
};


/** Block of type Fullbredd video (start_fullscreen_video) */
type StartFullscreenVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Fullbredd video (start_fullscreen_video) */
type StartFullscreenVideoRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type StartGalleryModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Bildgalleri (start_gallery) */
type StartGalleryRecord = RecordInterface & {
  __typename?: 'StartGalleryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headline: Scalars['String'];
  id: Scalars['ItemId'];
  images: Array<FileField>;
  link: StartGalleryModelLinkField;
};


/** Block of type Bildgalleri (start_gallery) */
type StartGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartModelContentField = StartFullBleedImageRecord | StartFullscreenImageRecord | StartFullscreenVideoRecord | StartGalleryRecord | StartNewsRecord | StartProgramRecord | StartRandomParticipantRecord | StartTextRecord | StartVideoRecord;

type StartModelContentFieldListListNonNullMultiLocaleField = {
  __typename?: 'StartModelContentFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<StartModelContentField>;
};

/** Block of type Senaste nyheter (start_news) */
type StartNewsRecord = RecordInterface & {
  __typename?: 'StartNewsRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  amount: Scalars['String'];
  id: Scalars['ItemId'];
};


/** Block of type Senaste nyheter (start_news) */
type StartNewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type I programmet (start_program) */
type StartProgramRecord = RecordInterface & {
  __typename?: 'StartProgramRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  amount: Scalars['String'];
  id: Scalars['ItemId'];
};


/** Block of type I programmet (start_program) */
type StartProgramRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Slumpade medverkande (start_random_participant) */
type StartRandomParticipantRecord = RecordInterface & {
  __typename?: 'StartRandomParticipantRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  amount: Scalars['String'];
  id: Scalars['ItemId'];
};


/** Block of type Slumpade medverkande (start_random_participant) */
type StartRandomParticipantRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Startsida (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _allContentLocales?: Maybe<Array<StartModelContentFieldListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: Array<StartModelContentField>;
  id: Scalars['ItemId'];
};


/** Record of type Startsida (start) */
type StartRecord_allContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Startsida (start) */
type StartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Startsida (start) */
type StartRecordcontentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type StartTextModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Text (start_text) */
type StartTextRecord = RecordInterface & {
  __typename?: 'StartTextRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headline: Scalars['String'];
  id: Scalars['ItemId'];
  link: StartTextModelLinkField;
  text: Scalars['String'];
};


/** Block of type Text (start_text) */
type StartTextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Text (start_text) */
type StartTextRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Video (start) (start_video) */
type StartVideoRecord = RecordInterface & {
  __typename?: 'StartVideoRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title: Scalars['String'];
  video: VideoField;
};


/** Block of type Video (start) (start_video) */
type StartVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']>;
};

type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String'];
};

/** Specifies how to filter Structured Text fields */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter text fields */
type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>;
};

type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType'];
  provider: Scalars['String'];
  providerUid: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['IntType'];
};

type VideoFileField = FileFieldInterface & {
  __typename?: 'VideoFileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: UploadVideoField;
  width?: Maybe<Scalars['IntType']>;
};


type VideoFileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type VideoFileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type VideoFileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

/** Block of type Video (video) */
type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title: Scalars['String'];
  video: VideoField;
};


/** Block of type Video (video) */
type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type YearModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<YearModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<YearModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

enum YearModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type År (year) */
type YearRecord = RecordInterface & {
  __typename?: 'YearRecord';
  _allReferencingAbouts: Array<AboutRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAboutsMeta: CollectionMetadata;
  _allReferencingExhibitions: Array<ExhibitionRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingExhibitionsMeta: CollectionMetadata;
  _allReferencingLocations: Array<LocationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLocationsMeta: CollectionMetadata;
  _allReferencingParticipants: Array<ParticipantRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingParticipantsMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingPrograms: Array<ProgramRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProgramsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** Record of type År (year) */
type YearRecord_allReferencingAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingAboutsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingExhibitionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExhibitionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenExhibitionAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingExhibitionsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenExhibitionAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingLocationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLocationAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingLocationsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenLocationAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingParticipantsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ParticipantModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenParticipantAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingParticipantsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenParticipantAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingPartnersMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingProgramsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProgramModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProgramAndYear>;
};


/** Record of type År (year) */
type YearRecord_allReferencingProgramsMetaArgs = {
  through?: InputMaybe<InverseRelationshipFilterBetweenProgramAndYear>;
};


/** Record of type År (year) */
type YearRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

type AllAboutsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllAboutsQuery = { __typename?: 'Query', abouts: Array<{ __typename: 'AboutRecord', id: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, year?: { __typename?: 'YearRecord', id: any, title: string, slug: string } | null }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AboutQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type AboutQuery = { __typename?: 'Query', about?: { __typename: 'AboutRecord', _modelApiKey: string, id: any, title: string, intro: string, slug: string, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, thumb?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, year?: { __typename?: 'YearRecord', id: any, title: string, slug: string } | null, content?: { __typename?: 'AboutModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type MainAboutQueryVariables = Exact<{
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type MainAboutQuery = { __typename?: 'Query', abouts: Array<{ __typename: 'AboutRecord', _modelApiKey: string, id: any, title: string, intro: string, slug: string, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, thumb?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, year?: { __typename?: 'YearRecord', id: any, title: string, slug: string } | null, content?: { __typename?: 'AboutModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }> };

type AllAboutsMenuQueryVariables = Exact<{ [key: string]: never; }>;


type AllAboutsMenuQuery = { __typename?: 'Query', abouts: Array<{ __typename?: 'AboutRecord', title: string, slug: string }> };

type ContactQueryVariables = Exact<{ [key: string]: never; }>;


type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactRecord', id: any, intro?: string | null, slug: string, title?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, content?: { __typename?: 'ContactModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllExhibitionsQueryVariables = Exact<{
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllExhibitionsQuery = { __typename?: 'Query', exhibitions: Array<{ __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type ExhibitionQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type ExhibitionQuery = { __typename?: 'Query', exhibition?: { __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, intro: string, misc?: string | null, slug: string, externalLink?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, thumb?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, participants: Array<{ __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, location?: { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string } } | null, partner: Array<{ __typename?: 'PartnerRecord', id: any, title: string, intro: string, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content?: { __typename?: 'ExhibitionModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type FooterQueryVariables = Exact<{ [key: string]: never; }>;


type FooterQuery = { __typename?: 'Query', footer?: { __typename?: 'GeneralRecord', id: any, email?: string | null, facebook?: string | null, instagram?: string | null, about?: string | null } | null };

type AboutFragment = { __typename: 'AboutRecord', _modelApiKey: string, id: any, title: string, intro: string, slug: string, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, thumb?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, year?: { __typename?: 'YearRecord', id: any, title: string, slug: string } | null, content?: { __typename?: 'AboutModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type AboutFragmentLightFragment = { __typename: 'AboutRecord', id: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, year?: { __typename?: 'YearRecord', id: any, title: string, slug: string } | null };

type ExhibitionFragment = { __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, intro: string, misc?: string | null, slug: string, externalLink?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, thumb?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, participants: Array<{ __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, location?: { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string } } | null, partner: Array<{ __typename?: 'PartnerRecord', id: any, title: string, intro: string, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content?: { __typename?: 'ExhibitionModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ExhibitionFragmentLightFragment = { __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null };

type ImageFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null };

type ImageMediumFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null };

type ImageThumbnailFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null };

type LocationFragment = { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, exhibitions: Array<{ __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, content?: { __typename?: 'LocationModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type LocationFragmentLightFragment = { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string } };

type NewsFragment = { __typename?: 'NewsRecord', id: any, title: string, intro: string, slug: string, _createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content?: { __typename?: 'NewsModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type NewsFragmentLightFragment = { __typename?: 'NewsRecord', id: any, title: string, intro: string, slug: string, _createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null };

type ParticipantFragment = { __typename?: 'ParticipantRecord', _createdAt: any, id: any, name: string, intro: string, slug: string, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string }, exhibitions: Array<{ __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, content?: { __typename?: 'ParticipantModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ParticipantFragmentLightFragment = { __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } };

type PartnerFragment = { __typename?: 'PartnerRecord', _createdAt: any, id: any, title: string, intro: string, slug: string, address?: string | null, city?: string | null, webpage?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string }, content?: { __typename?: 'PartnerModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type PartnerFragmentLightFragment = { __typename?: 'PartnerRecord', id: any, title: string, intro: string, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } };

type ProgramFragment = { __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, time?: string | null, address?: string | null, intro: string, misc?: string | null, slug: string, externalLink?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, thumb: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, location?: { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string } } | null, partipants: Array<{ __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, partner: Array<{ __typename?: 'PartnerRecord', id: any, title: string, intro: string, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content?: { __typename?: 'ProgramModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ProgramFragmentLightFragment = { __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } };

type SiteFragment = { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null };

type VideoFragment = { __typename?: 'VideoFileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, video: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } };

type YearFragment = { __typename?: 'YearRecord', id: any, title: string, slug: string };

type YearFragmentLightFragment = { __typename?: 'YearRecord', id: any, title: string, slug: string };

type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null } };

type AllLocationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllLocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type LocationQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type LocationQuery = { __typename?: 'Query', location?: { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, exhibitions: Array<{ __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, content?: { __typename?: 'LocationModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type MenuQueryVariables = Exact<{
  altLocale?: InputMaybe<SiteLocale>;
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type MenuQuery = { __typename?: 'Query', abouts: Array<{ __typename?: 'AboutRecord', id: any, title: string, slug: string, altSlug: string, year?: { __typename?: 'YearRecord', title: string } | null }>, years: Array<{ __typename?: 'YearRecord', id: any, title: string, slug: string }>, year?: { __typename?: 'YearRecord', id: any, title: string } | null, aboutMeta: { __typename?: 'CollectionMetadata', count: any }, programMeta: { __typename?: 'CollectionMetadata', count: any }, participantsMeta: { __typename?: 'CollectionMetadata', count: any }, partnersMeta: { __typename?: 'CollectionMetadata', count: any }, exhibitionsMeta: { __typename?: 'CollectionMetadata', count: any }, locationsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllNewsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllNewsQuery = { __typename?: 'Query', news: Array<{ __typename?: 'NewsRecord', id: any, title: string, intro: string, slug: string, _createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type NewsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type NewsQuery = { __typename?: 'Query', news?: { __typename?: 'NewsRecord', id: any, title: string, intro: string, slug: string, _createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content?: { __typename?: 'NewsModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllParticipantsQueryVariables = Exact<{
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllParticipantsQuery = { __typename?: 'Query', participants: Array<{ __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type ParticipantQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


type ParticipantQuery = { __typename?: 'Query', participant?: { __typename?: 'ParticipantRecord', _createdAt: any, id: any, name: string, intro: string, slug: string, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string }, exhibitions: Array<{ __typename: 'ExhibitionRecord', _modelApiKey: string, id: any, title: string, startDate?: any | null, endDate?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, content?: { __typename?: 'ParticipantModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllPartnersQueryVariables = Exact<{
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllPartnersQuery = { __typename?: 'Query', partners: Array<{ __typename?: 'PartnerRecord', id: any, title: string, intro: string, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type PartnerQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type PartnerQuery = { __typename?: 'Query', partner?: { __typename?: 'PartnerRecord', _createdAt: any, id: any, title: string, intro: string, slug: string, address?: string | null, city?: string | null, webpage?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string }, content?: { __typename?: 'PartnerModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllProgramsQueryVariables = Exact<{
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllProgramsQuery = { __typename?: 'Query', programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type ProgramQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type ProgramQuery = { __typename?: 'Query', program?: { __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, time?: string | null, address?: string | null, intro: string, misc?: string | null, slug: string, externalLink?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, thumb: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, location?: { __typename?: 'LocationRecord', id: any, title: string, city?: string | null, address?: string | null, intro: string, webpage?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string } } | null, partipants: Array<{ __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, partner: Array<{ __typename?: 'PartnerRecord', id: any, title: string, intro: string, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, _allSlugLocales?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content?: { __typename?: 'ProgramModelContentField', value: any, blocks: Array<{ __typename: 'ButtonRecord', id: any, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }> } | { __typename: 'ImageRecord', id: any, layout: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, title: string, video: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllProgramCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


type AllProgramCategoriesQuery = { __typename?: 'Query', programCategories: Array<{ __typename?: 'ProgramCategoryRecord', id: any, title?: string | null, desc?: string | null }> };

type SiteSearchQueryVariables = Exact<{
  aboutIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  newsIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  programIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  exhibitionIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  participantIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  partnerIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type SiteSearchQuery = { __typename?: 'Query', abouts: Array<{ __typename: 'AboutRecord', _modelApiKey: string, title: string, slug: string, text: string, year?: { __typename?: 'YearRecord', title: string } | null }>, news: Array<{ __typename: 'NewsRecord', _modelApiKey: string, title: string, slug: string, text: string }>, programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, title: string, slug: string, text: string, year: { __typename?: 'YearRecord', title: string } }>, exhibitions: Array<{ __typename: 'ExhibitionRecord', _modelApiKey: string, title: string, slug: string, text: string, year: { __typename?: 'YearRecord', title: string } }>, participants: Array<{ __typename: 'ParticipantRecord', _modelApiKey: string, slug: string, title: string, text: string, year: { __typename?: 'YearRecord', title: string } }>, locations: Array<{ __typename: 'LocationRecord', _modelApiKey: string, title: string, slug: string, text: string, year: { __typename?: 'YearRecord', title: string } }>, partners: Array<{ __typename: 'PartnerRecord', _modelApiKey: string, title: string, slug: string, text: string, year: { __typename?: 'YearRecord', title: string } }> };

type StartQueryVariables = Exact<{ [key: string]: never; }>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', id: any, content: Array<{ __typename: 'StartFullBleedImageRecord', id: any, headline: string, text: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'StartFullscreenImageRecord', id: any, headline: string, text: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'StartFullscreenVideoRecord', id: any, headline: string, text: string, video: { __typename?: 'VideoFileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, video: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } }, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, internalTitle?: string | null, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'StartGalleryRecord', id: any, headline: string, images: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null }>, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'StartNewsRecord', id: any, amount: string } | { __typename: 'StartProgramRecord', id: any, amount: string } | { __typename: 'StartRandomParticipantRecord', id: any, amount: string } | { __typename: 'StartTextRecord', id: any, headline: string, text: string, link: { __typename: 'ExternalLinkRecord', id: any, title: string, url: string } | { __typename: 'InternalLinkRecord', id: any, internalTitle?: string | null, record?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ExhibitionRecord', id: any, slug: string, title: string } | { __typename?: 'LocationRecord', id: any, slug: string, title: string } | { __typename?: 'NewsRecord', id: any, slug: string, title: string } | { __typename?: 'ParticipantRecord', id: any, slug: string, name: string } | { __typename?: 'ProgramRecord', id: any, slug: string, title: string } | null } } | { __typename: 'StartVideoRecord', id: any, title: string, video: { __typename?: 'VideoField', provider: string, providerUid: string, thumbnailUrl: string, url: string } }> } | null };

type StartDataQueryVariables = Exact<{
  newsItems?: InputMaybe<Scalars['IntType']>;
  programItems?: InputMaybe<Scalars['IntType']>;
  date?: InputMaybe<Scalars['Date']>;
  yearId?: InputMaybe<Scalars['ItemId']>;
}>;


type StartDataQuery = { __typename?: 'Query', news: Array<{ __typename?: 'NewsRecord', id: any, title: string, intro: string, slug: string, _createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, programs: Array<{ __typename: 'ProgramRecord', _modelApiKey: string, id: any, title: string, startDate: any, endDate?: any | null, intro: string, time?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, programCategory: { __typename?: 'ProgramCategoryRecord', id: any, title?: string | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }>, participants: Array<{ __typename?: 'ParticipantRecord', id: any, name: string, intro: string, slug: string, _createdAt: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } | null }, year: { __typename?: 'YearRecord', id: any, title: string, slug: string } }> };

type AllYearsQueryVariables = Exact<{
  year?: InputMaybe<Scalars['String']>;
}>;


type AllYearsQuery = { __typename?: 'Query', years: Array<{ __typename?: 'YearRecord', id: any, title: string, slug: string }> };

type YearQueryVariables = Exact<{
  title: Scalars['String'];
}>;


type YearQuery = { __typename?: 'Query', year?: { __typename?: 'YearRecord', id: any, title: string, slug: string } | null };
