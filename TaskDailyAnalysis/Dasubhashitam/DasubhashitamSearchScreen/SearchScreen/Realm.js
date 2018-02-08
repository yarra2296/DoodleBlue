import Realm from 'realm';

let historyData = new Realm({
    schema: [{
        name: 'historyData',
        properties: {
            name: 'string'
        }
    }]
});

export function getSearchHistory() {
    const length = historyData.objects('historyData').length
    console.log("length check values", length)
    console.log("historyData of values in realm:",historyData.objects('historyData'))
    const a = historyData.objects('historyData').slice(length-3,length)
    const sorted = a.reverse()
    return sorted;
}

export function saveNewSearch(newObject) {
    historyData.write(() => {
        historyData.create('historyData', newObject);
    });
}

export function deletehistory() {
    const delval = historyData.objects('historyData')
    historyData.write(() => {
        historyData.delete(delval)
    })
}

export function deletehistoryvalue(obj) {
    const lengthvalue = historyData.objects('historyData').length
    const data = historyData.objects('historyData').slice(lengthvalue-3,lengthvalue)
    const deletingvalue = data.filtered("name contains '"+obj+"'")
    alert(deletingvalue)
    historyData.write((deletingvalue) => {
        historyData.delete(deletingvalue)
    })
}