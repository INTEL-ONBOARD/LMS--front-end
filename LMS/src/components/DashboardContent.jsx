import "./DashboardContent.css";
import React, { useEffect } from "react";

{/*for pie chart */}
const getPieChartOptions = () => ({
  series: [52.8, 26.8, 20.4],
  colors: ["#1C64F2", "#16BDCA", "#9061F9"],
  chart: {
    height: 420,
    width: "100%",
    type: "pie",
  },
  stroke: {
    colors: ["white"],
  },
  plotOptions: {
    pie: {
      labels: {
        show: true,
      },
      size: "100%",
      dataLabels: {
        offset: -25,
      },
    },
  },
  labels: ["Completed", "In progress", "Unassigned"],
  dataLabels: {
    enabled: true,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  legend: {
    position: "bottom",
    fontFamily: "Inter, sans-serif",
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
});

{/*for graph chart */}
const graphOptions = {
    // set grid lines to improve the readability of the chart, learn more here: https://apexcharts.com/docs/grid/
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      },
    },
    series: [
      {
        name: "Developer Edition",
        data: [1500, 1418, 1456, 1526, 1356, 1256],
        color: "#1A56DB",
      },
      {
        name: "Designer Edition",
        data: [643, 413, 765, 412, 1423, 1731],
        color: "#7E3BF2",
      },
    ],
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: true
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return 'Rs/-' + value;
        }
      }
    },
    }




const DashboardContent = () => {

    {/*for pie chart */}
  useEffect(() => {
    if (typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(document.getElementById("pie-chart"),getPieChartOptions()
      );
      chart.render();
    }

    if (document.getElementById("grid-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("grid-chart"), graphOptions);
        chart.render();
        }
  }, []);

  return (
    <>
        {/*
          <div className="flex flex-col text-center w-full mb-20">
            date
          </div>
        */}
        
      <h2 className="text-xs text-indigo-500 tracking-widest mt-6 font-medium title-font mb-5 text-center">DASHBOARD</h2>
        
      {/*dashboard grid starts here*/}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mt-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div>
                  <i className="gridline-icon fi fi-rr-envelope"></i>
                </div>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Reviews</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-customer-care"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Customers</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-employee-man"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  200
                </h2>
                <p className="leading-relaxed">Employees</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-benefit-porcent"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">Sales</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-order-history"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
          {/*notification starts here*/}
      <div className="border-2 border-gray-200 rounded-lg shadow m-5 p-5">
        <h5 className="mb-4 mt-2 ml-4 text-2xl font-bold tracking-tight text-gray-900">Notifications</h5>
          <div className="max-w-screen-xl p-6 bg-gray-300 bg-opacity-5 border-2 border-gray-100 rounded-lg mb-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Laundry Maintenence Notice</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Ignore
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
          <div className="max-w-screen-xl p-6 bg-gray-300 bg-opacity-5 border-2 border-gray-100 rounded-lg mb-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Check Bulleting board</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Ignore
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>

      

      <div className="flex w-full gap-8">
      {/* Pie chart */}
      <div className="max-w-sm w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow p-4 md:p-6">
        <div className="flex justify-between items-start w-full">
          <div className="flex-col items-center">
            <div className="flex items-center mb-1">
              <h5 className="text-xl font-bold leading-none text-gray-900 me-1">
                Total Laundry Orders
              </h5>
              <svg
                data-popover-target="chart-info"
                data-popover-placement="bottom"
                className="w-3.5 h-3.5 text-gray-500  hover:text-gray-900  cursor-pointer ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
              </svg>
              <div
                data-popover
                id="chart-info"
                role="tooltip"
                className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 "
              >
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-gray-900 ">
                    Activity growth - Incremental
                  </h3>
                  <p>
                    Report helps navigate cumulative growth of community
                    activities. Ideally, the chart should have a growing trend,
                    as stagnating chart signifies a significant decrease of
                    community activity.
                  </p>
                  <h3 className="font-semibold text-gray-900 ">Calculation</h3>
                  <p>
                    For each date bucket, the all-time volume of activities is
                    calculated. This means that activities in period n contain
                    all activities up to period n, plus the activities generated
                    by your community in period.
                  </p>
                  <a
                    href="#"
                    className="flex items-center font-medium text-blue-600   hover:text-blue-700 hover:underline"
                  >
                    Read more{" "}
                    <svg
                      className="w-2 h-2 ms-1.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
            <button
              id="dateRangeButton"
              data-dropdown-toggle="dateRangeDropdown"
              data-dropdown-ignore-click-outside-className="datepicker"
              type="button"
              className="inline-flex items-center text-blue-700  font-medium hover:underline"
            >
              31 Nov - 31 Dev{" "}
              <svg
                className="w-3 h-3 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dateRangeDropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-96 "
            >
              <div className="p-3" aria-labelledby="dateRangeButton">
                <div
                  date-rangepicker
                  datepicker-autohide
                  className="flex items-center"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      name="start"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                      placeholder="Start date"
                    />
                  </div>
                  <span className="mx-2 text-gray-500 ">to</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      name="end"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="End date"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              id="widgetDropdownButton"
              data-dropdown-toggle="widgetDropdown"
              data-dropdown-placement="bottom"
              type="button"
              className="inline-flex items-center justify-center text-gray-500 w-8 h-8  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm"
            >
              <svg
                className="w-3.5 h-3.5 text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Open dropdown</span>
            </button>
            <div
              id="widgetDropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="widgetDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 "
                  >
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 21"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
                      />
                    </svg>
                    Edit widget
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 "
                  >
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>
                    Download data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 "
                  >
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                      />
                    </svg>
                    Add to repository
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 "
                  >
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                    </svg>
                    Delete widget
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6" id="pie-chart"></div>

        <div className="grid grid-cols-1 items-center border-gray-200 border-t  justify-between">
          <div className="flex justify-between items-center pt-5">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              className="text-sm font-medium text-gray-500  hover:text-gray-900 text-center inline-flex items-center "
              type="button"
            >
              Last 7 days
              <svg
                className="w-2.5 m-2.5 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="lastDaysdropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="py-2 text-sm text-gray-700 :text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Yesterday
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Today
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Last 7 days
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Last 30 days
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Last 90 days
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700  hover:bg-gray-100 px-3 py-2"
            >
              Order Analysis
              <svg
                className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
        
        {/*graph goes here */}
        <div className="max-w-sm w-full h-full bg-white rounded-lg shadow p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">Rs/- 12,423</h5>
          <p className="text-base font-normal text-gray-500">Sales this week</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center">
          23%
          <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>
      <div id="grid-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t  justify-between mt-5">
        <div className="flex justify-between items-center pt-5">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 text-center inline-flex items-center"
            type="button">
            Last 7 days
            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Yesterday</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Today</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 7 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 30 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 90 days</a></li>
            </ul>
          </div>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 hover:bg-gray-100 px-3 py-2">
            Sales Report
            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>

    </>
  );
};

export default DashboardContent;
