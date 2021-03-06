export default {
  navbar: {
    height: 25,
    // width: "100%",
    margin: "0px !important",
    padding: "0px !important",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid #f2f2f2",
    width: "inherit",
    left: "0%",
    transform: "translateX(0%)"
  },

  icon: {
    color: "#dddddd",
    marginRight: "auto",
    cursor: "pointer"
  },

  brand: {
    marginTop: 15,
    margin: "auto",
    paddingLeft: 15
  },

  logo: {
    marginTop: 15,
    margin: "auto",
    paddingLeft: 15,
    color: "#FFACAC",
    fontSize: 16
  },

  navToggle: {
    marginLeft: "auto",
    display: "flex",
    cursor: "pointer",
    width: 40
  },

  toggleText: {
    fontSize: 12,
    color: "#999999",
    fontWeight: "400",
    width: 20,
    padding: "1px 5px 0px 0px",
    textAlign: "center"
  },

  toggleIndicators: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 8,
    marginTop: 2,
    width: 5,

    active: {
      width: 4,
      height: 5,
      backgroundColor: "#FFACAC",
      display: "inline-block",
      flexGrow: "1",
      borderRadius: "50%",
      margin: "2px 0px 2px 0px"
    },

    inactive: {
      width: 4,
      height: 5,
      backgroundColor: "#EDEDED",
      display: "inline-block",
      flexGrow: "1",
      borderRadius: "50%",
      margin: "2px 0px 2px 0px"
    }
  },

  collapse: {
    margin: "0px 0px 0px 0px"
  },

  listGroupItem: {
    border: "none",
    borderBottom: "1px solid #f2f2f2",
    borderTop: "1px solid #f2f2f2",
    color: "#848484",
    cursor: "pointer"
  },

  listPadding: {
    height: 50,
    border: "none"
  },

  link: {
    color: "#848484"
  }
};
