import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import logo_black from "../../public/assets/logo_black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LoginSignupModal from "../modals/loginSignupModal";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [categorySelected, setCategorySelected] = useState("buy");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [showFilter, setShowFilter] = useState(false);
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [open, setOpen] = useState();
  const onCloseModal = () => setOpen(false);
  let listener = null;

  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  };

  useEffect(() => {
    console.log("PAGE CHANGED")
    console.log("path: ", router.pathname);
    if (router.pathname === "/map") {
      setIsNavbarVisibleFromTop(true);
      console.log("YES");
    }
    if (router.pathname !== "/map"){
      setIsNavbarVisibleFromTop(false);
    }
  }, [router.pathname]);

  const handleModal = () => {
    setOpen(true);
  };

  console.log(isNavbarVisisbleFromTop);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 600) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
      if (scrolled >= 10) {
        if (backgroundColor !== "opaque") {
          setBackgroundColor("opaque");
        }
      } else {
        if (backgroundColor !== "transparent") {
          setBackgroundColor("transparent");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  return (
    <div
      className={
        isNavbarVisisbleFromTop
          ? classes.navbar_body_opaque
          : backgroundColor === "opaque"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <LoginSignupModal open={open} onCloseModal={onCloseModal} />
      <div
        className={
          isNavbarVisisbleFromTop
            ? classes.filter_panel
            : showFilter
            ? classes.filter_panel
            : classes.filter_panel_hidden
        }
      >
        <div className={classes.filter_panel_content}>
          <div className={classes.btns_container}>
            <div
              onClick={() => {
                handleCategorySelected("buy");
              }}
              className={classes.filter_panel_btn}
            >
              <p
                className={
                  categorySelected === "buy"
                    ? classes.filter_panel_btn_label_selected
                    : classes.filter_panel_btn_label_unselected
                }
              >
                BUY
              </p>
            </div>
            <div className={classes.divider} />
            <div
              onClick={() => {
                handleCategorySelected("rent");
              }}
              className={classes.filter_panel_btn}
            >
              <p
                className={
                  categorySelected === "rent"
                    ? classes.filter_panel_btn_label_selected
                    : classes.filter_panel_btn_label_unselected
                }
              >
                RENT
              </p>
            </div>
            <div className={classes.divider} />
            <div
              onClick={() => {
                handleCategorySelected("invest");
              }}
              className={classes.filter_panel_btn}
            >
              <p
                className={
                  categorySelected === "invest"
                    ? classes.filter_panel_btn_label_selected
                    : classes.filter_panel_btn_label_unselected
                }
              >
                INVEST
              </p>
            </div>
          </div>
          <div className={classes.search_bar}>
            <div className={classes.search_category}>
              <p>CITY</p>
              <h3>BALAKAN MOUNTAINS</h3>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>LOCATION</p>
              <h3>SOUTH EASTERN EUROPE</h3>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>PROPERTY TYPE</p>
              <h3>PRIVATE HOUSE</h3>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>PRICE RANGE</p>
              <h3>$40000 - $60000</h3>
            </div>
            <div className={classes.search_icon}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faSearch}
                size={"1x"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.left_panel}>
        <Link href={"/"}>
          <div className={classes.logo}>
            <Image
              src={
                isNavbarVisisbleFromTop
                  ? logo_black
                  : backgroundColor === "transparent"
                  ? logo
                  : logo_black
              }
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className={classes.right_panel}>
        <Link href={"/about"}>
          <p>ABOUT</p>
        </Link>
        <Link href={"/services"}>
          <p>SERVICES</p>
        </Link>

        <Link href={"/map"}>
          <p>BUY</p>
        </Link>
        <Link href={"#"}>
          <p>SELL</p>
        </Link>
        <Link href={"#"}>
          <p>RENT</p>
        </Link>
        <Link href={"#"}>
          <p>INVEST</p>
        </Link>

        <p onClick={handleModal}>LOGIN</p>
      </div>
    </div>
  );
}

export default Navbar;
