let table_body = document.getElementById('body-table')

let flights = [


    {
        time: "08:11",
        destination: "Bamako (BKO)",
        flight: "OX 203",
        gate: "A 01",
        remarks: "Landed-ON TIME[+]"

    },

    {
        time: "13:20",
        destination: "Morroco",
        flight: "EY4219",
        gate: "A 02",
        remarks: "Landed-ON TIME[+]"

    },
    {
        time: "20:21",
        destination: "Malaga (AGP)",
        flight: "OX 203",
        gate: "A 08",
        remarks: "Landed-Delayed"

    },
    {
        time: "18:22",
        destination: "Tangier (TNG)",
        flight: "TK8322",
        gate: "A 01",
        remarks: "Landed-ON TIME[+]"

    },
    {
        time: "22:30",
        destination: "Conakry (CKY)",
        flight: "IB8180",
        gate: "A 08",
        remarks: "Landed-Delayed"

    },
    {
        time: "18:22",
        destination: "Abu Dhabi (AUH)",
        flight: "AT9283",
        gate: "A 10",
        remarks: "Landed-ON TIME[+]"

    }

]

function tables() {


    for (const flight of flights) {
        //with creatElement we spicified the type of element to be created
        const tableRow = document.createElement("tr");

        for (flightDetail in flight) {
            const tableCell = document.createElement("td")
                //tableCell.innerHTML = flight[flightDetail]
            const word = Array.from(flight[flightDetail])

            for (const letter of word) {
                const letterElement = document.createElement('div')
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.append(letterElement)
            }
            tableRow.append(tableCell)
        }


        table_body.append(tableRow);
    }



}

tables()