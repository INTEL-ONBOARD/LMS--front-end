import { useEffect } from "react";

const Reports = () => {

  useEffect(() => {
    // Chart rendering function
    const buildChart = () => {
      const options = {
        chart: {
          height: 300,
          type: "line",
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        series: [
          { name: "Sales", data: [0, 27000, 25000, 27000, 40000] },
        ],
        dataLabels: { enabled: true },
        stroke: {
          curve: "straight",
          width: [4, 4, 4],
          dashArray: [0, 0, 4],
        },
        grid: {
          strokeDashArray: 0,
          borderColor: "#e5e7eb",
          padding: { top: -20, right: 0 },
        },
        xaxis: {
          type: "category",
          categories: [
            "25 January 2023",
            "28 January 2023",
            "31 January 2023",
            "1 February 2023",
            "3 February 2023",
          ],
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            offsetY: 5,
            style: { colors: "#9ca3af", fontSize: "13px", fontFamily: "Inter, ui-sans-serif", fontWeight: 400 },
            formatter: (title) => {
              let t = title;
              if (t) {
                const newT = t.split(" ");
                t = `${newT[0]} ${newT[1].slice(0, 3)}`;
              }
              return t;
            },
          },
        },
        yaxis: {
          min: 0,
          max: 40000,
          tickAmount: 4,
          labels: {
            align: "left",
            style: { colors: "#9ca3af", fontSize: "12px", fontFamily: "Inter, ui-sans-serif", fontWeight: 400 },
            formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          },
        },
        tooltip: {
          custom: function (props) {
            const { categories } = props.ctx.opts.xaxis;
            const { dataPointIndex } = props;
            const title = categories[dataPointIndex].split(" ");
            const newTitle = `${title[0]} ${title[1]}`;
            return `<div class="tooltip"><strong>${newTitle}</strong>: ${props.series[props.seriesIndex][props.dataPointIndex]}</div>`;
          },
        },
        colors: ["#2563EB", "#22d3ee", "#d1d5db"],
      };

      const chart = new ApexCharts(document.querySelector("#hs-single-line-chart"), options);
      chart.render();

      // Return chart instance for cleanup
      return chart;
    };

    // Build chart
    const chart = buildChart();

    // Cleanup function to destroy chart on component unmount
    return () => {
      chart.destroy();
    };
    }, []); // Empty dependency array to run only once after mount


    return (
        <>
        <h2 className="text-xs text-indigo-500 tracking-widest mt-6 font-medium title-font text-center">REPORTS</h2>
        {/*package count starts here */}
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-400 title-font">Packages</h1>
                    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                        <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">All</button>
                        <button className="py-1 px-4 focus:outline-none">Available</button>
                    </div>

                    </div>
                    <div className="flex flex-wrap -m-4">
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BASIC</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 2000</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-red-400 flex flex-col relative overflow-hidden">
                        <span className="bg-red-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">UNAVAILABLE</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">FAMILY</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 3800</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">CUSTOMIZED</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 4500</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 5600</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


                {/*sales per package chart starts here*/}
                <section className="text-gray-600 body-font overflow-hidden">
                    {/* Legend Indicator*/}
                    <div classname="flex justify-center sm:justify-end items-center gap-x-4 mb-3 sm:mb-6">
                    <div classname="inline-flex items-center">
                        <span classname="size-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
                        <span classname="text-[13px] text-gray-600 dark:text-neutral-400">
                        Income
                        </span>
                    </div>
                    <div classname="inline-flex items-center">
                        <span classname="size-2.5 inline-block bg-gray-300 rounded-sm me-2 dark:bg-neutral-700"></span>
                        <span classname="text-[13px] text-gray-600 dark:text-neutral-400">
                        Outcome
                        </span>
                    </div>
                    </div>
                    {/*End Legend Indicator*/}

                    <div id="hs-multiple-bar-charts"></div>
                </section>

                {/*Total income chart starts here*/}
                <section className="text-gray-600 body-font overflow-hidden text-center m-10">
                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-400 title-font">Total income</h1>
                <div id="hs-single-line-chart" className="hs-single-line-chart"></div>
                </section>

        </div>

        </>
    );
}

export default Reports;