import '../styles/news.css';

export default function News() {
  return (
    <div className="news-container">
      
        <div className='news-main'>
            <div className='news-main-image'></div>
            <div className='news-main-content'>
              <p>
                <span className='news-main-title'>Novedades</span>
              </p>
              <p className='news-main-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper ullamcorper lorem, quis tincidunt libero. Nullam vestibulum lobortis neque. Quisque dapibus quam in tincidunt fermentum. Morbi vehicula at ipsum vitae malesuada. Praesent at imperdiet justo. Maecenas fermentum metus risus, non molestie velit imperdiet vitae. Suspendisse pellentesque finibus ligula ac dignissim. Suspendisse a erat vel magna bibendum tincidunt in ut justo. Donec imperdiet nisl dolor, in laoreet tellus tincidunt ac. Integer sodales blandit eros, sed efficitur justo varius quis. Donec nec lectus accumsan, efficitur metus at, tincidunt elit. Nulla faucibus massa laoreet commodo sodales.

Aliquam euismod suscipit eros. Pellentesque a metus eget enim bibendum venenatis. Curabitur suscipit tempor libero eget placerat. Nunc porttitor, urna a suscipit feugiat, ex ipsum pretium ligula, vel consectetur nisi lorem et enim. Vestibulum vitae urna rhoncus ipsum viverra rhoncus. Pellentesque non dignissim eros. Etiam pulvinar augue sed urna convallis euismod. Integer quis semper ipsum, id eleifend purus. Nam varius convallis sem vel ultrices. Ut aliquam nisl leo. Integer ac enim et arcu varius volutpat. Integer non ex elit. Praesent tincidunt rhoncus turpis, vitae sagittis tellus tincidunt eu. Suspendisse molestie risus a laoreet consequat. Duis blandit sapien nisl, ac porttitor tellus facilisis vel. Quisque et risus in ante ultrices imperdiet.
              </p>
            </div>
        </div>
        <div className='image-stack'>
            <div className='image-stack-item' id='img-1'></div>
            <div className='image-stack-item' id='img-2'></div>
            <div className='image-stack-item' id='img-3'></div>
            <div className='image-stack-item' id='img-4'></div>
            <div className='image-stack-item' id='img-5'></div>
            <div className='image-stack-item' id='img-6'></div>
        </div>
    </div>
  );
}