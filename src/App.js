import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-01-06&sortBy=publishedAt&apiKey=12914c6f31dd437caa3fed7c6a13ff1f')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
{
news.length === 0 ? <Spinner animation="border" /> :    
<Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>}
    </div>
  );
}

export default App;
