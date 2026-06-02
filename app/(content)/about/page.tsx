import AboutSection from './aboutSection/aboutSection';
import { sanityFetch } from '@/sanity/lib/live';

const ABOUT_QUERY = `*[
  _type == "about"
]|order(placement asc){_id, label, info}`;

export default async function AboutContent() {
  
  const {data} = await sanityFetch({query: ABOUT_QUERY});
  
  return (
    <AboutSection data={data}/>
  )
}