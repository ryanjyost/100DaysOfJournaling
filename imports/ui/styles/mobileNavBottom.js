export default {
  navbar: {
    marginTop: 40,
    marginBottom: 0,
    padding: "0px"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexFlow: "row nowrap",
    height: 30
  },

  navItem: {
    textAlign: "center",
    flex: "1",
    width: "32%",
    fontSize: 11,
    border: "1px solid #f2f2f2",
    borderBottom: "1px solid #f2f2f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    active: {
      textAlign: "center",
      flex: "1",
      width: "32%",
      fontSize: 11,
      border: "1px solid #f2f2f2",
      borderBottom: "2px solid #FFACAC",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "500"
    }
  },

  navLink: {
    color: "#a4a4a4",
    width: "100%"
  }
};
