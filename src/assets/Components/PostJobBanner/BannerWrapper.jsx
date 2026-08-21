import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BannerWrapper = styled(Box)`
    /* --- BASE BUTTON STYLE --- */
    .btn {
        width: 199px;
        height: 59px;
        border-radius: 63px;
        border: none;
        cursor: pointer;
        text-transform: capitalize;
        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
    }

    /* --- POST JOB BANNER CSS --- */
    .post-banner {
        background: #4CD995;
        border-radius: 20px;
        padding: 40px 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    .banner-title {
        color: #000;
        font-weight: 800;
        font-size: 42px;
        margin-bottom: 0;
    }

    .span-white {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: #FFF;
        color: #FFF;
    }

    p.banner-desc {
        text-align: left !important;
        max-width: 500px;
        margin: 15px 0 0 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.6);
        font-size: 16px;
    }

    .banner-btn {
        background: #FFF;
        color: #000;
        border: 1px solid #1A1C1E;
    }

    .banner-btn:hover {
        background: #F0F0F0;
        color: #000;
        transition: all 0.5s;
    }
`;