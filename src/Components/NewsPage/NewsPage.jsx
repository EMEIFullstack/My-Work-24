import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NewsPage({ image, title, para, date }) {
  return (
    <Card
                className="news-card"
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={title}
                  
                />

                <CardContent className="card-content">
                  <Typography
                    variant="body"
                    color="text.secondary"
                    gutterBottom
                    className="date"
                  >
                    {date}
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={600}
                    gutterBottom
                    
                  >
                    {title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="description"
                  >
                    {para}
                  </Typography>
                </CardContent>
              </Card>
  );
}
