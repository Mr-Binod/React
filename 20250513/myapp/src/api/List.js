import axios from "axios"

export const getList = async ({pageParams = 1}) => {
    const {data : {pageList}} = await axios.get('http://localhost:4000/getList/' + pageParams )
    return pageList;
}


