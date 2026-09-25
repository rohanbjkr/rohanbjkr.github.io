/* =====================================================
   REVENUE DASHBOARD ENGINE
   ===================================================== */


/* -----------------------------------------------------
   GLOBAL VARIABLES
   ----------------------------------------------------- */

let revenueData = [];

let mappingData = {};

let trendChart = null;
let headingChart = null;
let headChart = null;


/* -----------------------------------------------------
   NORMALIZE REVENUE CODE
   ----------------------------------------------------- */

function normalizeCode(value) {

    return String(value ?? "")
        .replace(/,/g, "")
        .replace(/\s/g, "")
        .trim();

}


/* -----------------------------------------------------
   NORMALIZE AMOUNT
   ----------------------------------------------------- */

function parseAmount(value) {

    if (value === null || value === undefined) {
        return 0;
    }

    return Number(
        String(value)
            .replace(/,/g, "")
            .trim()
    ) || 0;

}


/* =====================================================
   YOUR EXCEL XLOOKUP LOGIC
   =====================================================

   Exact equivalent of:

   =XLOOKUP(
       D2,
       code_array,
       name_array,
       XLOOKUP(
           C2,
           code_array,
           name_array,
           XLOOKUP(
               B2,
               code_array,
               name_array,
               "Others",
               0,
               1
           ),
           0,
           1
       ),
       0,
       1
   )

   Logic:

   1. Exact code
   2. First 4 digits
   3. First 3 digits
   4. Others

   ===================================================== */

function getHeading(revenueHeadId) {

    const id = normalizeCode(revenueHeadId);


    // -------------------------------------------------
    // 1. EXACT MATCH
    // -------------------------------------------------

    if (Object.prototype.hasOwnProperty.call(mappingData, id)) {

        return mappingData[id];

    }


    // -------------------------------------------------
    // 2. FOUR DIGIT MATCH
    // -------------------------------------------------

    if (id.length >= 4) {

        const fourDigit =
            id.substring(0, 4);

        if (
            Object.prototype.hasOwnProperty.call(
                mappingData,
                fourDigit
            )
        ) {

            return mappingData[fourDigit];

        }

    }


    // -------------------------------------------------
    // 3. THREE DIGIT MATCH
    // -------------------------------------------------

    if (id.length >= 3) {

        const threeDigit =
            id.substring(0, 3);

        if (
            Object.prototype.hasOwnProperty.call(
                mappingData,
                threeDigit
            )
        ) {

            return mappingData[threeDigit];

        }

    }


    // -------------------------------------------------
    // 4. NO MATCH
    // -------------------------------------------------

    return "Others";

}


/* =====================================================
   LOAD MAPPING
   ===================================================== */

async function loadMapping() {

    const response = await fetch(
        "{{ '/data/revenue_mapping.csv' | relative_url }}"
    );

    if (!response.ok) {

        throw new Error(
            "Could not load revenue_mapping.csv"
        );

    }


    const text = await response.text();


    const result = Papa.parse(text, {

        header: true,

        skipEmptyLines: true

    });


    result.data.forEach(row => {

        const code =
            normalizeCode(row.code);

        const heading =
            String(row.heading || "").trim();


        if (code && heading) {

            mappingData[code] = heading;

        }

    });

}


/* =====================================================
   LOAD REVENUE DATA
   ===================================================== */

async function loadRevenueData() {

    const response = await fetch(
        "{{ '/data/revenue.csv' | relative_url }}"
    );

    if (!response.ok) {

        throw new Error(
            "Could not load revenue.csv"
        );

    }


    const text = await response.text();


    const result = Papa.parse(text, {

        header: true,

        skipEmptyLines: true,

        dynamicTyping: false

    });


    revenueData = result.data

        .map(row => {

            const id =
                normalizeCode(
                    row.REVENUE_HEAD_ID
                );


            return {

                date:
                    String(
                        row.COLLECTION_DATE || ""
                    ).trim(),

                id: id,

                description:
                    String(
                        row.REVENUE_DESC || ""
                    ).trim(),

                amount:
                    parseAmount(
                        row.COLLECTION_AMOUNT
                    ),

                heading:
                    getHeading(id)

            };

        })


        .filter(row => {

            return (
                row.date &&
                row.id &&
                Number.isFinite(row.amount)
            );

        });


    console.log(
        "Revenue observations:",
        revenueData.length
    );

}


