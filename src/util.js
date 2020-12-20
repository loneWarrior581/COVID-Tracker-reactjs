export const sortData =(data)=>{
    const sortedData=[...data];
    sortedData.sort((a,b)=>{
        if(a.cases>b.cases){//if this condition is there then do not sort this else sort this 
            return -1;
        }
        else{
            return 1;
        }
    })
    return sortedData;
}