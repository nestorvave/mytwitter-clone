import React from 'react'
import Like from '../../../Images/like.svg'
import Unlike from '../../../Images/unlike.svg'

const Tweet = () => {
  return (
    <main className='tweet' >
        <aside className='tweet__image' >
            <img className='tweet__image--userPP' src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*" alt=""  />
        </aside>
        <section className='about' >
            <p className='about__profile' >@Jnestah_</p>
            <p className='about__story' >
            Alex Iwobi secures a big three points for Everton in the 99th minute 💥
            </p>
        </section>
        <section className='action' >
            <div className='action__svg' >
                <img src={Unlike} alt=""  />
                <p>2</p>
            </div>
            <div className='action__svg' >
                <img src={Like} alt=""  />
                <p>5</p>
            </div>
        </section>

    </main>
  )
}

export default Tweet