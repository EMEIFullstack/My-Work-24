
import styled from "@emotion/styled";
import { Box } from "@mui/material";


export const HomeWrapper = styled(Box)`

p{
    font-size: 16px;
    color: #64757A;
    max-width: 40%;
    padding: 14px 0;
    text-align: center !important;
    margin: 0 auto;
}

h3{
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
}

.span{
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: #00CD64;
    color: #00CD64;
}

.accordion{
    margin-bottom: 15px !important;
    padding: 24px 32px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 60px 78.7px rgba(17, 129, 71, 0.06);
    backdrop-filter: blur(8px);
    border-radius: 30px !important;
    border: 1px solid #1A1C1E;
}

.accordion-summary, .accordion-details{
    padding: 0;
}

h4{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
}

p.para{
    margin: 0;
    text-align: left !important;
    max-width: 100%;
}

img{
    position: relative;
}

.image{
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-6%, -14%);
}

.card{
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #D6E8E8;
    box-shadow: none;
    backdrop-filter: blur(8px);
    border-radius: 30px;
    margin-right: 30px;
    max-width: 100%;
    /* height: 481px; */
}

.card-content{
    padding: 27px 34px;
}

.flex{
    display: flex;
}

.description {
    max-width: 93%;
    margin: 0;
    text-align: left !important;
    padding: 0;
}

.news{
    text-decoration: underline;
    text-decoration-color: #00CD64;
    text-decoration-style: wavy;
}

h5{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin: 19px 0;
}

.date{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #00CD64;
}

.news-section{
    padding: 72px 0;
}

.button{
    display: flex;
    justify-content: center;
}

.btn{
    width: 199px;
    height: 59px;
    background: #00CD64;
    border-radius: 63px;
    border: none;
    cursor: pointer;
    color: #FFF;
    text-transform: capitalize;
}

.btn:hover{
    background-color: #1A1C1E;
    color: #FFF;
    transition: all 0.5s;
}
`





// import styled from "@emotion/styled";
// import { Box } from "@mui/material";

// export const HomeWrapper = styled(Box)`

//     /* --- BASE BUTTON STYLE (Required for your button's shape) --- */
//     .btn {
//         width: 199px;
//         height: 59px;
//         border-radius: 63px;
//         border: none;
//         cursor: pointer;
//         text-transform: capitalize;
//         font-family: inherit;
//         font-weight: 600;
//         font-size: 16px;
//     }

//     /* --- YOUR POST JOB BANNER CSS --- */
//     .post-banner {
//         background: #4CD995;
//         border-radius: 20px;
//         padding: 40px 60px;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         margin-bottom: 60px;
//     }

//     .banner-title {
//         color: #000;
//         font-weight: 800;
//         font-size: 42px;
//         margin-bottom: 0;
//     }

//     .span-white {
//         text-decoration: underline;
//         text-decoration-style: wavy;
//         text-decoration-color: #FFF;
//         color: #FFF;
//     }

//     p.banner-desc {
//         text-align: left !important;
//         max-width: 500px;
//         margin: 15px 0 0 0;
//         padding: 0;
//         color: rgba(0, 0, 0, 0.6);
//         font-size: 16px;
//     }

//     .banner-btn {
//         background: #FFF;
//         color: #000;
//         border: 1px solid #1A1C1E;
//     }

//     .banner-btn:hover {
//         background: #F0F0F0;
//         color: #000;
//         transition: all 0.5s;
//     }
// `;

// // /* --- SEARCH RESULTS SECTION --- */
//     .search-sec {
//         max-width: 800px;
//         margin: 60px auto;
//     }

//     .search-header {
//         margin-bottom: 24px;
//     }

//     .search-title {
//         font-weight: 800;
//         color: #000;
//     }

//     .search-count {
//         color: gray;
//         margin-top: 4px;
//     }

//     .search-cards-wrapper {
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//         margin-bottom: 40px;
//     }

//     .result-card {
//         display: flex;
//         align-items: center;
//         border: 1px solid #EAEAEA;
//         border-radius: 40px;
//         padding: 8px 24px 8px 8px;
//         background: #FFF;
//     }

//     .result-img {
//         width: 140px;
//         height: 90px;
//         object-fit: cover;
//         border-radius: 32px 10px 10px 32px;
//     }

//     .result-text-box {
//         flex-grow: 1;
//         padding-left: 20px;
//     }

