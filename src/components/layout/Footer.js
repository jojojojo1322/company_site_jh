import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div
            className="footer-bottom space-between text-xxs invert-order-desktop"
            style={{ alignItems: "flex-end" }}
          >
            <FooterNav />
            <div
              className="footer-copyright"
              style={{ whiteSpace: "pre-wrap" }}
            >
              <p style={{ fontSize: "40px", fontWeight: "600" }}>
                HANKOOK SPECIAL TIRE SALES CO, LTD
              </p>
              <p style={{ fontSize: "25px", fontWeight: "600" }}>
                한국타이어특수판매(주)
              </p>
              {`
Adress : Seoul Yeongdeungpo-gu, Beodeunaru-ro, 33 
Email : wlsghks94@gmail.com\n\n`}
              Copyright @ <a href="/">HANKOOK SPECIAL TIRE SALES CO, LTD </a>
              All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
