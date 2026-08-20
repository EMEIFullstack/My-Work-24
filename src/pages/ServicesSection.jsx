import  { useState } from 'react';
import { Container, Box, Tabs, Tab } from '@mui/material';

// --- Custom Components ---
import WaveTitle from '../components/common/WaveTitle';
import PrimaryButton from '../components/common/PrimaryButton';
import LearnMoreBtn from '../components/common/LearnMoreBtn';

// --- Assets / Images Import ---
import heatingImg from '../assets/heating.png';
import windowsImg from '../assets/windows.png';
import plumbingImg from '../assets/plumbing.png';
import electricityImg from '../assets/electricity.png';
import parquetImg from '../assets/parquet.png';
import wallsImg from '../assets/walls.png';

// --- Services Data Structure ---
// Holds array of service objects mapped to their respective tab indexes (0 to 4)
const tabServices = {
  // Tab 0: "Interior Work" services with target routing paths
  0: [
    { title: 'Heating And Energy', img: heatingImg, path: '/services/heating' },
    { title: 'Windows And Doors', img: windowsImg, path: '/services/windows' },
    { title: 'Plumbing And Sanitary Ware', img: plumbingImg, path: '/services/plumbing' },
    { title: 'Electricity', img: electricityImg, path: '/services/electricity' },
    { title: 'Parquet And Floors', img: parquetImg, path: '/services/floors' },
    { title: 'Walls And Ceilings', img: wallsImg, path: '/services/walls' },
  ],
  1: [], // Tab 1: Exterior Work
  2: [], // Tab 2: Pulizie
  3: [], // Tab 3: Traslochi
  4: [], // Tab 4: Progettazione
};

// --- Sub-Component: Individual Service Card ---
// Renders background image, title, and dynamic LearnMore button for each card item
const CardItem = ({ title, img, height, path }) => (
  <Box
    sx={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '24px',
      height: height, // Dynamic height according to grid column layout
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    }}
  >
    {/* Card Title Header */}
    <Box
      sx={{
        p: 2.5,
        color: '#fff',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: 1.25,
        zIndex: 2,
      }}
    >
      {title}
    </Box>

    {/* Action Button: Passes target path to enable page navigation */}
    <LearnMoreBtn path={path} />
  </Box>
);

// --- Main Component: Services Section ---
const ServicesSection = () => {
  // State to track currently active category tab index (Default: 0 - Interior Work)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box component="section" sx={{ py: 6, width: '100%' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
        
        {/* 1. SECTION TITLE WITH DYNAMIC WAVE EFFECT */}
        <WaveTitle mainTitle="Our" highlightTitle="Services" />

        {/* 2. CATEGORY TABS (Filter buttons to switch between service categories) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 2 }}>
          <Tabs
            value={activeTab}
            onChange={(e, val) => setActiveTab(val)} // Updates active tab state on click
            sx={{
              border: '1px solid #E2E8F0',
              borderRadius: '100px',
              p: '4px',
              minHeight: 'auto',
              backgroundColor: '#fff',
              '& .MuiTabs-indicator': { display: 'none' }, // Hides default underline indicator
            }}
          >
            {['Interior Work', 'Exterior Work', 'Pulizie', 'Traslochi', 'Progettazione'].map((label) => (
              <Tab
                key={label}
                disableRipple
                label={label}
                sx={{
                  borderRadius: '100px',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#222',
                  px: 3,
                  py: 1,
                  minHeight: 'auto',
                  transition: '0.3s',
                  '&.Mui-selected': {
                    backgroundColor: '#00D66C', // Highlight active tab with brand green
                    color: '#fff',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* 3. MASONRY-STYLE FLEXBOX GRID LAYOUT */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            width: '100%',
            maxWidth: '1100px',
            mx: 'auto',
          }}
        >
          {/* Column 1: Tall Single Card (Item 0) */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {tabServices[activeTab]?.[0] && (
              <CardItem
                title={tabServices[activeTab][0].title}
                img={tabServices[activeTab][0].img}
                path={tabServices[activeTab][0].path}
                height="520px"
              />
            )}
          </Box>

          {/* Column 2: Stacked Dual Cards (Item 1 & Item 2) */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tabServices[activeTab]?.[1] && (
              <CardItem
                title={tabServices[activeTab][1].title}
                img={tabServices[activeTab][1].img}
                path={tabServices[activeTab][1].path}
                height="250px"
              />
            )}
            {tabServices[activeTab]?.[2] && (
              <CardItem
                title={tabServices[activeTab][2].title}
                img={tabServices[activeTab][2].img}
                path={tabServices[activeTab][2].path}
                height="250px"
              />
            )}
          </Box>

          {/* Column 3: Asymmetric Stacked Dual Cards (Item 3 & Item 4) */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tabServices[activeTab]?.[3] && (
              <CardItem
                title={tabServices[activeTab][3].title}
                img={tabServices[activeTab][3].img}
                path={tabServices[activeTab][3].path}
                height="310px"
              />
            )}
            {tabServices[activeTab]?.[4] && (
              <CardItem
                title={tabServices[activeTab][4].title}
                img={tabServices[activeTab][4].img}
                path={tabServices[activeTab][4].path}
                height="190px"
              />
            )}
          </Box>

          {/* Column 4: Tall Single Card (Item 5) */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {tabServices[activeTab]?.[5] && (
              <CardItem
                title={tabServices[activeTab][5].title}
                img={tabServices[activeTab][5].img}
                path={tabServices[activeTab][5].path}
                height="520px"
              />
            )}
          </Box>
        </Box>

        {/* 4. CALL TO ACTION BUTTON (Navigates to full services page) */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <PrimaryButton>Show All Services</PrimaryButton>
        </Box>

      </Container>
    </Box>
  );
};

export default ServicesSection;