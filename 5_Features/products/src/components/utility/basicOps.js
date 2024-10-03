export default function basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize){
       /* Filtering->hiding the elements */
       let filterdArr = products;
       if(searchTerm != ""){
           filterdArr = filterdArr.filter((product)=>{
               let lowerSearchTerm = searchTerm.toLowerCase();
               let lowerTitle = product.title.toLowerCase();
               return lowerTitle.includes(lowerSearchTerm);
               // lowerSearchTerm = mens
           })
       }
   
       /* Sorting -> rearraging */
       let filteredSortedArr = filterdArr;
       if(sortDir != 0){
           //increasion
               if(sortDir == 1){
                       filteredSortedArr = filteredSortedArr.sort(inComparator);
               }else{
                       filteredSortedArr = filteredSortedArr.sort(decComparator)
               }
       }
       /* Categorization*/
       let filteredSortedgroupByArr = filteredSortedArr;
       if(currCategory != "All categoris"){
           filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product)=>{
               return product.category == currCategory
           });
       }

        let totalPages = Math.ceil(filteredSortedgroupByArr.length / pageSize);
        //console.log(totalPages)
       /*********Pagenation*********/
       let sidx = (pageNum - 1) * pageSize;//(1 - 1) * 4 => 0 * 4 => 0
       let eidx = sidx  + pageSize;// 0 + 4 => 4
       //console.log(sidx,eidx);
       filteredSortedgroupByArr = filteredSortedgroupByArr.slice(sidx,eidx);
       //console.log(filteredSortedgroupByArr);

       return {filteredSortedgroupByArr , totalPages };
}

function inComparator(product1,product2){
    if(product1.price > product2.price){
        return 1
    }else{
        return -1
    }
}

function decComparator(product1,product2){
    if(product1.price < product2.price){
        return 1
    }else{
        return -1
    }
}

/*
[0,3]
[4,7]
[8,11]
[12,15]
[16,20]
*/