/* =====================================================
   INITIALIZE
   ===================================================== */

async function initializeDashboard() {

    try {

        setStatus(
            "Loading revenue data..."
        );


        await loadMapping();

        await loadRevenueData();


        populateHeadingSelector();

        populateHeadSelector();


        updateDashboard();


        setupEventListeners();


        setStatus(
            `${revenueData.length.toLocaleString()} observations loaded`
        );


    } catch (error) {

        console.error(error);

        setStatus(
            "Unable to load revenue data"
        );

    }

}


/* =====================================================
   STATUS
   ===================================================== */

function setStatus(message) {

    const element =
        document.getElementById("dataStatus");

    if (element) {

        element.textContent = message;

    }

}


/* =====================================================
   SELECTORS
   ===================================================== */

function populateHeadingSelector() {

    const select =
        document.getElementById(
            "headingSelect"
        );


    const headings =
        [...new Set(
            revenueData
                .map(row => row.heading)
                .filter(Boolean)
        )]
        .sort(
            (a, b) =>
                a.localeCompare(b)
        );


    headings.forEach(heading => {

        const option =
            document.createElement("option");


        option.value =
            heading;

        option.textContent =
            heading;


        select.appendChild(option);

    });

}


/* =====================================================
   REVENUE HEAD SELECTOR
   ===================================================== */

function populateHeadSelector() {

    const select =
        document.getElementById(
            "headSelect"
        );


    const heads = {};


    revenueData.forEach(row => {

        if (!heads[row.id]) {

            heads[row.id] =
                row.description;

        }

    });


    Object.keys(heads)

        .sort(
            (a, b) =>
                a.localeCompare(
                    b,
                    undefined,
                    {
                        numeric: true
                    }
                )
        )

        .forEach(id => {

            const option =
                document.createElement(
                    "option"
                );


            option.value = id;


            option.textContent =
                `${id} — ${heads[id]}`;


            select.appendChild(option);

        });

}


/* =====================================================
   EVENT LISTENERS
   ===================================================== */

function setupEventListeners() {

    document
        .getElementById("headingSelect")
        .addEventListener(
            "change",
            updateDashboard
        );


    document
        .getElementById("headSelect")
        .addEventListener(
            "change",
            updateDashboard
        );


    document
        .getElementById("periodSelect")
        .addEventListener(
            "change",
            updateDashboard
        );


    document
        .getElementById("resetFilters")
        .addEventListener(
            "click",
            resetFilters
        );

}


/* =====================================================
   RESET
   ===================================================== */

function resetFilters() {

    document
        .getElementById("headingSelect")
        .value = "all";


    document
        .getElementById("headSelect")
        .value = "all";


    document
        .getElementById("periodSelect")
        .value = "monthly";


    updateDashboard();

}


/* =====================================================
   FILTER DATA
   ===================================================== */

function getFilteredData() {

    const heading =
        document.getElementById(
            "headingSelect"
        ).value;


    const head =
        document.getElementById(
            "headSelect"
        ).value;


    return revenueData.filter(row => {

        const headingMatch =
            heading === "all" ||
            row.heading === heading;


        const headMatch =
            head === "all" ||
            row.id === head;


        return (
            headingMatch &&
            headMatch
        );

    });

}


/* =====================================================
   UPDATE EVERYTHING
   ===================================================== */

function updateDashboard() {

    const data =
        getFilteredData();


    updateCards(data);

    updateTrend(data);

    updateHeadingChart(data);

    updateHeadChart(data);

    updateTable(data);

}


