import { Link, useParams } from "react-router-dom"
import Content from "../../Components/Content/Content"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import HeaderList from "../../Components/headerInfo/headerInfo"
import "./Page.css"
import Pagination from "../../Components/Pagination/Pagination"

interface Page1Props {}

const Page1: React.FC<Page1Props> = () => {
  const { pageNumber } = useParams<{ pageNumber: string | undefined }>(); // Установка типа параметра как string | undefined
  const parsedPageNumber = parseInt(pageNumber || "1"); // Использование пустой строки в качестве значения по умолчанию

  return (
    <body className="PageBody">
      <Header />
      <HeaderList />
      <Content curPageNumber={parsedPageNumber}/>
      <div className="Pagination"><Pagination pageNumb={parsedPageNumber}/></div>
      <Footer />
    </body>
  )
}

export default Page1
