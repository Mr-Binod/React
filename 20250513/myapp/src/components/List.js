import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getList } from '../api/List'



const List = () => {
    // data 요청한 데이터가 할당
    // hasnextpage : true or false
    // fetchNextPage 다음페이지의 요청을 호출하는 함수
    // 다음 페이지가 로딩 되는지 여부를 표현하는 bool
    const {data, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey : ['list'],
        queryFn : getList,
        initialPageParam : 1, // 처음에 호출할때 매개변수로 전달할 초기값
        // getNextPageParam 함수의 값을 할당 페이지에서 지금까지 모든 페이지의 내용을 받아서 다음페이지 번호를 반환
        // 여기서 페이지의 수가 적으면 없다는 값ㅇ르 반환해서 처리할수 있다
        getNextPageParam : (lastPage, allPages) => {
            // 다음페이지가 있는지 여부를 판단하기위해서 사용하는 콜백함수]
            return allPages.length < 4 ? allPages.length + 1 : undefined;
            // undefined 를 반환하면 더이상 페이지가 없는 것 요청 X
        }
    })

    useEffect(() => {
        console.log(data)
    }, [data])

    if(!data) return <>...loading</>
  return (
    <div>
        {/* 일부 리스트마 보이고 버튼을 누르면 다름번 몃ㅊ개 까지 보이는 리스트 다름번 리스트의 갯수가  */}
        {data.pages.map((el) => <>
            {el.map((item, index) =>  <div key={'list-' + index}>
                    <div>List : {item.id}</div>
                </div>)}
            </>)}
                  
        <button onClick={() => fetchNextPage()}>{isFetchingNextPage ? '더보기' : hasNextPage ? 'loading' : 'no more data'}</button>
    </div>
  )
}

export default List
