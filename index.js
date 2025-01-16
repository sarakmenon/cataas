
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://cataas.com/cat');
      
      res.render("index.ejs", {
        catImage: response.request.res.responseUrl,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching cat image');
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  