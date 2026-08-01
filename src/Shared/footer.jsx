import React from "react";
import "./footer.scss";

import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
} from "@mui/material";

import {
  Facebook,
  Instagram,
  X,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="footer">

      <Container maxWidth="xl">

        <Box className="footer__top">

          {/* Logo */}

          <Box className="footer__logo">

            <Typography variant="h4">
              MyWork<span className="green">24</span>
            </Typography>

          </Box>

          {/* For Bidders */}

          <Box className="footer__column">

            <Typography className="footer__heading">
              For Bidders
            </Typography>

            <Link href="#">
              Services
            </Link>

            <Link href="#">
              Frequently Asked Questions
            </Link>

            <Link href="#">
              News
            </Link>

          </Box>

          {/* For Craftsmen */}

          <Box className="footer__column">

            <Typography className="footer__heading">
              For Craftsmen
            </Typography>

            <Link href="#">
              Frequently Asked Questions
            </Link>

            <Link href="#">
              Artisan Subscription
            </Link>

          </Box>

          {/* Questions */}

          <Box className="footer__column">

            <Typography className="footer__heading">
              Questions
            </Typography>

            <Link href="#">
              About Us
            </Link>

            <Link href="#">
              Contact Us
            </Link>

            <Stack
              direction="row"
              spacing={2}
              className="footer__social"
            >
              <Facebook />

              <Instagram />

              <X />
            </Stack>

          </Box>

        </Box>

      </Container>

      <Box className="footer__bottom">

        <Container maxWidth="xl">

          <Box className="footer__bottom-wrapper">

            <Typography className="footer__copyright">
              © Copyright 2024 by SUISSEPAK LOGISTIC Sagl.
              All rights reserved.
            </Typography>

            <Box className="footer__right">

              <Link href="#">
                Terms and Conditions
              </Link>

              <Link href="#">
                Privacy Policy
              </Link>

              <Box className="footer__language">

                <Typography>English</Typography>

                <Typography>•</Typography>

                <Typography>French</Typography>

                <Typography>•</Typography>

                <Typography>Italian</Typography>

              </Box>

            </Box>

          </Box>

        </Container>

      </Box>

    </Box>
  );
};

export default Footer;