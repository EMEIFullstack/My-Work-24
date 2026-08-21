import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SearchWrapper = styled(Box)`
    /* --- SEARCH RESULTS SECTION --- */
    .search-sec {
        max-width: 800px;
        margin: 60px auto;
    }

    .search-header {
        margin-bottom: 24px;
    }

    .search-title {
        font-weight: 800;
        color: #000;
    }

    .search-count {
        color: gray;
        margin-top: 4px;
    }

    .search-cards-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
    }

    .result-card {
        display: flex;
        align-items: center;
        border: 1px solid #EAEAEA;
        border-radius: 24px; 
        padding: 0 24px 0 0; 
        background: #FFF;
        overflow: hidden; 
    }

    .result-img {
        width: 220px; 
        height: 130px; 
        object-fit: cover;
    }

    .result-text-box {
        flex-grow: 1;
        padding-left: 24px; 
    }

    .company-name {
        font-weight: 700;
        color: #000;
    }

    .loc-wrap {
        display: flex;
        align-items: center;
        color: gray;
        margin: 4px 0;
    }

    .loc-icon {
        font-size: 16px;
        margin-right: 4px;
    }

    .loc-address {
        margin-left: 20px;
        color: #000;
    }

    .arrow-btn {
        background-color: #00CD64 !important;
        width: 45px;
        height: 45px;
    }

    .arrow-icon {
        color: #FFF;
        font-size: 20px;
    }

    .pagination-wrap {
        display: flex;
        justify-content: center;
    }

    .page-ctrl .MuiPaginationItem-root {
        border-color: #EAEAEA;
        color: #000;
    }

    .page-ctrl .MuiPaginationItem-root.Mui-selected {
        background-color: #00CD64 !important;
        color: white;
        border-color: #00CD64;
    }
`;