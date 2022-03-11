import {useState} from "react";
import {useGetSearchQuery} from "../../redux/services/search.service";
import SingleCard from "../SingleCard";
import ReactPaginate from "react-paginate";
import {SkeletonCard} from "../SkeletonCard";

const AppScreen = ({searchBy}) => {
  const [page, setPage] = useState(1)
  const {data, isError, error, isLoading} = useGetSearchQuery({
    page,
    count: 10
  });

  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  };

  const filteredData = data?.results?.filter(e => {
    return e.login.username.includes(searchBy);
  });

  if (isError || error) {
    return <section><h1>{error || 'Oops! something went wrong'}</h1></section>
  }

  if (isLoading) {
    return <section>
      <div className="container">
        <div className="all-cards">
          <SkeletonCard/>
          <SkeletonCard/>
        </div>
      </div>
    </section>
  }

  return <section>
    <div className="container">
      <div className="all-cards">
        {
          (filteredData.length > 0) ? 
            filteredData.map((singleData, key) => <SingleCard key={key} data={singleData}/>)
            :
            <section><h1>No results found</h1></section>
        }
      </div>
      <div className="text-center">
        <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={100}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  </section>
}

export default AppScreen
