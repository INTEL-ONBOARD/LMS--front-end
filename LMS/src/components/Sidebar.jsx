import './Sidebar.css';
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ setSelectedComponent }) => {
    const [selectedTab, setSelectedTab] = useState(1);
    function handleTabChange(selectedComponent , SelectedTab){
        setSelectedComponent(selectedComponent);
        setSelectedTab(SelectedTab);
    }
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>LMS</h2>
                <p>Laundry management system</p>
                <hr className="custom-divider"/>
            </div>

            <div>
            <ul className="menu">
                <p>Overview</p>
                <li onClick={() => handleTabChange("DashboardContent", 1) } >
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 9V4H20V9H13.5ZM4 12V4H10.5V12H4ZM13.5 20V12H20V20H13.5ZM4 20V15H10.5V20H4ZM5 11H9.5V5H5V11ZM14.5 19H19V13H14.5V19ZM14.5 8H19V5H14.5V8ZM5 19H9.5V16H5V19Z"
                        fill="white"/>
                </svg>
                </span> Dashboard
                    {selectedTab === 1 &&
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                              fill="white"/>
                    </svg>
                    }

                </li>
                <li onClick={() => handleTabChange("FaqService", 2) }>
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22.5C6.21 22.5 1.5 17.79 1.5 12C1.5 6.21 6.21 1.5 12 1.5C17.79 1.5 22.5 6.21 22.5 12C22.5 17.79 17.79 22.5 12 22.5ZM12 3C7.035 3 3 7.035 3 12C3 16.965 7.035 21 12 21C16.965 21 21 16.965 21 12C21 7.035 16.965 3 12 3Z"
                            fill="white"/>
                        <path
                            d="M12 6.75C10.335 6.75 9 8.085 9 9.75H10.5C10.5 8.925 11.175 8.25 12 8.25C12.825 8.25 13.5 8.925 13.5 9.75C13.5 11.25 11.25 11.07 11.25 13.5H12.75C12.75 11.82 15 11.625 15 9.75C15 8.085 13.665 6.75 12 6.75Z"
                            fill="white"/>
                        <path
                            d="M11.9998 17.43C12.5134 17.43 12.9298 17.0136 12.9298 16.5C12.9298 15.9864 12.5134 15.57 11.9998 15.57C11.4862 15.57 11.0698 15.9864 11.0698 16.5C11.0698 17.0136 11.4862 17.43 11.9998 17.43Z"
                            fill="white"/>
                        <path
                            d="M9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75C9 10.1642 9.33579 10.5 9.75 10.5Z"
                            fill="white"/>
                        <path
                            d="M12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5C12.75 13.0858 12.4142 12.75 12 12.75C11.5858 12.75 11.25 13.0858 11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25Z"
                            fill="white"/>
                    </svg>
                    </span> FAQ / Service
                    {selectedTab === 2 &&
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                              fill="white"/>
                    </svg>
                    }

                </li>
                <li onClick={() => handleTabChange("Settings", 3) }>
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.9748 1.25C11.5298 1.25 11.1588 1.25 10.8548 1.27C10.544 1.28252 10.2375 1.34673 9.94777 1.46C9.61402 1.59809 9.31075 1.80057 9.05526 2.05589C8.79978 2.3112 8.59709 2.61434 8.45877 2.948C8.31377 3.298 8.27477 3.668 8.25877 4.07C8.25699 4.21698 8.21799 4.36112 8.14542 4.48895C8.07285 4.61678 7.96907 4.72414 7.84377 4.801C7.7146 4.87132 7.5697 4.90775 7.42263 4.90687C7.27556 4.906 7.1311 4.86785 7.00277 4.796C6.64677 4.608 6.30678 4.457 5.93078 4.407C5.57272 4.3599 5.20889 4.38379 4.86007 4.4773C4.51125 4.57081 4.18426 4.73212 3.89777 4.952C3.65517 5.14648 3.44665 5.38001 3.28077 5.643C3.11077 5.897 2.92477 6.218 2.70277 6.603L2.67777 6.647C2.45477 7.032 2.26977 7.353 2.13577 7.627C1.99577 7.913 1.88577 8.195 1.84577 8.507C1.75038 9.22999 1.94605 9.96127 2.38977 10.54C2.62077 10.841 2.92177 11.06 3.26177 11.274C3.38841 11.3491 3.49392 11.4551 3.56842 11.582C3.64293 11.709 3.68399 11.8528 3.68777 12C3.68399 12.1472 3.64293 12.291 3.56842 12.418C3.49392 12.5449 3.38841 12.6509 3.26177 12.726C2.92177 12.94 2.62177 13.159 2.38977 13.46C2.16989 13.7465 2.00859 14.0735 1.91508 14.4223C1.82157 14.7711 1.79768 15.1349 1.84477 15.493C1.88577 15.805 1.99477 16.087 2.13477 16.373C2.26977 16.647 2.45477 16.968 2.67777 17.353L2.70277 17.397C2.92477 17.782 3.11077 18.103 3.28077 18.357C3.45777 18.62 3.64777 18.857 3.89777 19.047C4.18418 19.2671 4.51114 19.4285 4.85996 19.5222C5.20879 19.6159 5.57265 19.64 5.93078 19.593C6.30678 19.543 6.64677 19.393 7.00277 19.204C7.13098 19.1323 7.27525 19.0943 7.42213 19.0934C7.56901 19.0925 7.71372 19.1289 7.84277 19.199C7.96909 19.2749 8.07378 19.382 8.1468 19.51C8.21982 19.638 8.25872 19.7826 8.25978 19.93C8.27478 20.332 8.31378 20.702 8.45977 21.052C8.59786 21.3857 8.80035 21.689 9.05566 21.9445C9.31098 22.2 9.61412 22.4027 9.94777 22.541C10.2378 22.661 10.5378 22.708 10.8548 22.729C11.1588 22.75 11.5298 22.75 11.9748 22.75H12.0248C12.4698 22.75 12.8408 22.75 13.1448 22.73C13.4628 22.708 13.7618 22.661 14.0518 22.54C14.3855 22.4019 14.6888 22.1994 14.9443 21.9441C15.1998 21.6888 15.4025 21.3857 15.5408 21.052C15.6858 20.702 15.7248 20.332 15.7408 19.93C15.7424 19.7828 15.7813 19.6385 15.8539 19.5105C15.9265 19.3825 16.0303 19.275 16.1558 19.198C16.285 19.1278 16.43 19.0916 16.577 19.0926C16.7241 19.0937 16.8685 19.132 16.9968 19.204C17.3528 19.392 17.6928 19.543 18.0688 19.592C18.7918 19.6874 19.523 19.4917 20.1018 19.048C20.3518 18.856 20.5418 18.62 20.7188 18.357C20.8888 18.103 21.0748 17.782 21.2968 17.397L21.3218 17.353C21.5448 16.968 21.7298 16.647 21.8638 16.373C22.0038 16.087 22.1138 15.804 22.1538 15.493C22.2492 14.77 22.0535 14.0387 21.6098 13.46C21.3788 13.159 21.0778 12.94 20.7378 12.726C20.6111 12.6509 20.5056 12.5449 20.4311 12.418C20.3566 12.291 20.3156 12.1472 20.3118 12C20.3118 11.722 20.4638 11.446 20.7378 11.274C21.0778 11.06 21.3778 10.841 21.6098 10.54C21.8297 10.2535 21.991 9.92653 22.0845 9.5777C22.178 9.22888 22.2019 8.86506 22.1548 8.507C22.1077 8.1996 22.0096 7.90219 21.8648 7.627C21.694 7.29478 21.5129 6.96795 21.3218 6.647L21.2968 6.603C21.1141 6.27708 20.9214 5.95692 20.7188 5.643C20.5528 5.38036 20.3443 5.14718 20.1018 4.953C19.8154 4.73294 19.4884 4.57146 19.1396 4.47778C18.7908 4.38409 18.4269 4.36004 18.0688 4.407C17.6928 4.457 17.3528 4.607 16.9968 4.796C16.8686 4.86767 16.7243 4.90572 16.5774 4.9066C16.4305 4.90747 16.2858 4.87114 16.1568 4.801C16.0311 4.72438 15.9269 4.61712 15.854 4.48928C15.7811 4.36143 15.7418 4.21717 15.7398 4.07C15.7248 3.668 15.6858 3.298 15.5398 2.948C15.4017 2.61425 15.1992 2.31097 14.9439 2.05549C14.6886 1.8 14.3854 1.59731 14.0518 1.459C13.7618 1.339 13.4618 1.292 13.1448 1.271C12.8408 1.25 12.4698 1.25 12.0248 1.25H11.9748ZM10.5218 2.845C10.5988 2.813 10.7158 2.784 10.9568 2.767C11.2038 2.75 11.5238 2.75 11.9998 2.75C12.4758 2.75 12.7958 2.75 13.0428 2.767C13.2838 2.784 13.4008 2.813 13.4778 2.845C13.7848 2.972 14.0278 3.215 14.1548 3.522C14.1948 3.618 14.2278 3.769 14.2408 4.126C14.2708 4.918 14.6798 5.681 15.4058 6.1C16.1318 6.519 16.9968 6.492 17.6978 6.122C18.0138 5.955 18.1608 5.908 18.2648 5.895C18.5933 5.85158 18.9257 5.94043 19.1888 6.142C19.2548 6.193 19.3388 6.28 19.4738 6.48C19.6128 6.686 19.7728 6.963 20.0108 7.375C20.2488 7.787 20.4078 8.065 20.5168 8.287C20.6238 8.504 20.6568 8.62 20.6668 8.703C20.7102 9.03157 20.6213 9.36392 20.4198 9.627C20.3558 9.71 20.2418 9.814 19.9398 10.004C19.2678 10.426 18.8118 11.162 18.8118 12C18.8118 12.838 19.2678 13.574 19.9398 13.996C20.2418 14.186 20.3558 14.29 20.4198 14.373C20.6218 14.636 20.7098 14.968 20.6668 15.297C20.6568 15.38 20.6228 15.497 20.5168 15.713C20.4078 15.936 20.2488 16.213 20.0108 16.625C19.7728 17.037 19.6118 17.314 19.4738 17.52C19.3388 17.72 19.2548 17.807 19.1888 17.858C18.9257 18.0596 18.5933 18.1484 18.2648 18.105C18.1608 18.092 18.0148 18.045 17.6978 17.878C16.9978 17.508 16.1318 17.48 15.4058 17.899C14.6798 18.318 14.2708 19.082 14.2408 19.874C14.2278 20.231 14.1948 20.382 14.1548 20.478C14.092 20.6298 13.9998 20.7677 13.8837 20.8839C13.7675 21.0001 13.6296 21.0922 13.4778 21.155C13.4008 21.187 13.2838 21.216 13.0428 21.233C12.7958 21.25 12.4758 21.25 11.9998 21.25C11.5238 21.25 11.2038 21.25 10.9568 21.233C10.7158 21.216 10.5988 21.187 10.5218 21.155C10.37 21.0922 10.2321 21.0001 10.1159 20.8839C9.99972 20.7677 9.9076 20.6298 9.84478 20.478C9.80478 20.382 9.77177 20.231 9.75877 19.874C9.72877 19.082 9.31977 18.319 8.59377 17.9C7.86777 17.481 7.00278 17.508 6.30177 17.878C5.98577 18.045 5.83878 18.092 5.73478 18.105C5.40621 18.1484 5.07385 18.0596 4.81077 17.858C4.74477 17.807 4.66077 17.72 4.52577 17.52C4.33766 17.2272 4.15857 16.9288 3.98878 16.625C3.75077 16.213 3.59177 15.935 3.48277 15.713C3.37577 15.496 3.34277 15.38 3.33277 15.297C3.28936 14.9684 3.3782 14.6361 3.57977 14.373C3.64377 14.29 3.75777 14.186 4.05977 13.996C4.73177 13.574 5.18778 12.838 5.18778 12C5.18778 11.162 4.73177 10.426 4.05977 10.004C3.75777 9.814 3.64377 9.71 3.57977 9.627C3.3782 9.36392 3.28936 9.03157 3.33277 8.703C3.34277 8.62 3.37677 8.503 3.48277 8.287C3.59177 8.064 3.75077 7.787 3.98878 7.375C4.22677 6.963 4.38777 6.686 4.52577 6.48C4.66077 6.28 4.74477 6.193 4.81077 6.142C5.07385 5.94043 5.40621 5.85158 5.73478 5.895C5.83878 5.908 5.98478 5.955 6.30177 6.122C7.00177 6.492 7.86777 6.52 8.59377 6.1C9.31977 5.681 9.72877 4.918 9.75877 4.126C9.77177 3.769 9.80478 3.618 9.84478 3.522C9.97178 3.215 10.2148 2.972 10.5218 2.845Z"
                              fill="white"/>
                    </svg>
                    </span> Settings
                    {selectedTab === 3 &&
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                              fill="white"/>
                    </svg>
                    }

                </li>
            </ul>
            <div className="manage-section">
                <p>Manage</p>
                <ul className="menu">
                    <li onClick={() => handleTabChange("Sales", 4) }>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 15L15 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                <path
                                    d="M15.5 14.5C15.5 14.7652 15.3946 15.0196 15.2071 15.2071C15.0196 15.3946 14.7652 15.5 14.5 15.5C14.2348 15.5 13.9804 15.3946 13.7929 15.2071C13.6054 15.0196 13.5 14.7652 13.5 14.5C13.5 14.2348 13.6054 13.9804 13.7929 13.7929C13.9804 13.6054 14.2348 13.5 14.5 13.5C14.7652 13.5 15.0196 13.6054 15.2071 13.7929C15.3946 13.9804 15.5 14.2348 15.5 14.5ZM10.5 9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5C9.23478 10.5 8.98043 10.3946 8.79289 10.2071C8.60536 10.0196 8.5 9.76522 8.5 9.5C8.5 9.23478 8.60536 8.98043 8.79289 8.79289C8.98043 8.60536 9.23478 8.5 9.5 8.5C9.76522 8.5 10.0196 8.60536 10.2071 8.79289C10.3946 8.98043 10.5 9.23478 10.5 9.5Z"
                                    fill="white"/>
                                <path
                                    d="M2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C22 4.93 22 7.286 22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12Z"
                                    stroke="white" stroke-width="1.5"/>
                            </svg>

                        </span> Sales

                        {selectedTab === 4 &&
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                                  fill="white"/>
                        </svg>
                        }

                    </li>
                    <li onClick={() => handleTabChange("Orders", 5) }>
                        <span>
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 14V11M11 4V1M17 14V11M9 13V17C9 17.5304 8.78929 18.0391 8.41421 18.4142C8.03914 18.7893 7.53043 19 7 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13C1 12.4696 1.21071 11.9609 1.58579 11.5858C1.96086 11.2107 2.46957 11 3 11H7C7.53043 11 8.03914 11.2107 8.41421 11.5858C8.78929 11.9609 9 12.4696 9 13ZM15 3V7C15 7.53043 14.7893 8.03914 14.4142 8.41421C14.0391 8.78929 13.5304 9 13 9H9C8.46957 9 7.96086 8.78929 7.58579 8.41421C7.21071 8.03914 7 7.53043 7 7V3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3ZM21 13V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H15C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17V13C13 12.4696 13.2107 11.9609 13.5858 11.5858C13.9609 11.2107 14.4696 11 15 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13Z"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span> Orders

                        {selectedTab === 5 &&
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                                  fill="white"/>
                        </svg>
                        }

                    </li>
                    <li onClick={() => handleTabChange("Packages", 6) }>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 6H20V8H4V6ZM6 2H18V4H6V2ZM2 10V12H4V20C4.00079 20.5302 4.21176 21.0384 4.58666 21.4133C4.96156 21.7882 5.46981 21.9992 6 22H18C18.5306 21.9995 19.0395 21.7887 19.415 21.4139C19.7906 21.039 20.0024 20.5306 20.004 20L20 12H22V10H2ZM18 20H6V12H18V20Z"
                                    fill="white"/>
                                <path d="M8 17H12V19H8V17Z" fill="white"/>
                            </svg>
                        </span> Packages

                        {selectedTab === 6 &&
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                                  fill="white"/>
                        </svg>
                        }

                    </li>
                    <li onClick={() => handleTabChange("Reports", 7) }>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 19H13M7 19V14M7 19H1.6C1.44087 19 1.28826 18.9368 1.17574 18.8243C1.06321 18.7117 1 18.5591 1 18.4V14.6C1 14.4409 1.06321 14.2883 1.17574 14.1757C1.28826 14.0632 1.44087 14 1.6 14H7M13 19V7M13 19H18.4C18.5591 19 18.7117 18.9368 18.8243 18.8243C18.9368 18.7117 19 18.5591 19 18.4V1.6C19 1.44087 18.9368 1.28826 18.8243 1.17574C18.7117 1.06321 18.5591 1 18.4 1H13.6C13.4409 1 13.2883 1.06321 13.1757 1.17574C13.0632 1.28826 13 1.44087 13 1.6V7M7 14V7.6C7 7.44087 7.06321 7.28826 7.17574 7.17574C7.28826 7.06321 7.44087 7 7.6 7H13"
                                    stroke="white" stroke-width="1.5"/>
                            </svg>

                        </span> Reports

                        {selectedTab === 7 &&
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.05989 6.93997C9.34079 7.22122 9.49857 7.60247 9.49857 7.99997C9.49857 8.39747 9.34079 8.77872 9.05989 9.05997L3.40389 14.718C3.12249 14.9992 2.74089 15.1572 2.34304 15.1571C1.94518 15.157 1.56365 14.9989 1.28239 14.7175C1.00113 14.4361 0.843168 14.0545 0.843262 13.6566C0.843356 13.2588 1.00149 12.8772 1.28289 12.596L5.87889 7.99997L1.28289 3.40397C1.00952 3.1212 0.858143 2.74237 0.861374 2.34907C0.864605 1.95577 1.02218 1.57947 1.30016 1.30123C1.57815 1.02298 1.95429 0.865054 2.34759 0.861452C2.74088 0.85785 3.11986 1.00887 3.40289 1.28197L9.06089 6.93897L9.05989 6.93997Z"
                                  fill="white"/>
                        </svg>
                        }
                    </li>
                </ul>
            </div>
            </div>

            <div className="notification-banner">
                <span className="beta-tag">Beta</span>
                <p>Turn on Your Browser Notifications to get instant updates of Orders and Etc.</p>
                <a href="#">Learn More</a>
            </div>
            <div className="logout">
                <button>Log out
                    <span className="login-image-container">
    <img
        src="https://s3-alpha-sig.figma.com/img/0ef2/6e10/b8ccfa07399a26184c2effcfd859d66d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pS-lAlLDZoFDnHq~43FCCXkIXm41d0PZxDqRkFj~dtt-bb0iJ4u1IzixiMKhFWXnTQnEvN3ERuh7PvOXt0LM7di~iafy7kKntL1n3IFRcPm04mDTnlLnAL2CzMRlOAZMm24t9-D8HQYBq3J1ngww1HwIoym-IRv-umOxMlv7rxbIvsdS7zfsSxwxg6QIQ3DJ20lPBHtkBjU17n0qx-54DN1UHx9NIZ80S7yxzzYeOFJAPieH3xak1cl-3kUpgj6ih72HTlZGB13InXXz8zPraK0xRMrakqsIHB2kt7FOVev8QM8IHz~~63M-Hx3uOnIMl40f0slmwAtf4p5qR8QYEA__"
        alt="Icon Image"/>
</span>

                </button>
            </div>
        </div>
    );
};

export default Sidebar;