//     .company-name {
//         font-weight: 700;
//         color: #000;
//     }

//     .loc-wrap {
//         display: flex;
//         align-items: center;
//         color: gray;
//         margin: 4px 0;
//     }

//     .loc-icon {
//         font-size: 16px;
//         margin-right: 4px;
//     }

//     .loc-address {
//         margin-left: 20px;
//         color: #000;
//     }

//     .arrow-btn {
//         background-color: #00CD64 !important;
//         width: 45px;
//         height: 45px;
//     }

// //     .arrow-icon {
// //         color: #FFF;
// //         font-size: 20px;
// //     }

// //     .pagination-wrap {
// //         display: flex;
// //         justify-content: center;
// //     }

// //     .page-ctrl .MuiPaginationItem-root {
// //         border-color: #EAEAEA;
// //         color: #000;
// //     }

// //     .page-ctrl .MuiPaginationItem-root.Mui-selected {
// //         background-color: #00CD64 !important;
// //         color: white;
// //         border-color: #00CD64;
// //     }



// import styled from "@emotion/styled";
// import { Box } from "@mui/material";

// export const HomeWrapper = styled(Box)`

//     /* --- BASE BUTTON STYLE (Required for your button's shape) --- */
//     .btn {
//         width: 199px;
//         height: 59px;
//         border-radius: 63px;
//         border: none;
//         cursor: pointer;
//         text-transform: capitalize;
//         font-family: inherit;
//         font-weight: 600;
//         font-size: 16px;
//     }

//     /* --- YOUR POST JOB BANNER CSS --- */
//     .post-banner {
//         background: #4CD995;
//         border-radius: 20px;
//         padding: 40px 60px;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         margin-bottom: 60px;
//     }

//     .banner-title {
//         color: #000;
//         font-weight: 800;
//         font-size: 42px;
//         margin-bottom: 0;
//     }

//     .span-white {
//         text-decoration: underline;
//         text-decoration-style: wavy;
//         text-decoration-color: #FFF;
//         color: #FFF;
//     }

//     p.banner-desc {
//         text-align: left !important;
//         max-width: 500px;
//         margin: 15px 0 0 0;
//         padding: 0;
//         color: rgba(0, 0, 0, 0.6);
//         font-size: 16px;
//     }

//     .banner-btn {
//         background: #FFF;
//         color: #000;
//         border: 1px solid #1A1C1E;
//     }

//     .banner-btn:hover {
//         background: #F0F0F0;
//         color: #000;
//         transition: all 0.5s;
//     }

//     /* --- SEARCH RESULTS SECTION --- */
//     .search-sec {
//         max-width: 800px;
//         margin: 60px auto;
//     }

//     .search-header {
//         margin-bottom: 24px;
//     }

//     .search-title {
//         font-weight: 800;
//         color: #000;
//     }

//     .search-count {
//         color: gray;
//         margin-top: 4px;
//     }

//     .search-cards-wrapper {
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//         margin-bottom: 40px;
//     }

//     .result-card {
//         display: flex;
//         align-items: center;
//         border: 1px solid #EAEAEA;
//         border-radius: 40px;
//         padding: 8px 24px 8px 8px;
//         background: #FFF;
//     }

//     .result-img {
//         width: 140px;
//         height: 90px;
//         object-fit: cover;
//         border-radius: 32px 10px 10px 32px;
//     }

//     .result-text-box {
//         flex-grow: 1;
//         padding-left: 20px;
//     }

//     .company-name {
//         font-weight: 700;
//         color: #000;
//     }

//     .loc-wrap {
//         display: flex;
//         align-items: center;
//         color: gray;
//         margin: 4px 0;
//     }

//     .loc-icon {
//         font-size: 16px;
//         margin-right: 4px;
//     }

//     .loc-address {
//         margin-left: 20px;
//         color: #000;
//     }

//     .arrow-btn {
//         background-color: #00CD64 !important;
//         width: 45px;
//         height: 45px;
//     }

//     .arrow-icon {
//         color: #FFF;
//         font-size: 20px;
//     }

//     .pagination-wrap {
//         display: flex;
//         justify-content: center;
//     }

//     .page-ctrl .MuiPaginationItem-root {
//         border-color: #EAEAEA;
//         color: #000;
//     }

//     .page-ctrl .MuiPaginationItem-root.Mui-selected {
//         background-color: #00CD64 !important;
//         color: white;
//         border-color: #00CD64;
//     }
// `;

