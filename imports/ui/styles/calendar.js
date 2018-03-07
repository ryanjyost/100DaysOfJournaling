export default {
  calendar: {
    width: 320,
    maxWidth: "99%",
    margin: "auto",
    marginBottom: 20
  },

  header: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 10
  },
  navIcon: {
    color: "#d8d8d8",
    border: "1px solid #f2f2f2",
    borderRadius: 2,
    width: 32,
    height: 25,
    padding: 0
  },

  buttonShow: {
    display: "inline-block",
    color: "#ffacac",
    padding: "5px 10px",
    borderRadius: 20,
    cursor: "pointer",
    fontSize: 14
  },

  buttonHide: {
    display: "inline-block",
    color: "#d8d8d8",
    padding: "5px 10px",
    borderRadius: 20,
    cursor: "pointer"
  },

  month: {
    display: "inline-block",
    textAlign: "center",
    fontSize: 16,
    color: "#888888",
    width: 150,
    paddingTop: 2,
    fontWeight: "100"
  },

  row: {
    display: "flex",
    height: 39,
    fontSize: 16
  },

  dayName: {
    color: "#a4a4a4",
    fontWeight: "100",
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
    justifyContent: "center"
  },

  currentMonth: {
    color: "#8e7d7d",
    border: "1px solid #f2f2f2"
  },

  hasEntryTodayCurrentMonth: {
    fontWeight: "700",
    border: "1px solid #FFF0F0",
    backgroundColor: "#ffacac",
    color: "#fff"
  },

  hasEntryCurrentMonth: {
    backgroundColor: "#FFD7D7",
    color: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.3)"
  },

  hasEntryNotCurrentMonth: {
    backgroundColor: "#FFF0F0",
    color: "#a4a4a4"
  },

  isToday: {
    fontWeight: "700",
    color: "#8e7d7d",
    border: "1px solid #f2f2f2"
  },

  notCurrentMonth: {
    color: "#fff"
  }
};
