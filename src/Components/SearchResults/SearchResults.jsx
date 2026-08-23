import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Pagination,
  IconButton,
  styled,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import SearchBar from "../SearchBar/SearchBar";

import img1 from "../../assets/work1.png";
import img2 from "../../assets/work2.png";
import img3 from "../../assets/work3.png";
import img4 from "../../assets/work4.png";
import img5 from "../../assets/work5.png";
import img6 from "../../assets/work6.png";

const primaryGreen = "#00c853";
const textDark = "#121212";
const textGray = "#6c757d";
const borderColor = "#eef2f5";



const sectionData = {
  header: {
    title: "Search Result",
    subtitle: "30 Results Found",
  },
  
  items: Array.from({ length: 30 }).map((_, index) => {
    const images = [img1, img2, img3, img4, img5, img6];
    return {
      id: index + 1,
      image: images[index % 6],
      companyName: `MY WORK ${index + 1}`,
      address: `6391 Elgin St. Celina, Delaware 10299`,
    };
  }),
};


const SearchWrapper = styled(Box)`
  padding: 60px 0;
  background-color: #ffffff;
  width: 100%;
  
  /* 1. Added Montserrat font here so it applies to the whole component! */
  font-family: "Montserrat", sans-serif; 

  .search-header {
    margin-bottom: 24px;
  }

  .search-title {
    font-weight: 700;
    color: ${textDark};
    margin-bottom: 8px;
  }

  .search-count {
    color: ${textGray};
  }

  .search-cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .result-card {
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid ${borderColor};
    border-radius: 16px;
    background: #ffffff;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
    }
  }

  .result-img {
    width: 140px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
  }

  .result-text-box {
    margin-left: 20px;
    flex-grow: 1;
  }

  .company-name {
    font-weight: 700;
    font-size: 16px;
    color: ${textDark};
    margin-bottom: 8px;
  }

  .loc-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${textGray};
    margin-bottom: 4px;
  }

  .loc-icon {
    font-size: 18px;
  }

  .loc-address {
    color: ${textGray};
    font-size: 13px;
  }

  .arrow-btn {
    background-color: ${primaryGreen};
    color: #ffffff;
    margin-left: 16px;
    
    &:hover {
      background-color: #00b248;
    }
  }

  .pagination-wrap {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`;



const SearchResults = () => {
  const { header, items } = sectionData;
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <SearchWrapper mt={5}> 
      <Container>
        <Box>
          


          <Box 
            sx={{
              width: "100vw", 
              position: "relative", 
              left: "50%", 
              transform: "translateX(-50%)", 
              height: { xs: "300px", sm: "400px", md: "500px" }, 
              mb: 5,
              mt: "-80px"
         
            }}
          >
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927764!2d88.2649507963353!3d22.535406374567295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
       








<Box 
            sx={{
              display: "flex",           
              justifyContent: "center",  
              mt: "-70px",               
              position: "relative",      
              zIndex: 10,              
              mb: 6                    
            }}
          >
            <SearchBar />
          </Box>
          
          
          <Box className="search-header">
            <Typography variant="h5" className="search-title">
              {header.title}
            </Typography>
            <Typography variant="body2" className="search-count">
              {header.subtitle}
            </Typography>
          </Box>

          <Box className="search-cards-wrapper">
            {currentItems.map((item) => (
              <Box key={item.id} className="result-card">
                
                <img src={item.image} alt="work" className="result-img" />
                
                <Box className="result-text-box">
                  <Typography variant="subtitle1" className="company-name">
                    {item.companyName}
                  </Typography>
                  <Box className="loc-wrap">
                    <LocationOnOutlinedIcon className="loc-icon" />
                    <Typography variant="caption" className="loc-label">
                      Project Location
                    </Typography>
                  </Box>
                  <Typography variant="body2" className="loc-address">
                    {item.address}
                  </Typography>
                </Box>

                <IconButton className="arrow-btn">
                  <ArrowOutwardIcon className="arrow-icon" />
                </IconButton>
                
              </Box>
            ))}
          </Box>

          <Box className="pagination-wrap">
            <Pagination
              count={Math.ceil(items.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="circular"
              className="page-ctrl"
            />
          </Box>

        </Box>
      </Container>
    </SearchWrapper>
  );
};

export default SearchResults;