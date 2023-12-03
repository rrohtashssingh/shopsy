import React, { useState } from 'react'
import Rating from '../components/Rating';

const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>

            {/* desc and review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className='content lab-ul'>
                       {
                        ReviewList.map((review,i)=>(
                            <li key={i}>
                              <div className='post-thumb'>
                                <img src={review.imgUrl} alt="" />
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                    <div className="posted-on">
                                        <a href="#">{review.name}</a>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                                <div className="entry-content">
                                    <p>{review.desc}</p>
                                </div>
                              </div>
                            </li>
                        ))
                       }
                    </ul>

                    {/* add review filed */}
                    <div className="client-review">
                        <div className="review-form">
                            <h5>{reviwtitle}</h5>
                        </div>

                        <form className='row'>
                            <div className="col-md-4 col-12">
                                <input type="text" name='name' id="name" placeholder='full Name' />
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" name='email' id="name" placeholder='Your Email' />
                            </div>
                            <div className="col-md-4 col-12">
                               <div className="rating">
                                <span className='me-1'>Your Rating</span>
                                <Rating/>
                               </div>
                            </div>
                        <div className='col-md-12 col-12'>
                            <textarea name="message" id="message" rows="8" placeholder='Type Your Message'></textarea>
                        </div>

                        <div className="col-12">
                            <button type='submit' className='default-button'>
                               <span>Submit Review</span>
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
                
                  {/* description */}
                <div className="description">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore nostrum repudiandae eius ducimus temporibus cum et modi corrupti illo vero consectetur suscipit atque incidunt quas, quaerat minus, voluptates tenetur natus dolores magnam beatae earum dicta explicabo. Quas ab labore reiciendis repudiandae quidem aliquid doloremque dolorum rem consequuntur, velit consequatur voluptas facere sunt nostrum? Corrupti, adipisci possimus, aliquam id similique quae accusantium nulla placeat doloremque itaque tempora et a aliquid. Accusantium, laudantium quia ad porro quidem vitae? Voluptatum, temporibus animi. Perspiciatis fuga reprehenderit corrupti, quis repellat id pariatur. Nemo fugiat aliquam laudantium ipsum asperiores iste velit culpa minus fuga maxime.</p>

                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dolorem.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dolorem.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dolorem.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dolorem.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dolorem.</li>
                        </ul>
                    </div>

                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore nostrum repudiandae eius ducimus temporibus cum et modi corrupti illo vero consectetur suscipit atque incidunt quas, quaerat minus, voluptates tenetur natus dolores magnam beatae earum dicta explicabo. Quas ab labore reiciendis repudiandae quidem aliquid doloremque dolorum rem consequuntur, velit consequatur voluptas facere sunt nostrum? Corrupti, adipisci possimus, aliquam id similique quae accusantium nulla placeat doloremque itaque tempora et a aliquid. Accusantium, laudantium quia ad porro quidem vitae? Voluptatum, temporibus animi. Perspiciatis fuga reprehenderit corrupti, quis repellat id pariatur. Nemo fugiat aliquam laudantium ipsum asperiores iste velit culpa minus fuga maxime.</p>
                </div>
            </div>
            </div>

          
           
        </>
    )
}

export default Review