import React, { useEffect } from 'react'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { getCount } from '../api/count';
import { setCount } from '../api/count';

const Count = () => {
    const queryClient = useQueryClient();
    // useQuery is for reading and useMutatation is for writing post
    // useQuery 서버 상태의 관리를 하는 기능을 제공하는 함수 데이터의 조회의 목적을 가지고있다
    // 서버 샅태의 조회 로딩 응답받은 데이터 상태 관리
    const {data, isLoading, refetch} = useQuery({
        queryKey : ["count"],  // 캐시 데이터의 고유 식별자
        // queryfn : async () => {    // 비동기 처리의 로직을 가지고 있는 api 요청 함수
        // }
        queryFn : getCount,
        refetchOnMount : true, // 최초에 요청을 실행할것이지 추가 속성 기본속성 이후에 추가속성도 쿼리를 호춯라때 작성할수 있다
        refetchOnWindowFocus : false, // 재요청을 보내는데 다른 창 혹은 다른 탭을 다녀오면 재요청을 보낼것인지
        enabled : true, // 재요청을 수동으로 처리할것인지 아닌것인지.
        retry : 10

    });
    console.log(data)
    // 루틴 최초에 요청을 보내소 캐시 저장 -> 점점 썩어가 데이터가 -> 썩으면 재요청(도중에는 이전 케시 데이터는 보여주고 있는 상태)
    //  -> 백그라운드에서 캐시 업데이트 -> 서버상태 업데이트
    // 캐시 식별자는 캐시 무효화에서도 사용된다.


    // useMutatation is for writing for post request 
    // 요청하는 시점 데이터 있고 데이터를 요펑객체에 담아서 요청
    const mutation = useMutation({
        // 요청 함수를 
        // 요청 함수를 전달하는 키
        mutationFn : setCount,
        onSuccess : () => {
            // 여기서 리패치를 하던가 혹은 캐시 무효화화
            console.log('성공')
            
            // query update
            // queryClient.invalidateQueries({queryKey : ['count']})
            refetch()
        },
        onError : () => {
            console.log('error')
        },
        onSettled : () => {
            console.log('final processing logic')
        },
        onMutate : (data) => {
            // 전달한 매개변수를 받는 콜백 함수
            console.log('onMutate :', data )
            
        }
    })

    useEffect(() => {
        console.log(data)
    }, [data])
    if(isLoading) return <>...Loading</>
    
    return (
        <div>
            count : {data.count || 0}
            <button onClick={() => {mutation.mutate(1)}}>증가</button>
        </div>
    )
}

export default Count
