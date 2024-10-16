let arr = ['001: Deepak', '002: Sumit', '003: Prashant', '004: Anit', '005: Meraj']
arr.unshift('006: Rahul')
arr.unshift('007: Aamir')
arr.unshift('008: Sharath')
arr.pop()
function processOrder(arr) {
    for(let i = 0; i < arr.length; i++) {
        
        //splitting from (:)
        let [orderID, customerName] = arr[i].split(':')
        console.log('Processing ${orderID} for ${customerName}')
    }
}
processOrder(arr)