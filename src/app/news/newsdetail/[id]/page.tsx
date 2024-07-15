import News from "@/components/News"

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
const NewsDetail = ({ params }) => {
  const id = params.id
  return <News></News>

}
export default NewsDetail
