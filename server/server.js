import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
  origin: ["https://deploy-mern-frontend.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());
app.use("/record", records);

mongoose.connect('mongodb+srv://sachinsbaradkar:SJCtX2fKQJS30p19@cluster0.98z4i.mongodb.net/employees?retryWrites=true&w=majority&appName=Cluster0');
// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});