/* =====================================================
   SUMMARY CARDS
   ===================================================== */

function updateCards(data) {

    const total =
        data.reduce(
            (sum, row) =>
                sum + row.amount,
            0
        );


    document.getElementById(
        "totalRevenue"
    ).textContent =
        formatMoney(total);


    /* -----------------------------------------------
       Latest date
       ----------------------------------------------- */

    const dates =
        [...new Set(
            data.map(row => row.date)
        )]
        .sort();


    const latestDate =
        dates.length
            ? dates[dates.length - 1]
            : null;


    document.getElementById(
        "latestDate"
    ).textContent =
        latestDate || "—";


    /* -----------------------------------------------
       Latest collection
       ----------------------------------------------- */

    let latestRevenue = 0;


    if (latestDate) {

        latestRevenue =
            data

                .filter(
                    row =>
                        row.date ===
                        latestDate
                )

                .reduce(
                    (sum, row) =>
                        sum + row.amount,
                    0
                );

    }


    document.getElementById(
        "latestRevenue"
    ).textContent =
        formatMoney(
            latestRevenue
        );


    /* -----------------------------------------------
       Number of revenue heads
       ----------------------------------------------- */

    const heads =
        new Set(
            data.map(
                row => row.id
            )
        );


    document.getElementById(
        "headCount"
    ).textContent =
        heads.size.toLocaleString();

}


/* =====================================================
   TREND
   ===================================================== */

function updateTrend(data) {

    const period =
        document.getElementById(
            "periodSelect"
        ).value;


    const grouped = {};


    data.forEach(row => {

        let key;


        if (period === "daily") {

            key = row.date;

        }

        else if (period === "yearly") {

            key =
                row.date.substring(
                    0,
                    4
                );

        }

        else {

            key =
                row.date.substring(
                    0,
                    7
                );

        }


        grouped[key] =
            (grouped[key] || 0) +
            row.amount;

    });


    const labels =
        Object.keys(grouped)
            .sort();


    const values =
        labels.map(
            label =>
                grouped[label]
        );


    if (trendChart) {

        trendChart.destroy();

    }


    trendChart =
        new Chart(

            document.getElementById(
                "revenueTrend"
            ),

            {

                type: "line",


                data: {

                    labels: labels,


                    datasets: [

                        {

                            label:
                                "Revenue",

                            data:
                                values,

                            tension:
                                0.25,

                            pointRadius:
                                period === "daily"
                                    ? 0
                                    : 2

                        }

                    ]

                },


                options: {

                    responsive: true,

                    maintainAspectRatio:
                        false,


                    interaction: {

                        intersect:
                            false,

                        mode:
                            "index"

                    },


                    plugins: {

                        legend: {

                            display:
                                false

                        }

                    },


                    scales: {

                        y: {

                            beginAtZero:
                                true,

                            ticks: {

                                callback:
                                    value =>
                                        formatCompact(
                                            value
                                        )

                            }

                        }

                    }

                }

            }

        );

}


/* =====================================================
   HEADING CHART
   ===================================================== */

function updateHeadingChart(data) {

    const totals = {};


    data.forEach(row => {

        totals[row.heading] =
            (totals[row.heading] || 0) +
            row.amount;

    });


    const entries =
        Object.entries(totals)
            .sort(
                (a, b) =>
                    b[1] - a[1]
            );


    const labels =
        entries.map(
            entry => entry[0]
        );


    const values =
        entries.map(
            entry => entry[1]
        );


    if (headingChart) {

        headingChart.destroy();

    }


    headingChart =
        new Chart(

            document.getElementById(
                "headingChart"
            ),

            {

                type: "bar",


                data: {

                    labels: labels,

                    datasets: [

                        {

                            label:
                                "Revenue",

                            data:
                                values

                        }

                    ]

                },


                options: {

                    responsive: true,

                    maintainAspectRatio:
                        false,


                    indexAxis:
                        "y",


                    plugins: {

                        legend: {

                            display:
                                false

                        }

                    },


                    scales: {

                        x: {

                            ticks: {

                                callback:
                                    value =>
                                        formatCompact(
                                            value
                                        )

                            }

                        }

                    }

                }

            }

        );

}


