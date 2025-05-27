// Base URL for the website.
const BASE_URL = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service";
// Endpoint I want to access.
const END_POINT = "/v1/accounting/dts/operating_cash_balance";
// Fields specified on the website.
// I used these fields to get a couple of different datapoints.
const FIELDS = "fields=record_date,account_type,open_month_bal,open_fiscal_year_bal,record_fiscal_year";
// Filters specified on the website.
// I used this filter to get data only after 2016.
const FILTERS = "filter=record_fiscal_year:gte:2016";
// Final URL.
const API_REQUEST_URL = `${BASE_URL}${END_POINT}?${FIELDS}&${FILTERS}`;

// Logs it onto the console.
console.log("API Request URL (No token necessary):", API_REQUEST_URL);

// --API Handler Functions--

// Makes an API request to the
// specified URL, endpoint, etc.
// object_store takes a JS object to store relevant data in. Placeholder until I find anything better.
// object_function calls a function with the object from before.
// is_print takes an argument if it should print request variables for debugging.
function makeRequest(url, object_store, object_function, is_print = false){
    fetch(url).then((request) => {
        // Initial Request
        const request_raw = request;
        const request_json = request_raw.json();
        if (is_print){
            console.log(request_raw);
        }
        return request_json;
    }).then((data) => {
        // Data returned from json.
        if (is_print){
            console.log(data);
        }

        object_store.data = data;
        object_function(data);
    }).catch((error) => {
        console.log("An error occured:", error);
    });
}

// Given a response, update the corresponding HTML.
function updateHTML(response){
    const dataFill = document.querySelector("#data-fill-table");

    // Ensures data is not null before iterating upon it.
    if (!!response.data){
        // For each data in data (yeah, confusing)
        // iterate upon each object in array.
        response.data.data.forEach((e) => {
            // Create a table row and add its table styling.
            const newTableRow = document.createElement("tr");
            newTableRow.classList.add("endpoint_entry");

            // Iterate upon each object property,
            // getting its value and setting it onto a table data row.
            for (let property in e){
                const propertyTableData = document.createElement("td");
                propertyTableData.textContent = e[property];
                newTableRow.appendChild(propertyTableData);
            }

            // Finally append the new row to the table.
            dataFill.appendChild(newTableRow);
        })
    }
}

// Stores an object for holding request data.
const response = {
    data: null,
};

// Makes an API request and attempts to get data.
makeRequest(API_REQUEST_URL, response, updateHTML, true);