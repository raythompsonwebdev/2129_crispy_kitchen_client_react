import React from 'react';
import { useParams } from 'react-router-dom';
import EventNews from '../components/News/EventNews.js';
import Newsletter from '../components/NewsLetter.js';
import CommentSection from '../components/Comments/CommentSection.js';

function NewsDetails({ news }) {
  const { id } = useParams();

  //const [singleNews, setSingleNews] = useState([]);
  const product = news.filter((item) => item.id === id);

  const [item] = product;

  const otherProducts = news
    .filter((item) => item.banner !== 'featured')
    .map((item) => <EventNews item={item} key={item.id} />);

  return (
    <main>
      <header className="site-header site-news-detail-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 style={{ textAlign: 'center' }}>{item.title}</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="news-detail section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <img
                src={item.image}
                className="img-fluid news-detail-image"
                alt={item.alt}
                style={{ display: 'block', margin: 'auto' }}
              />

              <div className="col-lg-10 col-10 mx-auto mt-5">
                <h4 className="mb-3">{item.title}</h4>

                <p>{item.text}</p>

                <ul className="list">
                  {item.list.map((listitem, indx) => {
                    return (
                      <li className="list-item" key={indx}>
                        {listitem}
                      </li>
                    );
                  })}
                </ul>

                <p>{item.text}</p>

                <div className="ratio ratio-16x9 my-5">
                  <iframe
                    width="560"
                    height="315"
                    src={item.youtubelink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>

                <p>
                  Crispy Kitchen is free Bootstrap 5 HTML template provided by
                  Tooplate. You are free to use this layout for commercial
                  purposes. You are NOT allowed to redistribute the template ZIP
                  file on any template donwnload website. Please{' '}
                  <a href="https://www.tooplate.com/contact">contact us</a> for
                  more information.
                </p>

                <h5 className="mt-4 mb-3">{item.title}</h5>

                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommentSection />

      <section className="related-news section-padding bg-white">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-lg-5 mb-4">Related News</h2>
            {otherProducts}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}

export default NewsDetails;
