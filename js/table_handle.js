//function to update table
function updateTable(headers,dataset,tableId){
    let dataSetTable = "";
    for(let i=0;i<dataset[0].length;i++){
        dataSetTable += `<tr>
        <td>${i+1}</td>
        <td>${dataset[0][i]}</td>
        <td>${dataset[1][i]}</td>
        <td>${dataset[2][i]}</td>
        </tr>`;
    }
    let newTableContent = `
    <table class="table table-striped table-hover">
        <tr>
        <th>#</th>
        <th>${headers[0]}</th>
        <th>${headers[1]}</th>
        <th>${headers[2]}(${dataset[3]})</th>
        </tr>
        ${dataSetTable}
    </table>`;
    document.getElementById(tableId).innerHTML = newTableContent;
}