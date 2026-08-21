
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

.details-description {
    text-align: left !important;
    max-width: 68%;
}

section.related-section {
    padding: 89px 0;
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

.news-flex{
    display: flex;
    flex-wrap: wrap;
}

.news-card{
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #D6E8E8;
    box-shadow: 0px 60px 78.7px rgba(17, 129, 71, 0.06);
    backdrop-filter: blur(8px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 30px;
    width: calc(91% / 3);
    margin-right: 33px;
    margin-bottom: 33px;
}

img.elipse {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 50%);
}

.parent-box {
    display: inline-flex;
    align-items: baseline;
    gap: 40px;
    padding: 23px 0;
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