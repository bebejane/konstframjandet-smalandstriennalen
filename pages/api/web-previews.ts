import { withWebPreviews } from 'dato-nextjs-utils/hoc';

export default withWebPreviews(async ({ item, itemType }) => {

  let path = null;

  const { slug } = item.attributes
  const { api_key } = itemType.attributes

  switch (api_key) {
    case 'start':
      path = `/`
      break;
    case 'about':
      path = `/om/${slug}`
      break;
    case 'program':
      path = `/program/${slug}`
      break;
    case 'participant':
      path = `/medverkande/${slug}`
      break;
    case 'news':
      path = `/nyheter/${slug}`
      break;
    case 'location':
      path = `/platser/${slug}`
      break;
    case 'exhibition':
      path = `/utstallningar/${slug}`
      break;
    case 'exhibition':
      path = `/utstallningar/${slug}`
      break;
    case 'partner':
      path = `/partners/${slug}`
      break;
    case 'contact':
      path = `/kontakt`
      break;
    default:
      break;
  }

  return path
})