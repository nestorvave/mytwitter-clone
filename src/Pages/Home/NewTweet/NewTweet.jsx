import React from 'react'

const NewTweet = () => {
  return (
    <main className='tweet-section flex-center' >
        <nav className='tweet-nav' >
            <button className='tweet-nav__button tweet-nav__button--cancel'>
                Cancel
            </button>
             <button className='tweet-nav__button button--primary'>
                Tweet
            </button>
        </nav>
        <section className='text-area-section '>
            <div className='profile' >
                <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*" alt=""  />
            </div>
            <textarea className='text-area-section__info' autoFocus placeholder='What´s happening?' id="" cols="30" rows="10"></textarea>
        </section>
    </main>
  )
}

export default NewTweet