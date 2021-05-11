import { gqlClient } from "./API.js";

gqlClient
    .query({
        query: gql`
            query GetRates {
            rates(currency: "USD") {
                currency
            }
            }
        `
        })
.then(result => console.log(result));