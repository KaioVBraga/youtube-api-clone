import app from "./app";

app.listen(process.env.PORT || 3333, () =>
  console.log(`Hearing at port ${process.env.PORT || 3333}`)
);
