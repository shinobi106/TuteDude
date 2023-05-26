import React from 'react'
import "./home.scss";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home'>


        <div className='bread'>
            <span>UI/UX &gt; <Link className='link' to="/friends">Refer & Earn</Link></span>
        </div>

        

        <div className='referral'>
            <div className='balance'>
                <div className='info'>
                    <div className='details'>
                        <span>Referral Earning</span>
                        <span className='price'>₹ 2,500</span>
                    </div>
                    <div className='details mob'>
                    <span >Total Referrals</span>
                        <span className='price'>7</span>
                    </div>
                    <div className='details'>
                    <span>Wallet Balance</span>
                        <span className='price'>₹ 500</span>
                    </div>
                    <div className='details'>
                        <button>Withdraw Balance</button>
                    </div>
                </div>
                <div className='btn'>
                <button>Withdraw Balance</button>
                </div>
            </div>
            <div className='code'>
                <h1>Your Referral Code</h1>
                <div className='gradient'>
                    <div className='container'>
                        <span>EDCH54</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='features'>
            <h1>How does it work ?</h1>
            <div className='content'>
                <div className='feature'>
                    <div className='image'>
                        <img src='/img/people.png'/>
                    </div>
                    <div className='info'>
                        <h3>Invite your Friends</h3>
                        <span>Share the link tutedude.com with your friends</span>
                    </div>
                </div>

                <div className='feature'>
                    <div className='image'>
                        <img src='/img/money.png'/>
                    </div>
                    <div className='info'>
                        <h3>You get ₹200 as referral money</h3>
                        <span>On total purchase the friend makes, into your wallet</span>
                    </div>
                </div>

                <div className='feature'>
                    <div className='image'>
                        <img src='/img/wallet.png'/>
                    </div>
                    <div className='info'>
                        <h3>Transfer money from wallet</h3>
                        <span>When the wallet balance reaches ₹200 or more, you can withdraw it</span>
                    </div>
                </div>

                <div className='feature'>
                    <div className='image'>
                        <img src='/img/tag.png'/>
                    </div>
                    <div className='info'>
                        <h3>Friend purchases any course</h3>
                        <span>Using your REFERRAL CODE in the payments page</span>
                    </div>
                </div>

                <div className='feature'>
                    <div className='image'>
                        <img src='/img/discount.png'/>
                    </div>
                    <div className='info'>
                        <h3>Your Friend gets ₹200 Off</h3>
                        <span>On his overall fee on successful purchase using your referral code</span>
                    </div>
                </div>
            </div>
        </div>


        <div className='end'>
            <h1><Link className='link' to="/friends">Friends Who Enrolled</Link></h1>
            <h1>Terms & Conditions</h1>
        </div>

    </div>
  )
}
