const app = require("express")();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) =>
  res.status(200).json({
    success: true,
    message: "API is live...",
  })
);

app.get("/date", (req, res) => {
  const currentDate = new Date();
  const gmtDate = currentDate.toGMTString();
  return res.status(200).json({
    success: true,
    message: gmtDate,
  });
});

app.all("*", (req, res) =>
  res.status(404).json({
    success: false,
    message: "Invalid route",
  })
);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

module.exports = app;
