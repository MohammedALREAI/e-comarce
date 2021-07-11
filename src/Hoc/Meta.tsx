import { Helmet } from 'react-helmet-async'



interface IMeta {
  title: string,
  description?:string
}
export const Meta = ({ title, description }: IMeta) => {
     return (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
     )
}
