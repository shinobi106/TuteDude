import React from 'react'
import "./friends.scss"
import { Link } from 'react-router-dom';

export const Friends = () => {
  return (
    <div className='friends'>


       <div className='bread'>
            <span>UI/UX &gt; <Link className='link' to="/">Refer & Earn</Link> &gt; Friends Referred</span>
        </div>


        <div className='back'>
        <img src='/img/arrow.png' alt='arrow'/>
          <span><Link className='link' to="/">go back</Link></span>
        </div>

       <div className='referral'>
        <div className='code'>
                <h1>Your Referral Code</h1>
                    <div className='container'>
                        <span>EDCH54</span>
                    </div>
            </div>
        <div className='details'>
              <span>Wallet Balance</span>
                        <span className='price'>₹ 500</span>
              </div>
       </div>


       <div className='content'>
          <h1>Friends who enrolled<span>(3)</span></h1>
          <div className='slide'>
              <div className='card'>
                <div className='info'>
                  <span className='name'>Dhiraj Saxsena</span>
                  <span>14 Sep, 2022</span>
                </div>
                <div className='course'>
                  <span>Courses Enrolled(6)</span>
                  <div className='tags'>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Illustrator</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>MERN</div>
                    <div className='tag'>Java</div>
                  </div>
                </div>
                <div className='price'>
                  <span>Referral Amount</span>
                  <span className='pr'>₹185</span>
                </div>
              </div>
              <div className='card'>
                <div className='info'>
                  <span className='name'>Subhash Mishra</span>
                  <span>15 Sep, 2022</span>
                </div>
                <div className='course'>
                  <span>Courses Enrolled(23)</span>
                  <div className='tags'>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Illustrator</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>MERN</div>
                    <div className='tag'>Java</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>C++</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>

                  </div>
                </div>
                <div className='price'>
                  <span>Referral Amount</span>
                  <span className='pr'>₹485</span>
                </div>
              </div>
              <div className='card'>
                <div className='info'>
                  <span className='name'>Prafull Kumar</span>
                  <span>16 Sep, 2022</span>
                </div>
                <div className='course'>
                  <span>Courses Enrolled(23)</span>
                  <div className='tags'>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Illustrator</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>MERN</div>
                    <div className='tag'>Java</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Python</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>Photoshop</div>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>UI/UX</div>
                    <div className='tag'>UI/UX</div>
                  </div>
                </div>
                <div className='price'>
                  <span>Referral Amount</span>
                  <span className='pr'>₹485</span>
                </div>
              </div>
          </div>
          
       </div>

       <div className='tnc'>
        <span>Terms & Conditions</span>
       </div> 
       
    </div>
  )
}
