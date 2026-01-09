import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"

export default function InfoBox({info}) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwcmluZyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={IMG_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <div>Tempreture = {info.temp}&deg;C </div>
            <div>Humidity = {info.humidity}</div>
            <div>Maximum Temp = {info.tempMax}&deg;C</div>
            <div>Minimum Temp = {info.tempMin}&deg;C</div>
            <div>The weather can be described as <i>{info.weather}</i> feels like <i>{info.feelLike}&deg;</i></div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
