export const red: any = "#F44336";
export const green: any = "#4CAF50";
export const blue: any = "#2196F3";

export const styles: object = {
  title: {
    textAlign: "center",
    backgroundColor: "#E0E0E0",
    "&:hover": {
      backgroundColor: "#BDBDBD"
    }
  },
  area: {
    width: "100%",
    height: "10rem",
    color: "white",
    backgroundColor: data => data.area.backgroundColor
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem"
  },
  redButton: createButtonStyle(red),
  greenButton: createButtonStyle(green),
  blueButton: createButtonStyle(blue)
};

function createButtonStyle(color: string): object {
  return {
    flex: "auto",
    "&:hover": { color }
  };
}