/* =====================================================
   TOP REVENUE HEADS
   ===================================================== */

function updateHeadChart(data) {

    const totals = {};

    const descriptions = {};


    data.forEach(row => {

        totals[row.id] =
            (totals[row.id] || 0) +
            row.amount;


        descriptions[row.id] =
            row.description;

    });


    const entries =
        Object.entries(totals)

            .sort(
                (a, b) =>
                    b[1] - a[1]
            )

            .slice(
                0,
                15
            );


    const labels =
        entries.map(
            entry =>
                entry[0]
        );


    const values =
        entries.map(
            entry =>
                entry[1]
        );


    if (headChart) {

        headChart.destroy();

    }


    headChart =
        new Chart(

            document.getElementById(
                "headChart"
            ),

            {

                type: "bar",


                data: {

                    labels: labels,

                    datasets: [

                        {

                            label:
                                "Revenue",

                            data:
                                values

                        }

                    ]

                },


                options: {

                    responsive: true,

                    maintainAspectRatio:
                        false,


                    indexAxis:
                        "y",


                    plugins: {

                        legend: {

                            display:
                                false

                        },


                        tooltip: {

                            callbacks: {

                                afterLabel:
                                    function(
                                        context
                                    ) {

                                        const id =
                                            labels[
                                                context.dataIndex
                                            ];


                                        return descriptions[
                                            id
                                        ] || "";

                                    }

                            }

                        }

                    }

                }

            }

        );

}


/* =====================================================
   TABLE
   ===================================================== */

function updateTable(data) {

    const totals = {};

    const descriptions = {};

    const headings = {};


    data.forEach(row => {

        totals[row.id] =
            (totals[row.id] || 0) +
            row.amount;


        descriptions[row.id] =
            row.description;


        headings[row.id] =
            row.heading;

    });


    const entries =
        Object.entries(totals)

            .sort(
                (a, b) =>
                    b[1] - a[1]
            );


    const total =
        entries.reduce(
            (sum, entry) =>
                sum + entry[1],
            0
        );


    const tbody =
        document.getElementById(
            "revenueTableBody"
        );


    tbody.innerHTML = "";


    entries

        .slice(0, 50)

        .forEach(
            (entry, index) => {

                const id =
                    entry[0];

                const amount =
                    entry[1];

                const share =
                    total
                        ? (
                            amount /
                            total *
                            100
                        )
                        : 0;


                const row =
                    document.createElement(
                        "tr"
                    );


                row.innerHTML = `

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        <strong>
                            ${escapeHtml(id)}
                        </strong>
                        <br>
                        <small>
                            ${escapeHtml(
                                descriptions[id] || ""
                            )}
                        </small>
                    </td>

                    <td>
                        ${escapeHtml(
                            headings[id] || ""
                        )}
                    </td>

                    <td>
                        ${formatMoney(amount)}
                    </td>

                    <td>
                        ${share.toFixed(2)}%
                    </td>

                `;


                tbody.appendChild(row);

            }
        );

}


/* =====================================================
   FORMAT MONEY
   ===================================================== */

function formatMoney(value) {

    return "Rs. " +
        new Intl.NumberFormat(
            "en-IN",
            {
                maximumFractionDigits: 0
            }
        ).format(value);

}


/* =====================================================
   COMPACT NUMBER
   ===================================================== */

function formatCompact(value) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            notation:
                "compact",

            maximumFractionDigits:
                1
        }
    ).format(value);

}


/* =====================================================
   ESCAPE HTML
   ===================================================== */

function escapeHtml(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   START APPLICATION
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initializeDashboard
);
