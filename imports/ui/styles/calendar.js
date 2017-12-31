export default {
  calendar: {
    width: 350,
    maxWidth: "99%",
    margin: "auto",
    fontFamily: "Lato, sans-serif !important"
  },

  header: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 5
  },
  navIcon: {
    color: "#a4a4a4",
    border: "1px solid #f2f2f2",
    borderRadius: 2,
    width: 32,
    height: 25,
    padding: 0
  },

  month: {
    display: "inline-block",
    textAlign: "center",
    fontSize: 16,
    color: "#888888",
    width: 150,
    paddingTop: 2
  },

  row: {
    display: "flex",
    height: 39,
    fontSize: 14
  },

  dayName: {
    color: "#a4a4a4",
    fontWeight: "400",
    fontSize: 12,
    border: "none !important",
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  date: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#a4a4a4",
    borderRadius: "50%",
    margin: "1px 5px",
    paddingTop: "0px"
  },

  currentMonth: {
    color: "#585858"
  },

  isToday: {
    fontWeight: "700",
    color: "#585858"
  },

  hasEntry: {
    backgroundColor: "#ffacac",
    color: "#fff"
  }
};
